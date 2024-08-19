import React from 'react'
import "./Profile.css";
import ThemeContext from "../Components/ThemeContext";
import { useContext } from 'react';

const Profile = ({id,name,age,job,updateVideo,dispatch}) => {
  const theme = useContext(ThemeContext);
  return (
    <div>
    <h1>{id}{name}{age}{job}</h1>
    <button className={theme.mode} onClick={()=>dispatch({type:'DELETE',payload:id})}>Delete</button>
    <button className={theme.mode}  onClick={()=>updateVideo(id)}>Update</button>
    </div>
  )
}

export default Profile
