const EqualItem = props => (
	<div
		className='equal'
		onClick={() => {
			props.func()
		}}
	>
		=
	</div>
)

export default EqualItem
