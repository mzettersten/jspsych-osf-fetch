async function fetchData(url) {
    const response = await fetch(url,
        {
            mode: "cors",
            headers: {
                "Access-Control-Allow-Origin": '*'
            }
        }
    );
    const result = await response.json();
    // do something here
    console.log(result);
}