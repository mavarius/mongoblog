import React, { Component } from 'react'

import BlogStore from '../stores/BlogStore'
import BlogActions from '../actions/BlogActions'
import InterfaceActions from '../actions/InterfaceActions'

import BlogPostList from './BlogPostList'

import Modal from './Modal'

export default class HomePage extends Component {
  constructor () {
    super()

    this.state = {
      blogposts: BlogStore.getAll()
    }

    this._onChange = this._onChange.bind(this)
  }

  componentWillMount () {
    BlogStore.startListening(this._onChange)
    BlogActions.getAll()
  }

  componentWillUnmount () {
    BlogStore.stopListening(this._onChange)
  }

  _onChange () {
    this.setState({
      blogposts: BlogStore.getAll()
    })
  }

  _openModal () {
    const { section } = this.props
    InterfaceActions.modalSwitch(true, section)
  }

  render () {
    console.log('this.state.blogposts: ', this.state.blogposts)
    return (
      <div>
        <div className="row">
          <button to="/newpost" className="btn btn-info col-xs-12 col-sm-2" onClick={() => this._openModal()}>New Post</button>
        </div>
        <BlogPostList {...this.state} />
        <Modal />
      </div>
    )
  }
}
