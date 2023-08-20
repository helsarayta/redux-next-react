'use client'
import React, { useEffect } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import fetchDataUser from '../redux/user/userAction'

export const listUserComponent = ({state}) => {
    // const data = useSelector(state => state.user.users)
    const dispatch = useDispatch()

    // useEffect(() => {
    //     dispatch(() => fetchDataUser())
    // },[])

    
  return (
    <div>
        <h4 style={{color:"green"}}>listUserEmail</h4>
        {
            state.map((data, idx) => <p key={idx}>{data.email}</p>)
        }

    </div>
  )

}

const mapStateToProps = state => {
    return {
        state:state.user.users
        
    }
}

export default connect(mapStateToProps)(listUserComponent)