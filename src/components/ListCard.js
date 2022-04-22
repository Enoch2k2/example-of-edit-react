import React, { useState } from 'react'
import EditForm from './EditForm';

const ListCard = ({ image, editImage }) => {

  const [showForm, setShowForm] = useState(false);

  const toggleForm = e => {
    setShowForm(!showForm)
  }

  return (
    <div>
      <h3>{ image.title }</h3>
      <p>{ image.caption }</p>
      { showForm ? <EditForm image={ image } editImage={ editImage } toggleForm={ toggleForm } /> : null }
      <button onClick={ toggleForm }>{ showForm ? 'Cancel' : 'Edit'}</button>
    </div>
  )
}

export default ListCard