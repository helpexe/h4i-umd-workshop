import './App.css';
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
  TextField,
  Checkbox
} from '@mui/material';
import { v4 as uuidv4 } from 'uuid';
// The general structure for a React import statement is:
// import { feature } from 'moduleName';
import { useState } from 'react';

function App() {
  // HINT for calling the useState hook: use the following format:
  // const [state, setState] = useState(initialState);
  const [tasks, setTasks] = useState([]);

  // TODO: Call useState to initialize title and its setter function setTitle

  // TODO: Call useState to initialize description and its setter function setDescription

  // TODO: Call useState to initialize dueDate and its setter function setDueDate


  // Function description: addTask is called whenever the "Add Task" button on the page is
  // clicked. If the title state variable is not empty, then a new task is created
  // using the information from the title, description, and dueDate stsate variables.
  const addTask = () => {
    // TODO: Replace false with the title state variable to ensure that
    // a task is only added if it has a title.
    if (false) {
      // TODO: Replace the empty strings for the newTask object's title, description, and
      // dueDate with their corresponding state variables
      const newTask = {
        id: uuidv4(),
        title: '', 
        description: '',  
        completed: false,
        dueDate: ''       
      };
      // This line appends newTask to the tasks to the tasks array.
      setTasks((prevTasks) => [...prevTasks, newTask]);
      // TODO: Call setTitle, setDescription, and setDueDate to set 
      // title, description, and dueDate to empty strings (3 lines total)

    }
  };

  // Function description: toggleCompletion is called whenever the checkbox for a task is
  // pressed. It takes in the id of the given task which is generated using uuidv4
  // (Version 4 universally unique identifier). It then finds the unique task in the tasks 
  // array with a matching id and flips its completed property.
  const toggleCompletion = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Function description: deleteTask is called whenever the "Delete" button is pressed for
  // a given task. It takes in the id of the task, which is used to filter through all
  // the tasks and only keep the ones that do not have a matching id.
  const deleteTask = (id) => {
    // TODO: Change the return value of the arrow function passed into setTasks
    // so that it returns a new tasks array that includes all of the original tasks
    // EXCEPT for the one with an id that matches the one passed into deleteTask.
    //   - HINT: Use the filter function to accomplish this task.
    //   - HINT: Either != (inequality operator) or !== (strict inequality operator) should 
    //           work fine.

    setTasks((prevTasks) => prevTasks);
  };

  return (
    <Container>
      {/* TODO: Add a <p> (Paragraph) with a short description of your
          web application!
      */}
      <h1>Task Manager</h1>
      <div className="text-fields">
        {/* TODO: After initializing your state variables and finishing the addTask
            function, add the following:
              1. A `value` prop that binds each TextField's value to its corresponding state
                 variable.
              2. A `onChange` prop that updates the TextField's corresponding state variable
                 with the user-written input in the TextField.
            HINT:
              - For the `value` prop, it should look like: value={stateVariable}
              - For the `onChange` prop, it shoujld look like:
                   onChange={(e) => setStateVariable(e.target.value)}
        */}
        <TextField
          label="Title"

        />
        <TextField
          label="Description"

        />
        <TextField 
          label="Due Date"
          type="date"
          InputLabelProps={{ shrink: true }}

        />
        <Button variant="contained" onClick={addTask}>
          Add Task
        </Button>
      </div>
      <Table>
        <TableHead>
          {/* TODO: Create a <TableRow> component. Inside the <TableRow> component, please
              create five <TableCell> components to be your table headers.
                 - Column 1 Label: Title
                 - Column 2 Label: Description
                 - Column 3 Label: Due Date
                 - Column 4 Label: Completed
                 - Column 5 Label: Actions
          */}

        </TableHead>
        <TableBody>
          {tasks.map((task) => (
            <TableRow key={task.id}>
              <TableCell>{task.title}</TableCell>
              <TableCell>{task.description}</TableCell>
              <TableCell>{task.dueDate}</TableCell>
              <TableCell>
                <Checkbox
                  checked={task.completed}
                  onChange={() => toggleCompletion(task.id)}
                />
              </TableCell>
              <TableCell>
                <Button
                  color="secondary"
                  onClick={() => deleteTask(task.id)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
}

export default App;
