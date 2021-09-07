/* eslint no-eval:0 */
import React from 'react'
import '../src/index.css'
import store from '../_store'

class App extends React.Component {
	constructor() {
		super()
		this.state = {
			out: '0',
		}
		this.refOutput = React.createRef()
	}
	tapeNumber(value) {
		let currentValue = value
		let output = this.ref.output.current
		this.setState({
			out: currentValue,
		})
		if (output.value === '0') {
			output.value = ''
		}
		output.value += currentValue
	}
	tapeOperation(value) {
		let output = this.ref.output.current
		if (value === 'CE') {
			output.value.length === 1
				? (output.value = '0')
				: (output.value = output.value.substring(0, output.value.length - 1))
		} else if (value === 'C') {
			output.value = '0'
		} else if (value === '=') {
			try {
				output.value = eval(output.value)
			} catch {
				output.value = 'Недопустимое значение'
				setTimeout(() => {
					output.value = '0'
				}, 1500)
			}
		}
	}
	render() {
		return (
			<div class='container'>
				<div class='output'>
					<input
						ref={this.ref.output}
						type='text'
						defaultValue={this.state.out}
					/>
				</div>
				<div class='buttons'>
					{store.buttons.map((item, index) => (
						<button
							key={index}
							onClick={() => {
								this.tapeNumber(item.val)
							}}
						>
							{item.val}
						</button>
					))}
					{store.operation.map((item, index) => (
						<button
							key={index}
							onClick={() => {
								this.tapeOperation(item.val)
							}}
						>
							{item.val}
						</button>
					))}
				</div>
			</div>
		)
	}
}

export default App
