import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/react'
import db from '../../../prisma/db'

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const session = await getSession({ req })

	if (!session) {
		return res.send({
			content:
				'This is protected content. You can access this content because you are signed in.',
		})
	}

	const userId = session.userId as string

	if (req.method === 'GET') {
		const expenses = await db.expense.findMany({
			where: { userId },
		})
		return res.status(200).json(expenses)
	} else if (req.method === 'POST') {
		const { amount, date, note, category } = req.body

		if (!amount || !date || !category) {
			return res.status(400).json({
				error: 'Missing required fields',
			})
		}

		const expense = await db.expense.create({
			data: {
				amount,
				date,
				note,
				category,
				user: { connect: { id: userId } },
			},
		})

		return res.status(200).json(expense)
	} else {
		return res.status(404).json({
			error: 'Method not supported',
		})
	}
}
