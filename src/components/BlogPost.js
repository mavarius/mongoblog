import React, { Component } from 'react'
import moment from 'moment'

import BlogStore from '../stores/BlogStore'
import BlogActions from '../actions/BlogActions'

import MessageList from './MessageList'

export default class BlogPost extends Component {
  constructor () {
    super()

    this.state = {
      chatroom: BlogStore.getChatroom()
    }

    this._onChange = this._onChange.bind(this)
  }

  componentWillMount () {
    BlogStore.on('CHANGE', this._onChange)
    BlogActions.getChatroom(this.props.params.id)
  }

  componentWillUnmount () {
    BlogStore.removeListener('CHANGE', this._onChange)
  }

  _onChange () {
    this.setState({
      chatroom: BlogStore.getChatroom()
    })
  }

  _newMessage (e) {
    e.preventDefault()

    let newMessage = {
      body: e.target.newMessage.value.toString(),
      author: e.target.author.value.toString()
    }

    BlogActions.addMessage(this.props.params.id, newMessage)
  }

  render () {
    console.log('this.state.chatroom: ', this.state.chatroom.messages)

    return (
      <div>
        <MessageList {...this.state.chatroom} />
        <form onSubmit={(e) => this._newMessage(e)}>
          <input id="newMessage" type="text" placeholder="message" />
          <input id="author" type="text" placeholder="author" />
          <button type="submit">Send Message</button>
        </form>
      </div>
    )
  }
}
