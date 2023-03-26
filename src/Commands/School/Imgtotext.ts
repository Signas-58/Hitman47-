import { proto } from '@adiwajshing/baileys'
import { GoogleAPI } from '../../lib/GoogleAPI'
import { BaseCommand, Command, Message } from '../../Structures'

@Command('imgtotext', {
  description: 'send the picture so it can be text',
  category: 'school',
  usage: 'imgtotext [reply gambar atau kirim gambar]',
  cooldown: 20,
  dm: true
})
export default class extends BaseCommand {
  public override execute = async (M: Message): Promise<void> => {
    if (!this.client.config.googleApiEnable)
      return void M.reply('add your API ')
    if (
      !M.hasSupportedMediaMessage &&
      !M.quoted?.hasSupportedMediaMessage
    )
      return void M.reply('Media hitman47')

    M.reply('*Processing!!!*')
    let buffer!: Buffer
    if (
      M.hasSupportedMediaMessage &&
      M.message.message.imageMessage
    ) {
      buffer = await M.downloadMediaMessage(
        M.message.message as proto.IMessage
      )
    } else if (
      M.quoted &&
      M.quoted.message.imageMessage &&
      M.quoted.hasSupportedMediaMessage
    ) {
      buffer = await M.downloadMediaMessage(M.quoted.message)
    } else {
      return void M.reply('Media tidak support!, hanya boleh gambar')
    }

    const googleApi = new GoogleAPI(
      this.client.config.googleApiOption
    )
    const text = await googleApi.imageToText(buffer)
    if (text.length < 1) return void M.reply('Text tidak ditemukan')
    return void M.reply(text)
  }
}
