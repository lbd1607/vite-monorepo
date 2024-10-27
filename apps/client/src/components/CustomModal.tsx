import React from "react";
import ReactModal from "react-modal";
import PropTypes from "prop-types";

type CustomModalProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const CustomModal = ({ isOpen, setIsOpen }: CustomModalProps) => {
  return (
    <ReactModal isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
      I am a custom modal{" "}
      <button onClick={() => setIsOpen(false)}>Close</button>
    </ReactModal>
  );
};

export default CustomModal;
