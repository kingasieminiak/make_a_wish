export default function makeAWish() {
  const mouth = document.querySelector('.jsMounth');
  const flame = document.querySelector('.jsFlame');

  document.addEventListener('keypress', function(e) { // eslint-disable-line
    if (e.keyCode === 13) {
      mouth.classList.add('resize');

      setTimeout(() => flame.classList.add('hidden'), 100); // eslint-disable-line
      setTimeout(() => mouth.classList.remove('resize'), 900); // eslint-disable-line
    }
  });
}
