import React from 'react'
import userData from './userData'

export default function Profile({ userData }) {
    return (
        <div className='container'>
            <img className='profilePic' src={userData.image} alt={userData.playerName} />
            <div className='profileDetails'>
                <h1 className='playerName'>{userData.playerName}</h1>
                <p className='level lineItem'>{userData.level}</p>
                <div className='lineItem'>
                    <span className='sport '>{userData.sport} &#8226; </span>
                    <span className='team'>{userData.team}</span>
                </div>
                <div className='icons'>
                    <i className='fas fa-shield-alt'></i> 
                    <p className='greenBar'></p>
                </div>
            </div>
        </div>
    )
}

