// // Dark/Light Theme Toggle 
// const toggleButton = document.getElementById('toggle-theme');
// const incrementButton = document.getElementById('increment');
// const decrementButton = document.getElementById('decrement');
// const resetButton = document.getElementById('reset');
// const counter = document.getElementById('counter');

// toggleButton.addEventListener('click', () => {
//     document.body.classList.toggle('dark-theme');
//     if (document.body.classList.contains("dark-theme")) {
//         toggleButton.textContent = "Switch to Light Theme";
//     } else {
//         toggleButton.textContent = "Switch to Dark Theme";
//     }
// });

// // Counter Functionality
// let count = 0;

// incrementButton.addEventListener("click", () => {
//     count++;
//     counter.textContent = count;
// });

// decrementButton.addEventListener("click", () => {
//     count--;
//     counter.textContent = count;
// })

// resetButton.addEventListener("click", () => {
//     count = 0;
//     counter.textContent = count; // Reset the counter display to 0
// })



// // Custom Modal (Popup Window)
// const openBtn = document.getElementById('open-btn');
// const closeBtn = document.getElementById('close-btn');
// const overlay = document.getElementById('modal-overlay');

// // 1. Open Button Logic
// openBtn.addEventListener('click', () => {
//     overlay.classList.add('show');
// });

// // 2. Close 'X' Button Logic
// closeBtn.addEventListener('click', () => {
//     overlay.classList.remove('show');
// });

// // 3. Click Outside to Close Logic
// overlay.addEventListener('click', (e) => {
//     // Check if what we clicked is EXACTLY the dark overlay, and not the white box inside it
//     if (e.target === overlay) {
//         overlay.classList.remove('show');
//     }
// });

// Live Search/Filterable List
// const searchInput = document.getElementById("searchInput");
// const items = document.querySelectorAll("#nameList li");

// searchInput.addEventListener("input", (e) => {
//     const text = e.target.value.toLowerCase();

//     items.forEach((item) => {
//         const name = item.textContent.toLowerCase();
//         if (name.includes(text)) {
//             item.style.display = "block";
//         } else {
//             item.style.display = "none";
//         }
//     })
// })



// Form Validation
// const form = document.getElementById("myForm");
// const nameInput = document.getElementById("name");
// const emailInput = document.getElementById("email");
// const nameError = document.getElementById("nameError");
// const emailError = document.getElementById("emailError");
// const resultDiv = document.getElementById("result");

// form.addEventListener("submit", (e) => {
//     e.preventDefault(); // Prevent form from submitting

//     let valid = true;

//     // Validate Name
//     if (nameInput.value.trim() === "") {
//         nameError.textContent = "Name is required";
//         valid = false;
//     } else {
//         nameError.textContent = "";
//     }

//     // Validate Email
//     if (emailInput.value.trim() === "") {
//         emailError.textContent = "Email is required";
//         valid = false;
//     } else if (!/\S+@\S+\.\S+/.test(emailInput.value)) {
//         emailError.textContent = "Email is invalid";
//         valid = false;
//     } else {
//         emailError.textContent = "";
//     }

//     if (valid) {
//         resultDiv.innerHTML = `
//             <div style="background-color: #dff0d8; padding: 10px; border-radius: 5px; margin-top: 20px;">
//                 <p>Name: ${nameInput.value}</p>
//                 <p>Email: ${emailInput.value}</p>
//                 <p>Form submitted successfully!</p>
//             </div>
//         `;
//         form.reset(); // Clear the form after successful submission
//     }
// })



// Dynamic To-Do List (CRUD) Operations
// const taskInput = document.getElementById("taskInput");
// const addTaskBtn = document.getElementById("addTaskBtn");
// const taskList = document.getElementById("taskList");


// // Step 1: Add Task Logic
// addTaskBtn.addEventListener("click", () => {
//     // Get the task text and trim whitespace
//     const taskText = taskInput.value.trim();

//     if (taskText !== "") {
//         // Create a new list item for the task
//         const li = document.createElement("li");
//         li.textContent = taskText;

//         // Create Edit Button
//         const editBtn = document.createElement("button");
//         editBtn.textContent = "Edit";
//         editBtn.style.marginLeft = "10px";
//         li.appendChild(editBtn);
//         editBtn.addEventListener("click", () => {
//             const newTaskText = prompt("Edit your task:", li.firstChild.textContent);
//             if (newTaskText !== null && newTaskText.trim() !== "") {
//                 li.firstChild.textContent = newTaskText.trim();
//             }
//         })

//         // Create Delete Button
//         const deleteBtn = document.createElement("button");
//         deleteBtn.textContent = "Delete";
//         deleteBtn.style.marginLeft = "10px";
//         li.appendChild(deleteBtn);
//         deleteBtn.addEventListener("click", () => {
//             taskList.removeChild(li); // Remove the task from the list
//             taskInput.value = ""; // Clear the input field
//         })
//         taskList.appendChild(li); // Add the new task to the list
//         taskInput.value = ""; // Clear the input field after adding
//     }
// })

// Interactive Star Rating Component
// const stars = document.querySelectorAll(".star");
// const ratingValue = document.getElementById("ratingValue");

// stars.forEach((star) => {
//     star.addEventListener("click", () => {
//         const value = star.getAttribute("data-value");
//         ratingValue.textContent = `You rated: ${value} out of 5`;

//         // Highlight the stars up to the clicked one
//         stars.forEach((s) => {
//             if (s.getAttribute("data-value") <= value) {
//                 s.classList.add("highlighted");
//             } else {
//                 s.classList.remove("highlighted");
//             }
//         })
//     })
// })




// Countdown Timer
// const countdown = document.getElementById("countdown");
// const startBtn = document.getElementById("start");
// const stopBtn = document.getElementById("stop");
// const resetBtn = document.getElementById("reset");


// let timer;
// let totalSeconds = 0;
// let interval;

// startBtn.addEventListener("click", () => {
//     if (!timer) {
//         timer = setInterval(() => {
//             totalSeconds++;
//             const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
//             const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
//             const seconds = String(totalSeconds % 60).padStart(2, "0");
//             countdown.textContent  = `${hours}:${minutes}:${seconds}`;
//         }, 1000)
//     }
// })

// stopBtn.addEventListener("click", () => {
//     clearInterval(timer); // Stop the timer
//     timer = null; // Reset the timer variable
//     totalSeconds = 0; // Reset the total seconds
// })

// resetBtn.addEventListener("click", () => {
//     clearInterval(timer); // Stop the timer
//     timer = null; // Reset the timer variable
//     totalSeconds = 0; // Reset the total seconds
//     countdown.textContent = "00:00:00"; // Reset the display
// });



// Expense Tracker
// const expenseDescription = document.getElementById("expenseDescription");
// const expenseAmount = document.getElementById("expenseAmount");
// const addExpenseBtn = document.getElementById("addExpenseBtn");
// const expenseList = document.getElementById("expenseList");
// const totalDisplay = document.getElementById("totalDisplay");

// let totalAmount = 0;

// addExpenseBtn.addEventListener("click", () => {
//     const description = expenseDescription.value.trim(); // Trim whitespace from the description
//     const amount = parseFloat(expenseAmount.value.trim()); // Convert the amount to a number


//     // Validate the input: description should not be empty, and amount should be a positive number
//     if (description === "" || isNaN(amount) || amount <= 0) {
//         alert("Please enter a valid description and a positive amount.");
//         return; // Exit the function if the input is invalid
//     }
//     totalAmount += amount; // Add the new amount to the total. Why ? Because we want to keep track of the total expenses as we add new ones. Each time we add a new expense, we need to update the total amount by adding the new expense's amount to the existing total. This way, we can display the updated total to the user every time they add a new expense.
//     totalDisplay.textContent = `Total: $${totalAmount.toFixed(2)}`; // Update the total display. We use toFixed(2) to format the total amount to 2 decimal places, which is common for currency values. This ensures that the total is displayed in a user-friendly format, showing cents if necessary.
//     // Create a new list item for the expense
//     const li = document.createElement("li");
//     li.textContent = `${description}: $${amount.toFixed(2)}`;

//     // Create Delete Button
//     const deleteBtn = document.createElement("button");
//     deleteBtn.textContent = "Delete";
//     deleteBtn.classList.add("delete-btn");
//     deleteBtn.style.marginLeft = "10px";
//     li.appendChild(deleteBtn);
//     deleteBtn.addEventListener("click", () => {
//         expenseList.removeChild(li); // Remove the expense from the list
//         totalAmount -= amount; // Subtract the amount from the total
//         totalDisplay.textContent = `Total: $${totalAmount.toFixed(2)}`; // Update the total display
//     })
//     expenseList.appendChild(li); // Add the new expense to the list
//     expenseDescription.value = ""; // Clear the description input field
//     expenseAmount.value = ""; // Clear the amount input field
// });


// let initialScore = { red: 0, blue: 0, green: 0, yellow: 0 };

// function OpeningCeremony(score, raceEvent, longJumpEvent, highJumpEvent, awardEvent) {
//     console.log("1. Sports Day has started!");

//     setTimeout(() => {
//         console.log("2. Opening Ceremony Completed! Score:", score);
//         raceEvent(score, longJumpEvent, highJumpEvent, awardEvent);
//     }, 3000); // Simulating a 3-second delay
// }

// function Race100M(score, longJumpEvent, highJumpEvent, awardEvent) {
//     console.log("\n 2. Start the Race 100M!");

//     setTimeout(() => {
//         score.red += 50;
//         console.log("Race has ended! Red team gets 50 points. Score:", score);
//         longJumpEvent(score, highJumpEvent, awardEvent);
//     }, 2000); // Simulating a 2-second delay
// }

// function LongJump(score, highJumpEvent, awardEvent) {
//     console.log("\n 3. Start the Long Jump!");

//     setTimeout(() => {
//         score.blue += 150;
//         console.log("Long Jump has ended! Blue team gets 150 points. Score:", score);
//         highJumpEvent(score, awardEvent);
//     }, 2000); // Simulating a 2-second delay
// }

// function HighJump(score, awardEvent) {
//     console.log("\n 4. Start the High Jump!");

//     let winner = prompt("High Jump: Which team won? (red/blue/green/yellow)");

//     if (winner === "red" || winner === "blue" || winner === "green" || winner === "yellow") {
//         score[winner] += 100;
//         console.log(`High Jump has ended! ${winner} team gets 100 points. Score:`, score);
//     } else {
//         console.log("Invalid input for High Jump winner. No points awarded.");
//     }
//     console.log("Score:", score);
//     awardEvent(score);
// };

// function AwardCeremony(score) {
//     console.log("\n 5. Award Ceremony!");
//     console.log("Final Score:", score);
//     console.log("Congratulations to all the teams for their participation!");
// };

// // Start the Sports Day Event
// OpeningCeremony(initialScore, Race100M, LongJump, HighJump, AwardCeremony);


