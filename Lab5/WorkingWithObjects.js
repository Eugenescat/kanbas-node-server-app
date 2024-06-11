const assignment = {
    id: 1, title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10", completed: false, score: 0,
  };
// create a module object with string properties id, name, description, and course
const module = {
    id: 1,
    name: "NodeJS",
    description: "NodeJS modules",
    course: "CS572"
};
export default function WorkingWithObjects(app) {
    // assignment routes
    app.get("/lab5/assignment", (req, res) => {
        res.json(assignment);
    });
    app.get("/lab5/assignment/title", (req, res) => {
        res.json(assignment.title);
    });
    app.get("/lab5/assignment/title/:newTitle", (req, res) => {
        const { newTitle } = req.params;
        assignment.title = newTitle;
        res.json(assignment);
    });
    app.get("/lab5/assignment/completed/:status", (req, res) => {
        const { status } = req.params;
        assignment.completed = status === "true";
        res.json(assignment);
    });
    
    // Module routes
    app.get('/lab5/module', (req, res) => {
        res.json(module);
    });

    app.get('/lab5/module/name', (req, res) => {
        res.json({ name: module.name });
    });

    app.post('/lab5/module/name', (req, res) => {
        module.name = req.body.name;
        res.json(module);
    });

    app.post('/lab5/module/description', (req, res) => {
        module.description = req.body.description;
        res.json(module);
    });
};