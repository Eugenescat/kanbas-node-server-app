import CourseModel from "./model.js";

export const createCourse = async (course) => {
    const newCourse = await CourseModel.create(course);
    return newCourse;
};

export const updateCourse = async (courseId, course) => {
    const updatedCourse = await CourseModel.findByIdAndUpdate(courseId, course, { new: true });
    return updatedCourse;
};

export const deleteCourse = async (courseId) => {
    const result = await CourseModel.findByIdAndDelete(courseId);
    return result;
};

export const findAllCourses = async () => {
    const courses = await CourseModel.find();
    return courses;
};

export const findCourseById = async (courseId) => {
    const course = await CourseModel.findById(courseId);
    return course;
};
