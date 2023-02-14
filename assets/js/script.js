
//Array of objets//

const tasks = [
    {
        id:1,
        name:"Hacer mercado",
        completed:true
    },
    {
        id:2,
        name:"Estudiar para la prueba",
        completed:false
    },
    {
        id:3,
        name:"Sacar a pasear a Tobby",
        completed:false
    }
];

//Variable declarations//

const inputAgregar = document.getElementById("inputAgregar");
const botonAgregar = document.getElementById("botonAgregar");
const spanTotalTasks = document.getElementById("tareasTotales");
const spanRealizedTasks = document.getElementById("tareasRealizadas");
const taskDiv = document.getElementById("tasks");
let newId = 4;
renderTask();

botonAgregar.addEventListener("click",function(){
    createTask();
    eraseTask(id)

    
})


//Functions declaration//

function createTask(){                                                             //This create a new objet and add to the array
      let newTask = inputAgregar.value;
    tasks.push({
        id:newId,
        name:newTask,
        completed:false
    });

    newId++;
    inputAgregar.value="";
    renderTask();
}



function renderTask(){                                                             //This render the html
    
    let html="";

    tasks.forEach(function(task){
        let checkboxChequeado ="";

        if(task.completed){
            checkboxChequeado="checked";
        }
        let template=`
                 <div  style="width:10%">${task.id}</div>
                 <div style="width:70%">${task.name}</div>
                 <div style="width:10%">
                <input type="checkbox" id="completed-${task.id}"${checkboxChequeado} onchange="UpdateTask(${task.id})">
                 </div>
                <div style="width:10%" class="mt-2">
                <button class="btn btn-secondary border border-danger" onclick="eraseTask(${task.id})">X</button>
                 </div>
        `;

        html+= template;
        

    })

   taskDiv.innerHTML=html;
    totalTasks()
    realizedTasks()
}

function eraseTask(id){ 
                                                    //This erase the task selected
    const index = tasks.findIndex((ele) => ele.id == id)
    tasks.splice(index, 1)
renderTask()};



function UpdateTask(id){
    const taskIndex = tasks.findIndex(task => task.id == id);
    const completed = document.getElementById("completed-" + id).checked;
    tasks[taskIndex].completed=completed;

    renderTask();
    totalTasks();
    realizedTasks();

}
function totalTasks(){                                                      //This change the total task  counter
    spanTotalTasks.innerHTML=tasks.length
}

function realizedTasks(){
    let completedTasks = tasks.filter(task=>task.completed);
    let finished = completedTasks.length

    spanRealizedTasks.innerHTML= finished;
}



