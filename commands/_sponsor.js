/*CMD
  command: /sponsor
  help: 
  need_reply: true
  auto_retry_time: 
  answer: Inserisci l'username del canale:
  keyboard: 
  aliases: sponsor
CMD*/

User.setProperty("canale", data.message, "string");
Bot.sendMessage ("Ok, ora manda la @ del founder/ admin del canale o solo il nome");
Bot.runCommand ('/fondatore')
