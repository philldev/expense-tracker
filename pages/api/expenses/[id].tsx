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
		const expense = await db.expense.findUnique({
			where: { id: req.query.id as string },
		})
		if (expense?.userId !== userId) {
			return res.status(401).json({
				error: 'Unauthorized',
			})
		}
		return res.status(200).json(expense)
	} else if (req.method === 'PUT') {
		const { amount, date, note, category } = req.body

		if (!amount || !date || !category) {
			return res.status(400).json({
				error: 'Missing required fields',
			})
		}

		const expense = await db.expense.update({
			where: { id: req.query.id as string },
			data: {
				amount,
				date,
				note,
				category,
			},
		})
		return res.status(200).json(expense)
	} else if (req.method === 'DELETE') {
		const expense = await db.expense.delete({
			where: { id: req.query.id as string },
		})
		return res.status(200).json(expense)
	} else {
		return res.status(404).json({
			error: 'Method not supported',
		})
	}
}
