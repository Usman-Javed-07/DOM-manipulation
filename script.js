// dom manipulation 
// event delegation

// document.querySelector('#football').addEventListener ('click', function (e) {

//     console.log('football is clicked');
//     const target = e.target;

//     if(target.matches('li')) {
//         target.style.backgroundColor = 'blue'
//     }
// })

// document.querySelector('#basketball').addEventListener ('click', function (e) {

//     console.log('basketball is clicked');
//     const target = e.target;

//     if(target.matches('li')) {
//         target.style.backgroundColor = 'blue'
//     }
// })



// document.querySelector('#boxing').addEventListener ('click', function (e) {

//     console.log('boxing is clicked');
//     const target = e.target;

//     if(target.matches('li')) {
//         target.style.backgroundColor = 'blue'
//     }
// })


// document.querySelector('#tennis').addEventListener ('click', function (e) {

//     console.log('tennis is clicked');
//     const target = e.target;

//     if(target.matches('li')) {
//         target.style.backgroundColor = 'blue'
//     }
// })


// document.querySelector('#golf').addEventListener ('click', function (e) {

//     console.log('golf is clicked');
//     const target = e.target;

//     if(target.matches('li')) {
//         target.style.backgroundColor = 'blue'
//     }
// })


// simple way 

document.querySelector('#sports').addEventListener ('click' , function (e){
    console.log(e.target.getAttribute ('id') + ' is clicked');

    const target = e.target;
    if (target.matches('li')) {
        target.style.backgroundColor = 'blue';
    }
})


//  add new list item 

const sports = document.querySelector('#sports');
const newSport = document.createElement ('li');

newSport.innerText = 'rugby';
newSport.setAttribute ('id' , 'rugby');

sports.appendChild(newSport);