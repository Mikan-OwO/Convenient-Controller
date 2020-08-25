const { Client } = require("discord.js");

exports.Controller = class Controller {
  constructor(client: Client) {
  this.client = client
  }
  
  addPage(embed) {
    this.pages.set(this.pages.size, embed)
    return this
  }
}
