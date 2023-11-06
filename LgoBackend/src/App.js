const express = require('express');
const cors = require('cors');
const app = express();

const session = require('express-session');

app.use(session({
    secret: 'Sc4aL89xD',
    saveUninitialized: false,
    resave: false
}));

app.use(express.json()); // substituído bodyParser.json()
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static('public'));

app.get('/', (req, res) => {
    const ip = req.ip;
    console.log(ip);
    res.json({ message: ip });
});

// Importe suas rotas aqui

const departmentRoutes = require('./routes/departmentRoutes');
const dailyEntryRoutes = require('./routes/dailyEntryRoutes');
const dailyTotalsRoutes = require('./routes/dailyTotalsRoutes');
const periodeRoutes = require('./routes/periodeRoutes');
const totalDansLaPeriodeRoutes = require('./routes/totalDansLaPeriodeRoutes');
const userRoutes = require('./routes/userRoutes');
const queryGraphique = require('./routes/queryGraphiqueRoutes')


// Use suas rotas com os prefixos corretos
app.use('/api/departments', departmentRoutes);
app.use('/api/dailyEntry', dailyEntryRoutes);
app.use('/api/dailytotals', dailyTotalsRoutes);
app.use('/api/periodes', periodeRoutes);
app.use('/api/totaldanslaperiode', totalDansLaPeriodeRoutes);
app.use('/api/user', userRoutes);
app.use('/api/data', queryGraphique);



app.listen(4081, () => {
    console.log('Server is running on port 4081');
});
