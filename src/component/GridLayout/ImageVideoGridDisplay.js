import React, { useState } from 'react';
import ModalComponent from '../Modal/ModalComponent';

export default function VideoGridDisplay({ content, modalState }) {
  const [modal, toggleModal] = useState(false);

  const getComponent = id => {
    if (modal) {
      return (
        <ModalComponent
          id={id}
          toggleModal={toggleModal}
          modalState={modalState}
        />
      );
    } else {
      return null;
    }
  };

  const videoCol = (
    <video
      src={content.video_url}
      type='video/mp4'
      preload='none'
      id={content.video_id}
      controls
      disablePictureInPicture
      controlsList="nodownload noremoteplayback"
    ></video>
  );

  const imageCol = (<img
    src={content.image_url}
    alt={content.video_name}
    id={content.video_id}
  />)

  return (
    <tr key={content.video_id}>
      <td onClick={() => toggleModal(!modal)}>{modalState ? videoCol : imageCol}</td>
      <td>{content.video_name}</td>
      <td>{content.video_id}</td>
      {modalState ? (<td>{content.video_length}</td>) : null}
      <td>{content.resolution}</td>
      <td>{content.created_at}</td>
      <td>{content.modified_at}</td>
      {modal ? getComponent(content.video_id) : ''}
    </tr>
  );
}
