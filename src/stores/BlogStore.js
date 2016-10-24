import { EventEmitter } from 'events'
import AppDispatcher from '../AppDispatcher'

let _allBlogPosts = []

let _currentPost = {}

class BlogStore extends EventEmitter {
  constructor () {
    super()

    AppDispatcher.register(action => {
      switch (action.type) {
        case 'RECEIVE_ALL':
          _allBlogPosts = action.payload
          this.emit('CHANGE')
          break
        case 'RECEIVE_BLOGPOST':
          _currentPost = action.payload
          this.emit('CHANGE')
          break
        case 'REGISTER_DELETE':
          this.emit('CHANGE')
          break
      }
    })
  }

  startListening (cb) {
    this.on('CHANGE', cb)
  }

  stopListening (cb) {
    this.removeListener('CHANGE', cb)
  }

  getAll () {
    return _allBlogPosts
  }

  getPost () {
    return _currentPost
  }

}

export default new BlogStore()
