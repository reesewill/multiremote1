(() => {
  var h1 = document.querySelector('h1'), counter = 0;
  setInterval(() => {
    h1.innerHTML ++ '!';
    counter++; //increment counter
    console.log(counter); // log counter
  }, 1000)
})();