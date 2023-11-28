const comments = document.getElementById("comments");
const intMaxLength = comments.maxLength;
const intWarningLength = Math.floor(intMaxLength / 10);
const intErrorLength = Math.floor(intMaxLength / 20);

const commentsInfo = document.querySelector("#commentsInfo");
const commentsError = document.querySelector("#commentsError");
commentsInfo.style.display = "block";

commentsInfo.textContent = "Number of characters left: " + intMaxLength;

let previousInput = "";

function updateCounter() {
  commentsInfo.textContent = "";
  commentsError.textContent = "";

  let inputValue = this.value;
  let pattern = /^[\x20-\x7E\s]*$/;

  if (!pattern.test(inputValue)) {
    console.log("here");
    comments.value = previousInput;
    return;
  }
  else {
    console.log(this.value);
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
  }
}

comments.addEventListener("input", updateCounter); 