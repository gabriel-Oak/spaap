import React, { Component } from 'react';

class Logo extends Component {

    render() {
        return (
            <div className="logo">
            	<picture>
            		<source media="(max-width: 768px)" srcSet="/img/home-4x.png"/>
            		<source media="(min-width: 769px)" srcSet="/img/home-8x.png"/>
            		<img src="/img/home-8x.png" alt="Logomarca WEF Imoveis" />
            	</picture>
            </div>
        );
    }
}

export default Logo;
