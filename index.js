// To-Do List H-W

const listContainer=document.getElementById('list-container');
const inputBox=document.getElementById('input-box');
let v=Object(listContainer)

///////////////////////////
function addTask() {

    if (inputBox.value = '') {
       
        alert('هل اتممت المهمه')
        let n=false
    }
   
    else{
      
        let li= document.createElement("li");
        li.innerHTML= inputBox.value;
        listContainer.appendChild(li);
}
}
////////////////// المهام الجديده
button.addEventListener("click", function () {
    let newTask = prompt("المهام الجديده");
})

   


    let createdTimeCell = document.createElement("h1");
    createdTimeCell.textContent = creatingTime.toLocaleString();
// >>>>..
    let statusCell = document.createElement("h1");
    let getstatus = prompt("هل تمت انجاز المهام") ;
    if(getstatus === "نعم"|| getstatus === "YES" ){
    }else if(getstatus === "لا" || getstatus === "NO" ){
    }else{
      statusCell.textContent = "تم انجاز المهام"+ "";
    }
    // عيا يزبط معي زر الحذف
     editCell.appendChild(editButton);
    const deleteButton = document.createElement("button2");
    deleteButton.className = "delete-button";
    deleteButton.textContent = "delet";
    deleteButton.addEventListener("click", () => {
        taskItem.remove();
    });

  