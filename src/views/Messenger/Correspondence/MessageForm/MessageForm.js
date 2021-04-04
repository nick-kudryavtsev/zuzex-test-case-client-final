import React, {useState, useEffect} from 'react';
import classes from './MessageForm.module.css'
import {useSelector, useDispatch} from "react-redux";
import {socket} from "../../../../socket/socket";
import {addMessage} from "../../../../reduxToolkit/toolkitSlice";

export const MessageForm = () => {
    const [message, setMessage] = useState('')
    const {username, avatar} = useSelector(state => state.toolkit.currentUser)

    const dispatch = useDispatch()

    const emitMessage = (e) => {
        e.preventDefault()
        let file = e.target[2].files[0]

        function sendMessage(el){
            let img = el
            if(!message){
                return
            }
            if(img === undefined){
                socket.emit('USER:MESSAGE', {
                    msg: message,
                    username: username,
                    avatar: avatar,
                })
            } else {
                let reader = new FileReader()
                reader.onloadend = function (){
                    socket.emit('USER:MESSAGE', {
                        msg: message,
                        username: username,
                        avatar: avatar,
                        img: reader.result
                    })
                }
                reader.readAsDataURL(img)
            }
        }

        sendMessage(file)

        setMessage('')
    }

    useEffect(() => {
        socket.on('USER:MESSAGE', messages => {
            dispatch(addMessage(messages))
        })
    }, [dispatch])
    return (
        <form
            className={classes.messageForm}
            onSubmit={(e) => emitMessage(e)}
        >
            <input
                style={{
                    width: '400px',
                    height: '50px'
                }}
                autoComplete="off"
                name="message"
                placeholder="Начните набирать сообщение"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button>Отправить</button>
            <input
                type="file"
                name="image"
                accept="image/png"
            />

        </form>
    );
};