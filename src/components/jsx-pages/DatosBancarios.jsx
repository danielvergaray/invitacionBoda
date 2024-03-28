import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { CopyToClipboard } from "react-copy-to-clipboard";
import tituloDatos from "../../assets/imagenes/titulos/DATOSTITULO.png";

const DatosBancarios = ({ onClose }) => {
  const [copied, setCopied] = useState({});

  const handleCopyText = (text) => {
    // Cambiar el estado para mostrar el mensaje de copiado junto al texto copiado
    setCopied((prevCopied) => ({ ...prevCopied, [text]: true }));

    // Reiniciar el estado después de un tiempo para ocultar el mensaje
    setTimeout(() => {
      setCopied((prevCopied) => ({ ...prevCopied, [text]: false }));
    }, 2000); // Cambia el tiempo según tus preferencias
  };

  return (
    <Modal show={true} onHide={onClose} style={{ top: "5vh" }}>
      <Modal.Header style={{ backgroundColor: "#dc7648" }} closeButton>
        <Modal.Title style={{ display: "flex", justifyContent: "left" , padding:"0"}}>
          <img style={{ width: "45%" }} src={tituloDatos} alt="" />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body
        style={{
          backgroundColor: "white",
          display: "flex",
          flexDirection: "column",
          padding: "35px 25px",
          textAlign:"left"
        }}
      >
        <div className="datos-bancarios-data">
          <p className="tipo-pago">YAPE / PLIN</p>
          <CopyToClipboard
            text="950011434"
            onCopy={() => handleCopyText("950011434")}
          >
            <div className="copied-overlay">
              <p>950011434</p>
              {copied["950011434"] && (
                <span className="copied-message">¡Copiado!</span>
              )}
            </div>
          </CopyToClipboard>
        </div>

        <div style={{paddingTop: "40px"}} className="datos-bancarios-data">
          <p className="tipo-pago">TRANSFERENCIA</p>
          <p style={{fontSize:"0.8rem"}}>BCP</p>
          <CopyToClipboard
            text="19494344515088"
            onCopy={() => handleCopyText("19494344515088")}
          >
            <div className="copied-overlay">
              <p>19494344515088</p>
              {copied["19494344515088"] && (
                <span className="copied-message">¡Copiado!</span>
              )}
            </div>
          </CopyToClipboard>
        </div>
        <div style={{paddingTop: "15px"}} className="datos-bancarios-data">
          <p style={{fontSize:"0.8rem"}}>BBVA</p>
          <CopyToClipboard
            text="001103960200406553"
            onCopy={() => handleCopyText("001103960200406553")}
          >
            <div className="copied-overlay">
              <p>001103960200406553</p>
              {copied["001103960200406553"] && (
                <span className="copied-message">¡Copiado!</span>
              )}
            </div>
          </CopyToClipboard>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default DatosBancarios;
