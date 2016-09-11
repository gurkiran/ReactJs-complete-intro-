const redux = require('redux')
const reactRedux = require('react-redux')

const SET_SEARCH_TERM = 'setSearchTerm' // name of the action type to be used to set states
const initialState = {
  searchTerm: ''
}

const rootReducer = (state=initialState, action) => {
  switch(action.type) {
    case SET_SEARCH_TERM:
      return reduceSearchTerm(state, action) // returns a new state
    case default:
      return state // else return the previous state # has to return a state
  }
}

const reduceSearchTerm = (state, action) => {   // creating a child reducer to be invoked from root reducer
  const newState = {}
  Object.assign(newState, state, {searchTerm: action.value})
  return newState
}

const store = redux.createStore(rootReducer) // creating a store

const mapStateToProps = (state) {
  return { searchTerm: state.searchTerm} // this.props.searchTerm ( usage in React Component )
}

const mapDispatcherToProps = (dispatch) => {
  return {
    setSearchTerm (searchTerm) {
      dispatch({ type:SET_SEARCH_TERM, value: searchTerm}) // this.props.setSearchTerm('newSearchString')
    }
  }
}

const connector = reactRedux.connect(mapStateToProps, mapDispatcherToProps) // creating a wrapper for a component

module.exports = {connector, store}
