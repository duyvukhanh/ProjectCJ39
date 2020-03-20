let navbarContent = `
<a class="navbar-brand text-light" href="index.html" id="logo">
                Mindx
            </a>
            <div class="collapse navbar-collapse d-flex justify-content-center" id="navbarNav1">
                <ul class="navbar-nav justify-content-between">
                    <li class="nav-item">
                        <a class="nav-link text-light" href="index.html">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-light" href="menu.html">Menu</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-light" href="reservation.html">Reservation</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-light" href="order.html">Order Now</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-light" href="about.html">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-light" href="contact.html">Contact</a>
                    </li>

                </ul>
            </div>
            <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarNav2">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link text-light" href="https://www.instagram.com/khanhduy2906/" target="_blank">
                            <i class="fab fa-instagram"></i>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-light" href="https://www.twitter.com/vukhanh.duy.921" target="_blank">
                            <i class="fab fa-twitter"></i>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-light" href="https://www.facebook.com/vukhanh.duy.921" target="_blank">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-light" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                            <i class="fas fa-shopping-cart"></i>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-light" id="loginBtn" href="">Sign in</a>
                    </li>
                </ul>
            </div>





            <div class="collapse" id="collapseExample">
            <div class="card card-body">
                <div class="cart-header d-flex justify-content-between">
                    <div><i class="fas fa-shopping-cart"></i></div>
                    <div class="d-flex justify-content-end">Total <span> $30.99 </span> </div>
                </div>
                <div class="cart-content">
                    <div class="cart-item d-flex">
                        <div class="cart-item-img">
                            <img src="../image/gallery/1.jpg" alt="">
                        </div>
                        <div class="cart-item-info grow-1 d-flex flex-column justify-content-center">
                            <div class="cart-item-name">Boxaoraucai</div>
                            <div class="cart-item-quantity">Quantity : 1</div>

                        </div>
                        <div class="cart-item-price d-flex justify-content-center align-items-center"> $30.99 </div>
                    </div>
                </div>
                <div class="cart-content">
                    <div class="cart-item d-flex">
                        <div class="cart-item-img">
                            <img src="../image/gallery/1.jpg" alt="">
                        </div>
                        <div class="cart-item-info grow-1 d-flex flex-column justify-content-center">
                            <div class="cart-item-name">Boxaoraucai</div>
                            <div class="cart-item-quantity">Quantity : 1</div>

                        </div>
                        <div class="cart-item-price d-flex justify-content-center align-items-center"> $30.99 </div>
                    </div>
                </div>
                <div class="cart-order-btn d-flex justify-content-center">
                    <button type="button" class="btn btn-dark">Dark</button>
                </div>
            </div>
        </div>
`


document.getElementById("navbar").innerHTML = navbarContent;

document.getElementById("loginBtn").addEventListener("click",function(e){
    e.preventDefault();
})

let navbarHeight = $('#navbar').height();
let logoFontSize = $("#logo").css('font-size');
logoFontSize = Number(logoFontSize.replace(/\D/g, ""));

window.addEventListener("scroll", function () {
    let navbar = this.document.getElementById('navbar');
    let navbarText = navbar.getElementsByTagName("a");
    if (this.window.pageYOffset > 0) {
        navbar.classList.add("bg-light")
        for (const text of navbarText) {
            text.classList.remove("text-light");
            text.classList.add("text-dark");
        }
        navbar.style.height = navbarHeight * 5 / 6 + "px";
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
    nav.addEventListener("mouseover", function () {
        nav.className = "nav-link";
        nav.style.color = "crimson";
    })
    nav.addEventListener("mouseout", function () {
        console.log("out")
        nav.className = "nav-link";
        if (window.pageYOffset > 0) {
            nav.className = "nav-link text-dark";
        } else {
            nav.className = "nav-link text-light";
        }
    })
}






// Get the modal
var loginFormContainer = document.getElementById("loginFormContainer");
var loginForm = document.getElementById("loginForm");


let loginFormDisplay = window.getComputedStyle(document.querySelector('#loginFormContainer')).display


// Get the button that opens the modal
var btn = document.getElementById("loginBtn");


// When the user clicks on the button, open the modal
btn.onclick = function () {
    loginFormContainer.style.display = "block";
}


function closeLoginForm() {
    loginFormContainer.style.display = "none";
}



let mouse_is_inside = false;
$(document).ready(function()
{
    $('.login-form').hover(function(){ 
        mouse_is_inside=true; 
        console.log("inside")
    }, function(){ 
        mouse_is_inside=false; 
    });

    $("body").mouseup(function(){ 
        if(!mouse_is_inside) {
            $('.login-form-container').hide();
        }
    });
});



let x =  document.getElementById("loginFormInput")
let y =  document.getElementById("registerFormInput")
let z =  document.getElementById("btn-group")
function toRegister() {
    x.style.left = "-450px"
    y.style.left = "45px"
    z.style.left = "125px"
    document.getElementById("login-Btn").className = "toggle-btn text-dark"
    document.getElementById("register-Btn").className = "toggle-btn text-light"
}
function toLogin() {
    x.style.left = "45px"
    y.style.left = "450px"
    z.style.left = "0"
    // document.getElementById("loginBtn").classList.remove("text-dard")
    document.getElementById("login-Btn").className = "toggle-btn text-light"
    document.getElementById("register-Btn").className = "toggle-btn text-dark"
}


