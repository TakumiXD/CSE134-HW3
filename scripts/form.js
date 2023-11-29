const comments = document.getElementById("comments");
const intMaxLength = comments.maxLength;
const intWarningLength = Math.floor(intMaxLength / 10);
const intErrorLength = Math.floor(intMaxLength / 20);

const commentsInfo = document.querySelector("#commentsInfo");
const commentsError = document.querySelector("#commentsError");
commentsInfo.style.display = "block";
commentsInfo.textContent = "Number of characters left: " + intMaxLength;

let previousInput = "";

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