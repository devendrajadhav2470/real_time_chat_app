
const socket= io('http://localhost:8000');
const enter_bar = document.getElementsByClassName('enter_bar');
const messageInp =document.getElementById('messageInp');
const messagecontainer = document.getElementsByClassName('ui');

const username = prompt("what is your name ? ");
socket.emit('new-user-joined',username);