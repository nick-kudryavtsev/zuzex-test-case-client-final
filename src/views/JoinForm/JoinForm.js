import React, {useEffect} from 'react';
import classes from './JoinForm.module.css'
import {Button, Card} from "@material-ui/core";
import {useDispatch, useSelector} from "react-redux";
import {joinHandler, addUser} from "../../reduxToolkit/toolkitSlice";
import {getUserAsync} from "../../utils/getUserAsync";
import {socket} from "../../socket/socket";

//  img
import conversation from '../../images/01.Join-Form-Conversation.svg'

export const JoinForm = () => {
    const dispatch = useDispatch()

    //  в оригинале - был пустой массив зависимостей
    useEffect(() => {
        dispatch(getUserAsync())
    }, [])

    const currentUser = useSelector(state => state.toolkit.currentUser)

    const emitUser = () => {
        socket.emit('USER:JOINED', currentUser)
        dispatch(joinHandler())
    }

    useEffect(() => {
        socket.on('USER:JOINED', users => {
            dispatch(addUser(users))
        })

        socket.on('USER:DISCONNECT', users => {
            dispatch(addUser(users))
        })
    }, [dispatch])

    return (
        <div
            className={classes.joinForm}
        >
            <Card
                className={classes.card}
            >
                <img src={conversation} alt="Два человека говорят по телефону"/>
                <h1>Приветствую!</h1>
                <p>Форма общества всегда определялась скорее природой средств человеческой коммуникации, нежели её содержанием</p>
                <p>...добро пожаловать в такую форму.</p>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => emitUser()}
                >Войти в чат!</Button>
            </Card>
        </div>
    );
};