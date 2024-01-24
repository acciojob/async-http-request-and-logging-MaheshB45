//your JS code here. If required.
async function fetchData() {
  const url = 'https://jsonplaceholder.typicode.com/todos/1';

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Response:', data);
  } catch (error) {
    console.error('Error fetching data:', error.message);
  }
}

// Call the function to make the asynchronous HTTP request
fetchData();
