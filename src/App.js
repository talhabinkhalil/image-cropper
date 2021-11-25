
import { useState } from 'react';
import ReactCrop from 'react-image-crop';
import ImageCrop from './ImageCropper';
import ReactImageCropper from './ReactImageCropper';

function App() {
  const [state, setState] = useState();
  const [image,setImage] = useState();
  const [imageNot, setImageNot] = useState(null);

  const setimageValue = (e) => {
    setImageNot(e.target.files[0]);

    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    
    reader.onload = function () {
      let baseUrl = reader.result;
      setImage(baseUrl)
    }
  }

  const getImage = image => console.log(image)
  
  return (
    <div className="App">
      {/* <input type="text" value={state} onChange={e => setState(e.target.value)} />
      {state}
      <input type='file' onChange={setimageValue} />
      {image && 
        <ReactImageCropper src={image} images={imageNot} />
      } */}

      <ImageCrop getCroppedImage={getImage} />
      {/* <image src={image} /> */}
    </div>
  );
}

export default App;
