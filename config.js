/*
    Created & Base By ArxzyDev
    Jual Sc? Neraka Paling Bawah
    My Contact https://wa.me/6289513081052
    
   Notes:
   Jika Ingin Recode Silakan Tapi Ingat Creditnya
   Sc Adrian-MD Akan Terus Di Update.
   Jika Ingin Beli Apikey Chat Owner Lolhuman
   
*/

const fs = require('fs')
const chalk = require('chalk')

global.apikey = 'Danwfrostkey' // LOLHUMAN
global.rosekey = 'cba86fac49e37d63f9bd4561' // ROSE
global.keyai = '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' // https://platform.openai.com/account/api-keys

//—————「 Set Nama Bot & Own 」—————//
global.namabot = 'OpaFanss'
global.namaowner = 'Gr'
global.wagc = "https://chat.whatsapp.com/GBmPMkbE6ch1EjJzz3SSN7"

//—————「 Setting Owner 」—————//
global.owner = ['628815109103']
global.nomerowner = '628815109103'
global.premium = ['6283142317462']

//—————「 Set Wm 」—————//
global.packname = 'OpaFanss'
global.author = 'Bot: +628815109103'
global.prefa = ['', '.']
global.sp = '•'

//—————「 Set Message 」—————//
global.mess = {
    success: '🤗Done, Oke Desu~',
    admin: '❗Perintah Ini Hanya Bisa Digunakan Oleh Admin Group !',
    botAdmin: '❗Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group !',
    owner: '❗Perintah Ini Hanya Bisa Digunakan Oleh Owner !',
    group: '❗Perintah Ini Hanya Bisa Digunakan Di Group Chat !',
    private: '❗Perintah Ini Hanya Bisa Digunakan Di Private Chat !',
    bot: '🤖 Fitur Khusus Pengguna Nomor Bot !',
    wait: '⏳ Sedang Di Proses !',
    endLimit: '🕊️ Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12 !\n\n🎯 *Premium Cuma 3k Permanen* 😋\n\n🍂 *Subscribe Channel Owner Pakai 10 Akun Gratis Premium Bot (Sertakan Bukti)* ❗',
    error: '🚫 Fitur Sedang Error !',
    prem: '🚫 Fitur Khusus Premium!\n\n♨️ Buy Premium Cuma 5k Permanen',
}

//—————「 Set Limit 」—————//
global.limitawal = {
    premium: "Infinity",
    free: 10
}

//—————「 Set Image 」—————//
global.imageurl = 'https://telegra.ph/file/19e41947c0a6ae28dbf62.jpg'
global.link = 'https://youtube.com'
global.thumb = fs.readFileSync('./media/koneko.jpg')

//—————「 Batas Akhir 」—————//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
