import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

export default function ToDoItem(props) {
    //to do, implement delete + edit functionality
    return (
        <ListItem 
        secondaryAction={
            <IconButton edge="end" aria-label="delete">
                <DeleteIcon />
            </IconButton>
            }>
            <ListItemText primary={props.title}/>
        </ListItem>
    );
  }