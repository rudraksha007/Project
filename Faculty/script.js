

function closePopup() {
    document.getElementById('popup').style.opacity = 0;
    setTimeout(() => {
        document.getElementById('popup').style.zIndex = -10;
    }, 1000);
}

function openPopup(data) {
    head = `<h1>${data.name}</h1>
            <img src="../statics/cross.png" alt="" height="50px" onclick="closePopup()">
            <div id="facs">
    <div class="heading">S.No.</div>
    <div class="heading">Name</div>
    <div class="heading">Designation</div>
    <div class="heading">Qualifications</div>`;
    faculties = '';
    i = 1;
    data.fac.forEach((fac) => {
        faculties += `<div class='entry'>${i}</div>
                <div class='entry'>${fac.name}</div>
                <div class='entry'>${fac.designation}</div>
                <div class='entry'>${fac.qualification}</div>`;
        i++;
    })
    document.getElementById('popupCont').innerHTML = head + faculties+'</div>';
    document.getElementById('popup').style.zIndex = 10;
    document.getElementById('popup').style.opacity = 1;

}

class Department {
    constructor(name, img, faculties) {
        this.name = name;
        this.img = img;
        this.fac = faculties;
    }
}
class Faculty {
    constructor(name, designation, qualification) {
        this.name = name;
        this.designation = designation;
        this.qualification = qualification;
    }
}
let dps = [
    new Department('Coordinators', 'coord.webp', [
        new Faculty("Mrs. Sawinder Kaur", "Sr. Coordinator", "M.Sc. (Zool.), B.Ed."),
        new Faculty("Mrs. Surbhi Bhardwaj", "Academic Coordinator", "M.Sc. (Chem.), B.Ed."),
        new Faculty("Mrs. Aparna Gupta", "Wing Coordinator", "B.Sc. (Non.-Med.), Dip.in Fashion Designing"),
        new Faculty("Mrs. Sarika Pathania", "Wing Coordinator", "M.Com, D.El.Ed., NTT"),
        new Faculty("Mrs. Neetu Chopra", "Wing Coordinator", "M.A. (Eco.), NTT, B.Ed."),
        new Faculty("Mrs. Sheenu Sharma", "Wing Coordinator", "M.A. (Hindi), B.Ed."),
        new Faculty("Mrs. Nidhi Malhotra", "Examination Head", "M.C.A., B.Ed.")
    ]),
    new Department('Department of English', 'eng.webp', [
        new Faculty("Mrs. Meena Kashyap (H.O.D.)", "NA", "M.A. (Eng.) B.Ed."),
        new Faculty("Mrs. Avneet Kaur", "NA", "M.A. (Eng.), M.A. (Eco.), B.Ed."),
        new Faculty("Mrs. Jasmeet Kaur", "NA", "M.A. (Eng.), B.Ed., CTET Qualified"),
        new Faculty("Mrs. Silky", "NA", "M.A. (Eng.) M.Phil., B.Ed."),
        new Faculty("Mrs. Ravinder Kaur Saini", "NA", "B.A., B.Ed."),
        new Faculty("Ms. Neha Chopra", "NA", "M.A. (Eng.), B.Ed.")
    ]),
    new Department('Department of Maths', 'maths.png', [
        new Faculty("Mr. Naresh Kapoor (H.O.D.)", "NA", "M.Sc. (Maths) B.Ed., CTET, PTET Qualified"),
        new Faculty("Mrs. Maninderjit Kaur Saini", "NA", "M.Sc. (Maths), B.Ed, M.ED, CTET, PTET Qualified"),
        new Faculty("Mrs. Nisha Puri", "NA", "M.Sc. (Maths), B.Ed."),
        new Faculty("Mrs. Manvinder Kaur", "NA", "M.Com., B.Ed."),
        new Faculty("Ms. Suman Sharma", "NA", "B.Sc. (Non-Med.), M.A. (Eng.), B.Ed."),
        new Faculty("Mrs. Neetu Gupta", "NA", "B.Sc. (Eco.), B.Ed."),
        new Faculty("Ms. Ruchi Setia", "NA", "B.Sc. (Non.-Med.), B.Ed.")
    ]),
    new Department('Department of Science', 'science.png', [
        new Faculty("Mrs. Surbhi Bhardwaj (H.O.D.)", "NA", "M.Sc. (Chem.), B.Ed., CTET Qualified"),
        new Faculty("Mr. Kamal Singh", "NA", "M.Sc. (Phy.), B.Ed., M.Tech."),
        new Faculty("Ms. Rashim Verma", "NA", "B.Sc. (Comp.Sci.), B.Ed., D.C.A.")
    ]),
    new Department('Department of S.St.', 'sst.png', [
        new Faculty("Mrs. Priya Seth (H.O.D.)", "NA", "B.A. (Arts), B.Ed."),
        new Faculty("Ms. Sonika Kapur", "NA", "M.A. (Eco.), B.Ed."),
        new Faculty("Mrs. Amritpal Kaur", "NA", "B.A. (Arts), B.Ed., L.Lb., L.Lm., PTET, UGC-NET Qualified"),
        new Faculty("Mrs. Manju Puri", "NA", "M.A. (Eco.), B.Ed."),
        new Faculty("Mr. Manjit Kumar", "NA", "M.A. (Pol.Sci.), B.Ed., PTET Qualified")
    ]),
    new Department('Department of Hindi', 'hindi.png', [
        new Faculty("Mrs. Megha Soni (H.O.D.)", "NA", "M.A. (Hindi), B.Ed."),
        new Faculty("Ms. Pratibha Sharma", "NA", "M.A. (Hindi), M.A. (Pol.Sci.), B.Ed."),
        new Faculty("Ms. Shilpi Saili", "NA", "M.A. (Eco.), M.A. (Hin.), B.Ed."),
        new Faculty("Mrs. Rosy Kalia", "NA", "M.A. (Hindi), B.Ed."),
        new Faculty("Mrs. Bandana Devi", "NA", "M.A. (Hindi), B.Ed., M.Phil."),
        new Faculty("Ms. Kavita Chauhan", "NA", "M.A. (Hin.), B.Ed.")
    ]),
    new Department('Department of Punjabi', 'punjabi.png', [
        new Faculty("Mrs. Manpreet Kaur (H.O.D.)", "NA", "M.A. (Pbi.), M.A. (Hist.), B.Ed."),
        new Faculty("Mrs. Mamta Rani", "NA", "M.A. (Pbi.), B.Ed."),
        new Faculty("Mrs. Mandeep Phull", "NA", "M.A. (Pbi.), M.A. (Eco.), N.T.T., B.Ed.")
    ]),
    new Department('Department of Commerce', 'commerce.png', [
        new Faculty("Dr. Anu Bhatia (H.O.D.)", "Accountancy", "M.Com., B.Ed., M.Phil, Ph.D"),
        new Faculty("Mrs. Rubal Shangari", "Accountancy", "M.Com, B.Ed."),
        new Faculty("Dr. Anu Bhatia", "Business Studies", "M.Com., B.Ed., M.Phil, Ph.D"),
        new Faculty("Ms. Anuradha Pandey", "Economics", "M.A. (Eco.), B.Ed., CTET Qual."),
        new Faculty("Mrs. Rubal Shangari", "Marketing", "M. Com, B. Ed"),
        new Faculty("Ms. Kanwaljit Kaur", "Political Science", "M.A. (Hist.), M.A. (Pol.Sci.), B.Ed."),
        new Faculty("Mrs. Amritpal Kaur", "Sociology", "B.A. (Arts), B.Ed., L.Lb., L.Lm., PTET Qualified")
    ]),
    new Department('Department of Computer Scinece', 'cs.png', [
        new Faculty("Ms. Amarpreet Kaur (H.O.D.)", "Deptt. of Computer Science", "B.Com, PGDCA, M.Sc.(IT)"),
        new Faculty("Ms. Deepti Sharma", "Deptt. of Computer Science", "B.Com. (Prof.), M.Sc. (IT), PGDCA, B.Ed."),
        new Faculty("Mrs. Suruchi Mahendru", "Deptt. of Computer Science", "M.Sc. (IT), M.C.A., B.Ed., CTET Quali")
    ]),
    new Department('Department of Music', 'music.png', [
        new Faculty("Mrs. Preeti Kuckreja (H.O.D.)", "Deptt. of Music", "M.A. (Music – Vocal)"),
        new Faculty("Mr. Mohandeep Bawra", "Deptt. of Music", "M.A. (Music – Vocal), M.Phil. (Music-Vocal)"),
        new Faculty("Mr. Om Parkash", "Deptt. of Music", "Harmonium"),
        new Faculty("Mr. Arminder Singh", "Deptt. of Music", "Tabla Player"),
        new Faculty("Mr. Gurkirat Singh", "Deptt. of Music", "Guitarist")
    ]),
    new Department('Department of Dance', 'dance.png', [
        new Faculty("Ms. Seema Pandey (H.O.D.)", "Deptt. of Dance", "M.A. (Hist.), P.G. in Dance, B.Ed."),
        new Faculty("Ms. Kajal Sharma", "Deptt. of Dance", "M.A. (Dance)"),
        new Faculty("Ms. Sangeeta Kohli", "Deptt. of Dance", "M.A. (Dance)")
    ]),
    new Department('Department of Fine Arts', 'sports.png', [
        new Faculty("Dr. Pradeep Kumar Singh (H.O.D.)", "Deptt. of Sports", "M.P.Ed., Ph.D."),
        new Faculty("Ms. Balwinder Kaur", "Deptt. of Sports", "B.P.Ed., M.A. (Pbi.), B.Ed., CTET Qualified."),
        new Faculty("Ms. Rosy Lakhi", "Deptt. of Sports", "B.A. (Arts), Black Belt in Taikwandoo")
    ]),
    new Department("Student Counsellors", 'counsellor.png', [
        new Faculty("Ms. Neha Malhotra", "Student’s Counsellors", "M.A. (Applied Psychology)")
    ]),
    new Department('Other Teachers', 'teacher.webp', [
        new Faculty("Ms. Shreya Punchi", "Other Teachers", "M.Com., B.Ed."),
        new Faculty("Mrs. Yogita Kapoor", "Other Teachers", "B.A., D.Ed., M.Sc.(IT)"),
        new Faculty("Mrs. Parveen Kumari", "Other Teachers", "M.A. (Eco.), N.T.T., B.Ed."),
        new Faculty("Mrs. Shikha Narang", "Other Teachers", "B.A., NTT, B.Ed."),
        new Faculty("Mrs. Tajinder Kaur", "Other Teachers", "M.A.(Hin.), B.Ed., NTT"),
        new Faculty("Mrs. Anita Seth", "Other Teachers", "M.A. (Pbi.), B.Ed."),
        new Faculty("Mrs. Amrit Kaur", "Other Teachers", "M.A. (Pol.Sci.), B.Ed., CTET Qualified."),
        new Faculty("Mrs. Vanita Kapoor", "Other Teachers", "M.Sc. (Maths), B.Ed."),
        new Faculty("Mrs. Sandeep Kaur", "Other Teachers", "B.Com., B.Ed., P.G. in Mass Communication & Journal."),
        new Faculty("Ms. Isha Talwar", "Other Teachers", "M.A. (Fine Arts), M.A. (History of Arts), B.Ed."),
        new Faculty("Mrs. Archana Anand", "Other Teachers", "M.Com., B.Ed."),
        new Faculty("Mrs. Pankaj Kumari", "Other Teachers", "M.Sc. (Bio-Chem.), B.Ed."),
        new Faculty("Mrs. Jaskaran Kaur", "Other Teachers", "M.A. (Pbi.), M.A. (Eng.), M.A.(Hindi)., B.Ed., CTET Quali."),
        new Faculty("Ms. Aanchal Mehra", "Other Teachers", "M.Com., B.Ed."),
        new Faculty("Mrs. Pooja Sharma", "Other Teachers", "M.A. (Eco.), P.T.T."),
        new Faculty("Mrs. Sandeep Kaur", "Other Teachers", "M.Sc. (Maths)"),
        new Faculty("Mr. Narpinder Singh", "Other Teachers", "B.A., P.G. Diploma in Yogic Science"),
        new Faculty("Mrs. Varinder Kaur", "Other Teachers", "M.Sc. (IT)")
    ]),
    new Department('Pre-Primary Wing', 'pre.png', [
        new Faculty("Ms. Bhawna Bawa", "Pre-primary Wing", "B.A., N.T.T., Dip. In Cosmetology, B.Ed"),
        new Faculty("Ms. Monika Sharma", "Pre-primary Wing", "B.Com., N.T.T., Dip. In Fashion Designing"),
        new Faculty("Ms. Anu Dhamija", "Pre-primary Wing", "M.A. (Hindi), N.T.T., B.Ed, CTT"),
        new Faculty("Ms. Komal Gupta", "Pre-primary Wing", "M.A. (Hindi), N.T.T., B.Ed"),
        new Faculty("Ms. Sannia Sharma", "Pre-primary Wing", "M.A.(English), N.T.T., B.Ed"),
        new Faculty("Ms. Manju Jyoti", "Pre-primary Wing", "M.A. (History), M.A.(Hindi), B.Ed., Dip. Dress Designing"),
        new Faculty("Mrs. Jyoti Rani", "Pre-primary Wing", "B.Com, PTT"),
        new Faculty("Ms. Manjit Kaur", "Pre-primary Wing", "B.A, B.Ed, NTT"),
        new Faculty("Ms. Annu Sharma", "Pre-primary Wing", "M.A.(Eco.), B.Ed."),
        new Faculty("Ms. Riya Sharma", "Pre-primary Wing", "B.A"),
        new Faculty("Mrs. Simarpreet Kaur", "Pre-primary Wing", "M.A., B.Ed."),
        new Faculty("Mrs. Nitika Sharma", "Pre-primary Wing", "B.A., N.T.T."),
        new Faculty("Mrs. Chandni", "Pre-primary Wing", "M.C.A."),
        new Faculty("Mrs. Neha Chadha", "Pre-primary Wing", "M.A. (Fine Arts), N.T.T., B.Ed."),
        new Faculty("Mrs. Ritika Sharma", "Pre-primary Wing", "B.A., N.T.T."),
        new Faculty("Ms. Shama", "Pre-primary Wing", "B.A. JMC, N.T.T.")
    ]),
    new Department('Non Teaching Staff', 'non.png', [
        new Faculty("Mr. Honey Bawa", "Non-Teaching Staff", "M.Com., B.Ed., MBA"),
        new Faculty("Mr. Vivek Sharma", "Non-Teaching Staff", "Hons. Dipl. In Comp. Sci."),
        new Faculty("Mrs. Kanika Bhalla", "Non-Teaching Staff", "B.Com."),
        new Faculty("Mr. Manoj Sharma", "Non-Teaching Staff", "M.C.A.")
    ])

]
dps.forEach((data) => {
    x = document.getElementById('deps');
    x.innerHTML += `<div class="dep" onclick='openPopup(${JSON.stringify(data)})'>
    <img src="images/${data.img}" alt="">
                <h2>${data.name}</h2>
                <txt>${data.fac.length} Faculties</txt>
            </div>`;

});
