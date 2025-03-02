document.getElementById("first-card-btn").addEventListener("click", function(event){
    // step no 1
    alert("Board Update Successfully");
    // step no 2
    const navBarScore = getInnerTextById ("navigation-bar-score");
    const navigationScoreSum = navBarScore + 1;
    const sum = getSum("navigation-bar-score", navigationScoreSum);
    // step no 3
    const mainScore = getInnerTextById("main-score");
    const mainScoreSum = mainScore - 1;
    const mainSum = getSum("main-score", mainScoreSum);
    // step 4
    const childContainer = document.getElementById("child-container");
    const firstCardTitle = document.getElementById("first-card-title").innerText;
    const div = document.createElement('div');
    div.classList.add("bg-[#F4F7FF]", "rounded-[8px]", "w-[90%]", "mx-auto")
    const p = document.createElement("p");
    p.classList.add("p-5", "text-[#0000008e]", "font-semibold");
    function updateTime (){
        const now = new Date();
        const timeString = now.toLocaleTimeString();
        p.innerText = `You have Complete The Task ${firstCardTitle} at ${timeString}`;
    }
    div.appendChild(p);
    childContainer.appendChild(div);
    updateTime();
    // step 5 btn disabled
    event.target.disabled = true;
    event.target.style.backgroundColor  = "#3952f135";
})



