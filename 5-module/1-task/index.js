
function hideSelf() {
  const btnHide = document.querySelector('.hide-self-button');

  btnHide.addEventListener('click', (event) => {
    event.target.hidden = true
  });

}

