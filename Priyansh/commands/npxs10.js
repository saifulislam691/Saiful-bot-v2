const fs = require("fs");
module.exports.config = {
	name: "npxs10",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Simamto", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "npxs10",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("🫡")==0 || event.body.indexOf("🤗")==0 || event.body.indexOf("😓")==0 || event.body.indexOf("🫡")==0) {
		var msg = {
				body: "কি হইছে রে 😒",
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🙄", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
