import AppDispatcher from '../AppDispatcher'

const ServerActions = {
  receiveAll (data) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_ALL',
      payload: data
    })
  },

  receiveBlogPost (data) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_BLOGPOST',
      payload: data
    })
  },

  registerDelete () {
    AppDispatcher.dispatch({
      type: 'REGISTER_DELETE'
    })
  }
}

export default ServerActions
