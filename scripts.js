const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  // Validate input values
  if (!dividend || !divider) {
    result.innerText = "Division not performed. Both values are required in inputs. Try again";
    return;
  }

  // Check for invalid division by zero
  if (divider === "0") {
    result.innerText = "Division not performed. Invalid number provided. Try again";
    console.error("Error: Division by zero");
    return;
  }

  // Check if input values are numbers
  const dividendNum = Number(dividend);
  const dividerNum = Number(divider);

  if (isNaN(dividendNum) || isNaN(dividerNum)) {
    result.innerText = "Something critical went wrong. Please reload the page";
    console.error("Error: Invalid input. Input values must be numbers.");
    return;
  }

  // Perform division and display result
  const quotient = dividendNum / dividerNum;
  const roundedQuotient = Math.floor(quotient);
  result.innerText = roundedQuotient;
});