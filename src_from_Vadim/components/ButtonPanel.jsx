import React from 'react'
import Button from './Button'

const ButtonPanel = props => {
	return (
		<div className='divs'>
			<div className='operators'>
				<Button name='+' handleClick={props.handleClick} />
				<Button name='-' handleClick={props.handleClick} />
				<Button name='*' handleClick={props.handleClick} />
				<Button name='/' handleClick={props.handleClick} />
			</div>
			<div className='leftPanel'>
				<div className='numbers'>
					<Button name='7' handleClick={props.handleClick} />
					<Button name='8' handleClick={props.handleClick} />
					<Button name='9' handleClick={props.handleClick} />
				</div>
				<div className='numbers'>
					<Button name='4' handleClick={props.handleClick} />
					<Button name='5' handleClick={props.handleClick} />
					<Button name='6' handleClick={props.handleClick} />
				</div>
				<div className='numbers'>
					<Button name='1' handleClick={props.handleClick} />
					<Button name='2' handleClick={props.handleClick} />
					<Button name='3' handleClick={props.handleClick} />
				</div>
				<div className='numbers'>
					<Button name='0' handleClick={props.handleClick} />
					<Button name='.' handleClick={props.handleClick} />
					<Button name='AC' handleClick={props.handleClick} />
				</div>
			</div>
			<Button name='=' handleClick={props.handleClick} equal />
		</div>
	)
}

export default ButtonPanel
