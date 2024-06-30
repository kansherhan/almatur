window.onload = () => {
  if (window.location.pathname === "/turs.html") {
    const buttons = document.querySelectorAll(".sub-button");

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        window.location.pathname = "/";
      });
    });
  } else if (window.location.pathname === "/") {
    const subForm = document.querySelector("#sub-form");

    subForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const object = {};
      new FormData(subForm).forEach((value, key) => (object[key] = value));

      axios
        .post("/api/create-turs-subsribers", object)
        .then((response) => {
          console.log(response);
          alert("Сіз жазылдыныз!");
          subForm.reset();
        })
        .catch((error) => {
          console.log(error);
          alert("Қателік кетті!");
        });
    });
  }
};
