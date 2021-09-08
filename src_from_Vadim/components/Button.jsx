import React from 'react'

const Button = ({ name, handleClick, equal }) => {
	const classes = equal ? 'equal' : ''

	return (
		<div onClick={() => handleClick(name)} className={classes}>
			{name}
		</div>
	)
}

export default Button
