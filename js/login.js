const startApp = () => {
    const loginForm = document.getElementById('login-form')
    const signUpForm = document.getElementById('sign-up-form')
    const login = document.getElementById('login')
    const signUp = document.getElementById('sign-up')
   
    const toggleLogin = () => {
        loginForm.classList.toggle('hidden')
        loginForm.classList.toggle('flex')
        signUpForm.classList.toggle('hidden')
        signUpForm.classList.toggle('flex')
        bgToggle();
    }
    const toggleSignUp = () => {
        signUpForm.classList.toggle('hidden')
        signUpForm.classList.toggle('flex')
        loginForm.classList.toggle('hidden')
        loginForm.classList.toggle('flex')
        bgToggle();
    }

    const bgToggle = () => {
        login.classList.toggle('bg-purple-900');
        login.querySelector('.child').classList.toggle('text-white')
        signUp.querySelector('.child').classList.toggle('text-white')
        signUp.classList.toggle('bg-purple-900');
    }
    signUp.addEventListener('click', toggleLogin)
    login.addEventListener('click', toggleSignUp)
}
document.addEventListener('DOMContentLoaded', startApp)