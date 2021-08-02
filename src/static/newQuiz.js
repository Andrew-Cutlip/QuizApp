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
            selected: []
        }
    },
    methods: {
        addChoice: function () {
            choice = {
                id: this.newId,
                a: "",
            };
            this.newId += 1;
            // JS uses push not append
            this.choices.push(choice);
        },
        removeChoice: function (id) {
             for (let i = 0; i < this.choices.length; i++) {
                if (this.choices[i].id == id)
                this.choices.splice(i, 1);
            }
        }
    },
    template: `<div>
        <p>Select the correct answer</p>
        <div v-for="(choice, index) in choices">
            <input type="text" v-model="choice.a">
            <input type="radio" name="correct" v-bind:value="choice.id" v-model="selected">
            <button v-on:click="removeChoice(choice.id)">-</button>
        </div>
        <button v-on:click="addChoice">+</button>
        
    </div>`
})

Vue.component("q-type", {
    template: `<div id="q-type">
        <label for="type" >Question Type:</label>
        <select id="type" name="type">
            <option>Multiple Choice</option>
            <option>Short-Answer</option>
            <option>True/False</option>
            <option>Select All</option>
            <option>Matching</option>
            <option>Numeric</option>
        </select>
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
            answers: []
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
        <q-type></q-type>
        <label for="newQuestion">Question:</label>
        <input type="text" v-model="newQuestion" name="newQuestion">
        <label for="answer">Answer:</label>
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

Vue.component("topic", {
    props: ["topic"],
    methods: {
        changeTopic(topic) {
            this.$parent.changeTopic(topic);
        }
    },
    template: `<div id="q-topic">
    <label for="topic">Topic:</label>
    <input type="text"
    v-on:input="changeTopic($event.target.value)"
    name="topic"
    placeholder="Topic">
    </div>`
})

var quiz = new Vue({
    el: "#quiz",
    data: {
        quizTitle: "",
        topic: "",
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
        changeTopic: function (topic) {
            this.topic = topic;
        },
        saveQuiz: function () {
            return
        }
    }
})