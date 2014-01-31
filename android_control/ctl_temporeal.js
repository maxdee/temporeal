loadedInterfaceName = "temporeal";

interfaceOrientation = "portrait";

pages = [[
{
    "name": "refresh",
    "type": "Button",
    "bounds": [.6, .5, .2, .1],
    "startingValue": 0,
    "isLocal": true,
    "mode": "contact",
    "ontouchstart": "interfaceManager.refreshInterface()",
    "stroke": "#aaa",
    "label": "refrsh",
},
{
    "name": "tabButton",
    "type": "Button",
    "bounds": [.8, .5, .2, .1],
    "mode": "toggle",
    "stroke": "#aaa",
    "isLocal": true,
    "ontouchstart": "if(this.value == this.max) { control.showToolbar(); } else { control.hideToolbar(); }",
    "label": "menu",
},

]

];
