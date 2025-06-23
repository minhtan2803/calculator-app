const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

let currentInput = "";
let resultShown = false;

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.dataset.value;

    if (value === "C") {
      currentInput = "";
      display.textContent = "0";
      resultShown = false;
    } else if (value === "←") {
      currentInput = currentInput.slice(0, -1);
      display.textContent = currentInput || "0";
    } else if (value === "=") {
      try {
        const evaluated = eval(currentInput);
        display.textContent = evaluated;
        currentInput = evaluated.toString();
        resultShown = true;
      } catch {
        display.textContent = "Lỗi";
        currentInput = "";
      }
    } else {
      // Nếu vừa bấm "=" và tiếp tục nhập số → reset input
      if (resultShown && /[0-9.]/.test(value)) {
        currentInput = "";
        resultShown = false;
      }

      currentInput += value;
      display.textContent = currentInput;
    }
  });
});
