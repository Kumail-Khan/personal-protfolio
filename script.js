let loadMoreBtn = document.querySelector("#load-more");
let currentCard = 3;

loadMoreBtn.onclick = () => {
    let cards = [...document.querySelectorAll(".project-cards .card-parent ")];
    for (let i = currentCard; i < currentCard + 3; i++) {
        cards[i].style.display = "inline-block";
    }
    currentCard += 3;
    if (currentCard >= cards.length) {
        loadMoreBtn.style.display = "none"
    }
}


const hambuger = document.querySelector(".menu-btn")
const dropdownmwnu = document.querySelector(".navbar-right-mobile-version")

hambuger.addEventListener("click", () => {
    dropdownmwnu.classList.toggle("open")
})