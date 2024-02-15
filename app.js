const express = require('express');
const app = express();
const path = require('path');
// Express'e HTML dosyalarını nerede bulabileceğini belirtin
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.urlencoded({ extended: false }));

app.use("/memet", async function (req, res,next) {
    res.render("users/memet");
});

app.use("/ceyda", async function (req, res,next) {
    res.render("users/ceyda");
});
app.use("/", async function (req, res,next) {
    res.render("users/blogs");
});



app.listen(3000, function() {
    console.log("listening on port 3000");
});
