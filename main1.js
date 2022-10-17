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

const toggleBtn = document.querySelector('#change');
const calculator = document.querySelector('.main1');
const clock = document.querySelector('.main2');
const ok = document.querySelector('#ok');
const card = document.querySelector('.card');

toggleBtn.addEventListener('click', () => {
  if(calculator.style.display === 'none') {
    calculator.style.display = 'flex';
    clock.style.display = 'none';
    document.getElementById('change').innerText = 'Show CLOCK';
  }  else{
    calculator.style.display = 'none';
    clock.style.display = 'flex';
    document.getElementById('change').innerText = 'Show CALCULATOR';
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