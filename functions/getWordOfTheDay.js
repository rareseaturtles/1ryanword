// functions/getWordOfTheDay.js

let currentWord = 'Hello'; // Initialize the word

exports.handler = async (event, context) => {
    console.log('Received request:', event);

    if (event.httpMethod === 'GET') {
        console.log('GET request received');
        return {
            statusCode: 200,
            body: JSON.stringify({ currentWord })
        };
    } else if (event.httpMethod === 'POST') {
        console.log('POST request received');
        const requestBody = JSON.parse(event.body);
        console.log('Request body:', requestBody);

        const newWord = requestBody.newWord;
        console.log('New word:', newWord);

        currentWord = newWord;
        
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Word changed successfully', currentWord })
        };
    } else {
        console.log('Unsupported method:', event.httpMethod);
        return {
            statusCode: 405,
            body: JSON.stringify({ error: 'Method Not Allowed' })
        };
    }
};


