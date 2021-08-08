const list = document.querySelector('ul')
const form = document.querySelector('form')
const button = document.querySelector('button')

const addRecipe = (recipe, id) => {
    let time = recipe.createdAt.toDate()
    let html =
        `<li data-id = "${id}">
            <div>${recipe.title}</div>
            <div>${time}</div>
            <button class="btn btn-danger btn-sm my-2">삭제</button>
        </li>
        
        `
    //  console.log(html)
    list.innerHTML += html //append 하기 
}

//도큐먼트 삭제하기 
const deleteRecipe = (id) => {
    const recipes = document.querySelectorAll('li')
    recipes.forEach(recipe => {
        if (recipe.getAttribute('data-id') === id) {
            return recipe.remove()
        }
    })
}

//도큐먼트 가져오기 
const unsub = db.collection('recipes').onSnapshot(snapshot => {//db변경이 있을 때마다 해당 콜백 호출
    snapshot.docChanges().forEach((change) => {

        const doc = change.doc
        if (change.type == 'added') {
            return addRecipe(doc.data(), doc.id)
        } deleteRecipe(doc.id)
    })
})

// 도큐먼트 갖고오기 (리얼타임 아닐때 )
// db.collection('recipes').get().then((snapshot) => {
//     //데이터 응답 있을 때

//     snapshot.docs.forEach(doc => {
//         // console.log(doc.data())
//         addRecipe(doc.data(), doc.id)
//     })
// }).catch((err) => {
//     console.log(err)
// })

// 도큐먼트 추가하기 
form.addEventListener('submit', e => {
    //리로딩 방지
    e.preventDefault()

    const now = new Date() // 제출시 날짜 저장 
    //자바스크립트 오브젝트를 저장
    const recipe = {
        title: form.recipe.value,
        createdAt: firebase.firestore.Timestamp.fromDate(now),
        //다른거 추가안하면 empty 가 디폴트 
    }

    //async
    db.collection('recipes').add(recipe).then(() => {
        console.log('recipe added ')
    }).catch(err =>
        console.log(err))
})


//ul 에 이벤트 리스너 하나를 달아서 함 event delegation
list.addEventListener('click', e => {

    if (e.target.tagName === "BUTTON") {
        const id = e.target.parentElement.getAttribute("data-id");
        // 얘 또한 async 
        db.collection('recipes').doc(id).delete() // 해당 아이디 도큐먼트 레퍼런스 가져올 수 있음 
            .then(() => {
                console.log('recipe deleted ')
            })
    }
})

//db 변경 unsub 하기
button.addEventListener('click', () => {
    unsub()
    console.log('unsub from collection changes ')
})