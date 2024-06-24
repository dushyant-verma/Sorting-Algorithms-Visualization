// Generate a random array

const array = [];
const arraySize = 30;

for (let i = 0; i < arraySize; i++) {
  array.push(Math.floor(Math.random() * 100) + 1);
}

// Function to create bars

function createBars(arr) {
  const arrayContainer = document.getElementById("array");
  arrayContainer.innerHTML = "";
  arr.forEach((value) => {
    const bar = document.createElement("div");
    bar.classList.add("bar");
    bar.style.height = `${value * 3}px`;
    arrayContainer.appendChild(bar);
  });
}

// Initial array display

createBars(array);

// Delay function
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Bubble Sort

async function bubbleSort() {
  const bars = document.querySelectorAll(".bar");
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        // Swap the values

        [array[j], array[j + 1]] = [array[j + 1], array[j]];

        // Update bars
        bars[j].style.height = `${array[j] * 3}px`;
        bars[j + 1].style.height = `${array[j + 1] * 3}px`;

        // Highlight bars being swapped

        bars[j].style.backgroundColor = "red";
        bars[j + 1].style.backgroundColor = "red";

        await sleep(100);
        bars[j].style.backgroundColor = "#3498db";
        bars[j + 1].style.backgroundColor = "#3498db";
      }
    }
  }
}

//  Selection Sort

async function selectionSort() {
  const bars = document.querySelectorAll(".bar");
  for (let i = 0; i < array.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      // Swap the values

      [array[i], array[minIndex]] = [array[minIndex], array[i]];
      // Update bars
      bars[i].style.height = `${array[i] * 3}px`;
      bars[minIndex].style.height = `${array[minIndex] * 3}px`;

      // Highlight bars being swapped

      bars[i].style.backgroundColor = "red";
      bars[minIndex].style.backgroundColor = "red";
      await sleep(100);
   
      bars[i].style.backgroundColor = "#3498db";
      bars[minIndex].style.backgroundColor = "#3498db";
    }
  }
}
