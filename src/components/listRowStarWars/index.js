import React from 'react'

const ListRowStarWars = ({ element }) => {
  return (
    <div>
      <p>nom: {element.name}</p>
      <p>taille: {element.height} cm</p>
    </div>
  )
}

export default ListRowStarWars
