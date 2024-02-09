import React from 'react'
import { Tooltip } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import CategoryIcon from '@mui/icons-material/Category';
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
export default function LeftCard(props) {
  return (
    <div onClick={props.onClick}>
       <Tooltip title={props.title}>
          <ListItem sx={{
            '&:hover': {
              backgroundColor: '#333', // Change background color on hover
            },
          }}>
            <ListItemText primary={props.primary} />
            
          </ListItem>
        </Tooltip>
        <Divider component="li" sx={{ borderColor: 'white' }}  />
    </div>
  )
}
