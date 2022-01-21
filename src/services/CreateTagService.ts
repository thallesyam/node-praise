import { getCustomRepository } from 'typeorm'
import { TagsRepositories } from '../repositories/TagsRepositories'

type IUserRequest = {
  name: string
  email: string
  admin?: boolean
}

class CreateTagService {
  async execute({ name, email, admin = false }: IUserRequest) {}
}

export { CreateTagService }
