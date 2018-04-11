import React from "react";

class HeaderNavMenu extends React.Component {
    render() {
        const listItem = [
            <a href="">Home</a>,
            <a href="mailto:codieweb@gmail.com">Contact</a>,
            <a href="">Address</a>,
        ]
        return (
            <ul className="menuNav">
                {listItem.map((item, i) => <li key={i}>{item}</li>)} 
            </ul>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <HeaderNavMenu />
                <hgroup>
                    <h1 className="App-title">WELCOME TO CODIEWEB</h1>
                    <h3>  COPIA  BUSINESS </h3>
                </hgroup>
            </div>
        )
    }
}


export default Header;