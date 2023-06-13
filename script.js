function number(num) {
  let nums = document.getElementById("result");
  nums.value += num;
}

function operator(opt) {
  let nums = document.getElementById("result");
  if (nums.value != "") {
      nums.value += opt;
  }
}

function zero() {
  let nums = document.getElementById("result");
  if (nums.value != "") {
      nums.value += 0;
  }
}

function result() {
  let button = document.getElementsByClassName("none");
  let nums = document.getElementById("result");
  let exp = nums.value;

  if (exp) {
      try {
          nums.value = eval(exp);
      } catch (e) {
          exp = "Ошибка!";
          alert(exp);
          none();
      }
  }

  if (nums.value == 0) {
      exp = "";
  }

  if (nums.value == "Infinity") {
      exp = "Нельзя делить на 0";
      alert(exp);
      none();
  }
}

function clean() {
  let nums = document.getElementById("result");
  nums.value = "";
}

function none() {
  alert("Очистите поле")
}