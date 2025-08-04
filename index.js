import express from 'express'



const app = express();
const port = 3001;

let Uname = "Ljupce";
let Unemail = "LjupceBru@mail.com";


app.use(express.urlencoded())
app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Server with express and ejs running on port ${port}`);
})

app.get("/",(req, res) => {
    res.render('index.ejs',{
        day:"Saturday",
        month: "August",
        userN: Uname,
        userE: Unemail,
    });

})

app.get("/list",(req, res) => {
    res.render("listing.ejs",{
        currSec : new Date().getSeconds(),
        items: ["apple","banana","grape"]
    })
})

app.get("/form", (req, res) => {
    res.render("form.ejs",{name: Uname, email: Unemail});
})

app.post("/form", (req, res) => {
    Uname = req.body.name;
    Unemail = req.body.email;
    res.redirect("/");
})


// EJS Tags are:
// <%= variableName %> - for variables, this will be displayed/outputted
// <% console.log("Hello") %> - for Javascript code to be executed, no output displayed in html
// <%- <h1>Hello</h1>  %> - render HTML, only displays the text with the tag format BUT without the tag
// <%% %%> - show the EJS code, meaning that also the '<%' and '%>' will be shown
// <%# comment %> - comments, no code
// <%- include("header.ejs") %> - insert external EJS file

// For checking if a variable is defined, use: locals.variableName ? 


