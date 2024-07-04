const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "263773219130" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "263773219130";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_49_07_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDgwLFxuICAgICAgICAzOCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDQsXG4gICAgICAgIDk4LFxuICAgICAgICA3MCxcbiAgICAgICAgMTcyLFxuICAgICAgICA4NCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjIyLFxuICAgICAgICA1MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjI4LFxuICAgICAgICA1OCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE3LFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDM2LFxuICAgICAgICAxODcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTk3LFxuICAgICAgICAzNyxcbiAgICAgICAgNzksXG4gICAgICAgIDQyLFxuICAgICAgICA5NCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyNyxcbiAgICAgICAgMjQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTMyLFxuICAgICAgICA5OSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTUyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNzksXG4gICAgICAgIDEzLFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgODQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTgxLFxuICAgICAgICA4NSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDY1LFxuICAgICAgICAyNCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNjksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjE2LFxuICAgICAgICA2MCxcbiAgICAgICAgMjM4LFxuICAgICAgICA3MSxcbiAgICAgICAgMjM2LFxuICAgICAgICA2MSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE5LFxuICAgICAgICA1NixcbiAgICAgICAgMTUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTUyLFxuICAgICAgICA0MixcbiAgICAgICAgMTgzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTMyLFxuICAgICAgICAyNCxcbiAgICAgICAgNzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI1LFxuICAgICAgICA4NixcbiAgICAgICAgMTg0LFxuICAgICAgICA2OCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDQwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTg2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDcyLFxuICAgICAgICA5MyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjAwLFxuICAgICAgICA0OSxcbiAgICAgICAgMzEsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNjksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMzEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNjYsXG4gICAgICAgIDk0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjA2LFxuICAgICAgICA1NCxcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMixcbiAgICAgICAgMjIzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxODAsXG4gICAgICAgIDQwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjE2LFxuICAgICAgICAxODMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTY5LFxuICAgICAgICAzOSxcbiAgICAgICAgMTMyLFxuICAgICAgICA4NSxcbiAgICAgICAgMjgsXG4gICAgICAgIDE0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTE2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIxNixcbiAgICAgICAgOTMsXG4gICAgICAgIDU3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTA2LFxuICAgICAgICA3MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMzUsXG4gICAgICAgIDU0LFxuICAgICAgICA5NixcbiAgICAgICAgMjIwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNTIsXG4gICAgICAgIDkyLFxuICAgICAgICA2MyxcbiAgICAgICAgNDIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjM3LFxuICAgICAgICA1NCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDU3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDM2LFxuICAgICAgICAxODYsXG4gICAgICAgIDM1LFxuICAgICAgICA3MCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMSxcbiAgICAgICAgMTIwLFxuICAgICAgICAzMCxcbiAgICAgICAgMTI1LFxuICAgICAgICA4LFxuICAgICAgICA2NSxcbiAgICAgICAgMTU1LFxuICAgICAgICA2MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgODhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDYzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcxLFxuICAgICAgICA0MyxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDc4LFxuICAgICAgICAyOSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNSxcbiAgICAgICAgMTQzLFxuICAgICAgICA4OCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDExMyxcbiAgICAgICAgNTQsXG4gICAgICAgIDc0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNTEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMixcbiAgICAgICAgMTg5LFxuICAgICAgICAxMTksXG4gICAgICAgIDE0MSxcbiAgICAgICAgOTAsXG4gICAgICAgIDM0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDc3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTA3LFxuICAgICAgICA4LFxuICAgICAgICA4OSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTk0LFxuICAgICAgICA5MixcbiAgICAgICAgMTcyLFxuICAgICAgICAyNSxcbiAgICAgICAgOTcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyNCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE2NSxcbiAgICAgICAgOTMsXG4gICAgICAgIDk0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjE4LFxuICAgICAgICA3MyxcbiAgICAgICAgMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE5MSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI1bElUU1JUMHN4VEdISk9lMHFkNS9NZ2Zvc2lYUlFPZmExT3VHRllKeXpRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIyTlVjUTAxZ1MyT1NhbzA5SFptUjBnXCIsXG4gIFwicGhvbmVJZFwiOiBcImViZTA0ZmMxLTY3MmQtNDVlYS1iZTg3LTEzMzc3NjUxODBmOFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTQsXG4gICAgICAzNSxcbiAgICAgIDk0LFxuICAgICAgMTkxLFxuICAgICAgNzUsXG4gICAgICAxMjcsXG4gICAgICAyNDAsXG4gICAgICAyNDQsXG4gICAgICAxMjIsXG4gICAgICAyMjIsXG4gICAgICAxMjYsXG4gICAgICAyMzYsXG4gICAgICAyNCxcbiAgICAgIDI1NSxcbiAgICAgIDYxLFxuICAgICAgMzMsXG4gICAgICAyMTcsXG4gICAgICAyMTIsXG4gICAgICA3NCxcbiAgICAgIDE3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwOSxcbiAgICAgIDIxLFxuICAgICAgMTc5LFxuICAgICAgNTgsXG4gICAgICA0MSxcbiAgICAgIDIwMCxcbiAgICAgIDIxLFxuICAgICAgNjcsXG4gICAgICA5NyxcbiAgICAgIDE3NSxcbiAgICAgIDI2LFxuICAgICAgMTMxLFxuICAgICAgOTAsXG4gICAgICAxNzUsXG4gICAgICAxNjgsXG4gICAgICAyMjAsXG4gICAgICA2OSxcbiAgICAgIDIxOSxcbiAgICAgIDE5MCxcbiAgICAgIDE0MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJRQkVHMlBHN1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjYzNzczMjE5MTMwOjg4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMzU3NTU2NDUwOTE5NDQ6ODhAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTDZ5MlBNSEVOeXNqTFFHR0FRZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJldWp6N2hhSmRFakUvQkZkTTd5S1BQYXQ1MmhTUFV1RmVZMGJyNU1XU0dNPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjgxbWxYdCttcDNOcHNJU2ltcFlsQTNJSXl3TUlkYTRQREp2ZjV3cTNxZFM0a3NYd2hDMW5lc0Z0UnhmNVg5U3I1djNlY3gwRTNteU4rSlZ4SVR0d0J3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImRac2o4ZjJ4UFBuSFlObXZ5a1NqVm5TcU9VeERONmZVZGhtYlo4TGV1ekQzZENEbmsrREdrQkpHL3FQaFZJdE1SM3pKeVBGWU9hbnFmWTBCTUtxSkR3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI2Mzc3MzIxOTEzMDo4OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA3MixcbiAgICAgICAgICA5OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5ODY2OTc1XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "DANTINA ENTERTAINMENT",
  ownername:process.env.OWNER_NAME|| "DANTINA",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
