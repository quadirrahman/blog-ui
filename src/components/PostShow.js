import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class PostShow extends React.Component {
    constructor(){
        super()
        this.state = {
            post:{},
            user:{},
            comments:[]
        }
    }

    componentWillMount(){
        console.log('posts', this.props)
        const id = this.props.match.params.id
        //get the posts title and body by id
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response)=>{
            const post = response.data
            this.setState({post})
            //get user by id
            axios.get(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
            .then((response)=>{
                const user = response.data
                this.setState({user})
            })
        })

        // get all comments
        axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then((response) => {
            const comments = response.data
            this.setState({comments})
        })
    
    }

    
    render() {
        console.log('render PostShow')
        return (
            <div>
                <h1>User Name: {this.state.user.name}</h1>
                <h1>Title: {this.state.post.title}</h1>
                <h4>Body: {this.state.post.body}</h4>
                <hr/>
                <h1>COMMENTS</h1>
                
                <ul>
                    {
                        
                        this.state.comments.map(comment=>{
                            return <li>{comment.body}</li>
                        })
                    }

                </ul>
            </div>
        )
    }
}
export default PostShow