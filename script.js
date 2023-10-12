const nav = document.getElementById('nav-div');
const sTable = document.querySelector('.s-table')
const fTable = document.querySelector('.f-table')
const nextBtn0 = document.getElementsByClassName('next-btn')[0]
const nextBtn1 = document.getElementsByClassName('next-btn')[1]
const plusBtn = document.querySelectorAll('.plus-btn');
const note1 = document.querySelector('#note1')
const box = document.querySelectorAll('.box')
const plus1 = document.querySelector('#plus1')
const next = document.querySelectorAll('.next-btn')
const li = document.querySelectorAll('li')


















const scroll = function () {
    nav.style.backgroundColor = '#141617'
}


fTable.addEventListener('mouseover', () => {
    nextBtn0.style.backgroundColor = '#007bff'
})

fTable.addEventListener('mouseout', () => {
    nextBtn0.style.backgroundColor = '#31363c'
})

sTable.addEventListener('mouseover', () => {
    nextBtn1.style.backgroundColor = '#007bff'
})

sTable.addEventListener('mouseout', () => {
    nextBtn1.style.backgroundColor = '#31363c'
})




box.forEach(x => {
    x.addEventListener('click', () => {
        next.forEach(e => {
            e.style.backgroundColor = 'green'
            x.style.backgroundColor = 'red'

        })

    })
})

const testSon = document.querySelectorAll('#test-son')
const testText = document.querySelectorAll('#testText')

testSon.forEach(x => {
    x.addEventListener('click', () => {
        
            x.style.backgroundColor = 'black'
            testText.style.color = 'white'
            



        })
    




})
































