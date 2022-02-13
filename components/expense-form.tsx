import { FC } from 'react'

export const ExpenseForm: FC<{
	onCancel: () => void
}> = (props) => {
	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
	}
	return (
		<form className='flex flex-col items-stretch justify-center px-4 space-y-10'>
			<div className='space-y-2'>
				<fieldset className='space-y-1'>
					<label className='text-sm font-light'>Name</label>
					<input
						name='expenseName'
						placeholder='Expense Name'
						className='w-full h-10 px-2 text-black border rounded-md'
					/>
				</fieldset>
				<fieldset className='space-y-1'>
					<label className='text-sm font-light'>Enter Amount</label>
					<input
						name='amount'
						type='number'
						placeholder='$123'
						className='w-full h-10 px-2 text-black border rounded-md'
					/>
				</fieldset>
				<fieldset className='space-y-1'>
					<label className='text-sm font-light'>Category</label>
					<select
						name='category'
						className='w-full h-10 px-2 text-black border rounded-md'
					>
						<option>Food</option>
						<option>Transportation</option>
						<option>Entertainment</option>
						<option>Shopping</option>
						<option>Other</option>
					</select>
				</fieldset>
				<fieldset className='space-y-1'>
					<label className='text-sm font-light'>Date</label>
					<input
						name='date'
						type='date'
						className='w-full h-10 px-2 text-black border rounded-md'
					/>
				</fieldset>
			</div>

			<div className='flex justify-end space-x-2'>
				<button
					onClick={props.onCancel}
					className='h-8 px-2 text-sm font-medium rounded-md'
				>
					CANCEL
				</button>
				<button className='h-8 px-2 text-sm font-medium text-white bg-black rounded-md'>
					ADD EXPENSE
				</button>
			</div>
		</form>
	)
}
