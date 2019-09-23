export function makeAWish() {
  const mouth = document.querySelector('.jsMounth');
  const flame = document.querySelector('.jsFlame');

  document.addEventListener('keypress', function(e) {
    if(e.keyCode === 13) {
      mouth.classList.add('resize');

      setTimeout(() => flame.classList.add('hidden'), 100);
      setTimeout(() => mouth.classList.remove('resize'), 900);
    }
  });
}