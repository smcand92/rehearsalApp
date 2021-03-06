import React from 'react';

const EditTaskForm = (props) =>{

  if(!props.task){
      return null;
  }

//   const options = props.rehearsals.map((rehearsal, index) =>{
//       return  <option
//                 key={rehearsal.id}
//                   value={rehearsal._links.self.href}>
//                       {rehearsal.name}
//               </option>
// });

function handleSubmit(event){
  // console.log(props);
    event.preventDefault();
    const task = {
      "id": props.task.id,
      "name": event.target.name.value,
      "startTime": event.target.startTime.value,
      "endTime": event.target.endTime.value,
      "rehearsal": ""
    }
    props.handleTaskPut(task);
    };



return(
  <div>
  <form action="/button-type" onSubmit={handleSubmit}>
  <h1>Edit Task</h1>
  <label for="name">Edit name:</label>
  <input type="text" id="name" name="name" defaultValue={props.task.name} />
  <label for="startTime">Edit start time:</label>
  <input type="datetime-local" id="startTime" name="startTime" />
  <label for="endTime">Edit end time:</label>
  <input type="datetime-local" id="endTime" name="endTime" />
  <p> Rehearsal: {props.task._embedded.rehearsal.name}</p>
  <button type="submit">Save</button>
  </form>
  </div>
)

}


export default EditTaskForm;
