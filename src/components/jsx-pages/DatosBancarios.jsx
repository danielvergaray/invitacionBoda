import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { CopyToClipboard } from "react-copy-to-clipboard";

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
    <Modal show={true} onHide={onClose} style={{ top: "10vh" }}>
      <Modal.Header closeButton>
        <Modal.Title>Datos bancarios</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="datos-bancarios-data">
          <p>Yape / Plin</p>
          <CopyToClipboard text="950011434" onCopy={() => handleCopyText("950011434")}>
            <div className="copied-overlay">
              <p>950011434</p>
              {copied["950011434"] && (
                <span className="copied-message">¡Copiado!</span>
              )}
            </div>
          </CopyToClipboard>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <p style={{ textAlign: "left", width: "100%" }}>Transferencia</p>
          <div className="datos-bancarios-data">
            <p>BCP</p>
            <CopyToClipboard text="19494344515088" onCopy={() => handleCopyText("19494344515088")}>
              <div className="copied-overlay">
                <p>19494344515088</p>
                {copied["19494344515088"] && (
                  <span className="copied-message">¡Copiado!</span>
                )}
              </div>
            </CopyToClipboard>
          </div>
          <div className="datos-bancarios-data">
            <p>BBVA</p>
            <CopyToClipboard text="001103960200406553" onCopy={() => handleCopyText("001103960200406553")}>
              <div className="copied-overlay">
                <p>001103960200406553</p>
                {copied["001103960200406553"] && (
                  <span className="copied-message">¡Copiado!</span>
                )}
              </div>
            </CopyToClipboard>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default DatosBancarios;
