import { useSelector } from "react-redux";
import ToDoItem from "./ToDoItem";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import List from '@mui/material/List';

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

export default function ToDoList() {
  const list = useSelector((state) => state.list);

  return (
    <Demo>
        <List>
        {list.map((x) => (
            <ToDoItem title={x}></ToDoItem>
        ))}
        </List>
    </Demo>
  );
}