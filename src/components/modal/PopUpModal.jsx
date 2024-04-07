import { useState, useContext } from "react";
import InfoContext from "../infoContext/InfoContext";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { GoAlertFill } from "react-icons/go";
import { FaCheckCircle } from "react-icons/fa";
import { BsFillQuestionCircleFill } from "react-icons/bs";

function PopUpModal({ show, setShow }) {
  const { invitadoRegistrado, setInvitadoRegistrado } = useContext(InfoContext);

  const handleClose = () => {
    setShow(false);
    setInvitadoRegistrado("")
    
  } 
 
  const scrollToTop=()=>{
    // Realiza el desplazamiento suave
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <>
      {invitadoRegistrado === "si" ? (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header onClick={()=>scrollToTop()} closeButton>
            <Modal.Title>
              <FaCheckCircle />
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Gracias por enviar tu respuesta
          </Modal.Body>
         
        </Modal>
      ) : invitadoRegistrado === "no" ? (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              <GoAlertFill />
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Lo sentimos, el nombre no se encuentra registrado
          </Modal.Body>
         
        </Modal>
      ) : invitadoRegistrado === "repetido" ? (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              <BsFillQuestionCircleFill />
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Anteriormente ya habías enviado tu respuesta, si quieres cambiarla
            comunicate con alguno de los novios por favor
          </Modal.Body>
       
        </Modal>
      ) : null}
    </>
  );
}

export default PopUpModal;
