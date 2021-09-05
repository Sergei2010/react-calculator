import logo from './logo.svg'
import './App.css'

function App() {
	return (
		<div className='App'>
			<div class='calculator'>
				<div class='input'>0</div>
				<div class='buttons'>
					<div class='operators'>
						<div>+</div>
						<div>-</div>
						<div>*</div>
						<div>/</div>
					</div>
					<div class='leftPanel'>
						<div class='numbers'>
							<div>7</div>
							<div>8</div>
							<div>9</div>
						</div>
						<div class='numbers'>
							<div>4</div>
							<div>5</div>
							<div>6</div>
						</div>
						<div class='numbers'>
							<div>1</div>
							<div>2</div>
							<div>3</div>
						</div>
						<div class='numbers'>
							<div>0</div>
							<div>.</div>
							<div>AC</div>
						</div>
					</div>
					<div class='equal'>=</div>
				</div>
			</div>
		</div>
	)
}

export default App
