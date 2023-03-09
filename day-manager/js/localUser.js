const form = document.querySelector(".js-form"),
  Input = form.querySelector(".js-input");
const print = document.querySelector(".js-printing");

function localForm() {
  const USER_NAME = "username",
    SHOW_CN = "showing";

  function react() {
    form.addEventListener("submit", stop);
    function stop(event) {
      event.preventDefault();
    }
  }
  react();

  function userES() {
    const getValue = localStorage.getItem(USER_NAME);

    if (getValue === null) {
      function submitUser() {
        form.classList.add(SHOW_CN);
        form.addEventListener("submit", saveUser);
        function saveUser() {
          const submitValue = Input.value;
          localStorage.setItem(USER_NAME, submitValue);

          print.classList.add(SHOW_CN);
          form.classList.remove(SHOW_CN);
          print.innerText = `greeting ${submitValue}`;
        }
      }
      submitUser();
    } else {
      function loadUser() {
        print.classList.add(SHOW_CN);
        form.classList.remove(SHOW_CN);
        print.innerText = `greeting ${getValue}`;
      }
      loadUser();
    }
  }
  userES();
}
localForm();

//Math.random
