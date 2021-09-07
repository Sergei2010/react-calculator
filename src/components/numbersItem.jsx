const NumbersItem = props => {
	return (
		<div className='numbers'>
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
export default NumbersItem 
