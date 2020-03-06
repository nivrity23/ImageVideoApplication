import React from 'react';

export default function ModalComponent({ id, toggleModal, modalState }) {
  var content = document.getElementById(id);
  var modal = document.getElementById('myModal');
  var modalView = document.getElementById('gridModal');
  modal.style.display = 'block';
  modalView.src = content.src;
  var span = document.getElementsByClassName('close')[0];

  span.onclick = function () {
    modal.style.display = 'none';
    if (modalState) modalView.pause();
    toggleModal(false);
  };
  return (
    <></>
  );
}
