const socket = io();

document.querySelector('#message-form').addEventListener('submit', e => {
  e.preventDefault();
  const message = document.querySelector('input').value;
  console.log(message);
  socket.emit('sendMessage', message);
});
// socket.on('countUpdated', count => {
//   console.log('The count has been updated!', count);
// });

// const button = document.querySelector('#increment');
// button.addEventListener('click', () => {
//   socket.emit('increment');
// });
