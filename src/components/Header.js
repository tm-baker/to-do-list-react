import * as React from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import { useDispatch } from 'react-redux';
import { SimpleDialog } from './ItemDialog';
import { ADD_ITEM } from '../actions/actions';

export default function Header() {
const [open, setOpen] = useState(false);
const dispatch = useDispatch();

const handleClickOpen = () => {
  setOpen(true);
};

const handleClose = (value) => {
  setOpen(false);
  addItem(value);
};

const addItem = (value) => {
  if (!!value){
    dispatch({
      type: ADD_ITEM,
      payload: value
    });
  }
}

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            To Do List
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleClickOpen}
          >
            <AddIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <SimpleDialog
      open={open}
      onClose={handleClose}
      />
    </Box>
  );
}