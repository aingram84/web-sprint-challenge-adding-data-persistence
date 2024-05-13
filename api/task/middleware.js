const Project = require('../project/model')

async function checkTask(req, res, next) {
    try {
        const { task_description,project_id } = req.body
        let project = await Project.getById(project_id)
        if(project.length === 0 || !project_id){
            next({ status: 400, message: "project_id is not valid"})
        }
        else if(!task_description){
            next({ status: 400, message: "task_description field is required"})
        }else{
            next();
        }
    } catch (error) {
        next(error)
    }

}

module.exports = {
    checkTask,
}