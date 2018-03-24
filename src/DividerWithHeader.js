import React from 'react';

export class DividerWithHeader extends React.Component {
	

	render(){
		return (
			<div>
				<h1> {this.props.header} </h1>
			</div> 

		);
	}
}

DividerWithHeader.defaultProps = { header: 'Default header'};