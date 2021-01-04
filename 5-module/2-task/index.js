function toggleText() {
  const btnShowAndHide = document.querySelector('.toggle-text-button');
  const text = document.querySelector('#text');

  btnShowAndHide.addEventListener('click', () =>{

    if (text.hasAttribute('hidden')) {
      text.removeAttribute('hidden');
    } else {
      text.setAttribute('hidden', 'true');
    }

  });

}
