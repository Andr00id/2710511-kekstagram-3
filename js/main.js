const names = [
  'Александр',
  'Елена',
  'Дмитрий',
  'Анна',
  'Максим',
  'Мария',
  'Артём',
  'Ольга',
  'Иван',
  'Наталья',
  'Михаил',
  'Екатерина',
  'Даниил',
  'Татьяна',
  'Кирилл',
  'Юлия',
  'Андрей',
  'Светлана',
  'Сергей',
  'Виктория'
];

const messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const photoDescriptions = [
  'Завораживающий закат над горным хребтом, окрашивающий небо в теплые оттенки розового и золотого.',
  'Уютная чашка свежесваренного капучино с красивым латте-артом на деревянном столе утреннего кафе.',
  'Узкая мощеная улочка старого европейского города, утопающая в зелени и ярких цветах на балконах.',
  'Искренний портрет улыбающейся девушки в лучах мягкого вечернего солнца с размытым фоном.',
  'Спокойная гладь лесного озера на рассвете, окутанная легкой утренней дымкой.',
  'Динамичный кадр ночного мегаполиса с яркими неоновыми огнями и размытыми следами фар автомобилей.',
  'Минималистичный интерьер светлой гостиной с комнатными растениями и большим панорамным окном.',
  'Аппетитный домашний завтрак со свежими ягодами, круассанами и стаканом апельсинового сока.',
  'Рыжий кот, сладко спящий на мягком вязаном пледе у окна в дождливый день.',
  'Бескрайнее лавандовое поле на фоне чистого голубого неба в разгар лета.'
];


function getRandomInteger (a, b) {
  const min = Math.ceil(Math.min(a, b));
  const max = Math.floor(Math.max(a, b));
  const result = Math.random() * (max - min + 1) + min;

  return Math.floor(result);
}

function getId (min, max) {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      // eslint-disable-next-line no-console
      console.error(`Перебраны все числа из диапазона от ${ min } до ${ max}`);
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

function getRandomElements (array, count) {
  const result = [];

  while (result.length < count) {
    const element = array[getRandomInteger(0, array.length - 1)];

    if (!result.includes(element)) {
      result.push(element);
    }
  }

  return result;
}


const photo = {
  id: getId(1, 25),
  url: `photos/${photo.id}.jpg`,
  description: photoDescriptions[getRandomInteger(0, photoDescriptions.length - 1)],
  likes: getRandomInteger(15, 200),
  comments: []

};

const comments = {
  id: getId(1, 100),
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: getRandomElements(messages, getRandomInteger(1, 2)).join(' '),
  name: names[getRandomInteger(0, names.length - 1)]
};
