const mongoose = require('mongoose');
const { disconnect } = require('process');

const productSchema = mongoose.Schema({
    image: String,
    name: String,
    price: Number,
    disconnect: {
        type: Number,
        default: 0
    },
    bgcolor: String,
    panelcolor: String,
    textcolor: String

});


module.exports = mongoose.model("product", productSchema);