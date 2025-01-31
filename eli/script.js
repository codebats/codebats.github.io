const noBtn = document.querySelector(".no-btn");
noBtn.addEventListener("mouseover", () => {
    const wrapper = document.querySelector(".wrapper");
    const wrapperRect = wrapper.getBoundingClientRect();
    const noBtnRect = noBtn.getBoundingClientRect();

    // Calculate max positions to ensure the button stays within the wrapper
    const maxX = wrapperRect.width - noBtnRect.width;
    const maxY = wrapperRect.height - noBtnRect.height;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});

function yesFunc(e){
    alert("I love you!");
    document.getElementById("main-wrapper").style.display = "none";
    document.getElementById("date-wrapper").style.display = "none";
    document.getElementById("food-wrapper").style.display = "none";
    document.getElementById("final-wrapper").style.display = "none";

    document.getElementById(e).style.display = "block";
}

document.getElementById("yes-valentine").onclick = function(){
    yesFunc('date-wrapper');
}

document.getElementById("yes-continue").onclick = function(){
    yesFunc('food-wrapper');
}

document.getElementById("continue-two").onclick = function(){
    yesFunc('final-wrapper');
}