import React, { useState, useEffect } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export default function ListItems(){
    const [users, setUsers] = useState([]);

    const loadUsers = async ( ) => {
        const data = await fetch( 'http://localhost:8080/api/usuarios?limite=50' );
        const { usuarios } = await data.json();
        setUsers( usuarios );
    };

    useEffect( () => {
        loadUsers();
    }, []);

    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background-paper' }} >    
            {
                users.map( (item, idx )=>{
                    return(
                        <>
                        <ListItem alignItems='flex-start' key={item.uid}>
                            <ListItemAvatar>
                                <Avatar alt='RemySharp' src={ item.img || '#'}></Avatar>
                            </ListItemAvatar>
                            <ListItemText
                                primary={ item.nombre }
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            sx={{ display: 'inline'}}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                            {item.rol}
                                        </Typography>
                                        {"Texto en parrafo, se puede incluir alguna variable en este side"}
                                    </React.Fragment>
                                }
                                />
                            </ListItem>
                            <Divider variant="inset" component="li" />
                        </>
                    )
            })
        }
        </List>        
    )
}