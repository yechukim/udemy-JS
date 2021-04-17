const ul = document.querySelector('ul');
const li = document.querySelectorAll('li');

// li.forEach(item => {
//    item.addEventListener('click',e => {
//        console.log('you clicked me in li');
//        e.stopPropagation(); // event bubbling 멈출 수 있음 
//    })
// // item.addEventListener('click', e=> { // event  call-back 
// //     //item.remove()
// //     e.target.remove()
// // })
// })

const add_btn = document.querySelector('button');
add_btn.addEventListener('click',() => {

    const new_li = document.createElement('li');
    new_li.textContent = 'add new';
    ul.append(new_li); // 뒤에 붙이기 
  //  ul.prepend(new_li) 앞에 붙이기
})

//event bubbling 
ul.addEventListener('click', e => {
  //  console.log('event in ul');
// 클릭시 ul , li click 둘다 일어남 : event bubbling 
console.log(e.target); // 새로운 li를 추가하더라도 event 가 일어남 ul event니깐
console.log(e); 
// target 의 이름에 li 가 있으면 지울 수 있게 
if(e.target.tagName == "LI"){
    e.target.remove()
}
})


