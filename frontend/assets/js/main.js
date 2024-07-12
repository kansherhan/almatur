window.onload = () => {
  if (window.location.pathname === "/turs.html") {
    const buttons = document.querySelectorAll(".sub-button");

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        window.location.pathname = "/";
      });
    });

    const videoPlayerUrls = [
      "https://www.youtube.com/embed/qIC5peR6mxA?autoplay=1&mute=1&?controls=0",
      "https://www.youtube.com/embed/tnmBudrAmXQ?autoplay=1&mute=1&?controls=0",
      "https://www.youtube.com/embed/wX3pjPoPK4c?autoplay=1&mute=1&?controls=0",
      "https://www.youtube.com/embed/t4kZBFK0EiI?autoplay=1&mute=1&?controls=0",
      "https://www.youtube.com/embed/fyV20oEnD7w?autoplay=1&mute=1&?controls=0",
      "https://www.youtube.com/embed/iByQmlUjKbg?autoplay=1&mute=1&?controls=0",
    ];

    const videoPlayer = document.querySelector("#video-iframe");
    const videoPlayerContainer = document.querySelector(
      "#video-iframe-container"
    );

    const images = document.querySelectorAll(".image-container img");

    images.forEach((image, key) => {
      image.addEventListener("click", () => {
        videoPlayerContainer.classList.add("active");
        videoPlayer.setAttribute("src", videoPlayerUrls[key]);
      });
    });

    window.onkeydown = (event) => {
      if (event.keyCode === 27) {
        videoPlayerContainer.classList.remove("active");
      }
    };

    // turs filters
    const turInput = document.querySelector("#turs-name");
    const turItems = document.querySelectorAll(".items .item");

    turInput.addEventListener("change", (event) => {
      const turName = event.target.value;

      turItems.forEach((tur) => {
        const title = tur.querySelector("h3").textContent;

        if (
          title
            .trim()
            .toLocaleLowerCase()
            .includes(turName.trim().toLocaleLowerCase())
        ) {
          tur.style.display = "block";
        } else {
          tur.style.display = "none";
        }
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
