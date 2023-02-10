let currentPage = window.location.href
let lastIndex = currentPage.lastIndexOf('/')

currentPage = currentPage.substring(lastIndex + 1, currentPage.length - 5)

function changeHeading(heading) {
  document.getElementById('pageHeading').innerHTML = `Joon's Blog - ${heading}`
}

changeHeading(currentPage)
