Vue.component('removeButton', {
    props: ['id'],
    methods: {
        removeQuestion(id) {
            this.$parent.removeQuestion(id);
        }
    },
    template: `<button v-on:click="removeQuestion( id )">
        Remove Question
    </button>`
})

Vue.component('question', {
    props: ['question'],
    methods: {
        removeQuestion(id) {
            this.$parent.removeQuestion(id);
        }
    },
    template: `<div>
        <p>{{ question.q }}</p>
        <p>{{ question.a }}</p>
        <removeButton v-bind:id="question.id"></removeButton>
    </div>`
})

var quiz = new Vue({
    el: "#quiz",
    data: {
        message: "Hello World!",
        questions: [
        ],
        newQuestion: "",
        newAnswer: "",
        newId: 0,
        quizId: 0
    },
    methods: {
        addQuestion: function () {
            this.questions.push({
                id: this.newId,
                q: this.newQuestion,
                a: this.newAnswer
            });
            this.newQuestion = "";
            this.newAnswer = "";
            this.newId += 1;
        },
        removeQuestion: function (id) {
            for (let i = 0; i < this.questions.length; i++) {
                if (this.questions[i].id == id)
                this.questions.splice(i, 1);
            }
        }
    }
})