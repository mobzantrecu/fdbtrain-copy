import { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { secret } = req.query

  try {
    if (
      typeof secret !== 'string' ||
      secret !== process.env.NEXT_PUBLIC_CONTENTFUL_PREVIEW_SECRET
    ) {
      return res.status(401).json({ message: 'Not authorized' })
    }

    res.setPreviewData({})

    res.status(200).json({ message: 'ok' })
  } catch (error: any) {
    console.error(error)
    res.status(500).json({ message: error.message })
  }
}
