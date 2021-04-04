//  get avatar
import {getRandomUsername} from "./getRandomUsername";
import {getUser} from "../reduxToolkit/toolkitSlice";

export const getUserAsync = () => {
    return async dispatch => {
        const currentUser = {}
        const response = await fetch(`https://jsonplaceholder.typicode.com/photos/${Math.floor(Math.random() * 100)}`)
        const json = await response.json()
        currentUser.username = getRandomUsername()
        currentUser.avatar = json.url
        dispatch(getUser(currentUser))
    }
}