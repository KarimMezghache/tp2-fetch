// API à utiliser pour le travail: https://randomuser.me/api/?results=5

document.addEventListener("DOMContentLoaded", function() {
    fetch("https://randomuser.me/api/?results=5")
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        displayUsers(data.results);
      })
      .catch(function(error) {
        console.log("Error:", error);
      });
  });
  
  function displayUsers(users) {
    let container = document.getElementById("container");
  
    users.forEach(function(user) {
      let card = document.createElement("div");
      card.className = "card";
  
      let img = document.createElement("img");
      img.src = user.picture.large;
  
      let name = document.createElement("h3");
      name.textContent = "Nom: " + user.name.first + " " + user.name.last;
  
      let email = document.createElement("h3");
      email.textContent = "E-mail: " + user.email;
  
      card.appendChild(img);
      card.appendChild(name);
      card.appendChild(email);
  
      container.appendChild(card);
    });
  }
  