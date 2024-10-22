window.addEventListener('scroll', change);
function change() {
    window.removeEventListener('scroll', change);
    x = document.getElementById('name');
    x.style.opacity = 0;
    setTimeout(() => {
        x.style.width = 0;
        this.document.getElementById('logo').style.width = '10vh';
        this.document.getElementById('logo').style.height = '10vh';
        document.getElementById('container').style.height = 'fit-content';
        document.getElementById('container').style.marginBottom = '20px';
        document.getElementById('slideshow-container').style.height = 'auto'
    }, 500)
    setTimeout(() => {
        x.innerHTML = this.navBar
        x.style.height = '10vh'
        x.style.width = 'calc(100vw - 10vh)'
        x.style.opacity = 1
        window.scrollTo(0, 0)
        
    }, 1000);
    return;

}

slides = document.getElementsByClassName('mySlide')
dots = document.getElementsByClassName("dot");
n = 0
setInterval(function () {
    if (n + 1 >= slides.length) show(0);
    else show(n + 1);
    switchRule(1);
}, 3000);

function show(n) {
    for (let i = 0; i < slides.length; i++) {
        slides.item(i).style.transform = `translate(-${100 * n}vw)`;
    }
    dots[this.n].className = 'dot';
    dots[n].className += " active";
    this.n = n
}
rulePos = 0
function switchRule(n){
    colors = ['#b9613a', '#30536a', '#1b2f3a','#c9724a','#a8502a','#d97a5a','#4a6b8a','#204060','#3a5b7a','#1a2b3a','#2b3f5a','#1c3a4a','#2a4b6a'];
    icons = document.getElementsByClassName('ruleIcon');
    texts = document.getElementsByClassName('ruleText');
    if (rulePos+n<0){
        rulePos = icons.length-1;
    } 
    else if(rulePos+n>=icons.length){
        rulePos = 0;
    }
    else rulePos+=n;
    for (let i = 0; i < icons.length; i++) {
        if (i!=rulePos){
            icons.item(i).style.opacity = 0;
        }else icons.item(i).style.opacity = 1;
        icons.item(i).style.transform = `translate(0,${-100*rulePos}%)`;
        texts.item(i).style.transform = `translate(0,${-100*rulePos}%)`;
    }
    document.getElementById('rules').style.backgroundColor = colors[Math.floor(Math.random()*colors.length)];
}


navBar = `<div class="nav-menu">
        <ul>
            <li><a href="/Faculty/faculty.html">FACULTY</a>
            </li>
            <li><a href="#">ACTIVITIES</a>
                <div class="dropdown">
                    <div class="dropdown-content">
                        <a href="#">Cultural Activities</a>
                        <a href="#">Social Activities</a>
                        <a href="#">Academic Activities</a>
                        <a href="#">Sports Activities</a>
                        <a href="#">British Council Projects</a>
                        <a href="#">Tour and Recreation</a>
                    </div>
                </div>
            </li>
            <li><a href="#">KINDERGARTEN</a>
                <div class="dropdown">
                    <div class="dropdown-content">
                        <a href="#">Infrastructure</a>
                        <a href="#">Activities</a>
                        <a href="#">Admission Criteria</a>
                        <a href="#">Tours and Recreations</a>
                    </div>
                </div>
            </li>
            <li><a href="#">STUDENT'S PORTAL</a>
                <div class="dropdown">
                    <div class="dropdown-content">
                    <a href="#">Student Login</a>
                    <a href="#">Alumni</a>
                    </div>
                </div>
            </li>
            <li><a href="#">GALLERY</a></li>
            <li><a href="#">ACADEMICS</a>
                <div class="dropdown">
                    <div class="dropdown-content">
                        <a href="#">Circulars</a>
                        <a href="#">Admission Criteria</a>
                        <a href="#">Examinations</a>
                    </div>
                </div>
            </li>
            <li>
                <a href="#">ABOUT US</a>
                <div class="dropdown">
                    <div class="dropdown-content">
                        <a href="#">Introduction</a>
                        <a href="#">Vision and mission</a>
                        <a href="#">President's Message</a>
                        <a href="#">Principal's Message</a>
                        <a href="#">Accreditation and Certification</a>
                        <a href="#">Infrastructure</a>
                        <a href="#">Contact Us</a>
                    </div>
                </div>
            </li>
        </ul>
    </div>`