(function(){
    let _oldElement = document.currentScript;

    const maxComponents = 8;

    let searchJSON = 
    {
        'systems':[
            {
                'name':'Antennas',
                'mesh':'mesh1',
                'components':
                    [
                        {
                            'name':'Antenna 1',
                            'mesh':'mesh1',
                            'components': []
                        },
                        {
                            'name':'Antenna 2',
                            'mesh':'mesh1',
                            'components': []
                        },
                        {
                            'name':'Antenna 3',
                            'mesh':'mesh1',
                            'components': []
                        },
                        {
                            'name':'Antenna 4',
                            'mesh':'mesh1',
                            'components': []
                        },
                        {
                            'name':'Antenna 5',
                            'mesh':'mesh1',
                            'components': []
                        },
                        {
                            'name':'Antenna 6',
                            'mesh':'mesh1',
                            'components': []
                        },
                        {
                            'name':'Antenna 7',
                            'mesh':'mesh1',
                            'components': []
                        },
                        {
                            'name':'Antenna 8',
                            'mesh':'mesh1',
                            'components': []
                        },
                        {
                            'name':'Antenna 9',
                            'mesh':'mesh1',
                            'components': []
                        },
                        {
                            'name':'Antenna 10',
                            'mesh':'mesh1',
                            'components': []
                        },
                        {
                            'name':'Antenna 11',
                            'mesh':'mesh1',
                            'components': []
                        },
                        {
                            'name':'Antenna 12',
                            'mesh':'mesh1',
                            'components': []
                        },
                        {
                            'name':'Antenna 13',
                            'mesh':'mesh1',
                            'components': []
                        }
                    ]
            },
            {
                'name':'Antennas',
                'mesh':'mesh1',
                'components':
                    [
                        {
                            'name':'Antenna 1',
                            'mesh':'mesh1',
                            'components': []
                        },
                        {
                            'name':'Antenna 2',
                            'mesh':'mesh1',
                            'components': []
                        },
                        {
                            'name':'Antenna 3',
                            'mesh':'mesh1',
                            'components': []
                        },
                        {
                            'name':'Antenna 4',
                            'mesh':'mesh1',
                            'components': []
                        },
                        {
                            'name':'Antenna 5',
                            'mesh':'mesh1',
                            'components': []
                        },
                    ]
            } 
        ]   
    }


    let _navBarText =   `<nav class="hero-nav">
                            <span data-id='search'><i class="fa-solid fa-magnifying-glass fa-fw fa-xl"></i></span>
                            <span data-id='layers'><i class="fa-solid fa-layer-group fa-fw fa-xl"></i></span>
                            <span data-id='settings'><i class="fa-solid fa-sliders fa-fw fa-xl"></i></span>
                            <span data-id='bookmarks'><i class="fa-regular fa-bookmark fa-fw fa-xl"></i></span>
                            <span data-id='random'><i class="fa-solid fa-dice-three fa-fw fa-xl"></i></span>
                        </nav>
                        <div class="panelFlow">
                            <div class="panel" data-id='search'></div>
                            <div class="panel" data-id='layers'></div>
                            <div class="panel" data-id='settings'></div>
                            <div class="panel" data-id='bookmarks'></div>
                            <div class="panel" data-id='random'></div>
                        </div>`;

    let _searchContent = document.createElement("div");
    _searchText = `<div class='search-container'>
                        <input class='search searchLeft' type='text' placeholder='Search...' id='searchRight'>
                        <label class='button searchButton' for='searchRight'>
                            <span class='searchGlass'><i class="fa-solid fa-magnifying-glass"></i></span>
                        </label>
                    </div>
                    <div class='scrollContent'>
                    
                        <div class='title'>Index</div>
                        <div class='systemsRoot scrollbox'>
                            
                        </div>
                    </div>
                    
                        `;
_searchContent.classList.add('panelContent','searchContent');
_searchContent.innerHTML = _searchText;



let _settingsContent = document.createElement("div");
    _settingsText = `
                    <div class='title'>Environmental Control</div>

                    <div class='scrollContent'>
                        <ul class='environmentList'>
                            <li><button>Environment 1</button></li>
                            <li><button>Environment 2</button></li>
                            <li><button>Environment 3</button></li>
                        </ul>
                        <div class='variableSliders'>
                            <div class="slidecontainer flex-column flex-gap-small">
                                <label for='myRange'>Temperature</label>
                                <input type="range" min="0" max="100" value="50" class="slider" id="myRange" list='markers'>
                                <datalist id="markers">
                                    <option value="0"></option>
                                    <option value="25"></option>
                                    <option value="50"></option>
                                    <option value="75"></option>
                                    <option value="100"></option>
                                </datalist>
                            </div> 
                            <div class="slidecontainer flex-column flex-gap-small">
                                <label for='myRange'>Humidity</label>
                                <input type="range" min="0" max="100" value="50" class="slider" id="myRange" list='markers'>
                                <datalist id="markers">
                                    <option value="0"></option>
                                    <option value="25"></option>
                                    <option value="50"></option>
                                    <option value="75"></option>
                                    <option value="100"></option>
                                </datalist>
                            </div> 
                            <div class="slidecontainer flex-column flex-gap-small">
                                <label for='myRange'>Duration</label>
                                <input type="range" min="0" max="100" value="50" class="slider" id="myRange" list='markers'>
                                <datalist id="markers">
                                    <option value="0"></option>
                                    <option value="25"></option>
                                    <option value="50"></option>
                                    <option value="75"></option>
                                    <option value="100"></option>
                                </datalist>
                            </div> 
                            <div class="slidecontainer flex-column flex-gap-small">
                                <label for='myRange'>Sunlight</label>
                                <input type="range" min="0" max="100" value="50" class="slider" id="myRange" list='markers'>
                                <datalist id="markers">
                                    <option value="0"></option>
                                    <option value="25"></option>
                                    <option value="50"></option>
                                    <option value="75"></option>
                                    <option value="100"></option>
                                </datalist>
                            </div> 
                        </div>
                    </div>
                    
                     

                    <div class='confirmButtons'>
                        <button data-id='cancel'>Cancel</button>
                        <button data-id='save'>Save</button>
                    </div>
    `;
    _settingsContent.classList.add('panelContent');
    _settingsContent.innerHTML = _settingsText;

let _appList = document.createElement("div");
    _appList.classList.add("hover-list", "align-right");


let _navWrapper = document.createElement("header");
let _navWrapper2 = document.createElement("div");
_navWrapper2.classList.add("navWrapper");
_navWrapper.appendChild(_navWrapper2);
_navWrapper2.innerHTML = _navBarText;

let mainNav = _navWrapper.querySelector(".hero-nav");
_navWrapper.querySelector(".panel[data-id='search']").appendChild(_searchContent);
_navWrapper.querySelector(".panel[data-id='settings']").appendChild(_settingsContent);

function buildSystemMenus()
{
    let rootList = document.createElement("ul");

    for(let i = 0; i< searchJSON.systems.length; i++)
    {
        let systemItem = document.createElement('li');
        let systemTitle = document.createElement('div');
        systemTitle.classList.add('title');
        systemTitle.innerHTML = `<span class='hoverTarget'><i class="fa-solid fa-magnifying-glass left-rem"></i>${searchJSON.systems[i].name}</span>`;

        systemItem.appendChild(systemTitle);

        addComponents(systemItem, searchJSON.systems[i].components)
        rootList.appendChild(systemItem);        
    }


    function addComponents(element, jsonOb)
    {
        let componentList = document.createElement('ul');
        element.appendChild(componentList);

        for(let i = 0;i<jsonOb.length;i++)
        {
            let listItem = document.createElement('li');
            listItem.innerHTML = `<span class='hoverTarget'>${jsonOb[i].name}</span>`;

            if(jsonOb[i].components.length > 0){addComponents(listItem, jsonOb[i].components)}
            componentList.appendChild(listItem);
        }

        if(jsonOb.length > 4)
        {
            let listItem = document.createElement('li');
            listItem.innerHTML = `<span class='hoverTarget'><i class="fa-solid fa-plus left-rem"></i>Show More</span>`;
            componentList.appendChild(listItem);
        }
    }
    
    _navWrapper.querySelector(".systemsRoot").appendChild(rootList);
}
buildSystemMenus();

let activeID;

let tabs = mainNav.getElementsByTagName('span');
let panels = _navWrapper2.getElementsByClassName('panel');
for(let i = 0; i< tabs.length; i++)
{
    tabs[i].onclick = function(e){
        clearTabs(e.currentTarget);
        clearPanels();
    }
}



function clearTabs(ele)
{
    for(let i = 0; i< tabs.length; i++)
    {
        if(ele == tabs[i])
        {
            ele.classList.toggle("active");
            if(ele.classList.contains('active')){
                activeID = ele.getAttribute('data-id');
            }else
            {
                activeID = null;
            }
            continue;
        }
        tabs[i].classList.remove('active');
    }
}

function clearPanels()
{
    for(let i = 0; i< panels.length; i++)
    {
        if(activeID && panels[i].getAttribute('data-id') == activeID)
        {
            panels[i].classList.add("active");
            continue;
        }
        panels[i].classList.remove('active');
    }
}

let _navCurrent = _oldElement.dataset.name;

if(_navCurrent != undefined)
{
    try {
        _navWrapper.querySelector(`[data-name="` + _navCurrent + `"]`).dataset.state = "active";
    } catch (error) {}
}
_oldElement.replaceWith(_navWrapper);
})();