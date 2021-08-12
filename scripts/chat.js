//add new chat documents
// set up real-time listener to get new chats
// update username
// update room 

class Chatroom {

    constructor(room, username) {
        this.room = room
        this.username = username
        this.chats = db.collection('chats')
        this.unsub
    }

    async addChat(message) {
        //format a chat object
        const now = new Date()

        const chat = {
            message, // message : message
            username: this.username,
            room: this.room,
            created_at: firebase.firestore.Timestamp.fromDate(now)
        }
        //save chat document
        const response = await this.chats.add(chat)
        return response // response를 사용할일은 없겠지만 이렇게 저장해 놓음 
    }

    getChats(callback) {
        this.unsub = this.chats
            .where('room', '==', this.room) // condition주기
            .orderBy('created_at')
            .onSnapshot(snapshot => {
                //docChange() -> change있는거 array 로 
                snapshot.docChanges().forEach(change => {
                    if (change.type === 'added') {
                        //update UI 
                        callback(change.doc.data())
                    }
                })
            })// -> returns unsubscribe func 
    }

    updateName(username) {
        this.username = username
    }

    updateRoom(room) {
        this.room = room // update room 
        console.log('room updated')
        if (this.unsub) this.unsub() // unsub doc change for the prev room 

    }
}

const chatroom = new Chatroom('general', 'yechu')

chatroom.getChats((data) => {
    console.log(data)
})

setTimeout(() => {
    chatroom.updateRoom('gaming')
    chatroom.updateName('yoshi')
    chatroom.getChats((data) => {
        console.log(data)
    })
    chatroom.addChat('hello')
}, 3000)