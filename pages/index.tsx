import type { NextPage } from 'next'
import Head from 'next/head'
import { TransactionCard } from '../components/transaction-card'
import { FiPlus, FiSearch } from 'react-icons/fi'

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Expense Tracker</title>
			</Head>
			<div className='w-screen overflow-hidden h-screen bg-gray-100 text-black flex flex-col'>
				<div className='flex items-center justify-center flex-col pt-8 pb-4 space-y-5'>
					<div className='flex flex-col justify-center items-center'>
						<div className='font-light'>Spent this week</div>
						<div className='font-medium text-3xl'>$ 234</div>
					</div>
					<div>
						<button className='text-sm font-medium bg-black h-8 px-2 text-white rounded-md'>
							ADD EXPENSE
						</button>
					</div>
				</div>
				<div className='flex-1 py-4 space-y-4 bg-white rounded-t-2xl flex flex-col overflow-y-auto border-t'>
					<div className='px-4 flex items-center justify-between'>
						<div className='font-light text-lg'>Expenses</div>
						<button className='h-8 w-8 flex items-center justify-center'>
							<FiSearch />
						</button>
					</div>
					<div className='flex flex-col space-y-2 flex-1 px-4 overflow-y-auto'>
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
			</div>
		</>
	)
}

export default Home
