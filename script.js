document.addEventListener("DOMContentLoaded", (event) => {
    // The content below loads the scripts to html files so that it isnt very cluttered
    function loadScript(url) {
        const script = document.createElement('script');
        script.src = url;
        document.head.appendChild(script);
    }

    loadScript('https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.7.1.js');
    loadScript('https://cdnjs.cloudflare.com/ajax/libs/jszip/3.7.1/jszip.min.js');
    loadScript('https://cdn.statically.io/gh/GsLibrary/Library/main/NewScript.js');
    loadScript('https://kit.fontawesome.com/5f8433758a.js');

    // Rest of script
    const searchInput = document.getElementById("search");
    const items = document.querySelectorAll(".itemexample");
    const listContainer = document.querySelector(".list");

    searchInput.addEventListener("input", function () {
        const searchText = searchInput.value.toLowerCase();
        const items = document.querySelectorAll(".itemexample"); // Get updated list of items
    
        items.forEach(item => {
            const itemText = item.querySelector("p").textContent.toLowerCase();
            if (itemText.includes(searchText)) {
                item.style.display = "block"; // Show matching item
            } else {
                item.style.display = "none"; // Hide non-matching items
            }
        });
    });    

    fetch("data.json")
    .then(response => response.json())
    .then(data => {
        data.forEach(item => {
            const [appName, appDirectory, logo] = item;

            // Encode the appDirectory using btoa()
            const encodedDirectory = btoa(appDirectory);

            // Create a new item div
            const itemDiv = document.createElement("div");
            itemDiv.classList.add("itemexample");

            // Create the image element
            const img = document.createElement("img");
            img.src = logo;

            // Create the paragraph element
            const p = document.createElement("p");
            p.textContent = appName;
            p.setAttribute("loc", encodedDirectory);

            // Append elements to the div
            itemDiv.appendChild(img);
            itemDiv.appendChild(p);

            // Append the new item to the list
            listContainer.appendChild(itemDiv);
        });
    })
    .catch(error => console.error("Error loading JSON:", error));
});
