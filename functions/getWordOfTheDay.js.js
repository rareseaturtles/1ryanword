// functions/getWordOfTheDay.js

exports.handler = async (event, context) => {
    // Replace this with your logic to get the word of the day
    const wordOfTheDay = "Hello"; // For now, we'll use a static word

    return {
        statusCode: 200,
        body: JSON.stringify({ word: wordOfTheDay })
    };
};
