async function fetchData(url) {
    const response = await fetch(url,
        {
            mode: "cors",
            headers: {
                'Content-Type': 'application/vnd.api+json'
            }
            //headers: {
            //    "Access-Control-Allow-Origin": '*'
            //}
        }
    );
    const result = await response.json();
    // do something here
    console.log(result);
}