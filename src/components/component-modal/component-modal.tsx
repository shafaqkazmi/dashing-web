import React from "react";
import ReactDOM from "react-dom";

export const Modal = ({ isOpen, onClose, children, header }: any) => {
  const modalStyle: React.CSSProperties = {
    display: isOpen ? "block" : "none",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 9999,
    width: "auto",
    padding: '20px'
  };

  const contentStyle = {
    backgroundColor: "#fff",
    maxWidth: "400px",
    margin: "100px auto",
    border: "none",
    borderRadius: "5px",
    paddingBottom: "10px",
  };

  const headerStyle = {
    backgroundColor: "#23242b",
    color: "white",
    width: "100%",
    borderTopLeftRadius: "5px",
    borderTopRightRadius: "5px",
  };

  const headerContent = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "10px 20px",
    padding: "10px 0",
  };

  return ReactDOM.createPortal(
    <div style={modalStyle}>
      <div style={contentStyle}>
        <div style={headerStyle}>
          <div style={headerContent}>
            <h2>{header}</h2>
            <h4 onClick={onClose} style={{ cursor: "pointer" }}>
              X
            </h4>
          </div>
        </div>
        <div style={{ margin: "60px 20px" }}>{children}</div>
      </div>
    </div>,
    document.body
  );
};