import React, { Component } from 'react';
import InputMask from 'react-input-mask';


class Contact extends Component {

    render() {
        return (
            <div className="formulario" id="contact">
            	<h1> Fale Conosco </h1>
            	<form name="form1" id="form1"> 
            		<input type="text" name="nome" id="nome" placeholder="Nome:"/>
            		<InputMask type="tel" name="telefone" id="telefone" placeholder="Telefone:" mask="(99) 99999-9999" maskChar=" " />
            		<input type="email" name="email" id="email" placeholder="Email:"/>
            		<textarea name="mensagem" id="mensagem" placeholder="Menssagem:"/>
            		<input type="submit" value="Enviar" /> 
            	</form>	
            </div>
        );
    }
}

export default Contact;
// method="post" action="/controllers/controllerForm.php"> caso for usar mailServer