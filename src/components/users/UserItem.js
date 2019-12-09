import React from "react"


const UserItem = ({user: {login,avatar_url,html_url}}) =>{
     
        return(
            <div className="card text-center"> 
            <img src={avatar_url} className='round-img'style={{width:'60px'}}></img>
        <h2>{login}</h2>
        <a href={html_url} className='btn btn-dark btn-sm my-1'>More</a>
            </div>
        )
    
} 
export default UserItem