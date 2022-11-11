import React from 'react'
import Favorite from './Favorite'
import Favoritebox from './Favoritebox'
import './UserFavorite.css'
const UserFavorite = () => {
  console.log('hello im here userfavorite')
  return (
    <div className="user-favorite-main">
      <Favorite />
      {/* <Favoritebox /> */}
    </div>
  )
}

export default UserFavorite
