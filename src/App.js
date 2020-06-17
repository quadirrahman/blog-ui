import React from 'react'
import {BrowserRouter, Route, Link} from 'react-router-dom' 
import Home from './components/Home'
import UsersList from './components/UsersList'
import PostsList from './components/PostsList'
import UserShow from './components/UserShow'
import PostShow from './components/PostShow'



function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>Blog UI</h1>
        <Link to="/">Home</Link> |
        <Link to="/users">Users</Link> |
        <Link to="/posts">Posts</Link> |

        <Route path="/" component={Home} exact={true}/>
        <Route path="/users" component={UsersList} exact={true} />
        <Route path="/users/:id" component={UserShow}  />

        <Route path="/posts" component={PostsList} exact={true} />
        <Route path="/posts/:id" component={PostShow} />
        
        
      </div>
    </BrowserRouter>
  )
}

export default App
