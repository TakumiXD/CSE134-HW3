const comments = document.getElementById("comments");
const intMaxLength = comments.maxLength;
const intWarningLength = Math.floor(intMaxLength / 10);
const intErrorLength = Math.floor(intMaxLength / 20);

const commentsInfo = document.getElementById("commentsInfo");
const commentsError = document.getElementById("commentsError");
commentsInfo.style.display = "block";
commentsInfo.textContent = "Number of characters left: " + intMaxLength;

let previousInput = "";

const form = document.querySelector("#contact form");
const username = document.getElementById("name");
const email = document.getElementById("email");
function validateName() {
  if (username.checkValidity()) {
    return true;
  }
  else {
    username.setCustomValidity("Username can only contain letters and numbers.");
    return false;
  }
}

function validateEmail() {
  if (email.checkValidity()) {
    return true;
  }
  else {
    username.setCustomValidity("Please enter a valid email");
    return false;
  }
}

form.addEventListener("submit", (event) => {
  if ((!validateName()) || (!validateEmail())) {
    event.preventDefault();
  }
});

const formErrors = document.getElementById("form_errors");
function addFormError(strError) {
  let oldArray = JSON.parse(formErrors.value);
  oldArray.push(strError);
  formErrors.value = JSON.stringify(oldArray);
}

function showInfoAndError() {
  commentsInfo.textContent = "";
  commentsError.textContent = "";

  let inputValue = this.value;
  let pattern = /^[\x20-\x7E\s]*$/;

  if (!pattern.test(inputValue)) {
    comments.value = previousInput;
    commentsError.textContent = "Error: illegal character typed";
    addFormError("Error: illegal character typed");
    return;
  }
  else {
    previousInput = this.value;
  }

  let intCurrLength = comments.value.length;
  let intRemainLength = intMaxLength - intCurrLength;
  if (intRemainLength > intWarningLength) {
    commentsInfo.textContent = "Number of characters left: " + intRemainLength;
    commentsInfo.style.color = getComputedStyle(document.documentElement).getPropertyValue("--color-text");
  } 
  else if (intRemainLength > intErrorLength) {
    commentsInfo.textContent = "Number of characters left: " + intRemainLength;
    commentsInfo.style.color = "#FFA500";
  }
  else {
    commentsError.textContent = "Number of characters left: " + intRemainLength;
    addFormError("Number of characters left: " + intRemainLength);
  }
}

comments.addEventListener("input", showInfoAndError); 