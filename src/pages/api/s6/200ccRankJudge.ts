import type { NextApiRequest, NextApiResponse } from 'next'

export default function RankJudgeApi(
    req: NextApiRequest,
    res: NextApiResponse
  ): void {
    const mmr = Number(req.query.mmr)

    if (mmr >= 11000) {
      res.status(200).json({ mmr: mmr, rank: 'Grandmaster'})
    }
    else if(mmr >= 9000){
      res.status(200).json({ mmr: mmr, rank: 'Master'})
    }
    else if(mmr >= 7500){
      res.status(200).json({ mmr: mmr, rank: 'Diamond'})
    }
    else if(mmr >= 6000){
      res.status(200).json({ mmr: mmr, rank: 'Platium'})
    }
    else if(mmr >= 4500){
      res.status(200).json({ mmr: mmr, rank: 'Gold'})
    }
    else if(mmr >= 3000){
      res.status(200).json({ mmr: mmr, rank: 'Silver'})
    }
    else if(mmr >= 1500){
      res.status(200).json({ mmr: mmr, rank: 'Bronze'})
    }
    else if(mmr >= 0){
      res.status(200).json({ mmr: mmr, rank: 'Iron'})
    }
    else {
      res.status(400).json({ message: `Not found!` })
    }
  }