import type { NextApiRequest, NextApiResponse } from 'next'

export default function RankJudgeApi(
  req: NextApiRequest,
  res: NextApiResponse
): void {
    res.status(200).json({ message: 'No data.'})
}