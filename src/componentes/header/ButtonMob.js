import React, { Component } from 'react';

class ButtonMob extends Component {

	constructor(){
		super();
		this.state = {
			visNav: 'flex'
		}
	}

	clickMe() {
		if (this.state.visNav == 'flex') {
			this.setState({
				visNav: 'none'
			});
		} else {
			this.setState({ visNav:'flex'});
		}
		document.querySelector(".nav").style.display=this.state.visNav;
	}

    render() {
        return (
            <div className="buttonmob" onClick={this.clickMe.bind(this)}>
            	<img src={process.env.PUBLIC_URL + "/img/btn.png"} alt="Botão Mobile" />
            </div>
        );
    }
}

export default ButtonMob;
