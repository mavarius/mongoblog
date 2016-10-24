import API from '../API'
// import AppDispatcher from '../AppDispatcher'

const BlogActions = {
  getAll () {
    API.getAll()
  },

  getBlogPost (id) {
    API.getBlogPost(id)
  },

  addBlogPost (newPost) {
    API.addBlogPost(newPost)
  },

  updateBlogPost (id) {
    API.updateBlogPost(id)
  },

  deleteBlogPost (id) {
    API.deleteBlogPost(id)
  }
}

export default BlogActions
