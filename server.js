const express = require('express')
const app = express()
app.listen(3000, () => console.log(`Example app listening on port 3000!`))

app.get('/home', loadHtml);
app.get('/admin', Adminn);
app.get('/doctorpage', DoctorPagee);
app.get('/hospitalpage', HospitalPage);
app.get('/patientpage', PatientPage);
app.get('/SearchMedicien', SearchMedicien);
app.get('/SearchRemedies', SearchRemedies);

app.get('/adminpage', adminView);
app.get('/Admin/viewdoctor', ViewDoctors);
app.get('/Admin/viewappoinment', ViewAppoinmentsss);
app.get('/Admin/viewhospital', ViewHospitalsss);
app.get('/Admin/viewpatient', ViewPatients);
app.get('/Admin/changepassword', adminchangepassword);

app.get('/patientPagee', PatientHomePageee);
app.get('/doctorPagee', DoctorHomePage);
app.get('/hospitalPagee', HospitalHomePage)

app.get('/Doctor/doctorprofile', DoctorProfilee);
app.get('/Doctor/viewdoctor', ViewDoctorTable);
app.get('/Doctor/viewappoinment', ViewAppoinmentTable);
app.get('/Doctor/changepwd', DoctorChangePassword);
app.get('/Doctor/medicien', DoctorMedicien);
app.get('/Doctor/remedies', Doctorremedies);
app.get('/Doctor/Viewmedicien', DoctorViewMedicien);
app.get('/Doctor/Viewremedies', DoctorViewremedies);

app.get('/Patient/patientprofile', PatientProfilee)
app.get('/Patient/searchdoctor', SearchDoctor);
app.get('/Patient/appoinmentdetails', ViewAppoinment);
app.get('/Patient/changepwd', PatientChangePassword);

app.get('/Hospital/viewprofile', ViewProfilee);
app.get('/Hospital/viewdoctor', ViewDoctorDetails)
app.get('/Hospital/viewappoinment', ViewAppoinments)
app.get('/Hospital/changepassword', hospitalChangePassword)

app.get('/doctorregistrations', DoctorReg);
app.get('/hospitalregistrations', HospitalReg);
app.get('/patientregistrations', PatientReg);


function loadHtml(req, res) {
	console.log(__dirname);
	res.sendFile('home.html', { root: __dirname });
}


function Adminn(req, res) {
	res.sendFile('adminLogin.html', { root: __dirname });
}


function adminView(req, res) {
	res.sendFile("Admin/homePage.html", { root: __dirname });
}


function ViewDoctors(req, res) {
	res.sendFile("Admin/viewDoctor.html", { root: __dirname });
}

function ViewAppoinmentsss(req, res) {
	res.sendFile("Admin/viewAppoinment.html", { root: __dirname });
}

function ViewHospitalsss(req, res) {
	res.sendFile("Admin/viewHospital.html", { root: __dirname });
}
function adminchangepassword(req, res) {
	res.sendFile("Admin/ChangePassword.html", { root: __dirname });
}

function SearchMedicien(req, res) {
	res.sendFile("SearchMedicienes.html", { root: __dirname });
}

function SearchRemedies(req, res) {
	res.sendFile("SearchRemedies.html", { root: __dirname });
}


function ViewPatients(req, res) {
	res.sendFile("Admin/viewPatient.html", { root: __dirname });
}

function DoctorPagee(req, res) {
	res.sendFile('doctorLogin.html', { root: __dirname });
}


function HospitalPage(req, res) {
	res.sendFile('hospitalLogin.html', { root: __dirname });
}


function PatientPage(req, res) {
	res.sendFile('patientLogin.html', { root: __dirname });
}


function PatientHomePageee(req, res) {
	res.sendFile('Patients/homePage.html', { root: __dirname });
}

function DoctorReg(req, res) {
	res.sendFile('doctorRegistration.html', { root: __dirname });
}


function DoctorHomePage(req, res) {
	res.sendFile('Doctor/homePage.html', { root: __dirname });
}
function DoctorChangePassword(req, res) {
	res.sendFile('Doctor/changePassword.html', { root: __dirname });
}
function DoctorMedicien(req, res) {
	res.sendFile('Doctor/addMedicien.html', { root: __dirname });
}

function Doctorremedies(req, res) {
	res.sendFile('Doctor/addRemedies.html', { root: __dirname });
}

function DoctorViewremedies(req, res) {
	res.sendFile('Doctor/ViewRemedies.html', { root: __dirname });
}

function DoctorViewMedicien(req, res) {
	res.sendFile('Doctor/ViewMedicienes.html', { root: __dirname });
}




function HospitalHomePage(req, res) {
	res.sendFile('Hospital/homePage.html', { root: __dirname });
}

function HospitalReg(req, res) {
	res.sendFile('hospitalRegistration.html', { root: __dirname });
}
function hospitalChangePassword(req, res) {
	res.sendFile('Hospital/ChangePassword.html', { root: __dirname });
}


function PatientReg(req, res) {
	res.sendFile('patientRegistration.html', { root: __dirname });
}


function ViewAppoinmentTable(req, res) {
	res.sendFile('Doctor/viewAppoinment.html', { root: __dirname });
}


function DoctorProfilee(req, res) {
	res.sendFile('Doctor/viewProfile.html', { root: __dirname });
}


function ViewDoctorTable(req, res) {
	res.sendFile('Doctor/viewDoctor.html', { root: __dirname });
}




function PatientProfilee(req, res) {
	res.sendFile('Patients/viewProfile.html', { root: __dirname });
}
function PatientChangePassword(req, res) {
	res.sendFile('Patients/changePassword.html', { root: __dirname });
}



function ViewProfilee(req, res) {
	res.sendFile('Hospital/viewProfile.html', { root: __dirname });
}

function ViewDoctorDetails(req, res) {
	res.sendFile('Hospital/viewDoctor.html', { root: __dirname });
}


function SearchDoctor(req, res) {
	res.sendFile('Patients/searchDoctor.html', { root: __dirname });
}


function ViewAppoinment(req, res) {
	res.sendFile('Patients/appointment.html', { root: __dirname });
}


function ViewAppoinments(req, res) {
	res.sendFile('Hospital/viewAppoinment.html', { root: __dirname });
}
