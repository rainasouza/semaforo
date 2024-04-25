const lights = [
    { element: document.querySelector('.red'), activeClass: 'red-active' },
    { element: document.querySelector('.yellow'), activeClass: 'yellow-active' },
    { element:document.querySelector('.green'), activeClass: 'green-active'}
  ];
  
  let counter = 0;
  
  setInterval(() => {
    lights.forEach((light, index) => {
      if (index === counter) {
        light.element.classList.add(light.activeClass);
      } else {
        light.element.classList.remove(light.activeClass);
      }
    });
    
    counter = (counter + 1) % lights.length;
  }, 1500);
  


/*const vermelho = document.querySelector('.vermelho');
const amarelo = document.querySelector('.amarelo');
const verde = document.querySelector('.verde');

verde.addEventListener('click', () => {
    verde.classList.add('verde-ativo');
    amarelo.classList.remove('amarelo-ativo');
    vermelho.classList.remove('vermelho-ativo');
});

vermelho.addEventListener('click', () => {
    vermelho.classList.add('vermelho-ativo');
    amarelo.classList.remove('amarelo-ativo');
    verde.classList.remove('verde-ativo');
});

amarelo.addEventListener('click', () => {
    amarelo.classList.add('amarelo-ativo');
    verde.classList.remove('verde-ativo');
    vermelho.classList.remove('vermelho-ativo');
});*/