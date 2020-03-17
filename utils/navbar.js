let navbarContent = `
<a class="navbar-brand text-light" href="#" id="logo">
                Mindx
            </a>
            <div class="collapse navbar-collapse d-flex justify-content-center" id="navbarNav1">
                <ul class="navbar-nav justify-content-between">
                    <li class="nav-item nav-active" onclick="toHomePage()">
                        <a class="nav-link text-light" href="index.html">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-light" href="menu.html">Menu</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-light" href="reservation.html">Reservation</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-light" href="#">Booking</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-light" href="#">Gallery</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-light" href="#">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-light" href="#">Contact</a>
                    </li>

                </ul>
            </div>
            <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarNav2">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link text-light" href="#">
                            <i class="fab fa-instagram"></i>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-light" href="#">
                            <i class="fab fa-twitter"></i>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-light" href="#">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-light" href="#">
                            <i class="fas fa-bars"></i>
                        </a>
                    </li>
                </ul>
            </div>
`


document.getElementById("navbar").innerHTML = navbarContent;


let navbarHeight = $('#navbar').height();
let logoFontSize = $("#logo").css('font-size');
logoFontSize = Number(logoFontSize.replace(/\D/g, ""));

window.addEventListener("scroll",function(){
    let navbar = this.document.getElementById('navbar');
    let navbarText = navbar.getElementsByTagName("a");
    if (this.window.pageYOffset > 0) {
        navbar.classList.add("bg-light")
        for (const text of navbarText) {
            text.classList.remove("text-light");
            text.classList.add("text-dark");
        }
        navbar.style.height = navbarHeight*5/6 + "px";
    } else {
        navbar.classList.remove("bg-light")
        for (const text of navbarText) {
            text.classList.remove("text-dark");
            text.classList.add("text-light");
        }
        navbar.style.height = navbarHeight + "px";
    }
})



let navText = document.getElementsByClassName("nav-link")
for (const nav of navText) {
    nav.addEventListener("mouseover",function(){
        nav.className = "nav-link";
        nav.style.color = "crimson"; 
    })
    nav.addEventListener("mouseout",function(){
        console.log("out")
        nav.className = "nav-link";
        if (window.pageYOffset > 0) {
            nav.className = "nav-link text-dark"; 
        } else {
            nav.className = "nav-link text-light"; 
        }
    })
}



let imgHeight = $('#getH').height();
let galleryImgs = document.getElementsByClassName("map-area")[0].getElementsByTagName("img");

for (const galleryImg of galleryImgs) {
    galleryImg.style.height = imgHeight
}



function toHomePage() {

}
