
const mongoose = require('mongoose')
// const { type } = require('os')

const studentSchema = mongoose.Schema(
    {
        name:{
            type:String,
            required:true
            // default:"Abhilash"
        },
        rno:{
            type:Number,
            required:true
            // default:1203
        },
        branch:{
            type:String,
            required:true
            // default:"IT"

        }
    },
    {
        timestamps:true
    }
)

const Student = mongoose.model('Student',studentSchema);
module.exports = Student;