function CreateCourse(name, numPeriods, workload) {
  this.name = name
  this.numPeriods = numPeriods
  this.workload = workload
}

function CreateUniver(name) {
  this.name = name
  this.courses = []
  this.addManyCourses = function (courses) {
    Array.prototype.push.apply(this.courses, courses)
  }

  this.addOneCourse = function (course) {
    this.courses.push(course)
  }

  this.removeOneCourse = function (course) {
    this.courses.splice(this.courses.indexOf(course), 1)
  }
}

function CreateRepubli(name, age, numResi) {
  this.name = name
  this.age = age
  this.numResi = numResi
}

function CreateDrink(name, cost) {
  this.name = name
  this.cost = cost
}

function CreatePerson(name, age, ident, course, univer, republic) {
  this.name = name
  this.age = age
  this.ident = ident
  this.course = course
  this.univer = univer
  this.republic = republic
  this.checarIDs = function (person) {
    if (this.name === 'André') {
      if (person.age >= 18) {
        return console.log(`${person.name} pode tomar cerveja.`)
      }
      return console.log(`${person.name} vai tomar Coca-Cola.`)
    }
    return console.log(`${this.name} não pode checar identidades. Apenas André pode.`)
  }
  this.pedirConta = function (request) {
    if (this.name !== 'André') {
      return console.log(`${request.calcularTotal()} ${request.calcularIndividual()}`)
    }
    return console.log('André não pode pedir a conta já que é o garçon.')
  }
}

function CreateRequest() {
  this.people = []
  this.requests = []

  this.addPerson = function (person) {
    this.people.push(person)
  }

  this.addPeople = function (people) {
    Array.prototype.push.apply(this.people, people)
  }

  this.removeOnePerson = function (person) {
    this.people.splice(this.requests.indexOf(person), 1)
  }

  this.addOneDrink = function (drink) {
    this.requests.push(drink)
  }

  this.addManyDrinks = function (drinks) {
    Array.prototype.push.apply(this.requests, drinks)
  }

  this.removeOneDrink = function (drink) {
    this.requests.splice(this.requests.indexOf(drink), 1)
  }

  this.calcularTotal = function () {
    let totalCost = 0
    for (const c in this.requests) {
      totalCost += this.requests[c].cost
    }
    return `A conta deu R$ ${totalCost.toFixed(2).replace('.', ',')} galerinha.`
  }

  this.calcularIndividual = function () {
    let totalCost = 0
    const numPeople = this.people.length
    for (const c in this.requests) {
      totalCost += this.requests[c].cost
    }
    return `Deu R$ ${(totalCost / numPeople).toFixed(2).replace('.', ',')} para cada um.`
  }
}

const republic = new CreateRepubli('Orfanato', 10, 5)
const course = new CreateCourse('Engenharia da Computação', 10, 3630)

const university = new CreateUniver('UFOP')
university.addOneCourse(course)

const pedro = new CreatePerson('Pedro', 20, '001', course, university, null)
const ana = new CreatePerson('Ana', 17, '002', course, university, null)
const paulo = new CreatePerson('Paulo', 23, '003', null, null, republic)
const armando = new CreatePerson('Armando', 17, '004', null, null, republic)
const andre = new CreatePerson('André', null, null, null, null, null)

const drink1 = new CreateDrink('Coca-Cola', 5.50)
const drink2 = new CreateDrink('Coca-Cola', 5.50)
const drink3 = new CreateDrink('Cerveja Skol', 8)
const drink4 = new CreateDrink('Cerveja Brahma', 8)

const myPeople = [pedro, ana, paulo, armando]
const myDrinks = [drink1, drink2, drink3, drink4]

const myRequest = new CreateRequest()
myRequest.addPeople(myPeople)
myRequest.addManyDrinks(myDrinks)

andre.checarIDs(ana)
andre.checarIDs(armando)
andre.checarIDs(pedro)
andre.checarIDs(paulo)

paulo.pedirConta(myRequest)