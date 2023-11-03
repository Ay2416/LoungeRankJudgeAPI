import type { NextApiRequest, NextApiResponse } from 'next'

export default function RankJudgeApi(
    req: NextApiRequest,
    res: NextApiResponse
  ): void {
    const mmr = Number(req.query.mmr)

    if (mmr >= 17000) {
      res.status(200).json({ mmr: mmr, rank: 'Grandmaster'})
    }
    else if(mmr >= 16000){
      res.status(200).json({ mmr: mmr, rank: 'Master'})
    }
    else if(mmr >= 15000){
      res.status(200).json({ mmr: mmr, rank: 'Diamond 2'})
    }
    else if(mmr >= 14000){
      res.status(200).json({ mmr: mmr, rank: 'Diamond 1'})
    }
    else if(mmr >= 13000){
      res.status(200).json({ mmr: mmr, rank: 'Ruby 2'})
    }
    else if(mmr >= 12000){
      res.status(200).json({ mmr: mmr, rank: 'Ruby 1'})
    }
    else if(mmr >= 11000){
      res.status(200).json({ mmr: mmr, rank: 'Sapphire 2'})
    }
    else if(mmr >= 10000){
      res.status(200).json({ mmr: mmr, rank: 'Sapphire 1'})
    }
    else if(mmr >= 9000){
      res.status(200).json({ mmr: mmr, rank: 'Platium 2'})
    }
    else if(mmr >= 8000){
      res.status(200).json({ mmr: mmr, rank: 'Platium 1'})
    }
    else if(mmr >= 7000){
      res.status(200).json({ mmr: mmr, rank: 'Gold 2'})
    }
    else if(mmr >= 6000){
      res.status(200).json({ mmr: mmr, rank: 'Gold 1'})
    }
    else if(mmr >= 5000){
      res.status(200).json({ mmr: mmr, rank: 'Silver 2'})
    }
    else if(mmr >= 4000){
      res.status(200).json({ mmr: mmr, rank: 'Silver 1'})
    }
    else if(mmr >= 3000){
      res.status(200).json({ mmr: mmr, rank: 'Bronze 2'})
    }
    else if(mmr >= 2000){
      res.status(200).json({ mmr: mmr, rank: 'Bronze 1'})
    }
    else if(mmr >= 1000){
      res.status(200).json({ mmr: mmr, rank: 'Iron 2'})
    }
    else if(mmr >= 0){
      res.status(200).json({ mmr: mmr, rank: 'Iron 1'})
    }
    else {
      res.status(400).json({ message: `Not found!` })
    }
  }