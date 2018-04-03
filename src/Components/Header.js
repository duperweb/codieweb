import React from "react";
class HeaderNavMenu extends React.Component {
    render() {
        const listItem = [
            "Home",
            "Contact",
            "Address"
        ]
        return (
            <ul className="menuNav">
                {listItem.map((item) => <li>{item}</li>)}
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
                    <h1> |===CODIEWEB===|</h1>
                    <h2 className="App-title">Welcome to Copia Business</h2>
                </hgroup>
            </div>
        )
    }
}


export default Header;