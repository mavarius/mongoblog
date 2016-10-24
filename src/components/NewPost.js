import React from 'react'
import { browserHistory } from 'react-router'

import BlogActions from '../actions/BlogActions'
import InterfaceActions from '../actions/InterfaceActions'

let _newPost = (e) => {
  e.preventDefault()

  let newPost = {
    title: e.target.title.value.toString(),
    author: e.target.author.value.toString(),
    postBody: e.target.postBody.value.toString()
  }

  BlogActions.addBlogPost(newPost)
  InterfaceActions.modalSwitch(false)
}

let cancelForm = (e) => {
  InterfaceActions.modalSwitch(false)
}

const NewPost = () => (
  <div className="row">
    <form className="postForm" onSubmit={(e) => _newPost(e)}>
      <div className="form-group row">
        <label htmlFor="title" className="col-xs-2 col-form-label">Title:</label>
        <div className="col-xs-10">
          <input className="form-control" type="text" id="title" />
        </div>
      </div>

      <div className="form-group row">
        <label htmlFor="author" className="col-xs-2 col-form-label">author:</label>
        <div className="col-xs-10">
          <input className="form-control" type="text" id="author" />
        </div>
      </div>

      <div className="form-group row">
        <label htmlFor="postBody" className="col-xs-2 col-form-label">body:</label>
        <div className="col-xs-10">
          <textarea className="form-control" type="text" id="postBody" />
        </div>
      </div>

      <button className="btn btn-success col-xs-6 col-md-2" type="submit">Post</button>
    </form>
    <button className="btn btn-default col-xs-6 col-md-2" onClick={() => cancelForm()}>cancel</button>
  </div>
)

export default NewPost
