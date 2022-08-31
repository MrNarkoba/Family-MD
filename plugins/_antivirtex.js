let handler = m => m

handler.all = async function (m, { isBotAdmin }) {
    
    let vir = /PLHIPS|๒|๑|⃟|Đ.Δ.Μ|   |৭/i.exec(m.text)
    if (vir || m.text.length > 30000 ) { //Auto clear jika terdapat pesan yg tidak dapat dilihat oleh whatsapp web
        let log = {
            key: m.key,
            content: m.msg,
            sender: m.sender
        }
        
        await conn.sendMessage(m.chat, { delete: m.key })
     //   await conn.sendMessage(m.key.remoteJid, 'ngapain dek', m)
      for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                    let data = (await conn.onWhatsApp(jid))[0] || {}
                    if (data.exists)
                    m.reply(`@${m.sender.split`@`[0]} telah mengirim virus`.trim(), data.jid, { mentions: [m.sender] })
                } 
    }
}

module.exports = handler
