let orderDivY = document.getElementById("order").getBoundingClientRect().top;
let orderDivX = document.getElementsByClassName("menu-content-2")[0].getBoundingClientRect().left;




window.addEventListener("scroll",function(){
    let navbarHeight = $('#navbar').height();
    let fixedElement = document.getElementById("order")
    if (this.window.pageYOffset > orderDivY - navbarHeight) {
        console.log("ok")
        fixedElement.classList.add("fixed");
    } else {
        console.log("oki")
        fixedElement.classList.remove("fixed");
    }
})