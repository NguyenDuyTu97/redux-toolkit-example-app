import React from 'react';
import { Modal, Button, Placeholder } from 'rsuite';

export default function CartModal({open, handleClose}) {
  return (
    <Modal open={open} onClose={handleClose}>
        <Modal.Header>
          <Modal.Title>Cart information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Placeholder.Paragraph rows={20} />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} appearance="primary">
            OK
          </Button>
          <Button onClick={handleClose} appearance="subtle">
            Cancel
          </Button>
        </Modal.Footer>
    </Modal>
  )
}
