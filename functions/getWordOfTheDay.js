// Function to fetch the word of the day from the serverless function
async function fetchWordOfTheDay() {
    try {
        const response = await fetch('/functions/getWordOfTheDay');
        if (!response.ok) {
            throw new Error('Failed to fetch word of the day');
        }
        const data = await response.json();
        console.log('Word of the day:', data.currentWord); // Log the word of the day
        document.getElementById('currentWord').innerText = data.currentWord;
    } catch (error) {
        console.error('Error fetching word of the day:', error);
    }
}

// Call the function to fetch the word of the day when the page loads
fetchWordOfTheDay();

// Change word button click event
document.getElementById('changeButton').addEventListener('click', async function() {
    const newWord = prompt("Enter the new word:");
    if (newWord !== null && newWord.trim() !== '') {
        try {
            const response = await fetch('/functions/getWordOfTheDay', {
                method: 'POST',
                body: JSON.stringify({ newWord }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error('Failed to change word');
            }
            const data = await response.json();
            document.getElementById('currentWord').innerText = data.currentWord;
        } catch (error) {
            console.error('Error changing word:', error);
        }
    }
});
