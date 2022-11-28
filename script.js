/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function clickToggle1() {
    document.getElementById("toggleDropdown1").classList.toggle("show");
    document.getElementById("toggleDropdownCaret-1").classList.toggle("open-caret");
}
function clickToggle2() {
    document.getElementById("toggleDropdown2").classList.toggle("show");
    document.getElementById("toggleDropdownCaret-2").classList.toggle("open-caret");
}
function clickToggle3() {
    document.getElementById("toggleDropdown3").classList.toggle("show");
    document.getElementById("toggleDropdownCaret-3").classList.toggle("open-caret");
}
  
// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        let dropdowns = document.getElementsByClassName("dropdown-content");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }

        let dropdowncaret = document.getElementsByClassName("fa fa-caret-down");
        let j;
        for (j = 0; j < dropdowncaret.length; j++) {
            let openDropdown = dropdowncaret[j];
            if (openDropdown.classList.contains('open-caret')) {
                openDropdown.classList.remove('open-caret');
            }
        }
    }
}

/* Toggle between adding and removing the "responsive" class to topnav
when the user clicks on the icon */
function navBarResponse() {
    let x
    x = document.getElementById("myNavbar");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
    x = document.getElementById("myNavbarLeft");
    if (x.className === "navbar-left") {
        x.className += " responsive";
    } else {
        x.className = "navbar-left";
    }
    x = document.getElementById("iconSlide");
    if (x.className === "menuBtn") {
        x.className += " responsive";
    } else {
        x.className = "menuBtn";
    }

    x = document.getElementById("header");
    if (x.className === "header") {
        x.className += " responsive";
    } else {
        x.className = "header";
    }
    x = document.getElementById("main");
    if (x.className === "main") {
        x.className += " responsive";
    } else {
        x.className = "main";
    }
    x = document.getElementById("mainFooter");
    if (x.className === "main") {
        x.className += " responsive";
    } else {
        x.className = "main";
    }
}