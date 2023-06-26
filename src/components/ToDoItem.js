import * as React from 'react';
import { useState } from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuList';
import Box from '@mui/material/Box';
import { useDispatch } from 'react-redux';

import { EDIT_ITEM, DELETE_ITEM, TOGGLE_COMPLETE } from '../actions/actions';
import { SimpleDialog } from './ItemDialog';
import { ListItemText } from '@mui/material';

export default function ToDoItem(props) {
    const [openDialog, setOpenDialog] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const openMenu = Boolean(anchorEl);
    const dispatch = useDispatch();

    /*
        LIST ITEM ACTIONS
    */

    const handleItemClick = () => {
        dispatch({type: TOGGLE_COMPLETE,
                  payload:{
                    index: props.i}});
    }

    /*
        MENU ACTIONS
    */
    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    }

    const handleMenuClose = () => {
        setAnchorEl(null);
      };  

    const handleEditClick = () => {
        handleMenuClose();
        setOpenDialog(true);
    };

    const handleDeleteClick = () => {
        handleMenuClose();
        dispatch({
            type: DELETE_ITEM,
            payload: props.i
        }); 
    }

    /*
        DIALOG ACTIONS
    */
    const handleEditClose = (value) => {
        setOpenDialog(false);

        if (!!value){
            editItem(value);
        }
    };

    const editItem = (value) => {
        dispatch({
            type: EDIT_ITEM,
            payload: {
                index: props.i,
                value: value
            }
        })
    }

    return (
        <ListItem
            secondaryAction={
                <Box>
                    <IconButton edge="end" 
                    aria-label="menu" 
                    onClick={handleMenuClick}>
                        <MoreVertIcon />
                    </IconButton>
                    <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={openMenu}
                    onClose={handleMenuClose}
                    PaperProps={{
                        style: {
                          width: '10ch',
                        },
                      }}>
                        <MenuItem style={{display:'flex', justifyContent:'center'}} onClick={handleEditClick}>Edit</MenuItem>
                        <MenuItem style={{display:'flex', justifyContent:'center'}} onClick={handleDeleteClick}>Delete</MenuItem>
                    </Menu>
                </Box>
            }>
            <ListItemButton onClick={handleItemClick}>
                <ListItemText primary={props.value}
                style={{ textDecoration : props.is_complete ? 'line-through' : 'none' }} />
            </ListItemButton>
            <SimpleDialog open={openDialog} onClose={handleEditClose} value={props.value}/>
        </ListItem>
    );
  }