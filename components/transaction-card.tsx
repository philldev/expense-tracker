export const TransactionCard = () => {
	return (
		<div className='flex items-center px-4 py-3 shadow-sm rounded-md border'>
			<div className='flex space-x-2 items-center flex-1'>
				<div className='bg-emerald-300 h-4 w-4 rounded-full'></div>
				<div>
					<div className='font-light'>Food</div>
					<div className='text-xs text-gray-400'>Groceries</div>
				</div>
			</div>
			<div>$ 234</div>
		</div>
	)
}
