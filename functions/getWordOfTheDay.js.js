// functions/getWordOfTheDay.js

let currentWord = 'Hello'; // Initialize the word

exports.handler = async (event, context) => {
    if (event.httpMethod === 'GET') {
        return {
            statusCode: 200,
            body: JSON.stringify({ currentWord })
        };
    } else if (event.httpMethod === 'POST') {
        const requestBody = JSON.parse(event.body);
        const newWord = requestBody.newWord;
        currentWord = newWord;
        
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Word changed successfully', currentWord })
        };
    } else {
        return {
            statusCode: 405,
            body: JSON.stringify({ error: 'Method Not Allowed' })
        };
    }
};
