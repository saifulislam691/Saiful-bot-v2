const fs = require("fs");
module.exports.config = {
  name: "🖕",
    version: "1.1.1",
  hasPermssion: 0,
  credits: "Fun", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("🖕")==0 || event.body.indexOf("🖕🖕")==0 || event.body.indexOf("🖕🖕🖕")==0 || event.body.indexOf("🖕🖕🖕🖕")==0 ) { 
    var msg = {
        body: "আ্ঁঙ্গ্ঁল্ঁ তো্ঁমা্ঁর্ঁ হে্ঁডা্ঁ দি্ঁয়ে্ঁ দি্ঁবো্ঁ",
        attachment: fs.createReadStream(__dirname + `/cache/anguldekaw.mp3`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🔔", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
