import React from 'react';
import classes from './Correspondence.module.css'

//  components
import {MessageForm} from "./MessageForm/MessageForm";
import {MessageList} from "./MessageList/MessageList";

export const Correspondence = () => {
    return (
        <main
            className={classes.correspondence}
        >
            <MessageForm />
            <MessageList />
        </main>
    );
};