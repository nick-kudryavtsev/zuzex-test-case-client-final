import React from 'react';
import classes from './UsersList.module.css'
import {useSelector} from "react-redux";
import {ListItemText, List} from "@material-ui/core";

export const UsersList = () => {
    const users = useSelector(state => state.toolkit.users)

    return (
        <aside className={classes.usersList}>
            <h2>Пользователи в чате:</h2>
            <List
                className={classes.users}
            >
                {users.map((item, idx) => {
                    return (
                        <ListItemText
                            key={idx}
                        >
                            {item.username}
                        </ListItemText>
                    )
                })}
            </List>
        </aside>
    );
};