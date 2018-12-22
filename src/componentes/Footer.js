import React, { Component } from 'react';

class Footer extends Component {

    render() {
        return (
            <div className="footer">
            	<div>
            		<img src={process.env.PUBLIC_URL +"/img/logo.png"} alt="Logomarca" />
            	</div>



            	<div>
            		Endereço<br/>
            		Telefone<br/>
            		Email
            	</div>
            </div>
        );
    }
}

export default Footer;