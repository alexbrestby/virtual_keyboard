import buttons from './buttons';

export default (function layout() {
  const APP = document.querySelector('#app');

  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');

  const container = document.createElement('div');
  container.classList.add('container');

  const title = document.createElement('h1');
  title.classList.add('title');
  title.innerHTML = 'RSS Virtual Keyboard';
  container.append(title);

  const textarea = document.createElement('textarea');
  textarea.classList.add('textarea');
  textarea.autofocus = true;
  container.append(textarea);

  const keyboard = document.createElement('div');
  keyboard.classList.add('keyboard');

  const mainButtonsArrayLength = Array.from(Object.entries(buttons.mainButtons)).length;

  for (let i = 0; i < mainButtonsArrayLength; i++) {
    const keyButton = document.createElement('div');
    keyButton.classList.add('btn');
    keyButton.classList.add(`${Object.keys(buttons.mainButtons)[i]}`);
    if (buttons.specialButtons.includes(Object.keys(buttons.mainButtons)[i])) keyButton.classList.add('special');
    keyButton.innerHTML = Object.values(buttons.mainButtons)[i];
    keyboard.append(keyButton);
  }

  container.append(keyboard);

  const info = document.createElement('div');
  info.classList.add('info');
  const paragraph1 = document.createElement('p');
  paragraph1.innerHTML = 'Keyboard was created in Windows system';
  info.append(paragraph1);
  const paragraph2 = document.createElement('p');
  paragraph2.innerHTML = 'Language switched by left CTRL + ALT';
  info.append(paragraph2);

  container.append(info);

  wrapper.append(container);

  APP.append(wrapper);
}());
