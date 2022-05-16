let finder = require('lyrics-finder')
let handler = async (m, { text, usedPrefix, command }) => {
  if (!text) throw `උදාහරන:\n${usedPrefix + command} ගීතයෙ නම`
  let res = await finder("", text)
  if (!res) throw eror

  m.reply(res)
}
handler.help = ['lirik'].map(v => v + ' <teks>')
handler.tags = ['internet']
handler.command = /^(lirik|lyrics?)$/i

module.exports = handler