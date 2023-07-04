document.querySelector("#push").onclick = function () {
    // console.log("click");

    if (document.querySelector("#newShows input").value.length == 0) {
        alert("Really ??? Enter it buddy!!!!");

    } else {
        document.querySelector("#tasks").innerHTML += `
        
        <div class="task">
            <span id="taskname">
            ${document.querySelector("#newShows input").value}        
            </span>

            <button class="delete">
            <i class="fa-solid fa-trash-can"></i>
            </button>
        </div>        
        `;

        document.querySelector("#newShows input").value = "";

        var current_tasks = document.querySelectorAll(".delete");
        // console.log(typeof current_tasks);

        for(var i = 0; i < current_tasks.length; i++) {
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            };
        }


    }

};