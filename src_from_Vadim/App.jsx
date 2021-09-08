import React, { useState } from 'react'
import { evaluate } from 'mathjs'
import ButtonPanel from './components/ButtonPanel'

function App() {
	const [expression, setExpression] = useState('')

	function handleClick(name) {
		switch (name) {
			case '=':
				try {
					setExpression(evaluate(expression))
				} catch (e) {
					alert('Не корректное выражение!')
					setExpression('')
				}
				break
			case 'AC':
				setExpression('')
				break
			default:
				setExpression(prev => prev + name)
				break
		}
	}

	return (
		<div className='calculator'>
			<div className='input'>{expression}</div>
			<ButtonPanel handleClick={handleClick} />
		</div>
	)
}

export default App
