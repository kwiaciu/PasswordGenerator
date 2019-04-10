import React from 'react';
import {DividerWithHeader} from './DividerWithHeader.js';
import {NumberInput} from './NumberInput';
import {PasswordGeneratorLogic} from './PasswordGeneratorLogic.js';
import {CheckBox} from './CheckBox';

export class PasswordGenerator extends React.Component {
		state = { 	
			passwordLength: '',
			howManyNumbers: '',
			howManyBig: '',
			addNumber: false
		};

	changePasswordLength = (newNumber, name) => {
		if (newNumber > 1) {
			this.setState({
			[name]: newNumber
			});
		};
	}


	changeStateNumberInput = (newNumber, name) => {
		this.setState({
			[name]: newNumber
		});
	}

	changeStateCheckbox = (isChecked, name) => {
		// const potato = this.state.addNumber == true ? false : true;
		this.setState ({
			[name]: isChecked
		})
	}		

	createRandomPassword = (numberOf) => {
		var objectNew = new PasswordGeneratorLogic(numberOf);
		var pass = objectNew.totallyRandom(objectNew.passwordLen, objectNew.charPool(true,true,true,true));
		return pass;
	}

	createWordsPassword = (numberOf) => {
		var objectNew = new PasswordGeneratorLogic(numberOf);
		var pass = objectNew.another();
		return pass;
	}

	createPIN = (numberOf) => {
		var objectNew = new PasswordGeneratorLogic(numberOf);
		var pass = objectNew.totallyRandom(objectNew.passwordLen, objectNew.charPool(false,false,false,true));
		return pass;
	}

	createMixedPass = (numberOf) => {
		var objectNew = new PasswordGeneratorLogic(numberOf);
		var pass = objectNew.mixed();
		return pass;
	}

	render() {
		return(
			<div>
				<DividerWithHeader header='How many characters?'/>
				<div class="slider">
					<NumberInput name='passwordLength' onUserInputChange={this.changePasswordLength}/>
					<div class="slider-label">{this.state.passwordLength}</div>
				</div>
						{//<p>How many numbers at the end: {this.state.howManyNumbers}</p>
						//<li>How many big letters at the beginning: {this.state.howManyBig}</li>
					}
					
				<div>
					<h3>Passwords:</h3>
					<ul>
						<li>{this.createRandomPassword(this.state.passwordLength)}</li>
						<li>{this.createWordsPassword(this.state.passwordLength)}</li>
						<li>{this.createPIN(this.state.passwordLength)}</li>
						<li>{this.createMixedPass(this.state.passwordLength)}</li>
					</ul>
				</div>
				{	
				//	<p>Add numbers to the end: <NumberInput name='howManyNumbers' onUserInputChange={this.changeStateNumberInput}/></p>
				//	<p>Capitalize letters at the beginning: <NumberInput name='howManyBig' onUserInputChange={this.changeStateNumberInput}/></p>
				
				//<div>
				//	<CheckBox name='addNumber' checked={this.state.addNumber} onUserInputChange={this.changeStateCheckbox}/>
				//</div>
				}
			</div>
		);
	}
}
