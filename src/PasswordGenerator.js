import React from 'react';
import {DividerWithHeader} from './DividerWithHeader.js';
import {NumberInput} from './NumberInput';
import {PasswordGeneratorLogic} from './PasswordGeneratorLogic.js';
import Tooltip from './tooltip';
// import {CheckBox} from './CheckBox';

export class PasswordGenerator extends React.Component {
		state = { 	
			passwordLength: '12',
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
		const first = this.createRandomPassword(this.state.passwordLength);
		const firstDesc = 'Password made from random letters, numbers and special characters';
		const second = this.createWordsPassword(this.state.passwordLength);
		const secondDesc = 'Password made by combining random english words'
		const third = this.createPIN(this.state.passwordLength);
		const thirdDesc = 'Password made by combining random numbers'
		const fourth = this.createMixedPass(this.state.passwordLength);
		const fourthDesc = 'Password made by combining randoms consonanst with random vowels'


		return(
			<div className="passwords">
				<DividerWithHeader header='How many characters?'/>
				<div className="slider">
					<NumberInput name='passwordLength' onUserInputChange={this.changePasswordLength}/>
					<div className="slider-label">{this.state.passwordLength}</div>
				</div>
						{//<p>How many numbers at the end: {this.state.howManyNumbers}</p>
						//<li>How many big letters at the beginning: {this.state.howManyBig}</li>
					}
					
				<div>
					<h3>Passwords:</h3>
					<ul>
						<li><Tooltip text={first} tooltipText={firstDesc}/></li>
						<li><Tooltip text={second} tooltipText={secondDesc}/></li>
						<li><Tooltip text={third} tooltipText={thirdDesc}/></li>
						<li><Tooltip text={fourth} tooltipText={fourthDesc}/></li>
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
