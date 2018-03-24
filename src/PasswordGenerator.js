import React from 'react';
import {DividerWithHeader} from './DividerWithHeader.js';
import {NumberInput} from './NumberInput';
import {PasswordGeneratorLogic} from './PasswordGeneratorLogic.js';
import {CheckBox} from './CheckBox';

export class PasswordGenerator extends React.Component {
	constructor(props) {
		super(props);

		this.state = { 	
			passwordLength: '',
			howManyNumbers: '',
			howManyBig: '',
			addNumber: false
		};

		this.changePasswordLength = this.changePasswordLength.bind(this);
		this.changeHowManyNumbers = this.changeHowManyNumbers.bind(this);
		this.changeHowManyBig = this.changeHowManyBig.bind(this);
		this.changeState = this.changeState.bind(this);


	}

	changePasswordLength(newNumber) {
		if (newNumber > 1) {
			this.setState({
			passwordLength: newNumber
			})
		}	;
	}

	changeHowManyNumbers(newNumber) {
		this.setState({
			howManyNumbers: newNumber
		});
	}

	changeHowManyBig(newNumber) {
		this.setState({
			howManyBig: newNumber
		});
	}

	changeState() {
		const potato = this.state.addNumber == true ? false : true;
		this.setState ({
			addNumber: potato
		})
	}		

	createRandomPassword(numberOf) {
		var objectNew = new PasswordGeneratorLogic(numberOf);
		var pass = objectNew.totallyRandom(objectNew.passwordLen, objectNew.charPool(true,true,true,true));
		return pass;
	}

	createWordsPassword(numberOf) {
		var objectNew = new PasswordGeneratorLogic(numberOf);
		var pass = objectNew.another();
		return pass;
	}

	createPIN(numberOf) {
		var objectNew = new PasswordGeneratorLogic(numberOf);
		var pass = objectNew.totallyRandom(objectNew.passwordLen, objectNew.charPool(false,false,false,true));
		return pass;
	}

	createMixedPass(numberOf) {
		var objectNew = new PasswordGeneratorLogic(numberOf);
		var pass = objectNew.mixed();
		return pass;
	}

	render() {
		return(
			<div>
				<DividerWithHeader header='How many characters?'/>
					<NumberInput onUserInputChange={this.changePasswordLength}/>
					<ul>
						<li>Password length: {this.state.passwordLength}</li>
						<li>How many numbers at the end: {this.state.howManyNumbers}</li>
						<li>How many big letters at the beginning: {this.state.howManyBig}</li>

					</ul>

				<div>
					<h3>Passwords:</h3>
					<ul>
						<li>{this.createRandomPassword(this.state.passwordLength)}</li>
						<li>{this.createWordsPassword(this.state.passwordLength)}</li>
						<li>{this.createPIN(this.state.passwordLength)}</li>
						<li>{this.createMixedPass(this.state.passwordLength)}</li>
					</ul>
					
				</div>
					<p>Add numbers to the end: <NumberInput onUserInputChange={this.changeHowManyNumbers}/></p>
					<p>Capitalize letters at the beginning: <NumberInput onUserInputChange={this.changeHowManyBig}/></p>
				<div>
					<CheckBox type='checkbox' checked={this.state.addNumber} onUserInputChange={this.changeState}/>
				</div>
			</div>
		);
	}
}
