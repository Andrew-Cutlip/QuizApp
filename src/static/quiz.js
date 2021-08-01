var question = {
    num: 1,
    q: "What color is the sky?",
    a: "Blue",
    correct: "A",
    topic: "Color",
    type: "Multiple Choice",
    points: 0
}

// Make into checkbox instead
Vue.component("tf-question", {
    props: ["question"],
    template: `<div>
    <p>{{ question  }}</p>
    <p>True</p>
    <p>False</p>
    </div>`
})

var quiz = new Vue({
    el: "#quiz",
    data: {
        quizTitle: "",
        questions: [],
        topic: ""
    },
    methods: {
        getQuiz: function () {
            return
        },
        submitQuiz: function () {
            return
        }
    }
})