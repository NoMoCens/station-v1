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


    // Check if searchInput exists
    if (searchInput) {
        searchInput.addEventListener("input", function () {
            const searchText = searchInput.value.toLowerCase();
            const items = document.querySelectorAll(".itemexample"); // Get all items

            items.forEach(item => {
                const pElement = item.querySelector("p"); // Get the <p> inside
                if (pElement) { // Check if <p> exists inside
                    const itemText = pElement.textContent.toLowerCase();

                    // Show/hide based on search
                    item.style.display = itemText.includes(searchText) ? "block" : "none";
                } else {
                    console.warn("No <p> found inside", item);
                }
            });
        });
    }

    document.addEventListener("click", function (event) {
        // Check if the clicked element has the class "itemexample"
        const item = event.target.closest(".itemexample");
    
        if (item) {
            const pElement = item.querySelector("p");
            if (pElement) {
                let loc = pElement.getAttribute("loc");
                let formatted = atob(loc);
                window.location.href = formatted;
                // window.open(formatted, '_blank');
            } else {
                console.warn("No <p> found in clicked item", item);
            }
        }
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
