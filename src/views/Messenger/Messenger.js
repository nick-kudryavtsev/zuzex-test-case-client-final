import React from 'react';
import classes from './Messenger.module.css'
import {Container} from "@material-ui/core";

//  components
import {Header} from "./Header/Header";
import {UsersList} from "./UsersList/UsersList";
import {Correspondence} from "./Correspondence/Correspondence";


export const Messenger = () => {
    return (
        <div
            className={classes.messenger}
        >
            <Header />
            <Container
                className={classes.mainContent}
            >
                <UsersList />
                <Correspondence />
            </Container>

        </div>
    );
};
