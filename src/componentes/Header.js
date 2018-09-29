import React from 'react';
import '../css/App.css';


const Header = (props) => {
    return (
        <header>
            <h1>{props.titulo}</h1>
        </header>
    )   
}
export default Header 