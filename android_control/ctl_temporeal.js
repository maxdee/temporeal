loadedInterfaceName = "temporeal";

interfaceOrientation = "portrait";

/******* Constants appear on all pages *******/

constants = [

{
    "name": "page1Btn",
    "type": "Button",
    "bounds": [0,.875,.2,.05], 
    "label": "1",
    "mode": "contact",    
    "ontouchstart": "control.changePage(0);",
    "stroke": "#aaa",    
},
{
    "name": "page2Btn",
    "type": "Button",
    "bounds": [.2,.875,.2,.05], 
    "label": "2",
    "mode": "contact",    
    "ontouchstart": "control.changePage(1);",
    "stroke": "#aaa",    
},
{
    "name": "page3Btn",
    "type": "Button",
    "bounds": [.4,.875,.2,.05], 
    "label": "3",
    "mode": "contact",
    "ontouchstart": "control.changePage(2);",
    "stroke": "#aaa",
},
{
    "name": "refresh",
    "type": "Button",
    "bounds": [.6, .875, .2, .05],
    "startingValue": 0,
    "isLocal": true,
    "mode": "contact",
    "ontouchstart": "interfaceManager.refreshInterface()",
    "stroke": "#aaa",
    "label": "refresh",
},
{
    "name": "tabButton",
    "type": "Button",
    "bounds": [.8, .875, .2, .05],
    "mode": "toggle",
    "stroke": "#aaa",
    "isLocal": true,
    "ontouchstart": "if(this.value == this.max) { control.showToolbar(); } else { control.hideToolbar(); }",
    "label": "menu",
},
];

pages = [
/********** PAGE 1 *************/
[
    { 
    "name": "DAC",
    "type": "Button",
    "x": 0,
    "y": 0,
    "width": .1,
    "height": .1,
    "startingValue": 0,
    "color": "#555555",
    "stroke": "#aaaaaa",
    "min": 0,
    "max": 1,
    "mode": "visualToggle",
    "protocol": "OSC",
    "address": "/dac,
     }

],

/********** PAGE 2 *************/
[
    {
        "name":"page2Label",
        "type":"Label",
        "value":"PAGE 2",
        "size": "40",   
        "bounds": [0,0,1,.5]             
    }

],
/********** PAGE 3 *************/
[
    {
        "name":"page3Label",
        "type":"Label",
        "value":"PAGE 3",
        "size": "40",   
        "bounds": [0,0,1,.5]             
    }

],

];
