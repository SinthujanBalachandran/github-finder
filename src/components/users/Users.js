import React, { Component } from "react"
import UserItem from "./UserItem"

const divStyle={
    display: 'grid',
    gridTemplateColumns: 'repeat(3,1fr)',
    gridGap: '1rem'
    
}
class Users extends Component{
    
    state={
        users:[
            {
                id:'1',
                login:'Sinthu',
                avatar_url:'https://avatars0.githubusercontent.com/u/1?v=4',
                html_url: 'https://github.com/sinthujanBalachandran'

            },
            {
                id:'2',
                login:'sasa',
                avatar_url:'https://avatars0.githubusercontent.com/u/2?v=4',
                html_url: 'https://github.com/sasa'

            },{
                id:'3',
                login:'luckie',
                avatar_url:'https://avatars0.githubusercontent.com/u/3?v=4',
                html_url: 'https://github.com/luckie'

            }
        ]
    }
    
            render(){
        return(
            <div style={divStyle}>
                {this.state.users.map(user=>(
            <UserItem key={user.id} user={user}/> 
                ))}
            </div>
        )
    }
}

export default Users