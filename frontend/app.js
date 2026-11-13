document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("taskInput");
    const addBtn = document.getElementById("addBtn");
    const taskList = document.getElementById("taskList");

    addBtn.addEventListener("click", () => {
        const text = input.value.trim();
        if (text !== "") {
            const li = document.createElement("li");
            li.textContent = text;
            taskList.appendChild(li);
            input.value = "";
        }
    });
});
