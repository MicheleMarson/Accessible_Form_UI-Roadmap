const cookie = document.querySelector("#cookie")
const cookieX = document.querySelector("#cookieX")
const cookieBtn = document.querySelector("#cookie button")
const hasCookies = document.cookie.split("; ").some(c => c.startsWith("cookie="))
console.log(document.cookie.split("; "));


if(document.cookie.includes("cookie=true")){
  cookie.classList.add('hidden');
}else{
  cookie.classList.remove('hidden');
}

cookieBtn.addEventListener("click", () => {
  document.cookie = "cookie=true; path=/; max-age=31536000";
  cookie.classList.add('hidden');
})

cookieX.addEventListener("click", () => {
  cookie.classList.add('hidden');
})
