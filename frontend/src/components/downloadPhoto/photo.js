import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import { storage } from '../../firebase';

function Photo() {
  const [cookies] = useCookies(['userName']);

  const [image, setImage] = useState(null);
  const [url, setUrl] = useState('./imgs/userphoto.svg');

  const handleChange = (e) => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      setImage(image);
      const uploadTask = storage.ref(`images/${cookies.userName}`).put(image);
      uploadTask.on('state_changed',
        (snapshot) => {
          setUrl('./loader.gif');
          // progrss function ....
          // const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
          // this.setState({ progress });
          // console.log(snapshot);
        },
        (error) => {
          // error function ....
          // console.log(error);
        },
        () => {
          // complete function ....
          storage.ref('images').child(cookies.userName).getDownloadURL().then((url) => {
            setUrl(url);
          });
        });
    }
  };

  return (
    <div style={{ alignSelf: 'center' }}>
      <label htmlFor="file-input">
        <div className="avatar" style={{ backgroundImage: `url(${url})` }} />
      </label>
      <input id="file-input" type="file" onChange={handleChange} />
    </div>
  );
}

export default Photo;
