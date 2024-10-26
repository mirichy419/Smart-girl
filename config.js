//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "osun, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Queen_Nikka";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/bh2fpj.jpg";
global.devs = "2348142909904";
global.sudo = process.env.SUDO || "2348142909904";
global.owner = process.env.OWNER_NUMBER || "2349120266166";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0NCYWE4c0QxcS96cy9RZUYrbzVZWHBuL0xzQzM3bnl5L0RGaWNkbzNIUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRkI5ZEZmU1UwOThlRzdQT3RVdHhKUnZ1aHRhK1dGZEhSaEl5cmpUa2lnST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPSnpDckxFVTJnc09aMXMxYm8wMEFiVEg2WHpnMExCTGtuM1pMcHNlUWxrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJuUlVQMG45MWpXengzMVFkSGsyRW9zRDFIamxFWHN1TDdoZUh4Zy9MNzNjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9JbDFUTWVNTDk0WUVKVkthSTFhbVpScjhGa2dIMnhBTExrWmpQWWJGMkk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImxySi9SYk5XOFVndWUwU1pvb0hFTFNMQTlwOUptVTlmOVY3YnZFTlRWaDQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkp4bXZqY2pDMVZPVTR1QVlDWFM0UG1EV3Q4QjhNUDZxQTJySXZ3ZVJrWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMXh6bFQrc1NtTUNlVnk2KzlERjJSS3pYQVozWHRZV3hmeGRtNVBrTjZVQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlQxYzI5eEQ2ZXgvVHNwemdzR2JIYThoOEZLeHM0VGFNaUJJdU80bmhTay8wc2NIM0c2NVZodkl1SHkzU2paTHk3ZFRKQ3ZiVWI0VXRaUTZWVmZMampRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjEwLCJhZHZTZWNyZXRLZXkiOiJheGkwTFcyaTFqQ3E1czhkc3ZtT1JqVE5lR1hpZHByN1l4WndKNWtrZmZzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDkxMjAyNjYxNjZAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQUFCM0NGREI5RDcyMUQ2NUJEMUE4QzI1RjVFMzExQkYifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyOTk2MTE4M31dLCJuZXh0UHJlS2V5SWQiOjYxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6NjEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiY3QyREQtNE1SQnk2YXFYTlJnTkhkdyIsInBob25lSWQiOiJjNzE0ZDVkOS1lZjYwLTQ4ZDAtODQ2MC01NzdiOTcwYzFiNzkiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUkybmVvbWx5eXYvZDl1VnBWNHFWT3RLeGV3PSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik9peHYyczhCQ1JXbkVHLy9mK1NRSTY2WkhrMD0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJGUlhQSDVGUiIsIm1lIjp7ImlkIjoiMjM0OTEyMDI2NjE2NjozQHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPemVrWW9ERU0yNTlMZ0dHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJUZDliVzN4SmVzNCtoNTRkY1RUK0NpVHltM3ZEOEEybWZUTU5oYS9HTHk0PSIsImFjY291bnRTaWduYXR1cmUiOiJNd2s4dFR3Y3RWb0IrRC9kSkFYZjlRQlcvbTZGUmV5WStuUzRDaUNZeDR3MUtQVlpCQ0FDSk1JSkxOdFhhc1RTQlpYa1R0MFR5ZHJkd0ZmVnlCcEpEZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiZ2pnaVJsdlNkTi95ek9QVlNQZkM5aUk5UlcvODc4dFk2TDIzd0kybSswV0s4b1IxRTk2U01SWVNqS0hpSnViSWhUbklpNVRHc1FkVExEb0tZUTZmanc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MTIwMjY2MTY2OjNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVTNmVzF0OFNYck9Qb2VlSFhFMC9nb2s4cHQ3dy9BTnBuMHpEWVd2eGk4dSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyOTk2MTE3OSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFORm0ifQ==" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`KING_RICHY™`",
  author: process.env.PACK_AUTHER || "RICHY",
  packname: process.env.PACK_NAME || "KING",
  botname: process.env.BOT_NAME || "KING_RICHY",
  ownername: process.env.OWNER_NAME || "Luminazing",
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
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
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
