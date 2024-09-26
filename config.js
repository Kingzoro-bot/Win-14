//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "kingdavid23565@gmail.com";
global.location = "Lagos, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/STAR-KING0/Queen_Alya";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "./lib/alya.jpg";
global.devs = "2348100835767";
global.sudo = process.env.SUDO || "2349160230392";
global.owner = process.env.OWNER_NUMBER || "2348100835767";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "./lib/alya.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://alya-pair.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUYvWTRWSEx0d2Z5a1pnWEo2Smx6MzFBZ3IzYnhWcitNMGY1ZTdVRDIyaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMHBOL2tqeEthUFQrWlBzN3BqUzFxNHdTeHhrSXMrbXBOWUVpYzI3cVlXZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzT0RNZDlhK0I2bnNrbzNqaUEzQk5HZDNrSzBTVWptK24yOGpUQkFRWjA4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIvVTdXbUVnVWgrZEcwMzNRZ283T1FaZ3ltM0JmQ2ZGdy9QNmlDUllOb3pVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9EZFVqR3N4REtubitvVFg0UDRoWEE4dm1UaVMxVDhaRzNNL1RHK1pJVTQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJmRUVpVkJOdjBIdG91VkZBYThsUTFkWUxSc2xLZklrQlJSSlpWbUZHajA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ09neEdCU2VBNkhjNFFuVUMydklYdU1sMnB0UHNhMjFTd1dRRzNjVjlGUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL01PRTZxeUZ6Yk5HTkNYcHIxSzB5MWlYdmhJZ2YyZk1mby9KdXhaT2wzcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkpFNTc3OE43Y0Y2QU1JM0F2akdiV0lyK1FkUWRFNDY1UXAxTFpMbTU0RDBQYVpMS2NwVi9yTi91dTZVT2V6akJnWnNQbnNLc2pqWVpVdFVRRERXZmhRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjI4LCJhZHZTZWNyZXRLZXkiOiJQRXNwMnk1VnYwdkltWFNxOWFJVnM2RDdPYVRKM2xrcm1FVmV1Rm1ZSElrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDkxNjAyMzAzOTJAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMDhGQTAwMEJGRDkwMTA3NTY3NkNCQjE3QzkzOTkyNzgifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyNzM2OTM1MX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoidFlkaUdWOWtTdmFfcGxUNWdlemgzdyIsInBob25lSWQiOiIwZDMyM2I0OC00YjhlLTQzNTgtYmM4ZC1hNmJiNDBkMzFkYmEiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK2lsY1VwOTJtS2ExbHVqVXd4bURSaTVXMHBRPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InV1MnNnb0lDcFRrUDlTb084QW5leDRoU0x6ND0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJWODdDOVRTQSIsIm1lIjp7ImlkIjoiMjM0OTE2MDIzMDM5MjoxNUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLjg6HhtIXhtIDJtMmq4bSHyp8gMXDjhaTsm4MifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BUZ3FzQUZFUFNnMXJjR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImllTTVyRHpTcFBTblZQemplOElWSlluTFNwcUtIbEd3VzR5SFA0RjZ4ZzA9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlgrSUc5SUNleXRSMXBHcjRhYThZYmJYL0FyUzVJOXhGck1kVmZObTQvbXh3K2dqaW0yTjRLV09LVkV4c0JpL3lCWm9YbExiYTE4RjlCemNnMnJDOUF3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJWTmtEbUNjVnRHcjhIVHk5T2JNQ0dKb3MxSitoVjF4QmVMVHZwcTVZd0ViODZqalpoeThMcW1pTGE2bFpXM3RBaHhKWEZTYTQ0TUpHZ3p5RVBFOUlndz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDkxNjAyMzAzOTI6MTVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWW5qT2F3ODBxVDBwMVQ4NDN2Q0ZTV0p5MHFhaWg1UnNGdU1oeitCZXNZTiJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNzM2OTM0NiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFIUHkifQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "+",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ALYA™`",
  author: process.env.PACK_AUTHER || "QUEEN_ALYA",
  packname: process.env.PACK_NAME || "A L Y A",
  botname: process.env.BOT_NAME || "QUEEN_ALYA",
  ownername: process.env.OWNER_NAME || "STAR KING",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "A L Y A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
