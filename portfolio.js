//// THE PROJECT DATABASE ////

//// An array of the objects, where each object is a project. ////

const projects = [
  {
    // first project
    id: 1,
    title: "Quotes Generator",
    description:
      "Random inspirational and life-changing quotes immersed in invigorating background images.",
    tech: ["Javascript objects, events", "DOM"],
    path: "projects/javascript quotes generator/index.html",
  },
  {
    // second project
    id: 2,
    title: "To-do list Manager",
    description:
      "Your cool task manager with pleasing buttons to add, delete and mark tasks as complete.",
    tech: ["Javascript", "LocalStorage", "DOM"],
    path: "projects/simple to-do list/index.html",
  },
  {
    // third project
    id: 3,
    title: "Modal",
    description: "Cool click to appear interface",
    tech: ["Javascript", "DOM traversal"],
    path: "projects/modal/index.html",
  },
  {
    // fourth project
    id: 4,
    title: "FAQ-Accordion",
    description: "This string instrument's got questions and answers too!",
    tech: ["Javascript events, CSS gradients"],
    path: "projects/faq-accordion/index.html",
  },
  {
    // fifth projects
    id: 5,
    title: "Your go-to stopwatch",
    description: "How about a run this morning? Timed!",
    tech: ["Javascript conditional logic", "DOM"],
    path: "projects/stopwatch/index.html",
  },
];

const projectsGrid = document.getElementById("projectsGrid");

function renderProjects() {
  projectsGrid.innerHTML = projects
    .map(
      (project) => `
        <div class="project-card">
          <div class="project-preview">
             <div class="live-badge"> Live Demo </div>
             <iframe src="${project.path}" title="${project.title}"></iframe>
          </div>
          <div class="project-info">
             <div class="project-title">${project.title}</div>
             <div class="project-description">${project.description}</div>
             <div class="tech-stack">${project.tech.map((tech) => `<span class="tech-tag">${tech}</span>`).join("")}
             </div>
             <div class="project-actions">
                <button class="btn btn-primary" onclick="openProject('${project.path}')"> Launch Full Demo </button>
                <a href="${project.path}" target="_blank" class="btn btn-secondary"> New Tab </a>
            </div>
          </div>
        </div>`,
    )
    .join("");
}

// Getting the modal element.
const modal = document.getElementById("projectModal");
const modalIframe = document.getElementById("modalIframe");
const closeModal = document.getElementById("closeModal");

// function to open a project in full-screen modal
function openProject(projectPath) {
  modalIframe.src = projectPath;
  modal.style.display = "block";
  document.body.style.overflow = "hidden";
}

// function to close the modal;
function closeProjectModal() {
  // Hide the modal;
  modal.style.display = "none";
  // clear the path, the iframe src (stops any audio or video);
  modalIframe.src = "";
  // return scrolling to default
  document.body.style.overflow = "auto";
}

// ************** //
// Event Handlers //
// ************** //

// when the user clicks anywhere on the modal ( the dark background )
modal.addEventListener("click", function (e) {
  if (e.target === modal) {
    closeProjectModal();
  } // through event propagation(bubbling), we are able to close the modal based on the clicked object;
});

// Escape key to close/ keydown triggers the closure of the modal
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && modal.style.display === "block") {
    closeProjectModal();
  }
});

closeModal.addEventListener("click", closeProjectModal);

renderProjects();
