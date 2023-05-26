
const socket= io('http://localhost:8000');
const enter_bar = document.getElementsByClassName('enter_bar');
const messageInp =document.getElementById('messageInp');
const messagecontainer = document.querySelector('.ui');

const username = prompt("what is your name ? ");
const append=(message,position)=>{
    const messageElement = document.createElement('div');
    messageElement.innerText = message;
    messageElement.classList.add(position);
    messagecontainer.append(messageElement);
}
socket.emit('new-user-joined',username);
socket.on('user-joined',username => {
    append(`${username} joined the chat`,'left');
})