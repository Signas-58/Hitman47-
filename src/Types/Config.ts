import { google } from '@google-cloud/text-to-speech/build/protos/protos.js'
import { IChatGPTOption } from '../lib/OpenAI.js'

export interface IGoogleOption {
  voiceLanguage: string
  voiceGender: google.cloud.texttospeech.v1.SsmlVoiceGender
}

export interface IConfig {
  /**name of your bot */
  name: string
  /**prefix of your bot */
  prefix: string
  /**session of the bot */
  session: string
  /**api from brainshop for chat bot */
  chatBotUrl: string
  /**number of the users who's the bot admins of the bot */
  mods: string[]
  /**development mode */
  isDevelopment: boolean
  /**openai key */
  openAIAPIKey: string
  /**organization */
  organization: string
  /**chatgpt option */
  chatGPTOption: IChatGPTOption
  /**chatgpt option */
  chatGPTSystem: string
  /**use google api */
  googleApiEnable: boolean
  /**google api option */
  googleApiOption: IGoogleOption
  /**about bot */
  aboutBot: string
  /**remove bg key */
  removeBgKey: string
  /** JIDS of the support groups */
    supportGroups: string[]
    /** JID of the admins group */
    adminsGroup: string
    /** API for google */
    gkey: string
}
