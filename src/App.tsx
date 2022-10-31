import React, {useEffect, useState} from 'react';
import './index.css'
import PostList from "./components/PostList/PostList";
import axios from "axios";
import {IProduct} from "./models";

function App() {

  return (
    <div className="App">
      <PostList/>
    </div>
  );
}

export default App;
