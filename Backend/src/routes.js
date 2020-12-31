const express = require("express");

const multer = require("multer");
const uploadConfig = require("./config/upload");

const controllerSessionUsers = require("./controllers/controllerSessionUsers");
const controllerSessionEstablishment = require("./controllers/controllerSessionEstablishment");
const controllerRegisterUsers = require("./controllers/controllerRegisterUsers");
const controllerRegisterEstablishment = require("./controllers/controllerRegisterEstablishment");
const controllerService = require("./controllers/controllerService");
const controllerNewEstablishment = require("./controllers/controllerNewEstablishment");
const controllerConnections = require("./controllers/controllerConnections");
const controllerForgotPassword = require("./controllers/controllerForgotPassword");
const controllerFavoriteEstablishments = require("./controllers/controllerFavoriteEstablishments");
const controllerQuantifyEstablishments = require("./controllers/controllerQuantifyEstablishments");
const ensureAuthenticated = require("./middlewares/ensureAuthenticated");
// const controllerTest = require('./controllers/controllerTest');

const routes = express.Router();
const upload = multer(uploadConfig);

// sessions
// routes.post('/sessions', controllerSessionUsers.create, controllerSessionEstablishment.create);
routes.post("/sessions/users", controllerSessionUsers.create);
routes.post("/sessions/establishments", controllerSessionEstablishment.create);
routes.post("/forgotPassword", controllerForgotPassword.create);

//register
routes.post("/users", controllerRegisterUsers.create);
routes.post("/establishments", controllerRegisterEstablishment.create);

//List users
routes.get("/users", controllerRegisterUsers.index);
routes.get("/establishments", controllerRegisterEstablishment.index);

//middleware auth
routes.use(ensureAuthenticated);

//new establishments

routes.get("/newEstablishments", controllerNewEstablishment.index);
routes.get("/newEstablishments/:id", controllerNewEstablishment.show);
routes.post(
  "/newEstablishments",
  upload.array("images"),
  controllerNewEstablishment.create
);

//quantify establishments

routes.get("/listEstablishments", controllerQuantifyEstablishments.index);
routes.get("/listEstablishments", controllerQuantifyEstablishments.show);

//favorites establishments

routes.get("/favoriteEstablishments", controllerFavoriteEstablishments.index);
routes.post("/favoriteEstablishments", controllerFavoriteEstablishments.create);

//service

routes.get("/services", controllerService.index);
routes.post("/services", controllerService.create);
routes.delete("/services/:id", controllerService.delete);

//connections

routes.get("/connections", controllerConnections.index);
routes.post("/connections", controllerConnections.create);

module.exports = routes;
