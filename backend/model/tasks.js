const mongoose = require('mongoose');

const { Schema } = mongoose;

const TaskSchema = new Schema({
    title: { type: String, unique: true },
    /*
        i-u: important and urgent
        n-u: not important and urgent
        i-n: important and not urgent
        n-n: not important and not urgent
    */
    importance: { type: String, enum: ['i-u', 'n-u', 'i-n', 'n-n'] },
    status: { type: String, enum: ['done', 'pending'] },
    details: String,
});

TaskSchema.statics.getAll = function () {
    return this.find();
};

TaskSchema.statics.createTask = function (task) {
    return this.create(task);
};

TaskSchema.statics.updateTask = function (filter, task) {
    return this.findOneAndUpdate(filter, task);
};

TaskSchema.statics.deleteTask = function (id) {
    return this.deleteOne(id);
};

const Tasks = module.exports = mongoose.model('Tasks', TaskSchema);