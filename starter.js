const ratingBtn = document.querySelectorAll(".rating-btn");
const submitBtn = document.querySelector(".submit-btn")
const firDiv = document.getElementById("ratingCard")
const secondDiv = document.getElementById("thankYouCard")
const ratinVal = document.getElementById("ratingValue")

let selectValue = null;

const Text = function test(currentValue,index) {
    currentValue.addEventListener("click",() => {
       ratingBtn.forEach(b => b.classList.remove("selected"))
        currentValue.classList.toggle("selected")
        selectValue = currentValue.textContent
        
    })
}
submitBtn.addEventListener("click",() => {
    firDiv.style.display="none"
    secondDiv.style.display="block"
    ratinVal.textContent = selectValue
})



ratingBtn.forEach(Text)
