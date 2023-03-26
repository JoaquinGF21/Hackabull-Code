const mac2281 = document.getElementById('mac2281');
const mac2282 = document.getElementById('mac2282');
const cop2510 = document.getElementById('cop2510');
const egn3000 = document.getElementById('egn3000');
const egn3000l = document.getElementById('egn3000l');
const enc1101 = document.getElementById('enc1101');
const starter = document.getElementById('starter');
const phy2048l = document.getElementById('phy2048l');
const phy2048 = document.getElementById('phy2048');
const natural_science = document.getElementById('natural_science');
const cot3100 = document.getElementById('cot3100');
const cda3103 = document.getElementById('cda3103');
const cop3514 = document.getElementById('cop3514');

const mac2283 = document.getElementById('mac2283');
const egn4450 = document.getElementById('egn4450');
const egn3433 = document.getElementById('egn3433');
const phy2049l = document.getElementById('phy2049l');
const phy2049 = document.getElementById('phy2049');

starter.addEventListener('click', function() {
  if (mac2281.classList.contains('hide')) {
    mac2281.classList.remove('hide');
  } else {
    mac2281.classList.add('hide');
  }
  if (egn3000.classList.contains('hide')) {
    egn3000.classList.remove('hide');
  } else {
    egn3000.classList.add('hide');
  }
  if (egn3000l.classList.contains('hide')) {
    egn3000l.classList.remove('hide');
  } else {
    egn3000l.classList.add('hide');
  }
  if (enc1101.classList.contains('hide')) {
    enc1101.classList.remove('hide');
  } else {
    enc1101.classList.add('hide');
  }
  if (natural_science.classList.contains('hide')) {
    natural_science.classList.remove('hide');
  } else {
    natural_science.classList.add('hide');
  }
  
});

mac2281.addEventListener('click', function() {
  if (mac2282.classList.contains('hide')) {
    mac2282.classList.remove('hide');
  } else {
    mac2282.classList.add('hide');
  }
  if (cop2510.classList.contains('hide')) {
    cop2510.classList.remove('hide');
  } else {
    cop2510.classList.add('hide');
  }
  if (phy2048.classList.contains('hide')) {
    phy2048.classList.remove('hide');
  } else {
    phy2048.classList.add('hide');
  }
  if (phy2048l.classList.contains('hide')) {
    phy2048l.classList.remove('hide');
  } else {
    phy2048l.classList.add('hide');
  }
  if (cot3100.classList.contains('hide')) {
    cot3100.classList.remove('hide');
  } else {
    cot3100.classList.add('hide');
  }
});

cop2510.addEventListener('click', function() {
  if (cop3514.classList.contains('hide')) {
    cop3514.classList.remove('hide');
  } else {
    cop3514.classList.add('hide');
  }
  if (cda3103.classList.contains('hide')) {
    cda3103.classList.remove('hide');
  } else {
    cda3103.classList.add('hide');
  }
});

mac2282.addEventListener('click', function(){
  if (mac2283.classList.contains('hide')) {
    mac2283.classList.remove('hide');
  } else {
    mac2283.classList.add('hide');
  }
  if (egn4450.classList.contains('hide')) {
    egn4450.classList.remove('hide');
  } else {
    egn4450.classList.add('hide');
  }
  if (egn3433.classList.contains('hide')) {
    egn3433.classList.remove('hide');
  } else {
    egn3433.classList.add('hide');
  }
  if (phy2049.classList.contains('hide')) {
    phy2049.classList.remove('hide');
  } else {
    phy2049.classList.add('hide');
  }
  if (phy2049l.classList.contains('hide')) {
    phy2049l.classList.remove('hide');
  } else {
    phy2049l.classList.add('hide');
  }
});

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
let theClass = "";
var thestring = "";
const checkbtn = document.getElementById('check');
const uploadconfirmstudent = document.getElementById('uploadconfirmstudent').
addEventListener('click', () => {
  Papa.parse(document.getElementById('student').files[0],{
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
        enc1101.classList.add('bgcComplete');
        mac2281.classList.add('bgcComplete');
        egn3000.classList.add('bgcComplete');
        egn3000l.classList.add('bgcComplete');
        natural_science.classList.add('bgcComplete');
        mac2282.classList.add('bgcIP');
        /*
        console.log(studentName);
        console.log(classesTaken);
        console.log(classesIP);
        console.log(classestakenClassesForStudent);
        console.log(classesIPClassesForStudent);
        
        for (let i = 0; i < classesIPClassesForStudent.length; i++) {
          theClass = classesIPClassesForStudent[i];
          console.log(theClass);
          theClass = theClass.slice(0, 2).toLowerCase() + theClass.slice(2, 5);
          console.log(theClass);
          thestring = thestring  + theClass;
          console.log(thestring);
          
        }
        thestring.classList.add('bgcIP');
        
        for (i = 0; i < (classestakenClassesForStudent.length); i++){
          theClass = classestakenClassesForStudent.split(i,i+7)
          theClass = theClass.toLowerCase;
          theClass.classList.add('bgcComplete');
        

    }
*/
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
        /*
        console.log(className);
        console.log(classReq);
        console.log(needUP);
        console.log(classesReqForStudent);
        */
    }
    
});
});
checkbtn.addEventListener('click', function() {
for (i = 0; i < (classesIPClassesForStudent.length + classestakenClassesForStudent.length); i = i+7) {
    if (classesReqForStudent.slice(i,i+7) == (classestakenClassesForStudent.slice(i,i+7) || classesIPClassesForStudent.slice(i,i+7)) ){
        console.log("true");
        classAva = true;
    }
}
})




