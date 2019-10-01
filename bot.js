// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

const { ActivityHandler } = require('botbuilder');

class EchoBot extends ActivityHandler {
    constructor() {
        super();
        // See https://aka.ms/about-bot-activity-message to learn more about the message and other activity types.
        this.onMessage(async (context, next) => {
            const expression = context.activity.text;
            switch(expression) {
                case "Hey, Are you awake?" :
                    await context.sendActivity(`Yeah, What's up? You know I'm always there for you.`);
                    break;
                case "I just wanted to talk" :
                    await context.sendActivity(`I am always up for chat.Conversations are my thing. Whats on you mind?`);
                    break;
                case "I am not able to sleep" :
                    await context.sendActivity(`Hm, me neither, would you like to know how I fall asleep?`);
                    break;
                case "Yeah" :
                    await context.sendActivity(`I listen to soft music, with eyes closed`);
                    break; 
                case "I don't feel so well. I feel like drinking" :
                    await context.sendActivity(`What makes you feel that way?`);
                    break;
                case "I feel like going out for a drink" :
                    await context.sendActivity(`I think there is a lot going on right now with you. Why don't we talk about it?`);
                    break;
                default : await context.sendActivity(`I see. So how do you feel now?`);
            }

            // By calling next() you ensure that the next BotHandler is run.
            await next();
        });

        this.onMembersAdded(async (context, next) => {
            const membersAdded = context.activity.membersAdded;
            for (let cnt = 0; cnt < membersAdded.length; ++cnt) {
                if (membersAdded[cnt].id !== context.activity.recipient.id) {
                }
            }
            // By calling next() you ensure that the next BotHandler is run.
            await next();
        });
    }
}

module.exports.EchoBot = EchoBot;
