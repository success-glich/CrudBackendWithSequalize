const express = require("express");
const { sequelize } = require("./config/db");
const UserCtl = require("./controllers/UserController");

const app = express();
const port = 3000;


sequelize.sync({ force: false }).then(() => {
    console.log('Database synchronized successfully');
}).catch(err => {
    console.error('Error synchronizing database:', err);
})



app.get("/user-list", UserCtl.list);

app.listen(port, () => console.log(`Server running on port ${port}`))