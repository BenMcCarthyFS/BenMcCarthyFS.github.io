// force clear localStorage of saved palettes when set true
const _colourReset = true;
const _disablePicker = true;
const PaletteButtonData = [ {name:"--clr-0-300", id:0},
                            {name:"--clr-0-400", id:1},
                            {name:"--clr-0-500", id:2},
                            {name:"--clr-1-300", id:3},
                            {name:"--clr-1-400", id:4},
                            {name:"--clr-1-500", id:5},
                            {name:"--clr-2-300", id:6},
                            {name:"--clr-2-400", id:7},
                            {name:"--clr-2-500", id:8}];

const ClrNameReplace = ["primary","secondary","accent"];

const DarkNameReplace = ["light","dark"];


var colourThemes = document.querySelectorAll('[name="theme"]');
var darkmode = document.querySelector('[name="dark"]');

(function() {
    if(_disablePicker)return;

    let _oldElement = document.currentScript;
    let _colourPicker =   `<fieldset>
    <legend class="visually-hidden">Themes</legend>

    <span class="picker-wrapper"></span>

    <button id="palette-reset">RESET</button>

    <span class="flex-row">
        <label for="theme" class="visually-hidden">Theme 1</label>
        <input type="radio" name="theme" id="theme1" data-id='1' checked>

        <label for="theme" class="visually-hidden">Theme 2</label>
        <input type="radio" name="theme" id="theme2" data-id='2' >

        <label for="theme" class="visually-hidden">Theme 3</label>
        <input type="radio" name="theme" id="theme3" data-id='3' >
    </span>
    
    <input type="checkbox" name="dark" id="darkmode" class="visually-hidden" > 
    <label for="darkmode" class="dark-toggle"><span></span></label>
</fieldset>`;

let _pickerForm = document.createElement("form");
_pickerForm.id = "pickerForm";
_pickerForm.classList.add("colour-picker");
_pickerForm.innerHTML = _colourPicker;

_pickerForm.querySelector("#palette-reset").addEventListener("click", PaletteReset);

PaletteButtonData.forEach((element) => {
    let _newPalettePicker = document.createElement("span");
    let _name = element.name;
    let _id = element.id;
    _newPalettePicker.innerHTML = `<label for="${_name}" class="">${_name}</label><input type="color" name="${_name}" id="${_name}" data-id="${_id}">`;
    _pickerForm.querySelector(".picker-wrapper").appendChild(_newPalettePicker);
});

_pickerForm.querySelectorAll("input[type='color']").forEach((input) => {
    input.addEventListener("input", NewColourPicked, false);
  });

if(_colourReset)
{
    let _pID = 1;
    while(_pID < 5)
    {
        localStorage.removeItem('palette'+_pID+'Light');
        localStorage.removeItem('palette'+_pID+'Dark');
        console.log("looping and removing")
        _pID++;
    }
}

    _oldElement.replaceWith(_pickerForm);

    colourThemes = document.querySelectorAll('[name="theme"]');
    darkmode = document.querySelector('[name="dark"]');

    darkmode.addEventListener("click", () => {
        darkmode.checked ? storeBrightness("dark") : storeBrightness("light");
    })
    
    
    colourThemes.forEach(themeOption => {
        themeOption.addEventListener('click', () => {
            storeTheme(themeOption.id);
            paletteID = themeOption.dataset.id;
        })
    });
})();

const palettes = [
                [],[],[],[]
];

palettes[1]["light"] = [
    "hsl(0 0% 100%)",
    "hsl(0 0% 90%)",
    "hsl(0 0% 65%)",
    "hsl(0 0% 50%)",
    "hsl(0 0% 35%)",
    "hsl(0 0% 20%)",
    "hsl(202 53% 100%)",
    "hsl(202 53% 100%)",
    "hsl(202 53% 100%)"
];

palettes[1]["dark"] = [
    "hsl(0 0% 100%)",
    "hsl(0 0% 35%)",
    "hsl(0 0% 65%)",
    "hsl(0 0% 30%)",
    "hsl(0 0% 15%)",
    "hsl(0 0% 20%)",
    "hsl(202 53% 100%)",
    "hsl(202 53% 100%)",
    "hsl(202 53% 100%)"
]

palettes[2]["light"] = [
    "hsl(0 0% 100%)",
    "hsl(41 40% 95%)",
    "hsl(208 64% 60%)",
    "hsl(0 0% 20%)",
    "hsl(208 74% 52%)",
    "hsl(211 100% 23%)",
    "hsl(202 53% 100%)",
    "hsl(202 53% 100%)",
    "hsl(202 53% 100%)"
]

palettes[2]["dark"] = [
    "hsl(0 0% 100%)",
    "hsl(41 40% 95%)",
    "hsl(208 44% 10%)",
    "hsl(0 0% 20%)",
    "hsl(208 74% 32%)",
    "hsl(211 60% 23%)",
    "hsl(202 53% 100%)",
    "hsl(202 53% 100%)",
    "hsl(202 53% 100%)"
]

palettes[3]["light"] = [
    "hsl(225, 32%, 29%)",
    "hsl(224, 37%, 43%)",
    "hsl(224, 60%, 69%)",
    "hsl(194 14% 22%)",
    "hsl(208 55% 53%)",
    "hsl(210 22% 34% / 0.5)",
    "hsl(41 82% 30%)",
    "hsl(41 100% 53%)",
    "hsl(41 78% 82%)"
]

palettes[3]["dark"] = [
    "hsl(0 0% 100%)",
    "hsl(53 12% 83%)",
    "hsl(194 14% 22%)",
    "hsl(208 56% 53%)",
    "hsl(210 22% 34%)",
    "hsl(202 53% 31%)",
    "hsl(41 100% 53%)",
    "hsl(202 53% 100%)",
    "hsl(202 53% 100%)"
]

var paletteID = 0;

function brightness()
{
    return ( darkmode.checked ? "dark" : "light");
}

function formattedClrVar(clr)
{
    let regex = /-\d-/i;
    let _str = clr.replace("--clr","--clr-"+brightness());
    let _idReplace = _str.match(regex)[0].replaceAll("-","");
    _str = _str.replace(regex, `-${ClrNameReplace[_idReplace]}-`);
    return _str;
}


function PaletteReset(e)
{
    e.preventDefault();
    savedPalette = palettes[paletteID][brightness()];

    LoadPalette(savedPalette);
}

function NewColourPicked(e)
{
    console.log("Colour was picked from somewhere");
    let _colourVarID = e.currentTarget.dataset.id;    
    let colourName = darkmode.checked ? DarkColourNames : LightColourNames;


    document.documentElement.style.setProperty(colourName[_colourVarID-1], e.currentTarget.value);

    
    localStorage.setItem("palette"+paletteID+(darkmode.checked ? "Dark" : "Light"), JSON.stringify(CurrentPaletteJson()));
}

const setTheme = function()
{
    const activeTheme = localStorage.getItem("theme");
    const activeLightness = localStorage.getItem("darkmode");
    colourThemes.forEach((themeOption) => {
        if(themeOption.id === activeTheme)
        {
            themeOption.checked = true;
            paletteID = themeOption.dataset.id;
        }
    });

    if(activeLightness === "dark")
    {
        darkmode.checked = true;
    }
    // fallback for no :has() support
    document.documentElement.className = activeTheme + " " + activeLightness;
    
    let savedPalette = JSON.parse(localStorage.getItem('palette'+paletteID+brightness()));

    if(!savedPalette)savedPalette = palettes[paletteID][brightness()];

    LoadPalette(savedPalette);
}

const LoadPalette = function(palette)
{
    let colorForm = document.querySelectorAll(`input[type="color"]`);

    console.log(palette)

    colorForm.forEach(element => {
        element.value = HSLtoHex(palette[element.dataset.id]);        
        document.documentElement.style.setProperty(formattedClrVar(element.name), HSLtoHex(palette[element.dataset.id]));
    });
}

const HSLtoHex = function(value)
{
    if(value.charAt(0) === "#")return value;

    let hslText = value.substring(value.indexOf("(")+1, value.lastIndexOf(")"));
    hslText = hslText.replaceAll("%","");
    hslText = hslText.replaceAll("/","");

    let hslVals = hslText.split(" ");

    let h = parseInt(hslVals[0]);
    let s = parseInt(hslVals[1]);
    let l = parseInt(hslVals[2]);
    let alph = "ff";


    if(hslVals[3])
    {
        
    console.log(Math.round(255 * alph).toString(16).padStart(2, '0'))
    }

    l /= 100;
    const a = s * Math.min(l, 1 - l) / 100;
    const f = n => {
        const k = (n + h / 30) % 12;
        const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
        return Math.round(255 * color).toString(16).padStart(2, '0');
    };
    return `#${f(0)}${f(8)}${f(4)}${alph}`;
}

const CurrentPaletteJson = function()
{
    let _clrJSON = {};
    let colorForm = document.querySelectorAll(`input[type="color"]`);

    colorForm.forEach(element => {
        _clrJSON[formattedClrVar(element.name)] = element.value;
    });

    return _clrJSON;
}

const storeTheme = function (theme)
{
    localStorage.setItem("theme", theme);
    localStorage.setItem("palette"+paletteID+brightness(), JSON.stringify(CurrentPaletteJson()));
    setTheme();
}

const storeBrightness = function (lightness)
{
    localStorage.setItem("darkmode", lightness);
    setTheme();
}

//document.onload = setTheme();