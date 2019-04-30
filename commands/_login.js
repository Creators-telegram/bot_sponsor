/*CMD
  command: /login
  help: 
  need_reply: true
  auto_retry_time: 
  answer: Inserisci la password
  keyboard: 
  aliases: 
CMD*/

   if(data.message=="Noxius1607"){
     Bot.setProperty("admin_chat", data.chat.chatid, "string")
     Bot.sendMessage("Sei admin ora. Aspetta richieste degli utenti");
   }else{
     Bot.sendMessage("Access denied.");
   }
