import API from '../API'
// import AppDispatcher from '../AppDispatcher'

const BlogActions = {
  getAll () {
    API.getAll()
  },

  getChatroom (id) {
    API.getChatroom(id)
  },

  addChatroom (newRoom) {
    API.addChatroom(newRoom)
  },

  addMessage (id, newMessage) {
    API.addMessage(id, newMessage)
  }
}

export default BlogActions
