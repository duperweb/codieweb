import React from "react";
class HeaderNavMenu extends React.Component {
    render() {
        const listItem = [
            <a href="#">Home</a>,
            <a href="mailto:codieweb@gmail.com">Contact</a>,
            <a href="http://bingmaps:///?&FORM=WNAMSH&collection=point.18.468489_-69.998917_Rogelio+Roselle%2C+Santo+Domingo+Oeste%2C+02312">Address</a>,
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
                    <h1> ├===CODIEWEB===├|</h1>
                    <h2 className="App-title">Welcome to Copia Business</h2>
                </hgroup>
            </div>
        )
    }
}


export default Header;