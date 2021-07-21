// Want main option to be join quiz or make new one
// Also have sign-in / sign-up options
Vue.component('newQuizBtn', {
    template: `<button class="myBtn">
    <a href="/new">New Quiz</a>
    </button>`
})
Vue.component('takeQuizBtn', {
    template: `<button class="myBtn">
    <a href="/quiz">Take Quiz</a>
    </button>`
})
Vue.component("logInBtn", {
    template: `<button class="myBtn">
    <a href="/logIn">Log In</a>
    </button>`
})
Vue.component("signUpBtn", {
    template: `<button class="myBtn">
    <a href="/signUp">Sign Up</a>
    </button>`
})
var start = new Vue({
    el: "#start",
    template: `<div id="startContainer">
        <h1>Quiz App</h1>
        <div id="main">
            <newQuizBtn> </newQuizBtn>
            <takeQuizBtn> </takeQuizBtn>
        </div>
        <div id="account">
            <logInBtn> </logInBtn>
            <signUpBtn> </signUpBtn>
        </div>
    </div>`
})