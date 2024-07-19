const $ = document
const darkModeBtn = $.querySelector("#darkmode")
const menu = $.querySelector("#menu")
const submenu = $.querySelector("#submenu")
const darkmodeMobile = $.querySelector("#darkmode-mobile")
let flag = false
darkModeBtn.addEventListener("click", () =>{
    document.body.parentNode.classList.toggle("dark")
})
darkmodeMobile.addEventListener("click", () =>{
    document.body.parentNode.classList.toggle("dark")
})
menu.addEventListener("click", () =>{
    
        if(!flag){

            menu.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-9">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
            `
            flag = true
            submenu.classList.add("top-24")
            submenu.classList.remove("-top-72")
        }
        else{
            menu.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="40" height="40">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>`
            flag = false
            submenu.classList.remove("top-24")
            submenu.classList.add("-top-72")
        }
console.log(flag);
    
})