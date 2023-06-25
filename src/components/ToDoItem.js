import * as React from 'react';
import { useState } from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch } from 'react-redux';

import { EDIT_ITEM } from '../actions/actions';
import { SimpleDialog } from './ItemDialog';

export default function ToDoItem(props) {
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value) => {
        setOpen(false);

        if (!!value){
            editItem(value);
        }
    };

    // function handleDelete(){
    //     dispatch({
    //         type: DELETE_ITEM,
    //         payload: props.i
    //     }); 
    // }

    function editItem(value){
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
                <IconButton edge="end" aria-label="delete" onClick={handleClickOpen}>
                    <EditIcon />
                </IconButton>
            }>
            <ListItemText primary={props.value}/>
            <SimpleDialog open={open} onClose={handleClose} value={props.value}/>
        </ListItem>
    );
  }