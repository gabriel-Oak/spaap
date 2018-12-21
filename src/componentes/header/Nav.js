import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'

class Nav extends Component {

    render() {
        return (
            <div className="nav">
            	<AnchorLink href='#home'>Home</AnchorLink>
    			<AnchorLink href='#mapa'>Mapa</AnchorLink>
    			<AnchorLink href='#information'>Informação</AnchorLink>
    			<AnchorLink href='#contact'>Contato</AnchorLink>
            </div>
        );
    }
}

export default Nav;
