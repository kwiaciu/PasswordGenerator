import React from 'react';
import './tooltip.css';

export default function tooltip(props) {
	return (
		<div className='tooltip'> {props.text}
			<span className='tooltip-right'>{props.tooltipText}</span>
			<span className='tooltip-bottom'>{props.tooltipText}</span>
		</div>
	)
}