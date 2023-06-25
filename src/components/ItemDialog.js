import * as React from 'react';
import { useState } from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

export function SimpleDialog(props) {
  const { onClose, open, value } = props;
  const [itemValue, setItemValue] = useState(value);

  const handleClose = () => {
    onClose(itemValue);
  };

  const handleCancel = () => {
    onClose();
  };

  const handleChange = (event) => {
    setItemValue(event.target.value);
  }

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>{props.value ? "Edit List Item" : "Add List Item"}</DialogTitle>
      <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="To Do..."
            type="text"
            fullWidth
            variant="standard"
            value={itemValue}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel}>Cancel</Button>
          <Button onClick={handleClose}>Save</Button>
        </DialogActions>
    </Dialog>
  );
}