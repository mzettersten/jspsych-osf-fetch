async function fetchData(url) {
    const response = await fetch(url);
    const result = await response.json();
    // do something here
    console.log(result);
}