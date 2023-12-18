import React from 'react'
import './file.css';

function File() {
  return (
    <React.Fragment>
        <div className='header'>
            Welcome to the file Uploading Page.

        </div>
        <div class="upload mb-3">
            <label for="formFile" class="form-label">Upload Your File Here</label>
            <input class="form-control" type="file" id="formFile"/>
        </div>
  </React.Fragment>
  )
}

export default File
