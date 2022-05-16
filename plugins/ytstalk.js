let fetch = require('node-fetch')

let handler = async(m, { conn, text }) => {

  if (!text) return conn.reply(m.chat, 'Harap Masukan Nama channel', m)

  await m.reply('Searching...')
    let res = await fetch(`https://x-restapi.herokuapp.com/api/yt-stalk?username=${text}&apikey=BETA`)
    let json = await res.json()
    if (res.status !== 200) throw await res.text()
    if (!json.status) throw json
    let thumb = await (await fetch(json.thumb)).buffer()
    let hasil = `*── 「 YOU-TUBE STALK 」 ──*

▢ *නම*: ${json.channel}
▢ *Subscriber*: ${json.subscriberCount}
▢ *Verifiedi*: ${json.isVerified}
▢ *Link*: ${json.link}
▢ *තොරතුරු*: ${json.description}
`

    conn.sendFile(m.chat, thumb, 'ytstalk.jpg', hasil, m)
}
handler.help = ['ytstalk','youtubestalk'].map(v => v + ' <channel>')
handler.tags = ['stalk']
handler.command = /^(ytstalk|youtubestalk)$/i

module.exports = handler
