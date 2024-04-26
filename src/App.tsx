import React, {FC, useReducer, useState} from 'react';
import './App.css';
import Users from "./components/Users/Users";
import IPostModel from "./models/postModel";
import Posts from "./components/Posts/Posts";

const countfunk = (state: number, action: {}) => {

}

const App: FC = () => {

    const [userid, setUserid] = useState<number>(0)
    const [number, dispatch] = useReducer(countfunk, 0)

    const hendler = (id:number) => {
      setUserid(id)
    }

  return (
      <div>
        <Users hendler={hendler}/>
          {userid !==0 && <Posts id={userid}/>}

      </div>
  );
};

export default App;

