import { CharacterKey } from "./types/dormitoryCharacter"

export const APP_VERSION = "0.14.4"

export const characterKeys: CharacterKey[] = [
  "四国めたん",
  "ずんだもん",
  "春日部つむぎ",
  "雨晴はう",
  "波音リツ",
  "玄野武宏",
  "白上虎太郎",
  "青山龍星",
  "冥鳴ひまり",
  "九州そら",
  "モチノキョウコ",
  "剣崎雌雄",
  "WhiteCUL",
  "後鬼",
  "No7",
  "ちび式じい",
  "櫻歌ミコ",
  "小夜_SAYO",
  "ナースロボ＿タイプＴ",
  "聖騎士紅桜",
]

export type CharacterInfoEntry = {
  name: string
  id: string
}

// NOTE:
// このデータの一部を gatsby-node.ts の sourceNodes 内でgraphqlへ登録しています
// （実際に登録されるデータは gatsby-node.ts を参照）
// npm run develop中にこれを書き換えた場合は再起動しないとgraphqlに反映されないので注意
export const characterInfos: {
  [key in CharacterKey]: CharacterInfoEntry
} = {
  四国めたん: {
    name: "四国めたん",
    id: "shikoku_metan",
  },
  ずんだもん: {
    name: "ずんだもん",
    id: "zundamon",
  },
  春日部つむぎ: {
    name: "春日部つむぎ",
    id: "kasukabe_tsumugi",
  },
  雨晴はう: {
    name: "雨晴はう",
    id: "amehare_hau",
  },
  波音リツ: {
    name: "波音リツ",
    id: "namine_ritsu",
  },
  玄野武宏: {
    name: "玄野武宏",
    id: "kurono_takehiro",
  },
  白上虎太郎: {
    name: "白上虎太郎",
    id: "shirakami_kotarou",
  },
  青山龍星: {
    name: "青山龍星",
    id: "aoyama_ryusei",
  },
  冥鳴ひまり: {
    name: "冥鳴ひまり",
    id: "meimei_himari",
  },
  九州そら: {
    name: "九州そら",
    id: "kyushu_sora",
  },
  モチノキョウコ: {
    name: "もち子さん",
    id: "mochikosan",
  },
  剣崎雌雄: {
    name: "剣崎雌雄",
    id: "kenzaki_mesuo",
  },
  WhiteCUL: {
    name: "WhiteCUL",
    id: "white_cul",
  },
  後鬼: {
    name: "後鬼",
    id: "goki",
  },
  No7: {
    name: "No.7",
    id: "number_seven",
  },
  ちび式じい: {
    name: "ちび式じい",
    id: "chibishikiji",
  },
  櫻歌ミコ: {
    name: "櫻歌ミコ",
    id: "ouka_miko",
  },
  小夜_SAYO: {
    name: "小夜/SAYO",
    id: "sayo",
  },
  ナースロボ＿タイプＴ: {
    name: "ナースロボ＿タイプＴ",
    id: "nurserobo_typet",
  },
  聖騎士紅桜: {
    name: "†聖騎士 紅桜†",
    id: "horinaito_benizakura",
  },
}