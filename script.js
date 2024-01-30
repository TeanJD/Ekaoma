// apiurl ja api keys
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


// eka nappi grammar

const grammarButton = document.querySelector(".correct-grammar");

grammarButton.addEventListener("click", function () {
    const draftInput = document.querySelector(".inputprompt").value;

    const grammarPrompt = "Please ensure that the grammar in your response is correct. Your task is to review the text and make necessary corrections to ensure proper grammar usage throughout. Your response should demonstrate a clear understanding of grammar rules and conventions, and it should effectively communicate the intended message with accurate and appropriate grammar usage. Please note that your corrections should cover various aspects of grammar, including but not limited to sentence structure, verb tense, subject-verb agreement, punctuation, and use of articles. Your response should be flexible enough to allow for various relevant and creative examples of grammar corrections.";

    const apiKey = apiKeys[Math.floor(Math.random() * apiKeys.length)]; // Randomly select an API key

    // Output field classes
    const outputFields = [".ekaoutput", ".tokaoutput", ".kolmasoutput"];

    // Make API requests for each output field
    outputFields.forEach((outputField, index) => {
        const requestBody = {
            model: "text-davinci-002", // The model to use for completion
            prompt: `${grammarPrompt}\n\n${draftInput}`,
            temperature: 0.7,
            max_tokens: 256,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0
        };

        fetch(apiurl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify(requestBody)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`API request failed with status ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // Assuming the API returns the corrected text in data.choices[0].text
            const correctedText = data.choices[0].text;
            document.querySelector(outputField).value = correctedText;
        })
        .catch(error => {
            console.error('Error:', error);
            // Handle the error appropriately, e.g., show an error message to the user
        });
    });
});
   
  
  
// toka nappi

// Select the new button by its class
const enhanceWordingButton = document.querySelector(".enhance-wording");

// Add an event listener to the new button
enhanceWordingButton.addEventListener("click", function () {
    const draftInput = document.querySelector(".inputprompt").value;

    // New prompt
    const grammarPrompt = "Revise the wording of this text to improve its clarity, coherence, and impact. Your task is to rephrase the given text in a way that enhances its overall effectiveness, readability, and communicative power. Please ensure that the revised text maintains the original meaning and intention but with improved language usage and expression. Your revisions should aim to strengthen the text's impact and make it more compelling for the intended audience.";

    const apiKey = apiKeys[Math.floor(Math.random() * apiKeys.length)]; // Randomly select an API key

    // Output field classes
    const outputFields = [".ekaoutput", ".tokaoutput", ".kolmasoutput"];

    // Make API requests for each output field
    outputFields.forEach((outputField, index) => {
        const requestBody = {
            model: "text-davinci-002", // The model to use for completion
            prompt: `${grammarPrompt}\n\n${draftInput}`,
            temperature: 0.7,
            max_tokens: 256,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0
        };

        fetch(apiurl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify(requestBody)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`API request failed with status ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // Assuming the API returns the corrected text in data.choices[0].text
            const correctedText = data.choices[0].text;
            document.querySelector(outputField).value = correctedText;
        })
        .catch(error => {
            console.error('Error:', error);
            // Handle the error appropriately, e.g., show an error message to the user
        });
    });
});
  


// kolmas nappi

const newWordingButton = document.querySelector(".new-wording");


newWordingButton.addEventListener("click", function () {
    const draftInput = document.querySelector(".inputprompt").value;


    const newWordingPrompt = "Use new language to express the same idea, but with a fresh perspective. Make sure to rephrase the content in a way that captures the essence of the original message while bringing a new angle to it. Avoid repeating the exact wording and instead offer a unique take on the concept. Remember, creativity and originality are key here. Let's see how you can reframe the message with a different linguistic approach.";

    const apiKey = apiKeys[Math.floor(Math.random() * apiKeys.length)]; // Randomly select an API key

    const outputFields = [".ekaoutput", ".tokaoutput", ".kolmasoutput"];

    outputFields.forEach((outputField, index) => {
        const requestBody = {
            model: "text-davinci-002", // The model to use for completion
            prompt: `${newWordingPrompt}\n\n${draftInput}`,
            temperature: 0.7,
            max_tokens: 256,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0
        };

        fetch(apiurl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify(requestBody)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`API request failed with status ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // Assuming the API returns the corrected text in data.choices[0].text
            const correctedText = data.choices[0].text;
            document.querySelector(outputField).value = correctedText;
        })
        .catch(error => {
            console.error('Error:', error);
            // Handle the error appropriately, e.g., show an error message to the user
        });
    });
});
  



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
