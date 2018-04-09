import React from "react";

const  MenuList = extends React.Component {
    render() {
        const listItem = [
            "diseño pagina web",
            "curso ingles",
            "Metodo para Aprender Idiomas"
        ]
        return (
            <ul>
                {listItem.map((listo) => <li>{listo}</li>)}
            </ul>
        )
    }
}
class Sidemenu extends React.Component {
    render() {
        return (
            <ul>
                <MenuList />
            </ul>
        )
    }
}

export default Sidemenu;