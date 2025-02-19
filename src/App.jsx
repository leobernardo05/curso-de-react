import {useEffect, useState } from "react";
import AddTask from "./componentes/AddTask";
import Tasks from "./componentes/Tasks";
import {v4} from 'uuid';
import Title from "./componentes/Title";
/* import './App.css' -- pode usar o class name 
para poder estilizar --- pode utlizar o css 
diretamente no react, basta exportar*/



// componente react é uma função JS
function App () {
  // stade {estado}
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem('tasks')) || []
  );
  
  // cria um efeito quando algo acontece;
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // essa função só será usada na primeira vez que o usuário acessar a página 
  useEffect(() => {
    // const fetchTasks = async () => {
    
    //   const response = await fetch(
    //   'https://jsonplaceholder.typicode.com/todos?_limit=10',
    //   {method: 'GET',}
    // );
      
    //  const data = await response.json();
    // };
    // SE QUISER PODE CHAMAR UMA API PARA PEGAR AS TAREFAS
    // fetchTasks();
  }, []);


  function onTaskClick (taskId){
      const newTasks = tasks.map((task) => {
      // preciso atualizar essa tarefa 
      if(task.id === taskId) {
        return {...task, isCompleted: !task.isCompleted};
      }

      // não precisa atualizar essa tarefa 
      return task
    });
    setTasks(newTasks);
  }

  function excluirTask(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  function addTarefa(title, description) {
    const newTask = {
      id: v4(),
      title,
      description,
      isCompleted: false, 
    };
    setTasks([...tasks, newTask]);
  }
  

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6"> 
      <div className="w-[500px] space-y-4">
      <Title>Gerenciador de tarefas</Title>
        <AddTask 
          addTarefa={addTarefa}
        />
        <Tasks 
          tasks={tasks} 
          onTaskClick={onTaskClick} 
          excluirTask={excluirTask} 
        />
      </div>
    </div>
    // jsx só pode retornar uma tag
  );

}

export default App;