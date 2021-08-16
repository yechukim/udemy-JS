//dom queries
const chatList = document.querySelector('.chat-list')
const newChatForm = document.querySelector('.new-chat')
const newNameForm = document.querySelector('.new-name')
const updateMssg = document.querySelector('.update-mssg')
const rooms = document.querySelector('.chat-rooms')

//add a new chat
newChatForm.addEventListener('submit', e => {
  e.preventDefault()
  const message = newChatForm.message.value.trim()
  chatroom.addChat(message) //addchat 이 async 라서 프로미스 리턴하기 때문에 then 으로 연결함 
    .then(() => newChatForm.reset())
    .catch(err => console.log(err))
})

// update username
newNameForm.addEventListener('submit', e => {
  e.preventDefault()

  //update name via chatroom class 
  const newName = newNameForm.name.value.trim()
  chatroom.updateName(newName)
  //reset the form
  newNameForm.reset();
  //show then hide update mssg 
  updateMssg.innerText = `your name was updated to ${newName}`
  setTimeout(() => updateMssg.innerText = '', 3000)//3초 뒤에 메세지 빈칸으로 세팅 
})

//update the chat room 
rooms.addEventListener('click', e => {
  //console.log(e)
  if (e.target.tagName = 'BUTTON') {
    //clear current chat
    chatUI.clear()

    //update the room 
    //방 이름은 아이디로 똑같이 되어있으니까 아이디를 가져와서 해당 아이디를 넣어줌

    chatroom.updateRoom(e.target.getAttribute('id'))
    chatroom.getChats(chat => chatUI.render(chat))
  }
})

//check local stroage for a name 

const username = localStorage.username ? localStorage.username : 'anon'

//class instance
const chatUI = new ChatUI(chatList)
const chatroom = new Chatroom('general', username)

chatroom.getChats((data) => chatUI.render(data))