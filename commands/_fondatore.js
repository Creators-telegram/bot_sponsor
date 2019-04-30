/*CMD
  command: /fondatore
  help: 
  need_reply: true
  auto_retry_time: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

User.setProperty("fondorate", data.message, "string");
canale = User.getProperty ("canale")
fondorate = User.getProperty ("fondorate")
var admin_chat = Bot.getProperty("admin_chat");
if(admin_chat){
  need_reply: true;
  fondatore = message
  cur_user = "@" + user.username + "";
  msg = "➠ Richiesta da: " + cur_user + "\n" + "➠ Canale: " + canale + "\n➠ Fondatore: "+ fondatore;
  Bot.setProperty("cur_user_chat", chat.chatid, "string");
  Bot.setProperty("cur_user", cur_user, "string");
  Bot.sendMessageToChatWithId(admin_chat, msg);
Bot.sendMessage("✅ Fatto! \n\n _creato da:_ @creatoredigruppi")

}else{
   Bot.sendMessage("Scusa ma ancora non di sono registrati admin");
}
