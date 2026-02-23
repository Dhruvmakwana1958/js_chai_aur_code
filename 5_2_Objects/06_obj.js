// ****************************************** Deconstructore ***************************************************************

const course = {
    courseName : "js in hindi",
    courseInstructor : "hitesh",
    price : 999,
    
}

console.log(course.courseInstructor) // this is long way 

// new technique is here

const {courseInstructor} = course
console.log(courseInstructor) // have ahi course.courseInstructor em akhu nalakhvu padyu

const {courseName : name} = course
console.log(name) // coourseName ne short form ap didhu name matlb de constructe



// API su che te apdne amuk kam jate kari ne ape ane api pela XML file ma avta but have json file ma ave 1st object 2nd array
 /*{
   "courseName" : "js in hindi",
    "courseInstructor" : "hitesh",
    "price" : 999, 

}

[
    {},
    {},
    {}
]
*/


