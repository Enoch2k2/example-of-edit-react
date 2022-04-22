import React, { useState, useEffect } from 'react';
import List from "./components/List";



function App() {
  const [ images, setImages ] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/images')
      .then(resp => resp.json())
      .then(data => setImages(data))
  }, [])

  const editImage = image => {
    const copyImages = [...images];
    const oldImage = images.find(img => img.id === image.id)
    const index = images.indexOf(oldImage);
    copyImages.splice(index, 1, image)
    setImages(copyImages);
  }

  return (
    <div className="App">
      <h1>Edit Practice</h1>
      <List images={ images } editImage={ editImage } />
    </div>
  );
}

export default App;
