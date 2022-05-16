let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    conn.sendBut(m.chat, `${global.db.data.users[who].limit} ලිමිට් ප්‍රමානය ඉක්මව ගොස් ඇත`, wm, '🥹', '.donasi', m)
}
handler.help = ['limit [@user]']
handler.tags = ['xp']
handler.command = /^(limit)$/i
module.exports = handler
