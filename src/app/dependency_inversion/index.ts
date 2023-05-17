interface Pato {
  nombre: string
  nadar: () => void
}

function presentarPato (pato: Pato): void {
  console.log(`Este es ${pato.nombre}.`)
  pato.nadar()
}

const patoSalvaje: Pato = {
  nombre: 'Pato Salvaje',
  nadar: () => {
    console.log('Estoy nadando en el lago.')
  }
}

const patoDeGoma: Pato = {
  nombre: 'Pato de Goma',
  nadar: () => {
    console.log('Estoy flotando en la bañera.')
  }
}

presentarPato(patoSalvaje)
presentarPato(patoDeGoma)
