const { default: mongoose } = require("mongoose")

module.exports = () => {
    mongoose.connect('mongodb+srv://Imaryan08:masai073@cluster0.3kn8f.mongodb.net/pagination?retryWrites=true&w=majority');
}