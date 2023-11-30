const express = require("express");

const app = express();

const port = 3000;

const UserCtl = require("./controllers/UserController");

app.get("/user-list", UserCtl.list);

app.listen(port, () => console.log(`Server running on port ${port}`))