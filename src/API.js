import axios from 'axios'
import ServerActions from './actions/ServerActions'

const API = {
  getAll () {
    axios.get('/api/blogposts')
      .then(res => {
        ServerActions.receiveAll(res.data)
      })
      .catch(console.error)
  },

  getBlogPost (id) {
    axios.get(`/api/blogposts/${id}`)
      .then(res => {
        ServerActions.receiveBlogPost(res.data)
      })
      .catch(console.error)
  },

  addBlogPost (newPost) {
    axios.post('/api/blogposts', newPost)
      .then(res => {
        ServerActions.receiveAll(res.data)
      })
      .catch(console.error)
  },

  updateBlogPost (id) {
    axios.put(`/api/blogposts/${id}`)
      .then(res => {
        ServerActions.receiveAll(res.data)
      })
      .catch(console.error)
  },

  deleteBlogPost (id) {
    axios.delete(`/api/blogposts/${id}`)
      .then(res => {
        ServerActions.receiveAll(res.data)
      })
      .catch(console.error)
  }
}

export default API
