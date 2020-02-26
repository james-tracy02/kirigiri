
function setStatus(client) {
  client.user.setActivity(
    `searches in ${client.guilds.size} servers!`,
    { type: 'WATCHING' });
}

module.exports = {
  setStatus,
}
