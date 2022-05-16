let handler = async (m, { conn, text, participants }) => {
if(!text && !m.quoted) throw 'නම්බර් එකක් 😴'

let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'

await conn.groupParticipantsUpdate(m.chat, [users], 'remove').catch(console.log)
}
handler.help = ['kick','-')].map(v => v + ' @user')
handler.tags = ['group']
handler.command = /^(kick|-)$/i

handler.owner = false
handler.group = true
handler.botAdmin = true


module.exports = handler
