import React, { Component } from 'react';

class Address extends Component {

    render() {
        return (
            <div className="address">
                <img src={process.env.PUBLIC_URL + "/img/phone-4x.png"} alt="Whatsapp"/>
                <strong>(XX) XXXXX - XXXX </strong><br/>
                Rua Eufradio Nucas, nº 3456, Jardim Oldschool.<br/>
                <strong>R$ 560</strong>
            </div>
        );
    }
}

export default Address;