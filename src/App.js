import React from 'react';
import logo from './logo.svg';
import "./App.css";
import Menu from './components/Menu/Menu';
import Slide from "./components/Slide/Slide";

class App extends React.Component{
    render(){
        return(
            <div>
                <Menu />
                 <Slide/>
            </div>
        )
    }
}

export default App;
