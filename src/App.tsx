import React, {FC} from 'react';
import './App.css';
import Users from "./Pages/Users/Users";
import Posts from "./Pages/Posts/Posts";



const App: FC = () => {
  return (
      <div>
        <Users/>
          <Posts/>
      </div>
  );
};

export default App;

