// Initial count state
let count = 0;

// Get DOM elements
const countDisplay = document.getElementById('count');
const errorMsg = document.getElementById('error-msg');
const incrementBtn = document.getElementById('increment-btn');
const decrementBtn = document.getElementById('decrement-btn');
const clearBtn = document.getElementById('clear-btn');

// Helper function to update the UI
function updateUI() {
    countDisplay.textContent = count;
    
    // Show clear button if count > 0, otherwise hide it
    if (count > 0) {
        clearBtn.style.display = 'inline-block';
    } else {
        clearBtn.style.display = 'none';
    }
}

// Increment Button Logic
incrementBtn.addEventListener('click', () => {
    count++;
    errorMsg.style.display = 'none'; // Hide error if it was visible
    updateUI();
});

// Decrement Button Logic
decrementBtn.addEventListener('click', () => {
    if (count > 0) {
        count--;
        errorMsg.style.display = 'none';
        updateUI();
    } else {
        // Show error if user tries to go below 0
        errorMsg.style.display = 'block';
    }
});

// Clear Button Logic
clearBtn.addEventListener('click', () => {
    count = 0;
    errorMsg.style.display = 'none';
    updateUI();
});

// Initialize the UI on first load
updateUI();