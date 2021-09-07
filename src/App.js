/* eslint no-eval:0 */
import React, { useRef, useState } from 'react'
import store from './utils/store'
import InputItem from './components/inputItem.jsx'
import NumbersItem from './components/numbersItem'
import OperationItem from './components/operationItem'
import EqualItem from './components/equalItem'

const App = () => {
	const [out, setOut] = useState(0)
	const refOutput = useRef(out)
	const tapeOperation = value => {
		let output = refOutput.current
		let currentValue = value
		output.value += currentValue
		setOut(output.value)
	}
	const equalOperation = value => {
		let output = refOutput.current
		try {
			output.value = eval(output.value)
			setOut(output.value)
		} catch (error) {
			output.value = 'ERROR'
			setTimeout(() => {
				output.value = '0'
			}, 1500)
		}
	}
	const tapeNumber = value => {
		let output = refOutput.current
		if (value !== 'AC') {
			let currentValue = value
			if (output.value === '0') {
				output.value = ''
			}
			output.value += currentValue
		} else {
			if (value === 'AC') {
				output.value = '0'
			}
		}
		setOut(output.value)
	}
	return (
		<div className='app'>
			<div className='calculator'>
				<InputItem refOutput={refOutput} out={out} />
				<div className='buttons'>
					<OperationItem arr={store.operation1} func={tapeOperation} />
					<div className='left_panel'>
						<NumbersItem arr={store.numbers3} func={tapeNumber} />
						<NumbersItem arr={store.numbers2} func={tapeNumber} />
						<NumbersItem arr={store.numbers1} func={tapeNumber} />
						<NumbersItem arr={store.others} func={tapeNumber} />
					</div>
					<EqualItem func={equalOperation} />
				</div>
			</div>
		</div>
	)
}

export default App
