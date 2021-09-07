const Operation2Item = props => {
	return (
		<div className='operators'>
			{props.arr.map((item, index) => (
				<div
					key={index}
					onClick={() => {
						props.func(item.val)
					}}
				>
					{item.val}
				</div>
			))}
		</div>
	)
}
export default Operation2Item