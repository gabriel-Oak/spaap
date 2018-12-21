import React, { Component } from 'react';
import Slide from './main/Slide';
import Information from './main/Information';
import Contact from './main/Contact';
import Maps from './main/Maps';

class Main extends Component {
    
    render() {
        return (
            <div className="main">
            	<Slide />
            	<Information />
            	<Contact />
            	<Maps />
            </ div>
        );
    }
}

export default Main;
