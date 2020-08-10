const nameDiv = document.getElementById('nameContainer');

anime({
  targets: nameDiv,
  opacity: [0, 1],
  translateZ: ['125px', '0px'],
  easing: 'easeOutCubic',
  duration: 1500,
  easing: 'easeInQuad',
})