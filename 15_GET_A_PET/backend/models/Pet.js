const mongoose = require('../db/conn')
const { Schema } = mongoose

const Pet = mongoose.model(
    'Pet',
    new Schema({
            name: {
                type: String,
                required: true
            },
            age: {
                type: Number,
                required: true
            },
            weight: {
                type: Number,
                required: true
            },
            color: {
                type: String,
                required: true
            },
            images: {
                type: Array, //são mais de uma foto
                required: true
            },
            available: {
                type: Boolean
            },
            user: Object,
            adopter: Object
        },
        {timestamps: true}
    )
)

module.exports = Pet