var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/garden-share');

let plantSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: String,
    price: Number,
    amount: String,
    quantity: Number
});

let Plant = mongoose.model('Plant', plantSchema);

let save = () => {
    return Plant.update();
}

let retrieve = () => {
    return Plant.find().exec();
}

module.exports.save = save;
module.exports.retrieve = retrieve;
