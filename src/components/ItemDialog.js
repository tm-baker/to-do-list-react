import * as React from 'react';
import { useState } from 'react';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

//to do: modify to handle edit functionality
export function SimpleDialog(props) {
  const { onClose, open } = props;
  const [itemValue, setItemValue] = useState("");

  const handleClose = () => {
    onClose(itemValue);
  };

  const handleChange = (event) => {
    setItemValue(event.target.value);
  }

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Add List Item</DialogTitle>
      <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="To Do..."
            type="text"
            fullWidth
            variant="standard"
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Add</Button>
        </DialogActions>
    </Dialog>
  );
}