import React from "react";
import footerContainer from './FooterStyle';

class Menu extends React.Component {
    render(props) {
        return (
            <ul>
                {this.props.menu.map((listmenu, i) => <li key={i}>{listmenu}</li>)}
            </ul>
        )
    }
}
class NavMenu extends React.Component {
    render() {
        const menu = [
            {
                socialist: [
                    "github",
                    "youtube",
                    "facebook",
                    "linkedin"
                ],
                More: [
                    "about",
                    "FAQ",
                    "Help",
                    "Address"
                ],
                refer: [
                    "reactjs.org",
                    "github",
                    "reactmode"
                ]
            }

        ]
        return (
            <div style={footerContainer}>
                <Menu menu={menu[0].socialist} />
                <Menu menu={menu[0].refer} />
                <Menu menu={menu[0].More} />
            </div>
        )
    }
}

export default NavMenu;