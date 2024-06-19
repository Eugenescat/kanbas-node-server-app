import ModuleModel from "./model.js";

export const createModule = async (module) => {
    const newModule = await ModuleModel.create(module);
    return newModule;
};

export const updateModule = async (moduleId, module) => {
    const updatedModule = await ModuleModel.findByIdAndUpdate(moduleId, module, { new: true });
    return updatedModule;
};

export const deleteModule = async (moduleId) => {
    const result = await ModuleModel.findByIdAndDelete(moduleId);
    return result;
};

export const findModulesByCourseId = async (courseId) => {
    const modules = await ModuleModel.find({ course: courseId });
    return modules;
};

export const findModuleById = async (moduleId) => {
    const module = await ModuleModel.findById(moduleId);
    return module;
};
