const topHeader = document.querySelector('header');

document.addEventListener('scroll', e => toggleHeader());

function toggleHeader() {
  let currentPosition = getCurrentPosition();
  setTimeout(function() {setHeader(currentPosition)}, 1000);
};

function getCurrentPosition() {
  return document.documentElement.scrollTop;
}

function setHeader(previousPosition) {
  let currentPosition = getCurrentPosition();
  console.log(previousPosition, currentPosition);

  if (previousPosition < currentPosition) {
    topHeader.classList = 'hide-header';
  } else if (previousPosition > currentPosition) {
    topHeader.classList = '';
  }
}