document.addEventListener("DOMContentLoaded", function() {
    var menuToggle = document.getElementById("menu-toggle");
    var mobileMenu = document.getElementById("mobile-menu");
    var menuItems = mobileMenu.getElementsByClassName("menu-item");

    menuToggle.addEventListener("click", function() {
        if (mobileMenu.style.display === "none" || mobileMenu.style.display === "") {
            mobileMenu.style.display = "flex";
            menuToggle.textContent = "Menu -";
        } else {
            mobileMenu.style.display = "none";
            menuToggle.textContent = "Menu +";
        }
    });

    for (var i = 0; i < menuItems.length; i++) {
        menuItems[i].addEventListener("click", function() {
            mobileMenu.style.display = "none";
            menuToggle.textContent = "Menu +";
        });
    }
});
