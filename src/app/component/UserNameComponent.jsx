'use client'
import React from "react";
import { useSelector } from "react-redux";

const UserNameComponent = () => {
  const username = useSelector(state => state.user.users);

  return (
    <div>
      <h4 style={{color:"red"}}>UserNameComponent</h4>
      {username.map((data, idx) => (
        <p key={idx}>{data.username}</p>
      ))}
    </div>
  );
};

export default UserNameComponent;
