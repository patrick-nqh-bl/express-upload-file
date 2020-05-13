import React from 'react';

const FileUpload = () => {
  return (
    <>
      <form>
        <div className='custom-file'>
          <input type='file' id='customFile' className='custom-file-input' />
          <label className='custom-file-label' htmlFor='customFile'>
            Choose file
          </label>
        </div>

        <input
          type='submit'
          value='Upload'
          className='btn btn-primary btn-block mt-4'
        />
      </form>
    </>
  );
};

export default FileUpload;
