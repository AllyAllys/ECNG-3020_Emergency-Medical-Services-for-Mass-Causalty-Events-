const mongoose = require("mongoose")
const adminSchema = new mongoose.Schema({
    UserID: {
        type: mongoose.SchemaTypes.ObjectId,
        ref:"users"
    }

})

module.exports = mongoose.model("admins",adminSchema)