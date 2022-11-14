const app = require('./app');
const db = require('./utils/database');
const initModels = require('./models/initModels');

initModels();

db.authenticate()
    .then(() => console.log('Database authenticated'))
    .catch((e) => console.log(e));

db.sync()
    .then(() => console.log('Database synced'))
    .catch((e) => console.log(e))

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
});
