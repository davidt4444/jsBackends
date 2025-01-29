const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const postRoutes = require('./routes/post');
app.use('/posts', postRoutes);

const sequelize = require('./database');
sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`Server running on port ${port} at http://localhost:${port}`);
    });
});
// app.listen(port, () => {
//     console.log(`Server running on port ${port}`);
// });

