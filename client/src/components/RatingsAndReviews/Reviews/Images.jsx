import React, {useState} from 'react';
import styled from 'styled-components';

const Modal = styled.img`
  display: block;
`

export default function Images({review}) {
  const [viewer, setViewer] = useState(false);
  const [image, setImage] = useState(null);

  function onClick(e) {
    if (image === e.target.src) {
      setViewer(false);
      setImage(null);
    } else {
      setViewer(true);
      setImage(e.target.src)
    }
  }

  return (
    <>
      {review.photos.map(photo => (
        <span key={photo.id}>
          <img onClick={onClick} style={{marginRight: "5px"}} src={photo.url}  height="50" width="50" />
        </span>
      ))}
      {viewer
      ? <Modal src={image} width="100%"/>
      : null}
    </>
  )
}