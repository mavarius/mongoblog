import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import Layout from './components/Layout'
import HomePage from './components/HomePage'
import BlogPost from './components/BlogPost'
import NewPost from './components/NewPost'

render(
  <Router history={browserHistory}>

    <Route path="/" component={Layout}>
      <IndexRoute component={HomePage} />
      <Route path="/:id" component={BlogPost} />
      <Route path="/newpost" component={NewPost} />
    </Route>

  </Router>,
  document.getElementById('root')
)
