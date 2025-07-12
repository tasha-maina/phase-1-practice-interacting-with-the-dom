
const counter = document.getElementById('counter');
const plusButton = document.getElementById('plus');
const minusButton = document.getElementById('minus');
const likeButton = document.getElementById('heart');
const pauseButton = document.getElementById('pause');
const likesList = document.querySelector('.likes');
const commentForm = document.getElementById('comment-form');
const commentInput = document.getElementById('comment-input');
const commentList = document.getElementById('list');

let count = 0;
let isPaused = false;
let likeTracker = {};

let timer = setInterval(() => {
  if (!isPaused) {
    count++;
    counter.innerText = count;
  }
}, 1000);

plusButton.addEventListener('click', () => {
  count++;
  counter.innerText = count;
});

minusButton.addEventListener('click', () => {
  count--;
  counter.innerText = count;
});

likeButton.addEventListener('click', () => {
  if (likeTracker[count]) {
    likeTracker[count]++;
    document.getElementById(`like-${count}`).innerText = `${count} has been liked ${likeTracker[count]} times`;
  } else {
    likeTracker[count] = 1;
    const li = document.createElement('li');
    li.id = `like-${count}`;
    li.innerText = `${count} has been liked 1 time`;
    likesList.appendChild(li);
  }
});

pauseButton.addEventListener('click', () => {
  isPaused = !isPaused;
  pauseButton.innerText = isPaused ? 'resume' : 'pause';
  plusButton.disabled = isPaused;
  minusButton.disabled = isPaused;
  likeButton.disabled = isPaused;
});

commentForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const comment = document.createElement('p');
  comment.innerText = commentInput.value;
  commentList.appendChild(comment);
  commentInput.value = '';
});
