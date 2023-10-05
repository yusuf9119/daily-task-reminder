const mongoose = require("mongoose");
const schema = require("schema");

const Todoschema = new schema({
    text: {
        type: String,
        required: true
    },
    complete:{
        type: Boolean,
        default: false
    },
    timestamp:{
        type: String,
        default: Date.now()
    }
})

const Todo = mongoose.model("Todo",TodoSchema);
module.export = Todo;