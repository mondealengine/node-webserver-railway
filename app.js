require('dotenv').config();
const express = require("express");
const hbs = require('hbs');

const app = express();
const port = process.env.PORT;

//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

//servir contenido estático
app.use(express.static("public"));


app.get('/',  (req, res) => {
  res.render('home', {
    nombre: 'Montserrat Sancho',
    titulo: 'La vida es bella'
  });
})

app.get("/hola-mundo", (req, res) => {
  res.send("Hola mundo en su respectiva ruta");
});

app.get("/generic", (req, res) => {
  res.render('generic', {
    nombre: 'Montserrat Sancho',
    titulo: 'La vida es bella'
  })
});

app.get("/elements", (req, res) => {
  res.render('elements', {
    nombre: 'Montserrat Sancho',
    titulo: 'La vida es bella'
  })
});

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/404.html");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
