/** Implementation of the presentation of the audio player */
var CONST = { 
  HOST: { Home: "https://null-home.github.io/n/u/l/l/", Music: "https://null-music.github.io/n/u/l/l/", Library: "https://null-library.github.io/n/u/l/l/", } ,
  TYPE:{Tags:'Tags',Artists:'Artists',Albums:'Albums'}
}; 
var Songs=[
  {
    "ID": 0,
    "Title": "Flares",
    "FileName": "D:\\Music\\Music\\EDM-High\\01 Flares.m4a",
    "ArtistID": 0,
    "AlbumID": 0,
    "TagID": 0
  },
  {
    "ID": 1,
    "Title": "Awakening",
    "FileName": "D:\\Music\\Music\\EDM-High\\Awakening.mp3",
    "ArtistID": 1,
    "AlbumID": 1,
    "TagID": 0
  },
  {
    "ID": 2,
    "Title": "Close - Brooks Remix",
    "FileName": "D:\\Music\\Music\\EDM-High\\Close - Brooks Remix.mp3",
    "ArtistID": 2,
    "AlbumID": 2,
    "TagID": 0
  },
  {
    "ID": 3,
    "Title": "Cloud 9",
    "FileName": "D:\\Music\\Music\\EDM-High\\Cloud 9.mp3",
    "ArtistID": 3,
    "AlbumID": 3,
    "TagID": 0
  },
  {
    "ID": 4,
    "Title": "Colors",
    "FileName": "D:\\Music\\Music\\EDM-High\\Colors.mp3",
    "ArtistID": 4,
    "AlbumID": 4,
    "TagID": 0
  },
  {
    "ID": 5,
    "Title": "Energy Drink",
    "FileName": "D:\\Music\\Music\\EDM-High\\Energy Drink.mp3",
    "ArtistID": 5,
    "AlbumID": 5,
    "TagID": 0
  },
  {
    "ID": 6,
    "Title": "Energy",
    "FileName": "D:\\Music\\Music\\EDM-High\\Energy.mp3",
    "ArtistID": 6,
    "AlbumID": 6,
    "TagID": 0
  },
  {
    "ID": 7,
    "Title": "Everlasting",
    "FileName": "D:\\Music\\Music\\EDM-High\\Everlasting.mp3",
    "ArtistID": 7,
    "AlbumID": 7,
    "TagID": 0
  },
  {
    "ID": 8,
    "Title": "Fire",
    "FileName": "D:\\Music\\Music\\EDM-High\\Fire.mp3",
    "ArtistID": 6,
    "AlbumID": 8,
    "TagID": 0
  },
  {
    "ID": 9,
    "Title": "Frisbee",
    "FileName": "D:\\Music\\Music\\EDM-High\\Frisbee.mp3",
    "ArtistID": 8,
    "AlbumID": 9,
    "TagID": 0
  },
  {
    "ID": 10,
    "Title": "Frontier",
    "FileName": "D:\\Music\\Music\\EDM-High\\Frontier.mp3",
    "ArtistID": 9,
    "AlbumID": 10,
    "TagID": 0
  },
  {
    "ID": 11,
    "Title": "Fuck Off",
    "FileName": "D:\\Music\\Music\\EDM-High\\Fuck Off.mp3",
    "ArtistID": 10,
    "AlbumID": 11,
    "TagID": 0
  },
  {
    "ID": 12,
    "Title": "Higher",
    "FileName": "D:\\Music\\Music\\EDM-High\\Higher.mp3",
    "ArtistID": 4,
    "AlbumID": 12,
    "TagID": 0
  },
  {
    "ID": 13,
    "Title": "Highscore",
    "FileName": "D:\\Music\\Music\\EDM-High\\Highscore.mp3",
    "ArtistID": 11,
    "AlbumID": 11,
    "TagID": 0
  },
  {
    "ID": 14,
    "Title": "Hope",
    "FileName": "D:\\Music\\Music\\EDM-High\\Hope.mp3",
    "ArtistID": 4,
    "AlbumID": 13,
    "TagID": 0
  },
  {
    "ID": 15,
    "Title": "Legends - Hyper Potions Remix",
    "FileName": "D:\\Music\\Music\\EDM-High\\Legends - Hyper Potions Remix.mp3",
    "ArtistID": 12,
    "AlbumID": 14,
    "TagID": 0
  },
  {
    "ID": 16,
    "Title": "Limitless",
    "FileName": "D:\\Music\\Music\\EDM-High\\Limitless.mp3",
    "ArtistID": 6,
    "AlbumID": 15,
    "TagID": 0
  },
  {
    "ID": 17,
    "Title": "Rise",
    "FileName": "D:\\Music\\Music\\EDM-High\\Rise - Ampyx.mp3",
    "ArtistID": 13,
    "AlbumID": 16,
    "TagID": 0
  },
  {
    "ID": 18,
    "Title": "Rubik",
    "FileName": "D:\\Music\\Music\\EDM-High\\Rubik.mp3",
    "ArtistID": 14,
    "AlbumID": 17,
    "TagID": 0
  },
  {
    "ID": 19,
    "Title": "S.K.Y.Prox",
    "FileName": "D:\\Music\\Music\\EDM-High\\S.K.Y.Prox.mp3",
    "ArtistID": 15,
    "AlbumID": 18,
    "TagID": 0
  },
  {
    "ID": 20,
    "Title": "Seven",
    "FileName": "D:\\Music\\Music\\EDM-High\\Seven.mp3",
    "ArtistID": 4,
    "AlbumID": 19,
    "TagID": 0
  },
  {
    "ID": 21,
    "Title": "Sky (feat. Martell) - Radio Edit",
    "FileName": "D:\\Music\\Music\\EDM-High\\Sky (feat. Martell) - Radio Edit.mp3",
    "ArtistID": 16,
    "AlbumID": 20,
    "TagID": 0
  },
  {
    "ID": 22,
    "Title": "Sky High",
    "FileName": "D:\\Music\\Music\\EDM-High\\Sky High.mp3",
    "ArtistID": 6,
    "AlbumID": 21,
    "TagID": 0
  },
  {
    "ID": 23,
    "Title": "Spectre",
    "FileName": "D:\\Music\\Music\\EDM-High\\Spectre.mp3",
    "ArtistID": 17,
    "AlbumID": 22,
    "TagID": 0
  },
  {
    "ID": 24,
    "Title": "Sunburst",
    "FileName": "D:\\Music\\Music\\EDM-High\\Sunburst.mp3",
    "ArtistID": 3,
    "AlbumID": 23,
    "TagID": 0
  },
  {
    "ID": 25,
    "Title": "Vision",
    "FileName": "D:\\Music\\Music\\EDM-High\\Vision.mp3",
    "ArtistID": 6,
    "AlbumID": 24,
    "TagID": 0
  },
  {
    "ID": 26,
    "Title": "Welcome to Planet Urf",
    "FileName": "D:\\Music\\Music\\EDM-High\\Welcome to Planet Urf.mp3",
    "ArtistID": 18,
    "AlbumID": 25,
    "TagID": 0
  },
  {
    "ID": 27,
    "Title": "Freedom",
    "FileName": "D:\\Music\\Music\\EDM-Low\\Freedom.mp3",
    "ArtistID": 19,
    "AlbumID": 26,
    "TagID": 1
  },
  {
    "ID": 28,
    "Title": "Guava Breeze",
    "FileName": "D:\\Music\\Music\\EDM-Low\\Guava Breeze.mp3",
    "ArtistID": 20,
    "AlbumID": 27,
    "TagID": 1
  },
  {
    "ID": 29,
    "Title": "Home",
    "FileName": "D:\\Music\\Music\\EDM-Low\\Home.mp3",
    "ArtistID": 21,
    "AlbumID": 28,
    "TagID": 1
  },
  {
    "ID": 30,
    "Title": "Lonely Dance",
    "FileName": "D:\\Music\\Music\\EDM-Low\\Lonely Dance.mp3",
    "ArtistID": 21,
    "AlbumID": 29,
    "TagID": 1
  },
  {
    "ID": 31,
    "Title": "Muvik",
    "FileName": "D:\\Music\\Music\\EDM-Low\\Muvik.mp3",
    "ArtistID": 19,
    "AlbumID": 26,
    "TagID": 1
  },
  {
    "ID": 32,
    "Title": "Seve - Radio Edit",
    "FileName": "D:\\Music\\Music\\EDM-Low\\Seve - Radio Edit.mp3",
    "ArtistID": 22,
    "AlbumID": 30,
    "TagID": 1
  },
  {
    "ID": 33,
    "Title": "Somero",
    "FileName": "D:\\Music\\Music\\EDM-Low\\Somero.mp3",
    "ArtistID": 23,
    "AlbumID": 31,
    "TagID": 1
  },
  {
    "ID": 34,
    "Title": "Turtle Beach",
    "FileName": "D:\\Music\\Music\\EDM-Low\\Turtle Beach.mp3",
    "ArtistID": 24,
    "AlbumID": 32,
    "TagID": 1
  },
  {
    "ID": 35,
    "Title": "Candyland",
    "FileName": "D:\\Music\\Music\\EDM-Mid\\Candyland.mp3",
    "ArtistID": 4,
    "AlbumID": 33,
    "TagID": 2
  },
  {
    "ID": 36,
    "Title": "Close To The Sun",
    "FileName": "D:\\Music\\Music\\EDM-Mid\\Close To The Sun.mp3",
    "ArtistID": 25,
    "AlbumID": 34,
    "TagID": 2
  },
  {
    "ID": 37,
    "Title": "Cool",
    "FileName": "D:\\Music\\Music\\EDM-Mid\\Cool.mp3",
    "ArtistID": 26,
    "AlbumID": 35,
    "TagID": 2
  },
  {
    "ID": 38,
    "Title": "Elegy",
    "FileName": "D:\\Music\\Music\\EDM-Mid\\Elegy.mp3",
    "ArtistID": 27,
    "AlbumID": 36,
    "TagID": 2
  },
  {
    "ID": 39,
    "Title": "Epic",
    "FileName": "D:\\Music\\Music\\EDM-Mid\\Epic.mp3",
    "ArtistID": 27,
    "AlbumID": 36,
    "TagID": 2
  },
  {
    "ID": 40,
    "Title": "Fly Away",
    "FileName": "D:\\Music\\Music\\EDM-Mid\\Fly Away.mp3",
    "ArtistID": 25,
    "AlbumID": 37,
    "TagID": 2
  },
  {
    "ID": 41,
    "Title": "Happy Robot",
    "FileName": "D:\\Music\\Music\\EDM-Mid\\Happy Robot.mp3",
    "ArtistID": 21,
    "AlbumID": 38,
    "TagID": 2
  },
  {
    "ID": 42,
    "Title": "Holo",
    "FileName": "D:\\Music\\Music\\EDM-Mid\\Holo.mp3",
    "ArtistID": 13,
    "AlbumID": 39,
    "TagID": 2
  },
  {
    "ID": 43,
    "Title": "Infectious",
    "FileName": "D:\\Music\\Music\\EDM-Mid\\Infectious.mp3",
    "ArtistID": 4,
    "AlbumID": 40,
    "TagID": 2
  },
  {
    "ID": 44,
    "Title": "Joy",
    "FileName": "D:\\Music\\Music\\EDM-Mid\\Joy.mp3",
    "ArtistID": 4,
    "AlbumID": 41,
    "TagID": 2
  },
  {
    "ID": 45,
    "Title": "Let's Go",
    "FileName": "D:\\Music\\Music\\EDM-Mid\\Let's Go.mp3",
    "ArtistID": 4,
    "AlbumID": 42,
    "TagID": 2
  },
  {
    "ID": 46,
    "Title": "Louder Now",
    "FileName": "D:\\Music\\Music\\EDM-Mid\\Louder Now.mp3",
    "ArtistID": 4,
    "AlbumID": 43,
    "TagID": 2
  },
  {
    "ID": 47,
    "Title": "Masked Heroes",
    "FileName": "D:\\Music\\Music\\EDM-Mid\\Masked Heroes.mp3",
    "ArtistID": 21,
    "AlbumID": 44,
    "TagID": 2
  },
  {
    "ID": 48,
    "Title": "Masked Raver",
    "FileName": "D:\\Music\\Music\\EDM-Mid\\Masked Raver.mp3",
    "ArtistID": 21,
    "AlbumID": 45,
    "TagID": 2
  },
  {
    "ID": 49,
    "Title": "Mesmerize",
    "FileName": "D:\\Music\\Music\\EDM-Mid\\Mesmerize.mp3",
    "ArtistID": 4,
    "AlbumID": 46,
    "TagID": 2
  },
  {
    "ID": 50,
    "Title": "Monody (feat. Laura Brehm)",
    "FileName": "D:\\Music\\Music\\EDM-Mid\\Monody (feat. Laura Brehm).mp3",
    "ArtistID": 28,
    "AlbumID": 47,
    "TagID": 2
  },
  {
    "ID": 51,
    "Title": "Nostalgia",
    "FileName": "D:\\Music\\Music\\EDM-Mid\\Nostalgia.mp3",
    "ArtistID": 4,
    "AlbumID": 48,
    "TagID": 2
  },
  {
    "ID": 52,
    "Title": "Long Journey",
    "FileName": "D:\\Music\\Music\\EDM-Mid\\O M II N - Long Journey.mp3",
    "ArtistID": 29,
    "AlbumID": 49,
    "TagID": 2
  },
  {
    "ID": 53,
    "Title": "O M II N - Sunset",
    "FileName": "D:\\Music\\Music\\EDM-Mid\\O M II N - Sunset.mp3",
    "ArtistID": 29,
    "AlbumID": 49,
    "TagID": 2
  },
  {
    "ID": 54,
    "Title": "Oh Look Aliens!",
    "FileName": "D:\\Music\\Music\\EDM-Mid\\Oh Look Aliens!.mp3",
    "ArtistID": 21,
    "AlbumID": 50,
    "TagID": 2
  },
  {
    "ID": 55,
    "Title": "Origin",
    "FileName": "D:\\Music\\Music\\EDM-Mid\\Origin.mp3",
    "ArtistID": 27,
    "AlbumID": 51,
    "TagID": 2
  },
  {
    "ID": 56,
    "Title": "Piece Of Me (Vexento Remix)",
    "FileName": "D:\\Music\\Music\\EDM-Mid\\Piece Of Me (Vexento Remix).mp3",
    "ArtistID": 30,
    "AlbumID": 52,
    "TagID": 2
  },
  {
    "ID": 57,
    "Title": "Sad Robot",
    "FileName": "D:\\Music\\Music\\EDM-Mid\\Sad Robot.mp3",
    "ArtistID": 21,
    "AlbumID": 53,
    "TagID": 2
  },
  {
    "ID": 58,
    "Title": "Summertime",
    "FileName": "D:\\Music\\Music\\EDM-Mid\\Summertime.mp3",
    "ArtistID": 31,
    "AlbumID": 54,
    "TagID": 2
  },
  {
    "ID": 59,
    "Title": "Tevo",
    "FileName": "D:\\Music\\Music\\EDM-Mid\\Tevo.mp3",
    "ArtistID": 21,
    "AlbumID": 55,
    "TagID": 2
  },
  {
    "ID": 60,
    "Title": null,
    "FileName": "D:\\Music\\Music\\EDM-Mid\\Trap Queen - Eightfold X MKJ Remix.mp3",
    "ArtistID": 32,
    "AlbumID": 56,
    "TagID": 2
  },
  {
    "ID": 61,
    "Title": "Trippy Love",
    "FileName": "D:\\Music\\Music\\EDM-Mid\\Trippy Love.mp3",
    "ArtistID": 21,
    "AlbumID": 57,
    "TagID": 2
  },
  {
    "ID": 62,
    "Title": "Tropic Love",
    "FileName": "D:\\Music\\Music\\EDM-Mid\\Tropic Love.mp3",
    "ArtistID": 33,
    "AlbumID": 58,
    "TagID": 2
  },
  {
    "ID": 63,
    "Title": "Unity",
    "FileName": "D:\\Music\\Music\\EDM-Mid\\Unity.mp3",
    "ArtistID": 27,
    "AlbumID": 59,
    "TagID": 2
  },
  {
    "ID": 64,
    "Title": "Verve",
    "FileName": "D:\\Music\\Music\\EDM-Mid\\Verve.mp3",
    "ArtistID": 21,
    "AlbumID": 60,
    "TagID": 2
  },
  {
    "ID": 65,
    "Title": "Where We Belong",
    "FileName": "D:\\Music\\Music\\EDM-Mid\\Where We Belong.mp3",
    "ArtistID": 21,
    "AlbumID": 61,
    "TagID": 2
  },
  {
    "ID": 66,
    "Title": "Kaikai Kitan",
    "FileName": "D:\\Music\\Music\\J-Pop-High\\01 Kaikai Kitan.m4a",
    "ArtistID": 34,
    "AlbumID": 62,
    "TagID": 3
  },
  {
    "ID": 67,
    "Title": "デスぺレート",
    "FileName": "D:\\Music\\Music\\J-Pop-High\\01 デスぺレート.m4a",
    "ArtistID": 35,
    "AlbumID": 63,
    "TagID": 3
  },
  {
    "ID": 68,
    "Title": "Nonsense Bungaku",
    "FileName": "D:\\Music\\Music\\J-Pop-High\\02 Nonsense Bungaku.m4a",
    "ArtistID": 34,
    "AlbumID": 64,
    "TagID": 3
  },
  {
    "ID": 69,
    "Title": "Inochino Tabekata - DanceMix Ver.",
    "FileName": "D:\\Music\\Music\\J-Pop-High\\04 Inochino Tabekata - DanceMix Ver.m4a",
    "ArtistID": 34,
    "AlbumID": 65,
    "TagID": 3
  },
  {
    "ID": 70,
    "Title": "Okinimesumama",
    "FileName": "D:\\Music\\Music\\J-Pop-High\\09 Okinimesumama.m4a",
    "ArtistID": 34,
    "AlbumID": 64,
    "TagID": 3
  },
  {
    "ID": 71,
    "Title": "Casino",
    "FileName": "D:\\Music\\Music\\J-Pop-High\\Casino.mp3",
    "ArtistID": 36,
    "AlbumID": 66,
    "TagID": 3
  },
  {
    "ID": 72,
    "Title": "Cheating is a crime",
    "FileName": "D:\\Music\\Music\\J-Pop-High\\Cheating is a crime.mp3",
    "ArtistID": 37,
    "AlbumID": 67,
    "TagID": 3
  },
  {
    "ID": 73,
    "Title": "Cynical Night Plan",
    "FileName": "D:\\Music\\Music\\J-Pop-High\\Cynical Night Plan.mp3",
    "ArtistID": 38,
    "AlbumID": 68,
    "TagID": 3
  },
  {
    "ID": 74,
    "Title": "Demon Lord",
    "FileName": "D:\\Music\\Music\\J-Pop-High\\Demon Lord.mp3",
    "ArtistID": 39,
    "AlbumID": 69,
    "TagID": 3
  },
  {
    "ID": 75,
    "Title": "ENVY BABY",
    "FileName": "D:\\Music\\Music\\J-Pop-High\\ENVY BABY.mp3",
    "ArtistID": 39,
    "AlbumID": 70,
    "TagID": 3
  },
  {
    "ID": 76,
    "Title": "EYE",
    "FileName": "D:\\Music\\Music\\J-Pop-High\\EYE.mp3",
    "ArtistID": 39,
    "AlbumID": 71,
    "TagID": 3
  },
  {
    "ID": 77,
    "Title": "FightSong",
    "FileName": "D:\\Music\\Music\\J-Pop-High\\FightSong.mp3",
    "ArtistID": 34,
    "AlbumID": 72,
    "TagID": 3
  },
  {
    "ID": 78,
    "Title": "Good-bye Declaration",
    "FileName": "D:\\Music\\Music\\J-Pop-High\\Good-bye Declaration.mp3",
    "ArtistID": 40,
    "AlbumID": 73,
    "TagID": 3
  },
  {
    "ID": 79,
    "Title": "KING",
    "FileName": "D:\\Music\\Music\\J-Pop-High\\KING.mp3",
    "ArtistID": 39,
    "AlbumID": 74,
    "TagID": 3
  },
  {
    "ID": 80,
    "Title": "last resort",
    "FileName": "D:\\Music\\Music\\J-Pop-High\\last resort.mp3",
    "ArtistID": 38,
    "AlbumID": 68,
    "TagID": 3
  },
  {
    "ID": 81,
    "Title": "MIRA",
    "FileName": "D:\\Music\\Music\\J-Pop-High\\MIRA.mp3",
    "ArtistID": 39,
    "AlbumID": 75,
    "TagID": 3
  },
  {
    "ID": 82,
    "Title": "Nightmare",
    "FileName": "D:\\Music\\Music\\J-Pop-High\\Nightmare.mp3",
    "ArtistID": 36,
    "AlbumID": 76,
    "TagID": 3
  },
  {
    "ID": 83,
    "Title": "osmanthus",
    "FileName": "D:\\Music\\Music\\J-Pop-High\\osmanthus.mp3",
    "ArtistID": 41,
    "AlbumID": 77,
    "TagID": 3
  },
  {
    "ID": 84,
    "Title": "QUEEN",
    "FileName": "D:\\Music\\Music\\J-Pop-High\\QUEEN.mp3",
    "ArtistID": 39,
    "AlbumID": 78,
    "TagID": 3
  },
  {
    "ID": 85,
    "Title": "Rendezvous",
    "FileName": "D:\\Music\\Music\\J-Pop-High\\Rendezvous.mp3",
    "ArtistID": 39,
    "AlbumID": 79,
    "TagID": 3
  },
  {
    "ID": 86,
    "Title": "Shadow Shadow",
    "FileName": "D:\\Music\\Music\\J-Pop-High\\Shadow Shadow.mp3",
    "ArtistID": 36,
    "AlbumID": 80,
    "TagID": 3
  },
  {
    "ID": 87,
    "Title": "Whisper Whisper Whisper",
    "FileName": "D:\\Music\\Music\\J-Pop-High\\Whisper Whisper Whisper.mp3",
    "ArtistID": 36,
    "AlbumID": 81,
    "TagID": 3
  },
  {
    "ID": 88,
    "Title": "Yoidoreshirazu",
    "FileName": "D:\\Music\\Music\\J-Pop-High\\Yoidoreshirazu.mp3",
    "ArtistID": 39,
    "AlbumID": 82,
    "TagID": 3
  },
  {
    "ID": 89,
    "Title": "アイデンティティ",
    "FileName": "D:\\Music\\Music\\J-Pop-High\\アイデンティティ.mp3",
    "ArtistID": 39,
    "AlbumID": 83,
    "TagID": 3
  },
  {
    "ID": 90,
    "Title": "エンヴィーベイビー x KING",
    "FileName": "D:\\Music\\Music\\J-Pop-High\\エンヴィーベイビー x KING.mp3",
    "ArtistID": 39,
    "AlbumID": 84,
    "TagID": 3
  },
  {
    "ID": 91,
    "Title": "シネマ  初音ミク",
    "FileName": "D:\\Music\\Music\\J-Pop-High\\シネマ  初音ミク.mp3",
    "ArtistID": 38,
    "AlbumID": 68,
    "TagID": 3
  },
  {
    "ID": 92,
    "Title": "ワンダラー - 初音ミク",
    "FileName": "D:\\Music\\Music\\J-Pop-High\\ワンダラー - 初音ミク.mp3",
    "ArtistID": 38,
    "AlbumID": 68,
    "TagID": 3
  },
  {
    "ID": 93,
    "Title": "ずるいよ…",
    "FileName": "D:\\Music\\Music\\J-Pop-Low\\01 ずるいよ….m4a",
    "ArtistID": 42,
    "AlbumID": 85,
    "TagID": 4
  },
  {
    "ID": 94,
    "Title": "香水 feat.相沢",
    "FileName": "D:\\Music\\Music\\J-Pop-Low\\03  香水 feat.相沢.mp3",
    "ArtistID": 43,
    "AlbumID": 86,
    "TagID": 4
  },
  {
    "ID": 95,
    "Title": "Lulalulalu",
    "FileName": "D:\\Music\\Music\\J-Pop-Low\\05.ルラルラルー-Kobasolo.mp3",
    "ArtistID": 44,
    "AlbumID": 87,
    "TagID": 4
  },
  {
    "ID": 96,
    "Title": "風になる feat.Lefty Hand Cream",
    "FileName": "D:\\Music\\Music\\J-Pop-Low\\07  風になる feat.Lefty Hand Cream.mp3",
    "ArtistID": 45,
    "AlbumID": 86,
    "TagID": 4
  },
  {
    "ID": 97,
    "Title": "奏(かなで) feat. 安果音",
    "FileName": "D:\\Music\\Music\\J-Pop-Low\\08. 奏(かなで) feat. 安果音.mp3",
    "ArtistID": 46,
    "AlbumID": 88,
    "TagID": 4
  },
  {
    "ID": 98,
    "Title": "Back-to-back",
    "FileName": "D:\\Music\\Music\\J-Pop-Low\\10.背中合わせ-Kobasolo.mp3",
    "ArtistID": 44,
    "AlbumID": 87,
    "TagID": 4
  },
  {
    "ID": 99,
    "Title": "30",
    "FileName": "D:\\Music\\Music\\J-Pop-Low\\30.mp3",
    "ArtistID": 47,
    "AlbumID": 89,
    "TagID": 4
  },
  {
    "ID": 100,
    "Title": "40",
    "FileName": "D:\\Music\\Music\\J-Pop-Low\\40.mp3",
    "ArtistID": 47,
    "AlbumID": 90,
    "TagID": 4
  },
  {
    "ID": 101,
    "Title": "Akie - Letter Song",
    "FileName": "D:\\Music\\Music\\J-Pop-Low\\Akie - Letter Song.mp3",
    "ArtistID": 48,
    "AlbumID": 91,
    "TagID": 4
  },
  {
    "ID": 102,
    "Title": "Akie - 天之弱",
    "FileName": "D:\\Music\\Music\\J-Pop-Low\\Akie - 天之弱.mp3",
    "ArtistID": 48,
    "AlbumID": 91,
    "TagID": 4
  },
  {
    "ID": 103,
    "Title": "Akie - 約束",
    "FileName": "D:\\Music\\Music\\J-Pop-Low\\Akie - 約束.mp3",
    "ArtistID": 48,
    "AlbumID": 91,
    "TagID": 4
  },
  {
    "ID": 104,
    "Title": "Alone",
    "FileName": "D:\\Music\\Music\\J-Pop-Low\\Alone.mp3",
    "ArtistID": 47,
    "AlbumID": 92,
    "TagID": 4
  },
  {
    "ID": 105,
    "Title": "Always in my heart",
    "FileName": "D:\\Music\\Music\\J-Pop-Low\\Always in my heart.mp3",
    "ArtistID": 49,
    "AlbumID": 93,
    "TagID": 4
  },
  {
    "ID": 106,
    "Title": "Ame",
    "FileName": "D:\\Music\\Music\\J-Pop-Low\\Ame.mp3",
    "ArtistID": 47,
    "AlbumID": 94,
    "TagID": 4
  },
  {
    "ID": 107,
    "Title": "Ano Natsuno Hanabi",
    "FileName": "D:\\Music\\Music\\J-Pop-Low\\Ano Natsuno Hanabi.mp3",
    "ArtistID": 47,
    "AlbumID": 95,
    "TagID": 4
  },
  {
    "ID": 108,
    "Title": "Anohino Melody",
    "FileName": "D:\\Music\\Music\\J-Pop-Low\\Anohino Melody.mp3",
    "ArtistID": 47,
    "AlbumID": 96,
    "TagID": 4
  },
  {
    "ID": 109,
    "Title": "Arigato",
    "FileName": "D:\\Music\\Music\\J-Pop-Low\\Arigato.mp3",
    "ArtistID": 50,
    "AlbumID": 97,
    "TagID": 4
  },
  {
    "ID": 110,
    "Title": "be with you",
    "FileName": "D:\\Music\\Music\\J-Pop-Low\\be with you.mp3",
    "ArtistID": 51,
    "AlbumID": 98,
    "TagID": 4
  },
  {
    "ID": 111,
    "Title": "Be... - Stardust Version",
    "FileName": "D:\\Music\\Music\\J-Pop-Low\\Be... - Stardust Version.mp3",
    "ArtistID": 47,
    "AlbumID": 99,
    "TagID": 4
  },
  {
    "ID": 112,
    "Title": "Be... - Teardrop Version",
    "FileName": "D:\\Music\\Music\\J-Pop-Low\\Be... - Teardrop Version.mp3",
    "ArtistID": 47,
    "AlbumID": 92,
    "TagID": 4
  },
  {
    "ID": 113,
    "Title": "Be...",
    "FileName": "D:\\Music\\Music\\J-Pop-Low\\Be....mp3",
    "ArtistID": 47,
    "AlbumID": 100,
    "TagID": 4
  },
  {
    "ID": 114,
    "Title": "Call you",
    "FileName": "D:\\Music\\Music\\J-Pop-Low\\Call you.mp3",
    "ArtistID": 49,
    "AlbumID": 93,
    "TagID": 4
  },
  {
    "ID": 115,
    "Title": "Christmas Song",
    "FileName": "D:\\Music\\Music\\J-Pop-Low\\Christmas Song.mp3",
    "ArtistID": 47,
    "AlbumID": 101,
    "TagID": 4
  },
  {
    "ID": 116,
    "Title": "Dareyori Sukinanoni",
    "FileName": "D:\\Music\\Music\\J-Pop-Low\\Dareyori Sukinanoni.mp3",
    "ArtistID": 47,
    "AlbumID": 102,
    "TagID": 4
  },
  {
    "ID": 117,
    "Title": "DEAR...again",
    "FileName": "D:\\Music\\Music\\J-Pop-Low\\DEAR...again.mp3",
    "ArtistID": 47,
    "AlbumID": 92,
    "TagID": 4
  },
  {
    "ID": 118,
    "Title": "Dear",
    "FileName": "D:\\Music\\Music\\J-Pop-Low\\Dear.mp3",
    "ArtistID": 47,
    "AlbumID": 103,
    "TagID": 4
  },
  {
    "ID": 119,
    "Title": null,
    "FileName": "D:\\Music\\Music\\J-Pop-Low\\Duca - Ai no Niwa.mp3",
    "ArtistID": 52,
    "AlbumID": 104,
    "TagID": 4
  },
  {
    "ID": 120,
    "Title": "Earphones",
    "FileName": "D:\\Music\\Music\\J-Pop-Low\\Earphones.mp3",
    "ArtistID": 47,
    "AlbumID": 96,
    "TagID": 4
  },
  {
    "ID": 121,
    "Title": "Eki",
    "FileName": "D:\\Music\\Music\\J-Pop-Low\\Eki.mp3",
    "ArtistID": 47,
    "AlbumID": 105,
    "TagID": 4
  },
  {
    "ID": 122,
    "Title": "Ever be my love",
    "FileName": "D:\\Music\\Music\\J-Pop-Low\\Ever be my love.mp3",
    "ArtistID": 49,
    "AlbumID": 93,
    "TagID": 4
  },
  {
    "ID": 123,
    "Title": "Fall in love",
    "FileName": "D:\\Music\\Music\\J-Pop-Low\\Fall in love.mp3",
    "ArtistID": 47,
    "AlbumID": 106,
    "TagID": 4
  },
  {
    "ID": 124,
    "Title": "First Love",
    "FileName": "D:\\Music\\Music\\J-Pop-Low\\First Love.mp3",
    "ArtistID": 47,
    "AlbumID": 99,
    "TagID": 4
  },
  {
    "ID": 125,
    "Title": "Gekkou",
    "FileName": "D:\\Music\\Music\\J-Pop-Low\\Gekkou.mp3",
    "ArtistID": 47,
    "AlbumID": 99,
    "TagID": 4
  },
  {
    "ID": 126,
    "Title": "Gomenne",
    "FileName": "D:\\Music\\Music\\J-Pop-Low\\Gomenne.mp3",
    "ArtistID": 47,
    "AlbumID": 105,
    "TagID": 4
  },
  {
    "ID": 127,
    "Title": "Hello, Again",
    "FileName": "D:\\Music\\Music\\J-Pop-Low\\Hello, Again.mp3",
    "ArtistID": 47,
    "AlbumID": 92,
    "TagID": 4
  },
  {
    "ID": 128,
    "Title": "HIKARI",
    "FileName": "D:\\Music\\Music\\J-Pop-Low\\HIKARI.mp3",
    "ArtistID": 47,
    "AlbumID": 101,
    "TagID": 4
  },
  {
    "ID": 129,
    "Title": "Hoshifuru Yoruni",
    "FileName": "D:\\Music\\Music\\J-Pop-Low\\Hoshifuru Yoruni.mp3",
    "ArtistID": 47,
    "AlbumID": 101,
    "TagID": 4
  },
  {
    "ID": 130,
    "Title": "Hoshiwo Koete",
    "FileName": "D:\\Music\\Music\\J-Pop-Low\\Hoshiwo Koete.mp3",
    "ArtistID": 47,
    "AlbumID": 96,
    "TagID": 4
  },
  {
    "ID": 131,
    "Title": "I LOVE YOU",
    "FileName": "D:\\Music\\Music\\J-Pop-Low\\I LOVE YOU.mp3",
    "ArtistID": 47,
    "AlbumID": 107,
    "TagID": 4
  },
  {
    "ID": 132,
    "Title": "I WILL",
    "FileName": "D:\\Music\\Music\\J-Pop-Low\\I WILL.mp3",
    "ArtistID": 47,
    "AlbumID": 89,
    "TagID": 4
  },
  {
    "ID": 133,
    "Title": "Itoshii Hitoyo",
    "FileName": "D:\\Music\\Music\\J-Pop-Low\\Itoshii Hitoyo.mp3",
    "ArtistID": 47,
    "AlbumID": 96,
    "TagID": 4
  },
  {
    "ID": 134,
    "Title": "Kanashii Kiss",
    "FileName": "D:\\Music\\Music\\J-Pop-Low\\Kanashii Kiss.mp3",
    "ArtistID": 47,
    "AlbumID": 95,
    "TagID": 4
  },
  {
    "ID": 135,
    "Title": "Kanashimini Sayonara",
    "FileName": "D:\\Music\\Music\\J-Pop-Low\\Kanashimini Sayonara.mp3",
    "ArtistID": 47,
    "AlbumID": 108,
    "TagID": 4
  },
  {
    "ID": 136,
    "Title": "Kanega Naru - Acoustic ver",
    "FileName": "D:\\Music\\Music\\J-Pop-Low\\Kanega Naru - Acoustic ver.mp3",
    "ArtistID": 47,
    "AlbumID": 109,
    "TagID": 4
  },
  {
    "ID": 137,
    "Title": "Kanega Naru",
    "FileName": "D:\\Music\\Music\\J-Pop-Low\\Kanega Naru.mp3",
    "ArtistID": 47,
    "AlbumID": 101,
    "TagID": 4
  },
  {
    "ID": 138,
    "Title": "Kimi Ni Saigo No Kuchizuke Wo",
    "FileName": "D:\\Music\\Music\\J-Pop-Low\\Kimi Ni Saigo No Kuchizuke Wo.mp3",
    "ArtistID": 53,
    "AlbumID": 110,
    "TagID": 4
  },
  {
    "ID": 139,
    "Title": "Letter",
    "FileName": "D:\\Music\\Music\\J-Pop-Low\\Letter.mp3",
    "ArtistID": 47,
    "AlbumID": 111,
    "TagID": 4
  },
  {
    "ID": 140,
    "Title": "Love Love Love",
    "FileName": "D:\\Music\\Music\\J-Pop-Low\\Love Love Love.mp3",
    "ArtistID": 47,
    "AlbumID": 95,
    "TagID": 4
  },
  {
    "ID": 141,
    "Title": "Lovin' you",
    "FileName": "D:\\Music\\Music\\J-Pop-Low\\Lovin' you.mp3",
    "ArtistID": 47,
    "AlbumID": 112,
    "TagID": 4
  },
  {
    "ID": 142,
    "Title": "M",
    "FileName": "D:\\Music\\Music\\J-Pop-Low\\M.mp3",
    "ArtistID": 47,
    "AlbumID": 92,
    "TagID": 4
  },
  {
    "ID": 143,
    "Title": "Mata Koi wo Suru Koto Nado",
    "FileName": "D:\\Music\\Music\\J-Pop-Low\\Mata Koi wo Suru Koto Nado.mp3",
    "ArtistID": 47,
    "AlbumID": 113,
    "TagID": 4
  },
  {
    "ID": 144,
    "Title": "Mirai Yosouzu II",
    "FileName": "D:\\Music\\Music\\J-Pop-Low\\Mirai Yosouzu II.mp3",
    "ArtistID": 47,
    "AlbumID": 95,
    "TagID": 4
  },
  {
    "ID": 145,
    "Title": "Mirai Yosouzu",
    "FileName": "D:\\Music\\Music\\J-Pop-Low\\Mirai Yosouzu.mp3",
    "ArtistID": 47,
    "AlbumID": 95,
    "TagID": 4
  },
  {
    "ID": 146,
    "Title": "Missing",
    "FileName": "D:\\Music\\Music\\J-Pop-Low\\Missing.mp3",
    "ArtistID": 47,
    "AlbumID": 99,
    "TagID": 4
  },
  {
    "ID": 147,
    "Title": "my graduation",
    "FileName": "D:\\Music\\Music\\J-Pop-Low\\My graduation.mp3",
    "ArtistID": 47,
    "AlbumID": 108,
    "TagID": 4
  },
  {
    "ID": 148,
    "Title": "Nanpasen",
    "FileName": "D:\\Music\\Music\\J-Pop-Low\\Nanpasen.mp3",
    "ArtistID": 47,
    "AlbumID": 105,
    "TagID": 4
  },
  {
    "ID": 149,
    "Title": "Natsuo Akiramete",
    "FileName": "D:\\Music\\Music\\J-Pop-Low\\Natsuo Akiramete.mp3",
    "ArtistID": 47,
    "AlbumID": 105,
    "TagID": 4
  },
  {
    "ID": 150,
    "Title": "PIECE OF MY WISH",
    "FileName": "D:\\Music\\Music\\J-Pop-Low\\PIECE OF MY WISH.mp3",
    "ArtistID": 47,
    "AlbumID": 108,
    "TagID": 4
  },
  {
    "ID": 151,
    "Title": "Plastic Love",
    "FileName": "D:\\Music\\Music\\J-Pop-Low\\Plastic Love.mp3",
    "ArtistID": 47,
    "AlbumID": 106,
    "TagID": 4
  },
  {
    "ID": 152,
    "Title": "Rainy Blue",
    "FileName": "D:\\Music\\Music\\J-Pop-Low\\Rainy Blue.mp3",
    "ArtistID": 47,
    "AlbumID": 99,
    "TagID": 4
  },
  {
    "ID": 153,
    "Title": "remember",
    "FileName": "D:\\Music\\Music\\J-Pop-Low\\Remember.mp3",
    "ArtistID": 54,
    "AlbumID": 114,
    "TagID": 4
  },
  {
    "ID": 154,
    "Title": null,
    "FileName": "D:\\Music\\Music\\J-Pop-Low\\Riyu Renji - Boku Ga Shinou To Omotta No Wa.mp3",
    "ArtistID": 55,
    "AlbumID": 104,
    "TagID": 4
  },
  {
    "ID": 155,
    "Title": "Yasashii Uta",
    "FileName": "D:\\Music\\Music\\J-Pop-Low\\RSP - Yasashii Uta.mp3",
    "ArtistID": 56,
    "AlbumID": 115,
    "TagID": 4
  },
  {
    "ID": 156,
    "Title": "Ruriirono Chikyuu",
    "FileName": "D:\\Music\\Music\\J-Pop-Low\\Ruriirono Chikyuu.mp3",
    "ArtistID": 47,
    "AlbumID": 106,
    "TagID": 4
  },
  {
    "ID": 157,
    "Title": "Sayonarano Mukougawa",
    "FileName": "D:\\Music\\Music\\J-Pop-Low\\Sayonarano Mukougawa.mp3",
    "ArtistID": 47,
    "AlbumID": 105,
    "TagID": 4
  },
  {
    "ID": 158,
    "Title": "Scarborough Fair",
    "FileName": "D:\\Music\\Music\\J-Pop-Low\\Scarborough Fair.mp3",
    "ArtistID": 49,
    "AlbumID": 93,
    "TagID": 4
  },
  {
    "ID": 159,
    "Title": "Sing",
    "FileName": "D:\\Music\\Music\\J-Pop-Low\\Sing.mp3",
    "ArtistID": 57,
    "AlbumID": 116,
    "TagID": 4
  },
  {
    "ID": 160,
    "Title": "Soramo Toberuhazu",
    "FileName": "D:\\Music\\Music\\J-Pop-Low\\Soramo Toberuhazu.mp3",
    "ArtistID": 47,
    "AlbumID": 108,
    "TagID": 4
  },
  {
    "ID": 161,
    "Title": "Souha",
    "FileName": "D:\\Music\\Music\\J-Pop-Low\\Souha.mp3",
    "ArtistID": 47,
    "AlbumID": 96,
    "TagID": 4
  },
  {
    "ID": 162,
    "Title": "Squall",
    "FileName": "D:\\Music\\Music\\J-Pop-Low\\Squall.mp3",
    "ArtistID": 47,
    "AlbumID": 100,
    "TagID": 4
  },
  {
    "ID": 163,
    "Title": "Story",
    "FileName": "D:\\Music\\Music\\J-Pop-Low\\Story.mp3",
    "ArtistID": 47,
    "AlbumID": 99,
    "TagID": 4
  },
  {
    "ID": 164,
    "Title": "summertime",
    "FileName": "D:\\Music\\Music\\J-Pop-Low\\Summertime.mp3",
    "ArtistID": 58,
    "AlbumID": 117,
    "TagID": 4
  },
  {
    "ID": 165,
    "Title": "Sweet Home",
    "FileName": "D:\\Music\\Music\\J-Pop-Low\\Sweet Home.mp3",
    "ArtistID": 47,
    "AlbumID": 101,
    "TagID": 4
  },
  {
    "ID": 166,
    "Title": "tears",
    "FileName": "D:\\Music\\Music\\J-Pop-Low\\Tears.mp3",
    "ArtistID": 47,
    "AlbumID": 99,
    "TagID": 4
  },
  {
    "ID": 167,
    "Title": null,
    "FileName": "D:\\Music\\Music\\J-Pop-Low\\TEE - Baby I Love You.mp3",
    "ArtistID": 59,
    "AlbumID": 104,
    "TagID": 4
  },
  {
    "ID": 168,
    "Title": "The signs of LOVE",
    "FileName": "D:\\Music\\Music\\J-Pop-Low\\The signs of LOVE.mp3",
    "ArtistID": 47,
    "AlbumID": 95,
    "TagID": 4
  },
  {
    "ID": 169,
    "Title": "Time goes by",
    "FileName": "D:\\Music\\Music\\J-Pop-Low\\Time goes by.mp3",
    "ArtistID": 47,
    "AlbumID": 92,
    "TagID": 4
  },
  {
    "ID": 170,
    "Title": "Tokino Nagareni Miwo Makase",
    "FileName": "D:\\Music\\Music\\J-Pop-Low\\Tokino Nagareni Miwo Makase.mp3",
    "ArtistID": 47,
    "AlbumID": 106,
    "TagID": 4
  },
  {
    "ID": 171,
    "Title": "Tsugunai",
    "FileName": "D:\\Music\\Music\\J-Pop-Low\\Tsugunai.mp3",
    "ArtistID": 47,
    "AlbumID": 105,
    "TagID": 4
  },
  {
    "ID": 172,
    "Title": "Woman",
    "FileName": "D:\\Music\\Music\\J-Pop-Low\\Woman.mp3",
    "ArtistID": 47,
    "AlbumID": 105,
    "TagID": 4
  },
  {
    "ID": 173,
    "Title": "Yukino Hana",
    "FileName": "D:\\Music\\Music\\J-Pop-Low\\Yukino Hana.mp3",
    "ArtistID": 47,
    "AlbumID": 99,
    "TagID": 4
  },
  {
    "ID": 174,
    "Title": "ありがとう、だいすき",
    "FileName": "D:\\Music\\Music\\J-Pop-Low\\ありがとう、だいすき.mp3",
    "ArtistID": 57,
    "AlbumID": 118,
    "TagID": 4
  },
  {
    "ID": 175,
    "Title": "いとしのエリー",
    "FileName": "D:\\Music\\Music\\J-Pop-Low\\いとしのエリー.mp3",
    "ArtistID": 50,
    "AlbumID": 119,
    "TagID": 4
  },
  {
    "ID": 176,
    "Title": "きみのうた",
    "FileName": "D:\\Music\\Music\\J-Pop-Low\\きみのうた.mp3",
    "ArtistID": 60,
    "AlbumID": 120,
    "TagID": 4
  },
  {
    "ID": 177,
    "Title": "ずるいよ…",
    "FileName": "D:\\Music\\Music\\J-Pop-Low\\ずるいよ….mp3",
    "ArtistID": 42,
    "AlbumID": 121,
    "TagID": 4
  },
  {
    "ID": 178,
    "Title": "みちしるべ",
    "FileName": "D:\\Music\\Music\\J-Pop-Low\\みちしるべ.mp3",
    "ArtistID": 57,
    "AlbumID": 118,
    "TagID": 4
  },
  {
    "ID": 179,
    "Title": "もう二度と・・・",
    "FileName": "D:\\Music\\Music\\J-Pop-Low\\もう二度と・・・.mp3",
    "ArtistID": 50,
    "AlbumID": 119,
    "TagID": 4
  },
  {
    "ID": 180,
    "Title": "オレンジ",
    "FileName": "D:\\Music\\Music\\J-Pop-Low\\オレンジ.mp3",
    "ArtistID": 61,
    "AlbumID": 122,
    "TagID": 4
  },
  {
    "ID": 181,
    "Title": "キラメキ",
    "FileName": "D:\\Music\\Music\\J-Pop-Low\\キラメキ.mp3",
    "ArtistID": 62,
    "AlbumID": 123,
    "TagID": 4
  },
  {
    "ID": 182,
    "Title": "タイニーリトル・アジアンタム",
    "FileName": "D:\\Music\\Music\\J-Pop-Low\\タイニーリトル・アジアンタム.mp3",
    "ArtistID": 63,
    "AlbumID": 124,
    "TagID": 4
  },
  {
    "ID": 183,
    "Title": "君だったら",
    "FileName": "D:\\Music\\Music\\J-Pop-Low\\君だったら.mp3",
    "ArtistID": 64,
    "AlbumID": 125,
    "TagID": 4
  },
  {
    "ID": 184,
    "Title": "君に出逢えて",
    "FileName": "D:\\Music\\Music\\J-Pop-Low\\君に出逢えて.mp3",
    "ArtistID": 65,
    "AlbumID": 126,
    "TagID": 4
  },
  {
    "ID": 185,
    "Title": "声を聞かせて",
    "FileName": "D:\\Music\\Music\\J-Pop-Low\\声を聞かせて.mp3",
    "ArtistID": 50,
    "AlbumID": 119,
    "TagID": 4
  },
  {
    "ID": 186,
    "Title": "夜撫でるメノウ",
    "FileName": "D:\\Music\\Music\\J-Pop-Low\\夜撫でるメノウ.mp3",
    "ArtistID": 38,
    "AlbumID": 127,
    "TagID": 4
  },
  {
    "ID": 187,
    "Title": "恋愛サーキュレーション",
    "FileName": "D:\\Music\\Music\\J-Pop-Low\\恋愛サーキュレーション.mp3",
    "ArtistID": 66,
    "AlbumID": 128,
    "TagID": 4
  },
  {
    "ID": 188,
    "Title": "明日がくるなら ballad solo version",
    "FileName": "D:\\Music\\Music\\J-Pop-Low\\明日がくるなら ballad solo version.mp3",
    "ArtistID": 67,
    "AlbumID": 129,
    "TagID": 4
  },
  {
    "ID": 189,
    "Title": "桜坂",
    "FileName": "D:\\Music\\Music\\J-Pop-Low\\桜坂.mp3",
    "ArtistID": 50,
    "AlbumID": 119,
    "TagID": 4
  },
  {
    "ID": 190,
    "Title": "永遠",
    "FileName": "D:\\Music\\Music\\J-Pop-Low\\永遠.mp3",
    "ArtistID": 50,
    "AlbumID": 119,
    "TagID": 4
  },
  {
    "ID": 191,
    "Title": "百満開花",
    "FileName": "D:\\Music\\Music\\J-Pop-Low\\百満開花.mp3",
    "ArtistID": 65,
    "AlbumID": 130,
    "TagID": 4
  },
  {
    "ID": 192,
    "Title": "瞳をとじて",
    "FileName": "D:\\Music\\Music\\J-Pop-Low\\瞳をとじて.mp3",
    "ArtistID": 50,
    "AlbumID": 119,
    "TagID": 4
  },
  {
    "ID": 193,
    "Title": "115万キロのフィルム",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\01 115万キロのフィルム.m4a",
    "ArtistID": 68,
    "AlbumID": 131,
    "TagID": 5
  },
  {
    "ID": 194,
    "Title": "LOST IN PARADISE",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\01 LOST IN PARADISE.m4a",
    "ArtistID": 69,
    "AlbumID": 132,
    "TagID": 5
  },
  {
    "ID": 195,
    "Title": "ダンスホール",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\01 ダンスホール.m4a",
    "ArtistID": 70,
    "AlbumID": 133,
    "TagID": 5
  },
  {
    "ID": 196,
    "Title": "低血ボルト",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\01 低血ボルト.m4a",
    "ArtistID": 71,
    "AlbumID": 134,
    "TagID": 5
  },
  {
    "ID": 197,
    "Title": "又三郎",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\01 又三郎.m4a",
    "ArtistID": 72,
    "AlbumID": 135,
    "TagID": 5
  },
  {
    "ID": 198,
    "Title": "夜行",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\01 夜行.m4a",
    "ArtistID": 72,
    "AlbumID": 136,
    "TagID": 5
  },
  {
    "ID": 199,
    "Title": "思想犯",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\01 思想犯.m4a",
    "ArtistID": 72,
    "AlbumID": 137,
    "TagID": 5
  },
  {
    "ID": 200,
    "Title": "春泥棒",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\01 春泥棒.m4a",
    "ArtistID": 72,
    "AlbumID": 138,
    "TagID": 5
  },
  {
    "ID": 201,
    "Title": "盗作",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\01 盗作.m4a",
    "ArtistID": 72,
    "AlbumID": 139,
    "TagID": 5
  },
  {
    "ID": 202,
    "Title": "秒針を噛む",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\01 秒針を噛む.m4a",
    "ArtistID": 71,
    "AlbumID": 140,
    "TagID": 5
  },
  {
    "ID": 203,
    "Title": "花一匁",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\01 花一匁.m4a",
    "ArtistID": 71,
    "AlbumID": 141,
    "TagID": 5
  },
  {
    "ID": 204,
    "Title": "藍二乗",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\01 藍二乗.m4a",
    "ArtistID": 72,
    "AlbumID": 142,
    "TagID": 5
  },
  {
    "ID": 205,
    "Title": "雨とカプチーノ",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\01 雨とカプチーノ.m4a",
    "ArtistID": 72,
    "AlbumID": 143,
    "TagID": 5
  },
  {
    "ID": 206,
    "Title": "風を食む",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\01 風を食む.m4a",
    "ArtistID": 72,
    "AlbumID": 144,
    "TagID": 5
  },
  {
    "ID": 207,
    "Title": "Koi Seyo Otome",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\01.恋せよオトメ-Kobasolo.mp3",
    "ArtistID": 44,
    "AlbumID": 87,
    "TagID": 5
  },
  {
    "ID": 208,
    "Title": "Ao No Waltz",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\02 Ao No Waltz.m4a",
    "ArtistID": 34,
    "AlbumID": 62,
    "TagID": 5
  },
  {
    "ID": 209,
    "Title": "ヒューマノイド",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\02 ヒューマノイド.m4a",
    "ArtistID": 71,
    "AlbumID": 140,
    "TagID": 5
  },
  {
    "ID": 210,
    "Title": "ブレーメン",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\02 ブレーメン.m4a",
    "ArtistID": 72,
    "AlbumID": 145,
    "TagID": 5
  },
  {
    "ID": 211,
    "Title": "正しくなれない",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\02 正しくなれない.m4a",
    "ArtistID": 71,
    "AlbumID": 146,
    "TagID": 5
  },
  {
    "ID": 212,
    "Title": "残機",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\02 残機.m4a",
    "ArtistID": 71,
    "AlbumID": 141,
    "TagID": 5
  },
  {
    "ID": 213,
    "Title": "明日はきっといい日になる feat. えみい",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\02. 明日はきっといい日になる feat. えみい.mp3",
    "ArtistID": 73,
    "AlbumID": 88,
    "TagID": 5
  },
  {
    "ID": 214,
    "Title": "小さな恋のうた feat.七穂",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\02.小さな恋のうた feat.七穂.mp3",
    "ArtistID": 74,
    "AlbumID": 147,
    "TagID": 5
  },
  {
    "ID": 215,
    "Title": "Dramaturgy",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\03 Dramaturgy.m4a",
    "ArtistID": 34,
    "AlbumID": 64,
    "TagID": 5
  },
  {
    "ID": 216,
    "Title": "Raison Detre",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\03 Raison Detre.m4a",
    "ArtistID": 34,
    "AlbumID": 148,
    "TagID": 5
  },
  {
    "ID": 217,
    "Title": "Shinkai",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\03 Shinkai.m4a",
    "ArtistID": 34,
    "AlbumID": 62,
    "TagID": 5
  },
  {
    "ID": 218,
    "Title": "お勉強しといてよ",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\03 お勉強しといてよ.m4a",
    "ArtistID": 71,
    "AlbumID": 146,
    "TagID": 5
  },
  {
    "ID": 219,
    "Title": "言って。",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\03 言って。.m4a",
    "ArtistID": 72,
    "AlbumID": 149,
    "TagID": 5
  },
  {
    "ID": 220,
    "Title": "あの夏に咲け",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\04 あの夏に咲け.m4a",
    "ArtistID": 72,
    "AlbumID": 149,
    "TagID": 5
  },
  {
    "ID": 221,
    "Title": "ヒッチコック",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\04 ヒッチコック.m4a",
    "ArtistID": 72,
    "AlbumID": 150,
    "TagID": 5
  },
  {
    "ID": 222,
    "Title": "勘ぐれい",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\04 勘ぐれい.m4a",
    "ArtistID": 71,
    "AlbumID": 146,
    "TagID": 5
  },
  {
    "ID": 223,
    "Title": "夏恋慕 (feat. 春茶)",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\04. Summer Love.mp3",
    "ArtistID": 75,
    "AlbumID": 151,
    "TagID": 5
  },
  {
    "ID": 224,
    "Title": "Goodbye with a smile",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\04.さよならスマイル-Kobasolo.mp3",
    "ArtistID": 44,
    "AlbumID": 87,
    "TagID": 5
  },
  {
    "ID": 225,
    "Title": "Anoko secret",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\05 Anoko secret.m4a",
    "ArtistID": 34,
    "AlbumID": 64,
    "TagID": 5
  },
  {
    "ID": 226,
    "Title": "Heikousen",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\06 Heikousen.m4a",
    "ArtistID": 76,
    "AlbumID": 152,
    "TagID": 5
  },
  {
    "ID": 227,
    "Title": "あいつら全員同窓会",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\06 あいつら全員同窓会.m4a",
    "ArtistID": 71,
    "AlbumID": 141,
    "TagID": 5
  },
  {
    "ID": 228,
    "Title": "又三郎",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\06 又三郎.m4a",
    "ArtistID": 72,
    "AlbumID": 145,
    "TagID": 5
  },
  {
    "ID": 229,
    "Title": "ラブレター (feat. 春茶)",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\06. ラブレター (feat. 春茶).mp3",
    "ArtistID": 75,
    "AlbumID": 151,
    "TagID": 5
  },
  {
    "ID": 230,
    "Title": "あとひとつ feat.こぴ",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\06.あとひとつ feat.こぴ.mp3",
    "ArtistID": 77,
    "AlbumID": 153,
    "TagID": 5
  },
  {
    "ID": 231,
    "Title": "I wish there's no you to be around",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\06.君さえいなけりゃ-Kobasolo.mp3",
    "ArtistID": 44,
    "AlbumID": 87,
    "TagID": 5
  },
  {
    "ID": 232,
    "Title": "花人局",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\07 花人局.m4a",
    "ArtistID": 72,
    "AlbumID": 139,
    "TagID": 5
  },
  {
    "ID": 233,
    "Title": "雲と幽霊",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\07 雲と幽霊.m4a",
    "ArtistID": 72,
    "AlbumID": 149,
    "TagID": 5
  },
  {
    "ID": 234,
    "Title": "I love you so much but I can't tell you",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\07.あなたのことが好きだなんて言えないんです。-Kobasolo.mp3",
    "ArtistID": 44,
    "AlbumID": 87,
    "TagID": 5
  },
  {
    "ID": 235,
    "Title": "Kokoroyohou",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\08 Kokoroyohou.m4a",
    "ArtistID": 34,
    "AlbumID": 148,
    "TagID": 5
  },
  {
    "ID": 236,
    "Title": "MILABO",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\08 MILABO.m4a",
    "ArtistID": 71,
    "AlbumID": 146,
    "TagID": 5
  },
  {
    "ID": 237,
    "Title": "五月は花緑青の窓辺から",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\08 五月は花緑青の窓辺から.m4a",
    "ArtistID": 72,
    "AlbumID": 154,
    "TagID": 5
  },
  {
    "ID": 238,
    "Title": "青と夏",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\08 青と夏.m4a",
    "ArtistID": 70,
    "AlbumID": 155,
    "TagID": 5
  },
  {
    "ID": 239,
    "Title": "夜紛い",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\09 夜紛い.m4a",
    "ArtistID": 72,
    "AlbumID": 154,
    "TagID": 5
  },
  {
    "ID": 240,
    "Title": "HANABI feat.春茶",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\09.HANABI feat.春茶.mp3",
    "ArtistID": 74,
    "AlbumID": 147,
    "TagID": 5
  },
  {
    "ID": 241,
    "Title": "スパークル(movie ver.) feat. 春茶",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\10. スパークル(movie ver.) feat. 春茶.mp3",
    "ArtistID": 73,
    "AlbumID": 88,
    "TagID": 5
  },
  {
    "ID": 242,
    "Title": "10時の方角",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\10時の方角.mp3",
    "ArtistID": 78,
    "AlbumID": 156,
    "TagID": 5
  },
  {
    "ID": 243,
    "Title": "パレード",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\11 パレード.m4a",
    "ArtistID": 72,
    "AlbumID": 154,
    "TagID": 5
  },
  {
    "ID": 244,
    "Title": "115万キロのフィルム",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\115万キロのフィルム.mp3",
    "ArtistID": 68,
    "AlbumID": 131,
    "TagID": 5
  },
  {
    "ID": 245,
    "Title": "ミラーチューン",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\12 ミラーチューン.m4a",
    "ArtistID": 71,
    "AlbumID": 141,
    "TagID": 5
  },
  {
    "ID": 246,
    "Title": "ロマンチシズム",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\12 ロマンチシズム.m4a",
    "ArtistID": 70,
    "AlbumID": 155,
    "TagID": 5
  },
  {
    "ID": 247,
    "Title": "夜行",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\13 夜行.m4a",
    "ArtistID": 72,
    "AlbumID": 139,
    "TagID": 5
  },
  {
    "ID": 248,
    "Title": "だから僕は音楽を辞めた",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\14 だから僕は音楽を辞めた.m4a",
    "ArtistID": 72,
    "AlbumID": 154,
    "TagID": 5
  },
  {
    "ID": 249,
    "Title": "2FACE",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\2FACE.mp3",
    "ArtistID": 50,
    "AlbumID": 119,
    "TagID": 5
  },
  {
    "ID": 250,
    "Title": "7月の翼",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\7月の翼.mp3",
    "ArtistID": 79,
    "AlbumID": 157,
    "TagID": 5
  },
  {
    "ID": 251,
    "Title": "After Rain -Scarlet ver.-",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\After Rain -Scarlet ver.-.mp3",
    "ArtistID": 79,
    "AlbumID": 158,
    "TagID": 5
  },
  {
    "ID": 252,
    "Title": "Aitai",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\Aitai.mp3",
    "ArtistID": 47,
    "AlbumID": 99,
    "TagID": 5
  },
  {
    "ID": 253,
    "Title": "Anataga Kimeta Kyounara",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\Anataga Kimeta Kyounara.mp3",
    "ArtistID": 47,
    "AlbumID": 159,
    "TagID": 5
  },
  {
    "ID": 254,
    "Title": "Anatani Aenaku Naruhimade",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\Anatani Aenaku Naruhimade.mp3",
    "ArtistID": 47,
    "AlbumID": 112,
    "TagID": 5
  },
  {
    "ID": 255,
    "Title": "Apoptosis",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\Apoptosis.mp3",
    "ArtistID": 68,
    "AlbumID": 160,
    "TagID": 5
  },
  {
    "ID": 256,
    "Title": "Asahino Youna Kiss O Shite",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\Asahino Youna Kiss O Shite.mp3",
    "ArtistID": 80,
    "AlbumID": 161,
    "TagID": 5
  },
  {
    "ID": 257,
    "Title": "Ato Hitotsu feat. kopi",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\Ato Hitotsu feat. kopi.mp3",
    "ArtistID": 81,
    "AlbumID": 162,
    "TagID": 5
  },
  {
    "ID": 258,
    "Title": "baby don't know why",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\Baby don't know why.mp3",
    "ArtistID": 47,
    "AlbumID": 103,
    "TagID": 5
  },
  {
    "ID": 259,
    "Title": "be alive",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\Be alive.mp3",
    "ArtistID": 47,
    "AlbumID": 99,
    "TagID": 5
  },
  {
    "ID": 260,
    "Title": "Be... - World Sketch Star Piano Remix",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\Be... - World Sketch Star Piano Remix.mp3",
    "ArtistID": 47,
    "AlbumID": 163,
    "TagID": 5
  },
  {
    "ID": 261,
    "Title": "Beautiful",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\Beautiful.mp3",
    "ArtistID": 50,
    "AlbumID": 164,
    "TagID": 5
  },
  {
    "ID": 262,
    "Title": "Blind to you (Remaster for 星の消えた夜に 2022)",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\Blind to you (Remaster for 星の消えた夜に 2022).mp3",
    "ArtistID": 79,
    "AlbumID": 165,
    "TagID": 5
  },
  {
    "ID": 263,
    "Title": "Bokuramadaunderground",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\Bokuramadaunderground.mp3",
    "ArtistID": 34,
    "AlbumID": 166,
    "TagID": 5
  },
  {
    "ID": 264,
    "Title": "BRAVE",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\BRAVE.mp3",
    "ArtistID": 47,
    "AlbumID": 161,
    "TagID": 5
  },
  {
    "ID": 265,
    "Title": "Ichinen Nikagetsu Hatsuka",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\BRIGHT - Ichinen Nikagetsu Hatsuka.mp3",
    "ArtistID": 82,
    "AlbumID": 104,
    "TagID": 5
  },
  {
    "ID": 266,
    "Title": "Bye For Now",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\Bye For Now.mp3",
    "ArtistID": 47,
    "AlbumID": 99,
    "TagID": 5
  },
  {
    "ID": 267,
    "Title": "Calendar Girl",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\Calendar Girl.mp3",
    "ArtistID": 79,
    "AlbumID": 167,
    "TagID": 5
  },
  {
    "ID": 268,
    "Title": "CANDY",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\CANDY.mp3",
    "ArtistID": 50,
    "AlbumID": 97,
    "TagID": 5
  },
  {
    "ID": 269,
    "Title": "Chasin'",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\Chasin'.mp3",
    "ArtistID": 83,
    "AlbumID": 97,
    "TagID": 5
  },
  {
    "ID": 270,
    "Title": "Yes",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\Chihiro - Yes.mp3",
    "ArtistID": 42,
    "AlbumID": 121,
    "TagID": 5
  },
  {
    "ID": 271,
    "Title": "Chiisana Koi no Uta",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\Chiisana Koi no Uta.mp3",
    "ArtistID": 44,
    "AlbumID": 168,
    "TagID": 5
  },
  {
    "ID": 272,
    "Title": "Cold Kiss",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\Cold Kiss.mp3",
    "ArtistID": 47,
    "AlbumID": 101,
    "TagID": 5
  },
  {
    "ID": 273,
    "Title": "Crescent Moon",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\Crescent Moon.mp3",
    "ArtistID": 47,
    "AlbumID": 95,
    "TagID": 5
  },
  {
    "ID": 274,
    "Title": "crossing field",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\Crossing field.mp3",
    "ArtistID": 84,
    "AlbumID": 169,
    "TagID": 5
  },
  {
    "ID": 275,
    "Title": "DADDY ! DADDY ! DO !",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\DADDY ! DADDY ! DO !.mp3",
    "ArtistID": 85,
    "AlbumID": 170,
    "TagID": 5
  },
  {
    "ID": 276,
    "Title": "Daisy (Remaster for 星の消えた夜に 2022)",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\Daisy.mp3",
    "ArtistID": 79,
    "AlbumID": 165,
    "TagID": 5
  },
  {
    "ID": 277,
    "Title": "Darlin’",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\Darlin’.mp3",
    "ArtistID": 50,
    "AlbumID": 119,
    "TagID": 5
  },
  {
    "ID": 278,
    "Title": "Dear Mr「F」",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\Dear Mr「F」.mp3",
    "ArtistID": 71,
    "AlbumID": 171,
    "TagID": 5
  },
  {
    "ID": 279,
    "Title": "DEAREST DROP",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\DEAREST DROP.mp3",
    "ArtistID": 86,
    "AlbumID": 172,
    "TagID": 5
  },
  {
    "ID": 280,
    "Title": "Desert",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\Desert.mp3",
    "ArtistID": 47,
    "AlbumID": 90,
    "TagID": 5
  },
  {
    "ID": 281,
    "Title": "Don't You Stop",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\Don't You Stop.mp3",
    "ArtistID": 50,
    "AlbumID": 164,
    "TagID": 5
  },
  {
    "ID": 282,
    "Title": "Epilogue",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\Epilogue.mp3",
    "ArtistID": 47,
    "AlbumID": 90,
    "TagID": 5
  },
  {
    "ID": 283,
    "Title": "Familia",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\Familia.mp3",
    "ArtistID": 78,
    "AlbumID": 156,
    "TagID": 5
  },
  {
    "ID": 284,
    "Title": "fiction blue",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\fiction blue.mp3",
    "ArtistID": 38,
    "AlbumID": 68,
    "TagID": 5
  },
  {
    "ID": 285,
    "Title": "Flyday Chinatown",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\Flyday Chinatown.mp3",
    "ArtistID": 47,
    "AlbumID": 105,
    "TagID": 5
  },
  {
    "ID": 286,
    "Title": "Footprint",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\Footprint.mp3",
    "ArtistID": 47,
    "AlbumID": 112,
    "TagID": 5
  },
  {
    "ID": 287,
    "Title": "Forget-me-not",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\Forget-me-not.mp3",
    "ArtistID": 47,
    "AlbumID": 99,
    "TagID": 5
  },
  {
    "ID": 288,
    "Title": "Fukashigi No Carte \"Bunny Girl Senpai\"",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\Fukashigi No Carte - Bunny Girl Senpai.mp3",
    "ArtistID": 87,
    "AlbumID": 173,
    "TagID": 5
  },
  {
    "ID": 289,
    "Title": "Fukashigi no Carte",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\Fukashigi no Carte.mp3",
    "ArtistID": 88,
    "AlbumID": 174,
    "TagID": 5
  },
  {
    "ID": 290,
    "Title": "Fun Fun Christmas",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\Fun Fun Christmas.mp3",
    "ArtistID": 47,
    "AlbumID": 112,
    "TagID": 5
  },
  {
    "ID": 291,
    "Title": "Got A Feeling",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\Got A Feeling.mp3",
    "ArtistID": 50,
    "AlbumID": 97,
    "TagID": 5
  },
  {
    "ID": 292,
    "Title": "Go☆サマーガール",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\Go☆サマーガール.mp3",
    "ArtistID": 89,
    "AlbumID": 175,
    "TagID": 5
  },
  {
    "ID": 293,
    "Title": "grilletto",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\grilletto.mp3",
    "ArtistID": 90,
    "AlbumID": 176,
    "TagID": 5
  },
  {
    "ID": 294,
    "Title": "Hajimarino Toki",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\Hajimarino Toki.mp3",
    "ArtistID": 47,
    "AlbumID": 177,
    "TagID": 5
  },
  {
    "ID": 295,
    "Title": "Hana",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\Hana.mp3",
    "ArtistID": 47,
    "AlbumID": 112,
    "TagID": 5
  },
  {
    "ID": 296,
    "Title": "Happy encount",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\Happy encount.mp3",
    "ArtistID": 91,
    "AlbumID": 178,
    "TagID": 5
  },
  {
    "ID": 297,
    "Title": "Hatsukoi",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\Hatsukoi.mp3",
    "ArtistID": 47,
    "AlbumID": 106,
    "TagID": 5
  },
  {
    "ID": 298,
    "Title": "Heaven’s Door",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\Heaven’s Door.mp3",
    "ArtistID": 50,
    "AlbumID": 119,
    "TagID": 5
  },
  {
    "ID": 299,
    "Title": "Hello,world!",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\Hello,world!.mp3",
    "ArtistID": 92,
    "AlbumID": 179,
    "TagID": 5
  },
  {
    "ID": 300,
    "Title": "HELLO",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\HELLO.mp3",
    "ArtistID": 47,
    "AlbumID": 101,
    "TagID": 5
  },
  {
    "ID": 301,
    "Title": "Here",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\Here.mp3",
    "ArtistID": 93,
    "AlbumID": 180,
    "TagID": 5
  },
  {
    "ID": 302,
    "Title": "Heroes",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\Heroes.mp3",
    "ArtistID": 47,
    "AlbumID": 101,
    "TagID": 5
  },
  {
    "ID": 303,
    "Title": "I Remember You",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\I Remember You.mp3",
    "ArtistID": 94,
    "AlbumID": 101,
    "TagID": 5
  },
  {
    "ID": 304,
    "Title": "I'm ALIVE",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\I'm ALIVE.mp3",
    "ArtistID": 47,
    "AlbumID": 112,
    "TagID": 5
  },
  {
    "ID": 305,
    "Title": "Ihoujin",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\Ihoujin.mp3",
    "ArtistID": 47,
    "AlbumID": 105,
    "TagID": 5
  },
  {
    "ID": 306,
    "Title": "inverted world",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\inverted world.mp3",
    "ArtistID": 91,
    "AlbumID": 178,
    "TagID": 5
  },
  {
    "ID": 307,
    "Title": "Is There Still Anything That Love Can Do?",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\Is There Still Anything That Love Can Do.mp3",
    "ArtistID": 95,
    "AlbumID": 181,
    "TagID": 5
  },
  {
    "ID": 308,
    "Title": "It's OK",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\It's OK.mp3",
    "ArtistID": 47,
    "AlbumID": 103,
    "TagID": 5
  },
  {
    "ID": 309,
    "Title": "It's okay to social misfit!",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\It's okay to social misfit!.mp3",
    "ArtistID": 37,
    "AlbumID": 182,
    "TagID": 5
  },
  {
    "ID": 310,
    "Title": "Itsumademo Kawaranu Aio",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\Itsumademo Kawaranu Aio.mp3",
    "ArtistID": 47,
    "AlbumID": 108,
    "TagID": 5
  },
  {
    "ID": 311,
    "Title": "Jasmine",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\Jasmine.mp3",
    "ArtistID": 78,
    "AlbumID": 183,
    "TagID": 5
  },
  {
    "ID": 312,
    "Title": "JEWEL",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\JEWEL.mp3",
    "ArtistID": 47,
    "AlbumID": 113,
    "TagID": 5
  },
  {
    "ID": 313,
    "Title": "Just disappear",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\Just disappear.mp3",
    "ArtistID": 37,
    "AlbumID": 184,
    "TagID": 5
  },
  {
    "ID": 314,
    "Title": "Kanade",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\Kanade.mp3",
    "ArtistID": 47,
    "AlbumID": 99,
    "TagID": 5
  },
  {
    "ID": 315,
    "Title": null,
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\Kie Kitano - Hazakura.mp3",
    "ArtistID": 96,
    "AlbumID": 104,
    "TagID": 5
  },
  {
    "ID": 316,
    "Title": "Kimiga Omoideni Narumaeni",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\Kimiga Omoideni Narumaeni.mp3",
    "ArtistID": 47,
    "AlbumID": 99,
    "TagID": 5
  },
  {
    "ID": 317,
    "Title": "KIRA☆KIRA☆",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\KIRA☆KIRA☆.mp3",
    "ArtistID": 50,
    "AlbumID": 119,
    "TagID": 5
  },
  {
    "ID": 318,
    "Title": "Kiss Kiss Kiss",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\Kiss Kiss Kiss.mp3",
    "ArtistID": 50,
    "AlbumID": 119,
    "TagID": 5
  },
  {
    "ID": 319,
    "Title": "KOI SEYO OTOME",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\KOI SEYO OTOME.mp3",
    "ArtistID": 97,
    "AlbumID": 87,
    "TagID": 5
  },
  {
    "ID": 320,
    "Title": "Kokoni Iruwa",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\Kokoni Iruwa.mp3",
    "ArtistID": 47,
    "AlbumID": 112,
    "TagID": 5
  },
  {
    "ID": 321,
    "Title": "Konomama Kimidakeo Ubaisaritai",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\Konomama Kimidakeo Ubaisaritai.mp3",
    "ArtistID": 47,
    "AlbumID": 99,
    "TagID": 5
  },
  {
    "ID": 322,
    "Title": "Konyadake Kitto",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\Konyadake Kitto.mp3",
    "ArtistID": 47,
    "AlbumID": 94,
    "TagID": 5
  },
  {
    "ID": 323,
    "Title": "Kuchizuke Diamond",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\Kuchizuke Diamond.mp3",
    "ArtistID": 98,
    "AlbumID": 185,
    "TagID": 5
  },
  {
    "ID": 324,
    "Title": "Lamp",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\Lamp.mp3",
    "ArtistID": 78,
    "AlbumID": 186,
    "TagID": 5
  },
  {
    "ID": 325,
    "Title": "let go",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\let go.mp3",
    "ArtistID": 47,
    "AlbumID": 99,
    "TagID": 5
  },
  {
    "ID": 326,
    "Title": "Little Car",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\Little Car.mp3",
    "ArtistID": 47,
    "AlbumID": 90,
    "TagID": 5
  },
  {
    "ID": 327,
    "Title": "Lovers",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\Lovers.mp3",
    "ArtistID": 78,
    "AlbumID": 187,
    "TagID": 5
  },
  {
    "ID": 328,
    "Title": "MAGIC",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\MAGIC.mp3",
    "ArtistID": 78,
    "AlbumID": 187,
    "TagID": 5
  },
  {
    "ID": 329,
    "Title": "Manatsuno Yono Yume",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\Manatsuno Yono Yume.mp3",
    "ArtistID": 47,
    "AlbumID": 108,
    "TagID": 5
  },
  {
    "ID": 330,
    "Title": "Mata Aeru Himade",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\Mata Aeru Himade.mp3",
    "ArtistID": 47,
    "AlbumID": 102,
    "TagID": 5
  },
  {
    "ID": 331,
    "Title": "MIDNIGHT PRETENDERS",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\MIDNIGHT PRETENDERS.mp3",
    "ArtistID": 47,
    "AlbumID": 106,
    "TagID": 5
  },
  {
    "ID": 332,
    "Title": "Mine (Remaster for 星の消えた夜に 2022)",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\Mine (Remaster for 星の消えた夜に 2022).mp3",
    "ArtistID": 79,
    "AlbumID": 165,
    "TagID": 5
  },
  {
    "ID": 333,
    "Title": "MIRAI",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\MIRAI.mp3",
    "ArtistID": 90,
    "AlbumID": 188,
    "TagID": 5
  },
  {
    "ID": 334,
    "Title": "Mirror",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\Mirror.mp3",
    "ArtistID": 60,
    "AlbumID": 189,
    "TagID": 5
  },
  {
    "ID": 335,
    "Title": "Momenno Handkerchief",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\Momenno Handkerchief.mp3",
    "ArtistID": 47,
    "AlbumID": 106,
    "TagID": 5
  },
  {
    "ID": 336,
    "Title": "monochrome",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\monochrome.mp3",
    "ArtistID": 89,
    "AlbumID": 190,
    "TagID": 5
  },
  {
    "ID": 337,
    "Title": "My Darling",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\My Darling.mp3",
    "ArtistID": 47,
    "AlbumID": 112,
    "TagID": 5
  },
  {
    "ID": 338,
    "Title": "my sweetest one (Remaster for 星の消えた夜に 2022)",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\my sweetest one (Remaster for 星の消えた夜に 2022).mp3",
    "ArtistID": 79,
    "AlbumID": 165,
    "TagID": 5
  },
  {
    "ID": 339,
    "Title": "My Way",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\My Way.mp3",
    "ArtistID": 47,
    "AlbumID": 111,
    "TagID": 5
  },
  {
    "ID": 340,
    "Title": "Natsurenbo",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\Natsurenbo.mp3",
    "ArtistID": 97,
    "AlbumID": 191,
    "TagID": 5
  },
  {
    "ID": 341,
    "Title": "NEWDAY",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\NEWDAY.mp3",
    "ArtistID": 47,
    "AlbumID": 192,
    "TagID": 5
  },
  {
    "ID": 342,
    "Title": "No.1",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\No.1.mp3",
    "ArtistID": 44,
    "AlbumID": 168,
    "TagID": 5
  },
  {
    "ID": 343,
    "Title": "Omoideno Sukuriin",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\Omoideno Sukuriin.mp3",
    "ArtistID": 47,
    "AlbumID": 105,
    "TagID": 5
  },
  {
    "ID": 344,
    "Title": "ONCE",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\ONCE.mp3",
    "ArtistID": 47,
    "AlbumID": 101,
    "TagID": 5
  },
  {
    "ID": 345,
    "Title": "One More Time",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\One More Time.mp3",
    "ArtistID": 47,
    "AlbumID": 102,
    "TagID": 5
  },
  {
    "ID": 346,
    "Title": "Perfect Boy",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\Perfect Boy.mp3",
    "ArtistID": 47,
    "AlbumID": 112,
    "TagID": 5
  },
  {
    "ID": 347,
    "Title": "Pretender",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\Pretender.mp3",
    "ArtistID": 68,
    "AlbumID": 193,
    "TagID": 5
  },
  {
    "ID": 348,
    "Title": "purest note 〜あたたかい音 - Ver. Strings Quartet",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\purest note 〜あたたかい音 - Ver. Strings Quartet.mp3",
    "ArtistID": 57,
    "AlbumID": 194,
    "TagID": 5
  },
  {
    "ID": 349,
    "Title": "RESET",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\RESET.mp3",
    "ArtistID": 42,
    "AlbumID": 121,
    "TagID": 5
  },
  {
    "ID": 350,
    "Title": "Rising Hope",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\Rising Hope.mp3",
    "ArtistID": 84,
    "AlbumID": 195,
    "TagID": 5
  },
  {
    "ID": 351,
    "Title": "Romance",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\Romance.mp3",
    "ArtistID": 99,
    "AlbumID": 196,
    "TagID": 5
  },
  {
    "ID": 352,
    "Title": "Roppongi Junjouha",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\Roppongi Junjouha.mp3",
    "ArtistID": 47,
    "AlbumID": 106,
    "TagID": 5
  },
  {
    "ID": 353,
    "Title": "Saigo No Ame",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\Saigo No Ame.mp3",
    "ArtistID": 47,
    "AlbumID": 99,
    "TagID": 5
  },
  {
    "ID": 354,
    "Title": "Saudade",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\Saudade.mp3",
    "ArtistID": 47,
    "AlbumID": 99,
    "TagID": 5
  },
  {
    "ID": 355,
    "Title": "Sayonara",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\Sayonara.mp3",
    "ArtistID": 47,
    "AlbumID": 163,
    "TagID": 5
  },
  {
    "ID": 356,
    "Title": "SELF PRODUCER",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\SELF PRODUCER.mp3",
    "ArtistID": 57,
    "AlbumID": 118,
    "TagID": 5
  },
  {
    "ID": 357,
    "Title": "Shake & Shake",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\Shake & Shake.mp3",
    "ArtistID": 78,
    "AlbumID": 197,
    "TagID": 5
  },
  {
    "ID": 358,
    "Title": "Shiawaseni Naritai",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\Shiawaseni Naritai.mp3",
    "ArtistID": 47,
    "AlbumID": 92,
    "TagID": 5
  },
  {
    "ID": 359,
    "Title": "SHOCK!",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\SHOCK!.mp3",
    "ArtistID": 38,
    "AlbumID": 198,
    "TagID": 5
  },
  {
    "ID": 360,
    "Title": "Shukumei",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\Shukumei.mp3",
    "ArtistID": 68,
    "AlbumID": 193,
    "TagID": 5
  },
  {
    "ID": 361,
    "Title": "Silent Tears",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\Silent Tears.mp3",
    "ArtistID": 47,
    "AlbumID": 112,
    "TagID": 5
  },
  {
    "ID": 362,
    "Title": "Sincerely",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\Sincerely.mp3",
    "ArtistID": 91,
    "AlbumID": 199,
    "TagID": 5
  },
  {
    "ID": 363,
    "Title": "Sleeping town",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\Sleeping town.mp3",
    "ArtistID": 100,
    "AlbumID": 77,
    "TagID": 5
  },
  {
    "ID": 364,
    "Title": "Sorato Kimino Aidani",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\Sorato Kimino Aidani.mp3",
    "ArtistID": 47,
    "AlbumID": 108,
    "TagID": 5
  },
  {
    "ID": 365,
    "Title": "Sparkle - Original Version",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\Sparkle - Original Version.mp3",
    "ArtistID": 95,
    "AlbumID": 200,
    "TagID": 5
  },
  {
    "ID": 366,
    "Title": "Stay With Me",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\Stay With Me.mp3",
    "ArtistID": 47,
    "AlbumID": 105,
    "TagID": 5
  },
  {
    "ID": 367,
    "Title": "Sunshine",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\Sunshine.mp3",
    "ArtistID": 47,
    "AlbumID": 112,
    "TagID": 5
  },
  {
    "ID": 368,
    "Title": "The Fog",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\The Fog.mp3",
    "ArtistID": 101,
    "AlbumID": 201,
    "TagID": 5
  },
  {
    "ID": 369,
    "Title": "There will be love there",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\There will be love there.mp3",
    "ArtistID": 47,
    "AlbumID": 92,
    "TagID": 5
  },
  {
    "ID": 370,
    "Title": "Ti Amo",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\Ti Amo.mp3",
    "ArtistID": 47,
    "AlbumID": 99,
    "TagID": 5
  },
  {
    "ID": 371,
    "Title": "TOMORROW",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\TOMORROW.mp3",
    "ArtistID": 47,
    "AlbumID": 108,
    "TagID": 5
  },
  {
    "ID": 372,
    "Title": "Tooku Tooku",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\Tooku Tooku.mp3",
    "ArtistID": 47,
    "AlbumID": 94,
    "TagID": 5
  },
  {
    "ID": 373,
    "Title": "Toy",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\Toy.mp3",
    "ArtistID": 37,
    "AlbumID": 202,
    "TagID": 5
  },
  {
    "ID": 374,
    "Title": "Traveling",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\Traveling.mp3",
    "ArtistID": 78,
    "AlbumID": 203,
    "TagID": 5
  },
  {
    "ID": 375,
    "Title": "True",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\True.mp3",
    "ArtistID": 47,
    "AlbumID": 90,
    "TagID": 5
  },
  {
    "ID": 376,
    "Title": "Umiwo Miteru",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\Umiwo Miteru.mp3",
    "ArtistID": 47,
    "AlbumID": 204,
    "TagID": 5
  },
  {
    "ID": 377,
    "Title": "Universe",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\Universe.mp3",
    "ArtistID": 68,
    "AlbumID": 160,
    "TagID": 5
  },
  {
    "ID": 378,
    "Title": "violeta",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\violeta.mp3",
    "ArtistID": 38,
    "AlbumID": 68,
    "TagID": 5
  },
  {
    "ID": 379,
    "Title": "WAY YOU ARE",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\WAY YOU ARE.mp3",
    "ArtistID": 102,
    "AlbumID": 204,
    "TagID": 5
  },
  {
    "ID": 380,
    "Title": "White Letter",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\White Letter.mp3",
    "ArtistID": 47,
    "AlbumID": 161,
    "TagID": 5
  },
  {
    "ID": 381,
    "Title": "Who Are You",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\Who Are You.mp3",
    "ArtistID": 47,
    "AlbumID": 205,
    "TagID": 5
  },
  {
    "ID": 382,
    "Title": "WILL",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\WILL.mp3",
    "ArtistID": 91,
    "AlbumID": 206,
    "TagID": 5
  },
  {
    "ID": 383,
    "Title": "Yesterday",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\Yesterday.mp3",
    "ArtistID": 68,
    "AlbumID": 193,
    "TagID": 5
  },
  {
    "ID": 384,
    "Title": "You are Beautiful",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\You are Beautiful.mp3",
    "ArtistID": 47,
    "AlbumID": 112,
    "TagID": 5
  },
  {
    "ID": 385,
    "Title": "you",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\you.mp3",
    "ArtistID": 65,
    "AlbumID": 207,
    "TagID": 5
  },
  {
    "ID": 386,
    "Title": "Yunomi  – はんぶんこ花火",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\Yunomi  – はんぶんこ花火 .mp3",
    "ArtistID": 103,
    "AlbumID": 208,
    "TagID": 5
  },
  {
    "ID": 387,
    "Title": "あの夢をなぞって",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\あの夢をなぞって.mp3",
    "ArtistID": 99,
    "AlbumID": 209,
    "TagID": 5
  },
  {
    "ID": 388,
    "Title": "いつだって青空",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\いつだって青空.mp3",
    "ArtistID": 57,
    "AlbumID": 116,
    "TagID": 5
  },
  {
    "ID": 389,
    "Title": "ここから見える景色",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\ここから見える景色.mp3",
    "ArtistID": 78,
    "AlbumID": 187,
    "TagID": 5
  },
  {
    "ID": 390,
    "Title": "さくら 〜あなたに出会えてよかった〜",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\さくら 〜あなたに出会えてよかった〜.mp3",
    "ArtistID": 56,
    "AlbumID": 210,
    "TagID": 5
  },
  {
    "ID": 391,
    "Title": "しあわせ",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\しあわせ.mp3",
    "ArtistID": 104,
    "AlbumID": 211,
    "TagID": 5
  },
  {
    "ID": 392,
    "Title": "ずっと二人で",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\ずっと二人で.mp3",
    "ArtistID": 50,
    "AlbumID": 119,
    "TagID": 5
  },
  {
    "ID": 393,
    "Title": "そっけない",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\そっけない.mp3",
    "ArtistID": 44,
    "AlbumID": 168,
    "TagID": 5
  },
  {
    "ID": 394,
    "Title": "ただ君に晴れ",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\ただ君に晴れ.mp3",
    "ArtistID": 73,
    "AlbumID": 150,
    "TagID": 5
  },
  {
    "ID": 395,
    "Title": "たぶん",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\たぶん.mp3",
    "ArtistID": 99,
    "AlbumID": 209,
    "TagID": 5
  },
  {
    "ID": 396,
    "Title": "ふたりきりルームシアター",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\ふたりきりルームシアター.mp3",
    "ArtistID": 65,
    "AlbumID": 212,
    "TagID": 5
  },
  {
    "ID": 397,
    "Title": "また君と",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\また君と.mp3",
    "ArtistID": 105,
    "AlbumID": 213,
    "TagID": 5
  },
  {
    "ID": 398,
    "Title": "もう少しだけ",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\もう少しだけ.mp3",
    "ArtistID": 99,
    "AlbumID": 196,
    "TagID": 5
  },
  {
    "ID": 399,
    "Title": "もしも命が描けたら",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\もしも命が描けたら.mp3",
    "ArtistID": 99,
    "AlbumID": 196,
    "TagID": 5
  },
  {
    "ID": 400,
    "Title": "アイアイ愛してるよ♡",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\アイアイ愛してるよ♡.mp3",
    "ArtistID": 57,
    "AlbumID": 214,
    "TagID": 5
  },
  {
    "ID": 401,
    "Title": "アネモネ",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\アネモネ.mp3",
    "ArtistID": 78,
    "AlbumID": 187,
    "TagID": 5
  },
  {
    "ID": 402,
    "Title": "アンコール",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\アンコール.mp3",
    "ArtistID": 99,
    "AlbumID": 209,
    "TagID": 5
  },
  {
    "ID": 403,
    "Title": "イコール",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\イコール.mp3",
    "ArtistID": 78,
    "AlbumID": 203,
    "TagID": 5
  },
  {
    "ID": 404,
    "Title": "インドア系ならトラックメイカー",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\インドア系ならトラックメイカー.mp3",
    "ArtistID": 106,
    "AlbumID": 215,
    "TagID": 5
  },
  {
    "ID": 405,
    "Title": "エンドロール",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\エンドロール.mp3",
    "ArtistID": 78,
    "AlbumID": 216,
    "TagID": 5
  },
  {
    "ID": 406,
    "Title": "キセキ",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\キセキ.mp3",
    "ArtistID": 44,
    "AlbumID": 168,
    "TagID": 5
  },
  {
    "ID": 407,
    "Title": "キミと未来",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\キミと未来.mp3",
    "ArtistID": 107,
    "AlbumID": 217,
    "TagID": 5
  },
  {
    "ID": 408,
    "Title": "ギミギミ",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\ギミギミ.mp3",
    "ArtistID": 50,
    "AlbumID": 119,
    "TagID": 5
  },
  {
    "ID": 409,
    "Title": "シャラララ",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\シャラララ.mp3",
    "ArtistID": 57,
    "AlbumID": 214,
    "TagID": 5
  },
  {
    "ID": 410,
    "Title": "シュガーソングとビターステップ",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\シュガーソングとビターステップ.mp3",
    "ArtistID": 108,
    "AlbumID": 218,
    "TagID": 5
  },
  {
    "ID": 411,
    "Title": "シュガーロス",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\シュガーロス.mp3",
    "ArtistID": 101,
    "AlbumID": 201,
    "TagID": 5
  },
  {
    "ID": 412,
    "Title": "シンシアリー",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\シンシアリー.mp3",
    "ArtistID": 65,
    "AlbumID": 219,
    "TagID": 5
  },
  {
    "ID": 413,
    "Title": "ジェリーフィッシュ (feat. ローラーガール)",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\ジェリーフィッシュ.mp3",
    "ArtistID": 103,
    "AlbumID": 208,
    "TagID": 5
  },
  {
    "ID": 414,
    "Title": "セツナdays",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\セツナdays.mp3",
    "ArtistID": 65,
    "AlbumID": 220,
    "TagID": 5
  },
  {
    "ID": 415,
    "Title": "センス・オブ・ワンダー",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\センス・オブ・ワンダー.mp3",
    "ArtistID": 78,
    "AlbumID": 216,
    "TagID": 5
  },
  {
    "ID": 416,
    "Title": "ソーダ",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\ソーダ.mp3",
    "ArtistID": 78,
    "AlbumID": 221,
    "TagID": 5
  },
  {
    "ID": 417,
    "Title": "ツバメ (feat. ミドリーズ)",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\ツバメ (feat. ミドリーズ).mp3",
    "ArtistID": 109,
    "AlbumID": 196,
    "TagID": 5
  },
  {
    "ID": 418,
    "Title": "ツーアウトロマンス",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\ツーアウトロマンス.mp3",
    "ArtistID": 65,
    "AlbumID": 222,
    "TagID": 5
  },
  {
    "ID": 419,
    "Title": "ナイトウォーカー",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\ナイトウォーカー.mp3",
    "ArtistID": 78,
    "AlbumID": 223,
    "TagID": 5
  },
  {
    "ID": 420,
    "Title": "ニゲラ",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\ニゲラ.mp3",
    "ArtistID": 101,
    "AlbumID": 201,
    "TagID": 5
  },
  {
    "ID": 421,
    "Title": "ハルカ",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\ハルカ.mp3",
    "ArtistID": 99,
    "AlbumID": 209,
    "TagID": 5
  },
  {
    "ID": 422,
    "Title": "ハルジオン",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\ハルジオン.mp3",
    "ArtistID": 99,
    "AlbumID": 209,
    "TagID": 5
  },
  {
    "ID": 423,
    "Title": "パレード",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\パレード.mp3",
    "ArtistID": 73,
    "AlbumID": 224,
    "TagID": 5
  },
  {
    "ID": 424,
    "Title": "ヒーロー・イン・ザ・ミラー",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\ヒーロー・イン・ザ・ミラー.mp3",
    "ArtistID": 65,
    "AlbumID": 220,
    "TagID": 5
  },
  {
    "ID": 425,
    "Title": "ビーユアセルフ",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\ビーユアセルフ.mp3",
    "ArtistID": 101,
    "AlbumID": 201,
    "TagID": 5
  },
  {
    "ID": 426,
    "Title": "ファンファーレ",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\ファンファーレ.mp3",
    "ArtistID": 78,
    "AlbumID": 156,
    "TagID": 5
  },
  {
    "ID": 427,
    "Title": "フィクション",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\フィクション.mp3",
    "ArtistID": 78,
    "AlbumID": 156,
    "TagID": 5
  },
  {
    "ID": 428,
    "Title": "フロム",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\フロム.mp3",
    "ArtistID": 91,
    "AlbumID": 225,
    "TagID": 5
  },
  {
    "ID": 429,
    "Title": "ブレーメン",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\ブレーメン.mp3",
    "ArtistID": 73,
    "AlbumID": 226,
    "TagID": 5
  },
  {
    "ID": 430,
    "Title": "ポラリス",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\ポラリス.mp3",
    "ArtistID": 79,
    "AlbumID": 227,
    "TagID": 5
  },
  {
    "ID": 431,
    "Title": "ミスター",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\ミスター.mp3",
    "ArtistID": 99,
    "AlbumID": 228,
    "TagID": 5
  },
  {
    "ID": 432,
    "Title": "ミラクルバング!",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\ミラクルバング!.mp3",
    "ArtistID": 57,
    "AlbumID": 229,
    "TagID": 5
  },
  {
    "ID": 433,
    "Title": "ミラーチューン",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\ミラーチューン.mp3",
    "ArtistID": 71,
    "AlbumID": 230,
    "TagID": 5
  },
  {
    "ID": 434,
    "Title": "ユラユラ",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\ユラユラ.mp3",
    "ArtistID": 50,
    "AlbumID": 119,
    "TagID": 5
  },
  {
    "ID": 435,
    "Title": "ラストカード",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\ラストカード.mp3",
    "ArtistID": 57,
    "AlbumID": 231,
    "TagID": 5
  },
  {
    "ID": 436,
    "Title": "ラブの逃走",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\ラブの逃走.mp3",
    "ArtistID": 101,
    "AlbumID": 201,
    "TagID": 5
  },
  {
    "ID": 437,
    "Title": "ラブレター",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\ラブレター.mp3",
    "ArtistID": 99,
    "AlbumID": 196,
    "TagID": 5
  },
  {
    "ID": 438,
    "Title": "リタルダンド",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\リタルダンド.mp3",
    "ArtistID": 78,
    "AlbumID": 232,
    "TagID": 5
  },
  {
    "ID": 439,
    "Title": "ロックでキス",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\ロックでキス.mp3",
    "ArtistID": 110,
    "AlbumID": 201,
    "TagID": 5
  },
  {
    "ID": 440,
    "Title": "三原色",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\三原色.mp3",
    "ArtistID": 99,
    "AlbumID": 196,
    "TagID": 5
  },
  {
    "ID": 441,
    "Title": "会いたかった空 - Ver. Strings Quartet",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\会いたかった空 - Ver. Strings Quartet.mp3",
    "ArtistID": 57,
    "AlbumID": 194,
    "TagID": 5
  },
  {
    "ID": 442,
    "Title": "優しい彗星",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\優しい彗星.mp3",
    "ArtistID": 99,
    "AlbumID": 196,
    "TagID": 5
  },
  {
    "ID": 443,
    "Title": "光るなら",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\光るなら.mp3",
    "ArtistID": 111,
    "AlbumID": 233,
    "TagID": 5
  },
  {
    "ID": 444,
    "Title": "又三郎",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\又三郎.mp3",
    "ArtistID": 73,
    "AlbumID": 135,
    "TagID": 5
  },
  {
    "ID": 445,
    "Title": "境界の彼方",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\境界の彼方.mp3",
    "ArtistID": 57,
    "AlbumID": 118,
    "TagID": 5
  },
  {
    "ID": 446,
    "Title": "夜に駆ける",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\夜に駆ける.mp3",
    "ArtistID": 99,
    "AlbumID": 209,
    "TagID": 5
  },
  {
    "ID": 447,
    "Title": "女性が歌うキセキGReeeeN青空エール主題歌 whiteeeen",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\女性が歌うキセキGReeeeN青空エール主題歌 whiteeeen.mp3",
    "ArtistID": 112,
    "AlbumID": 87,
    "TagID": 5
  },
  {
    "ID": 448,
    "Title": "女性が歌う高嶺の花子さんback number",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\女性が歌う高嶺の花子さんback number.mp3",
    "ArtistID": 112,
    "AlbumID": 87,
    "TagID": 5
  },
  {
    "ID": 449,
    "Title": "好きだ",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\好きだ.mp3",
    "ArtistID": 99,
    "AlbumID": 234,
    "TagID": 5
  },
  {
    "ID": 450,
    "Title": "好きな人かいることJY好きな人がいること主題歌",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\好きな人かいることJY好きな人がいること主題歌.mp3",
    "ArtistID": 112,
    "AlbumID": 87,
    "TagID": 5
  },
  {
    "ID": 451,
    "Title": "好きな人がいること",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\好きな人がいること.mp3",
    "ArtistID": 44,
    "AlbumID": 168,
    "TagID": 5
  },
  {
    "ID": 452,
    "Title": "好きになってよかったな",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\好きになってよかったな.mp3",
    "ArtistID": 65,
    "AlbumID": 235,
    "TagID": 5
  },
  {
    "ID": 453,
    "Title": "寄り酔い",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\寄り酔い.mp3",
    "ArtistID": 101,
    "AlbumID": 201,
    "TagID": 5
  },
  {
    "ID": 454,
    "Title": "幽霊東京",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\幽霊東京.mp3",
    "ArtistID": 38,
    "AlbumID": 127,
    "TagID": 5
  },
  {
    "ID": 455,
    "Title": "怪物",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\怪物.mp3",
    "ArtistID": 99,
    "AlbumID": 196,
    "TagID": 5
  },
  {
    "ID": 456,
    "Title": "恋",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\恋.mp3",
    "ArtistID": 57,
    "AlbumID": 118,
    "TagID": 5
  },
  {
    "ID": 457,
    "Title": "恋焦がれて",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\恋焦がれて.mp3",
    "ArtistID": 50,
    "AlbumID": 119,
    "TagID": 5
  },
  {
    "ID": 458,
    "Title": "本音",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\本音.mp3",
    "ArtistID": 78,
    "AlbumID": 236,
    "TagID": 5
  },
  {
    "ID": 459,
    "Title": "歌うたいのバラッド",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\歌うたいのバラッド.mp3",
    "ArtistID": 50,
    "AlbumID": 119,
    "TagID": 5
  },
  {
    "ID": 460,
    "Title": "正しくなれない - From THE FIRST TAKE",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\正しくなれない - From THE FIRST TAKE.mp3",
    "ArtistID": 71,
    "AlbumID": 237,
    "TagID": 5
  },
  {
    "ID": 461,
    "Title": "永遠 - marriage ver.",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\永遠 - marriage ver.mp3",
    "ArtistID": 50,
    "AlbumID": 238,
    "TagID": 5
  },
  {
    "ID": 462,
    "Title": "泡沫",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\泡沫.mp3",
    "ArtistID": 101,
    "AlbumID": 201,
    "TagID": 5
  },
  {
    "ID": 463,
    "Title": "涙のキッス",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\涙のキッス.mp3",
    "ArtistID": 50,
    "AlbumID": 239,
    "TagID": 5
  },
  {
    "ID": 464,
    "Title": "白金ディスコ",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\白金ディスコ.mp3",
    "ArtistID": 66,
    "AlbumID": 128,
    "TagID": 5
  },
  {
    "ID": 465,
    "Title": "真っ裸",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\真っ裸.mp3",
    "ArtistID": 101,
    "AlbumID": 240,
    "TagID": 5
  },
  {
    "ID": 466,
    "Title": "祝祭",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\祝祭.mp3",
    "ArtistID": 78,
    "AlbumID": 241,
    "TagID": 5
  },
  {
    "ID": 467,
    "Title": "約束 -Promise code-",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\約束 -Promise code.mp3",
    "ArtistID": 90,
    "AlbumID": 188,
    "TagID": 5
  },
  {
    "ID": 468,
    "Title": "絶頂讃歌",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\絶頂讃歌.mp3",
    "ArtistID": 101,
    "AlbumID": 242,
    "TagID": 5
  },
  {
    "ID": 469,
    "Title": "群青",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\群青.mp3",
    "ArtistID": 99,
    "AlbumID": 209,
    "TagID": 5
  },
  {
    "ID": 470,
    "Title": "花に亡霊",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\花に亡霊.mp3",
    "ArtistID": 73,
    "AlbumID": 243,
    "TagID": 5
  },
  {
    "ID": 471,
    "Title": "靴の花火",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\靴の花火.mp3",
    "ArtistID": 73,
    "AlbumID": 149,
    "TagID": 5
  },
  {
    "ID": 472,
    "Title": "願い",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\願い.mp3",
    "ArtistID": 78,
    "AlbumID": 244,
    "TagID": 5
  },
  {
    "ID": 473,
    "Title": "飽和",
    "FileName": "D:\\Music\\Music\\J-Pop-Mid\\飽和.mp3",
    "ArtistID": 38,
    "AlbumID": 245,
    "TagID": 5
  },
  {
    "ID": 474,
    "Title": "11 Giờ 11 Phút - Htrol Remix",
    "FileName": "D:\\Music\\Music\\Pop-High\\11 Giờ 11 Phút - Htrol Remix.mp3",
    "ArtistID": 113,
    "AlbumID": 246,
    "TagID": 6
  },
  {
    "ID": 475,
    "Title": "Against The Sun",
    "FileName": "D:\\Music\\Music\\Pop-High\\Against The Sun.mp3",
    "ArtistID": 114,
    "AlbumID": 247,
    "TagID": 6
  },
  {
    "ID": 476,
    "Title": "Anh đã lạc vào - Htrol Remix",
    "FileName": "D:\\Music\\Music\\Pop-High\\Anh đã lạc vào - Htrol Remix.mp3",
    "ArtistID": 113,
    "AlbumID": 246,
    "TagID": 6
  },
  {
    "ID": 477,
    "Title": "Anything Anymore",
    "FileName": "D:\\Music\\Music\\Pop-High\\Anything Anymore.mp3",
    "ArtistID": 115,
    "AlbumID": 248,
    "TagID": 6
  },
  {
    "ID": 478,
    "Title": "Anywhere I Go",
    "FileName": "D:\\Music\\Music\\Pop-High\\Anywhere I Go.mp3",
    "ArtistID": 116,
    "AlbumID": 249,
    "TagID": 6
  },
  {
    "ID": 479,
    "Title": "Are You Lonely",
    "FileName": "D:\\Music\\Music\\Pop-High\\Are You Lonely.mp3",
    "ArtistID": 117,
    "AlbumID": 250,
    "TagID": 6
  },
  {
    "ID": 480,
    "Title": "Beautiful Now",
    "FileName": "D:\\Music\\Music\\Pop-High\\Beautiful Now.mp3",
    "ArtistID": 118,
    "AlbumID": 251,
    "TagID": 6
  },
  {
    "ID": 481,
    "Title": "Body Back (feat. Maia Wright)",
    "FileName": "D:\\Music\\Music\\Pop-High\\Body Back (feat. Maia Wright).mp3",
    "ArtistID": 119,
    "AlbumID": 252,
    "TagID": 6
  },
  {
    "ID": 482,
    "Title": "Can't Wait",
    "FileName": "D:\\Music\\Music\\Pop-High\\Can't Wait.mp3",
    "ArtistID": 120,
    "AlbumID": 253,
    "TagID": 6
  },
  {
    "ID": 483,
    "Title": "Có Trăng Quên Đèn - Htrol Remix",
    "FileName": "D:\\Music\\Music\\Pop-High\\Có Trăng Quên Đèn - Htrol Remix.mp3",
    "ArtistID": 113,
    "AlbumID": 246,
    "TagID": 6
  },
  {
    "ID": 484,
    "Title": "DRUM GO DUM",
    "FileName": "D:\\Music\\Music\\Pop-High\\DRUM GO DUM.mp3",
    "ArtistID": 121,
    "AlbumID": 254,
    "TagID": 6
  },
  {
    "ID": 485,
    "Title": "Em là nhất miền Tây - Htrol Remix",
    "FileName": "D:\\Music\\Music\\Pop-High\\Em là nhất miền Tây - Htrol Remix.mp3",
    "ArtistID": 113,
    "AlbumID": 246,
    "TagID": 6
  },
  {
    "ID": 486,
    "Title": "End of Time",
    "FileName": "D:\\Music\\Music\\Pop-High\\End of Time.mp3",
    "ArtistID": 122,
    "AlbumID": 255,
    "TagID": 6
  },
  {
    "ID": 487,
    "Title": "Fade",
    "FileName": "D:\\Music\\Music\\Pop-High\\Fade.mp3",
    "ArtistID": 17,
    "AlbumID": 22,
    "TagID": 6
  },
  {
    "ID": 488,
    "Title": "Firebird",
    "FileName": "D:\\Music\\Music\\Pop-High\\Firebird.mp3",
    "ArtistID": 123,
    "AlbumID": 256,
    "TagID": 6
  },
  {
    "ID": 489,
    "Title": "Force",
    "FileName": "D:\\Music\\Music\\Pop-High\\Force.mp3",
    "ArtistID": 17,
    "AlbumID": 22,
    "TagID": 6
  },
  {
    "ID": 490,
    "Title": "Frame of Mind",
    "FileName": "D:\\Music\\Music\\Pop-High\\Frame of Mind.mp3",
    "ArtistID": 124,
    "AlbumID": 257,
    "TagID": 6
  },
  {
    "ID": 491,
    "Title": "GIANTS",
    "FileName": "D:\\Music\\Music\\Pop-High\\GIANTS.mp3",
    "ArtistID": 125,
    "AlbumID": 258,
    "TagID": 6
  },
  {
    "ID": 492,
    "Title": "GODS",
    "FileName": "D:\\Music\\Music\\Pop-High\\GODS.mp3",
    "ArtistID": 126,
    "AlbumID": 259,
    "TagID": 6
  },
  {
    "ID": 493,
    "Title": "heart afire",
    "FileName": "D:\\Music\\Music\\Pop-High\\Heart afire.mp3",
    "ArtistID": 127,
    "AlbumID": 260,
    "TagID": 6
  },
  {
    "ID": 494,
    "Title": "I'LL SHOW YOU",
    "FileName": "D:\\Music\\Music\\Pop-High\\I'LL SHOW YOU.mp3",
    "ArtistID": 128,
    "AlbumID": 254,
    "TagID": 6
  },
  {
    "ID": 495,
    "Title": "Ignite - 2016 League Of Legends World Championship",
    "FileName": "D:\\Music\\Music\\Pop-High\\Ignite - LOL.mp3",
    "ArtistID": 129,
    "AlbumID": 261,
    "TagID": 6
  },
  {
    "ID": 496,
    "Title": "Ignite",
    "FileName": "D:\\Music\\Music\\Pop-High\\Ignite.mp3",
    "ArtistID": 130,
    "AlbumID": 262,
    "TagID": 6
  },
  {
    "ID": 497,
    "Title": "Inside the Lines",
    "FileName": "D:\\Music\\Music\\Pop-High\\Inside the Lines.mp3",
    "ArtistID": 131,
    "AlbumID": 263,
    "TagID": 6
  },
  {
    "ID": 498,
    "Title": "Jackpot",
    "FileName": "D:\\Music\\Music\\Pop-High\\Jackpot.mp3",
    "ArtistID": 27,
    "AlbumID": 36,
    "TagID": 6
  },
  {
    "ID": 499,
    "Title": null,
    "FileName": "D:\\Music\\Music\\Pop-High\\Justin Caruso - Talk About Me ft. Victoria Zaro (Leowi Remix).mp3",
    "ArtistID": 132,
    "AlbumID": 264,
    "TagID": 6
  },
  {
    "ID": 500,
    "Title": null,
    "FileName": "D:\\Music\\Music\\Pop-High\\K-391 & Diviners feat. Anna Yvette - City Of Gold.mp3",
    "ArtistID": 132,
    "AlbumID": 264,
    "TagID": 6
  },
  {
    "ID": 501,
    "Title": "Lights Go Down (Radio Mix) [feat. Curtains]",
    "FileName": "D:\\Music\\Music\\Pop-High\\Lights Go Down (Radio Mix) [feat. Curtains].mp3",
    "ArtistID": 133,
    "AlbumID": 265,
    "TagID": 6
  },
  {
    "ID": 502,
    "Title": "Linked",
    "FileName": "D:\\Music\\Music\\Pop-High\\Linked.mp3",
    "ArtistID": 134,
    "AlbumID": 266,
    "TagID": 6
  },
  {
    "ID": 503,
    "Title": "Lone Digger",
    "FileName": "D:\\Music\\Music\\Pop-High\\Lone Digger.mp3",
    "ArtistID": 135,
    "AlbumID": 267,
    "TagID": 6
  },
  {
    "ID": 504,
    "Title": "MORE",
    "FileName": "D:\\Music\\Music\\Pop-High\\MORE.mp3",
    "ArtistID": 136,
    "AlbumID": 254,
    "TagID": 6
  },
  {
    "ID": 505,
    "Title": null,
    "FileName": "D:\\Music\\Music\\Pop-High\\MORTEN - Beautiful Heartbeat (Deorro Remix).mp3",
    "ArtistID": 137,
    "AlbumID": 264,
    "TagID": 6
  },
  {
    "ID": 506,
    "Title": "Move Your Body - Alan Walker Remix",
    "FileName": "D:\\Music\\Music\\Pop-High\\Move Your Body - Alan Walker Remix.mp3",
    "ArtistID": 138,
    "AlbumID": 268,
    "TagID": 6
  },
  {
    "ID": 507,
    "Title": "Never Coming Home (feat. Kinley)",
    "FileName": "D:\\Music\\Music\\Pop-High\\Never Coming Home.mp3",
    "ArtistID": 139,
    "AlbumID": 269,
    "TagID": 6
  },
  {
    "ID": 508,
    "Title": "Nightcore - Angel",
    "FileName": "D:\\Music\\Music\\Pop-High\\Nightcore - Angel.mp3",
    "ArtistID": 140,
    "AlbumID": 270,
    "TagID": 6
  },
  {
    "ID": 509,
    "Title": "Nightcore - Army Of Two",
    "FileName": "D:\\Music\\Music\\Pop-High\\Nightcore - Army Of Two.mp3",
    "ArtistID": 140,
    "AlbumID": 270,
    "TagID": 6
  },
  {
    "ID": 510,
    "Title": "Nightcore - Blackout",
    "FileName": "D:\\Music\\Music\\Pop-High\\Nightcore - Blackout.mp3",
    "ArtistID": 140,
    "AlbumID": 270,
    "TagID": 6
  },
  {
    "ID": 511,
    "Title": "Nightcore - Catch Fire",
    "FileName": "D:\\Music\\Music\\Pop-High\\Nightcore - Catch Fire.mp3",
    "ArtistID": 140,
    "AlbumID": 270,
    "TagID": 6
  },
  {
    "ID": 512,
    "Title": "Nightcore - Counting Stars",
    "FileName": "D:\\Music\\Music\\Pop-High\\Nightcore - Counting Stars.mp3",
    "ArtistID": 140,
    "AlbumID": 270,
    "TagID": 6
  },
  {
    "ID": 513,
    "Title": "Nightcore - Disconnected",
    "FileName": "D:\\Music\\Music\\Pop-High\\Nightcore - Disconnected.mp3",
    "ArtistID": 140,
    "AlbumID": 270,
    "TagID": 6
  },
  {
    "ID": 514,
    "Title": "Nightcore - Fireflies (Remix)",
    "FileName": "D:\\Music\\Music\\Pop-High\\Nightcore - Fireflies (Remix).mp3",
    "ArtistID": 140,
    "AlbumID": 270,
    "TagID": 6
  },
  {
    "ID": 515,
    "Title": "Nightcore - Glad You Came",
    "FileName": "D:\\Music\\Music\\Pop-High\\Nightcore - Glad You Came.mp3",
    "ArtistID": 140,
    "AlbumID": 270,
    "TagID": 6
  },
  {
    "ID": 516,
    "Title": "Nightcore - Hey Devil",
    "FileName": "D:\\Music\\Music\\Pop-High\\Nightcore - Hey Devil.mp3",
    "ArtistID": 140,
    "AlbumID": 270,
    "TagID": 6
  },
  {
    "ID": 517,
    "Title": "Nightcore - How To Be A Heartbreaker",
    "FileName": "D:\\Music\\Music\\Pop-High\\Nightcore - How To Be A Heartbreaker.mp3",
    "ArtistID": 140,
    "AlbumID": 270,
    "TagID": 6
  },
  {
    "ID": 518,
    "Title": "Nightcore - I Like It Loud",
    "FileName": "D:\\Music\\Music\\Pop-High\\Nightcore - I Like It Loud.mp3",
    "ArtistID": 140,
    "AlbumID": 270,
    "TagID": 6
  },
  {
    "ID": 519,
    "Title": "Nightcore - I'm Not Here For Your Entertainment",
    "FileName": "D:\\Music\\Music\\Pop-High\\Nightcore - I'm Not Here For Your Entertainment.mp3",
    "ArtistID": 140,
    "AlbumID": 270,
    "TagID": 6
  },
  {
    "ID": 520,
    "Title": "Nightcore - My Demons",
    "FileName": "D:\\Music\\Music\\Pop-High\\Nightcore - My Demons.mp3",
    "ArtistID": 140,
    "AlbumID": 270,
    "TagID": 6
  },
  {
    "ID": 521,
    "Title": "Nightcore - Run",
    "FileName": "D:\\Music\\Music\\Pop-High\\Nightcore - Run.mp3",
    "ArtistID": 140,
    "AlbumID": 270,
    "TagID": 6
  },
  {
    "ID": 522,
    "Title": "Nightcore - Soldier",
    "FileName": "D:\\Music\\Music\\Pop-High\\Nightcore - Soldier.mp3",
    "ArtistID": 140,
    "AlbumID": 270,
    "TagID": 6
  },
  {
    "ID": 523,
    "Title": "Nightcore - Start A Fire",
    "FileName": "D:\\Music\\Music\\Pop-High\\Nightcore - Start A Fire.mp3",
    "ArtistID": 140,
    "AlbumID": 270,
    "TagID": 6
  },
  {
    "ID": 524,
    "Title": "Nightcore - Stay the Night",
    "FileName": "D:\\Music\\Music\\Pop-High\\Nightcore - Stay the Night.mp3",
    "ArtistID": 140,
    "AlbumID": 270,
    "TagID": 6
  },
  {
    "ID": 525,
    "Title": "Nightcore - Stay",
    "FileName": "D:\\Music\\Music\\Pop-High\\Nightcore - Stay.mp3",
    "ArtistID": 140,
    "AlbumID": 270,
    "TagID": 6
  },
  {
    "ID": 526,
    "Title": "Nightcore - The Nights",
    "FileName": "D:\\Music\\Music\\Pop-High\\Nightcore - The Nights.mp3",
    "ArtistID": 140,
    "AlbumID": 270,
    "TagID": 6
  },
  {
    "ID": 527,
    "Title": "Nightcore - The Phoenix",
    "FileName": "D:\\Music\\Music\\Pop-High\\Nightcore - The Phoenix.mp3",
    "ArtistID": 140,
    "AlbumID": 270,
    "TagID": 6
  },
  {
    "ID": 528,
    "Title": "Nightcore - Windows Down",
    "FileName": "D:\\Music\\Music\\Pop-High\\Nightcore - Windows Down.mp3",
    "ArtistID": 140,
    "AlbumID": 270,
    "TagID": 6
  },
  {
    "ID": 529,
    "Title": "Nothing Stopping Me",
    "FileName": "D:\\Music\\Music\\Pop-High\\Nothing Stopping Me.mp3",
    "ArtistID": 141,
    "AlbumID": 271,
    "TagID": 6
  },
  {
    "ID": 530,
    "Title": "Numb (feat. Johnning)",
    "FileName": "D:\\Music\\Music\\Pop-High\\Numb (feat. Johnning).mp3",
    "ArtistID": 142,
    "AlbumID": 272,
    "TagID": 6
  },
  {
    "ID": 531,
    "Title": "On the Line",
    "FileName": "D:\\Music\\Music\\Pop-High\\On the Line.mp3",
    "ArtistID": 143,
    "AlbumID": 273,
    "TagID": 6
  },
  {
    "ID": 532,
    "Title": "Our Story - Radio Edit",
    "FileName": "D:\\Music\\Music\\Pop-High\\Our Story - Radio Edit.mp3",
    "ArtistID": 144,
    "AlbumID": 274,
    "TagID": 6
  },
  {
    "ID": 533,
    "Title": "Phoenix",
    "FileName": "D:\\Music\\Music\\Pop-High\\Phoenix.mp3",
    "ArtistID": 145,
    "AlbumID": 275,
    "TagID": 6
  },
  {
    "ID": 534,
    "Title": "Play",
    "FileName": "D:\\Music\\Music\\Pop-High\\Play.mp3",
    "ArtistID": 146,
    "AlbumID": 276,
    "TagID": 6
  },
  {
    "ID": 535,
    "Title": "POP/STARS",
    "FileName": "D:\\Music\\Music\\Pop-High\\POP_STARS.mp3",
    "ArtistID": 147,
    "AlbumID": 277,
    "TagID": 6
  },
  {
    "ID": 536,
    "Title": "Red Line",
    "FileName": "D:\\Music\\Music\\Pop-High\\Red Line.mp3",
    "ArtistID": 148,
    "AlbumID": 278,
    "TagID": 6
  },
  {
    "ID": 537,
    "Title": "RISE",
    "FileName": "D:\\Music\\Music\\Pop-High\\RISE.mp3",
    "ArtistID": 149,
    "AlbumID": 279,
    "TagID": 6
  },
  {
    "ID": 538,
    "Title": "Robot Love",
    "FileName": "D:\\Music\\Music\\Pop-High\\Robot Love.mp3",
    "ArtistID": 150,
    "AlbumID": 280,
    "TagID": 6
  },
  {
    "ID": 539,
    "Title": "Saving Light",
    "FileName": "D:\\Music\\Music\\Pop-High\\Saving Light.mp3",
    "ArtistID": 151,
    "AlbumID": 281,
    "TagID": 6
  },
  {
    "ID": 540,
    "Title": "Smoke Filled Room",
    "FileName": "D:\\Music\\Music\\Pop-High\\Smoke Filled Room.mp3",
    "ArtistID": 144,
    "AlbumID": 282,
    "TagID": 6
  },
  {
    "ID": 541,
    "Title": "Start Again",
    "FileName": "D:\\Music\\Music\\Pop-High\\Start Again.mp3",
    "ArtistID": 152,
    "AlbumID": 283,
    "TagID": 6
  },
  {
    "ID": 542,
    "Title": "Summer Air",
    "FileName": "D:\\Music\\Music\\Pop-High\\Summer Air.mp3",
    "ArtistID": 153,
    "AlbumID": 284,
    "TagID": 6
  },
  {
    "ID": 543,
    "Title": "Surrender",
    "FileName": "D:\\Music\\Music\\Pop-High\\Surrender.mp3",
    "ArtistID": 154,
    "AlbumID": 285,
    "TagID": 6
  },
  {
    "ID": 544,
    "Title": "THE BADDEST",
    "FileName": "D:\\Music\\Music\\Pop-High\\THE BADDEST.mp3",
    "ArtistID": 155,
    "AlbumID": 254,
    "TagID": 6
  },
  {
    "ID": 545,
    "Title": "The Spectre",
    "FileName": "D:\\Music\\Music\\Pop-High\\The Spectre.mp3",
    "ArtistID": 17,
    "AlbumID": 286,
    "TagID": 6
  },
  {
    "ID": 546,
    "Title": "Thunder",
    "FileName": "D:\\Music\\Music\\Pop-High\\Thunder.mp3",
    "ArtistID": 156,
    "AlbumID": 287,
    "TagID": 6
  },
  {
    "ID": 547,
    "Title": "Till It's Over",
    "FileName": "D:\\Music\\Music\\Pop-High\\Till It's Over.mp3",
    "ArtistID": 157,
    "AlbumID": 288,
    "TagID": 6
  },
  {
    "ID": 548,
    "Title": "Untouchable",
    "FileName": "D:\\Music\\Music\\Pop-High\\Untouchable.mp3",
    "ArtistID": 158,
    "AlbumID": 289,
    "TagID": 6
  },
  {
    "ID": 549,
    "Title": "VILLAIN",
    "FileName": "D:\\Music\\Music\\Pop-High\\VILLAIN.mp3",
    "ArtistID": 159,
    "AlbumID": 254,
    "TagID": 6
  },
  {
    "ID": 550,
    "Title": null,
    "FileName": "D:\\Music\\Music\\Pop-High\\Virtual Riot - Idols.mp3",
    "ArtistID": 132,
    "AlbumID": 264,
    "TagID": 6
  },
  {
    "ID": 551,
    "Title": "Walk Thru Fire",
    "FileName": "D:\\Music\\Music\\Pop-High\\Walk Thru Fire.mp3",
    "ArtistID": 116,
    "AlbumID": 290,
    "TagID": 6
  },
  {
    "ID": 552,
    "Title": "Without You (feat. Sandro Cavazza)",
    "FileName": "D:\\Music\\Music\\Pop-High\\Without You (feat. Sandro Cavazza).mp3",
    "ArtistID": 160,
    "AlbumID": 291,
    "TagID": 6
  },
  {
    "ID": 553,
    "Title": "Bloom",
    "FileName": "D:\\Music\\Music\\Pop-Low\\Bloom.mp3",
    "ArtistID": 161,
    "AlbumID": 292,
    "TagID": 7
  },
  {
    "ID": 554,
    "Title": "I Do",
    "FileName": "D:\\Music\\Music\\Pop-Low\\I Do.mp3",
    "ArtistID": 162,
    "AlbumID": 293,
    "TagID": 7
  },
  {
    "ID": 555,
    "Title": null,
    "FileName": "D:\\Music\\Music\\Pop-Low\\Madilyn Paige - I'm Yours - Perfect Two.mp3",
    "ArtistID": 132,
    "AlbumID": 264,
    "TagID": 7
  },
  {
    "ID": 556,
    "Title": "Memories",
    "FileName": "D:\\Music\\Music\\Pop-Low\\Memories.mp3",
    "ArtistID": 163,
    "AlbumID": 294,
    "TagID": 7
  },
  {
    "ID": 557,
    "Title": "Nightcore - Hometown Smile",
    "FileName": "D:\\Music\\Music\\Pop-Low\\Nightcore - Hometown Smile.mp3",
    "ArtistID": 140,
    "AlbumID": 270,
    "TagID": 7
  },
  {
    "ID": 558,
    "Title": "Nightcore - I See Your Monsters",
    "FileName": "D:\\Music\\Music\\Pop-Low\\Nightcore - I See Your Monsters.mp3",
    "ArtistID": 140,
    "AlbumID": 270,
    "TagID": 7
  },
  {
    "ID": 559,
    "Title": "Nightcore - If I Die Young",
    "FileName": "D:\\Music\\Music\\Pop-Low\\Nightcore - If I Die Young.mp3",
    "ArtistID": 140,
    "AlbumID": 270,
    "TagID": 7
  },
  {
    "ID": 560,
    "Title": "Nightcore - Let Me Love You",
    "FileName": "D:\\Music\\Music\\Pop-Low\\Nightcore - Let Me Love You.mp3",
    "ArtistID": 140,
    "AlbumID": 270,
    "TagID": 7
  },
  {
    "ID": 561,
    "Title": "Nightcore - Locked Away",
    "FileName": "D:\\Music\\Music\\Pop-Low\\Nightcore - Locked Away.mp3",
    "ArtistID": 140,
    "AlbumID": 270,
    "TagID": 7
  },
  {
    "ID": 562,
    "Title": "Nightcore - Mine",
    "FileName": "D:\\Music\\Music\\Pop-Low\\Nightcore - Mine.mp3",
    "ArtistID": 140,
    "AlbumID": 270,
    "TagID": 7
  },
  {
    "ID": 563,
    "Title": "Nightcore - New Day",
    "FileName": "D:\\Music\\Music\\Pop-Low\\Nightcore - New Day.mp3",
    "ArtistID": 140,
    "AlbumID": 270,
    "TagID": 7
  },
  {
    "ID": 564,
    "Title": "Nightcore - Sakura",
    "FileName": "D:\\Music\\Music\\Pop-Low\\Nightcore - Sakura.mp3",
    "ArtistID": 140,
    "AlbumID": 270,
    "TagID": 7
  },
  {
    "ID": 565,
    "Title": "Nightcore - Say I Love You",
    "FileName": "D:\\Music\\Music\\Pop-Low\\Nightcore - Say I Love You.mp3",
    "ArtistID": 140,
    "AlbumID": 270,
    "TagID": 7
  },
  {
    "ID": 566,
    "Title": "Nightcore - Still Here",
    "FileName": "D:\\Music\\Music\\Pop-Low\\Nightcore - Still Here.mp3",
    "ArtistID": 140,
    "AlbumID": 270,
    "TagID": 7
  },
  {
    "ID": 567,
    "Title": "Nightcore - Try",
    "FileName": "D:\\Music\\Music\\Pop-Low\\Nightcore - Try.mp3",
    "ArtistID": 140,
    "AlbumID": 270,
    "TagID": 7
  },
  {
    "ID": 568,
    "Title": "Nightcore - Where Is The Love",
    "FileName": "D:\\Music\\Music\\Pop-Low\\Nightcore - Where Is The Love.mp3",
    "ArtistID": 140,
    "AlbumID": 270,
    "TagID": 7
  },
  {
    "ID": 569,
    "Title": "One Call Away",
    "FileName": "D:\\Music\\Music\\Pop-Low\\One Call Away.mp3",
    "ArtistID": 164,
    "AlbumID": 295,
    "TagID": 7
  },
  {
    "ID": 570,
    "Title": null,
    "FileName": "D:\\Music\\Music\\Pop-Low\\V.I.E.T Underground - Forever Love.mp3",
    "ArtistID": 132,
    "AlbumID": 264,
    "TagID": 7
  },
  {
    "ID": 571,
    "Title": "We Don't Talk Anymore (feat. Selena Gomez)",
    "FileName": "D:\\Music\\Music\\Pop-Low\\We Don't Talk Anymore.mp3",
    "ArtistID": 165,
    "AlbumID": 295,
    "TagID": 7
  },
  {
    "ID": 572,
    "Title": "All Falls Down (feat. Juliander)",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\All Falls Down (feat. Juliander).mp3",
    "ArtistID": 166,
    "AlbumID": 296,
    "TagID": 8
  },
  {
    "ID": 573,
    "Title": "Alone, Pt. II",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\Alone, Pt. II.mp3",
    "ArtistID": 167,
    "AlbumID": 297,
    "TagID": 8
  },
  {
    "ID": 574,
    "Title": "Alone",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\Alone.mp3",
    "ArtistID": 17,
    "AlbumID": 298,
    "TagID": 8
  },
  {
    "ID": 575,
    "Title": "Attention",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\Attention.mp3",
    "ArtistID": 164,
    "AlbumID": 299,
    "TagID": 8
  },
  {
    "ID": 576,
    "Title": "Beautiful Creatures (feat. MAX)",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\Beautiful Creatures (feat. MAX).mp3",
    "ArtistID": 168,
    "AlbumID": 300,
    "TagID": 8
  },
  {
    "ID": 577,
    "Title": "Buồn Lắm Em Ơi - Htrol Remix",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\Buồn Lắm Em Ơi - Htrol Remix.mp3",
    "ArtistID": 113,
    "AlbumID": 246,
    "TagID": 8
  },
  {
    "ID": 578,
    "Title": "By My Side",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\By My Side.mp3",
    "ArtistID": 169,
    "AlbumID": 301,
    "TagID": 8
  },
  {
    "ID": 579,
    "Title": "Bye Bye (feat. Ivy Adara)",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\Bye Bye.mp3",
    "ArtistID": 170,
    "AlbumID": 302,
    "TagID": 8
  },
  {
    "ID": 580,
    "Title": "Bán Duyên - Htrol Remix",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\Bán Duyên - Htrol Remix.mp3",
    "ArtistID": 113,
    "AlbumID": 246,
    "TagID": 8
  },
  {
    "ID": 581,
    "Title": "Bạn Tình Ơi 3 - Htrol Remix",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\Bạn Tình Ơi 3 - Htrol Remix.mp3",
    "ArtistID": 113,
    "AlbumID": 246,
    "TagID": 8
  },
  {
    "ID": 582,
    "Title": "Bỏ Phật Nhập Ma - Htrol Remix",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\Bỏ Phật Nhập Ma - Htrol Remix.mp3",
    "ArtistID": 113,
    "AlbumID": 246,
    "TagID": 8
  },
  {
    "ID": 583,
    "Title": "Carousel",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\Carousel.mp3",
    "ArtistID": 169,
    "AlbumID": 301,
    "TagID": 8
  },
  {
    "ID": 584,
    "Title": "China - Anh Mỉm Cười Trông Thật Đẹp - Htrol Remix",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\China - Anh Mỉm Cười Trông Thật Đẹp - Htrol Remix.mp3",
    "ArtistID": 113,
    "AlbumID": 246,
    "TagID": 8
  },
  {
    "ID": 585,
    "Title": "Anh đi vội vàng hơn cả tình yêu - Htrol Remix",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\China - Anh đi vội vàng hơn cả tình yêu - Htrol Remix.mp3",
    "ArtistID": 113,
    "AlbumID": 246,
    "TagID": 8
  },
  {
    "ID": 586,
    "Title": "China - Bách Hoa Hương - Htrol Remix",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\China - Bách Hoa Hương - Htrol Remix.mp3",
    "ArtistID": 113,
    "AlbumID": 246,
    "TagID": 8
  },
  {
    "ID": 587,
    "Title": "China - Hồng Nhan Xưa - Htrol Remix",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\China - Hồng Nhan Xưa - Htrol Remix.mp3",
    "ArtistID": 113,
    "AlbumID": 246,
    "TagID": 8
  },
  {
    "ID": 588,
    "Title": "China - Không Bằng - Htrol Remix",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\China - Không Bằng - Htrol Remix.mp3",
    "ArtistID": 113,
    "AlbumID": 246,
    "TagID": 8
  },
  {
    "ID": 589,
    "Title": "China - Một Triệu Khả Năng - Htrol Remix",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\China - Một Triệu Khả Năng - Htrol Remix.mp3",
    "ArtistID": 113,
    "AlbumID": 246,
    "TagID": 8
  },
  {
    "ID": 590,
    "Title": "Nhân Gian Thán - Htrol Remix",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\China - Nhân Gian Thán - Htrol Remix.mp3",
    "ArtistID": 113,
    "AlbumID": 246,
    "TagID": 8
  },
  {
    "ID": 591,
    "Title": "China - Tam Thốn Thiên Đường - Htrol Remix",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\China - Tam Thốn Thiên Đường - Htrol Remix.mp3",
    "ArtistID": 113,
    "AlbumID": 246,
    "TagID": 8
  },
  {
    "ID": 592,
    "Title": "China - Trong Mắt Đều Là Anh - Htrol Remix",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\China - Trong Mắt Đều Là Anh - Htrol Remix.mp3",
    "ArtistID": 113,
    "AlbumID": 246,
    "TagID": 8
  },
  {
    "ID": 593,
    "Title": "China - Tô Mạc Già - Htrol",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\China - Tô Mạc Già - Htrol Remix.mp3",
    "ArtistID": 113,
    "AlbumID": 246,
    "TagID": 8
  },
  {
    "ID": 594,
    "Title": "China - Từ Cửu Môn Hồi Ức - Htrol Remix",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\China - Từ Cửu Môn Hồi Ức - Htrol Remix.mp3",
    "ArtistID": 113,
    "AlbumID": 246,
    "TagID": 8
  },
  {
    "ID": 595,
    "Title": "China - Tỳ Bà Hành - Htrol Remix",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\China - Tỳ Bà Hành - Htrol Remix.mp3",
    "ArtistID": 113,
    "AlbumID": 246,
    "TagID": 8
  },
  {
    "ID": 596,
    "Title": "China - Xuân Tháng 3 - Htrol Remix",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\China - Xuân Tháng 3 - Htrol Remix.mp3",
    "ArtistID": 113,
    "AlbumID": 246,
    "TagID": 8
  },
  {
    "ID": 597,
    "Title": "Chưa Bao Giờ Em Quên - Htrol Remix",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\Chưa Bao Giờ Em Quên - Htrol Remix.mp3",
    "ArtistID": 113,
    "AlbumID": 246,
    "TagID": 8
  },
  {
    "ID": 598,
    "Title": "Daily (feat. Jon Becker)",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\Daily (feat. Jon Becker).mp3",
    "ArtistID": 171,
    "AlbumID": 303,
    "TagID": 8
  },
  {
    "ID": 599,
    "Title": "Dangerous",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\Dangerous.mp3",
    "ArtistID": 169,
    "AlbumID": 301,
    "TagID": 8
  },
  {
    "ID": 600,
    "Title": "Danza Kuduro",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\Danza Kuduro.mp3",
    "ArtistID": 172,
    "AlbumID": 304,
    "TagID": 8
  },
  {
    "ID": 601,
    "Title": "Darkside",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\Darkside.mp3",
    "ArtistID": 173,
    "AlbumID": 305,
    "TagID": 8
  },
  {
    "ID": 602,
    "Title": "Despacito",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\Despacito.mp3",
    "ArtistID": 174,
    "AlbumID": 306,
    "TagID": 8
  },
  {
    "ID": 603,
    "Title": "Diamond Heart",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\Diamond Heart.mp3",
    "ArtistID": 175,
    "AlbumID": 307,
    "TagID": 8
  },
  {
    "ID": 604,
    "Title": "Different World (feat. CORSAK)",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\Different World (feat. CORSAK).mp3",
    "ArtistID": 176,
    "AlbumID": 308,
    "TagID": 8
  },
  {
    "ID": 605,
    "Title": "Drive My Car",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\Drive My Car.mp3",
    "ArtistID": 169,
    "AlbumID": 301,
    "TagID": 8
  },
  {
    "ID": 606,
    "Title": "Ecstasy",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\Ecstasy.mp3",
    "ArtistID": 169,
    "AlbumID": 301,
    "TagID": 8
  },
  {
    "ID": 607,
    "Title": "Em Mỉm Cười Trông Thật Đẹp - Htrol Remix",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\Em Mỉm Cười Trông Thật Đẹp - Htrol Remix.mp3",
    "ArtistID": 113,
    "AlbumID": 246,
    "TagID": 8
  },
  {
    "ID": 608,
    "Title": "Em Ổn Không - Htrol Remix",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\Em Ổn Không - Htrol Remix.mp3",
    "ArtistID": 113,
    "AlbumID": 246,
    "TagID": 8
  },
  {
    "ID": 609,
    "Title": "Faded",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\Faded.mp3",
    "ArtistID": 17,
    "AlbumID": 309,
    "TagID": 8
  },
  {
    "ID": 610,
    "Title": "Fading",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\Fading.mp3",
    "ArtistID": 177,
    "AlbumID": 310,
    "TagID": 8
  },
  {
    "ID": 611,
    "Title": "Fake A Smile",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\Fake A Smile.mp3",
    "ArtistID": 178,
    "AlbumID": 311,
    "TagID": 8
  },
  {
    "ID": 612,
    "Title": "Fight",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\Fight.mp3",
    "ArtistID": 169,
    "AlbumID": 301,
    "TagID": 8
  },
  {
    "ID": 613,
    "Title": "Forever Young",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\Forever Young.mp3",
    "ArtistID": 179,
    "AlbumID": 312,
    "TagID": 8
  },
  {
    "ID": 614,
    "Title": "Frozen",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\Frozen.mp3",
    "ArtistID": 169,
    "AlbumID": 301,
    "TagID": 8
  },
  {
    "ID": 615,
    "Title": "Giang Hải Không Độ Nàng - Htrol Remix",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\Giang Hải Không Độ Nàng - Htrol Remix.mp3",
    "ArtistID": 113,
    "AlbumID": 246,
    "TagID": 8
  },
  {
    "ID": 616,
    "Title": "Give Me Your Love",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\Give Me Your Love.mp3",
    "ArtistID": 169,
    "AlbumID": 301,
    "TagID": 8
  },
  {
    "ID": 617,
    "Title": "Heading Home",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\Heading Home.mp3",
    "ArtistID": 180,
    "AlbumID": 313,
    "TagID": 8
  },
  {
    "ID": 618,
    "Title": "Headlights (feat. KIDDO)",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\Headlights.mp3",
    "ArtistID": 181,
    "AlbumID": 314,
    "TagID": 8
  },
  {
    "ID": 619,
    "Title": "Hello World",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\Hello World.mp3",
    "ArtistID": 182,
    "AlbumID": 315,
    "TagID": 8
  },
  {
    "ID": 620,
    "Title": "Hoài Công - Htrol Remix",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\Hoài Công - Htrol Remix.mp3",
    "ArtistID": 113,
    "AlbumID": 246,
    "TagID": 8
  },
  {
    "ID": 621,
    "Title": "Hypnotized",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\Hypnotized.mp3",
    "ArtistID": 169,
    "AlbumID": 301,
    "TagID": 8
  },
  {
    "ID": 622,
    "Title": "I Took A Pill In Ibiza - Seeb Remix",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\I Took A Pill In Ibiza - Seeb Remix.mp3",
    "ArtistID": 183,
    "AlbumID": 316,
    "TagID": 8
  },
  {
    "ID": 623,
    "Title": "Just For A Moment (feat. Iselin)",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\Just For A Moment.mp3",
    "ArtistID": 184,
    "AlbumID": 302,
    "TagID": 8
  },
  {
    "ID": 624,
    "Title": "Khó Vẽ Nụ Cười - Htrol",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\Khó Vẽ Nụ Cười - Htrol Remix.mp3",
    "ArtistID": 113,
    "AlbumID": 246,
    "TagID": 8
  },
  {
    "ID": 625,
    "Title": "Kids in Love",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\Kids in Love.mp3",
    "ArtistID": 169,
    "AlbumID": 301,
    "TagID": 8
  },
  {
    "ID": 626,
    "Title": "Kings & Queens",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\Kings & Queens.mp3",
    "ArtistID": 185,
    "AlbumID": 317,
    "TagID": 8
  },
  {
    "ID": 627,
    "Title": "Kiếp Duyên Không Thành - Htrol",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\Kiếp Duyên Không Thành - Htrol Remix.mp3",
    "ArtistID": 113,
    "AlbumID": 246,
    "TagID": 8
  },
  {
    "ID": 628,
    "Title": "Kiếp Má Hồng - Htrol Remix",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\Kiếp Má Hồng - Htrol Remix.mp3",
    "ArtistID": 113,
    "AlbumID": 246,
    "TagID": 8
  },
  {
    "ID": 629,
    "Title": "Kết Duyên - Htrol Remix",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\Kết Duyên - Htrol Remix.mp3",
    "ArtistID": 113,
    "AlbumID": 246,
    "TagID": 8
  },
  {
    "ID": 630,
    "Title": "Legends Never Die",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\Legends Never Die.mp3",
    "ArtistID": 186,
    "AlbumID": 318,
    "TagID": 8
  },
  {
    "ID": 631,
    "Title": "Lily",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\Lily.mp3",
    "ArtistID": 187,
    "AlbumID": 319,
    "TagID": 8
  },
  {
    "ID": 632,
    "Title": "Love How It Hurts (feat. Tina Stachowiak)",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\Love How It Hurts (feat. Tina Stachowiak).mp3",
    "ArtistID": 188,
    "AlbumID": 320,
    "TagID": 8
  },
  {
    "ID": 633,
    "Title": "Lão Ái Xử Trảm - Htrol Remix",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\Lão Ái Xử Trảm - Htrol Remix.mp3",
    "ArtistID": 113,
    "AlbumID": 246,
    "TagID": 8
  },
  {
    "ID": 634,
    "Title": "Lặng Lẽ Buông - Htrol Remix",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\Lặng Lẽ Buông - Htrol Remix.mp3",
    "ArtistID": 113,
    "AlbumID": 246,
    "TagID": 8
  },
  {
    "ID": 635,
    "Title": "Lữ Khách Qua Thời Gian - Htrol Remix",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\Lữ Khách Qua Thời Gian - Htrol Remix.mp3",
    "ArtistID": 113,
    "AlbumID": 246,
    "TagID": 8
  },
  {
    "ID": 636,
    "Title": "Maps",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\Maps.mp3",
    "ArtistID": 163,
    "AlbumID": 321,
    "TagID": 8
  },
  {
    "ID": 637,
    "Title": "Meant To Be",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\Meant To Be.mp3",
    "ArtistID": 189,
    "AlbumID": 322,
    "TagID": 8
  },
  {
    "ID": 638,
    "Title": "Mermaids",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\Mermaids.mp3",
    "ArtistID": 169,
    "AlbumID": 301,
    "TagID": 8
  },
  {
    "ID": 639,
    "Title": "Miracles (feat. Tina Stachowiak)",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\Miracles (feat. Tina Stachowiak).mp3",
    "ArtistID": 188,
    "AlbumID": 323,
    "TagID": 8
  },
  {
    "ID": 640,
    "Title": "Một Giấc Mộng Xưa - Htrol Remix",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\Một Giấc Mộng Xưa - Htrol Remix.mp3",
    "ArtistID": 113,
    "AlbumID": 246,
    "TagID": 8
  },
  {
    "ID": 641,
    "Title": "Một Đường Nở hoa - Htrol Remix",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\Một Đường Nở hoa - Htrol Remix.mp3",
    "ArtistID": 113,
    "AlbumID": 246,
    "TagID": 8
  },
  {
    "ID": 642,
    "Title": "Next To Me (feat. Tina Stachowiak)",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\Next To Me (feat. Tina Stachowiak).mp3",
    "ArtistID": 188,
    "AlbumID": 324,
    "TagID": 8
  },
  {
    "ID": 643,
    "Title": "Nhói Lòng Thuyền Hoa - Htrol Remix",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\Nhói Lòng Thuyền Hoa - Htrol Remix.mp3",
    "ArtistID": 113,
    "AlbumID": 246,
    "TagID": 8
  },
  {
    "ID": 644,
    "Title": "Nightcore - Beautiful Creatures",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\Nightcore - Beautiful Creatures.mp3",
    "ArtistID": 140,
    "AlbumID": 270,
    "TagID": 8
  },
  {
    "ID": 645,
    "Title": "Nightcore - Castle On The Hill",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\Nightcore - Castle On The Hill.mp3",
    "ArtistID": 140,
    "AlbumID": 270,
    "TagID": 8
  },
  {
    "ID": 646,
    "Title": "Nightcore - Fire",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\Nightcore - Fire.mp3",
    "ArtistID": 140,
    "AlbumID": 270,
    "TagID": 8
  },
  {
    "ID": 647,
    "Title": "Nightcore - Fireflies",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\Nightcore - Fireflies.mp3",
    "ArtistID": 140,
    "AlbumID": 270,
    "TagID": 8
  },
  {
    "ID": 648,
    "Title": "Nightcore - Lights",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\Nightcore - Lights.mp3",
    "ArtistID": 140,
    "AlbumID": 270,
    "TagID": 8
  },
  {
    "ID": 649,
    "Title": "Nightcore - Like A Ricochet",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\Nightcore - Like A Ricochet.mp3",
    "ArtistID": 140,
    "AlbumID": 270,
    "TagID": 8
  },
  {
    "ID": 650,
    "Title": "Nightcore - Move Like Jagger",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\Nightcore - Move Like Jagger.mp3",
    "ArtistID": 140,
    "AlbumID": 270,
    "TagID": 8
  },
  {
    "ID": 651,
    "Title": "Nightcore - No Friends",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\Nightcore - No Friends.mp3",
    "ArtistID": 140,
    "AlbumID": 270,
    "TagID": 8
  },
  {
    "ID": 652,
    "Title": "Nightcore - One Last Time",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\Nightcore - One Last Time.mp3",
    "ArtistID": 140,
    "AlbumID": 270,
    "TagID": 8
  },
  {
    "ID": 653,
    "Title": "Nightcore - Rather Be",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\Nightcore - Rather Be.mp3",
    "ArtistID": 140,
    "AlbumID": 270,
    "TagID": 8
  },
  {
    "ID": 654,
    "Title": "Nightcore - Remember When",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\Nightcore - Remember When.mp3",
    "ArtistID": 140,
    "AlbumID": 270,
    "TagID": 8
  },
  {
    "ID": 655,
    "Title": "Nightcore - Superheroes",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\Nightcore - Superheroes.mp3",
    "ArtistID": 140,
    "AlbumID": 270,
    "TagID": 8
  },
  {
    "ID": 656,
    "Title": "Nightcore - We Should Start Right Now",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\Nightcore - We Should Start Right Now.mp3",
    "ArtistID": 140,
    "AlbumID": 270,
    "TagID": 8
  },
  {
    "ID": 657,
    "Title": "Nếu Em Không Về - Htrol Remix",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\Nếu Em Không Về - Htrol Remix.mp3",
    "ArtistID": 113,
    "AlbumID": 246,
    "TagID": 8
  },
  {
    "ID": 658,
    "Title": "Nếu Như Anh Thành Công - Htrol Remix",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\Nếu Như Anh Thành Công - Htrol Remix.mp3",
    "ArtistID": 113,
    "AlbumID": 246,
    "TagID": 8
  },
  {
    "ID": 659,
    "Title": "Ocean",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\Ocean.mp3",
    "ArtistID": 169,
    "AlbumID": 301,
    "TagID": 8
  },
  {
    "ID": 660,
    "Title": "On My Way",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\On My Way.mp3",
    "ArtistID": 190,
    "AlbumID": 325,
    "TagID": 8
  },
  {
    "ID": 661,
    "Title": "Payphone",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\Payphone.mp3",
    "ArtistID": 191,
    "AlbumID": 326,
    "TagID": 8
  },
  {
    "ID": 662,
    "Title": "Phi Điểu Và Ve Sầu - Htrol Remix",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\Phi Điểu Và Ve Sầu - Htrol Remix.mp3",
    "ArtistID": 113,
    "AlbumID": 246,
    "TagID": 8
  },
  {
    "ID": 663,
    "Title": "Post Malone (feat. RANI)",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\Post Malone.mp3",
    "ArtistID": 192,
    "AlbumID": 327,
    "TagID": 8
  },
  {
    "ID": 664,
    "Title": "PS5 (with TOMORROW X TOGETHER & Alan Walker)",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\PS5.mp3",
    "ArtistID": 193,
    "AlbumID": 328,
    "TagID": 8
  },
  {
    "ID": 665,
    "Title": "Quan Sơn Tửu - Htrol Remix",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\Quan Sơn Tửu - Htrol Remix.mp3",
    "ArtistID": 113,
    "AlbumID": 246,
    "TagID": 8
  },
  {
    "ID": 666,
    "Title": "Rather Be (feat. Jess Glynne)",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\Rather Be (feat. Jess Glynne).mp3",
    "ArtistID": 194,
    "AlbumID": 329,
    "TagID": 8
  },
  {
    "ID": 667,
    "Title": "Rendezvous",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\Rendezvous.mp3",
    "ArtistID": 169,
    "AlbumID": 301,
    "TagID": 8
  },
  {
    "ID": 668,
    "Title": "Rockabye (feat. Sean Paul & Anne-Marie)",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\Rockabye (feat. Sean Paul & Anne-Marie).mp3",
    "ArtistID": 195,
    "AlbumID": 330,
    "TagID": 8
  },
  {
    "ID": 669,
    "Title": "Sad Story (Out Of Luck)",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\Sad Story (Out Of Luck).mp3",
    "ArtistID": 196,
    "AlbumID": 331,
    "TagID": 8
  },
  {
    "ID": 670,
    "Title": "Salt",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\Salt.mp3",
    "ArtistID": 185,
    "AlbumID": 317,
    "TagID": 8
  },
  {
    "ID": 671,
    "Title": "Save Me",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\Save Me.mp3",
    "ArtistID": 169,
    "AlbumID": 301,
    "TagID": 8
  },
  {
    "ID": 672,
    "Title": "Seventeen",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\Seventeen.mp3",
    "ArtistID": 169,
    "AlbumID": 301,
    "TagID": 8
  },
  {
    "ID": 673,
    "Title": "Señorita",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\Señorita.mp3",
    "ArtistID": 197,
    "AlbumID": 332,
    "TagID": 8
  },
  {
    "ID": 674,
    "Title": "Shelter",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\Shelter.mp3",
    "ArtistID": 198,
    "AlbumID": 333,
    "TagID": 8
  },
  {
    "ID": 675,
    "Title": "Shut Up",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\Shut Up.mp3",
    "ArtistID": 199,
    "AlbumID": 315,
    "TagID": 8
  },
  {
    "ID": 676,
    "Title": "Sign",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\Sign.mp3",
    "ArtistID": 169,
    "AlbumID": 301,
    "TagID": 8
  },
  {
    "ID": 677,
    "Title": "Sing Me to Sleep",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\Sing Me to Sleep.mp3",
    "ArtistID": 17,
    "AlbumID": 334,
    "TagID": 8
  },
  {
    "ID": 678,
    "Title": "Solo (feat. Demi Lovato)",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\Solo (feat. Demi Lovato).mp3",
    "ArtistID": 200,
    "AlbumID": 330,
    "TagID": 8
  },
  {
    "ID": 679,
    "Title": "STAR WALKIN' (League of Legends Worlds Anthem)",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\STAR WALKIN' (League of Legends Worlds Anthem).mp3",
    "ArtistID": 201,
    "AlbumID": 335,
    "TagID": 8
  },
  {
    "ID": 680,
    "Title": "Stay Young",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\Stay Young.mp3",
    "ArtistID": 202,
    "AlbumID": 336,
    "TagID": 8
  },
  {
    "ID": 681,
    "Title": "Strongest (Alan Walker Remix)",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\Strongest (Alan Walker Remix).mp3",
    "ArtistID": 203,
    "AlbumID": 337,
    "TagID": 8
  },
  {
    "ID": 682,
    "Title": "Sugar",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\Sugar.mp3",
    "ArtistID": 163,
    "AlbumID": 321,
    "TagID": 8
  },
  {
    "ID": 683,
    "Title": "Summer Love",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\Summer Love.mp3",
    "ArtistID": 169,
    "AlbumID": 301,
    "TagID": 8
  },
  {
    "ID": 684,
    "Title": "Sweet but Psycho",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\Sweet but Psycho.mp3",
    "ArtistID": 185,
    "AlbumID": 317,
    "TagID": 8
  },
  {
    "ID": 685,
    "Title": "Symphony (feat. Zara Larsson)",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\Symphony.mp3",
    "ArtistID": 204,
    "AlbumID": 330,
    "TagID": 8
  },
  {
    "ID": 686,
    "Title": "Sài Gòn Đau Lòng Quá - Htrol Remix",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\Sài Gòn Đau Lòng Quá - Htrol Remix.mp3",
    "ArtistID": 113,
    "AlbumID": 246,
    "TagID": 8
  },
  {
    "ID": 687,
    "Title": "Sợ Phải Kết Thúc - Htrol Remix",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\Sợ Phải Kết Thúc - Htrol Remix.mp3",
    "ArtistID": 113,
    "AlbumID": 246,
    "TagID": 8
  },
  {
    "ID": 688,
    "Title": "Take Me Away",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\Take Me Away.mp3",
    "ArtistID": 169,
    "AlbumID": 301,
    "TagID": 8
  },
  {
    "ID": 689,
    "Title": "The Ocean (feat. Shy Martin)",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\The Ocean (feat. Shy Martin).mp3",
    "ArtistID": 205,
    "AlbumID": 338,
    "TagID": 8
  },
  {
    "ID": 690,
    "Title": "Thuyền Quyên - Htrol Remix",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\Thuyền Quyên - Htrol Remix.mp3",
    "ArtistID": 113,
    "AlbumID": 246,
    "TagID": 8
  },
  {
    "ID": 691,
    "Title": "Thê Tử - Htrol Remix",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\Thê Tử - Htrol Remix.mp3",
    "ArtistID": 113,
    "AlbumID": 246,
    "TagID": 8
  },
  {
    "ID": 692,
    "Title": "Thằng Hầu - Htrol",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\Thằng Hầu - Htrol.mp3",
    "ArtistID": 113,
    "AlbumID": 246,
    "TagID": 8
  },
  {
    "ID": 693,
    "Title": "Thế Thái - Htrol Remix",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\Thế Thái - Htrol Remix.mp3",
    "ArtistID": 113,
    "AlbumID": 246,
    "TagID": 8
  },
  {
    "ID": 694,
    "Title": "Thị Mầu - Htrol Remix",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\Thị Mầu - Htrol Remix.mp3",
    "ArtistID": 113,
    "AlbumID": 246,
    "TagID": 8
  },
  {
    "ID": 695,
    "Title": "Tired",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\Tired.mp3",
    "ArtistID": 206,
    "AlbumID": 339,
    "TagID": 8
  },
  {
    "ID": 696,
    "Title": "tomorrow tonight",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\Tomorrow tonight.mp3",
    "ArtistID": 207,
    "AlbumID": 340,
    "TagID": 8
  },
  {
    "ID": 697,
    "Title": "Tránh Duyên - Htrol Remix",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\Tránh Duyên - Htrol Remix.mp3",
    "ArtistID": 113,
    "AlbumID": 246,
    "TagID": 8
  },
  {
    "ID": 698,
    "Title": "Unity",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\Unity.mp3",
    "ArtistID": 208,
    "AlbumID": 59,
    "TagID": 8
  },
  {
    "ID": 699,
    "Title": "Vong Xuyên Bỉ Ngạn - Htrol Remix",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\Vong Xuyên Bỉ Ngạn - Htrol Remix.mp3",
    "ArtistID": 113,
    "AlbumID": 246,
    "TagID": 8
  },
  {
    "ID": 700,
    "Title": "Vì Em  Anh Nguyện Làm Bầu Trời Nắng Hạ - Htrol Remix",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\Vì Em  Anh Nguyện Làm Bầu Trời Nắng Hạ - Htrol Remix.mp3",
    "ArtistID": 113,
    "AlbumID": 246,
    "TagID": 8
  },
  {
    "ID": 701,
    "Title": "Waiting",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\Waiting.mp3",
    "ArtistID": 209,
    "AlbumID": 341,
    "TagID": 8
  },
  {
    "ID": 702,
    "Title": "Way Back",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\Way Back.mp3",
    "ArtistID": 210,
    "AlbumID": 342,
    "TagID": 8
  },
  {
    "ID": 703,
    "Title": "What Are You Waiting For",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\What Are You Waiting For.mp3",
    "ArtistID": 169,
    "AlbumID": 301,
    "TagID": 8
  },
  {
    "ID": 704,
    "Title": "Without You",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\Without You.mp3",
    "ArtistID": 169,
    "AlbumID": 301,
    "TagID": 8
  },
  {
    "ID": 705,
    "Title": "World We Used To Know",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\World We Used To Know.mp3",
    "ArtistID": 211,
    "AlbumID": 343,
    "TagID": 8
  },
  {
    "ID": 706,
    "Title": "Worlds Collide",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\Worlds Collide.mp3",
    "ArtistID": 212,
    "AlbumID": 344,
    "TagID": 8
  },
  {
    "ID": 707,
    "Title": "Wrap Me In Plastic - Marcus Layton Radio Edit",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\Wrap Me In Plastic - Marcus Layton Radio Edit.mp3",
    "ArtistID": 213,
    "AlbumID": 345,
    "TagID": 8
  },
  {
    "ID": 708,
    "Title": "You and I",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\You and I.mp3",
    "ArtistID": 214,
    "AlbumID": 346,
    "TagID": 8
  },
  {
    "ID": 709,
    "Title": "Đau Để Trưởng Thành - Htrol Remix",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\Đau Để Trưởng Thành - Htrol Remix.mp3",
    "ArtistID": 113,
    "AlbumID": 246,
    "TagID": 8
  },
  {
    "ID": 710,
    "Title": "Đom Đóm - Htrol",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\Đom Đóm - Htrol Remix.mp3",
    "ArtistID": 113,
    "AlbumID": 246,
    "TagID": 8
  },
  {
    "ID": 711,
    "Title": "Đánh Mất Em Remix - Htrol Remix",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\Đánh Mất Em Remix - Htrol Remix.mp3",
    "ArtistID": 113,
    "AlbumID": 246,
    "TagID": 8
  },
  {
    "ID": 712,
    "Title": "Đóa Quỳnh Lan - Htrol Remix",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\Đóa Quỳnh Lan - Htrol Remix.mp3",
    "ArtistID": 113,
    "AlbumID": 246,
    "TagID": 8
  },
  {
    "ID": 713,
    "Title": "Đừng Như Người Dưng - Htrol Remix",
    "FileName": "D:\\Music\\Music\\Pop-Mid\\Đừng Như Người Dưng - Htrol Remix.mp3",
    "ArtistID": 113,
    "AlbumID": 246,
    "TagID": 8
  },
  {
    "ID": 714,
    "Title": "Snow in Summer",
    "FileName": "D:\\Music\\Music\\Symphony-High\\01. Snow in Summer.mp3",
    "ArtistID": 215,
    "AlbumID": 347,
    "TagID": 9
  },
  {
    "ID": 715,
    "Title": "A Beautiful Song",
    "FileName": "D:\\Music\\Music\\Symphony-High\\03. A Beautiful Song.mp3",
    "ArtistID": 216,
    "AlbumID": 348,
    "TagID": 9
  },
  {
    "ID": 716,
    "Title": "Emil - Karma",
    "FileName": "D:\\Music\\Music\\Symphony-High\\04. Emil - Karma.mp3",
    "ArtistID": 217,
    "AlbumID": 349,
    "TagID": 9
  },
  {
    "ID": 717,
    "Title": "A Beautiful Song",
    "FileName": "D:\\Music\\Music\\Symphony-High\\05 A Beautiful Song.mp3",
    "ArtistID": 218,
    "AlbumID": 350,
    "TagID": 9
  },
  {
    "ID": 718,
    "Title": "Song of the Ancients - Atonement",
    "FileName": "D:\\Music\\Music\\Symphony-High\\07 Song of the Ancients - Atonement.mp3",
    "ArtistID": 218,
    "AlbumID": 350,
    "TagID": 9
  },
  {
    "ID": 719,
    "Title": "A Beautiful Song",
    "FileName": "D:\\Music\\Music\\Symphony-High\\08. A Beautiful Song.mp3",
    "ArtistID": 219,
    "AlbumID": 351,
    "TagID": 9
  },
  {
    "ID": 720,
    "Title": "Shadowlord - Another Edit Version",
    "FileName": "D:\\Music\\Music\\Symphony-High\\09. Shadowlord - Another Edit Version.mp3",
    "ArtistID": 220,
    "AlbumID": 352,
    "TagID": 9
  },
  {
    "ID": 721,
    "Title": "Shadowlord",
    "FileName": "D:\\Music\\Music\\Symphony-High\\09. Shadowlord.mp3",
    "ArtistID": 221,
    "AlbumID": 353,
    "TagID": 9
  },
  {
    "ID": 722,
    "Title": "Emil - Despair",
    "FileName": "D:\\Music\\Music\\Symphony-High\\10. Emil - Despair.mp3",
    "ArtistID": 222,
    "AlbumID": 354,
    "TagID": 9
  },
  {
    "ID": 723,
    "Title": "Grandma - Destruction",
    "FileName": "D:\\Music\\Music\\Symphony-High\\10. Grandma - Destruction.mp3",
    "ArtistID": 219,
    "AlbumID": 351,
    "TagID": 9
  },
  {
    "ID": 724,
    "Title": "Bipolar Nightmare",
    "FileName": "D:\\Music\\Music\\Symphony-High\\12 Bipolar Nightmare.mp3",
    "ArtistID": 218,
    "AlbumID": 350,
    "TagID": 9
  },
  {
    "ID": 725,
    "Title": "Umare Iduru Ishi - Konomama Ja Dame",
    "FileName": "D:\\Music\\Music\\Symphony-High\\13. Umare Iduru Ishi - Konomama Ja Dame.mp3",
    "ArtistID": 221,
    "AlbumID": 354,
    "TagID": 9
  },
  {
    "ID": 726,
    "Title": "Umare Iduru Ishi - Kami Ni Natta",
    "FileName": "D:\\Music\\Music\\Symphony-High\\15. Umare Iduru Ishi - Kami Ni Natta.mp3",
    "ArtistID": 221,
    "AlbumID": 354,
    "TagID": 9
  },
  {
    "ID": 727,
    "Title": "Toritsuita Goubyou - Kami Ni Natta",
    "FileName": "D:\\Music\\Music\\Symphony-High\\19. Toritsuita Goubyou - Kami Ni Natta.mp3",
    "ArtistID": 221,
    "AlbumID": 354,
    "TagID": 9
  },
  {
    "ID": 728,
    "Title": "Possessed By Disease - Become A God",
    "FileName": "D:\\Music\\Music\\Symphony-High\\20. Possessed By Disease - Become A God.mp3",
    "ArtistID": 221,
    "AlbumID": 354,
    "TagID": 9
  },
  {
    "ID": 729,
    "Title": "Dark Colossus - Kaiju",
    "FileName": "D:\\Music\\Music\\Symphony-High\\22. Dark Colossus - Kaiju.mp3",
    "ArtistID": 219,
    "AlbumID": 351,
    "TagID": 9
  },
  {
    "ID": 730,
    "Title": "Possessed by Disease",
    "FileName": "D:\\Music\\Music\\Symphony-High\\25. Possessed by Disease.mp3",
    "ArtistID": 219,
    "AlbumID": 351,
    "TagID": 9
  },
  {
    "ID": 731,
    "Title": "The Dark Colossus Destroys All",
    "FileName": "D:\\Music\\Music\\Symphony-High\\26. The Dark Colossus Destroys All.mp3",
    "ArtistID": 215,
    "AlbumID": 347,
    "TagID": 9
  },
  {
    "ID": 732,
    "Title": "Dependent Weakling",
    "FileName": "D:\\Music\\Music\\Symphony-High\\29. Dependent Weakling.mp3",
    "ArtistID": 219,
    "AlbumID": 351,
    "TagID": 9
  },
  {
    "ID": 733,
    "Title": "Song of the Ancients (Fate)",
    "FileName": "D:\\Music\\Music\\Symphony-High\\32. Song of the Ancients (Fate).mp3",
    "ArtistID": 223,
    "AlbumID": 355,
    "TagID": 9
  },
  {
    "ID": 734,
    "Title": "War & War",
    "FileName": "D:\\Music\\Music\\Symphony-High\\32. War & War.mp3",
    "ArtistID": 219,
    "AlbumID": 351,
    "TagID": 9
  },
  {
    "ID": 735,
    "Title": "Emil (Karma)",
    "FileName": "D:\\Music\\Music\\Symphony-High\\36. Emil (Karma).mp3",
    "ArtistID": 223,
    "AlbumID": 355,
    "TagID": 9
  },
  {
    "ID": 736,
    "Title": "Emil - Despair",
    "FileName": "D:\\Music\\Music\\Symphony-High\\39. Emil - Despair.mp3",
    "ArtistID": 219,
    "AlbumID": 351,
    "TagID": 9
  },
  {
    "ID": 737,
    "Title": "Bipolar Nightmare",
    "FileName": "D:\\Music\\Music\\Symphony-High\\43. Bipolar Nightmare.mp3",
    "ArtistID": 219,
    "AlbumID": 351,
    "TagID": 9
  },
  {
    "ID": 738,
    "Title": "Shadowlord - White (Note Remix)",
    "FileName": "D:\\Music\\Music\\Symphony-High\\43. Shadowlord - White (Note Remix).mp3",
    "ArtistID": 223,
    "AlbumID": 355,
    "TagID": 9
  },
  {
    "ID": 739,
    "Title": null,
    "FileName": "D:\\Music\\Music\\Symphony-High\\Ai Wo Torimodose.mp3",
    "ArtistID": 132,
    "AlbumID": 264,
    "TagID": 9
  },
  {
    "ID": 740,
    "Title": "DUEL!!",
    "FileName": "D:\\Music\\Music\\Symphony-High\\DUEL!!.mp3",
    "ArtistID": 224,
    "AlbumID": 356,
    "TagID": 9
  },
  {
    "ID": 741,
    "Title": null,
    "FileName": "D:\\Music\\Music\\Symphony-High\\Mega Man 4 Opening Sequence Arrangement.mp3",
    "ArtistID": 132,
    "AlbumID": 264,
    "TagID": 9
  },
  {
    "ID": 742,
    "Title": "Onslaught",
    "FileName": "D:\\Music\\Music\\Symphony-High\\Onslaught.mp3",
    "ArtistID": 224,
    "AlbumID": 356,
    "TagID": 9
  },
  {
    "ID": 743,
    "Title": "City Ruins",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\01 City Ruins.mp3",
    "ArtistID": 218,
    "AlbumID": 350,
    "TagID": 10
  },
  {
    "ID": 744,
    "Title": "Ashes of Dreams (Emi Evans & J'Nique Nicole Vocals)",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\01. Ashes of Dreams (Emi Evans & J'Nique Nicole Vocals).mp3",
    "ArtistID": 216,
    "AlbumID": 357,
    "TagID": 10
  },
  {
    "ID": 745,
    "Title": "Hajimari (Beginning)",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\01. Hajimari (Beginning).mp3",
    "ArtistID": 225,
    "AlbumID": 358,
    "TagID": 10
  },
  {
    "ID": 746,
    "Title": "Kaine - Salvation",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\01. Kainé - Salvation.mp3",
    "ArtistID": 217,
    "AlbumID": 359,
    "TagID": 10
  },
  {
    "ID": 747,
    "Title": "Piano: Weight of the World",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\01. Piano - Weight of the World.mp3",
    "ArtistID": 226,
    "AlbumID": 360,
    "TagID": 10
  },
  {
    "ID": 748,
    "Title": "Significance - Nothing",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\01. Significance - Nothing.mp3",
    "ArtistID": 219,
    "AlbumID": 351,
    "TagID": 10
  },
  {
    "ID": 749,
    "Title": "Snow in Summer",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\01. Snow in Summer (Orchestral).mp3",
    "ArtistID": 216,
    "AlbumID": 361,
    "TagID": 10
  },
  {
    "ID": 750,
    "Title": "Snow in Summer",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\01. Snow in Summer.mp3",
    "ArtistID": 227,
    "AlbumID": 362,
    "TagID": 10
  },
  {
    "ID": 751,
    "Title": "Song of the Ancients",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\01. Song of the Ancients.mp3",
    "ArtistID": 228,
    "AlbumID": 363,
    "TagID": 10
  },
  {
    "ID": 752,
    "Title": "Sunshower (Snow In Summer)",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\01. Sunshower (Snow In Summer).mp3",
    "ArtistID": 229,
    "AlbumID": 364,
    "TagID": 10
  },
  {
    "ID": 753,
    "Title": "Amusement Park",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\02 Amusement Park.mp3",
    "ArtistID": 218,
    "AlbumID": 350,
    "TagID": 10
  },
  {
    "ID": 754,
    "Title": "City Ruins - Rays of Light",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\02. City Ruins - Rays of Light.mp3",
    "ArtistID": 219,
    "AlbumID": 351,
    "TagID": 10
  },
  {
    "ID": 755,
    "Title": "Emil (Addendum version)",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\02. Emil (Addendum version).mp3",
    "ArtistID": 216,
    "AlbumID": 357,
    "TagID": 10
  },
  {
    "ID": 756,
    "Title": "Emil - Sacrifice",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\02. Emil - Sacrifice.mp3",
    "ArtistID": 220,
    "AlbumID": 365,
    "TagID": 10
  },
  {
    "ID": 757,
    "Title": "Hills of Radiant Winds - Another Edit Version",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\02. Hills of Radiant Winds - Another Edit Version.mp3",
    "ArtistID": 230,
    "AlbumID": 352,
    "TagID": 10
  },
  {
    "ID": 758,
    "Title": "Inori (Prayers)",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\02. Inori (Prayers).mp3",
    "ArtistID": 225,
    "AlbumID": 358,
    "TagID": 10
  },
  {
    "ID": 759,
    "Title": "Kainé - Escape",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\02. Kainé - Escape.mp3",
    "ArtistID": 228,
    "AlbumID": 366,
    "TagID": 10
  },
  {
    "ID": 760,
    "Title": "Kainé",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\02. Kainé.mp3",
    "ArtistID": 228,
    "AlbumID": 363,
    "TagID": 10
  },
  {
    "ID": 761,
    "Title": "Pale Moonlight (Shadowlord's Castle/Roar)",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\02. Pale Moonlight (Shadowlord_s Castle_Roar).mp3",
    "ArtistID": 229,
    "AlbumID": 364,
    "TagID": 10
  },
  {
    "ID": 762,
    "Title": "Peaceful Sleep",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\02. Peaceful Sleep (Orchestral).mp3",
    "ArtistID": 216,
    "AlbumID": 367,
    "TagID": 10
  },
  {
    "ID": 763,
    "Title": "Peaceful Sleep",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\02. Peaceful Sleep.mp3",
    "ArtistID": 221,
    "AlbumID": 354,
    "TagID": 10
  },
  {
    "ID": 764,
    "Title": "Piano: Amusement Park",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\02. Piano - Amusement Park.mp3",
    "ArtistID": 231,
    "AlbumID": 360,
    "TagID": 10
  },
  {
    "ID": 765,
    "Title": "Song of the Ancients - Popola",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\02. Song of the Ancients - Popola.mp3",
    "ArtistID": 232,
    "AlbumID": 368,
    "TagID": 10
  },
  {
    "ID": 766,
    "Title": "Song of the Ancients",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\02. Song of the Ancients.mp3",
    "ArtistID": 216,
    "AlbumID": 361,
    "TagID": 10
  },
  {
    "ID": 767,
    "Title": "Emil - Piano",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\03. Emil - Piano.mp3",
    "ArtistID": 228,
    "AlbumID": 365,
    "TagID": 10
  },
  {
    "ID": 768,
    "Title": "Hills of Radiant Winds",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\03. Hills of Radiant Winds.mp3",
    "ArtistID": 216,
    "AlbumID": 361,
    "TagID": 10
  },
  {
    "ID": 769,
    "Title": "Kainé",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\03. Kainé (Concert).mp3",
    "ArtistID": 227,
    "AlbumID": 362,
    "TagID": 10
  },
  {
    "ID": 770,
    "Title": "Kainé",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\03. Kainé.mp3",
    "ArtistID": 228,
    "AlbumID": 366,
    "TagID": 10
  },
  {
    "ID": 771,
    "Title": "Nightengale (Kainé/Duet Ver.)",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\03. Nightengale (Kain__Duet Ver).mp3",
    "ArtistID": 229,
    "AlbumID": 364,
    "TagID": 10
  },
  {
    "ID": 772,
    "Title": "Peaceful Sleep",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\03. Peaceful Sleep.mp3",
    "ArtistID": 219,
    "AlbumID": 351,
    "TagID": 10
  },
  {
    "ID": 773,
    "Title": "Piano: A Beautiful Song",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\03. Piano - A Beautiful Song.mp3",
    "ArtistID": 228,
    "AlbumID": 360,
    "TagID": 10
  },
  {
    "ID": 774,
    "Title": "Snow in Summer",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\03. Snow in Summer.mp3",
    "ArtistID": 228,
    "AlbumID": 369,
    "TagID": 10
  },
  {
    "ID": 775,
    "Title": "Song of the Ancients - Dev",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\03. Song of the Ancients - Devola.mp3",
    "ArtistID": 217,
    "AlbumID": 359,
    "TagID": 10
  },
  {
    "ID": 776,
    "Title": "Toki No Shizuku (Droplets Of Time)",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\03. Toki No Shizuku (Droplets Of Time).mp3",
    "ArtistID": 225,
    "AlbumID": 358,
    "TagID": 10
  },
  {
    "ID": 777,
    "Title": "Vague Hope (Emi Evans Vocals)",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\03. Vague Hope (Emi Evans Vocals).mp3",
    "ArtistID": 216,
    "AlbumID": 367,
    "TagID": 10
  },
  {
    "ID": 778,
    "Title": "Peaceful Sleep",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\04 Peaceful Sleep.mp3",
    "ArtistID": 218,
    "AlbumID": 350,
    "TagID": 10
  },
  {
    "ID": 779,
    "Title": "Emil",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\04. Emil (Ochestral).mp3",
    "ArtistID": 216,
    "AlbumID": 361,
    "TagID": 10
  },
  {
    "ID": 780,
    "Title": "Kainé - Oboe and Bassoon Ensemble",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\04. Kainé - Oboe and Bassoon Ensemble.mp3",
    "ArtistID": 233,
    "AlbumID": 366,
    "TagID": 10
  },
  {
    "ID": 781,
    "Title": "Kaze No Koe (Voice Of The Wind)",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\04. Kaze No Koe (Voice Of The Wind).mp3",
    "ArtistID": 225,
    "AlbumID": 358,
    "TagID": 10
  },
  {
    "ID": 782,
    "Title": "Memories (Song Of The Ancients/Devola)",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\04. Memories (Song Of The Ancients_Devola).mp3",
    "ArtistID": 229,
    "AlbumID": 364,
    "TagID": 10
  },
  {
    "ID": 783,
    "Title": "Piano: City Ruins",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\04. Piano - City Ruins.mp3",
    "ArtistID": 234,
    "AlbumID": 360,
    "TagID": 10
  },
  {
    "ID": 784,
    "Title": "Shadowlord",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\04. Shadowlord.mp3",
    "ArtistID": 228,
    "AlbumID": 369,
    "TagID": 10
  },
  {
    "ID": 785,
    "Title": "Snow in Summer",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\04. Snow in Summer.mp3",
    "ArtistID": 228,
    "AlbumID": 363,
    "TagID": 10
  },
  {
    "ID": 786,
    "Title": "Song of the Ancients / Devola",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\04. Song of the Ancients - Devola.mp3",
    "ArtistID": 235,
    "AlbumID": 362,
    "TagID": 10
  },
  {
    "ID": 787,
    "Title": "Voice of no Return",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\04. Voice of no Return.mp3",
    "ArtistID": 236,
    "AlbumID": 370,
    "TagID": 10
  },
  {
    "ID": 788,
    "Title": "Peaceful Sleep",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\04.Peaceful Sleep.mp3",
    "ArtistID": 237,
    "AlbumID": 371,
    "TagID": 10
  },
  {
    "ID": 789,
    "Title": "A Heart Not Forgotten (Emil/Karma)",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\05. A Heart Not Forgotten (Emil_Karma).mp3",
    "ArtistID": 229,
    "AlbumID": 364,
    "TagID": 10
  },
  {
    "ID": 790,
    "Title": "Emil - Recorder Ensemble",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\05. Emil - Recorder Ensemble.mp3",
    "ArtistID": 238,
    "AlbumID": 365,
    "TagID": 10
  },
  {
    "ID": 791,
    "Title": "Emil",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\05. Emil.mp3",
    "ArtistID": 228,
    "AlbumID": 363,
    "TagID": 10
  },
  {
    "ID": 792,
    "Title": "Kaikyo (Homesick)",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\05. Kaikyo (Homesick).mp3",
    "ArtistID": 225,
    "AlbumID": 358,
    "TagID": 10
  },
  {
    "ID": 793,
    "Title": "Kainé (Addendum version)",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\05. Kainé (Addendum version).mp3",
    "ArtistID": 216,
    "AlbumID": 357,
    "TagID": 10
  },
  {
    "ID": 794,
    "Title": "Kainé - Duet",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\05. Kainé - Duet.mp3",
    "ArtistID": 228,
    "AlbumID": 366,
    "TagID": 10
  },
  {
    "ID": 795,
    "Title": "Piano: Dependent Weakling",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\05. Piano - Dependent Weakling.mp3",
    "ArtistID": 239,
    "AlbumID": 360,
    "TagID": 10
  },
  {
    "ID": 796,
    "Title": "Repose",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\05. Repose.mp3",
    "ArtistID": 227,
    "AlbumID": 362,
    "TagID": 10
  },
  {
    "ID": 797,
    "Title": "Song of the Ancients - Mandolin Ensemble",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\05. Song of the Ancients - Mandolin Ensemble.mp3",
    "ArtistID": 240,
    "AlbumID": 368,
    "TagID": 10
  },
  {
    "ID": 798,
    "Title": "Song of the Ancients / Popola",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\05. Song of the Ancients - Popola.mp3",
    "ArtistID": 232,
    "AlbumID": 347,
    "TagID": 10
  },
  {
    "ID": 799,
    "Title": "Emil / Piano Ver.",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\06 Emil - Piano Ver.mp3",
    "ArtistID": 228,
    "AlbumID": 372,
    "TagID": 10
  },
  {
    "ID": 800,
    "Title": "Vague Hope",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\06 Vague Hope.mp3",
    "ArtistID": 218,
    "AlbumID": 350,
    "TagID": 10
  },
  {
    "ID": 801,
    "Title": "City Ruins (Addendum version)",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\06. City Ruins (Addendum version).mp3",
    "ArtistID": 216,
    "AlbumID": 357,
    "TagID": 10
  },
  {
    "ID": 802,
    "Title": "Emil",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\06. Emil.mp3",
    "ArtistID": 241,
    "AlbumID": 365,
    "TagID": 10
  },
  {
    "ID": 803,
    "Title": "Grandma",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\06. Grandma (Piano).mp3",
    "ArtistID": 242,
    "AlbumID": 363,
    "TagID": 10
  },
  {
    "ID": 804,
    "Title": "Grandma",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\06. Grandma.mp3",
    "ArtistID": 243,
    "AlbumID": 355,
    "TagID": 10
  },
  {
    "ID": 805,
    "Title": "Kainé",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\06. Kainé.mp3",
    "ArtistID": 233,
    "AlbumID": 366,
    "TagID": 10
  },
  {
    "ID": 806,
    "Title": "Piano: Peaceful Sleep",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\06. Piano - Peaceful Sleep.mp3",
    "ArtistID": 244,
    "AlbumID": 360,
    "TagID": 10
  },
  {
    "ID": 807,
    "Title": "Song of the Ancients",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\06. Song of the Ancients.mp3",
    "ArtistID": 228,
    "AlbumID": 368,
    "TagID": 10
  },
  {
    "ID": 808,
    "Title": "The Color of Depression",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\06. The Color of Depression.mp3",
    "ArtistID": 219,
    "AlbumID": 351,
    "TagID": 10
  },
  {
    "ID": 809,
    "Title": "Kaine / Duet Ver.",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\07 Kaine - Duet Ver.mp3",
    "ArtistID": 228,
    "AlbumID": 372,
    "TagID": 10
  },
  {
    "ID": 810,
    "Title": "Amusement Park",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\07. Amusement Park.mp3",
    "ArtistID": 219,
    "AlbumID": 351,
    "TagID": 10
  },
  {
    "ID": 811,
    "Title": "Grandma",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\07. Grandma.mp3",
    "ArtistID": 228,
    "AlbumID": 347,
    "TagID": 10
  },
  {
    "ID": 812,
    "Title": "Kaine",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\07. Kaine.mp3",
    "ArtistID": 216,
    "AlbumID": 361,
    "TagID": 10
  },
  {
    "ID": 813,
    "Title": "Kainé",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\07. Kainé.mp3",
    "ArtistID": 233,
    "AlbumID": 366,
    "TagID": 10
  },
  {
    "ID": 814,
    "Title": "Piano: Copied City",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\07. Piano - Copied City.mp3",
    "ArtistID": 245,
    "AlbumID": 360,
    "TagID": 10
  },
  {
    "ID": 815,
    "Title": "Repose",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\07. Repose.mp3",
    "ArtistID": 228,
    "AlbumID": 363,
    "TagID": 10
  },
  {
    "ID": 816,
    "Title": "Snow in Summer",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\07. Snow in Summer.mp3",
    "ArtistID": 246,
    "AlbumID": 369,
    "TagID": 10
  },
  {
    "ID": 817,
    "Title": "Song of the Ancients (Devola)",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\07. Song of the Ancients (Devola).mp3",
    "ArtistID": 243,
    "AlbumID": 355,
    "TagID": 10
  },
  {
    "ID": 818,
    "Title": "Memories of Dust",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\07.Memories of Dust.mp3",
    "ArtistID": 237,
    "AlbumID": 371,
    "TagID": 10
  },
  {
    "ID": 819,
    "Title": "The Wretched Automatons/a capella",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\08 The Wretched Automatons-a capella.mp3",
    "ArtistID": 247,
    "AlbumID": 372,
    "TagID": 10
  },
  {
    "ID": 820,
    "Title": "Flower (Yonah/Piano ver.)",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\08. Flower (Yonah_Piano ver.).mp3",
    "ArtistID": 229,
    "AlbumID": 364,
    "TagID": 10
  },
  {
    "ID": 821,
    "Title": "Piano: Voice of no Return",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\08. Piano - Voice of no Return.mp3",
    "ArtistID": 234,
    "AlbumID": 360,
    "TagID": 10
  },
  {
    "ID": 822,
    "Title": "Vague Hope",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\08. Vague Hope.mp3",
    "ArtistID": 248,
    "AlbumID": 354,
    "TagID": 10
  },
  {
    "ID": 823,
    "Title": "Song of the Ancients / Piano Ver.",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\09 Song of the Ancients - Piano Ver.mp3",
    "ArtistID": 228,
    "AlbumID": 372,
    "TagID": 10
  },
  {
    "ID": 824,
    "Title": "The Sound of the End",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\09 The Sound of the End.mp3",
    "ArtistID": 218,
    "AlbumID": 350,
    "TagID": 10
  },
  {
    "ID": 825,
    "Title": "Emil",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\09. Emil.mp3",
    "ArtistID": 227,
    "AlbumID": 362,
    "TagID": 10
  },
  {
    "ID": 826,
    "Title": "Grandma",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\09. Grandma.mp3",
    "ArtistID": 216,
    "AlbumID": 361,
    "TagID": 10
  },
  {
    "ID": 827,
    "Title": "Shadowlord",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\09. Shadowlord.mp3",
    "ArtistID": 228,
    "AlbumID": 363,
    "TagID": 10
  },
  {
    "ID": 828,
    "Title": "Song Of The Ancients - Atonement",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\09. Song Of The Ancients - Atonement.mp3",
    "ArtistID": 221,
    "AlbumID": 354,
    "TagID": 10
  },
  {
    "ID": 829,
    "Title": "Veil (The Prestigious Mask)",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\09. Veil (The Prestigious Mask).mp3",
    "ArtistID": 229,
    "AlbumID": 364,
    "TagID": 10
  },
  {
    "ID": 830,
    "Title": "Voice of no Return - Guitar",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\09. Voice of no Return - Guitar.mp3",
    "ArtistID": 219,
    "AlbumID": 351,
    "TagID": 10
  },
  {
    "ID": 831,
    "Title": "Yonah / Pluck Ver.",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\09. Yonah - Pluck Ver..mp3",
    "ArtistID": 228,
    "AlbumID": 347,
    "TagID": 10
  },
  {
    "ID": 832,
    "Title": "Voice of NO Return",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\09.Voice of NO Return.mp3",
    "ArtistID": 237,
    "AlbumID": 371,
    "TagID": 10
  },
  {
    "ID": 833,
    "Title": "Shadowlord/Music Box Ver.",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\10 Shadowlord-Music Box Ver.mp3",
    "ArtistID": 228,
    "AlbumID": 372,
    "TagID": 10
  },
  {
    "ID": 834,
    "Title": "Piano: The Tower",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\10. Piano - The Tower.mp3",
    "ArtistID": 244,
    "AlbumID": 360,
    "TagID": 10
  },
  {
    "ID": 835,
    "Title": "The Wretched Automatons",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\10. The Wretched Automatons.mp3",
    "ArtistID": 215,
    "AlbumID": 363,
    "TagID": 10
  },
  {
    "ID": 836,
    "Title": "Weight of the World (Emi Evans & J'Nique Nicole Vocals)",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\10. Weight of the World (Emi Evans & J'Nique Nicole Vocals).mp3",
    "ArtistID": 216,
    "AlbumID": 357,
    "TagID": 10
  },
  {
    "ID": 837,
    "Title": "The Tower",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\11 The Tower.mp3",
    "ArtistID": 218,
    "AlbumID": 350,
    "TagID": 10
  },
  {
    "ID": 838,
    "Title": "Orchestra: Ashes of Dreams",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\11. Ashes of Dreams (Ochestral).mp3",
    "ArtistID": 216,
    "AlbumID": 361,
    "TagID": 10
  },
  {
    "ID": 839,
    "Title": "Ashes of Dreams",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\11. Ashes of Dreams.mp3",
    "ArtistID": 227,
    "AlbumID": 362,
    "TagID": 10
  },
  {
    "ID": 840,
    "Title": "Faltering Prayer - Dawn Breeze",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\11. Faltering Prayer - Dawn Breeze.mp3",
    "ArtistID": 219,
    "AlbumID": 351,
    "TagID": 10
  },
  {
    "ID": 841,
    "Title": "Heavy Heart (Emil/Piano ver.)",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\11. Heavy Heart (Emil_Piano ver.).mp3",
    "ArtistID": 229,
    "AlbumID": 364,
    "TagID": 10
  },
  {
    "ID": 842,
    "Title": "Hoshi No Mebuki (Nature's Blessing)",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\11. Hoshi No Mebuki (Nature's Blessing).mp3",
    "ArtistID": 225,
    "AlbumID": 358,
    "TagID": 10
  },
  {
    "ID": 843,
    "Title": "Piano: The Sound of the End",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\11. Piano - The Sound of the End.mp3",
    "ArtistID": 249,
    "AlbumID": 360,
    "TagID": 10
  },
  {
    "ID": 844,
    "Title": "Grandma",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\12. Grandma.mp3",
    "ArtistID": 227,
    "AlbumID": 362,
    "TagID": 10
  },
  {
    "ID": 845,
    "Title": "Piano: Vague Hope",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\12. Piano - Vague Hope.mp3",
    "ArtistID": 228,
    "AlbumID": 360,
    "TagID": 10
  },
  {
    "ID": 846,
    "Title": "Sabigoe (Dignified Voice)",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\12. Sabigoe (Dignified Voice).mp3",
    "ArtistID": 225,
    "AlbumID": 358,
    "TagID": 10
  },
  {
    "ID": 847,
    "Title": "The Wretched Automatons - Weiss Edition Arrangement",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\13. The Wretched Automatons - Weiss Edition Arrangement.mp3",
    "ArtistID": 250,
    "AlbumID": 352,
    "TagID": 10
  },
  {
    "ID": 848,
    "Title": "Toki No Kane (Bell Of Time)",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\13. Toki No Kane (Bell Of Time).mp3",
    "ArtistID": 225,
    "AlbumID": 358,
    "TagID": 10
  },
  {
    "ID": 849,
    "Title": "Treasured Times",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\13. Treasured Times.mp3",
    "ArtistID": 219,
    "AlbumID": 351,
    "TagID": 10
  },
  {
    "ID": 850,
    "Title": "Dispossession / Piano Ver.",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\14. Dispossession - Piano Ver..mp3",
    "ArtistID": 220,
    "AlbumID": 347,
    "TagID": 10
  },
  {
    "ID": 851,
    "Title": "Grandma - Weiss Edition Arrangement",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\14. Grandma - Weiss Edition Arrangement.mp3",
    "ArtistID": 251,
    "AlbumID": 352,
    "TagID": 10
  },
  {
    "ID": 852,
    "Title": "The Ultimate Weapon",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\14. The Ultimate Weapon.mp3",
    "ArtistID": 243,
    "AlbumID": 355,
    "TagID": 10
  },
  {
    "ID": 853,
    "Title": "Vague Hope - Cold Rain",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\14. Vague Hope - Cold Rain.mp3",
    "ArtistID": 219,
    "AlbumID": 351,
    "TagID": 10
  },
  {
    "ID": 854,
    "Title": "Kainé",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\15 Kainé.mp3",
    "ArtistID": 218,
    "AlbumID": 350,
    "TagID": 10
  },
  {
    "ID": 855,
    "Title": "Ashes of Dreams / New",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\15. Ashes of Dreams - New.mp3",
    "ArtistID": 215,
    "AlbumID": 347,
    "TagID": 10
  },
  {
    "ID": 856,
    "Title": "Aun (Breathe)",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\15. Aun (Breathe).mp3",
    "ArtistID": 225,
    "AlbumID": 358,
    "TagID": 10
  },
  {
    "ID": 857,
    "Title": "Weight of the World English Version",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\15. Weight of the World English Version.mp3",
    "ArtistID": 219,
    "AlbumID": 351,
    "TagID": 10
  },
  {
    "ID": 858,
    "Title": "Ashes of Dreams",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\16 Ashes of Dreams.mp3",
    "ArtistID": 218,
    "AlbumID": 350,
    "TagID": 10
  },
  {
    "ID": 859,
    "Title": "Dispossession (Piano Version)",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\16. Dispossession (Piano Version).mp3",
    "ArtistID": 243,
    "AlbumID": 355,
    "TagID": 10
  },
  {
    "ID": 860,
    "Title": "Kainé / Premonition",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\16. Kainé - Premonition.mp3",
    "ArtistID": 228,
    "AlbumID": 347,
    "TagID": 10
  },
  {
    "ID": 861,
    "Title": "Omokage (Vestige)",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\16. Omokage (Vestige).mp3",
    "ArtistID": 225,
    "AlbumID": 358,
    "TagID": 10
  },
  {
    "ID": 862,
    "Title": "City Ruins - Shade",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\17. City Ruins - Shade.mp3",
    "ArtistID": 219,
    "AlbumID": 351,
    "TagID": 10
  },
  {
    "ID": 863,
    "Title": "Dispossession (Strings Version)",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\17. Dispossession (Strings Version).mp3",
    "ArtistID": 243,
    "AlbumID": 355,
    "TagID": 10
  },
  {
    "ID": 864,
    "Title": "Song of the Ancients / Devola",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\17. Song of the Ancients - Devola.mp3",
    "ArtistID": 232,
    "AlbumID": 347,
    "TagID": 10
  },
  {
    "ID": 865,
    "Title": "Dispossession (Pluck Version)",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\18. Dispossession (Pluck Version).mp3",
    "ArtistID": 243,
    "AlbumID": 355,
    "TagID": 10
  },
  {
    "ID": 866,
    "Title": "Kyusai (Aid)",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\18. Kyusai (Aid).mp3",
    "ArtistID": 225,
    "AlbumID": 358,
    "TagID": 10
  },
  {
    "ID": 867,
    "Title": "The Ultimate Weapon",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\18. The Ultimate Weapon.mp3",
    "ArtistID": 228,
    "AlbumID": 347,
    "TagID": 10
  },
  {
    "ID": 868,
    "Title": "Dispossession (Music Box Version)",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\19. Dispossession (Music Box Version).mp3",
    "ArtistID": 243,
    "AlbumID": 355,
    "TagID": 10
  },
  {
    "ID": 869,
    "Title": "Fleeting Words - Weiss Edition Arrangement",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\19. Fleeting Words - Weiss Edition Arrangement.mp3",
    "ArtistID": 252,
    "AlbumID": 352,
    "TagID": 10
  },
  {
    "ID": 870,
    "Title": "Halua",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\19. Halua.mp3",
    "ArtistID": 228,
    "AlbumID": 347,
    "TagID": 10
  },
  {
    "ID": 871,
    "Title": "Voice of no Return - Normal",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\19. Voice of no Return - Normal.mp3",
    "ArtistID": 219,
    "AlbumID": 351,
    "TagID": 10
  },
  {
    "ID": 872,
    "Title": "Yonah (Piano Version)",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\20. Yonah (Piano Version).mp3",
    "ArtistID": 243,
    "AlbumID": 355,
    "TagID": 10
  },
  {
    "ID": 873,
    "Title": "Yonah (Strings Version)",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\21. Yonah (Strings Version).mp3",
    "ArtistID": 243,
    "AlbumID": 355,
    "TagID": 10
  },
  {
    "ID": 874,
    "Title": "His Dream",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\22. His Dream.mp3",
    "ArtistID": 232,
    "AlbumID": 347,
    "TagID": 10
  },
  {
    "ID": 875,
    "Title": "Yonah (Pluck Version 1)",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\22. Yonah (Pluck Version 1).mp3",
    "ArtistID": 243,
    "AlbumID": 355,
    "TagID": 10
  },
  {
    "ID": 876,
    "Title": "This Dream",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\23. This Dream.mp3",
    "ArtistID": 232,
    "AlbumID": 347,
    "TagID": 10
  },
  {
    "ID": 877,
    "Title": "Yonah (Pluck Version 2)",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\23. Yonah (Pluck Version 2).mp3",
    "ArtistID": 243,
    "AlbumID": 355,
    "TagID": 10
  },
  {
    "ID": 878,
    "Title": "Dispossession / Strings Ver.",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\24. Dispossession - Strings Ver..mp3",
    "ArtistID": 220,
    "AlbumID": 347,
    "TagID": 10
  },
  {
    "ID": 879,
    "Title": "Broken Heart",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\26. Broken Heart.mp3",
    "ArtistID": 219,
    "AlbumID": 351,
    "TagID": 10
  },
  {
    "ID": 880,
    "Title": "Wretched Weaponry: Quiet",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\27. Wretched Weaponry ：Quiet.mp3",
    "ArtistID": 219,
    "AlbumID": 351,
    "TagID": 10
  },
  {
    "ID": 881,
    "Title": "Yonah / Piano Ver.",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\27. Yonah - Piano Ver..mp3",
    "ArtistID": 228,
    "AlbumID": 347,
    "TagID": 10
  },
  {
    "ID": 882,
    "Title": "Ashes of Dreams / Nouveau",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\28. Ashes of Dreams - Nouveau.mp3",
    "ArtistID": 215,
    "AlbumID": 347,
    "TagID": 10
  },
  {
    "ID": 883,
    "Title": "His Dream",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\28. His Dream.mp3",
    "ArtistID": 223,
    "AlbumID": 355,
    "TagID": 10
  },
  {
    "ID": 884,
    "Title": "Mourning",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\28. Mourning.mp3",
    "ArtistID": 219,
    "AlbumID": 351,
    "TagID": 10
  },
  {
    "ID": 885,
    "Title": "Ashes of Dreams / Naudhaich",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\29. Ashes of Dreams - Naudhaich.mp3",
    "ArtistID": 215,
    "AlbumID": 347,
    "TagID": 10
  },
  {
    "ID": 886,
    "Title": "This Dream",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\29. This Dream.mp3",
    "ArtistID": 223,
    "AlbumID": 355,
    "TagID": 10
  },
  {
    "ID": 887,
    "Title": "Ashes of Dreams / Lost Music Box Version",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\30. Ashes of Dreams - Lost Music Box Version.mp3",
    "ArtistID": 215,
    "AlbumID": 347,
    "TagID": 10
  },
  {
    "ID": 888,
    "Title": "Repose",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\30. Repose.mp3",
    "ArtistID": 223,
    "AlbumID": 355,
    "TagID": 10
  },
  {
    "ID": 889,
    "Title": "Weight of the World Kowaretasekainouta",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\30. Weight of the World Kowaretasekainouta.mp3",
    "ArtistID": 219,
    "AlbumID": 351,
    "TagID": 10
  },
  {
    "ID": 890,
    "Title": "Fleeting Words / Family",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\31. Fleeting Words - Family.mp3",
    "ArtistID": 247,
    "AlbumID": 347,
    "TagID": 10
  },
  {
    "ID": 891,
    "Title": "Rebirth & Hope",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\31. Rebirth & Hope.mp3",
    "ArtistID": 219,
    "AlbumID": 351,
    "TagID": 10
  },
  {
    "ID": 892,
    "Title": "Repose",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\33. Repose.mp3",
    "ArtistID": 232,
    "AlbumID": 347,
    "TagID": 10
  },
  {
    "ID": 893,
    "Title": "Widespread Illness",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\34. Widespread Illness.mp3",
    "ArtistID": 219,
    "AlbumID": 351,
    "TagID": 10
  },
  {
    "ID": 894,
    "Title": "Dispossession / Music Box Ver.",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\35. Dispossession - Music Box Ver..mp3",
    "ArtistID": 232,
    "AlbumID": 347,
    "TagID": 10
  },
  {
    "ID": 895,
    "Title": "Fortress of Lies",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\35. Fortress of Lies.mp3",
    "ArtistID": 219,
    "AlbumID": 351,
    "TagID": 10
  },
  {
    "ID": 896,
    "Title": "Vague Hope - Spring Rain",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\36. Vague Hope - Spring Rain.mp3",
    "ArtistID": 219,
    "AlbumID": 351,
    "TagID": 10
  },
  {
    "ID": 897,
    "Title": "Emil (Sacrifice)",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\37. Emil (Sacrifice).mp3",
    "ArtistID": 223,
    "AlbumID": 355,
    "TagID": 10
  },
  {
    "ID": 898,
    "Title": "Blissful Death",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\38. Blissful Death.mp3",
    "ArtistID": 219,
    "AlbumID": 351,
    "TagID": 10
  },
  {
    "ID": 899,
    "Title": "Ashes of Dreams (New)",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\39. Ashes of Dreams (New).mp3",
    "ArtistID": 223,
    "AlbumID": 355,
    "TagID": 10
  },
  {
    "ID": 900,
    "Title": "Ashes of Dreams (Nouveau)",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\40. Ashes of Dreams (Nouveau).mp3",
    "ArtistID": 223,
    "AlbumID": 355,
    "TagID": 10
  },
  {
    "ID": 901,
    "Title": "Emil / Sacrifice",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\40. Emil - Sacrifice.mp3",
    "ArtistID": 220,
    "AlbumID": 347,
    "TagID": 10
  },
  {
    "ID": 902,
    "Title": "Faltering Prayer - Starry Sky",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\40. Faltering Prayer - Starry Sky.mp3",
    "ArtistID": 219,
    "AlbumID": 351,
    "TagID": 10
  },
  {
    "ID": 903,
    "Title": "Ashes of Dreams (Nuadhaich)",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\41. Ashes of Dreams (Nuadhaich).mp3",
    "ArtistID": 223,
    "AlbumID": 355,
    "TagID": 10
  },
  {
    "ID": 904,
    "Title": "Ashes of Dreams (Aratanaru)",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\42. Ashes of Dreams (Aratanaru).mp3",
    "ArtistID": 223,
    "AlbumID": 355,
    "TagID": 10
  },
  {
    "ID": 905,
    "Title": "The Tower",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\42. The Tower.mp3",
    "ArtistID": 219,
    "AlbumID": 351,
    "TagID": 10
  },
  {
    "ID": 906,
    "Title": "Ashes of Dreams / Aratanaru",
    "FileName": "D:\\Music\\Music\\Symphony-Low\\45. Ashes of Dreams - Aratanaru.mp3",
    "ArtistID": 215,
    "AlbumID": 347,
    "TagID": 10
  },
  {
    "ID": 907,
    "Title": "Alien Manifestation (J'Nique Nicole Vocals)",
    "FileName": "D:\\Music\\Music\\Symphony-Mid\\01. Alien Manifestation (J'Nique Nicole Vocals).mp3",
    "ArtistID": 216,
    "AlbumID": 367,
    "TagID": 11
  },
  {
    "ID": 908,
    "Title": "City Ruins",
    "FileName": "D:\\Music\\Music\\Symphony-Mid\\01. City Ruins.mp3",
    "ArtistID": 216,
    "AlbumID": 348,
    "TagID": 11
  },
  {
    "ID": 909,
    "Title": "Emil - Karma",
    "FileName": "D:\\Music\\Music\\Symphony-Mid\\01. Emil - Karma.mp3",
    "ArtistID": 220,
    "AlbumID": 365,
    "TagID": 11
  },
  {
    "ID": 910,
    "Title": "Kainé - Salvation",
    "FileName": "D:\\Music\\Music\\Symphony-Mid\\01. Kainé - Salvation.mp3",
    "ArtistID": 228,
    "AlbumID": 366,
    "TagID": 11
  },
  {
    "ID": 911,
    "Title": "Snow in Summer",
    "FileName": "D:\\Music\\Music\\Symphony-Mid\\01. Snow in Summer (Gestalt).mp3",
    "ArtistID": 217,
    "AlbumID": 349,
    "TagID": 11
  },
  {
    "ID": 912,
    "Title": "Snow in Summer",
    "FileName": "D:\\Music\\Music\\Symphony-Mid\\01. Snow in Summer (Origin).mp3",
    "ArtistID": 243,
    "AlbumID": 355,
    "TagID": 11
  },
  {
    "ID": 913,
    "Title": "Snow in Summer",
    "FileName": "D:\\Music\\Music\\Symphony-Mid\\01. Snow in Summer (Weiss).mp3",
    "ArtistID": 221,
    "AlbumID": 353,
    "TagID": 11
  },
  {
    "ID": 914,
    "Title": "Snow in Summer - Another Edit Version",
    "FileName": "D:\\Music\\Music\\Symphony-Mid\\01. Snow in Summer - Another Edit Version.mp3",
    "ArtistID": 215,
    "AlbumID": 352,
    "TagID": 11
  },
  {
    "ID": 915,
    "Title": "Snow in Summer",
    "FileName": "D:\\Music\\Music\\Symphony-Mid\\01. Snow in Summer.mp3",
    "ArtistID": 215,
    "AlbumID": 369,
    "TagID": 11
  },
  {
    "ID": 916,
    "Title": "Song of the Ancients - Devola",
    "FileName": "D:\\Music\\Music\\Symphony-Mid\\01. Song of the Ancients - Devola.mp3",
    "ArtistID": 232,
    "AlbumID": 368,
    "TagID": 11
  },
  {
    "ID": 917,
    "Title": "Amusement Park",
    "FileName": "D:\\Music\\Music\\Symphony-Mid\\02. Amusement Park.mp3",
    "ArtistID": 216,
    "AlbumID": 348,
    "TagID": 11
  },
  {
    "ID": 918,
    "Title": "Hills of Radiant Wind",
    "FileName": "D:\\Music\\Music\\Symphony-Mid\\02. Hills of Radiant Wind.mp3",
    "ArtistID": 217,
    "AlbumID": 359,
    "TagID": 11
  },
  {
    "ID": 919,
    "Title": "Hills of Radiant Winds",
    "FileName": "D:\\Music\\Music\\Symphony-Mid\\02. Hills of Radiant Winds (Gestalt).mp3",
    "ArtistID": 243,
    "AlbumID": 355,
    "TagID": 11
  },
  {
    "ID": 920,
    "Title": "Hills of Radiant Winds",
    "FileName": "D:\\Music\\Music\\Symphony-Mid\\02. Hills of Radiant Winds (Replicant).mp3",
    "ArtistID": 230,
    "AlbumID": 347,
    "TagID": 11
  },
  {
    "ID": 921,
    "Title": "Hills of Radiant Winds",
    "FileName": "D:\\Music\\Music\\Symphony-Mid\\02. Hills of Radiant Winds (Weiss).mp3",
    "ArtistID": 221,
    "AlbumID": 353,
    "TagID": 11
  },
  {
    "ID": 922,
    "Title": "Hills of Radiant Winds",
    "FileName": "D:\\Music\\Music\\Symphony-Mid\\02. Hills of Radiant Winds.mp3",
    "ArtistID": 227,
    "AlbumID": 362,
    "TagID": 11
  },
  {
    "ID": 923,
    "Title": "Shadowlord",
    "FileName": "D:\\Music\\Music\\Symphony-Mid\\02. Shadowlord.mp3",
    "ArtistID": 220,
    "AlbumID": 369,
    "TagID": 11
  },
  {
    "ID": 924,
    "Title": "Memories of Dust",
    "FileName": "D:\\Music\\Music\\Symphony-Mid\\03 Memories of Dust.mp3",
    "ArtistID": 218,
    "AlbumID": 350,
    "TagID": 11
  },
  {
    "ID": 925,
    "Title": "Birth of a Wish",
    "FileName": "D:\\Music\\Music\\Symphony-Mid\\03. Birth of a Wish.mp3",
    "ArtistID": 253,
    "AlbumID": 370,
    "TagID": 11
  },
  {
    "ID": 926,
    "Title": "Deep Crimson Foe",
    "FileName": "D:\\Music\\Music\\Symphony-Mid\\03. Deep Crimson Foe.mp3",
    "ArtistID": 216,
    "AlbumID": 357,
    "TagID": 11
  },
  {
    "ID": 927,
    "Title": "Hills of Radiant Wind",
    "FileName": "D:\\Music\\Music\\Symphony-Mid\\03. Hills of Radiant Wind.mp3",
    "ArtistID": 254,
    "AlbumID": 363,
    "TagID": 11
  },
  {
    "ID": 928,
    "Title": "Kainé - Another Edit Version",
    "FileName": "D:\\Music\\Music\\Symphony-Mid\\03. Kainé - Another Edit Version.mp3",
    "ArtistID": 228,
    "AlbumID": 352,
    "TagID": 11
  },
  {
    "ID": 929,
    "Title": "Kaine",
    "FileName": "D:\\Music\\Music\\Symphony-Mid\\03. Kainé.mp3",
    "ArtistID": 221,
    "AlbumID": 353,
    "TagID": 11
  },
  {
    "ID": 930,
    "Title": "Song of the Ancients - Hollow Dreams",
    "FileName": "D:\\Music\\Music\\Symphony-Mid\\03. Song of the Ancients - Hollow Dreams.mp3",
    "ArtistID": 228,
    "AlbumID": 368,
    "TagID": 11
  },
  {
    "ID": 931,
    "Title": "City Ruins (Shade)",
    "FileName": "D:\\Music\\Music\\Symphony-Mid\\03.City Ruins (Shade).mp3",
    "ArtistID": 237,
    "AlbumID": 371,
    "TagID": 11
  },
  {
    "ID": 932,
    "Title": "Alien Manifestation",
    "FileName": "D:\\Music\\Music\\Symphony-Mid\\04. Alien Manifestation.mp3",
    "ArtistID": 216,
    "AlbumID": 348,
    "TagID": 11
  },
  {
    "ID": 933,
    "Title": "Emil",
    "FileName": "D:\\Music\\Music\\Symphony-Mid\\04. Emil.mp3",
    "ArtistID": 228,
    "AlbumID": 365,
    "TagID": 11
  },
  {
    "ID": 934,
    "Title": "Memories of Dust",
    "FileName": "D:\\Music\\Music\\Symphony-Mid\\04. Memories of Dust.mp3",
    "ArtistID": 219,
    "AlbumID": 351,
    "TagID": 11
  },
  {
    "ID": 935,
    "Title": "Song of the Ancients (Emi Evans & J'Nique Nicole Vocals)",
    "FileName": "D:\\Music\\Music\\Symphony-Mid\\04. Song of the Ancients (Emi Evans & J'Nique Nicole Vocals).mp3",
    "ArtistID": 216,
    "AlbumID": 357,
    "TagID": 11
  },
  {
    "ID": 936,
    "Title": "Song of the Ancients - Fate",
    "FileName": "D:\\Music\\Music\\Symphony-Mid\\04. Song of the Ancients - Fate.mp3",
    "ArtistID": 220,
    "AlbumID": 368,
    "TagID": 11
  },
  {
    "ID": 937,
    "Title": "The Dark Colossus Destroys All",
    "FileName": "D:\\Music\\Music\\Symphony-Mid\\04. The Dark Colossus Destroys All.mp3",
    "ArtistID": 217,
    "AlbumID": 359,
    "TagID": 11
  },
  {
    "ID": 938,
    "Title": "Birth of a Wish",
    "FileName": "D:\\Music\\Music\\Symphony-Mid\\05. Birth of a Wish.mp3",
    "ArtistID": 219,
    "AlbumID": 351,
    "TagID": 11
  },
  {
    "ID": 939,
    "Title": "Cold Steel Coffin",
    "FileName": "D:\\Music\\Music\\Symphony-Mid\\05. Cold Steel Coffin.mp3",
    "ArtistID": 243,
    "AlbumID": 355,
    "TagID": 11
  },
  {
    "ID": 940,
    "Title": "Deep Crimson Foe",
    "FileName": "D:\\Music\\Music\\Symphony-Mid\\05. Deep Crimson Foe.mp3",
    "ArtistID": 221,
    "AlbumID": 353,
    "TagID": 11
  },
  {
    "ID": 941,
    "Title": "Gods Bound by Rules",
    "FileName": "D:\\Music\\Music\\Symphony-Mid\\05. Gods Bound by Rules.mp3",
    "ArtistID": 216,
    "AlbumID": 361,
    "TagID": 11
  },
  {
    "ID": 942,
    "Title": "The Tower",
    "FileName": "D:\\Music\\Music\\Symphony-Mid\\05. The Tower.mp3",
    "ArtistID": 216,
    "AlbumID": 348,
    "TagID": 11
  },
  {
    "ID": 943,
    "Title": "Dependent Weakling",
    "FileName": "D:\\Music\\Music\\Symphony-Mid\\06. Dependent Weakling.mp3",
    "ArtistID": 216,
    "AlbumID": 348,
    "TagID": 11
  },
  {
    "ID": 944,
    "Title": "Emil - Another Edit Version",
    "FileName": "D:\\Music\\Music\\Symphony-Mid\\06. Emil - Another Edit Version.mp3",
    "ArtistID": 220,
    "AlbumID": 352,
    "TagID": 11
  },
  {
    "ID": 945,
    "Title": "Emil",
    "FileName": "D:\\Music\\Music\\Symphony-Mid\\06. Emil.mp3",
    "ArtistID": 221,
    "AlbumID": 353,
    "TagID": 11
  },
  {
    "ID": 946,
    "Title": "Shadowlord",
    "FileName": "D:\\Music\\Music\\Symphony-Mid\\06. Shadowlord.mp3",
    "ArtistID": 233,
    "AlbumID": 369,
    "TagID": 11
  },
  {
    "ID": 947,
    "Title": "The Wretched Automatons",
    "FileName": "D:\\Music\\Music\\Symphony-Mid\\06. The Wretched Automatons.mp3",
    "ArtistID": 227,
    "AlbumID": 362,
    "TagID": 11
  },
  {
    "ID": 948,
    "Title": "A Beautiful Song (Emi Evans & J'Nique Nicole Vocals)",
    "FileName": "D:\\Music\\Music\\Symphony-Mid\\07. A Beautiful Song (Emi Evans & J'Nique Nicole Vocals).mp3",
    "ArtistID": 216,
    "AlbumID": 357,
    "TagID": 11
  },
  {
    "ID": 949,
    "Title": "Bipolar Nightmare",
    "FileName": "D:\\Music\\Music\\Symphony-Mid\\07. Bipolar Nightmare.mp3",
    "ArtistID": 216,
    "AlbumID": 348,
    "TagID": 11
  },
  {
    "ID": 950,
    "Title": "Emil",
    "FileName": "D:\\Music\\Music\\Symphony-Mid\\07. Emil.mp3",
    "ArtistID": 233,
    "AlbumID": 365,
    "TagID": 11
  },
  {
    "ID": 951,
    "Title": "Fleeting Words - Another Edit Version",
    "FileName": "D:\\Music\\Music\\Symphony-Mid\\07. Fleeting Words - Another Edit Version.mp3",
    "ArtistID": 255,
    "AlbumID": 352,
    "TagID": 11
  },
  {
    "ID": 952,
    "Title": "Fleeting Words",
    "FileName": "D:\\Music\\Music\\Symphony-Mid\\07. Fleeting Words.mp3",
    "ArtistID": 221,
    "AlbumID": 353,
    "TagID": 11
  },
  {
    "ID": 953,
    "Title": "Possessed by Disease",
    "FileName": "D:\\Music\\Music\\Symphony-Mid\\07. Possessed by Disease.mp3",
    "ArtistID": 256,
    "AlbumID": 362,
    "TagID": 11
  },
  {
    "ID": 954,
    "Title": "Song of the Ancients",
    "FileName": "D:\\Music\\Music\\Symphony-Mid\\07. Song of the Ancients.mp3",
    "ArtistID": 246,
    "AlbumID": 368,
    "TagID": 11
  },
  {
    "ID": 955,
    "Title": "Pascal",
    "FileName": "D:\\Music\\Music\\Symphony-Mid\\08 Pascal.mp3",
    "ArtistID": 218,
    "AlbumID": 350,
    "TagID": 11
  },
  {
    "ID": 956,
    "Title": "Copied City",
    "FileName": "D:\\Music\\Music\\Symphony-Mid\\08. Copied City.mp3",
    "ArtistID": 216,
    "AlbumID": 357,
    "TagID": 11
  },
  {
    "ID": 957,
    "Title": "Mourning",
    "FileName": "D:\\Music\\Music\\Symphony-Mid\\08. Mourning.mp3",
    "ArtistID": 216,
    "AlbumID": 348,
    "TagID": 11
  },
  {
    "ID": 958,
    "Title": "Song of the Ancients",
    "FileName": "D:\\Music\\Music\\Symphony-Mid\\08. Song of the Ancients (Weiss).mp3",
    "ArtistID": 221,
    "AlbumID": 353,
    "TagID": 11
  },
  {
    "ID": 959,
    "Title": "Song of the Ancients - Another Edit Version",
    "FileName": "D:\\Music\\Music\\Symphony-Mid\\08. Song of the Ancients - Another Edit Version.mp3",
    "ArtistID": 257,
    "AlbumID": 352,
    "TagID": 11
  },
  {
    "ID": 960,
    "Title": "Song of the Ancients",
    "FileName": "D:\\Music\\Music\\Symphony-Mid\\08. Song of the Ancients.mp3",
    "ArtistID": 258,
    "AlbumID": 368,
    "TagID": 11
  },
  {
    "ID": 961,
    "Title": "The Wretched Automatons",
    "FileName": "D:\\Music\\Music\\Symphony-Mid\\08. The Wretched Automatons.mp3",
    "ArtistID": 243,
    "AlbumID": 355,
    "TagID": 11
  },
  {
    "ID": 962,
    "Title": "Weight of the World",
    "FileName": "D:\\Music\\Music\\Symphony-Mid\\08. Weight of the World.mp3",
    "ArtistID": 259,
    "AlbumID": 362,
    "TagID": 11
  },
  {
    "ID": 963,
    "Title": "Pascal",
    "FileName": "D:\\Music\\Music\\Symphony-Mid\\08.Pascal.mp3",
    "ArtistID": 237,
    "AlbumID": 371,
    "TagID": 11
  },
  {
    "ID": 964,
    "Title": "City of Commerce",
    "FileName": "D:\\Music\\Music\\Symphony-Mid\\09. City of Commerce.mp3",
    "ArtistID": 243,
    "AlbumID": 355,
    "TagID": 11
  },
  {
    "ID": 965,
    "Title": "Crumbling Lies",
    "FileName": "D:\\Music\\Music\\Symphony-Mid\\09. Crumbling Lies.mp3",
    "ArtistID": 216,
    "AlbumID": 357,
    "TagID": 11
  },
  {
    "ID": 966,
    "Title": "The Sound of the End",
    "FileName": "D:\\Music\\Music\\Symphony-Mid\\09. The Sound of the End.mp3",
    "ArtistID": 216,
    "AlbumID": 348,
    "TagID": 11
  },
  {
    "ID": 967,
    "Title": "Alien Manifestation",
    "FileName": "D:\\Music\\Music\\Symphony-Mid\\10 Alien Manifestation.mp3",
    "ArtistID": 218,
    "AlbumID": 350,
    "TagID": 11
  },
  {
    "ID": 968,
    "Title": "City of Commerce",
    "FileName": "D:\\Music\\Music\\Symphony-Mid\\10. City of Commerce.mp3",
    "ArtistID": 220,
    "AlbumID": 347,
    "TagID": 11
  },
  {
    "ID": 969,
    "Title": "Shadowlord",
    "FileName": "D:\\Music\\Music\\Symphony-Mid\\10. Shadowlord -Live.mp3",
    "ArtistID": 227,
    "AlbumID": 362,
    "TagID": 11
  },
  {
    "ID": 970,
    "Title": "Shadowlord",
    "FileName": "D:\\Music\\Music\\Symphony-Mid\\10. Shadowlord.mp3",
    "ArtistID": 216,
    "AlbumID": 361,
    "TagID": 11
  },
  {
    "ID": 971,
    "Title": "Song of the Ancients (Popola)",
    "FileName": "D:\\Music\\Music\\Symphony-Mid\\10. Song of the Ancients (Popola).mp3",
    "ArtistID": 243,
    "AlbumID": 355,
    "TagID": 11
  },
  {
    "ID": 972,
    "Title": "Weight of the World",
    "FileName": "D:\\Music\\Music\\Symphony-Mid\\10. Weight of the World.mp3",
    "ArtistID": 216,
    "AlbumID": 348,
    "TagID": 11
  },
  {
    "ID": 973,
    "Title": "Alien Manifestation",
    "FileName": "D:\\Music\\Music\\Symphony-Mid\\11. Alien Manifestation.mp3",
    "ArtistID": 260,
    "AlbumID": 354,
    "TagID": 11
  },
  {
    "ID": 974,
    "Title": "Kainé - Weiss Edition Arrangement",
    "FileName": "D:\\Music\\Music\\Symphony-Mid\\11. Kainé - Weiss Edition Arrangement.mp3",
    "ArtistID": 261,
    "AlbumID": 352,
    "TagID": 11
  },
  {
    "ID": 975,
    "Title": "Kaine",
    "FileName": "D:\\Music\\Music\\Symphony-Mid\\11. Kainé.mp3",
    "ArtistID": 221,
    "AlbumID": 353,
    "TagID": 11
  },
  {
    "ID": 976,
    "Title": "The Prestigious Mask",
    "FileName": "D:\\Music\\Music\\Symphony-Mid\\11. The Prestigious Mask (Gestalt).mp3",
    "ArtistID": 243,
    "AlbumID": 355,
    "TagID": 11
  },
  {
    "ID": 977,
    "Title": "The Prestigious Mask",
    "FileName": "D:\\Music\\Music\\Symphony-Mid\\11. The Prestigious Mask.mp3",
    "ArtistID": 220,
    "AlbumID": 347,
    "TagID": 11
  },
  {
    "ID": 978,
    "Title": "Temple of Drifting Sands",
    "FileName": "D:\\Music\\Music\\Symphony-Mid\\12. Temple of Drifting Sands (Gestalt).mp3",
    "ArtistID": 243,
    "AlbumID": 355,
    "TagID": 11
  },
  {
    "ID": 979,
    "Title": "Temple of Drifting Sands",
    "FileName": "D:\\Music\\Music\\Symphony-Mid\\12. Temple of Drifting Sands.mp3",
    "ArtistID": 220,
    "AlbumID": 347,
    "TagID": 11
  },
  {
    "ID": 980,
    "Title": "Weight Of The World",
    "FileName": "D:\\Music\\Music\\Symphony-Mid\\12. Weight Of The World.mp3",
    "ArtistID": 221,
    "AlbumID": 354,
    "TagID": 11
  },
  {
    "ID": 981,
    "Title": "Mourning",
    "FileName": "D:\\Music\\Music\\Symphony-Mid\\13 Mourning.mp3",
    "ArtistID": 218,
    "AlbumID": 350,
    "TagID": 11
  },
  {
    "ID": 982,
    "Title": "Gods Bound by Rules",
    "FileName": "D:\\Music\\Music\\Symphony-Mid\\13. Gods Bound by Rules.mp3",
    "ArtistID": 243,
    "AlbumID": 355,
    "TagID": 11
  },
  {
    "ID": 983,
    "Title": "Song of the Ancients / Fate",
    "FileName": "D:\\Music\\Music\\Symphony-Mid\\13. Song of the Ancients - Fate.mp3",
    "ArtistID": 227,
    "AlbumID": 362,
    "TagID": 11
  },
  {
    "ID": 984,
    "Title": "Weight of the World",
    "FileName": "D:\\Music\\Music\\Symphony-Mid\\14 Weight of the World.mp3",
    "ArtistID": 218,
    "AlbumID": 350,
    "TagID": 11
  },
  {
    "ID": 985,
    "Title": "Grandma",
    "FileName": "D:\\Music\\Music\\Symphony-Mid\\14. Grandma.mp3",
    "ArtistID": 221,
    "AlbumID": 353,
    "TagID": 11
  },
  {
    "ID": 986,
    "Title": "Weight of the World / the End of YoRHa",
    "FileName": "D:\\Music\\Music\\Symphony-Mid\\17 Weight of the World - the End of YoRHa.mp3",
    "ArtistID": 218,
    "AlbumID": 350,
    "TagID": 11
  },
  {
    "ID": 987,
    "Title": "Fleeting Words",
    "FileName": "D:\\Music\\Music\\Symphony-Mid\\19. Fleeting Words.mp3",
    "ArtistID": 221,
    "AlbumID": 353,
    "TagID": 11
  },
  {
    "ID": 988,
    "Title": "Pascal",
    "FileName": "D:\\Music\\Music\\Symphony-Mid\\20. Pascal.mp3",
    "ArtistID": 219,
    "AlbumID": 351,
    "TagID": 11
  },
  {
    "ID": 989,
    "Title": "Forest Kingdom",
    "FileName": "D:\\Music\\Music\\Symphony-Mid\\21. Forest Kingdom.mp3",
    "ArtistID": 219,
    "AlbumID": 351,
    "TagID": 11
  },
  {
    "ID": 990,
    "Title": "The Lost Forest",
    "FileName": "D:\\Music\\Music\\Symphony-Mid\\21. The Lost Forest.mp3",
    "ArtistID": 232,
    "AlbumID": 347,
    "TagID": 11
  },
  {
    "ID": 991,
    "Title": "Copied City",
    "FileName": "D:\\Music\\Music\\Symphony-Mid\\23. Copied City.mp3",
    "ArtistID": 219,
    "AlbumID": 351,
    "TagID": 11
  },
  {
    "ID": 992,
    "Title": "The Dark Colossus Destroys All",
    "FileName": "D:\\Music\\Music\\Symphony-Mid\\24. The Dark Colossus Destroys All.mp3",
    "ArtistID": 223,
    "AlbumID": 355,
    "TagID": 11
  },
  {
    "ID": 993,
    "Title": "Wretched Weaponry: Medium/Dynamic",
    "FileName": "D:\\Music\\Music\\Symphony-Mid\\24. Wretched Weaponry ：Medium／Dynamic.mp3",
    "ArtistID": 219,
    "AlbumID": 351,
    "TagID": 11
  },
  {
    "ID": 994,
    "Title": "Kainé / Salvation",
    "FileName": "D:\\Music\\Music\\Symphony-Mid\\25. Kainé - Salvation.mp3",
    "ArtistID": 228,
    "AlbumID": 347,
    "TagID": 11
  },
  {
    "ID": 995,
    "Title": "Song of the Ancients (Hollow Dreams)",
    "FileName": "D:\\Music\\Music\\Symphony-Mid\\25. Song of the Ancients (Hollow Dreams).mp3",
    "ArtistID": 223,
    "AlbumID": 355,
    "TagID": 11
  },
  {
    "ID": 996,
    "Title": "Kainé (Salvation)",
    "FileName": "D:\\Music\\Music\\Symphony-Mid\\26. Kainé (Salvation).mp3",
    "ArtistID": 223,
    "AlbumID": 355,
    "TagID": 11
  },
  {
    "ID": 997,
    "Title": "Kainé (Escape)",
    "FileName": "D:\\Music\\Music\\Symphony-Mid\\27. Kainé (Escape).mp3",
    "ArtistID": 223,
    "AlbumID": 355,
    "TagID": 11
  },
  {
    "ID": 998,
    "Title": "Fleeting Words / Outsider",
    "FileName": "D:\\Music\\Music\\Symphony-Mid\\32. Fleeting Words - Outsider.mp3",
    "ArtistID": 228,
    "AlbumID": 347,
    "TagID": 11
  },
  {
    "ID": 999,
    "Title": "Crumbling Lies - Front",
    "FileName": "D:\\Music\\Music\\Symphony-Mid\\33. Crumbling Lies - Front.mp3",
    "ArtistID": 219,
    "AlbumID": 351,
    "TagID": 11
  },
  {
    "ID": 1000,
    "Title": "Dance of the Evanescent",
    "FileName": "D:\\Music\\Music\\Symphony-Mid\\34. Dance of the Evanescent.mp3",
    "ArtistID": 223,
    "AlbumID": 355,
    "TagID": 11
  },
  {
    "ID": 1001,
    "Title": "Song of the Ancients / Hollow Dreams",
    "FileName": "D:\\Music\\Music\\Symphony-Mid\\34. Song of the Ancients - Hollow Dreams.mp3",
    "ArtistID": 228,
    "AlbumID": 347,
    "TagID": 11
  },
  {
    "ID": 1002,
    "Title": "Song of the Ancients - Atonement",
    "FileName": "D:\\Music\\Music\\Symphony-Mid\\37. Song of the Ancients - Atonement.mp3",
    "ArtistID": 219,
    "AlbumID": 351,
    "TagID": 11
  },
  {
    "ID": 1003,
    "Title": "Shadowlord",
    "FileName": "D:\\Music\\Music\\Symphony-Mid\\38. Shadowlord.mp3",
    "ArtistID": 223,
    "AlbumID": 355,
    "TagID": 11
  },
  {
    "ID": 1004,
    "Title": "Song of the Ancients / Fate",
    "FileName": "D:\\Music\\Music\\Symphony-Mid\\38. Song of the Ancients - Fate.mp3",
    "ArtistID": 220,
    "AlbumID": 347,
    "TagID": 11
  },
  {
    "ID": 1005,
    "Title": "Emil / Karma",
    "FileName": "D:\\Music\\Music\\Symphony-Mid\\39. Emil - Karma.mp3",
    "ArtistID": 220,
    "AlbumID": 347,
    "TagID": 11
  },
  {
    "ID": 1006,
    "Title": "Alien Manifestation",
    "FileName": "D:\\Music\\Music\\Symphony-Mid\\41. Alien Manifestation.mp3",
    "ArtistID": 219,
    "AlbumID": 351,
    "TagID": 11
  },
  {
    "ID": 1007,
    "Title": "Shadowlord",
    "FileName": "D:\\Music\\Music\\Symphony-Mid\\41. Shadowlord.mp3",
    "ArtistID": 220,
    "AlbumID": 347,
    "TagID": 11
  },
  {
    "ID": 1008,
    "Title": "Grandma / Reunion",
    "FileName": "D:\\Music\\Music\\Symphony-Mid\\43. Grandma - Reunion.mp3",
    "ArtistID": 228,
    "AlbumID": 347,
    "TagID": 11
  },
  {
    "ID": 1009,
    "Title": "Kainé / Escape",
    "FileName": "D:\\Music\\Music\\Symphony-Mid\\44. Kainé - Escape.mp3",
    "ArtistID": 228,
    "AlbumID": 347,
    "TagID": 11
  },
  {
    "ID": 1010,
    "Title": "The Sound of the End",
    "FileName": "D:\\Music\\Music\\Symphony-Mid\\44. The Sound of the End.mp3",
    "ArtistID": 219,
    "AlbumID": 351,
    "TagID": 11
  },
  {
    "ID": 1011,
    "Title": "Weight of the World Nouveau - FR Version",
    "FileName": "D:\\Music\\Music\\Symphony-Mid\\45. Weight of the World Nouveau - FR Version.mp3",
    "ArtistID": 219,
    "AlbumID": 351,
    "TagID": 11
  },
  {
    "ID": 1012,
    "Title": "Weight of the World the End of YoRHa",
    "FileName": "D:\\Music\\Music\\Symphony-Mid\\46. Weight of the World the End of YoRHa.mp3",
    "ArtistID": 219,
    "AlbumID": 351,
    "TagID": 11
  }
];
var Albums= [
  {
    "ID": 0,
    "Name": "Flares",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Flares.jpg",
    "ArtistID": 0
  },
  {
    "ID": 1,
    "Name": "Awakening",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Awakening.jpg",
    "ArtistID": 1
  },
  {
    "ID": 2,
    "Name": "Close (Brooks Remix)",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Close (Brooks Remix).jpg",
    "ArtistID": 2
  },
  {
    "ID": 3,
    "Name": "Cloud 9",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Cloud 9.jpg",
    "ArtistID": 3
  },
  {
    "ID": 4,
    "Name": "Colors",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Colors.jpg",
    "ArtistID": 4
  },
  {
    "ID": 5,
    "Name": "The Classics",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\The Classics.jpg",
    "ArtistID": 5
  },
  {
    "ID": 6,
    "Name": "Energy",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Energy.jpg",
    "ArtistID": 6
  },
  {
    "ID": 7,
    "Name": "Everlasting",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Everlasting.jpg",
    "ArtistID": 7
  },
  {
    "ID": 8,
    "Name": "Fire",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Fire.jpg",
    "ArtistID": 6
  },
  {
    "ID": 9,
    "Name": "Frisbee",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Frisbee.jpg",
    "ArtistID": 8
  },
  {
    "ID": 10,
    "Name": "Level Up",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Level Up.jpg",
    "ArtistID": 9
  },
  {
    "ID": 11,
    "Name": "KIKO",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\KIKO.jpg",
    "ArtistID": 10
  },
  {
    "ID": 12,
    "Name": "Higher",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Higher.jpg",
    "ArtistID": 4
  },
  {
    "ID": 13,
    "Name": "Hope",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Hope.jpg",
    "ArtistID": 4
  },
  {
    "ID": 14,
    "Name": "Legends (Hyper Potions Remix)",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Legends (Hyper Potions Remix).jpg",
    "ArtistID": 12
  },
  {
    "ID": 15,
    "Name": "Limitless",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Limitless.jpg",
    "ArtistID": 6
  },
  {
    "ID": 16,
    "Name": "Rise",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Rise.jpg",
    "ArtistID": 13
  },
  {
    "ID": 17,
    "Name": "Rubik",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Rubik.jpg",
    "ArtistID": 14
  },
  {
    "ID": 18,
    "Name": "S.K.Y.Prox",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\S.K.Y.Prox.jpg",
    "ArtistID": 15
  },
  {
    "ID": 19,
    "Name": "Seven",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Seven.jpg",
    "ArtistID": 4
  },
  {
    "ID": 20,
    "Name": "Sky (feat. Martell) [Radio Edit]",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Sky (feat. Martell) [Radio Edit].jpg",
    "ArtistID": 16
  },
  {
    "ID": 21,
    "Name": "Sky High",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Sky High.jpg",
    "ArtistID": 6
  },
  {
    "ID": 22,
    "Name": "Origins",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Origins.jpg",
    "ArtistID": 17
  },
  {
    "ID": 23,
    "Name": "Sunburst",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Sunburst.jpg",
    "ArtistID": 3
  },
  {
    "ID": 24,
    "Name": "Vision",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Vision.jpg",
    "ArtistID": 6
  },
  {
    "ID": 25,
    "Name": "Welcome to Planet Urf",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Welcome to Planet Urf.jpg",
    "ArtistID": 18
  },
  {
    "ID": 26,
    "Name": "Muvik",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Muvik.jpg",
    "ArtistID": 19
  },
  {
    "ID": 27,
    "Name": "Guava Breeze",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Guava Breeze.jpg",
    "ArtistID": 20
  },
  {
    "ID": 28,
    "Name": "Home",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Home.jpg",
    "ArtistID": 21
  },
  {
    "ID": 29,
    "Name": "Classics 2014 - 2015",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Classics 2014 - 2015.jpg",
    "ArtistID": 21
  },
  {
    "ID": 30,
    "Name": "Seve (Radio Edit)",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Seve (Radio Edit).jpg",
    "ArtistID": 22
  },
  {
    "ID": 31,
    "Name": "Somero",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Somero.jpg",
    "ArtistID": 23
  },
  {
    "ID": 32,
    "Name": "Turtle Beach",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Turtle Beach.jpg",
    "ArtistID": 24
  },
  {
    "ID": 33,
    "Name": "Candyland",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Candyland.jpg",
    "ArtistID": 4
  },
  {
    "ID": 34,
    "Name": "Close To The Sun",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Close To The Sun.jpg",
    "ArtistID": 25
  },
  {
    "ID": 35,
    "Name": "Cool",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Cool.jpg",
    "ArtistID": 26
  },
  {
    "ID": 36,
    "Name": "Jackpot",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Jackpot.jpg",
    "ArtistID": 27
  },
  {
    "ID": 37,
    "Name": "Fly Away",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Fly Away.jpg",
    "ArtistID": 25
  },
  {
    "ID": 38,
    "Name": "Happy Robot",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Happy Robot.jpg",
    "ArtistID": 21
  },
  {
    "ID": 39,
    "Name": "Holo",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Holo.jpg",
    "ArtistID": 13
  },
  {
    "ID": 40,
    "Name": "Infectious",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Infectious.jpg",
    "ArtistID": 4
  },
  {
    "ID": 41,
    "Name": "Joy",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Joy.jpg",
    "ArtistID": 4
  },
  {
    "ID": 42,
    "Name": "Let's Go",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Let's Go.jpg",
    "ArtistID": 4
  },
  {
    "ID": 43,
    "Name": "Perpetuo",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Perpetuo.jpg",
    "ArtistID": 4
  },
  {
    "ID": 44,
    "Name": "Masked Heroes",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Masked Heroes.jpg",
    "ArtistID": 21
  },
  {
    "ID": 45,
    "Name": "Masked Raver",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Masked Raver.jpg",
    "ArtistID": 21
  },
  {
    "ID": 46,
    "Name": "Mesmerize",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Mesmerize.jpg",
    "ArtistID": 4
  },
  {
    "ID": 47,
    "Name": "Monody (feat. Laura Brehm)",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Monody (feat. Laura Brehm).jpg",
    "ArtistID": 28
  },
  {
    "ID": 48,
    "Name": "Nostalgia",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Nostalgia.jpg",
    "ArtistID": 4
  },
  {
    "ID": 49,
    "Name": "Sunset",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Sunset.jpg",
    "ArtistID": 29
  },
  {
    "ID": 50,
    "Name": "The Silent Miracle",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\The Silent Miracle.jpg",
    "ArtistID": 21
  },
  {
    "ID": 51,
    "Name": "Warrior Songs",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Warrior Songs.jpg",
    "ArtistID": 27
  },
  {
    "ID": 52,
    "Name": "Piece Of Me (Vexento Remix)",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Piece Of Me (Vexento Remix).jpg",
    "ArtistID": 30
  },
  {
    "ID": 53,
    "Name": "Sad Robot",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Sad Robot.jpg",
    "ArtistID": 21
  },
  {
    "ID": 54,
    "Name": "Hello, World",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Hello, World.jpg",
    "ArtistID": 31
  },
  {
    "ID": 55,
    "Name": "Tevo",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Tevo.jpg",
    "ArtistID": 21
  },
  {
    "ID": 56,
    "Name": "Trap Queen",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Trap Queen.jpg",
    "ArtistID": 32
  },
  {
    "ID": 57,
    "Name": "Trippy Love",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Trippy Love.jpg",
    "ArtistID": 21
  },
  {
    "ID": 58,
    "Name": "Tropic Love",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Tropic Love.jpg",
    "ArtistID": 33
  },
  {
    "ID": 59,
    "Name": "Unity",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Unity.jpg",
    "ArtistID": 27
  },
  {
    "ID": 60,
    "Name": "Verve",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Verve.jpg",
    "ArtistID": 21
  },
  {
    "ID": 61,
    "Name": "Where We Belong",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Where We Belong.jpg",
    "ArtistID": 21
  },
  {
    "ID": 62,
    "Name": "Kaikai Kitan / Ao No Waltz",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Kaikai Kitan  Ao No Waltz.jpg",
    "ArtistID": 34
  },
  {
    "ID": 63,
    "Name": "デスぺレート",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\デスぺレート.jpg",
    "ArtistID": 35
  },
  {
    "ID": 64,
    "Name": "Bunka",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Bunka.jpg",
    "ArtistID": 34
  },
  {
    "ID": 65,
    "Name": "Gunjo Sanka / Yuseiboushi",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Gunjo Sanka  Yuseiboushi.jpg",
    "ArtistID": 34
  },
  {
    "ID": 66,
    "Name": "Casino",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Casino.jpg",
    "ArtistID": 36
  },
  {
    "ID": 67,
    "Name": "Cheating is a crime",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Cheating is a crime.jpg",
    "ArtistID": 37
  },
  {
    "ID": 68,
    "Name": "GHOST CITY TOKYO (digital edition)",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\GHOST CITY TOKYO (digital edition).jpg",
    "ArtistID": 38
  },
  {
    "ID": 69,
    "Name": "Demon Lord",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Demon Lord.jpg",
    "ArtistID": 39
  },
  {
    "ID": 70,
    "Name": "ENVY BABY",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\ENVY BABY.jpg",
    "ArtistID": 39
  },
  {
    "ID": 71,
    "Name": "EYE",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\EYE.jpg",
    "ArtistID": 39
  },
  {
    "ID": 72,
    "Name": "FightSong",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\FightSong.jpg",
    "ArtistID": 34
  },
  {
    "ID": 73,
    "Name": "Good-bye Declaration",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Good-bye Declaration.jpg",
    "ArtistID": 40
  },
  {
    "ID": 74,
    "Name": "KING",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\KING.jpg",
    "ArtistID": 39
  },
  {
    "ID": 75,
    "Name": "MIRA",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\MIRA.jpg",
    "ArtistID": 39
  },
  {
    "ID": 76,
    "Name": "Nightmare",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Nightmare.jpg",
    "ArtistID": 36
  },
  {
    "ID": 77,
    "Name": "Nerenaiyoruni ka-tenwoakete",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Nerenaiyoruni ka-tenwoakete.jpg",
    "ArtistID": 41
  },
  {
    "ID": 78,
    "Name": "QUEEN",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\QUEEN.jpg",
    "ArtistID": 39
  },
  {
    "ID": 79,
    "Name": "Rendezvous",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Rendezvous.jpg",
    "ArtistID": 39
  },
  {
    "ID": 80,
    "Name": "Shadow Shadow",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Shadow Shadow.jpg",
    "ArtistID": 36
  },
  {
    "ID": 81,
    "Name": "Whisper Whisper Whisper",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Whisper Whisper Whisper.jpg",
    "ArtistID": 36
  },
  {
    "ID": 82,
    "Name": "Yoidoreshirazu",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Yoidoreshirazu.jpg",
    "ArtistID": 39
  },
  {
    "ID": 83,
    "Name": "アイデンティティ",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\アイデンティティ.jpg",
    "ArtistID": 39
  },
  {
    "ID": 84,
    "Name": "エンヴィーベイビー x KING",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\エンヴィーベイビー x KING.jpg",
    "ArtistID": 39
  },
  {
    "ID": 85,
    "Name": "KOI",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\KOI.jpg",
    "ArtistID": 42
  },
  {
    "ID": 86,
    "Name": "これくしょん３",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\これくしょん３.jpg",
    "ArtistID": 43
  },
  {
    "ID": 87,
    "Name": "KOBASOLO",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\KOBASOLO.jpg",
    "ArtistID": 44
  },
  {
    "ID": 88,
    "Name": "これくしょん",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\これくしょん.jpg",
    "ArtistID": 46
  },
  {
    "ID": 89,
    "Name": "FAITH",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\FAITH.jpg",
    "ArtistID": 47
  },
  {
    "ID": 90,
    "Name": "40",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\40.jpg",
    "ArtistID": 47
  },
  {
    "ID": 91,
    "Name": "Akie",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Akie.jpg",
    "ArtistID": 48
  },
  {
    "ID": 92,
    "Name": "WOMAN 2 ～Love Song Covers～",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\WOMAN 2 ～Love Song Covers～.jpg",
    "ArtistID": 47
  },
  {
    "ID": 93,
    "Name": "TVアニメ『終末なにしてますか?忙しいですか?救ってもらっていいですか?』オリジナルサウンドトラック「青い記憶」",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\TVアニメ『終末なにしてますか忙しいですか救ってもらっていいですか』オリジナルサウンドトラック「青い記憶」.jpg",
    "ArtistID": 49
  },
  {
    "ID": 94,
    "Name": "Best & Coupling Covers",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Best & Coupling Covers.jpg",
    "ArtistID": 47
  },
  {
    "ID": 95,
    "Name": "Ms.OOJAの、いちばん泣けるドリカム",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Ms.OOJAの、いちばん泣けるドリカム.jpg",
    "ArtistID": 47
  },
  {
    "ID": 96,
    "Name": "Stories",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Stories.jpg",
    "ArtistID": 47
  },
  {
    "ID": 97,
    "Name": "CINEMATIC",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\CINEMATIC.jpg",
    "ArtistID": 50
  },
  {
    "ID": 98,
    "Name": "All About Tiara Ⅲ / Fan Selection Best",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\All About Tiara Ⅲ  Fan Selection Best.jpg",
    "ArtistID": 51
  },
  {
    "ID": 99,
    "Name": "MAN ＆ WOMAN",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\MAN ＆ WOMAN.jpg",
    "ArtistID": 47
  },
  {
    "ID": 100,
    "Name": "Be...",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Be....jpg",
    "ArtistID": 47
  },
  {
    "ID": 101,
    "Name": "PRESENT",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\PRESENT.jpg",
    "ArtistID": 47
  },
  {
    "ID": 102,
    "Name": "また恋をすることなど",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\また恋をすることなど.jpg",
    "ArtistID": 47
  },
  {
    "ID": 103,
    "Name": "VOICE",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\VOICE.jpg",
    "ArtistID": 47
  },
  {
    "ID": 104,
    "Name": "Collection",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Collection.jpg",
    "ArtistID": 52
  },
  {
    "ID": 105,
    "Name": "流しのOOJA〜VINTAGE SONG COVERS〜",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\流しのOOJA〜VINTAGE SONG COVERS〜.jpg",
    "ArtistID": 47
  },
  {
    "ID": 106,
    "Name": "流しのOOJA 2 〜VINTAGE SONG COVERS〜",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\流しのOOJA 2 〜VINTAGE SONG COVERS〜.jpg",
    "ArtistID": 47
  },
  {
    "ID": 107,
    "Name": "あなたに会えなくなる日まで / You are Beautiful",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\あなたに会えなくなる日まで  You are Beautiful.jpg",
    "ArtistID": 47
  },
  {
    "ID": 108,
    "Name": "THE HITS ～NO.1 SONG COVERS～",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\THE HITS ～NO.1 SONG COVERS～.jpg",
    "ArtistID": 47
  },
  {
    "ID": 109,
    "Name": "鐘が鳴る (Acoustic ver.)",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\鐘が鳴る (Acoustic ver.).jpg",
    "ArtistID": 47
  },
  {
    "ID": 110,
    "Name": "Contrast",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Contrast.jpg",
    "ArtistID": 53
  },
  {
    "ID": 111,
    "Name": "HEART",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\HEART.jpg",
    "ArtistID": 47
  },
  {
    "ID": 112,
    "Name": "AGAIN",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\AGAIN.jpg",
    "ArtistID": 47
  },
  {
    "ID": 113,
    "Name": "COLOR",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\COLOR.jpg",
    "ArtistID": 47
  },
  {
    "ID": 114,
    "Name": "remember",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\remember.jpg",
    "ArtistID": 54
  },
  {
    "ID": 115,
    "Name": "Low",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Low.jpg",
    "ArtistID": 56
  },
  {
    "ID": 116,
    "Name": "Re:Contact",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\ReContact.jpg",
    "ArtistID": 57
  },
  {
    "ID": 117,
    "Name": "summertime",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\summertime.jpg",
    "ArtistID": 58
  },
  {
    "ID": 118,
    "Name": "SANCTUARYⅡ 〜Minori Chihara Best Album〜 (Artist Edition)",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\SANCTUARYⅡ 〜Minori Chihara Best Album〜 (Artist Edition).jpg",
    "ArtistID": 57
  },
  {
    "ID": 119,
    "Name": "BEST All Singles&Covers Hits",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\BEST All Singles&Covers Hits.jpg",
    "ArtistID": 50
  },
  {
    "ID": 120,
    "Name": "Re:I",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\ReI.jpg",
    "ArtistID": 60
  },
  {
    "ID": 121,
    "Name": "NAMIDA CARATS",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\NAMIDA CARATS.jpg",
    "ArtistID": 42
  },
  {
    "ID": 122,
    "Name": "アニップス",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\アニップス.jpg",
    "ArtistID": 61
  },
  {
    "ID": 123,
    "Name": "日常ドラマチック",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\日常ドラマチック.jpg",
    "ArtistID": 62
  },
  {
    "ID": 124,
    "Name": "TOHO BOSSA NOVA 2",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\TOHO BOSSA NOVA 2.jpg",
    "ArtistID": 63
  },
  {
    "ID": 125,
    "Name": "今夜きみが怖い夢を見ませんように",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\今夜きみが怖い夢を見ませんように.jpg",
    "ArtistID": 64
  },
  {
    "ID": 126,
    "Name": "君に出逢えて",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\君に出逢えて.jpg",
    "ArtistID": 65
  },
  {
    "ID": 127,
    "Name": "夜撫でるメノウ / 幽霊東京",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\夜撫でるメノウ  幽霊東京.jpg",
    "ArtistID": 38
  },
  {
    "ID": 128,
    "Name": "Utamonogatari Special Edition (Original Soundtrack)",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Utamonogatari Special Edition (Original Soundtrack).jpg",
    "ArtistID": 66
  },
  {
    "ID": 129,
    "Name": "明日がくるなら",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\明日がくるなら.jpg",
    "ArtistID": 67
  },
  {
    "ID": 130,
    "Name": "百満開花",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\百満開花.jpg",
    "ArtistID": 65
  },
  {
    "ID": 131,
    "Name": "エスカパレード",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\エスカパレード.jpg",
    "ArtistID": 68
  },
  {
    "ID": 132,
    "Name": "LOST IN PARADISE",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\LOST IN PARADISE.jpg",
    "ArtistID": 69
  },
  {
    "ID": 133,
    "Name": "ダンスホール",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\ダンスホール.jpg",
    "ArtistID": 70
  },
  {
    "ID": 134,
    "Name": "朗らかな皮膚とて不服",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\朗らかな皮膚とて不服.jpg",
    "ArtistID": 71
  },
  {
    "ID": 135,
    "Name": "又三郎",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\又三郎.jpg",
    "ArtistID": 72
  },
  {
    "ID": 136,
    "Name": "夜行",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\夜行.jpg",
    "ArtistID": 72
  },
  {
    "ID": 137,
    "Name": "思想犯",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\思想犯.jpg",
    "ArtistID": 72
  },
  {
    "ID": 138,
    "Name": "春泥棒",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\春泥棒.jpg",
    "ArtistID": 72
  },
  {
    "ID": 139,
    "Name": "盗作",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\盗作.jpg",
    "ArtistID": 72
  },
  {
    "ID": 140,
    "Name": "正しい偽りからの起床",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\正しい偽りからの起床.jpg",
    "ArtistID": 71
  },
  {
    "ID": 141,
    "Name": "沈香学",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\沈香学.jpg",
    "ArtistID": 71
  },
  {
    "ID": 142,
    "Name": "藍二乗",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\藍二乗.jpg",
    "ArtistID": 72
  },
  {
    "ID": 143,
    "Name": "雨とカプチーノ",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\雨とカプチーノ.jpg",
    "ArtistID": 72
  },
  {
    "ID": 144,
    "Name": "風を食む",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\風を食む.jpg",
    "ArtistID": 72
  },
  {
    "ID": 145,
    "Name": "幻燈",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\幻燈.jpg",
    "ArtistID": 72
  },
  {
    "ID": 146,
    "Name": "ぐされ",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\ぐされ.jpg",
    "ArtistID": 71
  },
  {
    "ID": 147,
    "Name": "これくしょん2",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\これくしょん2.jpg",
    "ArtistID": 74
  },
  {
    "ID": 148,
    "Name": "Smile",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Smile.jpg",
    "ArtistID": 34
  },
  {
    "ID": 149,
    "Name": "夏草が邪魔をする",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\夏草が邪魔をする.jpg",
    "ArtistID": 72
  },
  {
    "ID": 150,
    "Name": "負け犬にアンコールはいらない",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\負け犬にアンコールはいらない.jpg",
    "ArtistID": 72
  },
  {
    "ID": 151,
    "Name": "Clumsy",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Clumsy.jpg",
    "ArtistID": 75
  },
  {
    "ID": 152,
    "Name": "Kaizin",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Kaizin.jpg",
    "ArtistID": 76
  },
  {
    "ID": 153,
    "Name": "これくしょん ヴァイナル",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\これくしょん ヴァイナル.jpg",
    "ArtistID": 77
  },
  {
    "ID": 154,
    "Name": "だから僕は音楽を辞めた",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\だから僕は音楽を辞めた.jpg",
    "ArtistID": 72
  },
  {
    "ID": 155,
    "Name": "Attitude",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Attitude.jpg",
    "ArtistID": 70
  },
  {
    "ID": 156,
    "Name": "Chime",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Chime.jpg",
    "ArtistID": 78
  },
  {
    "ID": 157,
    "Name": "7月の翼",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\7月の翼.jpg",
    "ArtistID": 79
  },
  {
    "ID": 158,
    "Name": "Ref:rain / 眩いばかり",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Refrain  眩いばかり.jpg",
    "ArtistID": 79
  },
  {
    "ID": 159,
    "Name": "あなたが決めた今日なら",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\あなたが決めた今日なら.jpg",
    "ArtistID": 47
  },
  {
    "ID": 160,
    "Name": "Editorial",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Editorial.jpg",
    "ArtistID": 68
  },
  {
    "ID": 161,
    "Name": "PROUD",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\PROUD.jpg",
    "ArtistID": 80
  },
  {
    "ID": 162,
    "Name": "collection vinyl",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\collection vinyl.jpg",
    "ArtistID": 81
  },
  {
    "ID": 163,
    "Name": "My Way",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\My Way.jpg",
    "ArtistID": 47
  },
  {
    "ID": 164,
    "Name": "Y/our Song",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Your Song.jpg",
    "ArtistID": 50
  },
  {
    "ID": 165,
    "Name": "星の消えた夜に",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\星の消えた夜に.jpg",
    "ArtistID": 79
  },
  {
    "ID": 166,
    "Name": "Otogi",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Otogi.jpg",
    "ArtistID": 34
  },
  {
    "ID": 167,
    "Name": "Bitter & Sweet",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Bitter & Sweet.jpg",
    "ArtistID": 79
  },
  {
    "ID": 168,
    "Name": "Kobasolo Cover",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Kobasolo Cover.jpg",
    "ArtistID": 44
  },
  {
    "ID": 169,
    "Name": "LANDSPACE",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\LANDSPACE.jpg",
    "ArtistID": 84
  },
  {
    "ID": 170,
    "Name": "ALL TIME ROCK 'N' ROLL",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\ALL TIME ROCK 'N' ROLL.jpg",
    "ArtistID": 85
  },
  {
    "ID": 171,
    "Name": "潜潜話",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\潜潜話.jpg",
    "ArtistID": 71
  },
  {
    "ID": 172,
    "Name": "So What?",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\So What.jpg",
    "ArtistID": 86
  },
  {
    "ID": 173,
    "Name": "Fukashigi No Carte \"Bunny Girl Senpai\"",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Fukashigi No Carte Bunny Girl Senpai.jpg",
    "ArtistID": 87
  },
  {
    "ID": 174,
    "Name": "Shinsekai PLUS",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Shinsekai PLUS.jpg",
    "ArtistID": 88
  },
  {
    "ID": 175,
    "Name": "選んでデート・ア・ライブ 〜DATE A LIVE BEST SELECTION〜",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\選んでデート・ア・ライブ 〜DATE A LIVE BEST SELECTION〜.jpg",
    "ArtistID": 89
  },
  {
    "ID": 176,
    "Name": "Linkage Ring",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Linkage Ring.jpg",
    "ArtistID": 90
  },
  {
    "ID": 177,
    "Name": "はじまりの時",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\はじまりの時.jpg",
    "ArtistID": 47
  },
  {
    "ID": 178,
    "Name": "Happy encount",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Happy encount.jpg",
    "ArtistID": 91
  },
  {
    "ID": 179,
    "Name": "Butterflies",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Butterflies.jpg",
    "ArtistID": 92
  },
  {
    "ID": 180,
    "Name": "Here",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Here.jpg",
    "ArtistID": 93
  },
  {
    "ID": 181,
    "Name": "Weathering With You",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Weathering With You.jpg",
    "ArtistID": 95
  },
  {
    "ID": 182,
    "Name": "Savior Takayan!",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Savior Takayan!.jpg",
    "ArtistID": 37
  },
  {
    "ID": 183,
    "Name": "Jasmine",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Jasmine.jpg",
    "ArtistID": 78
  },
  {
    "ID": 184,
    "Name": "Just disappear",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Just disappear.jpg",
    "ArtistID": 37
  },
  {
    "ID": 185,
    "Name": "Night Rainbow",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Night Rainbow.jpg",
    "ArtistID": 98
  },
  {
    "ID": 186,
    "Name": "AMUSIC",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\AMUSIC.jpg",
    "ArtistID": 78
  },
  {
    "ID": 187,
    "Name": "Familia",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Familia.jpg",
    "ArtistID": 78
  },
  {
    "ID": 188,
    "Name": "Violet Cry",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Violet Cry.jpg",
    "ArtistID": 90
  },
  {
    "ID": 189,
    "Name": "Will",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Will.jpg",
    "ArtistID": 60
  },
  {
    "ID": 190,
    "Name": "デート・ア・ライブ キャラクターソングコレクション",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\デート・ア・ライブ キャラクターソングコレクション.jpg",
    "ArtistID": 89
  },
  {
    "ID": 191,
    "Name": "Natsurenbo",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Natsurenbo.jpg",
    "ArtistID": 97
  },
  {
    "ID": 192,
    "Name": "翼",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\翼.jpg",
    "ArtistID": 47
  },
  {
    "ID": 193,
    "Name": "Traveler",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Traveler.jpg",
    "ArtistID": 68
  },
  {
    "ID": 194,
    "Name": "Minori with Strings Quartet 〜弦楽四重奏の調べ〜",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Minori with Strings Quartet 〜弦楽四重奏の調べ〜.jpg",
    "ArtistID": 57
  },
  {
    "ID": 195,
    "Name": "Launcher",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Launcher.jpg",
    "ArtistID": 84
  },
  {
    "ID": 196,
    "Name": "THE BOOK 2",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\THE BOOK 2.jpg",
    "ArtistID": 99
  },
  {
    "ID": 197,
    "Name": "Shake & Shake",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Shake & Shake.jpg",
    "ArtistID": 78
  },
  {
    "ID": 198,
    "Name": "SHOCK!",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\SHOCK!.jpg",
    "ArtistID": 38
  },
  {
    "ID": 199,
    "Name": "Lonely Queen's Liberation Party",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Lonely Queen's Liberation Party.jpg",
    "ArtistID": 91
  },
  {
    "ID": 200,
    "Name": "Human Bloom",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Human Bloom.jpg",
    "ArtistID": 95
  },
  {
    "ID": 201,
    "Name": "青二才",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\青二才.jpg",
    "ArtistID": 101
  },
  {
    "ID": 202,
    "Name": "Toy",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Toy.jpg",
    "ArtistID": 37
  },
  {
    "ID": 203,
    "Name": "Equal / Traveling",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Equal  Traveling.jpg",
    "ArtistID": 78
  },
  {
    "ID": 204,
    "Name": "SHINE",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\SHINE.jpg",
    "ArtistID": 47
  },
  {
    "ID": 205,
    "Name": "Who Are You",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Who Are You.jpg",
    "ArtistID": 47
  },
  {
    "ID": 206,
    "Name": "WILL",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\WILL.jpg",
    "ArtistID": 91
  },
  {
    "ID": 207,
    "Name": "you",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\you.jpg",
    "ArtistID": 65
  },
  {
    "ID": 208,
    "Name": "ジェリーフィッシュ (feat. ローラーガール)",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\ジェリーフィッシュ (feat. ローラーガール).jpg",
    "ArtistID": 103
  },
  {
    "ID": 209,
    "Name": "THE BOOK",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\THE BOOK.jpg",
    "ArtistID": 99
  },
  {
    "ID": 210,
    "Name": "さくら 〜あなたに出会えてよかった〜",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\さくら 〜あなたに出会えてよかった〜.jpg",
    "ArtistID": 56
  },
  {
    "ID": 211,
    "Name": "渋谷純愛物語",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\渋谷純愛物語.jpg",
    "ArtistID": 104
  },
  {
    "ID": 212,
    "Name": "ふたりきりルームシアター",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\ふたりきりルームシアター.jpg",
    "ArtistID": 65
  },
  {
    "ID": 213,
    "Name": "また君と",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\また君と.jpg",
    "ArtistID": 105
  },
  {
    "ID": 214,
    "Name": "SPIRAL",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\SPIRAL.jpg",
    "ArtistID": 57
  },
  {
    "ID": 215,
    "Name": "ゆのもきゅ",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\ゆのもきゅ.jpg",
    "ArtistID": 106
  },
  {
    "ID": 216,
    "Name": "Harmonize e.p",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Harmonize e.p.jpg",
    "ArtistID": 78
  },
  {
    "ID": 217,
    "Name": "スパイシーチョコレート BEST OF LOVE SONGS",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\スパイシーチョコレート BEST OF LOVE SONGS.jpg",
    "ArtistID": 107
  },
  {
    "ID": 218,
    "Name": "Dr.Izzy",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Dr.Izzy.jpg",
    "ArtistID": 108
  },
  {
    "ID": 219,
    "Name": "シンシアリー",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\シンシアリー.jpg",
    "ArtistID": 65
  },
  {
    "ID": 220,
    "Name": "shimamo",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\shimamo.jpg",
    "ArtistID": 65
  },
  {
    "ID": 221,
    "Name": "I co Y",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\I co Y.jpg",
    "ArtistID": 78
  },
  {
    "ID": 222,
    "Name": "ツーアウトロマンス",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\ツーアウトロマンス.jpg",
    "ArtistID": 65
  },
  {
    "ID": 223,
    "Name": "Shake & Shake / ナイトウォーカー",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Shake & Shake  ナイトウォーカー.jpg",
    "ArtistID": 78
  },
  {
    "ID": 224,
    "Name": "パレード",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\パレード.jpg",
    "ArtistID": 73
  },
  {
    "ID": 225,
    "Name": "フロム",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\フロム.jpg",
    "ArtistID": 91
  },
  {
    "ID": 226,
    "Name": "ブレーメン",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\ブレーメン.jpg",
    "ArtistID": 73
  },
  {
    "ID": 227,
    "Name": "BEST SELECTION \"blanc\"",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\BEST SELECTION blanc.jpg",
    "ArtistID": 79
  },
  {
    "ID": 228,
    "Name": "ミスター",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\ミスター.jpg",
    "ArtistID": 99
  },
  {
    "ID": 229,
    "Name": "ありがとう、だいすき",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\ありがとう、だいすき.jpg",
    "ArtistID": 57
  },
  {
    "ID": 230,
    "Name": "ミラーチューン",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\ミラーチューン.jpg",
    "ArtistID": 71
  },
  {
    "ID": 231,
    "Name": "Innocent Age",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Innocent Age.jpg",
    "ArtistID": 57
  },
  {
    "ID": 232,
    "Name": "リタルダンド",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\リタルダンド.jpg",
    "ArtistID": 78
  },
  {
    "ID": 233,
    "Name": "Milk",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Milk.jpg",
    "ArtistID": 111
  },
  {
    "ID": 234,
    "Name": "好きだ",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\好きだ.jpg",
    "ArtistID": 99
  },
  {
    "ID": 235,
    "Name": "好きになってよかったな",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\好きになってよかったな.jpg",
    "ArtistID": 65
  },
  {
    "ID": 236,
    "Name": "本音",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\本音.jpg",
    "ArtistID": 78
  },
  {
    "ID": 237,
    "Name": "正しくなれない (From THE FIRST TAKE)",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\正しくなれない (From THE FIRST TAKE).jpg",
    "ArtistID": 71
  },
  {
    "ID": 238,
    "Name": "四季うた summer",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\四季うた summer.jpg",
    "ArtistID": 50
  },
  {
    "ID": 239,
    "Name": "COVERS 3",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\COVERS 3.jpg",
    "ArtistID": 50
  },
  {
    "ID": 240,
    "Name": "真っ裸",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\真っ裸.jpg",
    "ArtistID": 101
  },
  {
    "ID": 241,
    "Name": "祝祭",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\祝祭.jpg",
    "ArtistID": 78
  },
  {
    "ID": 242,
    "Name": "絶頂讃歌",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\絶頂讃歌.jpg",
    "ArtistID": 101
  },
  {
    "ID": 243,
    "Name": "花に亡霊",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\花に亡霊.jpg",
    "ArtistID": 73
  },
  {
    "ID": 244,
    "Name": "Negai / Higher Ground",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Negai  Higher Ground.jpg",
    "ArtistID": 78
  },
  {
    "ID": 245,
    "Name": "飽和 / シネマ",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\飽和  シネマ.jpg",
    "ArtistID": 38
  },
  {
    "ID": 246,
    "Name": "Htrol Remix",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Htrol Remix.jpg",
    "ArtistID": 113
  },
  {
    "ID": 247,
    "Name": "Against The Sun",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Against The Sun.jpg",
    "ArtistID": 114
  },
  {
    "ID": 248,
    "Name": "Anything Anymore",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Anything Anymore.jpg",
    "ArtistID": 115
  },
  {
    "ID": 249,
    "Name": "Anywhere I Go",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Anywhere I Go.jpg",
    "ArtistID": 116
  },
  {
    "ID": 250,
    "Name": "Are You Lonely",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Are You Lonely.jpg",
    "ArtistID": 117
  },
  {
    "ID": 251,
    "Name": "True Colors",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\True Colors.jpg",
    "ArtistID": 118
  },
  {
    "ID": 252,
    "Name": "Body Back (feat. Maia Wright)",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Body Back (feat. Maia Wright).jpg",
    "ArtistID": 119
  },
  {
    "ID": 253,
    "Name": "NCS is Love, NCS is Life, Vol. 1",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\NCS is Love, NCS is Life, Vol. 1.jpg",
    "ArtistID": 120
  },
  {
    "ID": 254,
    "Name": "ALL OUT",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\ALL OUT.jpg",
    "ArtistID": 121
  },
  {
    "ID": 255,
    "Name": "End of Time",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\End of Time.jpg",
    "ArtistID": 122
  },
  {
    "ID": 256,
    "Name": "Pharmacy",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Pharmacy.jpg",
    "ArtistID": 123
  },
  {
    "ID": 257,
    "Name": "Frame of Mind",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Frame of Mind.jpg",
    "ArtistID": 124
  },
  {
    "ID": 258,
    "Name": "GIANTS",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\GIANTS.jpg",
    "ArtistID": 125
  },
  {
    "ID": 259,
    "Name": "GODS",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\GODS.jpg",
    "ArtistID": 126
  },
  {
    "ID": 260,
    "Name": "heart afire",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\heart afire.jpg",
    "ArtistID": 127
  },
  {
    "ID": 261,
    "Name": "Ignite (2016 League Of Legends World Championship)",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Ignite (2016 League Of Legends World Championship).jpg",
    "ArtistID": 129
  },
  {
    "ID": 262,
    "Name": "Ignite",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Ignite.jpg",
    "ArtistID": 130
  },
  {
    "ID": 263,
    "Name": "Inside the Lines",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Inside the Lines.jpg",
    "ArtistID": 131
  },
  {
    "ID": 264,
    "Name": "Unknow",
    "Thumb": null,
    "ArtistID": 132
  },
  {
    "ID": 265,
    "Name": "Lights Go Down (Radio Mix) [feat. Curtains]",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Lights Go Down (Radio Mix) [feat. Curtains].jpg",
    "ArtistID": 133
  },
  {
    "ID": 266,
    "Name": "Linked",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Linked.jpg",
    "ArtistID": 134
  },
  {
    "ID": 267,
    "Name": "<I°_°I>",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Sad Robot.jpg",
    "ArtistID": 135
  },
  {
    "ID": 268,
    "Name": "This Is Acting (Deluxe Version)",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\This Is Acting (Deluxe Version).jpg",
    "ArtistID": 138
  },
  {
    "ID": 269,
    "Name": "Never Coming Home (feat. Kinley)",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Never Coming Home (feat. Kinley).jpg",
    "ArtistID": 139
  },
  {
    "ID": 270,
    "Name": "Nightcore",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Nightcore.jpg",
    "ArtistID": 140
  },
  {
    "ID": 271,
    "Name": "Nothing Stopping Me",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Nothing Stopping Me.jpg",
    "ArtistID": 141
  },
  {
    "ID": 272,
    "Name": "Numb (feat. Johnning)",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Numb (feat. Johnning).jpg",
    "ArtistID": 142
  },
  {
    "ID": 273,
    "Name": "On the Line",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\On the Line.jpg",
    "ArtistID": 143
  },
  {
    "ID": 274,
    "Name": "Our Story (Radio Edit)",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Our Story (Radio Edit).jpg",
    "ArtistID": 144
  },
  {
    "ID": 275,
    "Name": "Phoenix",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Phoenix.jpg",
    "ArtistID": 145
  },
  {
    "ID": 276,
    "Name": "Play",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Play.jpg",
    "ArtistID": 146
  },
  {
    "ID": 277,
    "Name": "POP/STARS",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\POPSTARS.jpg",
    "ArtistID": 147
  },
  {
    "ID": 278,
    "Name": "Red Line",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Red Line.jpg",
    "ArtistID": 148
  },
  {
    "ID": 279,
    "Name": "RISE",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\RISE.jpg",
    "ArtistID": 149
  },
  {
    "ID": 280,
    "Name": "The Future",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\The Future.jpg",
    "ArtistID": 150
  },
  {
    "ID": 281,
    "Name": "Saving Light",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Saving Light.jpg",
    "ArtistID": 151
  },
  {
    "ID": 282,
    "Name": "Hourglass",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Hourglass.jpg",
    "ArtistID": 144
  },
  {
    "ID": 283,
    "Name": "Start Again",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Start Again.jpg",
    "ArtistID": 152
  },
  {
    "ID": 284,
    "Name": "Summer Air",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Summer Air.jpg",
    "ArtistID": 153
  },
  {
    "ID": 285,
    "Name": "Blood, Sweat & 3 Years",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Blood, Sweat & 3 Years.jpg",
    "ArtistID": 154
  },
  {
    "ID": 286,
    "Name": "The Spectre",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\The Spectre.jpg",
    "ArtistID": 17
  },
  {
    "ID": 287,
    "Name": "Thunder",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Thunder.jpg",
    "ArtistID": 156
  },
  {
    "ID": 288,
    "Name": "Till It's Over",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Till It's Over.jpg",
    "ArtistID": 157
  },
  {
    "ID": 289,
    "Name": "Untouchable",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Untouchable.jpg",
    "ArtistID": 158
  },
  {
    "ID": 290,
    "Name": "Walk Thru Fire",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Walk Thru Fire.jpg",
    "ArtistID": 116
  },
  {
    "ID": 291,
    "Name": "AVĪCI (01)",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\AVĪCI (01).jpg",
    "ArtistID": 160
  },
  {
    "ID": 292,
    "Name": "Wild Youth",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Wild Youth.jpg",
    "ArtistID": 161
  },
  {
    "ID": 293,
    "Name": "Illuminate... (The Hits and More)",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Illuminate... (The Hits and More).jpg",
    "ArtistID": 162
  },
  {
    "ID": 294,
    "Name": "JORDI (Deluxe)",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\JORDI (Deluxe).jpg",
    "ArtistID": 163
  },
  {
    "ID": 295,
    "Name": "Nine Track Mind",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Nine Track Mind.jpg",
    "ArtistID": 164
  },
  {
    "ID": 296,
    "Name": "All Falls Down (feat. Juliander)",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\All Falls Down (feat. Juliander).jpg",
    "ArtistID": 166
  },
  {
    "ID": 297,
    "Name": "Alone, Pt. II",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Alone, Pt. II.jpg",
    "ArtistID": 167
  },
  {
    "ID": 298,
    "Name": "Alone",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Alone.jpg",
    "ArtistID": 17
  },
  {
    "ID": 299,
    "Name": "Voicenotes",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Voicenotes.jpg",
    "ArtistID": 164
  },
  {
    "ID": 300,
    "Name": "Awake",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Awake.jpg",
    "ArtistID": 168
  },
  {
    "ID": 301,
    "Name": "Save Me",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Save Me.jpg",
    "ArtistID": 169
  },
  {
    "ID": 302,
    "Name": "Gravity",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Gravity.jpg",
    "ArtistID": 170
  },
  {
    "ID": 303,
    "Name": "Daily (feat. Jon Becker)",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Daily (feat. Jon Becker).jpg",
    "ArtistID": 171
  },
  {
    "ID": 304,
    "Name": "Meet The Orphans",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Meet The Orphans.jpg",
    "ArtistID": 172
  },
  {
    "ID": 305,
    "Name": "Darkside",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Darkside.jpg",
    "ArtistID": 173
  },
  {
    "ID": 306,
    "Name": "VIDA",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\VIDA.jpg",
    "ArtistID": 174
  },
  {
    "ID": 307,
    "Name": "Diamond Heart",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Diamond Heart.jpg",
    "ArtistID": 175
  },
  {
    "ID": 308,
    "Name": "Different World (feat. CORSAK)",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Different World (feat. CORSAK).jpg",
    "ArtistID": 176
  },
  {
    "ID": 309,
    "Name": "Faded",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Faded.jpg",
    "ArtistID": 17
  },
  {
    "ID": 310,
    "Name": "Fading",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Fading.jpg",
    "ArtistID": 177
  },
  {
    "ID": 311,
    "Name": "Fake A Smile",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Fake A Smile.jpg",
    "ArtistID": 178
  },
  {
    "ID": 312,
    "Name": "Forever Young",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Forever Young.jpg",
    "ArtistID": 179
  },
  {
    "ID": 313,
    "Name": "Heading Home",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Heading Home.jpg",
    "ArtistID": 180
  },
  {
    "ID": 314,
    "Name": "Headlights (feat. KIDDO)",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Headlights (feat. KIDDO).jpg",
    "ArtistID": 181
  },
  {
    "ID": 315,
    "Name": "Walkerverse Pt. I & II",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Walkerverse Pt. I & II.jpg",
    "ArtistID": 182
  },
  {
    "ID": 316,
    "Name": "At Night, Alone.",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\At Night, Alone..jpg",
    "ArtistID": 183
  },
  {
    "ID": 317,
    "Name": "Heaven & Hell",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Heaven & Hell.jpg",
    "ArtistID": 185
  },
  {
    "ID": 318,
    "Name": "Legends Never Die",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Legends Never Die.jpg",
    "ArtistID": 186
  },
  {
    "ID": 319,
    "Name": "Different World",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Different World.jpg",
    "ArtistID": 187
  },
  {
    "ID": 320,
    "Name": "Love How It Hurts (feat. Tina Stachowiak)",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Love How It Hurts (feat. Tina Stachowiak).jpg",
    "ArtistID": 188
  },
  {
    "ID": 321,
    "Name": "V (Asia Tour Edition)",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\V (Asia Tour Edition).jpg",
    "ArtistID": 163
  },
  {
    "ID": 322,
    "Name": "Meant To Be",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Meant To Be.jpg",
    "ArtistID": 189
  },
  {
    "ID": 323,
    "Name": "Miracles (feat. Tina Stachowiak)",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Miracles (feat. Tina Stachowiak).jpg",
    "ArtistID": 188
  },
  {
    "ID": 324,
    "Name": "Next To Me (feat. Tina Stachowiak)",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Next To Me (feat. Tina Stachowiak).jpg",
    "ArtistID": 188
  },
  {
    "ID": 325,
    "Name": "World Of Walker",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\World Of Walker.jpg",
    "ArtistID": 190
  },
  {
    "ID": 326,
    "Name": "Overexposed Track By Track",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Overexposed Track By Track.jpg",
    "ArtistID": 191
  },
  {
    "ID": 327,
    "Name": "Magnets EP",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Magnets EP.jpg",
    "ArtistID": 192
  },
  {
    "ID": 328,
    "Name": "PS5 (with TOMORROW X TOGETHER & Alan Walker)",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\PS5 (with TOMORROW X TOGETHER & Alan Walker).jpg",
    "ArtistID": 193
  },
  {
    "ID": 329,
    "Name": "New Eyes",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\New Eyes.jpg",
    "ArtistID": 194
  },
  {
    "ID": 330,
    "Name": "What Is Love? (Deluxe Edition)",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\What Is Love (Deluxe Edition).jpg",
    "ArtistID": 195
  },
  {
    "ID": 331,
    "Name": "Sad Story (Out Of Luck)",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Sad Story (Out Of Luck).jpg",
    "ArtistID": 196
  },
  {
    "ID": 332,
    "Name": "Shawn Mendes (Deluxe)",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Shawn Mendes (Deluxe).jpg",
    "ArtistID": 197
  },
  {
    "ID": 333,
    "Name": "Shelter",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Shelter.jpg",
    "ArtistID": 198
  },
  {
    "ID": 334,
    "Name": "Sing Me to Sleep",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Sing Me to Sleep.jpg",
    "ArtistID": 17
  },
  {
    "ID": 335,
    "Name": "STAR WALKIN' (League of Legends Worlds Anthem)",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\STAR WALKIN' (League of Legends Worlds Anthem).jpg",
    "ArtistID": 201
  },
  {
    "ID": 336,
    "Name": "Stay Young",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Stay Young.jpg",
    "ArtistID": 202
  },
  {
    "ID": 337,
    "Name": "Strongest (Alan Walker Remix)",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Strongest (Alan Walker Remix).jpg",
    "ArtistID": 203
  },
  {
    "ID": 338,
    "Name": "The Ocean (feat. Shy Martin)",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\The Ocean (feat. Shy Martin).jpg",
    "ArtistID": 205
  },
  {
    "ID": 339,
    "Name": "Tired",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Tired.jpg",
    "ArtistID": 206
  },
  {
    "ID": 340,
    "Name": "lost",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\lost.jpg",
    "ArtistID": 207
  },
  {
    "ID": 341,
    "Name": "Waiting",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Waiting.jpg",
    "ArtistID": 209
  },
  {
    "ID": 342,
    "Name": "Way Back",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Way Back.jpg",
    "ArtistID": 210
  },
  {
    "ID": 343,
    "Name": "World We Used To Know",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\World We Used To Know.jpg",
    "ArtistID": 211
  },
  {
    "ID": 344,
    "Name": "Worlds Collide",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Worlds Collide.jpg",
    "ArtistID": 212
  },
  {
    "ID": 345,
    "Name": "Wrap Me In Plastic (Marcus Layton Radio Edit)",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Wrap Me In Plastic (Marcus Layton Radio Edit).jpg",
    "ArtistID": 213
  },
  {
    "ID": 346,
    "Name": "You and I",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\You and I.jpg",
    "ArtistID": 214
  },
  {
    "ID": 347,
    "Name": "NieR Replicant ver.1.22 - Original Soundtrack",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\NieR Replicant ver.1.22 - Original Soundtrack.jpg",
    "ArtistID": 215
  },
  {
    "ID": 348,
    "Name": "NieR Automata - Orchestral Arrangement Album",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\NieR Automata - Orchestral Arrangement Album.jpg",
    "ArtistID": 216
  },
  {
    "ID": 349,
    "Name": "NieR Gestalt - ''Owari no Uta'' Mini Album",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\NieR Gestalt - ''Owari no Uta'' Mini Album.jpg",
    "ArtistID": 217
  },
  {
    "ID": 350,
    "Name": "NieR - Music Concert CD (The Memories of Puppets)",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\NieR - Music Concert CD (The Memories of Puppets).jpg",
    "ArtistID": 218
  },
  {
    "ID": 351,
    "Name": "NieR Automata - Original Soundtrack",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\NieR Automata - Original Soundtrack.jpg",
    "ArtistID": 219
  },
  {
    "ID": 352,
    "Name": "NieR Replicant ver.1.22 - Lunar Tear Soundtrack",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\NieR Replicant ver.1.22 - Lunar Tear Soundtrack.jpg",
    "ArtistID": 220
  },
  {
    "ID": 353,
    "Name": "NieR Replicant ver.1.22 - Weiss Soundtrack",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\NieR Replicant ver.1.22 - Weiss Soundtrack.jpg",
    "ArtistID": 221
  },
  {
    "ID": 354,
    "Name": "NieR Automata - Arranged & Unreleased",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\NieR Automata - Arranged & Unreleased.jpg",
    "ArtistID": 222
  },
  {
    "ID": 355,
    "Name": "NieR Gestalt & Replicant - Original Soundtrack",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\NieR Gestalt & Replicant - Original Soundtrack.jpg",
    "ArtistID": 223
  },
  {
    "ID": 356,
    "Name": "FINAL FANTASY BRAVE EXVIUS Original Soundtrack",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\FINAL FANTASY BRAVE EXVIUS Original Soundtrack.jpg",
    "ArtistID": 224
  },
  {
    "ID": 357,
    "Name": "NieR - Orchestral Arrangement Album - Addendum",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\NieR - Orchestral Arrangement Album - Addendum.jpg",
    "ArtistID": 216
  },
  {
    "ID": 358,
    "Name": "NieR Re[in]carnation - Original Soundtrack",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\NieR Re[in]carnation - Original Soundtrack.jpg",
    "ArtistID": 225
  },
  {
    "ID": 359,
    "Name": "NieR Replicant - ''Uragiri no Koe'' Mini Album",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\NieR Replicant - ''Uragiri no Koe'' Mini Album.jpg",
    "ArtistID": 217
  },
  {
    "ID": 360,
    "Name": "Piano Collections NieR:Automata",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Piano Collections NieRAutomata.jpg",
    "ArtistID": 226
  },
  {
    "ID": 361,
    "Name": "NieR Gestalt & Replicant - Orchestral Arrangement Album",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\NieR Gestalt & Replicant - Orchestral Arrangement Album.jpg",
    "ArtistID": 216
  },
  {
    "ID": 362,
    "Name": "NieR - Music Concert & Talk Live Soundtrack",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\NieR - Music Concert & Talk Live Soundtrack.jpg",
    "ArtistID": 227
  },
  {
    "ID": 363,
    "Name": "Piano Collections NieR Gestalt & Replicant",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\Piano Collections NieR Gestalt & Replicant.jpg",
    "ArtistID": 228
  },
  {
    "ID": 364,
    "Name": "NieR Gestalt & Replicant - Jazz Arrange Version [EP]",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\NieR Gestalt & Replicant - Jazz Arrange Version [EP].jpg",
    "ArtistID": 229
  },
  {
    "ID": 365,
    "Name": "NieR Replicant - 10+1 Years - Emil",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\NieR Replicant - 10+1 Years - Emil.jpg",
    "ArtistID": 220
  },
  {
    "ID": 366,
    "Name": "NieR Replicant - 10+1 Years - Kainé",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\NieR Replicant - 10+1 Years - Kainé.jpg",
    "ArtistID": 228
  },
  {
    "ID": 367,
    "Name": "NieR - Orchestral Arrangement Album - Addendum Special Disc",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\NieR - Orchestral Arrangement Album - Addendum Special Disc.jpg",
    "ArtistID": 216
  },
  {
    "ID": 368,
    "Name": "NieR Replicant - 10+1 Years - Devola & Popola",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\NieR Replicant - 10+1 Years - Devola & Popola.jpg",
    "ArtistID": 232
  },
  {
    "ID": 369,
    "Name": "NieR Replicant - 10+1 Years - Nier",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\NieR Replicant - 10+1 Years - Nier.jpg",
    "ArtistID": 228
  },
  {
    "ID": 370,
    "Name": "NieR - Orchestral Arrangement Special Disc",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\NieR - Orchestral Arrangement Special Disc.jpg",
    "ArtistID": 236
  },
  {
    "ID": 371,
    "Name": "NieR - Become As Gods",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\NieR - Become As Gods.jpg",
    "ArtistID": 237
  },
  {
    "ID": 372,
    "Name": "NieR Gestalt & Replicant - 15 Nightmares & Arrange Tracks",
    "Thumb": "D:\\Linh Tinh\\m\\albums\\NieR Gestalt & Replicant - 15 Nightmares & Arrange Tracks.jpg",
    "ArtistID": 228
  }
];
var Artists= [
  {
    "ID": 0,
    "Name": "NIVIRO",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\NIVIRO.jpg"
  },
  {
    "ID": 1,
    "Name": "Defqwop",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Defqwop.jpg"
  },
  {
    "ID": 2,
    "Name": "Brooks, Molly Ann, IZECOLD",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Brooks, Molly Ann, IZECOLD.jpg"
  },
  {
    "ID": 3,
    "Name": "Tobu, Itro",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Tobu, Itro.jpg"
  },
  {
    "ID": 4,
    "Name": "Tobu",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Tobu.jpg"
  },
  {
    "ID": 5,
    "Name": "Virtual Riot",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Virtual Riot.jpg"
  },
  {
    "ID": 6,
    "Name": "Elektronomia",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Elektronomia.jpg"
  },
  {
    "ID": 7,
    "Name": "Jim Yosef, Ephixa",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Jim Yosef, Ephixa.jpg"
  },
  {
    "ID": 8,
    "Name": "Ahxello",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Ahxello.jpg"
  },
  {
    "ID": 9,
    "Name": "Doctor Vox",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Doctor Vox.jpg"
  },
  {
    "ID": 10,
    "Name": "Panda Eyes",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Panda Eyes.jpg"
  },
  {
    "ID": 11,
    "Name": "Panda Eyes, Teminite",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Panda Eyes, Teminite.jpg"
  },
  {
    "ID": 12,
    "Name": "Razihel, TeamMate, Hyper Potions",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Razihel, TeamMate, Hyper Potions.jpg"
  },
  {
    "ID": 13,
    "Name": "Ampyx",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Ampyx.jpg"
  },
  {
    "ID": 14,
    "Name": "Distrion, Electro-Light",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Distrion, Electro-Light.jpg"
  },
  {
    "ID": 15,
    "Name": "Hoaprox",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Hoaprox.jpg"
  },
  {
    "ID": 16,
    "Name": "Steerner, Martell",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Steerner, Martell.jpg"
  },
  {
    "ID": 17,
    "Name": "Alan Walker",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Alan Walker.jpg"
  },
  {
    "ID": 18,
    "Name": "League of Legends",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\League of Legends.jpg"
  },
  {
    "ID": 19,
    "Name": "Sonbeat",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Sonbeat.jpg"
  },
  {
    "ID": 20,
    "Name": "Allison, Vexento",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Allison, Vexento.jpg"
  },
  {
    "ID": 21,
    "Name": "Vexento",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Vexento.jpg"
  },
  {
    "ID": 22,
    "Name": "Tez Cadey",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Tez Cadey.jpg"
  },
  {
    "ID": 23,
    "Name": "Mich",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Mich.jpg"
  },
  {
    "ID": 24,
    "Name": "Jebase",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Jebase.jpg"
  },
  {
    "ID": 25,
    "Name": "TheFatRat, Anjulie",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\TheFatRat, Anjulie.jpg"
  },
  {
    "ID": 26,
    "Name": "Tobu, Wholm, Blume",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Tobu, Wholm, Blume.jpg"
  },
  {
    "ID": 27,
    "Name": "TheFatRat",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\TheFatRat.jpg"
  },
  {
    "ID": 28,
    "Name": "TheFatRat, Laura Brehm",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\TheFatRat, Laura Brehm.jpg"
  },
  {
    "ID": 29,
    "Name": "O M II N",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\O M II N.jpg"
  },
  {
    "ID": 30,
    "Name": "Toxic Hearts, Vexento",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Toxic Hearts, Vexento.jpg"
  },
  {
    "ID": 31,
    "Name": "K-391",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\K-391.jpg"
  },
  {
    "ID": 32,
    "Name": "Eightfold X MKJ",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Eightfold X MKJ.jpg"
  },
  {
    "ID": 33,
    "Name": "Contacreast, Diviners",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Contacreast, Diviners.jpg"
  },
  {
    "ID": 34,
    "Name": "Eve",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Eve.jpg"
  },
  {
    "ID": 35,
    "Name": "TeddyLoid, Giga, LOLUET",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\TeddyLoid, Giga, LOLUET.jpg"
  },
  {
    "ID": 36,
    "Name": "Azari",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Azari.jpg"
  },
  {
    "ID": 37,
    "Name": "takayan",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\takayan.jpg"
  },
  {
    "ID": 38,
    "Name": "Ayase",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Ayase.jpg"
  },
  {
    "ID": 39,
    "Name": "Kanaria",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Kanaria.jpg"
  },
  {
    "ID": 40,
    "Name": "Chinozo",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Chinozo.jpg"
  },
  {
    "ID": 41,
    "Name": "whaledontsleep, Ado",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\whaledontsleep, Ado.jpg"
  },
  {
    "ID": 42,
    "Name": "CHIHIRO",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\CHIHIRO.jpg"
  },
  {
    "ID": 43,
    "Name": "KOBASOLO,Kobasolo feat. 相沢",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\KOBASOLO,Kobasolo feat. 相沢.jpg"
  },
  {
    "ID": 44,
    "Name": "Kobasolo",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Kobasolo.jpg"
  },
  {
    "ID": 45,
    "Name": "KOBASOLO,Kobasolo feat. Lefty Hand Cream",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\KOBASOLO,Kobasolo feat. Lefty Hand Cream.jpg"
  },
  {
    "ID": 46,
    "Name": "コバソロ",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\コバソロ.jpg"
  },
  {
    "ID": 47,
    "Name": "Ms.OOJA",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Ms.OOJA.jpg"
  },
  {
    "ID": 48,
    "Name": "Akie",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Akie.jpg"
  },
  {
    "ID": 49,
    "Name": "山田タマル",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\山田タマル.jpg"
  },
  {
    "ID": 50,
    "Name": "BENI",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\BENI.jpg"
  },
  {
    "ID": 51,
    "Name": "Tiara",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Tiara.jpg"
  },
  {
    "ID": 52,
    "Name": "Duca",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Duca.jpg"
  },
  {
    "ID": 53,
    "Name": "majiko",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\majiko.jpg"
  },
  {
    "ID": 54,
    "Name": "Uru",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Uru.jpg"
  },
  {
    "ID": 55,
    "Name": "Riyu Renji",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Riyu Renji.jpg"
  },
  {
    "ID": 56,
    "Name": "RSP",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\RSP.jpg"
  },
  {
    "ID": 57,
    "Name": "茅原実里",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\茅原実里.jpg"
  },
  {
    "ID": 58,
    "Name": "Rainych",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Rainych.jpg"
  },
  {
    "ID": 59,
    "Name": "TEE",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\TEE.jpg"
  },
  {
    "ID": 60,
    "Name": "Rei Yasuda",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Rei Yasuda.jpg"
  },
  {
    "ID": 61,
    "Name": "7!!",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\7!!.jpg"
  },
  {
    "ID": 62,
    "Name": "wacci",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\wacci.jpg"
  },
  {
    "ID": 63,
    "Name": "ShibayanRecords",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\ShibayanRecords.jpg"
  },
  {
    "ID": 64,
    "Name": "Happy Birthday",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Happy Birthday.jpg"
  },
  {
    "ID": 65,
    "Name": "shimamo",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\shimamo.jpg"
  },
  {
    "ID": 66,
    "Name": "物語シリーズ",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\物語シリーズ.jpg"
  },
  {
    "ID": 67,
    "Name": "JUJU, JAY'ED",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\JUJU, JAY'ED.jpg"
  },
  {
    "ID": 68,
    "Name": "OFFICIAL HIGE DANDISM",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\OFFICIAL HIGE DANDISM.jpg"
  },
  {
    "ID": 69,
    "Name": "ALI, AKLO",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\ALI, AKLO.jpg"
  },
  {
    "ID": 70,
    "Name": "Mrs. GREEN APPLE",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Mrs. GREEN APPLE.jpg"
  },
  {
    "ID": 71,
    "Name": "ZUTOMAYO",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\ZUTOMAYO.jpg"
  },
  {
    "ID": 72,
    "Name": "ヨルシカ",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\ヨルシカ.jpg"
  },
  {
    "ID": 73,
    "Name": "Yorushika",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Yorushika.jpg"
  },
  {
    "ID": 74,
    "Name": "kobasolo",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\kobasolo.jpg"
  },
  {
    "ID": 75,
    "Name": "KOBASOLO",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\KOBASOLO.jpg"
  },
  {
    "ID": 76,
    "Name": "Eve, suis from Yorushika",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Eve, suis from Yorushika.jpg"
  },
  {
    "ID": 77,
    "Name": "KOBASOLO,コバソロ feat. こぴ",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\KOBASOLO,コバソロ feat. こぴ.jpg"
  },
  {
    "ID": 78,
    "Name": "sumika",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\sumika.jpg"
  },
  {
    "ID": 79,
    "Name": "Aimer",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Aimer.jpg"
  },
  {
    "ID": 80,
    "Name": "Ms.OOJA,JAY'ED",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Ms.OOJA,JAY'ED.jpg"
  },
  {
    "ID": 81,
    "Name": "kobasolo, kopi",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\kobasolo, kopi.jpg"
  },
  {
    "ID": 82,
    "Name": "BRIGHT",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\BRIGHT.jpg"
  },
  {
    "ID": 83,
    "Name": "BENI, IO",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\BENI, IO.jpg"
  },
  {
    "ID": 84,
    "Name": "LiSA",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\LiSA.jpg"
  },
  {
    "ID": 85,
    "Name": "Masayuki Suzuki, 鈴木愛理",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Masayuki Suzuki, 鈴木愛理.jpg"
  },
  {
    "ID": 86,
    "Name": "田所あずさ",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\田所あずさ.jpg"
  },
  {
    "ID": 87,
    "Name": "Shxne",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Shxne.jpg"
  },
  {
    "ID": 88,
    "Name": "Selphius",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Selphius.jpg"
  },
  {
    "ID": 89,
    "Name": "誘宵美九 (CV: 茅原実里)",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\誘宵美九 (CV 茅原実里).jpg"
  },
  {
    "ID": 90,
    "Name": "GARNiDELiA",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\GARNiDELiA.jpg"
  },
  {
    "ID": 91,
    "Name": "TRUE",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\TRUE.jpg"
  },
  {
    "ID": 92,
    "Name": "BUMP OF CHICKEN",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\BUMP OF CHICKEN.jpg"
  },
  {
    "ID": 93,
    "Name": "JUNNA",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\JUNNA.jpg"
  },
  {
    "ID": 94,
    "Name": "Ms.OOJA,AK-69",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Ms.OOJA,AK-69.jpg"
  },
  {
    "ID": 95,
    "Name": "RADWIMPS",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\RADWIMPS.jpg"
  },
  {
    "ID": 96,
    "Name": "Kie Kitano",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Kie Kitano.jpg"
  },
  {
    "ID": 97,
    "Name": "kobasolo, Harutya",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\kobasolo, Harutya.jpg"
  },
  {
    "ID": 98,
    "Name": "WEAVER",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\WEAVER.jpg"
  },
  {
    "ID": 99,
    "Name": "YOASOBI",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\YOASOBI.jpg"
  },
  {
    "ID": 100,
    "Name": "whaledontsleep, yama",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\whaledontsleep, yama.jpg"
  },
  {
    "ID": 101,
    "Name": "和ぬか",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\和ぬか.jpg"
  },
  {
    "ID": 102,
    "Name": "Ms.OOJA,Kentaro Kobuchi",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Ms.OOJA,Kentaro Kobuchi.jpg"
  },
  {
    "ID": 103,
    "Name": "Yunomi",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Yunomi.jpg"
  },
  {
    "ID": 104,
    "Name": "SPICY CHOCOLATE, Ms.OOJA, SALU",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\SPICY CHOCOLATE, Ms.OOJA, SALU.jpg"
  },
  {
    "ID": 105,
    "Name": "JAY'ED, Ms.OOJA",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\JAY'ED, Ms.OOJA.jpg"
  },
  {
    "ID": 106,
    "Name": "Yunomi, nicamoq",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Yunomi, nicamoq.jpg"
  },
  {
    "ID": 107,
    "Name": "SPICY CHOCOLATE, Ms.OOJA, Kotobukikun",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\SPICY CHOCOLATE, Ms.OOJA, Kotobukikun.jpg"
  },
  {
    "ID": 108,
    "Name": "UNISON SQUARE GARDEN",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\UNISON SQUARE GARDEN.jpg"
  },
  {
    "ID": 109,
    "Name": "YOASOBI, Midories",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\YOASOBI, Midories.jpg"
  },
  {
    "ID": 110,
    "Name": "和ぬか, もっさ",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\和ぬか, もっさ.jpg"
  },
  {
    "ID": 111,
    "Name": "Goose house",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Goose house.jpg"
  },
  {
    "ID": 112,
    "Name": "Kobasolo feat. Lefty Hand Cream",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Kobasolo feat. Lefty Hand Cream.jpg"
  },
  {
    "ID": 113,
    "Name": "Htrol",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Htrol.jpg"
  },
  {
    "ID": 114,
    "Name": "Rootkit, Anna Yvette",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Rootkit, Anna Yvette.jpg"
  },
  {
    "ID": 115,
    "Name": "LZRD, Jake Miller",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\LZRD, Jake Miller.jpg"
  },
  {
    "ID": 116,
    "Name": "Vicetone",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Vicetone.jpg"
  },
  {
    "ID": 117,
    "Name": "Steve Aoki, Alan Walker, ISÁK",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Steve Aoki, Alan Walker, ISÁK.jpg"
  },
  {
    "ID": 118,
    "Name": "Zedd, Jon Bellion",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Zedd, Jon Bellion.jpg"
  },
  {
    "ID": 119,
    "Name": "Gryffin, Maia Wright",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Gryffin, Maia Wright.jpg"
  },
  {
    "ID": 120,
    "Name": "Anna Yvette, Jim Yosef",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Anna Yvette, Jim Yosef.jpg"
  },
  {
    "ID": 121,
    "Name": "K/DA, Wolftyla, Bekuh Boom, Aluna, League of Legends",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\KDA, Wolftyla, Bekuh Boom, Aluna, League of Legends.jpg"
  },
  {
    "ID": 122,
    "Name": "K-391, Alan Walker, Ahrix",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\K-391, Alan Walker, Ahrix.jpg"
  },
  {
    "ID": 123,
    "Name": "Galantis",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Galantis.jpg"
  },
  {
    "ID": 124,
    "Name": "Tristam, Braken",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Tristam, Braken.jpg"
  },
  {
    "ID": 125,
    "Name": "True Damage, Becky G, Keke Palmer, JEON SOYEON, Duckwrth, Thutmose, League of Legends",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\True Damage, Becky G, Keke Palmer, JEON SOYEON, Duckwrth, Thutmose, League of Legends.jpg"
  },
  {
    "ID": 126,
    "Name": "League of Legends,NewJeans",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\League of Legends,NewJeans.jpg"
  },
  {
    "ID": 127,
    "Name": "Jodex",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Jodex.jpg"
  },
  {
    "ID": 128,
    "Name": "K/DA, TWICE, Bekuh Boom, Annika Wells, League of Legends",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\KDA, TWICE, Bekuh Boom, Annika Wells, League of Legends.jpg"
  },
  {
    "ID": 129,
    "Name": "Zedd",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Zedd.jpg"
  },
  {
    "ID": 130,
    "Name": "Alan Walker, Julie Bergan, K-391, SEUNGRI",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Alan Walker, Julie Bergan, K-391, SEUNGRI.jpg"
  },
  {
    "ID": 131,
    "Name": "Mike Perry, Casso",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Mike Perry, Casso.jpg"
  },
  {
    "ID": 132,
    "Name": "Unknow",
    "Thumb": null
  },
  {
    "ID": 133,
    "Name": "The Jane Doze, Curtains",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\The Jane Doze, Curtains.jpg"
  },
  {
    "ID": 134,
    "Name": "Jim Yosef, Anna Yvette",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Jim Yosef, Anna Yvette.jpg"
  },
  {
    "ID": 135,
    "Name": "Caravan Palace",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Caravan Palace.jpg"
  },
  {
    "ID": 136,
    "Name": "K/DA, Madison Beer, (G)I-DLE, Lexie Liu, Jaira Burns, Seraphine, League of Legends",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\KDA, Madison Beer, (G)I-DLE, Lexie Liu, Jaira Burns, Seraphine, League of Legends.jpg"
  },
  {
    "ID": 137,
    "Name": "MORTEN",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\MORTEN.jpg"
  },
  {
    "ID": 138,
    "Name": "Sia, Alan Walker",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Sia, Alan Walker.jpg"
  },
  {
    "ID": 139,
    "Name": "FWLR, KINLEY",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\FWLR, KINLEY.jpg"
  },
  {
    "ID": 140,
    "Name": "Nightcore",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Nightcore.jpg"
  },
  {
    "ID": 141,
    "Name": "Vicetone, Kat Nestel",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Vicetone, Kat Nestel.jpg"
  },
  {
    "ID": 142,
    "Name": "Prefekt, Johnning",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Prefekt, Johnning.jpg"
  },
  {
    "ID": 143,
    "Name": "Angelika Vee, Goblins from Mars",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Angelika Vee, Goblins from Mars.jpg"
  },
  {
    "ID": 144,
    "Name": "Mako",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Mako.jpg"
  },
  {
    "ID": 145,
    "Name": "Netrum/Halvorsen",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\NetrumHalvorsen.jpg"
  },
  {
    "ID": 146,
    "Name": "K-391, Alan Walker, Tungevaag, Mangoo",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\K-391, Alan Walker, Tungevaag, Mangoo.jpg"
  },
  {
    "ID": 147,
    "Name": "K,DA, Madison Beer, (G)I-DLE, Jaira Burns, League of Legends",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\K,DA, Madison Beer, (G)I-DLE, Jaira Burns, League of Legends.jpg"
  },
  {
    "ID": 148,
    "Name": "Anna Yvette",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Anna Yvette.jpg"
  },
  {
    "ID": 149,
    "Name": "League of Legends, Mako, The Word Alive, The Glitch Mob",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\League of Legends, Mako, The Word Alive, The Glitch Mob.jpg"
  },
  {
    "ID": 150,
    "Name": "Klaypex, Greta",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Klaypex, Greta.jpg"
  },
  {
    "ID": 151,
    "Name": "Gareth Emery,STANDERWICK,HALIENE",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Gareth Emery,STANDERWICK,HALIENE.jpg"
  },
  {
    "ID": 152,
    "Name": "Sub.Sound",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Sub.Sound.jpg"
  },
  {
    "ID": 153,
    "Name": "ItaloBrothers",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\ItaloBrothers.jpg"
  },
  {
    "ID": 154,
    "Name": "Cash Cash",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Cash Cash.jpg"
  },
  {
    "ID": 155,
    "Name": "K/DA, (G)I-DLE, Wolftyla, Bea Miller, League of Legends",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\KDA, (G)I-DLE, Wolftyla, Bea Miller, League of Legends.jpg"
  },
  {
    "ID": 156,
    "Name": "Gabry Ponte, LUM!X, Prezioso",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Gabry Ponte, LUM!X, Prezioso.jpg"
  },
  {
    "ID": 157,
    "Name": "Tristam",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Tristam.jpg"
  },
  {
    "ID": 158,
    "Name": "Tritonal, Cash Cash",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Tritonal, Cash Cash.jpg"
  },
  {
    "ID": 159,
    "Name": "K/DA, Madison Beer, Kim Petras, League of Legends",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\KDA, Madison Beer, Kim Petras, League of Legends.jpg"
  },
  {
    "ID": 160,
    "Name": "Avicii, Sandro Cavazza",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Avicii, Sandro Cavazza.jpg"
  },
  {
    "ID": 161,
    "Name": "Dabin, Dia Frampton",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Dabin, Dia Frampton.jpg"
  },
  {
    "ID": 162,
    "Name": "911",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\911.jpg"
  },
  {
    "ID": 163,
    "Name": "Maroon 5",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Maroon 5.jpg"
  },
  {
    "ID": 164,
    "Name": "Charlie Puth",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Charlie Puth.jpg"
  },
  {
    "ID": 165,
    "Name": "Charlie Puth, Selena Gomez",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Charlie Puth, Selena Gomez.jpg"
  },
  {
    "ID": 166,
    "Name": "Alan Walker, Noah Cyrus, Digital Farm Animals, Juliander",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Alan Walker, Noah Cyrus, Digital Farm Animals, Juliander.jpg"
  },
  {
    "ID": 167,
    "Name": "Alan Walker, Ava Max",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Alan Walker, Ava Max.jpg"
  },
  {
    "ID": 168,
    "Name": "ILLENIUM, MAX",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\ILLENIUM, MAX.jpg"
  },
  {
    "ID": 169,
    "Name": "DEAMN",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\DEAMN.jpg"
  },
  {
    "ID": 170,
    "Name": "Gryffin, Ivy Adara",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Gryffin, Ivy Adara.jpg"
  },
  {
    "ID": 171,
    "Name": "Rival, Cadmium, Jon Becker",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Rival, Cadmium, Jon Becker.jpg"
  },
  {
    "ID": 172,
    "Name": "Don Omar, Lucenzo",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Don Omar, Lucenzo.jpg"
  },
  {
    "ID": 173,
    "Name": "Alan Walker, Au/Ra, Tomine Harket",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Alan Walker, AuRa, Tomine Harket.jpg"
  },
  {
    "ID": 174,
    "Name": "Luis Fonsi, Daddy Yankee",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Luis Fonsi, Daddy Yankee.jpg"
  },
  {
    "ID": 175,
    "Name": "Alan Walker, Sophia Somajo",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Alan Walker, Sophia Somajo.jpg"
  },
  {
    "ID": 176,
    "Name": "Alan Walker, K-391, Sofia Carson, CORSAK",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Alan Walker, K-391, Sofia Carson, CORSAK.jpg"
  },
  {
    "ID": 177,
    "Name": "Alle Farben, ILIRA",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Alle Farben, ILIRA.jpg"
  },
  {
    "ID": 178,
    "Name": "Alan Walker, salem ilese",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Alan Walker, salem ilese.jpg"
  },
  {
    "ID": 179,
    "Name": "UNDRESSD, Ellie May",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\UNDRESSD, Ellie May.jpg"
  },
  {
    "ID": 180,
    "Name": "Alan Walker, Ruben",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Alan Walker, Ruben.jpg"
  },
  {
    "ID": 181,
    "Name": "Alok, Alan Walker, KIDDO",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Alok, Alan Walker, KIDDO.jpg"
  },
  {
    "ID": 182,
    "Name": "Alan Walker, Torine",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Alan Walker, Torine.jpg"
  },
  {
    "ID": 183,
    "Name": "Mike Posner, Seeb",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Mike Posner, Seeb.jpg"
  },
  {
    "ID": 184,
    "Name": "Gryffin, Iselin",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Gryffin, Iselin.jpg"
  },
  {
    "ID": 185,
    "Name": "Ava Max",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Ava Max.jpg"
  },
  {
    "ID": 186,
    "Name": "League Of Legends Feat. Against The Current",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\League Of Legends Feat. Against The Current.jpg"
  },
  {
    "ID": 187,
    "Name": "Alan Walker, K-391, Emelie Hollow",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Alan Walker, K-391, Emelie Hollow.jpg"
  },
  {
    "ID": 188,
    "Name": "Axel Johansson, Tina Stachowiak",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Axel Johansson, Tina Stachowiak.jpg"
  },
  {
    "ID": 189,
    "Name": "Arc North, Krista Marina",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Arc North, Krista Marina.jpg"
  },
  {
    "ID": 190,
    "Name": "Alan Walker, Sabrina Carpenter, Farruko",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Alan Walker, Sabrina Carpenter, Farruko.jpg"
  },
  {
    "ID": 191,
    "Name": "Maroon 5, Wiz Khalifa",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Maroon 5, Wiz Khalifa.jpg"
  },
  {
    "ID": 192,
    "Name": "Sam Feldt, RANI",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Sam Feldt, RANI.jpg"
  },
  {
    "ID": 193,
    "Name": "salem ilese, TOMORROW X TOGETHER, Alan Walker",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\salem ilese, TOMORROW X TOGETHER, Alan Walker.jpg"
  },
  {
    "ID": 194,
    "Name": "Clean Bandit, Jess Glynne",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Clean Bandit, Jess Glynne.jpg"
  },
  {
    "ID": 195,
    "Name": "Clean Bandit, Sean Paul, Anne-Marie",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Clean Bandit, Sean Paul, Anne-Marie.jpg"
  },
  {
    "ID": 196,
    "Name": "Merk & Kremont, Ady Suleiman",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Merk & Kremont, Ady Suleiman.jpg"
  },
  {
    "ID": 197,
    "Name": "Shawn Mendes, Camila Cabello",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Shawn Mendes, Camila Cabello.jpg"
  },
  {
    "ID": 198,
    "Name": "Porter Robinson, Madeon",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Porter Robinson, Madeon.jpg"
  },
  {
    "ID": 199,
    "Name": "Alan Walker, UPSAHL",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Alan Walker, UPSAHL.jpg"
  },
  {
    "ID": 200,
    "Name": "Clean Bandit, Demi Lovato",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Clean Bandit, Demi Lovato.jpg"
  },
  {
    "ID": 201,
    "Name": "Lil Nas X",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Lil Nas X.jpg"
  },
  {
    "ID": 202,
    "Name": "Mike Perry, Tessa",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Mike Perry, Tessa.jpg"
  },
  {
    "ID": 203,
    "Name": "Ina Wroldsen, Alan Walker",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Ina Wroldsen, Alan Walker.jpg"
  },
  {
    "ID": 204,
    "Name": "Clean Bandit, Zara Larsson",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Clean Bandit, Zara Larsson.jpg"
  },
  {
    "ID": 205,
    "Name": "Mike Perry, shy martin",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Mike Perry, shy martin.jpg"
  },
  {
    "ID": 206,
    "Name": "Alan Walker, Gavin James",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Alan Walker, Gavin James.jpg"
  },
  {
    "ID": 207,
    "Name": "Loote",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Loote.jpg"
  },
  {
    "ID": 208,
    "Name": "The Walkers, Alan Walker",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\The Walkers, Alan Walker.jpg"
  },
  {
    "ID": 209,
    "Name": "Vicetone, Daisy Guttridge",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Vicetone, Daisy Guttridge.jpg"
  },
  {
    "ID": 210,
    "Name": "Vicetone, Cozi Zuehlsdorff",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Vicetone, Cozi Zuehlsdorff.jpg"
  },
  {
    "ID": 211,
    "Name": "Alan Walker, Winona Oak",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Alan Walker, Winona Oak.jpg"
  },
  {
    "ID": 212,
    "Name": "League of Legends,Nicki Taylor",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\League of Legends,Nicki Taylor.jpg"
  },
  {
    "ID": 213,
    "Name": "CHROMANCE, Marcus Layton",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\CHROMANCE, Marcus Layton.jpg"
  },
  {
    "ID": 214,
    "Name": "Kevin Silvester, kidkatu, Julie Zorrilla",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Kevin Silvester, kidkatu, Julie Zorrilla.jpg"
  },
  {
    "ID": 215,
    "Name": "Ryuichi Takada",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Ryuichi Takada.jpg"
  },
  {
    "ID": 216,
    "Name": "岡部 啓一",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\岡部 啓一.jpg"
  },
  {
    "ID": 217,
    "Name": "MONACA",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\MONACA.jpg"
  },
  {
    "ID": 218,
    "Name": "Keiichi Okabe, Keigo Hoashi, Kuniyuki Takahashi",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Keiichi Okabe, Keigo Hoashi, Kuniyuki Takahashi.jpg"
  },
  {
    "ID": 219,
    "Name": "Keiichi Okabe, Keigo Hoashi, Kuniyuki Takahashi, Kakeru Ishihama",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Keiichi Okabe, Keigo Hoashi, Kuniyuki Takahashi, Kakeru Ishihama.jpg"
  },
  {
    "ID": 220,
    "Name": "Kuniyuki Takahashi",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Kuniyuki Takahashi.jpg"
  },
  {
    "ID": 221,
    "Name": "岡部啓一",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\岡部啓一.jpg"
  },
  {
    "ID": 222,
    "Name": "帆足圭吾、石濱翔",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\帆足圭吾、石濱翔.jpg"
  },
  {
    "ID": 223,
    "Name": "Okabe Keiichi",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Okabe Keiichi.jpg"
  },
  {
    "ID": 224,
    "Name": "上松範康",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\上松範康.jpg"
  },
  {
    "ID": 225,
    "Name": "Various",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Various.jpg"
  },
  {
    "ID": 226,
    "Name": "Dai Sakakibara",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Dai Sakakibara.jpg"
  },
  {
    "ID": 227,
    "Name": "Keiichi Okabe, MONACA",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Keiichi Okabe, MONACA.jpg"
  },
  {
    "ID": 228,
    "Name": "Keigo Hoashi",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Keigo Hoashi.jpg"
  },
  {
    "ID": 229,
    "Name": "Sean Schafianski",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Sean Schafianski.jpg"
  },
  {
    "ID": 230,
    "Name": "Oliver Good",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Oliver Good.jpg"
  },
  {
    "ID": 231,
    "Name": "marasy",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\marasy.jpg"
  },
  {
    "ID": 232,
    "Name": "Shotaro Seo",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Shotaro Seo.jpg"
  },
  {
    "ID": 233,
    "Name": "Sachiko Miyano",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Sachiko Miyano.jpg"
  },
  {
    "ID": 234,
    "Name": "yo suzuki (akisai)",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\yo suzuki (akisai).jpg"
  },
  {
    "ID": 235,
    "Name": "Keiichi Okabe, MONACA, Vocals?: Emi Evans",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Keiichi Okabe, MONACA, Vocals Emi Evans.jpg"
  },
  {
    "ID": 236,
    "Name": "Tomoyuki Asakawa",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Tomoyuki Asakawa.jpg"
  },
  {
    "ID": 237,
    "Name": "Rozen & Reven",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Rozen & Reven.jpg"
  },
  {
    "ID": 238,
    "Name": "Kenji Kaneko",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Kenji Kaneko.jpg"
  },
  {
    "ID": 239,
    "Name": "Mariko Taguchi",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Mariko Taguchi.jpg"
  },
  {
    "ID": 240,
    "Name": "Ryo Aoyama",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Ryo Aoyama.jpg"
  },
  {
    "ID": 241,
    "Name": "Mariam Abounnasr",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Mariam Abounnasr.jpg"
  },
  {
    "ID": 242,
    "Name": "Masato Koda",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Masato Koda.jpg"
  },
  {
    "ID": 243,
    "Name": "Unknown Artist",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Unknown Artist.jpg"
  },
  {
    "ID": 244,
    "Name": "Yasumasa Kumagai",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Yasumasa Kumagai.jpg"
  },
  {
    "ID": 245,
    "Name": "Taku Yabuki",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Taku Yabuki.jpg"
  },
  {
    "ID": 246,
    "Name": "Daisuke Shinoda",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Daisuke Shinoda.jpg"
  },
  {
    "ID": 247,
    "Name": "Keiichi Okabe",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Keiichi Okabe.jpg"
  },
  {
    "ID": 248,
    "Name": "帆足圭吾",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\帆足圭吾.jpg"
  },
  {
    "ID": 249,
    "Name": "Duke of Pianeet",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Duke of Pianeet.jpg"
  },
  {
    "ID": 250,
    "Name": "Shiryu Miyanoshita",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Shiryu Miyanoshita.jpg"
  },
  {
    "ID": 251,
    "Name": "Christian Gulino",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Christian Gulino.jpg"
  },
  {
    "ID": 252,
    "Name": "Akio Noguchi",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Akio Noguchi.jpg"
  },
  {
    "ID": 253,
    "Name": "Daisuke Kadowaki",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Daisuke Kadowaki.jpg"
  },
  {
    "ID": 254,
    "Name": "Kumi Tanioka",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Kumi Tanioka.jpg"
  },
  {
    "ID": 255,
    "Name": "Keigo Hoashi, Keiichi Okabe",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Keigo Hoashi, Keiichi Okabe.jpg"
  },
  {
    "ID": 256,
    "Name": "Keiichi Okabe, MONACA, Vocals?: Nami Nakagawa",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Keiichi Okabe, MONACA, Vocals Nami Nakagawa.jpg"
  },
  {
    "ID": 257,
    "Name": "Kuniyuki Takahashi, Shotaro Seo",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Kuniyuki Takahashi, Shotaro Seo.jpg"
  },
  {
    "ID": 258,
    "Name": "Kousuke Yamashita",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Kousuke Yamashita.jpg"
  },
  {
    "ID": 259,
    "Name": "Keiichi Okabe, MONACA, Vocals: J'Nique Nicole",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Keiichi Okabe, MONACA, Vocals J'Nique Nicole.jpg"
  },
  {
    "ID": 260,
    "Name": "岡部啓一、帆足圭吾",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\岡部啓一、帆足圭吾.jpg"
  },
  {
    "ID": 261,
    "Name": "Ryu Kawamura",
    "Thumb": "D:\\Linh Tinh\\m\\artists\\Ryu Kawamura.jpg"
  }
];
var Tags= [
  {
    "ID": 0,
    "Name": "EDM-High"
  },
  {
    "ID": 1,
    "Name": "EDM-Low"
  },
  {
    "ID": 2,
    "Name": "EDM-Mid"
  },
  {
    "ID": 3,
    "Name": "J-Pop-High"
  },
  {
    "ID": 4,
    "Name": "J-Pop-Low"
  },
  {
    "ID": 5,
    "Name": "J-Pop-Mid"
  },
  {
    "ID": 6,
    "Name": "Pop-High"
  },
  {
    "ID": 7,
    "Name": "Pop-Low"
  },
  {
    "ID": 8,
    "Name": "Pop-Mid"
  },
  {
    "ID": 9,
    "Name": "Symphony-High"
  },
  {
    "ID": 10,
    "Name": "Symphony-Low"
  },
  {
    "ID": 11,
    "Name": "Symphony-Mid"
  }
];

//------------------------DOM------------------------//

const play_button = document.getElementById('play-button');
const mute_button = document.getElementById('mute-button');
const player_container = document.getElementById('player-container');
const seek_slider = document.getElementById('seek-slider');
const volume_slider = document.getElementById('volume-slider');
const music_player = document.getElementById('music-player');
const duration = document.getElementById('duration');
const current_time = document.getElementById('current-time');

//------------------------Variable------------------------//
// var playList={
//   PrevSongs:[],
//   PlayingSong:null,
//   NextSongs:[],
// };
var playList=[];
var playState = 'play';
var muteState = 'unmute';
var raf=null;
const calculateTime = (secs) => {
  const minutes = Math.floor(secs / 60);
  const seconds = Math.floor(secs % 60);
  const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
  return `${minutes}:${returnedSeconds}`;
}

const displayDuration = () => {
  duration.textContent = calculateTime(music_player.duration);
}

const setSliderMax = () => {
  seek_slider.max = Math.floor(music_player.duration);
}

const displayBufferedAmount = () => {
  const bufferedAmount = Math.floor(music_player.buffered.end(music_player.buffered.length - 1));
  player_container.style.setProperty('--buffered-width', `${(bufferedAmount / seek_slider.max) * 100}%`);
}

const whilePlaying = () => {
  seek_slider.value = Math.floor(music_player.currentTime);
  current_time.textContent = calculateTime(seek_slider.value);
  player_container.style.setProperty('--seek-before-width', `${seek_slider.value / seek_slider.max * 100}%`);
  raf = requestAnimationFrame(whilePlaying);
}


//------------------------Event------------------------//
play_button?.addEventListener('click', () => {
  if (playState === 'play') {
    music_player?.play();
    requestAnimationFrame(whilePlaying);
    playState = 'pause';
  } else {
    music_player?.pause();
    cancelAnimationFrame(raf);
    playState = 'play';
  }
});

mute_button?.addEventListener('click', () => {
  if (muteState === 'unmute') {
    music_player.muted = true;
    muteState = 'mute';
  } else {
    music_player.muted = false;
    muteState = 'unmute';
  }
});

const showRangeProgress = (rangeInput) => {
  if (rangeInput === seek_slider) player_container.style.setProperty('--seek-before-width', rangeInput.value / rangeInput.max * 100 + '%');
  else player_container.style.setProperty('--volume-before-width', rangeInput.value / rangeInput.max * 100 + '%');
}

seek_slider?.addEventListener('input', (e) => {
  showRangeProgress(e.target);
});
volume_slider?.addEventListener('input', (e) => {
  showRangeProgress(e.target);
});



if (music_player.readyState > 0) {
  displayDuration();
  setSliderMax();
  displayBufferedAmount();
} else {
  music_player?.addEventListener('loadedmetadata', () => {
    displayDuration();
    setSliderMax();
    displayBufferedAmount();
  });
}

music_player?.addEventListener('progress', displayBufferedAmount);

seek_slider?.addEventListener('input', () => {
  current_time.textContent = calculateTime(seek_slider.value);  
  cancelAnimationFrame(raf);
});

seek_slider?.addEventListener('change', () => {
  music_player.currentTime = seek_slider.value;
  if (!music_player.paused) {
    requestAnimationFrame(whilePlaying);
  }
});

volume_slider?.addEventListener('input', (e) => {
    const value = e.target.value;
    music_player.volume = value / 100;
});












//------------------------Function------------------------//

var HomeHTML="";
var PlayingSong=null;
var view_home = document.getElementById("view-home");
var view_list = document.getElementById("view-list");
var play_list = document.getElementById("play-list");
var src_audio = document.getElementById("src-audio");
function renderPage() {
  var host = "https://null-music.github.io/lib/";
  var cardHTML="";
  var cardAlbumHTML="";
  var cardArtistHTML="";

  Tags.forEach(tag => {
    cardHTML+=cardRender("assets/thumbs/thumb.jpg", tag,CONST.TYPE.Tags)
  });
  for (let index = 0; index < 10; index++) {
    const element = Artists[index];
    cardArtistHTML+=cardRender("assets/thumbs/thumb.jpg", element,CONST.TYPE.Artists);
    
  }
  for (let index = 0; index < 10; index++) {
    const element = Albums[index];
    cardAlbumHTML+=cardRender("assets/thumbs/thumb.jpg", element,CONST.TYPE.Albums)    
  }

  HomeHTML+=wrapRender("Tag",cardHTML);
  HomeHTML+=wrapRender("Artist",cardArtistHTML);
  HomeHTML+=wrapRender("Album",cardAlbumHTML);
  view_home.innerHTML = HomeHTML;

}
renderPage();
//-----------------------------------------------------Utilities-----------------------------------------------------//
function wrapRender(title, htmlItem) {

  var item = `
    <div class="category-content d-flex flex-column">
      <span class="fs-4 text-truncate ps-3 pb-1">`+title+`</span>
      <hr class="mb-4 mx-3">
      <div class="d-flex flex-wrap">`+ htmlItem+`</div>
    </div>`;
  return item;
}
function cardRender(thumbnail, model,type) {
  var item = `
  <div class="card-border d-flex flex-column align-items-center" >
    <div class=" w-75 card-thumb border-2 border-secondary rounded-3 position-relative" onclick="clickCard(`+model.ID+',\''+type+`')"
        style="background-image: url('`+ thumbnail+`');">
        <div class="w-100 position-absolute top-100 text-truncate py-2 fs-5 d-flex justify-content-center align-items-center">
            `+model.Name+`
        </div>
        <div class= "position-absolute end-0 top-0" >
          <button class="bi bi-play-btn" onclick="addToPlayList(`+model.ID+',\''+type+`')"></button>
        </div>
    </div>
  </div>`;
  return item;
}
function listRender(thumbnail, title,artist) {
  var item = `
  <div class="list-border mb-3 w-50 d-flex flex-row align-items-center">
    <button class="bi bi-play-circle fs-5 px-3" onclick="playSong('`+title+`')"></button>
    <div class="bg-image"
        style="background-image: url('`+ thumbnail+`'); width: 50px;">
    </div>
    <div
        class="ps-3 d-flex flex-column justify-content-start align-items-start">
        <span>`+title+`</span>
        <span>`+ artist +`</span>
    </div>
  </div> `;
  return item;
}
function playListRender(thumbnail, title,artist) {
  var item = `
  <div class="list-border mb-3 w-100 d-flex flex-row align-items-center">
    <button class="bi bi-play-circle fs-5 px-3" onclick="playSong('`+title+`')"></button>
    <div class="bg-image"
        style="background-image: url('`+ thumbnail+`'); width: 50px;">
    </div>
    <div
        class="ps-3 d-flex flex-column justify-content-start align-items-start">
        <span>`+title+`</span>
        <span>`+ artist +`</span>
    </div>
  </div> `;
  return item;
}

function clickCard(cardID,type){
  showList();
  let songs=[];
  let cardName="";
  if(type==CONST.TYPE.Tags){
    songs = Songs.filter(x=>x.TagID == cardID);
    cardName = Tags[cardID]?.Name;
  } 
  if(type==CONST.TYPE.Albums){

    songs = Songs.filter(x=>x.AlbumID == cardID);
    cardName = Albums[cardID]?.Name;
  } 
  if(type==CONST.TYPE.Artists){

    songs = Songs.filter(x=>x.ArtistID == cardID);
    cardName = Artists[cardID]?.Name;
  } 

  listHTML="";
  for (let index = 0; index < songs?.length; index++) {
    const element = songs[index];
    listHTML+=listRender("assets/thumbs/thumb.jpg", element.Title, Albums[element.AlbumID]?.Name,Artists[element.ArtistID]?.Name)
  }
  view_list.innerHTML = wrapRender(cardName,listHTML);
  
}
function addToPlayList(cardID,type){
  
  let songs=[];
  let cardName="";
  if(type==CONST.TYPE.Tags){
    playList = Songs.filter(x=>x.TagID == cardID);
  } 
  if(type==CONST.TYPE.Albums){

    playList = Songs.filter(x=>x.AlbumID == cardID);
  } 
  if(type==CONST.TYPE.Artists){

    playList = Songs.filter(x=>x.ArtistID == cardID);
  }
  
}

function loadPlayList(){
  showPlayList();
  playListHTML="";
  for (let index = 0; index < playList?.length; index++) {
    const element = playList[index];
    playListHTML+=playListRender("assets/thumbs/thumb.jpg", element.Title, Albums[element.AlbumID]?.Name,Artists[element.ArtistID]?.Name)
  }
  play_list.innerHTML = wrapRender('Play List',playListHTML);
  
}

function showHome(){  
  play_list.setAttribute("style", 'height:0px; visibility:hidden;')
  view_list.setAttribute("style", 'height:0px; visibility:hidden;');
  view_home.setAttribute("style", 'height:100%; visibility:visible;');
}

function showList(){  
  play_list.setAttribute("style", 'height:0px; visibility:hidden;')
  view_list.setAttribute("style", 'height:100%; visibility:visible;');
  view_home.setAttribute("style", 'height:0px; visibility:hidden;');
}
function showPlayList(){  
  play_list.setAttribute("style", 'height:100%; visibility:visible;')
  view_list.setAttribute("style", 'height:0px; visibility:hidden;');
  view_home.setAttribute("style", 'height:0px; visibility:hidden;');
}



function calcHeight(){
  let div = document.getElementById('content-view');
  let body = document.getElementById('body');
  let header = document.getElementById('header');
  let minusHeight = header?.offsetHeight > 0 ? 250 : 175;
  let height = "height:" + (body.offsetHeight - minusHeight) + 'px';
  div.setAttribute("style", height);                               
}

function playSong(id){
  music_player.src="https://null-music.github.io/assets/Bán Duyên - Htrol Remix.mp3";
  music_player?.play();
  PlayingSong = Songs[id];
  requestAnimationFrame(whilePlaying);
  playState = 'pause';
}

music_player.onended = function() {
  curIndex = playList?.findIndex(x=>x.ID == PlayingSong?.ID);
  if(curIndex >= playList?.length) curIndex=-1;
  playSong(playList[curIndex+1]);
};

function nextSong(){
  
}




























