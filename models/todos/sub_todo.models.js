import mongoos from "mongoose"
const subTodoSchema=new mongoos.Schema({
  content:{
    type: String,
    required: true
  },
  complete:{
    type: Boolean,
    default:false
  }
},{timestamps: true})

export const SubTodo= mongoose.model('SubTodo',subTodoSchema)