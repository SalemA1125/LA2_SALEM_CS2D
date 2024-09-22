// Persona 1
const p1FirstName = "Juan";
const p1MiddleName = "Gamoso";
const p1LastName = "Dela Cruz";
const p1Birthdate = "January 1, 2001";
const p1Barangay = "Upper Bonifacio";
const p1City = "Baguio City";
const p1Country = "Philippines";
const p1ZipCode = "2600";
const p1Address = `${p1Barangay}, ${p1City}, ${p1Country} ${p1ZipCode}`;
const p1Course = "Bachelor of Science in Computer Science";
const p1DreamJob = "Software Engineer";

// Persona 2
const p2FirstName = "Juan";
const p2MiddleName = "Gamoso";
const p2LastName = "Dela Cruz";
const p2Birthdate = "January 1, 2001";
const p2Barangay = "San Nicolas";
const p2City = "Candon City";
const p2Country = "Philippines";
const p2ZipCode = "2710";
const p2Address = `${p2Barangay}, ${p2City}, ${p2Country} ${p2ZipCode}`;
const p2Course = "Bachelor of Science in Computer Science";
const p2DreamJob = "Software Engineer";

// String Concatenation
const p1Sentence = `${p2FirstName} ${p2LastName} was born on ${p2Birthdate} at ${p2Address} and currently living at ${p1Address}. [${p2FirstName} ${p2MiddleName} ${p2LastName}] is taking up [${p2Course}] and dreams to be [${p2DreamJob}] after graduation.`;
console.log(p1Sentence);
