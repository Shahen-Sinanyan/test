// import {foo, goo as otherName} from './index.js';
// import anyName from './index.js';
// import UserClass from './utils/helper';
// import *  as callerAnun  from './' //fail ic call ara bolor failery
// /* aysinqn  havaqum e obj i mej ev beruma
//  {
//     goo: goo,
//     foo: foo,
//     anyName: anyName 
// }
// */
// /*heto karox enq kanchel callerAnun i foo 
// teri koxmy na e vor shat function() -ner berelov performance i ashxatanqy vatacnum e */
// callerAnun.foo

// foo();
// goo()
// //reexport default general ==>
// import a from './index';
// export {a};
// //kam urish tarberak ==>
//export { default as a} from './index'
const BUTTON_ID = 'add'

let add_button = document.getElementById('add');
let input = document.getElementById('addToDo')
let container = document.querySelector('.container')

document.addEventListener('input', (Event) => {
    if (!input.value) {
        add_button.disabled = true;
    } else {
        add_button.disabled = false;
    }
})
document.addEventListener('click', (MouseEvent) => {
    if (event.target.id === BUTTON_ID) {

        if (input.value) {
            let toDo = document.createElement('li');
            toDo.innerText = input.value;
            console.log(toDo);
            container.appendChild(toDo);
           input.value = '';
        }
    }
});

let done = false;
container.addEventListener('click', (event) => {
//   if(done) {
//     event.target.style.textDecoration = 'none';
//     done = false
//   } else {
//     event.target.style.textDecoration = 'line-through';
//     done = true
//   }
    event.target.classList.toggle('done')
    
});
