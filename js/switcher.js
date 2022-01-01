// switch style toggler

const toggleStyleSwitch = document.querySelector(".style-switcher-toggler");
toggleStyleSwitch.addEventListener("click", () => {
      document.querySelector(".style-switcher").classList.toggle("open");
});

window.addEventListener("scroll", () => {
    if(document.querySelector(".style-switcher").classList.contains("open"))
    {
        document.querySelector(".style-switcher").classList.remove("open");
    }
})



// themes
const alternateStyles = document.querySelectorAll(".alternate-style");
function setActivityStyle(color)
{
    alternateStyles.forEach((style) => {
        if(color === style.getAttribute("title"))
        {
            style.removeAttribute("disabled");
            console.log("Done");
        }
        else
        {
            style.setAttribute("disabled","true");
        }
    })
}


// dark mode

const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", ()=> {
      dayNight.querySelector("i").classList.toggle("fa-sun");
      dayNight.querySelector("i").classList.toggle("fa-moon");
      document.body.classList.toggle("dark");
});
