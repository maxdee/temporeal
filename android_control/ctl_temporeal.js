loadedInterfaceName = "temporeal";

interfaceOrientation = "portrait";

/******* Constants appear on all pages *******/

constants = [

{
    "name": "page1Btn",
    "type": "Button",
    "bounds": [0,.8,.2,.25], 
    "label": "1",
    "mode": "contact",    
    "ontouchstart": "control.changePage(0);",
    "stroke": "#aaa",    
},
{
    "name": "page2Btn",
    "type": "Button",
    "bounds": [.2,.8,.2,.25], 
    "label": "2",
    "mode": "contact",    
    "ontouchstart": "control.changePage(1);",
    "stroke": "#aaa",    
},
{
    "name": "page3Btn",
    "type": "Button",
    "bounds": [.4,.8,.2,.25], 
    "label": "3",
    "mode": "contact",
    "ontouchstart": "control.changePage(2);",
    "stroke": "#aaa",
},
{
    "name": "refresh",
    "type": "Button",
    "bounds": [.6, .8, .2, .25],
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
    "bounds": [.8, .8, .2, .25],
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
        "name":"page1Label",
        "type":"Label",
        "value":"PAGE 1",
        "size": "40",
        "bounds": [0,0,1,.5]
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
