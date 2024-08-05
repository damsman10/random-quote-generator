const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');

async function fetchData() {
    try {
        const response = await fetch("https://type.fit/api/quotes");
        const data = await response.json();

        const randomIndex = Math.floor(Math.random() * data.length);
        const randomQuote = data[randomIndex];

        quoteElement.innerHTML = `"${randomQuote.text}"`;
        authorElement.innerHTML = `- ${randomQuote.author ? randomQuote.author : 'Unknown'}`;
    } catch (error) {
        console.error("Error fetching the quotes:", error);
        quoteElement.innerHTML = "Failed to fetch quote.";
        authorElement.innerHTML = "";
    }
}

// Initial fetch
fetchData();
