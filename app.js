const sequelize = require("./models");
const cors = require('cors');
const express = require('express');

console.log('Checking Database connection...');

const app = express();
// Cross Origin Resource Sharing -> CORS
// Permet de faire en sorte d'autoriser un Front-End
// à utiliser notre API
// Express autorise le Cross Origin
app.use(cors());

// Configurer notre serveur pour utiliser ces routeurs
const taskRouter = require('./routers/taskRouter');
app.use('/tasks', taskRouter);

const userRouter = require('./routers/userRouter');
app.use('/users', userRouter);

const tagRouter = require('./routers/tagRouter');
app.use('/tags', tagRouter);


// Je veux accepter du JSON en envoi d'informations
app.use(express.json());

const PORT = 4000;

console.log('Checking Database connection...');

sequelize.authenticate()
// Si il arrive à s'authentifier à la BDD
.then(() => {
    console.log("Database connection OK!");

    app.listen(PORT, () => {
        console.log(`Web server running at localhost:${PORT}`);
    });
})


.catch((err) => {
    console.log(err);
})