let navbarHeight = $('#navbar').height();
let logoFontSize = $("#logo").css('font-size');
logoFontSize = Number(logoFontSize.replace(/\D/g, ""));

window.addEventListener("scroll",function(){
    let navbar = this.document.getElementById('navbar');
    let navbarText = navbar.getElementsByTagName("a");
    let logo = this.document.getElementById('logo');
    if (this.window.pageYOffset > 0) {
        navbar.classList.add("bg-light")
        for (const text of navbarText) {
            text.classList.remove("text-light");
            text.classList.add("text-dark");
        }
        navbar.style.height = navbarHeight*5/6 + "px";
        // logo.style.fontSize = logoFontSize*3/4 + "px";
    } else {
        navbar.classList.remove("bg-light")
        for (const text of navbarText) {
            text.classList.remove("text-dark");
            text.classList.add("text-light");
        }
        navbar.style.height = navbarHeight + "px";
        // logo.style.fontSize = logoFontSize + "px";
    }
})


