document.addEventListener("DOMContentLoaded", function() {
    const jsonContainer = document.getElementById("JSONContent");

    // Fetch JSON data from your GitHub repo
    fetch("https://louisgodfrin.github.io/JSON_1/Simple_JSON_File.json")
        .then(response => response.json())
        .then(data => {
            // Create an HTML element to display the JSON content
            const pre = document.createElement("pre");
            pre.textContent = JSON.stringify(data, null, 2); // Use JSON.stringify to format the JSON nicely

            // Append the element to the container
            jsonContainer.appendChild(pre);
        })
        .catch(error => {
            console.error("Error fetching JSON data:", error);
        });
});