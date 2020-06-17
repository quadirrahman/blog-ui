import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class PostsList extends React.Component {
    constructor() {
        super()
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        console.log('componentDidMount PostsList')
        // get data on load of webpage
        const url = "https://jsonplaceholder.typicode.com/posts"
        axios.get(url)
            .then( (response) => {
                const posts = response.data
                this.setState({posts})
            })
            .catch( (err) =>{
                console.log(err)
            })  
    }

    render() {
        return (
            <div>
                <h1>Total Posts - {this.state.posts.length}</h1>
                <ul>
                {
                    this.state.posts.map(post=>{
                        return <li><Link to={`/posts/${post.id}`}>{post.title}</Link></li>
                    })
                }
                </ul>
            </div>
        )
    }
    
}

export default PostsList