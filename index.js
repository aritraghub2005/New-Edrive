const express = require('express')
const path = require('path');
const app = express()
const port = 2000;
app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.listen(port, () => {
    console.log(`server working on port ${port}`);
})
app.get('/', (req, res) => {
    res.render('index')
})
app.get('/home', (req, res) => {
    res.render('home');
});
app.get('/verify', (req, res) => {
    res.render('verify');
});
app.get('/about', (req, res) => {
    res.render('about');
});
app.get('/contact', (req, res) => {
    res.render('contact');
});
app.get('/register', (req, res) => {
    let { name, email, dob, license } = req.query;
    console.log(`Name: ${name}, Email: ${email}, DOB: ${dob}, License: ${license}`);
    res.send(`Registration received for ${name}
    <h3> Here are your details</h3>
    Name: ${name}, Email: ${email}, DOB: ${dob}, pass: ${license}`
    );
});
// window.onscroll = function() {
//     const navbar = document.querySelector('.navbar');
//     if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//         navbar.style.backgroundColor = "rgba(0, 0, 0, 0.8)"; // Change to a semi-transparent black
//     } else {
//         navbar.style.backgroundColor = "transparent"; // Reset to transparent
//     }
// };
