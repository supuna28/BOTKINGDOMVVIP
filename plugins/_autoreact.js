let handler = async (m, { conn, text }) => {
  
  conn.sendMessage(m.chat, {
        react: {
          text: `${pickRandom(['๐จ', '๐ฅต', '๐ฑ', '๐ฆ', '๐', '๐ค','๐ฟ','๐คจ','๐ฅด','๐','๐', '๐','๐'])}`,
          key: m.key,
        }})
  
}

handler.customPrefix = /^(เทเทเถบเท|?|alive|.alive|ko|bot|y|xxx|porn|adick|banh|dek|turu|yntkts|ajg|kontol|ngocok|p)$/i
handler.command = new RegExp

handler.exp = 3

module.exports = handler

function pickRandom(list) {
   return list[Math.floor(Math.random() * list.length)]
}
