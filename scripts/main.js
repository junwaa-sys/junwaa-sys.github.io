function myFunction() {
  let sentence = document.getElementById('sentence')
  sentence.innerHTML = 'This has been Changed, notice what is changed?!!'
  sentence.classList.add('red-text')
}

let carsOdj = {
  model3: {
    make: 'Tesla',
    price: 70000,
    fuel: 'electric',
  },

  tiguan: {
    make: 'Volkwagen',
    price: 70000,
    fuel: 'petrol',
  },

  911: {
    make: 'porsche',
    price: 250000,
    fuel: 'petrol',
  },
}

let carsArr = ['model3', 'tiguan', '911']

function getDataObj() {
  let obj = document.getElementById('object1').value
  let property = document.getElementById('property').value
  let objData = carsOdj[obj][property]
  document.getElementById('data-obj').innerHTML = objData
}

function getDataArr() {
  let indexNumber = document.getElementById('arrIndex').value
  let arrData = carsArr[indexNumber]
  document.getElementById('data-arr').innerHTML = arrData
}
