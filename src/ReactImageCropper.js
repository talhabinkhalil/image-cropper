import React, { useState } from 'react'
import ReactCrop from 'react-image-crop'
import GetCroppedImage from './GetCroppedImage';

const ReactImageCropper = ({src, images}) => {
  const [crop, setCrop] = useState({ unit:'%', aspect: 13/13, height:50, width:50 });
  const [cropped, setCropped] = useState('');

  // console.log(crop)

  const imageCrop = e => {
    setCrop(e);
  }

//   const imageLoaded = (e) => {
// console.log('/.....')
//     setCrop({...crop, width:e.width, height:e.height});
//     return false;
//   }

const getImage = (e) => {
  setCrop(e);
}

console.log(images, crop)

const cropedComp = () => {
  console.log(images, crop)
  const croppedImage = GetCroppedImage(images,crop);

  // console.log(images)

  setCropped(croppedImage)
}


  return (
    <>
      <ReactCrop
       src={src} 
       crop={crop} 
       onChange={imageCrop} 
       circularCrop={true}
      //  onImageLoaded={imageLoaded}
      onComplete={getImage}
      />

      <button onClick={cropedComp}></button>
      {/* <img src={cropped} /> */}
    </>
  )
}

export default ReactImageCropper
