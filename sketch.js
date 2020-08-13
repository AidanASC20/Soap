const nameDiv = document.getElementById('logoBox');

anime({
  targets: nameDiv,
  opacity: [0, 1],
  translateZ: ['425px', '0px'],
  easing: 'easeInSine',
  duration: 1500,
  easing: 'easeInQuad',
  complete: function (anim){
    window.location.replace ("Homepage/index.html");
  }
});


