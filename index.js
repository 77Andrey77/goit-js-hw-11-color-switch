
/////////Для генерации случайного числа (индекс элемента массива цветов)

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};