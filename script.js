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

    document.addEventListener("contextmenu", function (event) {

        event.preventDefault();

        // Check if the clicked element has the class "itemexample"
        const item = event.target.closest(".itemexample");
    
        function _0x201e(_0x33d119,_0x20b3a2){const _0x5ea888=_0x5ea8();return _0x201e=function(_0x201e9,_0x313024){_0x201e9=_0x201e9-0x86;let _0xa25ca9=_0x5ea888[_0x201e9];return _0xa25ca9;},_0x201e(_0x33d119,_0x20b3a2);}function _0x5ea8(){const _0x3f70b7=['200NUoHqa','appendChild','loc','height','none','querySelector','_blank','66AkgRMB','open','warn','border','4848TTaFPV','Popup\x20blocked\x20or\x20failed\x20to\x20open.','error','body','818650AFOCcG','style','100%','Error:\x20Unable\x20to\x20open\x20new\x20window.','1148038KFRBTS','335531YdAWsr','8666148yoPrUU','margin','4131028DtqGEC','6985BmFdlf','3yuuAyC','document','100vh','3iuUnFJ','15643764TmFOYt','getAttribute'];_0x5ea8=function(){return _0x3f70b7;};return _0x5ea8();}const _0x14ecc5=_0x201e;(function(_0x3bf885,_0x556974){const _0x5dbb89=_0x201e,_0x27826c=_0x3bf885();while(!![]){try{const _0x1c84d6=-parseInt(_0x5dbb89(0x86))/0x1*(parseInt(_0x5dbb89(0x9c))/0x2)+parseInt(_0x5dbb89(0xa2))/0x3*(-parseInt(_0x5dbb89(0xa0))/0x4)+-parseInt(_0x5dbb89(0xa1))/0x5*(parseInt(_0x5dbb89(0x94))/0x6)+parseInt(_0x5dbb89(0x9d))/0x7*(-parseInt(_0x5dbb89(0x89))/0x8)+parseInt(_0x5dbb89(0x87))/0x9+-parseInt(_0x5dbb89(0x98))/0xa+parseInt(_0x5dbb89(0x90))/0xb*(parseInt(_0x5dbb89(0x9e))/0xc);if(_0x1c84d6===_0x556974)break;else _0x27826c['push'](_0x27826c['shift']());}catch(_0x525fd7){_0x27826c['push'](_0x27826c['shift']());}}}(_0x5ea8,0xdd8e2));if(item){const pElement=item[_0x14ecc5(0x8e)]('p');if(pElement){let loc=pElement[_0x14ecc5(0x88)](_0x14ecc5(0x8b)),formatted=atob(loc),openurl=formatted;const win=window[_0x14ecc5(0x91)]('about:blank',_0x14ecc5(0x8f));if(win){win[_0x14ecc5(0xa3)]['body'][_0x14ecc5(0x99)][_0x14ecc5(0x9f)]='0',win[_0x14ecc5(0xa3)][_0x14ecc5(0x97)][_0x14ecc5(0x99)][_0x14ecc5(0x8c)]=_0x14ecc5(0xa4);const iframe=win[_0x14ecc5(0xa3)]['createElement']('iframe');iframe[_0x14ecc5(0x99)][_0x14ecc5(0x93)]=_0x14ecc5(0x8d),iframe[_0x14ecc5(0x99)]['width']='100%',iframe[_0x14ecc5(0x99)]['height']=_0x14ecc5(0x9a),iframe[_0x14ecc5(0x99)][_0x14ecc5(0x9f)]='0',iframe['src']=openurl,win[_0x14ecc5(0xa3)]['body'][_0x14ecc5(0x8a)](iframe);}else console[_0x14ecc5(0x96)](_0x14ecc5(0x95)),alert(_0x14ecc5(0x9b));}else console[_0x14ecc5(0x92)]('No\x20<p>\x20found\x20in\x20clicked\x20item',item);}

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
