'use client'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import fetchDataUser from '../redux/user/userAction'
import { connect } from 'react-redux'
import ListUserComponent from './listUserComponent'
import UserNameComponent from './UserNameComponent'


const userComponent = ({state, fetchUser}) => {
   
    useEffect(() => {
        fetchUser()
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
        fetchUser: () => dispatch(fetchDataUser())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(userComponent)

 
  
  
  
  
  
  
