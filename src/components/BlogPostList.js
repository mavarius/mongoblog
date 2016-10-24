import React from 'react'

import BlogActions from '../actions/BlogActions'

let _deletePost = (id) => {
  BlogActions.deleteBlogPost(id)
}

const BlogPostList = ({ blogposts }) => (
  <div>
    {blogposts.map(blogpost => {
      return (
        <div key={blogpost._id} className="row">
          <div className="blogPost col-xs-12">
            <h4>{blogpost.title}</h4>
            <h6>{blogpost.author}</h6>
            <h5>{blogpost.date}</h5>
            <div dangerouslySetInnerHTML={() => {
              let __html = blogpost.postBody
              return __html
            }}></div>
            <button className="btn btn-warning">Edit</button>
            <button className="btn btn-danger" onClick={() => { _deletePost(blogpost._id) }}>Delete</button>
          </div>
        </div>
      )
    })}
  </div>
)

export default BlogPostList
