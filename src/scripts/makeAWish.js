export default function makeAWish() {
  const mouth = document.querySelector('.jsMounth');
  const flame = document.querySelector('.jsFlame');

  function handleUserAction() {
    mouth.classList.add('resize');
    setTimeout(() => flame.classList.add('hidden'), 100); // eslint-disable-line
    setTimeout(() => mouth.classList.remove('resize'), 900); // eslint-disable-line
  }

  document.addEventListener('keypress', function(e) { // eslint-disable-line
    if (e.keyCode === 13) handleUserAction();
  });

  document.addEventListener('touchend', function(e) { // eslint-disable-line
    handleUserAction();
  });
}
