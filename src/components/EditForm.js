import React, { useState } from 'react'

const EditForm = ({ image, editImage, toggleForm }) => {
  const [title, setTitle] = useState(image.title)
  const [caption, setCaption] = useState(image.caption)

  const handleSubmit = e => {
    e.preventDefault();

    fetch('http://localhost:3001/images/' + image.id, {
      method: "PATCH",
      headers: {
        'Accept': "application/json",
        'Content-Type': "application/json"
      },
      body: JSON.stringify({ title, caption })
    })
      .then(resp => resp.json())
      .then(data => {
        editImage(data);
        toggleForm()
      })
  }

  return (
    <>
      <hr />
      <h4>Edit { image.title }</h4>
      <form onSubmit={ handleSubmit }>
        <div>
          <label htmlFor="title">Title: </label>
          <input type="text" name="title" id="title" value={ title } onChange={ e => setTitle(e.target.value) } />
        </div>
        <div>
          <label htmlFor="caption">Caption: </label>
          <input type="text" name="caption" id="caption" value={ caption } onChange={ e => setCaption(e.target.value) } />
        </div>

        <input type="submit" value="Edit Image" />
      </form>
      <br />
      <hr />
    </>
  )
}

export default EditForm