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
// get a example code from https://www.tutorialspoint.com/How-to-load-external-HTML-into-a-div-using-jQuery
function loadContent(pageName) {
  $('#mainContent').load(`/blogs/${pageName}.html`)
  changeHeading(pageName)
  window.history.pushState(
    'object or string',
    'Title',
    `/blogs/${pageName}.html`
  )
}
function activeTopNav(activePage) {
  inactiveTopNav()
  $(activePage).addClass('active')
}
function inactiveTopNav() {
  $('a').removeClass('active')
}
function changeHeading(heading) {
  document.getElementById('pageHeading').innerHTML = `Joon's Blog - ${heading}`
}
