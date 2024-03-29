"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@vendure/core");
const vendure_config_1 = require("./vendure-config");
core_1.runMigrations(vendure_config_1.config)
    .then(() => core_1.bootstrap(vendure_config_1.config))
    .catch(err => {
    console.log(err);
});
