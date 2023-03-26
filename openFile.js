
// data manipulation
var studentName = [];
var className = [];
var classesTaken = [];
var classesIP = [];
var classReq = [];
var needUP = [];
var hasUP = [];
var classesReqForStudent = "";
var classestakenClassesForStudent = [];
var classesIPClassesForStudent = [];
var usersName = "Emma";
var classAva = false;
const checkbtn = document.getElementById('check');
const uploadconfirmstudent = document.getElementById('uploadconfirmstudent').
addEventListener('click', () => {
Papa.parse(document.getElementById('student').files[0],
{
    download: true,
    header: true,
    skipEmptyLines: true,
    complete: function(results){
        for (i = 0; i < results.data.length; i++) {
            studentName.push(results.data[i].FirstName);
            classesTaken.push(results.data[i].ClassesTaken);
            classesIP.push(results.data[i].ClassesInProgress);
            hasUP.push(results.data[i].UpperLevel);
        }
        for (i = 0; i < results.data.length; i++) {
            if (usersName == (results.data[i].FirstName)){
                classestakenClassesForStudent = classesTaken[i];
                classesIPClassesForStudent = classesIP[i];
            }
        }
        console.log(studentName);
        console.log(classesTaken);
        console.log(classesIP);
        console.log(classestakenClassesForStudent);
        console.log(classesIPClassesForStudent);

    }
    
});
});
const uploadconfirmclasses = document.getElementById('uploadconfirmclasses').
addEventListener('click', () => {
Papa.parse(document.getElementById('classes').files[0],
{
    download: true,
    header: true,
    skipEmptyLines: true,
    complete: function(results){
        for (i = 0; i < results.data.length; i++) {
            classReq.push(results.data[i].classesrequired);
            needUP.push(results.data[i].isUPPLneeded);
            className.push(results.data[i].ClassID);
        }
        for (i = 0; i < results.data.length; i++) {
            if ((results.data[i].ClassID) == "MAC2282"){
                console.log("it work");
                var classesReqForStudent = classReq[i];
            }
        }
        console.log(className);
        console.log(classReq);
        console.log(needUP);
        console.log(classesReqForStudent);
    }
    
});
});
checkbtn.addEventListener('click', function() {
for (i = 0; i < (classesIPClassesForStudent.length + classestakenClassesForStudent.length); i = i+7) {
    console.log(classestakenClassesForStudent);
    console.log(classesIPClassesForStudent);
    if (classesReqForStudent.slice(i,i+7) == (classestakenClassesForStudent.slice(i,i+7) || classesIPClassesForStudent.slice(i,i+7)) ){
        console.log("true");
        classAva = true;
    }
}
})

mac2281.classList.contains('bgcIP')
