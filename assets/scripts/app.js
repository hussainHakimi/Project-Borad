// class Tooltip {

// }

// class ProjectItem {
//     constructor(id){
//         this.id = id;
//         this.connectSwitchButton();
//         this.connectMoreInfoButton();
//     }

//     connectMoreInfoButton(){

//     }

//     connectSwitchButton(){
//         const projectItemElement = document.getElementById(this.id);
//         const switchBtn = projectItemElement.querySelector('button:last-of-type');
//         switchBtn.addEventListener('click', this.updateProjectListsHandler);
//     }
// }

// class ProjectList {
//     projects = [];
//     constructor(type, updateProjectListsFunction){
//         this.type = type;
//         this.updateProjectListsHandler = updateProjectListsFunction;
//         const prjItems = document.querySelectorAll(`#${type}-projects li`);
//         for (const prjItem of prjItems){
//             this.projects.push(new ProjectItem(prjItem.id, this.switchProject.bind(this)));
//         }
//         console.log(this.projects);
//     }
//     setSwitchHandlerFunction(switchHandlerFunction){
//         this.switchHandler = this.switchHandlerFunction;
//     }
//     addProject(){  // it will add the deleted project to a new array.
//         console.log(this);
//     }
//     switchProject(projectId){   // will delete the project from projects array and add it to other array.
//         // const projectIndex = this.projects.indexOf(p => p.id === projectId);
//         // this.projects.splice(projectIndex, 1);
//         this.switchHandler(this.projects.find(p => p.id === projectId));
//         this.projects= this.projects.filter(p => p.id !== projectId);
//     }
// }

// class App {
//     static init(){
//         const activeProjectList = new ProjectList('active');
//         const finishedProjectList = new ProjectList('finished');
//         activeProjectList.setSwitchHandlerFunction(finishedProjectList.addProject.bind(finishedProjectList));
//         finishedProjectList.setSwitchHandlerFunction(activeProjectList.addProject.bind(activeProjectList));
//     }
// }

// App.init();

class DOMHelper {
    static moveElement(elementId, newDestinationSelector){
        const element = document.getElementById(elementId);
        const destinationElement = document.querySelector(newDestinationSelector);
        destinationElement.append(element);

    }
}


class Tooltip {}

class ProjectItem {
    constructor(id, updateProjectListsFunction) {
        this.id = id;
        this.updateProjectListsHandler = updateProjectListsFunction;
        this.connectMoreInfoButton();
        this.connectSwitchButton();
    }

    connectMoreInfoButton() {}

    connectSwitchButton() {
        const projectItemElement = document.getElementById(this.id);
        const switchBtn = projectItemElement.querySelector('button:last-of-type');
        switchBtn.addEventListener('click', this.updateProjectListsHandler);
    }
}

class ProjectList {
    projects = [];

    constructor(type) {
    this.type = type;
    const prjItems = document.querySelectorAll(`#${type}-projects li`);
    for (const prjItem of prjItems) {
        this.projects.push(
            new ProjectItem(prjItem.id, this.switchProject.bind(this))
        );
    }
        console.log(this.projects);
    }

    setSwitchHandlerFunction(switchHandlerFunction) {
        this.switchHandler = switchHandlerFunction;
    }

    addProject(project) {
        this.projects.push(project);

    }

    switchProject(projectId) {
    // const projectIndex = this.projects.findIndex(p => p.id === projectId);
    // this.projects.splice(projectIndex, 1);
        this.switchHandler(this.projects.find(p => p.id === projectId));
        this.projects = this.projects.filter(p => p.id !== projectId);
    }
}

class App {
    static init() {
        const activeProjectsList = new ProjectList('active');
        const finishedProjectsList = new ProjectList('finished');
        activeProjectsList.setSwitchHandlerFunction(
        finishedProjectsList.addProject.bind(finishedProjectsList)
        );
        finishedProjectsList.setSwitchHandlerFunction(
        activeProjectsList.addProject.bind(activeProjectsList)
        );
    }
}

App.init();
