const pass_field = document.querySelector(".pass");
const showBtn = document.querySelector(".show");
showBtn.addEventListener("click", function () {
    if (pass_field.type === "password") {
        pass_field.type = "text";
        showBtn.textContent = "HIDE";
        showBtn.style.color = "#D052F6";
    } else {
        pass_field.type = "password";
        showBtn.textContent = "SHOW";
        showBtn.style.color = "#222";
    }
});

function values() {
    let pass = document.querySelector('.pass').value
    console.log(pass);
}

let kirish = document.querySelector('.kirish')

kirish.addEventListener('click', () => {
    let pass = document.querySelector('.pass')
    if (pass.value == 1111) {
           kirish.href="./addPost.html"
    } else {
        alert('Parol xato kiritldi!!!')
        pass.value.innerHTML = ""
    }     ;
    values()
})