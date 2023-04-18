import React from 'react'

export default function Candidato({user}) {
  return (
    <div className='usuario'>
        <div className='foto'>
            <img src={user.picture.large} alt="" />
        </div>
        <div className='datos'>
            <h2>{user.name.title} {user.name.first} {user.name.last}</h2>
            <p>Email:<a href="">{user.email}</a></p>
            <p>Phone: {user.phone}</p>
            <p>Ubicacion: {user.location.city}</p>
        </div>
        <div className='botones'>

        </div>
    </div>
  )
}
