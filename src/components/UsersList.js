import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class UsersList extends React.Component {
    constructor(){
        super()
        this.state ={
            users: []
        }
    }
    componentDidMount(){
        console.log('cDM UsersList')
        // get data on load of webpage
        const url = "https://jsonplaceholder.typicode.com/users"
        axios.get(url)
            .then( (response) => {
                // console.log(response)
                const users = response.data
                this.setState({users})
            })
            .catch( (err) =>{
                console.log(err)
            })  
    }
    render() {
        return (
            <div>
                <h2>Listing Users - {this.state.users.length}</h2>
    
                <ul>
                {
                    this.state.users.map(user=>{
                        return <li key = {user.id}> <Link to={`/users/${user.id}`}> {user.name} </Link></li>
                    })
                }
                </ul>
            </div>
        )
    }
}

export default UsersList