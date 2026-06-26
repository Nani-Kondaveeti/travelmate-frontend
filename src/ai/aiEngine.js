import knowledgeBase from "./knowledgeBase";

export function getAIResponse(message){

const input = message.toLowerCase();

for(const item of knowledgeBase){

for(const word of item.keywords){

if(input.includes(word.toLowerCase())){

return item.reply;

}

}

}

return "🤖 Sorry, I couldn't understand that. Please ask me about travel, bookings, destinations, hotels or packages.";

}