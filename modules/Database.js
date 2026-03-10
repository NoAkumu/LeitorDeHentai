const { default: KeyvSqlite } = require("@keyv/sqlite");
const { default: Keyv } = require("keyv");
const { database_path } = require("./../config.json")
module.exports = {
    keyv: new Keyv(new KeyvSqlite(`sqlite://${database_path}`)),
}