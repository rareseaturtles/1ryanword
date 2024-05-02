let currentWord = 'Hello'; // Initialize the word

exports.handler = async (event, context) => {
    if (event.httpMethod === 'GET') {
        // Handle GET request to retrieve the current word
        return {
            statusCode: 200,
            body: JSON.stringify({ currentWord })
        };
    } else if (event.httpMethod === 'POST') {
        // Handle POST request to update the current word
        const requestBody = JSON.parse(event.body);
        const newWord = requestBody.word;

        // Update the current word
        currentWord = newWord;

        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Word updated successfully.' })
        };
    } else {
        // Handle other HTTP methods
        return {
            statusCode: 405,
            body: JSON.stringify({ error: 'Method Not Allowed' })
        };
    }
};
