///////массив цветов фона
const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];
/////////Для генерации случайного числа (индекс элемента массива цветов)
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

////////////
const bodyEl = document.querySelector('body');
let timerIdChangeColor = null;


///////////// функция определения цвета

function changeColor(colors) {
  const colorId = randomIntegerFromInterval(0, colors.length - 1);
  bodyEl.style.backgroundColor = colors[colorId];
}

///////////

const btStartEl = document.querySelector('button[data-action="start"]');
const btStopEl = document.querySelector('button[data-action="stop"]');

//////////ставим слушателя события на кнопку старт
btStartEl.addEventListener('click', () => {
  timerIdChangeColor = setInterval(() => { changeColor(colors) }, 1000);
  btStartEl.disabled = true;
});


//////////ставим слушателя события на кнопку stop
btStopEl.addEventListener('click', () => {
  clearInterval(timerIdChangeColor);
  btStartEl.disabled = false;
});

