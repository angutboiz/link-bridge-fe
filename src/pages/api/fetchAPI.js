// Function to make a GET request
const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;
async function fetchData(url) {
    try {
        const response = await fetch(API_ENDPOINT + url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
}

// Function to make a POST request
async function postData(url, body) {
    try {
        const response = await fetch(API_ENDPOINT + url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });
        return await response;
    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
}

export { fetchData, postData };
