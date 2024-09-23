// C1-A1

// Persona 1, Student Information (Me)
let fullName = "Andrea Valdez Salem"
let birthdate = "November 25 , 2004";
let birthplace = "Candon City, Ilocos Sur";
let address = "Bagar, Candon City, Ilocos Sur";
let courseAndYear = "Bachelor Of Science In Computer Science, 2nd Year";
let dreamJobAfterGraduation = "Database Administrator";

// Persona 2, 1st Classmate (this is a random name, and identity)
let classmate1FullName = "Sophia Denize Toquero"
let classmate1Birthdate = "July 08, 2005";
let classmate1Birthplace = "San Agustin, Candon City, Ilocos Sur";
let classmate1Address = "San Agustin, Candon City, Ilocos Sur";
let classmate1CourseAndYear = "Bachelor Of Science In Computer Science, 2nd Year";
let classmate1DreamJob = "Web Developer";

// Persona 3, 3rd Classmate (also a random)
let classmate2FullName = "Marco Louis Guilambo"
let classmate2Birthdate = "October 26, 2000";
let classmate2Birthplace = "Galimuyod, Ilocos Sur";
let classmate2Address = "Galimuyod, Ilocos Sur";
let classmate2CourseAndYear = "Bachelor Of Science In Computer Science, 3rd Year";
let classmate2DreamJob = "Computer Network Architechs";

// Print information for Student 1 (Me)
let student1Info = "[" + fullName.toUpperCase() + "] was born on [" + birthdate + "] at [" + birthplace.toUpperCase() + "], and currently living at [" + address.toUpperCase() + "]. [" + fullName.toLowerCase() + "] is taking up [" + courseAndYear + "] and dreams to be [" + dreamJobAfterGraduation + "] after graduation.\n";
console.log(student1Info);

// Print information for Classmate 1
let classmate1Info = "[" + classmate1FullName + "] was born on [" + classmate1Birthdate + "] at [" + classmate1Birthplace.toUpperCase() + "], and currently living at [" + classmate1Address.toUpperCase() + "]. [" + classmate1FullName.toLowerCase() + "] is taking up [" + classmate1CourseAndYear + "] and dreams to be [" + classmate1DreamJob + "] after graduation.\n";
console.log(classmate1Info);

// Print information for Classmate 2
let classmate2Info = "[" + classmate2FullName + "] was born on [" + classmate2Birthdate + "] at [" + classmate2Birthplace.toUpperCase() + "], and currently living at [" + classmate2Address.toUpperCase() + "]. [" + classmate2FullName.toLowerCase() + "] is taking up [" + classmate2CourseAndYear + "] and dreams to be [" + classmate2DreamJob + "] after graduation.";
console.log(classmate2Info);
