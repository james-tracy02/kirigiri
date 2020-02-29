
function setStatus(alterEgo) {
  alterEgo.client.user.setActivity(
    `searches in ${alterEgo.client.guilds.size} servers!`,
    { type: 'WATCHING' });
}

module.exports = {
  setStatus,
}
