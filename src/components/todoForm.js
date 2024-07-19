import { useState } from "react";

const TodoForm = () => {
  const [task, setTask] = useState("");
  const [taskArray, setTaskArray] = useState([]);

  const [editingId, setEditingId] = useState(null);
  const [isEdited, setIsEdited] = useState("");
 

  const handleSubmit = (e) => {
    e.preventDefault();
    const uniqueId = new Date().getTime() / 1000;
    console.log(uniqueId);
    const newTask = {
      id: uniqueId.toFixed(0),
      task: task,
    };

    setTaskArray([...taskArray, newTask]);
    console.log([...taskArray, newTask]);
  
    setTask("");
  };

  const handleDelete = (id) => {
    const rem = taskArray.filter((t) => t.id !== id);
    setTaskArray(rem);
  };

  const handleEdit = (id,task) => {
    const editingTodo=taskArray.find(t=>t.id===id);
    if(editingTodo){
        setEditingId(id);
        setIsEdited(editingTodo.task);
       
    }
 
  };


  const handleSave=()=>{
setTaskArray(taskArray.map(t=>t.id===editingId ? {...t,task:isEdited}:t));
setEditingId(null)

setIsEdited("");
  }

  const handleCancel=(e)=>{
 e.preventDefault();
const sameTask=taskArray.map(t=>t.id);
console.log(sameTask);
if(sameTask){
    setTaskArray(sameTask.task);
}
  }

  return (
    <div className="form">
      <h2 className="bg-green-50 my-5 font-bold p-4">Add a Task </h2>
      <form onSubmit={handleSubmit}>
        <label className="font-semibold">Enter the task </label>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          required
          className="border-2 p-2 m-2"
        />
        <button className="bg-blue-700 text-white font-bold px-6 py-1.5">Add</button>
      </form>

 

      {
     
       taskArray.map((t)=>(
            <div className="list" key={t.id}>


               {
                   editingId===t.id && <div>
                   <form>
                      
                       <input
                         type="text"
                         value={isEdited}
                         onChange={(e) => setIsEdited(e.target.value)}
                         className="border-2 p-3 m-3"
                       />
                       <button onClick={handleSave} className="m-2 bg-blue-500 text-white font-semibold px-4">Save</button>
                       <button onClick={handleCancel} className="m-1 bg-red-500 text-white font-semibold px-4"> Cancel</button>
               
                     </form>
                  </div>
               }


               {
                !(editingId===t.id) && <div>
                    {t.task}
                    <button onClick={()=>handleEdit(t.id,t.task)} className="m-2 bg-blue-500 text-white font-semibold px-4">Edit</button>
                    <button onClick={()=>handleDelete(t.id)} className="m-1 bg-red-500 text-white font-semibold px-4">Delete</button>
                </div>
               }
              
         

            </div>
        ))
      }
    </div>
  );
};

export default TodoForm;
