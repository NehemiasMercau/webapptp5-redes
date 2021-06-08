const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const { param } = require('./routes');

const app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));

app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}))
app.set('view engine', '.hbs');

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}))


app.use(require('./routes/index'));
app.use(require('./routes/book'));
app.use(require('./routes/magazine'));

app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), () => {
    console.log('Server on PORT: ', app.get('port'));
})