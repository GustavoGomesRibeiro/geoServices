const express = require("express");

const multer = require("multer");
const uploadConfig = require("./config/upload");

const controllerSessionUsers = require("./controllers/controllerSessionUsers");
const controllerSessionEstablishment = require("./controllers/controllerSessionEstablishment");
const controllerRegisterUsers = require("./controllers/controllerRegisterUsers");
const controllerRegisterEstablishment = require("./controllers/controllerRegisterEstablishment");
const controllerService = require("./controllers/controllerService");
const controllerSearch = require("./controllers/controllerSearch");
const controllerCompany = require("./controllers/controllerCompany");
const controllerImages = require("./controllers/controllerImages");
const controllerForgotPassword = require("./controllers/controllerForgotPassword");
const controllerFavoriteEstablishments = require("./controllers/controllerFavoriteEstablishments");
const controllerQuantifyEstablishments = require("./controllers/controllerQuantifyEstablishments");
const ensureAuthenticated = require("./middlewares/ensureAuthenticated");

const routes = express.Router();
const upload = multer(uploadConfig);

// sessions
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

routes.get("/company", controllerCompany.index);
routes.get("/company/:id", controllerCompany.show);
routes.post("/company", upload.array("images"), controllerCompany.create);

//quantify establishments

routes.get("/listEstablishments", controllerQuantifyEstablishments.index);
routes.get("/listEstablishments", controllerQuantifyEstablishments.show);

//favorites establishments

routes.get("/favoriteEstablishments", controllerFavoriteEstablishments.index);
routes.get(
  "/favoriteEstablishments/:id",
  controllerFavoriteEstablishments.show
);
routes.post("/favoriteEstablishments", controllerFavoriteEstablishments.create);
routes.delete(
  "/favoriteEstablishments/:id",
  controllerFavoriteEstablishments.delete
);

//service

routes.get("/services", controllerService.index);
routes.get("/services/:id", controllerService.show);
routes.post("/services", controllerService.create);
routes.delete("/services/:id", controllerService.delete);

//search
routes.get("/search", controllerSearch.index);

//Images
routes.get("/images", controllerImages.index);
routes.get("/images/:id", controllerImages.show);
routes.post("/images", upload.array("images"), controllerImages.create);

module.exports = routes;
