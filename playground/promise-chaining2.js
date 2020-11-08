require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndRemove("5fa671a6e60db0409cc699a3").then((task)=>{
//     return Task.countDocuments({completed: false})
// }).then((result)=>{
//     console.log(result)
// }).catch((e)=>{
//     console.log(e)
// })

const findByIdAndRemove = async(id, completed)=>{
    const task = await Task.findByIdAndRemove(id)
    const count = await Task.countDocuments({completed})
    return count
}

findByIdAndRemove("5fa671a6e60db0409cc699a3", false).then((count)=>{
    console.log(count)
}).catch((e)=>{
    console.log(e)
})