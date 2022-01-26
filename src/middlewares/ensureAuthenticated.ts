import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'

type IPayload = {
  sub: string
}

export function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authToken = request.headers.authorization

  if (!authToken) {
    return response.status(401).json({
      error: 'Missing token',
    })
  }

  const [, token] = authToken.split(' ')

  try {
    const { sub } = verify(token, process.env.TOKEN_JWT) as IPayload

    request.user_id = sub

    return next()
  } catch (error) {
    return response.status(401).json({
      error: 'Missing token',
    })
  }
}
