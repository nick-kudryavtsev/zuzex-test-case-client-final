import React, {useEffect} from 'react';
import classes from './MessageList.module.css'
import {Avatar} from "@material-ui/core";
import {useSelector, useDispatch} from "react-redux";
import {socket} from "../../../../socket/socket";
import {addMessage} from "../../../../reduxToolkit/toolkitSlice";
import imgMessageListIntro from '../../../../images/02.Message-List-Intro.svg'
import DeleteIcon from '@material-ui/icons/Delete';

export const MessageList = () => {
    const messages = useSelector(state => state.toolkit.messages)

    const dispatch = useDispatch()

    const emitUser = () => {
        socket.emit('USER:MESSAGE')
    }

    const emitDelete = (i) => {
        socket.emit('USER:DELETE_MESSAGE', i)
        // socket.on('USER:DELETE_MESSAGE', messages => {
        //     dispatch(addMessage(messages))
        // })
    }

    useEffect(() => {
        emitUser()
        socket.on('USER:MESSAGE', messages => {
            dispatch(addMessage(messages))
        })

        socket.on('USER:DELETE_MESSAGE', messages => {
            dispatch(addMessage(messages))
        })
    }, [])

    return (
        <div
            className={classes.messageList}
        >
            { messages.length === 0
                ? <img
                    src={imgMessageListIntro}
                    alt="Greetings"
                    style={ {
                        width: '100%',
                        height: '100%',
                    } }
                />
                : messages.map((item, idx) => {
                return (
                    <div
                        className={classes.message}
                        key={idx}
                    >
                        <Avatar
                            src={item.avatar}
                            alt={`${item.username} avatar`}
                        />
                        <div
                            className={classes.content}
                        >
                            <span>{item.username}</span>
                            <p>{item.msg}</p>
                            {item.img
                                ? <img src={item.img} />
                                : null
                            }
                        </div>
                        <DeleteIcon
                            onClick={() => emitDelete(item.msg)}
                            style={{
                                marginLeft: '10px',
                                cursor: "pointer",
                                height: '15px',
                                width: '15px'
                            }}
                        />
                    </div>
                )
            })}
        </div>
    );
};