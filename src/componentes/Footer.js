import React, { Component } from 'react';

class Footer extends Component {

    render() {
        return (
            <div className="footer">
            	<div>
            		<img src="/img/logo.png" alt="Logomarca" />
            	</div>



            	<div>
            		Enderesso<br/>
            		Telefone<br/>
            		Email
            	</div>
            </div>
        );
    }
}

export default Footer;