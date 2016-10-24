import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Layout extends Component {
  render () {
    return (
      <div className="container">
        <div className="row">
          <Link to="/" className="appTitle" onlyActiveOnIndex><h1>Blogish</h1></Link>
        </div>
        <div className="row">
          {this.props.children}
        </div>
      </div>
    )
  }
}
