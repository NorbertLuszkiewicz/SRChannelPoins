const ComfyJS = require("comfy.js");

const TWITCHUSER = "dynam1x__";
const TWITCHCHANNELS = "kezman22";
const OAUTH = process.env.OAUTH;
const addSongId = "73e82238-0e67-462f-95ec-0792d35596fd";
const skipSongId = "";

ComfyJS.onChat = (user, message, flags, self, extra) => {
  if (flags.customReward && extra.customRewardId === addSongId) {
    ComfyJS.Say("!sr " + message);
  }

  if (flags.customReward && extra.customRewardId === skipSongId) {
    ComfyJS.Say("!skip");
  }
  message === "srbottest" && ComfyJS.Say("Bot works!", extra.channel);

  console.log(extra.customRewardId, extra.channel);
};

ComfyJS.Init(TWITCHUSER, OAUTH, TWITCHCHANNELS);
