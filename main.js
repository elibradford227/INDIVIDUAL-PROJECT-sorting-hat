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

const app = document.querySelector('#students')

const renderToDom = (divId, html) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = html;
}

const cardsOnDom = (divId, array) => {
  let domString = ''
  for (const student of array) {
    domString += 
    `<div class="col">
      <div class="card" style="width: 15rem;">
        <div class="card-body">
          <h5 class="card-title">${student.name}</h5>
          <p>${student.house}</p>
          <a href="#" class="btn btn-danger" id="delete--${student.id}">Expel</a>
        </div>
      </div>
     </div>
     `  
  }
  renderToDom(divId, domString)
}

const cardsOnDomExpel = (divId, array) => {
  let domString = '';
  for (const student of array) {
    domString += 
    `<div class="col">
      <div class="card" style="width: 15rem;">
        <div class="card-body">
          <h5 class="card-title">${student.name}</h5>
          <p>${student.house}</p>
        </div>
      </div>
     </div>
     `  
  }
  renderToDom(divId, domString)
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
const addBtn = document.querySelector('#add')

allBtn.addEventListener('click', () => {
  cardsOnDom('#students', hogwarts)
})

gryffindorBtn.addEventListener('click', () => {
  const gryf = filter(hogwarts, 'Gryffindor');
  cardsOnDom('#students', gryf)
})

slytherinBtn.addEventListener('click', () => {
  const slyth = filter(hogwarts, 'Slytherin');
  cardsOnDom('#students', slyth)
})

ravenclawBtn.addEventListener('click', () => {
  const raven = filter(hogwarts, 'Ravenclaw');
  cardsOnDom('#students', raven)
})

hufflepuffBtn.addEventListener('click', () => {
  const huff = filter(hogwarts, 'Hufflepuff');
  cardsOnDom('#students', huff)
})



const form = document.querySelector('form');

const newStudent = (e) => {
  e.preventDefault();
  function randNumber() {
    let num = Math.floor(Math.random() * (5 - 1) + 1);
    if (num === 1) {
      return 'Gryffindor'
    } else if (num === 2) {
      return 'Slytherin'
    } else if (num === 3) {
      return 'Ravenclaw'
    } else  {
      return 'Hufflepuff'
    }
  }

  const newStudentObj = {
    id: hogwarts.length + 1,
    name: document.querySelector('#studentName').value,
    house: `${randNumber()}`,
    color: 'yellow'
  }
  hogwarts.push(newStudentObj)
  cardsOnDom('#students', hogwarts)
  form.reset();
}

form.addEventListener('submit', newStudent)

let expel = []

app.addEventListener('click', (e => {
  const [, id] = e.target.id.split('--');
  if(e.target.id.includes("delete")) {
    const index = hogwarts.findIndex(e => e.id === Number(id));
    let expelledStudent = hogwarts.splice(index, 1);
    expel.push(...expelledStudent)
    cardsOnDomExpel('#expel', expel)
    cardsOnDom('#students', hogwarts)
  }
}))

const startApp = () => {
  cardsOnDom('#students', hogwarts)
  cardsOnDom('#expel', expel)
}

startApp();