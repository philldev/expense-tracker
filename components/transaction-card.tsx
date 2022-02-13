export const TransactionCard = () => {
	return (
		<div className='flex items-center px-4 py-3 border rounded-md shadow-sm'>
			<div className='flex items-center flex-1 space-x-2'>
				{/* <div className='w-4 h-4 rounded-full bg-emerald-300'></div> */}
				<div>
					<div className='font-light'>Food</div>
					<div className='text-xs text-gray-400'>Groceries</div>
				</div>
			</div>
			<div>$ 234</div>
		</div>
	)
}
