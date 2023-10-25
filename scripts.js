const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  // Check for invalid inputs
  if (isNaN(dividend) || isNaN(divider)) {
    result.innerText = "Something critical went wrong. Please reload the page";
    console.error("Invalid input. Non-numeric values provided.");
    return;
  }

  // Check for division by zero
  if (divider == 0) {
    result.innerText = "Division not performed. Divider cannot be zero. Try again.";
    console.error("Division by zero attempted.");
    return;
  }

  // Perform the division
  const divisionResult = dividend / divider;

  // Check if the result is a whole number
  if (Number.isInteger(divisionResult)) {
    result.innerText = divisionResult;
  } else {
    result.innerText = divisionResult.toFixed(0);
  }
});
