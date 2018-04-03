import React from "react";
import footerContainer from './FooterStyle';

class FooterMenu extends React.Component {
    render(props) {
       
        
        return (
            <ul>
               {this.props.menu.map((listmenu) => <li>{listmenu}</li>)}
            </ul>
        )
    }
}
class Footer extends React.Component {
    render() {
        const socialist = [
            "github",
            "youtube",
            "facebook",
            "linkedin"
        ];
        const More = [
            "about",
            "FAQ",
            "Help",
            "Address"
        ] 
        const refer = [
            "reactjs.org",
            "github",
            "reactmode"
        ]
        return (
            <div style={footerContainer}>
                <FooterMenu menu={socialist} />
                <FooterMenu menu={refer} />
                <FooterMenu menu={More} />
            </div>
        )
    }
}

export default Footer;