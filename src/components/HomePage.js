import React, { Component } from 'react'

import BlogStore from '../stores/BlogStore'
import BlogActions from '../actions/BlogActions'

import BlogPost from './BlogPost'
import BlogPostList from './BlogPostList'

export default class HomePage extends Component {
  constructor () {
    super()

    this.state = {
      blogposts: BlogStore.getAll()
    }

    this._onChange = this._onChange.bind(this)
  }

  componentWillMount () {
    BlogStore.on('CHANGE', this._onChange)
    BlogActions.getAll()
  }

  componentWillUnmount () {
    BlogStore.removeListener('CHANGE', this._onChange)
  }

  _onChange () {
    this.setState({
      blogposts: BlogStore.getAll()
    })
  }

  _addNewChatroom (e) {
    e.preventDefault()

    let newPost = {
      newPost: e.target.newPost.value.toString(),
      postBody: e.target.postBody.value.toString()
    }

    BlogActions.addChatroom(newPost)
    BlogActions.getAll()
  }

  render () {
    return (
      <div>
        <div className="row">
          <form onSubmit={(e) => this._addNewChatroom(e)}>
            <input id="newPost" type="text" placeholder="room name" />
            <input id="postBody" type="text" placeholder="postBody" />
            <button type="submit">Add New Chatroom</button>
          </form>
        </div>

        <div className="row">
          <BlogPostList {...this.state} />
        </div>

        <div className="row">
          {this.props.children}
        </div>
      </div>
    )
  }
}
