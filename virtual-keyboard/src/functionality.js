import buttons from './buttons';

export default (function functionality() {
  let lang = localStorage.getItem('lang');
  const keyboard = document.querySelector('.keyboard');
  const allButtons = document.querySelectorAll('.btn');
  const capsLock = document.querySelector('.CapsLock');
  const textArea = document.querySelector('textarea');

  document.addEventListener('load', () => {
    textArea.focus();
  });

  function getLetters() {
    const alphabetButtonsId = [];
    Object.keys(buttons.mainButtons[lang]).forEach((elem) => {
      if (elem.match(/Key/)) { alphabetButtonsId.push(elem); }
    });
    return alphabetButtonsId;
  }

  function textareaUpdate(elem) {
    textArea.value += elem;
  }

  function specialButtonHandler() {
    allButtons.forEach((elem) => {
      if (getLetters().includes(elem.classList[1])) {
        // eslint-disable-next-line no-unused-expressions
        elem.innerHTML === elem.innerHTML.toUpperCase()
          ? elem.innerHTML = elem.innerHTML.toLowerCase()
          : elem.innerHTML = elem.innerHTML.toUpperCase();
      }
    });
  }

  function extendedSymbolsHandler(flag) {
    for (let i = 0; i < 13; i++) {
      if (flag === 'on') {
        allButtons[i].innerHTML = buttons.extendedSymbols[i];
      } else {
        allButtons[i].innerHTML = Object.values(buttons.mainButtons[lang])[i];
      }
    }
    if (flag === 'on') {
      allButtons['27'].innerHTML = buttons.extendedSymbols['13'];
    } else {
      allButtons['27'].innerHTML = Object.values(buttons.mainButtons[lang])['27'];
    }
  }

  document.addEventListener('keydown', (event) => {
    if (event.key !== 'CapsLock' && event.key !== 'F12') {
      document.querySelector(`.${event.code}`).classList.add('active');
    }

    if (event.key === 'CapsLock') {
      capsLock.classList.toggle('active');
      specialButtonHandler();
    }
    if (event.shiftKey) {
      if (!event.repeat) {
        document.querySelector(`.${event.code}`).classList.add('active');
        specialButtonHandler();
        extendedSymbolsHandler('on');
      }
    }
    if (event.key === 'Tab') {
      event.preventDefault();
      textArea.value += '    ';
      textArea.focus();
    }

    if (event.altKey && event.shiftKey) {
      event.preventDefault();
      if (!event.repeat) {
        if (lang === 'ru') {
          lang = 'en';
        } else {
          lang = 'ru';
        }
      }
      localStorage.setItem('lang', lang);
      setTimeout(document.location.reload(), 300);
    }
  });

  document.addEventListener('keyup', (event) => {
    // console.log(event.key);
    function removeClass() {
      return document.querySelector(`.${event.code}`).classList.remove('active');
    }
    if (event.key !== 'CapsLock' && event.key !== 'F12') {
      setTimeout(removeClass, 350);
    }

    if (event.key === 'Shift') {
      document.querySelector(`.${event.code}`).classList.remove('active');
      specialButtonHandler();
      extendedSymbolsHandler('off');
      // console.log(event.key);
    }
  });

  keyboard.addEventListener('mousedown', (event) => {
    // console.log(event.target.classList[1]);
    if (event.target.classList[1] !== 'CapsLock' && event.target.classList[1] !== undefined) {
      document.querySelector(`.${event.target.classList[1]}`).classList.add('active');
    } else if (event.target.classList[1] === 'CapsLock') {
      document.querySelector(`.${event.target.classList[1]}`).classList.toggle('active');
      specialButtonHandler();
    }

    if (event.target.classList[1] === 'ShiftLeft' || event.target.classList[1] === 'ShiftRight') {
      document.querySelector(`.${event.target.classList[1]}`).classList.add('active');
      specialButtonHandler();
      extendedSymbolsHandler('on');
    }
  });

  keyboard.addEventListener('mouseup', (event) => {
    function removeClass() {
      return document.querySelector(`.${event.target.classList[1]}`).classList.remove('active');
    }
    if (event.target.classList[1] !== 'CapsLock' && event.target.classList[1] !== undefined) {
      setTimeout(removeClass, 350);
    }

    if (event.target.classList[1] === 'ShiftLeft' || event.target.classList[1] === 'ShiftRight') {
      document.querySelector(`.${event.target.classList[1]}`).classList.remove('active');
      specialButtonHandler();
      extendedSymbolsHandler('off');
    }
  });

  keyboard.addEventListener('click', (event) => {
    if (event.target.classList[1] !== undefined) {
      if (event.target.classList[1] === 'Enter') {
        textArea.value += '\r\n';
      }
      if (event.target.classList[1] === 'Backspace') {
        textArea.value = textArea.value.split('').slice(0, -1).join('');
      }
      if (event.target.classList[1] === 'Tab') {
        event.preventDefault();
        textArea.value += '    ';
        textArea.focus();
      }
    }

    if (!Object.values(buttons.specialButtons).includes(event.target.classList[1])
      && event.target.classList[1] !== undefined) {
      textareaUpdate(event.target.innerHTML);
    }
  });
}());
