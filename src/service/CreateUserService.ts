import { UsersRepositories } from '../repositories/UsersRepositories'

type IUserRequest = {
  name: string
  email: string
  admin?: boolean
}

class CreateUserService {
  async execute({ name, email, admin = false }: IUserRequest) {
    const usersRepository = new UsersRepositories()

    if (!email) {
      throw new Error('Email incorrect')
    }

    const userAlreadyExists = await usersRepository.findOne({
      email,
    })

    if (userAlreadyExists) {
      throw new Error(`User ${email} already exists`)
    }

    const user = usersRepository.create({
      name,
      email,
      admin,
    })

    await usersRepository.save(user)

    return user
  }
}

export { CreateUserService }
