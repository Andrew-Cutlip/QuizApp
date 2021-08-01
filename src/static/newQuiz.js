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

Vue.component('choices-input', {
    data: function () {
        return {
            choices: [],
            newId: 0,
        }
    },
    methods: {
        addChoice: function () {
            choice = {
                id: this.newId,
                a: ""
            };
            this.newId += 1;
            this.choices.append(choice);
        },
        removeChoice: function (id) {
             for (let i = 0; i < this.choices.length; i++) {
                if (this.choices[i].id == id)
                this.choices.splice(i, 1);
            }
        }
    },
    template: `<div>
        <div v-for="choice in choices">
            <input type="text">
            <button v-on:click="removeChoice(choice.id)">-</button>
        </div>
        <button v-on:click="addChoice">+</button>
        
    </div>`
})

Vue.component("choice", {
    props:["id", "answer", "position"],
    template: `<li class="choice">
        <p>{{ position }}</p>
        <p>{{ answer }}</p>
    </div>`
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

Vue.component("new-question", {
    data: function () {
        return {
            newQuestion: "",
            newAnswer: ""
        }
    },
    methods: {
        addQuestion: function () {
            this.$parent.addQuestion(this.newQuestion, this.newAnswer)
        },

        removeQuestion: function (id) {
            this.$parent.removeQuestion(id);
        }
    },
    template: `<div>
        <label for="newQuestion">Question:</label>
        <input type="text" v-model="newQuestion" name="newQuestion">
        <label for="answer">Answer:</label>
        <input type="text" v-model="newAnswer" name="newAnswer">
        <choices-input></choices-input>
        <button v-on:click="addQuestion" id="addQ">Add Question</button>
    </div>`
})

Vue.component('quiz-title', {
    props: ["title"],
    methods: {
        changeTitle(title) {
            // console.log(title);
            this.$parent.changeTitle(title);
        }
    },
    template: `<div id="quizTitle">
    <label for="title">Title:</label>
    <input type="text"
    v-on:input="changeTitle($event.target.value)"
    name="title"
    placeholder="Title">
    </div>`
})

var quiz = new Vue({
    el: "#quiz",
    data: {
        quizTitle: "",
        questions: [
        ],
        newId: 0,
        quizId: 0
    },
    methods: {
        addQuestion: function (q,a) {
            this.questions.push({
                id: this.newId,
                q: q,
                a: a
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
        },
        changeTitle: function (title) {
            console.log(title)
            this.quizTitle = title;
        },
        saveQuiz: function () {
            return
        }
    }
})