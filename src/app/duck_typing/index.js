function presentarPato (pato) {
  console.log(`Este es ${pato.nombre}.`)
  pato.nadar()
}

const patoSalvaje = {
  nombre: 'Pato Salvaje',
  nadar: () => {
    console.log('Estoy nadando en el lago.')
  }
}

const patoDeGoma = {
  nombre: 'Pato de Goma',
  nadar: () => {
    console.log('Estoy flotando en la bañera.')
  }
}

presentarPato(patoSalvaje)
presentarPato(patoDeGoma)
