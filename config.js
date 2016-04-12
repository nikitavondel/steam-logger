var config = {};

config.storageFile = "data";

config.SteamName = process.env.SteamName || "";
config.SteamPass = process.env.SteamPass || "";

config.reloadInterval = 30000;

config.yourPrefix = "Me:   ";
config.theirPrefix = "Them: ";

module.exports = config;