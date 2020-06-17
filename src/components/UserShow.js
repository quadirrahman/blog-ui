import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class UserShow extends React.Component {
    constructor() {
        super()
        this.state = {
            user: {},
            posts: []
        }
    }
    componentDidMount(){
        console.log('cDM UserShow', this.props)
        const id = this.props.match.params.id

        // Get user by id, store in state 
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((response)=>{
                const user = response.data
                this.setState({user})
            })
        
        // Get all posts of the user, by id 
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
            .then(response=>{
                const posts = response.data
                this.setState({posts})
            })
    }
    render(){
        console.log('UserShow', this.props)
        
        return (
            <div>   
                <h1>USER NAME : {this.state.user.name}</h1>
                <h3>Posts Written by {this.state.user.name}</h3>
                <ul>
                    {
                        this.state.posts.map(post=>{
                            return <li><Link to={`/posts/${post.id}`}>{post.title}</Link></li> // to do
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default UserShow