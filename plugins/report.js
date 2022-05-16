let handler = async(m, { conn, text }) => {
    if (!text) throw 'ඔව්නර් වෙත යැවිය යුතු පනිවිඩය ඇතුලත් කරන්න'
    if (text.length > 10) throw 'ඔව්නර් වෙත යැවිය යුතු පනිවිඩය ඇතුලත් කරන්න'
    const laporan = `*「 REPORT 」*\nNomor : wa.me/${m.sender.split`@`[0]}\nPesan : ${text}`
    for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid && v != '94753943957@s.whatsapp.net'))
    m.reply(laporan, jid)
    m.reply(laporan, m.sender) // Mwehehehehe
    m.reply('✔️ඔව්නර් වෙත ඔබගෙ request එක යවන ලදී 🫡')
}
handler.help = ['bug', 'report'].map(v => v + ' <laporan>')
handler.tags = ['info']
handler.command = /^(request|report)$/i

module.exports = handler
