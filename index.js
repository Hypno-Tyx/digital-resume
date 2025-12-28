/*
    Darkmode/Lightmode Page Service Module

    Load the page in darkmode for all users.
    Users can trigger the lightmode settings via the menu button.
    Assigns specific style elements for the required mode.
    
*/

// Select the page elements that will be updating on load or user interaction
const page = document.querySelector('#page');
const menu = document.querySelector('#menu');
const icon = document.querySelector('#icon');
const icons = document.querySelectorAll('#menu .list a');
const links = document.querySelectorAll('#contact .list a');

// User triggered mode property class assignments
let darkmodeProperties = 'darkmode-text darkmode-back';
let lightmodeProperties = 'lightmode-text lightmode-back';

// Add an event to the page load
window.addEventListener('load', ()=> {

    // Loop through all menu link elements
    for (let i = 0; i < icons.length; i++) {
        // Assign each link element the default class name - turn value into a global variable
        icons[i].className = 'darkmode-text';
    }

    for (let i = 0; i < links.length; i++) {
        // Assign each link element the default class name - turn value into a global variable
        links[i].className = 'darkmode-text';
    }
    
    // Provide default page settings validation on load
    if (page.className != darkmodeProperties) {
        page.className = darkmodeProperties;
    }

    // Assign the default properties to the menu component
    menu.className = darkmodeProperties;
    
});

// Add an event to the trigger button (center menu icon)
icon.addEventListener('click', ()=> {
    
    // Validate if the page & icon are in darkmode
    if (icon.className === 'fa-regular fa-circle-dot' & page.className === 'darkmode-text darkmode-back') {

        // Assign the opposite properties (lightmode)
        icon.className = 'fa-solid fa-circle-dot';
        menu.className = lightmodeProperties;
        page.className = lightmodeProperties;

        // Loop through all the icons inside the navigation menu component
        for (let i = 0; i < icons.length; i++) {
            // Assign all the icons with the opposite properties (lightmode)
            icons[i].className = 'lightmode-text';
        }
        for (let i = 0; i < links.length; i++) {
            // Assign each link element the default class name - turn value into a global variable
            links[i].className = 'lightmode-text';
        }
        
        // console.log('Page Properties [ darkmode (default) ] is currently - inactive.');
        // console.log('Page Properties [ lightmode (triggered) ] is currently - active.');
    }
    else {
        // revert properties back to default
        icon.className = 'fa-regular fa-circle-dot';
        page.className = darkmodeProperties;
        menu.className = darkmodeProperties;

        for (let i = 0; i < icons.length; i++) {
            icons[i].className = 'darkmode-text';
        }
        for (let i = 0; i < links.length; i++) {
            // Assign each link element the default class name - turn value into a global variable
            links[i].className = 'darkmode-text';
        }
        
        // console.log('Page Properties [ darkmode (default) ] is currently - active.');
        // console.log('Page Properties [ lightmode (triggered) ] is currently - inactive.');

    }

});






