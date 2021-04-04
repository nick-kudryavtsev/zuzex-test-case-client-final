import React from 'react';
import classes from './Header.module.css'
import {Avatar, Container} from "@material-ui/core";
import {useSelector} from "react-redux";

export const Header = () => {
    const currentUser = useSelector(state => state.toolkit.currentUser)
    return (
        <header>
            <Container
                className={classes.header}
            >
                <span>{currentUser.username}</span>
                <Avatar
                    alt="User Avatar"
                    src={currentUser.avatar}
                />
            </Container>
        </header>
    );
};