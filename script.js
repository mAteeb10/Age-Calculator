const ageResultElement = document.getElementById("age-result");
const calculateAgeElement = document.getElementById("calculate-age");
const birthdateInputElement = document.getElementById("birthdate");

// Function to calculate exact age
function calculateExactAge(birthdateString) {
  const birthdate = new Date(birthdateString);
  const now = new Date();

  const years = now.getFullYear() - birthdate.getFullYear();
  const months = now.getMonth() - birthdate.getMonth() + years * 12;
  const days = Math.floor((now - birthdate) / (1000 * 60 * 60 * 24)) % 365;

  let ageResult = "";
  if (years > 0) ageResult += `${years} year${years === 1 ? "" : "s"} `;
  if (months > 0)
    ageResult += `${months % 12} month${months === 1 ? "" : "s"} `;
  if (days > 0) ageResult += `${days} day${days === 1 ? "" : "s"}`;

  return ageResult.trim();
}

// Event listener to calculate and show the age
calculateAgeElement.addEventListener("click", () => {
  const birthdateString = birthdateInputElement.value;
  let resultText = "";

  if (birthdateString) {
    const age = calculateExactAge(birthdateString);
    resultText = `You are ${age} old.`;
  } else {
    resultText = "Please select your birthdate.";
  }

  // Debugging: Check if the result is being updated
  console.log(resultText);

  ageResultElement.textContent = resultText;

  // Ensure the result is visible by adding the 'visible' class
  ageResultElement.classList.add("visible");
});
