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
			<div className='flex flex-col w-screen h-screen overflow-hidden text-black bg-gray-100'>
				<div className='flex flex-col items-center justify-center pt-8 space-y-5 p b-4'>
					<div className='flex flex-col items-center justify-center'>
						<div className='font-light'>Spent this week</div>
						<div className='text-3xl font-medium'>$ 234</div>
					</div>
					<div>
						<button className='h-8 px-2 text-sm font-medium text-white bg-black rounded-md'>
							ADD EXPENSE
						</button>
					</div>
				</div>
				<div className='flex flex-col flex-1 py-4 space-y-4 overflow-y-auto bg-white border-t rounded-t-2xl'>
					<div className='flex items-center justify-between px-4'>
						<div className='text-lg font-light'>Expenses</div>
						<button className='flex items-center justify-center w-8 h-8'>
							<FiSearch />
						</button>
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
			</div>
			<div className='fixed inset-0'>
				<div className='absolute inset-0 bg-black/30'></div>
				<div className='absolute inset-x-0 bottom-0 w-full py-4 bg-white shadow-md rounded-t-xl h-[50vh]'>
					<div className='flex w-[200vw]'>
						<div className='flex-1 flex-shrink-0'>
							<div className='flex flex-col items-stretch justify-center px-4 space-y-4'>
								<div className='text-lg font-light text-center'>
									Add Expense
								</div>
								<div className='space-y-2'>
									<div className='text-sm font-light'>Choose category</div>
									<div className='divide-y'>
										<div className='p-2 text-sm font-bold'>Food</div>
										<div className='p-2 text-sm font-bold'>Transport</div>
										<div className='p-2 text-sm font-bold'>Entertainment</div>
										<div className='p-2 text-sm font-bold'>Shopping</div>
										<div className='p-2 text-sm font-bold'>Other</div>
									</div>
									<button className='w-full h-8 px-2 text-sm font-medium text-white bg-black rounded-md'>
										ADD CATEGORY
									</button>
								</div>
							</div>
						</div>

						<div className='flex-1 flex-shrink-0'>
							<div className='flex flex-col items-stretch justify-center px-4 space-y-4'>
								<div className='text-lg font-light text-center'>
									Add Expense
								</div>
								<div className='space-y-2'>
									<div className='text-sm font-light'>Choose category</div>
									<div className='divide-y'>
										<div className='p-2 text-sm font-bold'>Food</div>
										<div className='p-2 text-sm font-bold'>Transport</div>
										<div className='p-2 text-sm font-bold'>Entertainment</div>
										<div className='p-2 text-sm font-bold'>Shopping</div>
										<div className='p-2 text-sm font-bold'>Other</div>
									</div>
									<button className='w-full h-8 px-2 text-sm font-medium text-white bg-black rounded-md'>
										ADD CATEGORY
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Home
