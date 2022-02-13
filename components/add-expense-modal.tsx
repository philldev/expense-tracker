import { FC } from 'react'
import { ExpenseForm } from './expense-form'

export const AddExpenseModal: FC<{
	onClose: () => void
	isOpen: boolean
}> = (props) => {
	if (!props.isOpen) return null
	return (
		<div className='fixed inset-0'>
			<div
				onClick={props.onClose}
				className='absolute inset-0 bg-black/30'
			></div>
			<div className='absolute inset-x-0 bottom-0 w-full py-4 bg-white shadow-md rounded-t-xl'>
				<ExpenseForm onCancel={props.onClose} />
			</div>
		</div>
	)
}
