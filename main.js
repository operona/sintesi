fetch("./cabezera.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector("cabezera").innerHTML = data;
  });


  fetch("./footer.html")
    .then(response => {
      return response.text()
    })
    .then(data => {
      document.querySelector("footer").innerHTML = data;
    });
