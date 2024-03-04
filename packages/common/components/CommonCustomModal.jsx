import React from 'react'
import ReactModal from 'react-modal'
import PropTypes from 'prop-types'

export const CommonCustomModal = ({isOpen, setIsOpen}) => {

  // IMPORTANT: We must check prop types like this
  PropTypes.checkPropTypes(CommonCustomModal.propTypes, {isOpen, setIsOpen}, 'prop', 'MyComponent');

  return (
    <ReactModal isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
      I am a custom modal {" "}
      <button onClick={() => setIsOpen(false)}>Close</button>
    </ReactModal>
  )
}

// IMPORTANT: Can't check prop types like this
// CommonCustomModal.propTypes = {
//   isOpen: PropTypes.bool.isRequired,
//   setIsOpen: PropTypes.func()
// }