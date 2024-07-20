const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      const height = parseInt(document.querySelector("#height").value);
      const weight = parseInt(document.querySelector("#weight").value);
      const results = document.querySelector("#results");

      if (height === "" || height < 0 || isNaN(height)) {
        results.innerHTML = `Please give a valid height`;
        return;
      } else if (weight === "" || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please give a valid weight`;
        return;
      } else {
        const bmi = (weight / ((height / 100) ** 2)).toFixed(2);
        let category = "";

        if (bmi < 18.5) {
          category = "Underweight";
        } else if (bmi >= 18.5 && bmi <= 24.9) {
          category = "Normal weight";
        } else if (bmi >= 25 && bmi <= 29.9) {
          category = "Overweight";
        } else {
          category = "Obesity";
        }

        results.innerHTML = `<span>Your BMI is ${bmi}</span><span class="result-span">Category: ${category}</span>`;
      }
    });