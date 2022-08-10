import * as React from "react";
import Dialog from "@mui/material/Dialog";
import CloseIcon from "@mui/icons-material/Close";

import "./Modal.scss";

export default function AppModal({ data, open, handleClose }) {
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">
        <div className="modal__container">
          <div onClick={handleClose}>
            <CloseIcon className="cancel" />
          </div>
          <h1>{data?.para}</h1>
        </div>
      </Dialog>
    </div>
  );
}
