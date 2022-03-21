const mongoose = require('mongoose');

module.exports = () => {
    return mongoose.connect('mongodb+srv://Imaryan08:masai073@cluster0.3kn8f.mongodb.net/D3Evaluation?retryWrites=true&w=majority');
}

