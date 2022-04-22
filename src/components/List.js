import React from 'react'
import ListCard from './ListCard'

const List = ({ images, editImage }) => {

  const listCards = images.map(image => <ListCard key={ image.id} image={ image } editImage={ editImage } />)
  return (
    <div>
      { listCards }
    </div>
  )
}

export default List