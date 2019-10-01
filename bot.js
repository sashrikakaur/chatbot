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
                    await context.sendActivity(`I am always up for chat.Conversations are my thing.`);
                    break;
                case "I just wanted to talk" :
                            await context.sendActivity(`I am always up for chat.Conversations are my thing.`);
                break;    
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
