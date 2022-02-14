import { Expense } from '@prisma/client'
import { FC, useState } from 'react'

type FormValues = Omit<Expense, 'id' | 'tags' | 'userId'>

type FormErrors = Partial<Record<keyof FormValues, string>>

export const getDateString = (date: string | Date) => {
	const d = new Date(date)
	return d.toISOString().split('T')[0]
}

export const ExpenseForm: FC<{
	onCancel: () => void
	expense?: Expense
}> = (props) => {
	const initialValues: FormValues = props.expense ?? {
		amount: 0,
		date: new Date(),
		note: '',
		category: '',
	}

	const [errorsMsg, setErrorsMsg] = useState<FormErrors>({})

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		setErrorsMsg({})

		const form = e.currentTarget
		const formData = new FormData(form)
		const values: FormValues = {
			amount: parseFloat(formData.get('amount') as string),
			date: new Date(formData.get('date') as string),
			note: formData.get('note') as string,
			category: formData.get('category') as string,
		}

		const errors: FormErrors = {}

		if (!values.amount) errors.amount = 'Required'
		if (!values.date) errors.date = 'Required'
		if (!values.category) errors.category = 'Required'

		if (values.amount < 0) errors.amount = 'Must be greater than 0'
		if (values.note && values.note.length > 100)
			errors.note = 'Must be less than 100 characters'

		const isValid = Object.keys(errors).length === 0

		if (isValid) {
			console.log('valid', values)
		} else {
			setErrorsMsg(errors)
		}
	}

	return (
		<form
			onSubmit={onSubmit}
			className='flex flex-col items-stretch justify-center px-4 space-y-10'
		>
			<div className='space-y-2'>
				<fieldset className='space-y-1'>
					<label className='text-sm font-light'>Category</label>
					<select
						defaultValue={initialValues.category!}
						name='category'
						className='w-full h-10 px-2 text-black border rounded-md'
					>
						<option value=''>Select Category</option>
						<option value='Food'>Food</option>
						<option value='Transportation'>Transportation</option>
						<option value='Entertainment'>Entertainment</option>
						<option value='Shopping'>Shopping</option>
						<option value='Other'>Other</option>
					</select>
					{errorsMsg.category && (
						<p className='text-sm text-red-600'>{errorsMsg.category}</p>
					)}
				</fieldset>
				<fieldset className='space-y-1'>
					<label className='text-sm font-light'>Enter Amount</label>
					<input
						defaultValue={initialValues.amount}
						name='amount'
						type='number'
						placeholder='$123'
						className='w-full h-10 px-2 text-black border rounded-md'
					/>
					{errorsMsg.amount && (
						<p className='text-sm text-red-600'>{errorsMsg.amount}</p>
					)}
				</fieldset>
				<fieldset className='space-y-1'>
					<label className='text-sm font-light'>Note</label>
					<input
						defaultValue={initialValues.note!}
						name='note'
						placeholder='Expense Note'
						className='w-full h-10 px-2 text-black border rounded-md'
					/>
					{errorsMsg.note && (
						<p className='text-sm text-red-600'>{errorsMsg.note}</p>
					)}
				</fieldset>
				<fieldset className='space-y-1'>
					<label className='text-sm font-light'>Date</label>
					<input
						defaultValue={getDateString(initialValues.date)}
						name='date'
						type='date'
						className='w-full h-10 px-2 text-black border rounded-md'
					/>
					{errorsMsg.date && (
						<p className='text-sm text-red-600'>{errorsMsg.date}</p>
					)}
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
