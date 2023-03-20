import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const { q } = req.query

    const response = await fetch(`https://api.twitter.com/1.1/search/tweets.json?q=${q}&count=100`, {
      headers: {
        'Authorization': `Bearer ${process.env.TWITTER_BEARER_TOKEN}`,
      },
    })

    const data = await response.json()
    res.status(200).json(data)
  } catch (error) {
    console.error(error)

    res.status(500).json({ error: 'Something went wrong' })
  }
}
