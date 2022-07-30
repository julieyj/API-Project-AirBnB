import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import SignUpForm from './SignUpForm';
import "./SignUpFormModal.css";

function SignUpFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
    <div className="sign-up-container">
      <button className="sign-up-button" onClick={() => setShowModal(true)}>Sign Up</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <SignUpForm setShowModal={setShowModal} />
        </Modal>
      )}
    </div>
    </>
  );
}

export default SignUpFormModal;
