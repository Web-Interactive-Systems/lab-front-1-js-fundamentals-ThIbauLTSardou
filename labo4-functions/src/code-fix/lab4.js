// TODO: Fix the errors in the functions below!

function addTask(taskList, newTask) {

  taskList.push(newTask)

  //console.log('oivne', taskList)
  
  return taskList;
}

function deleteTask(taskList, index) {

  taskList.splice(index, 1)
  return taskList;
}

function editTask(taskList, index, editedTask) {

  taskList[index] = editedTask
  return taskList;
}

function completeTask(taskList, index) {

  taskList[index].completed = true
  return taskList;
}

function clearCompletedTasks(taskList) {
  taskList.forEach((element, i) => {
    if(element.completed === true){
       taskList.splice(i, 1)
    }
  });

  return taskList;
}

function sortTasksByDate(taskList) {

  return taskList.sort((a, b) => a.date - b.date);

  
}

function filterTasksByKeyword(taskList, keyword) {

  taskList.forEach((element, i) => {
    if (element.includes("task") || element.includes("Task")){
      //console.log('c bon')
    }
    else{
      taskList.splice(i, 1)
      //console.log(taskList)
    }
  });

  return taskList;
}

function getCompletedTasks(taskList) {

  taskList.forEach((element, i) => {
    if (element.completed === false){
      taskList.splice(i, 1)
    }
  })
  return taskList;
}

function getIncompleteTasks(taskList) {

  taskList.forEach((element, i) => {
    if (element.completed === true){
      taskList.splice(i, 1)
    }
  })

  return taskList;
}

function getTaskCount(taskList) {

  return taskList.length;
}

function getCompletedTaskCount(taskList) {
  let total = 0
  taskList.forEach((element) => {
    if (element.completed === true){
      total+=1
    }
  })

  return total;
}

function getIncompleteTaskCount(taskList) {
  let total = 0
  taskList.forEach((element) => {
    if (element.completed === false){
      total+=1
    }
  })

  return total;
}

function removeCompletedTasks(taskList) {

  let newlist = []
  taskList.forEach((element, i) => {
    if (element.completed === false){
     newlist.push(element)
    }
  })

  return newlist;
}

function markAllTasksAsCompleted(taskList) {

  taskList.forEach(element =>{
    if(element.completed === false){
      element.completed = true
    }
  })
  return taskList;
}

function markAllTasksAsIncomplete(taskList) {

  taskList.forEach(element =>{
    if(element.completed === true){
      element.completed = false
    }
  })

  return taskList;
}

function addTaskToList(taskList, task) {

  
taskList.push({ task: task, completed: false })

  return taskList;
}

function deleteTaskFromList(taskList, index) {

  taskList.splice(index, 1)
  return taskList;
}

function editTaskInList(taskList, index, newTask) {
  taskList[index].task = newTask

  return taskList;
}

function moveTaskUp(taskList, index) {
  if (index === 0) {
    return taskList;
  }

  newIndex = index - 1

  taskList.splice(newIndex, 0, taskList[index])
  console.log('taskList', taskList)
  taskList.splice(index+1, 1)
  console.log('taskList', taskList)
  
  return taskList;
}

function moveTaskDown(taskList, index) {
  if (index === taskList.length - 1) {
    return taskList;
  }
  newIndex = index + 2

  taskList.splice(newIndex, 0, taskList[index])
  console.log('taskList', taskList)
  taskList.splice(index, 1)
  console.log('taskList', taskList)
  return taskList;
}

module.exports = {
  addTask,
  deleteTask,
  editTask,
  completeTask,
  clearCompletedTasks,
  sortTasksByDate,
  filterTasksByKeyword,
  getCompletedTasks,
  getCompletedTaskCount,
  getIncompleteTaskCount,
  getTaskCount,
  getIncompleteTasks,
  removeCompletedTasks,
  markAllTasksAsCompleted,
  markAllTasksAsIncomplete,
  addTaskToList,
  editTaskInList,
  deleteTaskFromList,
  moveTaskUp,
  moveTaskDown,
};
