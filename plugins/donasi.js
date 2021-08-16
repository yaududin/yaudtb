let handler = async m => m.reply(`
┌〔 Donasi • Pulsa 〕
├ Indosat [081528767868]
└────

┌〔 Donasi • Emoney 〕
├ OVO, Dana [081528767868]
├ https://saweria.co/YaudPloit
└────
`.trim())
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
