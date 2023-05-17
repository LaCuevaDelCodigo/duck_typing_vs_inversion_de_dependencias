/* eslint-disable @typescript-eslint/no-floating-promises */
interface User {
  id: string
  name: string
}

interface UserRepository {
  save: (user: User) => Promise<void>
}

async function crearUsuario (user: User, repositorio: UserRepository): Promise<void> {
  await repositorio.save(user)
}

const mysqlUserRepository: UserRepository = {
  save: async (user: User) => {
    console.log(`Usuario ${user.name} guardado en MySQL.`)
  }
}

const mongoUserRepository: UserRepository = {
  save: async (user: User) => {
    console.log(`Usuario ${user.name} guardado en Mongo.`)
  }
}

const user: User = {
  id: '1',
  name: 'Pepe'
}

crearUsuario(user, mysqlUserRepository)
crearUsuario(user, mongoUserRepository)
