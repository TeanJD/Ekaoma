// eka apiurl 
const apiurl = ´https://api.openai.com/v1/completions´

const apiKeys = [
  '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',
  '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',
  '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',
  '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',
  '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',
  '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',
  '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',
  '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',
  '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',
  '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'
];



// input text functionality - Utilize JavaScript to capture and store user input.- Implement event listeners to respond to user interactions in the textarea.








const buttonNames = [
  'Enhance wording',
  'New wording',
  'More clear',
  'Add examples',
  'Shorter',
  'Bulletpoints',
  'Suggestions',
  'Vague points',
  'Create draft'
];

async function callOpenAI(promptText, apiKey) {
  
        
    
    - sit async funtion napeille
    

    
    
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
