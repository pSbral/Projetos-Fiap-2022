//pegar pelo id
const getId1 = document.getElementById('herois')
console.log(getId1)

const getId2 = document.querySelector('#heroiUm')
console.log(getId2)

//pegar pela class
const getClass1 = document.getElementsByClassName('heroi')
console.log(getClass1)

const getClass2 = document.querySelectorAll('.nome')
console.log(getClass2)
console.log(getClass2[0].textContent)
getClass2[1].textContent = 'Cavalo Galopeiro'

console.log(getClass2[3].innerHTML)

//pegar pela tag
const getTag1 = document.getElementsByTagName('td')
console.log(getTag1)

const getTag2 = document.querySelectorAll('tr')
console.log(getTag2)