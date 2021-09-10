window.onload = function() {
  const parallax = document.querySelector('.parallax-js-block');

  if(parallax){
    const parallaxJS = document.querySelector('.parallax-js');
  
    // Коэффифицент
    const forItem = 10;
    
    // Скопрость анимации
    const speed = 0.05;
  
    // Объявление переменных
    let posetionX = 0, posetionY = 0;
    let coordXprocent = 0, coordYprocent = 0;
    
    function setMouseParallaxStyle() {
      const distX = coordXprocent - posetionX;
      // const distY = coordYprocent - posetionY;
    
      posetionX = posetionX +(distX * speed);
      // posetionY = posetionY +(distY * speed);
    
    
      // Передаем стили
      parallaxJS.style.cssText = `transform: translate(${posetionX / forItem}%,${posetionY / forItem}%);`;
    
      requestAnimationFrame(setMouseParallaxStyle);
    }
    setMouseParallaxStyle();
  
    parallax.addEventListener('mousemove', function(e){
      
      // Получение высоты и ширины блока
      const parallaxW = parallax.offsetWidth;
      // const parallaxH = parallax.offsetHeight;
  
      // Ноль на серединк
      const coordX = e.pageX - parallaxW / 2;
      // const coordY = e.pageY - parallaxH / 2;
  
      // Получем проценты 
      coordXprocent = coordX / parallaxW * 100;
      // coordYprocent = coordY / parallaxH * 100;
    }); 
  }
  
}
