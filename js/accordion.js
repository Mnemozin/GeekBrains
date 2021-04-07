let acc = document.getElementsByClassName('checkout');

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', function () {
    var panel = this.querySelector('.checkout__panel');
    this.classList.toggle('active');
    if (panel.style.maxHeight) {
      collapse(panel);
    } else {
      panel.style.display = 'block';
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }    
  });
}

function collapse(element){
  element.style.maxHeight = null;
}
