import { list } from "../myVars.js";

export const append = (appendNewTask) => {
  const div = document.createElement("div");
  div.classList.add("task");
  div.innerHTML = `
            <p class="task-text">${appendNewTask}</p>
            <div class="task-buttons">
                <button class="task-edit"><i class="fas fa-edit"></i></button>
                <button class="task-delete"><i class="fas fa-trash"></i></button>
            </div>
        `;
  list.appendChild(div);
};
