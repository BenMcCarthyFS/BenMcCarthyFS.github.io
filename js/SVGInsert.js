(function(){
    let _oldElement = document.currentScript;

    let _svgURL = "images/" + _oldElement.dataset.id + ".svg";

    fetch(_svgURL)
    .then((response) =>{
        return response.blob();
    })
    .then((data) => {
        console.log(data.text().value);
        return data.text();
    })
    .then((svg) => {
        console.log(svg);
        let _tempWrapper = document.createElement("div");
        _tempWrapper.innerHTML = svg;

        console.log(_tempWrapper.firstChild.nextSibling)
        let _svg = _tempWrapper.querySelector("svg");

        _oldElement.replaceWith(_svg);
    });
})();