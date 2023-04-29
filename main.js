const hogwarts = [
  {
    id: 1,
    name: 'Harry',
    house: 'Gryffindor',
    color: 'red'
  },
  {
    id: 2,
    name: 'Hermoine',
    house: 'Gryffindor',
    color: 'red'
  },
  {
    id: 3,
    name: 'Ron',
    house: 'Gryffindor',
    color: 'red'
  },
  {
    id: 4,
    name: 'Draco',
    house: 'Slytherin',
    color: 'green'
  },
  {
    id: 5,
    name: 'Neville',
    house: 'Gryffindor',
    color: 'red'
  },
  {
    id: 6,
    name: 'Luna',
    house: 'Ravenclaw',
    color: 'blue'
  },
  {
    id: 7,
    name: 'Cedric',
    house: 'Hufflepuff',
    color: 'yellow'
  },
  {
    id: 8,
    name: 'Justin',
    house: 'Hufflepuff',
    color: 'yellow'
  },
  {
    id: 9,
    name: 'Olivia',
    house: 'Slytherin',
    color: 'green'
  }
];

const app = document.querySelector('#app')

const renderToDom = (divId, html) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = html;
}

const cardsOnDom = (array) => {
  let domString = '';
  for (const student of array) {
    domString += 
    `<div class="col">
      <div class="card" style="width: 15rem;">
        <div class="card-body">
          <h5 class="card-title">${student.name}</h5>
          <p>${student.house}</p>
          <a href="#" class="btn btn-danger">Expel</a>
        </div>
      </div>
     </div>
     `
  }
  renderToDom('#students', domString)
}

const filter = (array, house) => {
  const houseArray = [];
  for (const student of array) {
    if (student.house === house) {
      houseArray.push(student);
    }
  }
  return houseArray
}

const allBtn = document.querySelector("#all")
const gryffindorBtn = document.querySelector('#gryffindor')
const slytherinBtn = document.querySelector('#slytherin')
const ravenclawBtn = document.querySelector('#ravenclaw')
const hufflepuffBtn = document.querySelector('#hufflepuff')

allBtn.addEventListener('click', () => {
  cardsOnDom(hogwarts)
})

gryffindorBtn.addEventListener('click', () => {
  const gryf = filter(hogwarts, 'Gryffindor');
  cardsOnDom(gryf)
})

slytherinBtn.addEventListener('click', () => {
  const slyth = filter(hogwarts, 'Slytherin');
  cardsOnDom(slyth)
})

ravenclawBtn.addEventListener('click', () => {
  const raven = filter(hogwarts, 'Ravenclaw');
  cardsOnDom(raven)
})

hufflepuffBtn.addEventListener('click', () => {
  const huff = filter(hogwarts, 'Hufflepuff');
  cardsOnDom(huff)
})

const startApp = () => {
  cardsOnDom(hogwarts)
}

startApp();