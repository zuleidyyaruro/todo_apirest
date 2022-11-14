const express = require('express');
const morgan = require('morgan');
const handleError = require('./middlewares/error');

//routes
const usersRoutes = require('./routes/users.routes');
const tasksRoutes = require('./routes/tasks.routes');
const authRoutes = require('./routes/auth.routes');

//init app
const app = express();

app.use(express.json());
app.use(morgan('tiny'));

//endpoints
app.get('/', (req, res) => {
    res.status(200).json({
        message: "Bienvenidos a mi API Rest de TODOs"
    })
})

app.use('/api/v1', usersRoutes);
app.use('/api/v1', tasksRoutes);
app.use('/api/v1', authRoutes);

app.use(handleError)

module.exports = app;
