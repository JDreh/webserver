const express = require("express");

let webserver = express();

webserver.use(express.json());

webserver.get("/", (_, res) => {
	res.sendFile("index.html", { root: `${__dirname}/public` });
});

webserver.get("/style.css", (_, res) => {
	res.sendFile("style.css", { root: `${__dirname}/public` });
});

webserver.get("/hrm", (_, res) => {
	res.sendFile("index.html", { root: `${__dirname}/public/hrm` });
});

webserver.get("/hrm/grapes", (_, res) => {
	res.sendFile("grapes.html", { root: `${__dirname}/public/hrm` });
});

webserver.get("/trifold.css", (_, res) => {
   res.sendFile("trifold.css", { root: `${__dirname}/public` });
});

webserver.get("/hrm/riesling", (_, res) => {
	res.sendFile("riesling.html", { root: `${__dirname}/public/hrm` });
});

webserver.get("/hrm/nebbiolo", (_, res) => {
	res.sendFile("nebbiolo.html", { root: `${__dirname}/public/hrm` });
});

webserver.get("/hrm/merlot", (_, res) => {
	res.sendFile("merlot.html", { root: `${__dirname}/public/hrm` });
});

webserver.get("/hrm/newzealand", (_, res) => {
	res.sendFile("NewZealand.html", { root: `${__dirname}/public/hrm` });
});

webserver.listen(3000, () => console.log("Web server started."));
