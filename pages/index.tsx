import clsx from 'clsx'
import type { NextPage } from 'next'
import { signIn, signOut, useSession } from 'next-auth/react'
import Head from 'next/head'
import { useState } from 'react'
import { FiSearch, FiX } from 'react-icons/fi'
import { AddExpenseModal } from '../components/add-expense-modal'
import { TransactionCard } from '../components/transaction-card'

const Home: NextPage = () => {
	const { data: session } = useSession()
	if (session === undefined) return <Loader />
	if (!session) return <Login />
	return (
		<>
			<Head>
				<title>Expense Tracker</title>
			</Head>
			<div className='flex flex-col w-screen h-screen overflow-hidden text-black bg-gray-100'>
				<div className='relative flex flex-col py-8 space-y-5'>
					<div className='flex items-center px-4 space-x-2'>
						<div className='flex-1 font-light'>
							Hello <span className='font-medium'>{session.user?.name}</span>
						</div>
						<button className='h-8 px-2' onClick={() => signOut()}>
							logout
						</button>
					</div>
					<ExpenseOverview />
				</div>
				<Expenses />
			</div>
		</>
	)
}

const Loader = () => {
	return (
		<div className='flex flex-col items-center justify-center h-screen'>
			<div className='text-6xl font-bold'>Loading...</div>
		</div>
	)
}

const Login = () => {
	return (
		<div className='flex flex-col items-center justify-center h-screen'>
			<div className='mb-8 text-2xl font-light'>Expense Tracker App</div>
			<button
				className='h-8 px-2 text-white bg-black rounded-md'
				onClick={() => signIn('google')}
			>
				Login
			</button>
		</div>
	)
}

type ExpenseOverviewDateRange = 'week' | 'month' | 'year'

const ExpenseOverview = () => {
	const [dateRange, setDateRange] = useState<ExpenseOverviewDateRange>('month')
	return (
		<>
			<div className='px-4 space-x-2'>
				<button
					onClick={() => {
						if (dateRange !== 'week') setDateRange('week')
					}}
					className={clsx(
						'h-8 px-2 text-sm font-medium border-gray-400 border rounded-md',
						dateRange === 'week' && 'border-black bg-black text-white'
					)}
				>
					Week
				</button>
				<button
					onClick={() => {
						if (dateRange !== 'month') setDateRange('month')
					}}
					className={clsx(
						'h-8 px-2 text-sm font-medium border-gray-400 border rounded-md',
						dateRange === 'month' && 'border-black bg-black text-white'
					)}
				>
					Month
				</button>
			</div>
			<div className='relative flex flex-col px-4'>
				<div className='text-4xl font-medium'>$234</div>
				<div className='text-sm font-light text-gray-500'>
					Spent this {dateRange}
				</div>
				<AddExpense />
			</div>
		</>
	)
}

const Expenses = () => {
	const [isSearching, setIsSearching] = useState(false)
	const closeSearching = () => setIsSearching(false)
	const openSearching = () => setIsSearching(true)
	return (
		<div className='flex flex-col flex-1 py-4 space-y-4 overflow-y-auto bg-white border-t rounded-t-2xl'>
			<div className='flex items-center justify-between px-4 space-x-4'>
				<div className='text-lg font-light'>Expenses</div>
				{isSearching ? (
					<div className='relative flex-1'>
						<input
							placeholder='Search'
							className='w-full h-8 px-4 border border-gray-400 rounded-md'
						/>
						<button
							onClick={closeSearching}
							className='absolute inset-y-0 top-0 right-2'
						>
							<FiX />
						</button>
					</div>
				) : (
					<button
						onClick={openSearching}
						className='flex items-center justify-center w-8 h-8'
					>
						<FiSearch />
					</button>
				)}
			</div>
			<div className='flex flex-col flex-1 px-4 space-y-2 overflow-y-auto'>
				<TransactionCard />
				<TransactionCard />
				<TransactionCard />
				<TransactionCard />
				<TransactionCard />
				<TransactionCard />
				<TransactionCard />
				<TransactionCard />
				<TransactionCard />
				<TransactionCard />
				<TransactionCard />
			</div>
		</div>
	)
}

const AddExpense = () => {
	const [isOpen, setIsOpen] = useState(false)
	const open = () => setIsOpen(true)
	const close = () => setIsOpen(false)
	return (
		<div>
			<button
				onClick={open}
				className='absolute w-8 h-8 text-sm font-medium text-white bg-black rounded-full top-4 right-4'
			>
				+
			</button>
			<AddExpenseModal isOpen={isOpen} onClose={close} />
		</div>
	)
}

export default Home
