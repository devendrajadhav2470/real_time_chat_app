
const socket= io('http://localhost:8000');
const enter_bar = document.getElementById('enter_bar');
const messageInp =document.getElementById('messageInp');
const messagecontainer = document.querySelector('.ui');
// const btn = document.querySelector('button');
const username = prompt("what is your name ? ");
const append=(message,position)=>{
    const messageElement = document.createElement('div');
    messageElement.innerHTML = message;
    messageElement.classList.add(position);
    messagecontainer.append(messageElement);
}
socket.emit('new-user-joined',username);
socket.on('user-joined',username => {
    append(`${username} joined the chat`,'left');
    // messagecontainer.append(`<div class="left"> <p> ${username} joined the chat </p> </div>`,) //jthis don't work
});
socket.on('receive',data=>{
    append(`${data.name}:${data.message}`,'left');
});
enter_bar.addEventListener('submit',m =>{
    m.preventDefault();
    const message = messageInp.value ;
    append(`<strong>you</strong>:${message}`,'right');
    socket.emit('send',message);
    messageInp.value="";
})
socket.on('left',name=>{
    append(`${name} left the chat`,'left');
})


