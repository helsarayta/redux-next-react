'use client'
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import ListUserComponent from './listUserComponent'
import UserNameComponent from './UserNameComponent'
import axios from 'axios'
import fecthData from '../redux/user/userAction'


const userComponent = ({state,fecthUser}) => {

console.log("STATE => ", state)
    
   
    useEffect(() => {
        // fetchUser()
        fecthUser()
    },[])
    

  return (
    <div>
        <h3>Data User</h3>
        {
            state.map((data, idx) => <p key={idx}>{data.name}</p>)
        }


        <ListUserComponent/>
        <UserNameComponent/>
        
        </div>

        
    
  )
}

const mapStateToProps = state => {
    return {
        state:state.user.users
        
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fecthUser: () => {
            dispatch(fecthData.fetchhUserRequest())
            axios.get('https://jsonplaceholder.typicode.com/users').then(resp => {
                    dispatch(fecthData.fetchhUserSuccess(resp.data))
            })
            .catch(e => {
                dispatch(fecthData.fetchhUserFailure(e.message))
            })
            
           
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(userComponent)

 
  
  
  
  
  
  
