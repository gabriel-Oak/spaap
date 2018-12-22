import React, { Component } from 'react';

class Logo extends Component {

    render() {
        return (
            <div className="logo">
            	<picture>
            		<source media="(max-width: 768px)" srcSet={process.env.PUBLIC_URL + "/img/home-4x.png"}/>
            		<img src={process.env.PUBLIC_URL + "/img/home-8x.png"} alt="Logomarca WEF Imoveis" />
            	</picture>
            </div>
        );
    }
}

export default Logo;
