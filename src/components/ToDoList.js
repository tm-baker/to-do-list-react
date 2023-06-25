import { useSelector } from "react-redux";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import List from '@mui/material/List';

import ToDoItem from "./ToDoItem";

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export default function ToDoList() {
  const list = useSelector((state) => state.list);

  return (
    <Demo>
        <List>
        {list.map((x, index) => (
            <ToDoItem key={index} value={x} i={index}></ToDoItem>
        ))}
        </List>
    </Demo>
  );
}