
function hideSelf() {
  const btnHide = document.querySelector('.hide-self-button');

  btnHide.addEventListener('click', (event) => {
    const target = event.target;
    target.setAttribute('hidden', 'true');
  });

}

