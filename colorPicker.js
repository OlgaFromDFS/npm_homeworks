  const button = document.querySelector('.button');
  const page = document.querySelector('.page');
  const picker = new Picker(button);
  
  picker.onChange = function (color) {
    page.style.background = color.rgbaString;
  };