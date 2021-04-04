import React from 'react'
import classes from './App.module.css'
import {useSelector} from "react-redux";

//  components
import {JoinForm} from "./views/JoinForm/JoinForm";
import {Messenger} from "./views/Messenger/Messenger";

function App() {
  const isJoin = useSelector(state => state.toolkit.isJoin)
  return (
    <div
        className={classes.app}
    >
      {isJoin
          ? <Messenger />
          : <JoinForm />
      }
    </div>
  );
}

export default App;
