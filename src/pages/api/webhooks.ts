import { NextApiRequest, NextApiResponse } from "next";

// RODAR: stripe listen --forward-to localhost:3000/api/webhooks

// eslint-disable-next-line import/no-anonymous-default-export
export default (req: NextApiRequest, res: NextApiResponse) => {
  console.log('evento recebido')

  res.status(200).json({ ok: true })
}