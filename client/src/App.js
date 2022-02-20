import React, { useState } from 'react';
import axios from 'axios'
import logo from './logo.svg';
import './App.css';

const App = () => {

  const [file, setfile] = useState(null)

  const onFormSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData();
    formData.append('photo', file)
    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    }

    const url = "http://localhost:3001/user/upload"
    axios.post(url, formData, config).then((response) => {
      alert('Image Uploaded Succesfully')
    }).catch((err) => {
      console.log(err)
    })

  }

  const onInputChange = (e) => {
    setfile(e.target.files[0])
  }

  return (
    <div className="App">
      <form onSubmit={onFormSubmit}>
        <h1>Simple File Upload</h1>
        <input type='file' name='photo' onChange={onInputChange} />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}

export default App;
