// eka apiurl - sit apikey joka napille- sit async funtion
//async function generateResponse(prompt, apiKey, maxTokens) 
// request body - tarviit sen ku siihe laitetaa se prompt sun napist ja input texti - use fetch to do the api request itself -parsing response json nii voit ottaa apilt tullu jutu haltuu
//


console.log(output1);
console.log(output2);
console.log(output3);





// Add event listeners and functions for generating PDF
document.getElementById('downloadBtn').addEventListener('click', function() {
    // Add code here to generate and download the PDF
});

-- dropdown
// Get the necessary DOM elements
const dropdownBtn = document.querySelector('.dropdown-btn');
const dropdownContent = document.querySelector('.dropdown-content');
const deleteBtns = document.querySelectorAll('.delete-btn');
const reopenBtns = document.querySelectorAll('.reopen-btn');

// Toggle visibility of dropdown content
dropdownBtn.addEventListener('click', () => {
  dropdownContent.classList.toggle('show');
});

// Delete button event listener
deleteBtns.forEach((btn) => {
  btn.addEventListener('click', (event) => {
    const chapterOption = event.target.closest('.dropdown-option');
    chapterOption.remove();
  });
});

// Reopen button event listener
reopenBtns.forEach((btn) => {
  btn.addEventListener('click', (event) => {
    // Handle reopening the chapter
    // ...
  });
});
