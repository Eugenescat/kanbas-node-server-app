import ModuleModel from "./model.js";

export const createModule = async (module) => {
    try {
        const newModule = await ModuleModel.create(module);
        return newModule;
    } catch (error) {
        console.error('Error creating module:', error);  // 打印详细错误信息
        throw error;
    }
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
