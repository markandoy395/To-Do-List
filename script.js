const taskContainer = document.getElementById('taskContainer');
    function task(){
        const rows = document.querySelector('.rows');
        const inputValue = document.getElementById('input');
        const input = inputValue.value.trim();
        const date = new Date();
        const fullDate = date.toDateString();
        
         if(input ===''){
            rows.style.border = "1px solid red";
            rows.style.animation = "none";
            void rows.offsetWidth;
            rows.style.animation = "shake 0.4s linear";
        }
         else{

            let li = document.createElement('li')
            li.innerHTML=input;
            taskContainer.appendChild(li);
            let span = document.createElement("span");
            let dateInput = document.createElement('p');
            dateInput.innerHTML = fullDate;
            li.appendChild(dateInput);
            span.innerHTML = "\u00d7";
            li.appendChild(span);
         }
         inputValue.value = '';
         saveData();

    }
    document.getElementById('input').addEventListener('input',function(){
        const rows = document.querySelector('.rows');
        rows.style.animation = "none";
        rows.style.border = "none";

    })
    document.getElementById('submit').addEventListener('click',task);
    taskContainer.addEventListener('click', function(e){
        if(e.target.tagName === "LI"){
            e.target.classList.toggle("checked");
            saveData();
        }
        else if(e.target.tagName === "SPAN"){
            e.target.parentElement.remove();
            saveData();


        }
    },false);

    function saveData(){
        localStorage.setItem("Data",taskContainer.innerHTML);
    }
    function showTask(){
        taskContainer.innerHTML = localStorage.getItem("Data");
    }
    showTask();