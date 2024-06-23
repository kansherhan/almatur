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
      subForm.reset();

      alert("Сіз жазылдыныз!");

      event.preventDefault();
    });
  }
};
