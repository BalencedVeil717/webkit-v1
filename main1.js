function calc(val) {
  form.resultInput.value += val;
}

function getResult() {
  let val = form.resultInput.value;
  if (val) {
    form.resultValue.value = eval(form.resultInput.value);
  }
}

function resetInput() {
  form.resultInput.value = "";
  form.resultValue.value = "";
}

function handleBackspace() {
  let val = form.resultInput.value;
  if (val) {
    val = val.substring(0, val.length - 1);
    form.resultInput.value = val;
    form.resultValue.value = "";
  }
}

const change1 = document.querySelector('#change1');
const calculator = document.querySelector('.main1');
const change2 = document.querySelector('#change2');
const clock = document.querySelector('.main2');
const change3 = document.querySelector('#change3')
const calendar = document.querySelector('.main3')
const ok = document.querySelector('#ok');
const card = document.querySelector('.card');

change1.addEventListener('click', () => {
  if(calculator.style.display === 'none') {
    calculator.style.display = 'flex';
    clock.style.display = 'none';
    calendar.style.display = 'none';
  }  else{
    calculator.style.display = 'flex';
  }
}
);
change2.addEventListener('click', () => {
  if(clock.style.display === 'none') {
    calculator.style.display = 'none';
    clock.style.display = 'flex';
    calendar.style.display = 'none';
    
  }  else{
    clock.style.display = 'flex';
    calculator.style.display = 'none';
    calendar.style.display = 'none';
  }
}
);
change3.addEventListener('click', () => {
  if(calendar.style.display === 'none') {
    calendar.style.display = 'flex'
    calculator.style.display = 'none';
    clock.style.display = 'none';
  }  else{
    calendar.style.display = 'flex'
    calculator.style.display = 'none';
    clock.style.display = 'none';
    }
  }
);



ok.addEventListener('click', () => {
  if(card.style.display === 'grid') {
    card.style.display = 'none';
  } else{
    card.style.display = 'none';
  }
})

// alert('Please turn on desktop mode');

