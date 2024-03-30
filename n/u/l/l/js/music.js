//#region Data

var CONST = {
  HOST: { Home: "https://null-home.github.io/n/u/l/l/", Music: "https://null-music.github.io/n/u/l/l/", Library: "https://null-library.github.io/n/u/l/l/", },
  TYPE: { Tags: 'Tags', Artists: 'Artists', Albums: 'Albums',Groups:'Groups' }
};
var Songs = [
  {
      "AlbumID": 0,
      "ArtistID": 0,
      "FileName": "01 Flares.m4a",
      "ID": 0,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 0,
      "Title": "Flares"
  },
  {
      "AlbumID": 1,
      "ArtistID": 1,
      "FileName": "Awakening.mp3",
      "ID": 1,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 0,
      "Title": "Awakening"
  },
  {
      "AlbumID": 2,
      "ArtistID": 2,
      "FileName": "Close - Brooks Remix.mp3",
      "ID": 2,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 0,
      "Title": "Close - Brooks Remix"
  },
  {
      "AlbumID": 3,
      "ArtistID": 3,
      "FileName": "Cloud 9.mp3",
      "ID": 3,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 0,
      "Title": "Cloud 9"
  },
  {
      "AlbumID": 4,
      "ArtistID": 3,
      "FileName": "Colors.mp3",
      "ID": 4,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 0,
      "Title": "Colors"
  },
  {
      "AlbumID": 5,
      "ArtistID": 4,
      "FileName": "Energy Drink.mp3",
      "ID": 5,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 0,
      "Title": "Energy Drink"
  },
  {
      "AlbumID": 6,
      "ArtistID": 5,
      "FileName": "Energy.mp3",
      "ID": 6,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 0,
      "Title": "Energy"
  },
  {
      "AlbumID": 7,
      "ArtistID": 6,
      "FileName": "Everlasting.mp3",
      "ID": 7,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 0,
      "Title": "Everlasting"
  },
  {
      "AlbumID": 8,
      "ArtistID": 5,
      "FileName": "Fire.mp3",
      "ID": 8,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 0,
      "Title": "Fire"
  },
  {
      "AlbumID": 9,
      "ArtistID": 7,
      "FileName": "Frisbee.mp3",
      "ID": 9,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 0,
      "Title": "Frisbee"
  },
  {
      "AlbumID": 10,
      "ArtistID": 8,
      "FileName": "Frontier.mp3",
      "ID": 10,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 0,
      "Title": "Frontier"
  },
  {
      "AlbumID": 11,
      "ArtistID": 9,
      "FileName": "Fuck Off.mp3",
      "ID": 11,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 0,
      "Title": "Fuck Off"
  },
  {
      "AlbumID": 12,
      "ArtistID": 3,
      "FileName": "Higher.mp3",
      "ID": 12,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 0,
      "Title": "Higher"
  },
  {
      "AlbumID": 11,
      "ArtistID": 9,
      "FileName": "Highscore.mp3",
      "ID": 13,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 0,
      "Title": "Highscore"
  },
  {
      "AlbumID": 13,
      "ArtistID": 3,
      "FileName": "Hope.mp3",
      "ID": 14,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 0,
      "Title": "Hope"
  },
  {
      "AlbumID": 14,
      "ArtistID": 10,
      "FileName": "Legends - Hyper Potions Remix.mp3",
      "ID": 15,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 0,
      "Title": "Legends - Hyper Potions Remix"
  },
  {
      "AlbumID": 15,
      "ArtistID": 5,
      "FileName": "Limitless.mp3",
      "ID": 16,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 0,
      "Title": "Limitless"
  },
  {
      "AlbumID": 16,
      "ArtistID": 11,
      "FileName": "Rise - Ampyx.mp3",
      "ID": 17,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 0,
      "Title": "Rise"
  },
  {
      "AlbumID": 17,
      "ArtistID": 12,
      "FileName": "Rubik.mp3",
      "ID": 18,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 0,
      "Title": "Rubik"
  },
  {
      "AlbumID": 18,
      "ArtistID": 13,
      "FileName": "S.K.Y.Prox.mp3",
      "ID": 19,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 0,
      "Title": "S.K.Y.Prox"
  },
  {
      "AlbumID": 19,
      "ArtistID": 3,
      "FileName": "Seven.mp3",
      "ID": 20,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 0,
      "Title": "Seven"
  },
  {
      "AlbumID": 20,
      "ArtistID": 14,
      "FileName": "Sky (feat. Martell) - Radio Edit.mp3",
      "ID": 21,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 0,
      "Title": "Sky (feat. Martell) - Radio Edit"
  },
  {
      "AlbumID": 21,
      "ArtistID": 5,
      "FileName": "Sky High.mp3",
      "ID": 22,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 0,
      "Title": "Sky High"
  },
  {
      "AlbumID": 22,
      "ArtistID": 15,
      "FileName": "Spectre.mp3",
      "ID": 23,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 0,
      "Title": "Spectre"
  },
  {
      "AlbumID": 23,
      "ArtistID": 3,
      "FileName": "Sunburst.mp3",
      "ID": 24,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 0,
      "Title": "Sunburst"
  },
  {
      "AlbumID": 24,
      "ArtistID": 5,
      "FileName": "Vision.mp3",
      "ID": 25,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 0,
      "Title": "Vision"
  },
  {
      "AlbumID": 25,
      "ArtistID": 16,
      "FileName": "Welcome to Planet Urf.mp3",
      "ID": 26,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 0,
      "Title": "Welcome to Planet Urf"
  },
  {
      "AlbumID": 26,
      "ArtistID": 17,
      "FileName": "Freedom.mp3",
      "ID": 27,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 1,
      "Title": "Freedom"
  },
  {
      "AlbumID": 27,
      "ArtistID": 18,
      "FileName": "Guava Breeze.mp3",
      "ID": 28,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 1,
      "Title": "Guava Breeze"
  },
  {
      "AlbumID": 28,
      "ArtistID": 18,
      "FileName": "Home.mp3",
      "ID": 29,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 1,
      "Title": "Home"
  },
  {
      "AlbumID": 29,
      "ArtistID": 18,
      "FileName": "Lonely Dance.mp3",
      "ID": 30,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 1,
      "Title": "Lonely Dance"
  },
  {
      "AlbumID": 26,
      "ArtistID": 17,
      "FileName": "Muvik.mp3",
      "ID": 31,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 1,
      "Title": "Muvik"
  },
  {
      "AlbumID": 30,
      "ArtistID": 19,
      "FileName": "Seve - Radio Edit.mp3",
      "ID": 32,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 1,
      "Title": "Seve - Radio Edit"
  },
  {
      "AlbumID": 31,
      "ArtistID": 20,
      "FileName": "Somero.mp3",
      "ID": 33,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 1,
      "Title": "Somero"
  },
  {
      "AlbumID": 32,
      "ArtistID": 21,
      "FileName": "Turtle Beach.mp3",
      "ID": 34,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 1,
      "Title": "Turtle Beach"
  },
  {
      "AlbumID": 33,
      "ArtistID": 3,
      "FileName": "Candyland.mp3",
      "ID": 35,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 2,
      "Title": "Candyland"
  },
  {
      "AlbumID": 34,
      "ArtistID": 22,
      "FileName": "Close To The Sun.mp3",
      "ID": 36,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 2,
      "Title": "Close To The Sun"
  },
  {
      "AlbumID": 35,
      "ArtistID": 3,
      "FileName": "Cool.mp3",
      "ID": 37,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 2,
      "Title": "Cool"
  },
  {
      "AlbumID": 36,
      "ArtistID": 22,
      "FileName": "Elegy.mp3",
      "ID": 38,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 2,
      "Title": "Elegy"
  },
  {
      "AlbumID": 36,
      "ArtistID": 22,
      "FileName": "Epic.mp3",
      "ID": 39,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 2,
      "Title": "Epic"
  },
  {
      "AlbumID": 37,
      "ArtistID": 22,
      "FileName": "Fly Away.mp3",
      "ID": 40,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 2,
      "Title": "Fly Away"
  },
  {
      "AlbumID": 38,
      "ArtistID": 18,
      "FileName": "Happy Robot.mp3",
      "ID": 41,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 2,
      "Title": "Happy Robot"
  },
  {
      "AlbumID": 39,
      "ArtistID": 11,
      "FileName": "Holo.mp3",
      "ID": 42,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 2,
      "Title": "Holo"
  },
  {
      "AlbumID": 40,
      "ArtistID": 3,
      "FileName": "Infectious.mp3",
      "ID": 43,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 2,
      "Title": "Infectious"
  },
  {
      "AlbumID": 41,
      "ArtistID": 3,
      "FileName": "Joy.mp3",
      "ID": 44,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 2,
      "Title": "Joy"
  },
  {
      "AlbumID": 42,
      "ArtistID": 3,
      "FileName": "Let's Go.mp3",
      "ID": 45,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 2,
      "Title": "Lets Go"
  },
  {
      "AlbumID": 43,
      "ArtistID": 3,
      "FileName": "Louder Now.mp3",
      "ID": 46,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 2,
      "Title": "Louder Now"
  },
  {
      "AlbumID": 44,
      "ArtistID": 18,
      "FileName": "Masked Heroes.mp3",
      "ID": 47,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 2,
      "Title": "Masked Heroes"
  },
  {
      "AlbumID": 45,
      "ArtistID": 18,
      "FileName": "Masked Raver.mp3",
      "ID": 48,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 2,
      "Title": "Masked Raver"
  },
  {
      "AlbumID": 46,
      "ArtistID": 3,
      "FileName": "Mesmerize.mp3",
      "ID": 49,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 2,
      "Title": "Mesmerize"
  },
  {
      "AlbumID": 47,
      "ArtistID": 22,
      "FileName": "Monody (feat. Laura Brehm).mp3",
      "ID": 50,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 2,
      "Title": "Monody (feat. Laura Brehm)"
  },
  {
      "AlbumID": 48,
      "ArtistID": 3,
      "FileName": "Nostalgia.mp3",
      "ID": 51,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 2,
      "Title": "Nostalgia"
  },
  {
      "AlbumID": 49,
      "ArtistID": 23,
      "FileName": "O M II N - Long Journey.mp3",
      "ID": 52,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 2,
      "Title": "Long Journey"
  },
  {
      "AlbumID": 49,
      "ArtistID": 23,
      "FileName": "O M II N - Sunset.mp3",
      "ID": 53,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 2,
      "Title": "O M II N - Sunset"
  },
  {
      "AlbumID": 50,
      "ArtistID": 18,
      "FileName": "Oh Look Aliens!.mp3",
      "ID": 54,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 2,
      "Title": "Oh Look Aliens!"
  },
  {
      "AlbumID": 51,
      "ArtistID": 22,
      "FileName": "Origin.mp3",
      "ID": 55,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 2,
      "Title": "Origin"
  },
  {
      "AlbumID": 52,
      "ArtistID": 18,
      "FileName": "Piece Of Me (Vexento Remix).mp3",
      "ID": 56,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 2,
      "Title": "Piece Of Me (Vexento Remix)"
  },
  {
      "AlbumID": 53,
      "ArtistID": 18,
      "FileName": "Sad Robot.mp3",
      "ID": 57,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 2,
      "Title": "Sad Robot"
  },
  {
      "AlbumID": 54,
      "ArtistID": 24,
      "FileName": "Summertime.mp3",
      "ID": 58,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 2,
      "Title": "Summertime"
  },
  {
      "AlbumID": 55,
      "ArtistID": 18,
      "FileName": "Tevo.mp3",
      "ID": 59,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 2,
      "Title": "Tevo"
  },
  {
      "AlbumID": 56,
      "ArtistID": 25,
      "FileName": "Trap Queen - Eightfold X MKJ Remix.mp3",
      "ID": 60,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 2,
      "Title": "Trap Queen - Eightfold X MKJ Remix"
  },
  {
      "AlbumID": 57,
      "ArtistID": 18,
      "FileName": "Trippy Love.mp3",
      "ID": 61,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 2,
      "Title": "Trippy Love"
  },
  {
      "AlbumID": 58,
      "ArtistID": 26,
      "FileName": "Tropic Love.mp3",
      "ID": 62,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 2,
      "Title": "Tropic Love"
  },
  {
      "AlbumID": 59,
      "ArtistID": 22,
      "FileName": "Unity.mp3",
      "ID": 63,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 2,
      "Title": "Unity"
  },
  {
      "AlbumID": 60,
      "ArtistID": 18,
      "FileName": "Verve.mp3",
      "ID": 64,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 2,
      "Title": "Verve"
  },
  {
      "AlbumID": 61,
      "ArtistID": 18,
      "FileName": "Where We Belong.mp3",
      "ID": 65,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 2,
      "Title": "Where We Belong"
  },
  {
      "AlbumID": 62,
      "ArtistID": 27,
      "FileName": "01 Kaikai Kitan.m4a",
      "ID": 66,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 3,
      "Title": "Kaikai Kitan"
  },
  {
      "AlbumID": 63,
      "ArtistID": 28,
      "FileName": "01 デスぺレート.m4a",
      "ID": 67,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 3,
      "Title": "デスぺレート"
  },
  {
      "AlbumID": 64,
      "ArtistID": 27,
      "FileName": "02 Nonsense Bungaku.m4a",
      "ID": 68,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 3,
      "Title": "Nonsense Bungaku"
  },
  {
      "AlbumID": 65,
      "ArtistID": 27,
      "FileName": "04 Inochino Tabekata - DanceMix Ver.m4a",
      "ID": 69,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 3,
      "Title": "Inochino Tabekata - DanceMix Ver."
  },
  {
      "AlbumID": 64,
      "ArtistID": 27,
      "FileName": "09 Okinimesumama.m4a",
      "ID": 70,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 3,
      "Title": "Okinimesumama"
  },
  {
      "AlbumID": 66,
      "ArtistID": 28,
      "FileName": "Beyond the way.mp3",
      "ID": 71,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 3,
      "Title": "Beyond the way"
  },
  {
      "AlbumID": 67,
      "ArtistID": 29,
      "FileName": "Casino.mp3",
      "ID": 72,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 3,
      "Title": "Casino"
  },
  {
      "AlbumID": 68,
      "ArtistID": 30,
      "FileName": "Cheating is a crime.mp3",
      "ID": 73,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 3,
      "Title": "Cheating is a crime"
  },
  {
      "AlbumID": 69,
      "ArtistID": 31,
      "FileName": "Cynical Night Plan.mp3",
      "ID": 74,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 3,
      "Title": "Cynical Night Plan"
  },
  {
      "AlbumID": 70,
      "ArtistID": 32,
      "FileName": "Demon Lord.mp3",
      "ID": 75,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 3,
      "Title": "Demon Lord"
  },
  {
      "AlbumID": 71,
      "ArtistID": 32,
      "FileName": "ENVY BABY.mp3",
      "ID": 76,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 3,
      "Title": "ENVY BABY"
  },
  {
      "AlbumID": 72,
      "ArtistID": 32,
      "FileName": "EYE.mp3",
      "ID": 77,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 3,
      "Title": "EYE"
  },
  {
      "AlbumID": 73,
      "ArtistID": 27,
      "FileName": "FightSong.mp3",
      "ID": 78,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 3,
      "Title": "FightSong"
  },
  {
      "AlbumID": 74,
      "ArtistID": 28,
      "FileName": "Gimme×Gimme feat. 初音ミク-鏡音リン.mp3",
      "ID": 79,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 3,
      "Title": "Gimme×Gimme feat. 初音ミク・鏡音リン"
  },
  {
      "AlbumID": 75,
      "ArtistID": 33,
      "FileName": "Good-bye Declaration.mp3",
      "ID": 80,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 3,
      "Title": "Good-bye Declaration"
  },
  {
      "AlbumID": 76,
      "ArtistID": 32,
      "FileName": "KING.mp3",
      "ID": 81,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 3,
      "Title": "KING"
  },
  {
      "AlbumID": 69,
      "ArtistID": 31,
      "FileName": "last resort.mp3",
      "ID": 82,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 3,
      "Title": "last resort"
  },
  {
      "AlbumID": 77,
      "ArtistID": 32,
      "FileName": "MIRA.mp3",
      "ID": 83,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 3,
      "Title": "MIRA"
  },
  {
      "AlbumID": 78,
      "ArtistID": 29,
      "FileName": "Nightmare.mp3",
      "ID": 84,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 3,
      "Title": "Nightmare"
  },
  {
      "AlbumID": 79,
      "ArtistID": 34,
      "FileName": "osmanthus.mp3",
      "ID": 85,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 3,
      "Title": "osmanthus"
  },
  {
      "AlbumID": 80,
      "ArtistID": 32,
      "FileName": "QUEEN.mp3",
      "ID": 86,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 3,
      "Title": "QUEEN"
  },
  {
      "AlbumID": 81,
      "ArtistID": 28,
      "FileName": "Ready Steady (feat. Hatsune Miku, Kagamine Rin, Kagamine Len).mp3",
      "ID": 87,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 3,
      "Title": "Ready Steady (feat. Hatsune Miku, Kagamine Rin, Kagamine Len)"
  },
  {
      "AlbumID": 82,
      "ArtistID": 32,
      "FileName": "Rendezvous.mp3",
      "ID": 88,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 3,
      "Title": "Rendezvous"
  },
  {
      "AlbumID": 83,
      "ArtistID": 29,
      "FileName": "Shadow Shadow.mp3",
      "ID": 89,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 3,
      "Title": "Shadow Shadow"
  },
  {
      "AlbumID": 84,
      "ArtistID": 29,
      "FileName": "Whisper Whisper Whisper.mp3",
      "ID": 90,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 3,
      "Title": "Whisper Whisper Whisper"
  },
  {
      "AlbumID": 85,
      "ArtistID": 29,
      "FileName": "Witch Hunt.mp3",
      "ID": 91,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 3,
      "Title": "Witch Hunt"
  },
  {
      "AlbumID": 86,
      "ArtistID": 32,
      "FileName": "Yoidoreshirazu.mp3",
      "ID": 92,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 3,
      "Title": "Yoidoreshirazu"
  },
  {
      "AlbumID": 87,
      "ArtistID": 32,
      "FileName": "アイデンティティ.mp3",
      "ID": 93,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 3,
      "Title": "アイデンティティ"
  },
  {
      "AlbumID": 88,
      "ArtistID": 32,
      "FileName": "エンヴィーベイビー x KING.mp3",
      "ID": 94,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 3,
      "Title": "エンヴィーベイビー x KING"
  },
  {
      "AlbumID": 69,
      "ArtistID": 31,
      "FileName": "シネマ  初音ミク.mp3",
      "ID": 95,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 3,
      "Title": "シネマ  初音ミク"
  },
  {
      "AlbumID": 69,
      "ArtistID": 31,
      "FileName": "ワンダラー - 初音ミク.mp3",
      "ID": 96,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 3,
      "Title": "ワンダラー - 初音ミク"
  },
  {
      "AlbumID": 89,
      "ArtistID": 35,
      "FileName": "01 ずるいよ….m4a",
      "ID": 97,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 4,
      "Title": "ずるいよ…"
  },
  {
      "AlbumID": 90,
      "ArtistID": 36,
      "FileName": "03  香水 feat.相沢.mp3",
      "ID": 98,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 4,
      "Title": "香水 feat.相沢"
  },
  {
      "AlbumID": 91,
      "ArtistID": 36,
      "FileName": "05.ルラルラルー-Kobasolo.mp3",
      "ID": 99,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 4,
      "Title": "Lulalulalu"
  },
  {
      "AlbumID": 90,
      "ArtistID": 36,
      "FileName": "07  風になる feat.Lefty Hand Cream.mp3",
      "ID": 100,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 4,
      "Title": "風になる feat.Lefty Hand Cream"
  },
  {
      "AlbumID": 92,
      "ArtistID": 36,
      "FileName": "08. 奏(かなで) feat. 安果音.mp3",
      "ID": 101,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 4,
      "Title": "奏(かなで) feat. 安果音"
  },
  {
      "AlbumID": 91,
      "ArtistID": 36,
      "FileName": "10.背中合わせ-Kobasolo.mp3",
      "ID": 102,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 4,
      "Title": "Back-to-back"
  },
  {
      "AlbumID": 93,
      "ArtistID": 37,
      "FileName": "30.mp3",
      "ID": 103,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 4,
      "Title": "30"
  },
  {
      "AlbumID": 94,
      "ArtistID": 37,
      "FileName": "40.mp3",
      "ID": 104,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 4,
      "Title": "40"
  },
  {
      "AlbumID": 95,
      "ArtistID": 38,
      "FileName": "Akie - Letter Song.mp3",
      "ID": 105,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 4,
      "Title": "Akie - Letter Song"
  },
  {
      "AlbumID": 95,
      "ArtistID": 38,
      "FileName": "Akie - 天之弱.mp3",
      "ID": 106,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 4,
      "Title": "Akie - 天之弱"
  },
  {
      "AlbumID": 95,
      "ArtistID": 38,
      "FileName": "Akie - 約束.mp3",
      "ID": 107,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 4,
      "Title": "Akie - 約束"
  },
  {
      "AlbumID": 96,
      "ArtistID": 37,
      "FileName": "Alone.mp3",
      "ID": 108,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 4,
      "Title": "Alone"
  },
  {
      "AlbumID": 97,
      "ArtistID": 39,
      "FileName": "Always in my heart.mp3",
      "ID": 109,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 4,
      "Title": "Always in my heart"
  },
  {
      "AlbumID": 98,
      "ArtistID": 37,
      "FileName": "Ame.mp3",
      "ID": 110,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 4,
      "Title": "Ame"
  },
  {
      "AlbumID": 99,
      "ArtistID": 37,
      "FileName": "Ano Natsuno Hanabi.mp3",
      "ID": 111,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 4,
      "Title": "Ano Natsuno Hanabi"
  },
  {
      "AlbumID": 100,
      "ArtistID": 37,
      "FileName": "Anohino Melody.mp3",
      "ID": 112,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 4,
      "Title": "Anohino Melody"
  },
  {
      "AlbumID": 101,
      "ArtistID": 40,
      "FileName": "Arigato.mp3",
      "ID": 113,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 4,
      "Title": "Arigato"
  },
  {
      "AlbumID": 102,
      "ArtistID": 41,
      "FileName": "be with you.mp3",
      "ID": 114,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 4,
      "Title": "be with you"
  },
  {
      "AlbumID": 103,
      "ArtistID": 37,
      "FileName": "Be... - Stardust Version.mp3",
      "ID": 115,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 4,
      "Title": "Be... - Stardust Version"
  },
  {
      "AlbumID": 96,
      "ArtistID": 37,
      "FileName": "Be... - Teardrop Version.mp3",
      "ID": 116,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 4,
      "Title": "Be... - Teardrop Version"
  },
  {
      "AlbumID": 104,
      "ArtistID": 37,
      "FileName": "Be....mp3",
      "ID": 117,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 4,
      "Title": "Be..."
  },
  {
      "AlbumID": 97,
      "ArtistID": 39,
      "FileName": "Call you.mp3",
      "ID": 118,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 4,
      "Title": "Call you"
  },
  {
      "AlbumID": 105,
      "ArtistID": 37,
      "FileName": "Christmas Song.mp3",
      "ID": 119,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 4,
      "Title": "Christmas Song"
  },
  {
      "AlbumID": 106,
      "ArtistID": 37,
      "FileName": "Dareyori Sukinanoni.mp3",
      "ID": 120,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 4,
      "Title": "Dareyori Sukinanoni"
  },
  {
      "AlbumID": 96,
      "ArtistID": 37,
      "FileName": "DEAR...again.mp3",
      "ID": 121,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 4,
      "Title": "DEAR...again"
  },
  {
      "AlbumID": 107,
      "ArtistID": 37,
      "FileName": "Dear.mp3",
      "ID": 122,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 4,
      "Title": "Dear"
  },
  {
      "AlbumID": 108,
      "ArtistID": 42,
      "FileName": "Duca - Ai no Niwa.mp3",
      "ID": 123,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 4,
      "Title": "Duca - Ai no Niwa"
  },
  {
      "AlbumID": 100,
      "ArtistID": 37,
      "FileName": "Earphones.mp3",
      "ID": 124,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 4,
      "Title": "Earphones"
  },
  {
      "AlbumID": 109,
      "ArtistID": 37,
      "FileName": "Eki.mp3",
      "ID": 125,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 4,
      "Title": "Eki"
  },
  {
      "AlbumID": 97,
      "ArtistID": 39,
      "FileName": "Ever be my love.mp3",
      "ID": 126,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 4,
      "Title": "Ever be my love"
  },
  {
      "AlbumID": 110,
      "ArtistID": 37,
      "FileName": "Fall in love.mp3",
      "ID": 127,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 4,
      "Title": "Fall in love"
  },
  {
      "AlbumID": 103,
      "ArtistID": 37,
      "FileName": "First Love.mp3",
      "ID": 128,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 4,
      "Title": "First Love"
  },
  {
      "AlbumID": 103,
      "ArtistID": 37,
      "FileName": "Gekkou.mp3",
      "ID": 129,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 4,
      "Title": "Gekkou"
  },
  {
      "AlbumID": 109,
      "ArtistID": 37,
      "FileName": "Gomenne.mp3",
      "ID": 130,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 4,
      "Title": "Gomenne"
  },
  {
      "AlbumID": 96,
      "ArtistID": 37,
      "FileName": "Hello, Again.mp3",
      "ID": 131,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 4,
      "Title": "Hello, Again"
  },
  {
      "AlbumID": 105,
      "ArtistID": 37,
      "FileName": "HIKARI.mp3",
      "ID": 132,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 4,
      "Title": "HIKARI"
  },
  {
      "AlbumID": 105,
      "ArtistID": 37,
      "FileName": "Hoshifuru Yoruni.mp3",
      "ID": 133,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 4,
      "Title": "Hoshifuru Yoruni"
  },
  {
      "AlbumID": 100,
      "ArtistID": 37,
      "FileName": "Hoshiwo Koete.mp3",
      "ID": 134,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 4,
      "Title": "Hoshiwo Koete"
  },
  {
      "AlbumID": 111,
      "ArtistID": 37,
      "FileName": "I LOVE YOU.mp3",
      "ID": 135,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 4,
      "Title": "I LOVE YOU"
  },
  {
      "AlbumID": 93,
      "ArtistID": 37,
      "FileName": "I WILL.mp3",
      "ID": 136,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 4,
      "Title": "I WILL"
  },
  {
      "AlbumID": 100,
      "ArtistID": 37,
      "FileName": "Itoshii Hitoyo.mp3",
      "ID": 137,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 4,
      "Title": "Itoshii Hitoyo"
  },
  {
      "AlbumID": 99,
      "ArtistID": 37,
      "FileName": "Kanashii Kiss.mp3",
      "ID": 138,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 4,
      "Title": "Kanashii Kiss"
  },
  {
      "AlbumID": 112,
      "ArtistID": 37,
      "FileName": "Kanashimini Sayonara.mp3",
      "ID": 139,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 4,
      "Title": "Kanashimini Sayonara"
  },
  {
      "AlbumID": 113,
      "ArtistID": 37,
      "FileName": "Kanega Naru - Acoustic ver.mp3",
      "ID": 140,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 4,
      "Title": "Kanega Naru - Acoustic ver"
  },
  {
      "AlbumID": 105,
      "ArtistID": 37,
      "FileName": "Kanega Naru.mp3",
      "ID": 141,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 4,
      "Title": "Kanega Naru"
  },
  {
      "AlbumID": 114,
      "ArtistID": 43,
      "FileName": "Kimi Ni Saigo No Kuchizuke Wo.mp3",
      "ID": 142,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 4,
      "Title": "Kimi Ni Saigo No Kuchizuke Wo"
  },
  {
      "AlbumID": 115,
      "ArtistID": 37,
      "FileName": "Letter.mp3",
      "ID": 143,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 4,
      "Title": "Letter"
  },
  {
      "AlbumID": 99,
      "ArtistID": 37,
      "FileName": "Love Love Love.mp3",
      "ID": 144,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 4,
      "Title": "Love Love Love"
  },
  {
      "AlbumID": 116,
      "ArtistID": 37,
      "FileName": "Lovin' you.mp3",
      "ID": 145,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 4,
      "Title": "Lovin you"
  },
  {
      "AlbumID": 96,
      "ArtistID": 37,
      "FileName": "M.mp3",
      "ID": 146,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 4,
      "Title": "M"
  },
  {
      "AlbumID": 117,
      "ArtistID": 37,
      "FileName": "Mata Koi wo Suru Koto Nado.mp3",
      "ID": 147,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 4,
      "Title": "Mata Koi wo Suru Koto Nado"
  },
  {
      "AlbumID": 99,
      "ArtistID": 37,
      "FileName": "Mirai Yosouzu II.mp3",
      "ID": 148,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 4,
      "Title": "Mirai Yosouzu II"
  },
  {
      "AlbumID": 99,
      "ArtistID": 37,
      "FileName": "Mirai Yosouzu.mp3",
      "ID": 149,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 4,
      "Title": "Mirai Yosouzu"
  },
  {
      "AlbumID": 103,
      "ArtistID": 37,
      "FileName": "Missing.mp3",
      "ID": 150,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 4,
      "Title": "Missing"
  },
  {
      "AlbumID": 112,
      "ArtistID": 37,
      "FileName": "My graduation.mp3",
      "ID": 151,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 4,
      "Title": "my graduation"
  },
  {
      "AlbumID": 109,
      "ArtistID": 37,
      "FileName": "Nanpasen.mp3",
      "ID": 152,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 4,
      "Title": "Nanpasen"
  },
  {
      "AlbumID": 109,
      "ArtistID": 37,
      "FileName": "Natsuo Akiramete.mp3",
      "ID": 153,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 4,
      "Title": "Natsuo Akiramete"
  },
  {
      "AlbumID": 112,
      "ArtistID": 37,
      "FileName": "PIECE OF MY WISH.mp3",
      "ID": 154,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 4,
      "Title": "PIECE OF MY WISH"
  },
  {
      "AlbumID": 110,
      "ArtistID": 37,
      "FileName": "Plastic Love.mp3",
      "ID": 155,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 4,
      "Title": "Plastic Love"
  },
  {
      "AlbumID": 103,
      "ArtistID": 37,
      "FileName": "Rainy Blue.mp3",
      "ID": 156,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 4,
      "Title": "Rainy Blue"
  },
  {
      "AlbumID": 118,
      "ArtistID": 44,
      "FileName": "Remember.mp3",
      "ID": 157,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 4,
      "Title": "remember"
  },
  {
      "AlbumID": 108,
      "ArtistID": 45,
      "FileName": "Riyu Renji - Boku Ga Shinou To Omotta No Wa.mp3",
      "ID": 158,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 4,
      "Title": "Riyu Renji - Boku Ga Shinou To Omotta No Wa"
  },
  {
      "AlbumID": 119,
      "ArtistID": 46,
      "FileName": "RSP - Yasashii Uta.mp3",
      "ID": 159,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 4,
      "Title": "Yasashii Uta"
  },
  {
      "AlbumID": 110,
      "ArtistID": 37,
      "FileName": "Ruriirono Chikyuu.mp3",
      "ID": 160,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 4,
      "Title": "Ruriirono Chikyuu"
  },
  {
      "AlbumID": 109,
      "ArtistID": 37,
      "FileName": "Sayonarano Mukougawa.mp3",
      "ID": 161,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 4,
      "Title": "Sayonarano Mukougawa"
  },
  {
      "AlbumID": 97,
      "ArtistID": 39,
      "FileName": "Scarborough Fair.mp3",
      "ID": 162,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 4,
      "Title": "Scarborough Fair"
  },
  {
      "AlbumID": 120,
      "ArtistID": 47,
      "FileName": "Sing.mp3",
      "ID": 163,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 4,
      "Title": "Sing"
  },
  {
      "AlbumID": 112,
      "ArtistID": 37,
      "FileName": "Soramo Toberuhazu.mp3",
      "ID": 164,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 4,
      "Title": "Soramo Toberuhazu"
  },
  {
      "AlbumID": 100,
      "ArtistID": 37,
      "FileName": "Souha.mp3",
      "ID": 165,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 4,
      "Title": "Souha"
  },
  {
      "AlbumID": 104,
      "ArtistID": 37,
      "FileName": "Squall.mp3",
      "ID": 166,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 4,
      "Title": "Squall"
  },
  {
      "AlbumID": 103,
      "ArtistID": 37,
      "FileName": "Story.mp3",
      "ID": 167,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 4,
      "Title": "Story"
  },
  {
      "AlbumID": 121,
      "ArtistID": 48,
      "FileName": "Summertime.mp3",
      "ID": 168,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 4,
      "Title": "summertime"
  },
  {
      "AlbumID": 105,
      "ArtistID": 37,
      "FileName": "Sweet Home.mp3",
      "ID": 169,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 4,
      "Title": "Sweet Home"
  },
  {
      "AlbumID": 103,
      "ArtistID": 37,
      "FileName": "Tears.mp3",
      "ID": 170,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 4,
      "Title": "tears"
  },
  {
      "AlbumID": 108,
      "ArtistID": 49,
      "FileName": "TEE - Baby I Love You.mp3",
      "ID": 171,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 4,
      "Title": "TEE - Baby I Love You"
  },
  {
      "AlbumID": 99,
      "ArtistID": 37,
      "FileName": "The signs of LOVE.mp3",
      "ID": 172,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 4,
      "Title": "The signs of LOVE"
  },
  {
      "AlbumID": 96,
      "ArtistID": 37,
      "FileName": "Time goes by.mp3",
      "ID": 173,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 4,
      "Title": "Time goes by"
  },
  {
      "AlbumID": 110,
      "ArtistID": 37,
      "FileName": "Tokino Nagareni Miwo Makase.mp3",
      "ID": 174,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 4,
      "Title": "Tokino Nagareni Miwo Makase"
  },
  {
      "AlbumID": 109,
      "ArtistID": 37,
      "FileName": "Tsugunai.mp3",
      "ID": 175,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 4,
      "Title": "Tsugunai"
  },
  {
      "AlbumID": 109,
      "ArtistID": 37,
      "FileName": "Woman.mp3",
      "ID": 176,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 4,
      "Title": "Woman"
  },
  {
      "AlbumID": 103,
      "ArtistID": 37,
      "FileName": "Yukino Hana.mp3",
      "ID": 177,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 4,
      "Title": "Yukino Hana"
  },
  {
      "AlbumID": 122,
      "ArtistID": 47,
      "FileName": "ありがとう、だいすき.mp3",
      "ID": 178,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 4,
      "Title": "ありがとう、だいすき"
  },
  {
      "AlbumID": 123,
      "ArtistID": 40,
      "FileName": "いとしのエリー.mp3",
      "ID": 179,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 4,
      "Title": "いとしのエリー"
  },
  {
      "AlbumID": 124,
      "ArtistID": 50,
      "FileName": "きみのうた.mp3",
      "ID": 180,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 4,
      "Title": "きみのうた"
  },
  {
      "AlbumID": 125,
      "ArtistID": 35,
      "FileName": "ずるいよ….mp3",
      "ID": 181,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 4,
      "Title": "ずるいよ…"
  },
  {
      "AlbumID": 122,
      "ArtistID": 47,
      "FileName": "みちしるべ.mp3",
      "ID": 182,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 4,
      "Title": "みちしるべ"
  },
  {
      "AlbumID": 123,
      "ArtistID": 40,
      "FileName": "もう二度と・・・.mp3",
      "ID": 183,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 4,
      "Title": "もう二度と・・・"
  },
  {
      "AlbumID": 126,
      "ArtistID": 51,
      "FileName": "オレンジ.mp3",
      "ID": 184,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 4,
      "Title": "オレンジ"
  },
  {
      "AlbumID": 127,
      "ArtistID": 52,
      "FileName": "キラメキ.mp3",
      "ID": 185,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 4,
      "Title": "キラメキ"
  },
  {
      "AlbumID": 128,
      "ArtistID": 53,
      "FileName": "タイニーリトル・アジアンタム.mp3",
      "ID": 186,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 4,
      "Title": "タイニーリトル・アジアンタム"
  },
  {
      "AlbumID": 129,
      "ArtistID": 54,
      "FileName": "君だったら.mp3",
      "ID": 187,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 4,
      "Title": "君だったら"
  },
  {
      "AlbumID": 130,
      "ArtistID": 55,
      "FileName": "君に出逢えて.mp3",
      "ID": 188,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 4,
      "Title": "君に出逢えて"
  },
  {
      "AlbumID": 123,
      "ArtistID": 40,
      "FileName": "声を聞かせて.mp3",
      "ID": 189,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 4,
      "Title": "声を聞かせて"
  },
  {
      "AlbumID": 131,
      "ArtistID": 31,
      "FileName": "夜撫でるメノウ.mp3",
      "ID": 190,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 4,
      "Title": "夜撫でるメノウ"
  },
  {
      "AlbumID": 132,
      "ArtistID": 56,
      "FileName": "恋愛サーキュレーション.mp3",
      "ID": 191,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 4,
      "Title": "恋愛サーキュレーション"
  },
  {
      "AlbumID": 133,
      "ArtistID": 57,
      "FileName": "明日がくるなら ballad solo version.mp3",
      "ID": 192,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 4,
      "Title": "明日がくるなら ballad solo version"
  },
  {
      "AlbumID": 123,
      "ArtistID": 40,
      "FileName": "桜坂.mp3",
      "ID": 193,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 4,
      "Title": "桜坂"
  },
  {
      "AlbumID": 123,
      "ArtistID": 40,
      "FileName": "永遠.mp3",
      "ID": 194,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 4,
      "Title": "永遠"
  },
  {
      "AlbumID": 134,
      "ArtistID": 55,
      "FileName": "百満開花.mp3",
      "ID": 195,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 4,
      "Title": "百満開花"
  },
  {
      "AlbumID": 123,
      "ArtistID": 40,
      "FileName": "瞳をとじて.mp3",
      "ID": 196,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 4,
      "Title": "瞳をとじて"
  },
  {
      "AlbumID": 135,
      "ArtistID": 58,
      "FileName": "01 115万キロのフィルム.m4a",
      "ID": 197,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "115万キロのフィルム"
  },
  {
      "AlbumID": 136,
      "ArtistID": 59,
      "FileName": "01 LOST IN PARADISE.m4a",
      "ID": 198,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "LOST IN PARADISE"
  },
  {
      "AlbumID": 137,
      "ArtistID": 60,
      "FileName": "01 ダンスホール.m4a",
      "ID": 199,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "ダンスホール"
  },
  {
      "AlbumID": 138,
      "ArtistID": 61,
      "FileName": "01 低血ボルト.m4a",
      "ID": 200,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "低血ボルト"
  },
  {
      "AlbumID": 139,
      "ArtistID": 62,
      "FileName": "01 又三郎.m4a",
      "ID": 201,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "又三郎"
  },
  {
      "AlbumID": 140,
      "ArtistID": 62,
      "FileName": "01 夜行.m4a",
      "ID": 202,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "夜行"
  },
  {
      "AlbumID": 141,
      "ArtistID": 62,
      "FileName": "01 思想犯.m4a",
      "ID": 203,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "思想犯"
  },
  {
      "AlbumID": 142,
      "ArtistID": 62,
      "FileName": "01 春泥棒.m4a",
      "ID": 204,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "春泥棒"
  },
  {
      "AlbumID": 143,
      "ArtistID": 62,
      "FileName": "01 盗作.m4a",
      "ID": 205,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "盗作"
  },
  {
      "AlbumID": 144,
      "ArtistID": 61,
      "FileName": "01 秒針を噛む.m4a",
      "ID": 206,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "秒針を噛む"
  },
  {
      "AlbumID": 145,
      "ArtistID": 61,
      "FileName": "01 花一匁.m4a",
      "ID": 207,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "花一匁"
  },
  {
      "AlbumID": 146,
      "ArtistID": 62,
      "FileName": "01 藍二乗.m4a",
      "ID": 208,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "藍二乗"
  },
  {
      "AlbumID": 147,
      "ArtistID": 62,
      "FileName": "01 雨とカプチーノ.m4a",
      "ID": 209,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "雨とカプチーノ"
  },
  {
      "AlbumID": 148,
      "ArtistID": 62,
      "FileName": "01 風を食む.m4a",
      "ID": 210,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "風を食む"
  },
  {
      "AlbumID": 91,
      "ArtistID": 36,
      "FileName": "01.恋せよオトメ-Kobasolo.mp3",
      "ID": 211,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "Koi Seyo Otome"
  },
  {
      "AlbumID": 62,
      "ArtistID": 27,
      "FileName": "02 Ao No Waltz.m4a",
      "ID": 212,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "Ao No Waltz"
  },
  {
      "AlbumID": 144,
      "ArtistID": 61,
      "FileName": "02 ヒューマノイド.m4a",
      "ID": 213,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "ヒューマノイド"
  },
  {
      "AlbumID": 149,
      "ArtistID": 62,
      "FileName": "02 ブレーメン.m4a",
      "ID": 214,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "ブレーメン"
  },
  {
      "AlbumID": 150,
      "ArtistID": 61,
      "FileName": "02 正しくなれない.m4a",
      "ID": 215,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "正しくなれない"
  },
  {
      "AlbumID": 145,
      "ArtistID": 61,
      "FileName": "02 残機.m4a",
      "ID": 216,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "残機"
  },
  {
      "AlbumID": 92,
      "ArtistID": 36,
      "FileName": "02. 明日はきっといい日になる feat. えみい.mp3",
      "ID": 217,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "明日はきっといい日になる feat. えみい"
  },
  {
      "AlbumID": 151,
      "ArtistID": 36,
      "FileName": "02.小さな恋のうた feat.七穂.mp3",
      "ID": 218,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "小さな恋のうた feat.七穂"
  },
  {
      "AlbumID": 64,
      "ArtistID": 27,
      "FileName": "03 Dramaturgy.m4a",
      "ID": 219,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "Dramaturgy"
  },
  {
      "AlbumID": 152,
      "ArtistID": 27,
      "FileName": "03 Raison Detre.m4a",
      "ID": 220,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "Raison Detre"
  },
  {
      "AlbumID": 62,
      "ArtistID": 27,
      "FileName": "03 Shinkai.m4a",
      "ID": 221,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "Shinkai"
  },
  {
      "AlbumID": 150,
      "ArtistID": 61,
      "FileName": "03 お勉強しといてよ.m4a",
      "ID": 222,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "お勉強しといてよ"
  },
  {
      "AlbumID": 153,
      "ArtistID": 62,
      "FileName": "03 言って。.m4a",
      "ID": 223,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "言って。"
  },
  {
      "AlbumID": 153,
      "ArtistID": 62,
      "FileName": "04 あの夏に咲け.m4a",
      "ID": 224,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "あの夏に咲け"
  },
  {
      "AlbumID": 154,
      "ArtistID": 62,
      "FileName": "04 ヒッチコック.m4a",
      "ID": 225,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "ヒッチコック"
  },
  {
      "AlbumID": 150,
      "ArtistID": 61,
      "FileName": "04 勘ぐれい.m4a",
      "ID": 226,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "勘ぐれい"
  },
  {
      "AlbumID": 155,
      "ArtistID": 36,
      "FileName": "04. Summer Love.mp3",
      "ID": 227,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "夏恋慕 (feat. 春茶)"
  },
  {
      "AlbumID": 91,
      "ArtistID": 36,
      "FileName": "04.さよならスマイル-Kobasolo.mp3",
      "ID": 228,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "Goodbye with a smile"
  },
  {
      "AlbumID": 64,
      "ArtistID": 27,
      "FileName": "05 Anoko secret.m4a",
      "ID": 229,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "Anoko secret"
  },
  {
      "AlbumID": 156,
      "ArtistID": 27,
      "FileName": "06 Heikousen.m4a",
      "ID": 230,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "Heikousen"
  },
  {
      "AlbumID": 145,
      "ArtistID": 61,
      "FileName": "06 あいつら全員同窓会.m4a",
      "ID": 231,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "あいつら全員同窓会"
  },
  {
      "AlbumID": 149,
      "ArtistID": 62,
      "FileName": "06 又三郎.m4a",
      "ID": 232,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "又三郎"
  },
  {
      "AlbumID": 155,
      "ArtistID": 36,
      "FileName": "06. ラブレター (feat. 春茶).mp3",
      "ID": 233,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "ラブレター (feat. 春茶)"
  },
  {
      "AlbumID": 157,
      "ArtistID": 36,
      "FileName": "06.あとひとつ feat.こぴ.mp3",
      "ID": 234,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "あとひとつ feat.こぴ"
  },
  {
      "AlbumID": 91,
      "ArtistID": 36,
      "FileName": "06.君さえいなけりゃ-Kobasolo.mp3",
      "ID": 235,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "I wish theres no you to be around"
  },
  {
      "AlbumID": 143,
      "ArtistID": 62,
      "FileName": "07 花人局.m4a",
      "ID": 236,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "花人局"
  },
  {
      "AlbumID": 153,
      "ArtistID": 62,
      "FileName": "07 雲と幽霊.m4a",
      "ID": 237,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "雲と幽霊"
  },
  {
      "AlbumID": 91,
      "ArtistID": 36,
      "FileName": "07.あなたのことが好きだなんて言えないんです。-Kobasolo.mp3",
      "ID": 238,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "I love you so much but I cant tell you"
  },
  {
      "AlbumID": 152,
      "ArtistID": 27,
      "FileName": "08 Kokoroyohou.m4a",
      "ID": 239,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "Kokoroyohou"
  },
  {
      "AlbumID": 150,
      "ArtistID": 61,
      "FileName": "08 MILABO.m4a",
      "ID": 240,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "MILABO"
  },
  {
      "AlbumID": 158,
      "ArtistID": 62,
      "FileName": "08 五月は花緑青の窓辺から.m4a",
      "ID": 241,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "五月は花緑青の窓辺から"
  },
  {
      "AlbumID": 159,
      "ArtistID": 60,
      "FileName": "08 青と夏.m4a",
      "ID": 242,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "青と夏"
  },
  {
      "AlbumID": 158,
      "ArtistID": 62,
      "FileName": "09 夜紛い.m4a",
      "ID": 243,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "夜紛い"
  },
  {
      "AlbumID": 151,
      "ArtistID": 36,
      "FileName": "09.HANABI feat.春茶.mp3",
      "ID": 244,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "HANABI feat.春茶"
  },
  {
      "AlbumID": 92,
      "ArtistID": 36,
      "FileName": "10. スパークル(movie ver.) feat. 春茶.mp3",
      "ID": 245,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "スパークル(movie ver.) feat. 春茶"
  },
  {
      "AlbumID": 160,
      "ArtistID": 63,
      "FileName": "10時の方角.mp3",
      "ID": 246,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "10時の方角"
  },
  {
      "AlbumID": 158,
      "ArtistID": 62,
      "FileName": "11 パレード.m4a",
      "ID": 247,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "パレード"
  },
  {
      "AlbumID": 135,
      "ArtistID": 58,
      "FileName": "115万キロのフィルム.mp3",
      "ID": 248,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "115万キロのフィルム"
  },
  {
      "AlbumID": 145,
      "ArtistID": 61,
      "FileName": "12 ミラーチューン.m4a",
      "ID": 249,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "ミラーチューン"
  },
  {
      "AlbumID": 159,
      "ArtistID": 60,
      "FileName": "12 ロマンチシズム.m4a",
      "ID": 250,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "ロマンチシズム"
  },
  {
      "AlbumID": 143,
      "ArtistID": 62,
      "FileName": "13 夜行.m4a",
      "ID": 251,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "夜行"
  },
  {
      "AlbumID": 158,
      "ArtistID": 62,
      "FileName": "14 だから僕は音楽を辞めた.m4a",
      "ID": 252,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "だから僕は音楽を辞めた"
  },
  {
      "AlbumID": 123,
      "ArtistID": 40,
      "FileName": "2FACE.mp3",
      "ID": 253,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "2FACE"
  },
  {
      "AlbumID": 161,
      "ArtistID": 64,
      "FileName": "7月の翼.mp3",
      "ID": 254,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "7月の翼"
  },
  {
      "AlbumID": 162,
      "ArtistID": 64,
      "FileName": "After Rain -Scarlet ver.-.mp3",
      "ID": 255,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "After Rain -Scarlet ver.-"
  },
  {
      "AlbumID": 103,
      "ArtistID": 37,
      "FileName": "Aitai.mp3",
      "ID": 256,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "Aitai"
  },
  {
      "AlbumID": 163,
      "ArtistID": 37,
      "FileName": "Anataga Kimeta Kyounara.mp3",
      "ID": 257,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "Anataga Kimeta Kyounara"
  },
  {
      "AlbumID": 116,
      "ArtistID": 37,
      "FileName": "Anatani Aenaku Naruhimade.mp3",
      "ID": 258,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "Anatani Aenaku Naruhimade"
  },
  {
      "AlbumID": 164,
      "ArtistID": 58,
      "FileName": "Apoptosis.mp3",
      "ID": 259,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "Apoptosis"
  },
  {
      "AlbumID": 165,
      "ArtistID": 37,
      "FileName": "Asahino Youna Kiss O Shite.mp3",
      "ID": 260,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "Asahino Youna Kiss O Shite"
  },
  {
      "AlbumID": 166,
      "ArtistID": 36,
      "FileName": "Ato Hitotsu feat. kopi.mp3",
      "ID": 261,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "Ato Hitotsu feat. kopi"
  },
  {
      "AlbumID": 107,
      "ArtistID": 37,
      "FileName": "Baby don't know why.mp3",
      "ID": 262,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "baby dont know why"
  },
  {
      "AlbumID": 103,
      "ArtistID": 37,
      "FileName": "Be alive.mp3",
      "ID": 263,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "be alive"
  },
  {
      "AlbumID": 167,
      "ArtistID": 37,
      "FileName": "Be... - World Sketch Star Piano Remix.mp3",
      "ID": 264,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "Be... - World Sketch Star Piano Remix"
  },
  {
      "AlbumID": 168,
      "ArtistID": 40,
      "FileName": "Beautiful.mp3",
      "ID": 265,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "Beautiful"
  },
  {
      "AlbumID": 169,
      "ArtistID": 64,
      "FileName": "Blind to you (Remaster for 星の消えた夜に 2022).mp3",
      "ID": 266,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "Blind to you (Remaster for 星の消えた夜に 2022)"
  },
  {
      "AlbumID": 170,
      "ArtistID": 27,
      "FileName": "Bokuramadaunderground.mp3",
      "ID": 267,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "Bokuramadaunderground"
  },
  {
      "AlbumID": 165,
      "ArtistID": 37,
      "FileName": "BRAVE.mp3",
      "ID": 268,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "BRAVE"
  },
  {
      "AlbumID": 108,
      "ArtistID": 65,
      "FileName": "BRIGHT - Ichinen Nikagetsu Hatsuka.mp3",
      "ID": 269,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "Ichinen Nikagetsu Hatsuka"
  },
  {
      "AlbumID": 103,
      "ArtistID": 37,
      "FileName": "Bye For Now.mp3",
      "ID": 270,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "Bye For Now"
  },
  {
      "AlbumID": 171,
      "ArtistID": 64,
      "FileName": "Calendar Girl.mp3",
      "ID": 271,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "Calendar Girl"
  },
  {
      "AlbumID": 101,
      "ArtistID": 40,
      "FileName": "CANDY.mp3",
      "ID": 272,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "CANDY"
  },
  {
      "AlbumID": 101,
      "ArtistID": 40,
      "FileName": "Chasin'.mp3",
      "ID": 273,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "Chasin"
  },
  {
      "AlbumID": 125,
      "ArtistID": 35,
      "FileName": "Chihiro - Yes.mp3",
      "ID": 274,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "Yes"
  },
  {
      "AlbumID": 172,
      "ArtistID": 36,
      "FileName": "Chiisana Koi no Uta.mp3",
      "ID": 275,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "Chiisana Koi no Uta"
  },
  {
      "AlbumID": 105,
      "ArtistID": 37,
      "FileName": "Cold Kiss.mp3",
      "ID": 276,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "Cold Kiss"
  },
  {
      "AlbumID": 99,
      "ArtistID": 37,
      "FileName": "Crescent Moon.mp3",
      "ID": 277,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "Crescent Moon"
  },
  {
      "AlbumID": 173,
      "ArtistID": 66,
      "FileName": "Crossing field.mp3",
      "ID": 278,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "crossing field"
  },
  {
      "AlbumID": 174,
      "ArtistID": 67,
      "FileName": "DADDY ! DADDY ! DO !.mp3",
      "ID": 279,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "DADDY ! DADDY ! DO !"
  },
  {
      "AlbumID": 169,
      "ArtistID": 64,
      "FileName": "Daisy.mp3",
      "ID": 280,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "Daisy (Remaster for 星の消えた夜に 2022)"
  },
  {
      "AlbumID": 123,
      "ArtistID": 40,
      "FileName": "Darlin’.mp3",
      "ID": 281,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "Darlin’"
  },
  {
      "AlbumID": 175,
      "ArtistID": 61,
      "FileName": "Dear Mr「F」.mp3",
      "ID": 282,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "Dear Mr「F」"
  },
  {
      "AlbumID": 176,
      "ArtistID": 68,
      "FileName": "DEAREST DROP.mp3",
      "ID": 283,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "DEAREST DROP"
  },
  {
      "AlbumID": 94,
      "ArtistID": 37,
      "FileName": "Desert.mp3",
      "ID": 284,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "Desert"
  },
  {
      "AlbumID": 168,
      "ArtistID": 40,
      "FileName": "Don't You Stop.mp3",
      "ID": 285,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "Dont You Stop"
  },
  {
      "AlbumID": 94,
      "ArtistID": 37,
      "FileName": "Epilogue.mp3",
      "ID": 286,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "Epilogue"
  },
  {
      "AlbumID": 160,
      "ArtistID": 63,
      "FileName": "Familia.mp3",
      "ID": 287,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "Familia"
  },
  {
      "AlbumID": 69,
      "ArtistID": 31,
      "FileName": "fiction blue.mp3",
      "ID": 288,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "fiction blue"
  },
  {
      "AlbumID": 109,
      "ArtistID": 37,
      "FileName": "Flyday Chinatown.mp3",
      "ID": 289,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "Flyday Chinatown"
  },
  {
      "AlbumID": 116,
      "ArtistID": 37,
      "FileName": "Footprint.mp3",
      "ID": 290,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "Footprint"
  },
  {
      "AlbumID": 103,
      "ArtistID": 37,
      "FileName": "Forget-me-not.mp3",
      "ID": 291,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "Forget-me-not"
  },
  {
      "AlbumID": 177,
      "ArtistID": 69,
      "FileName": "Fukashigi No Carte - Bunny Girl Senpai.mp3",
      "ID": 292,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "Fukashigi No Carte \"Bunny Girl Senpai\""
  },
  {
      "AlbumID": 178,
      "ArtistID": 70,
      "FileName": "Fukashigi no Carte.mp3",
      "ID": 293,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "Fukashigi no Carte"
  },
  {
      "AlbumID": 116,
      "ArtistID": 37,
      "FileName": "Fun Fun Christmas.mp3",
      "ID": 294,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "Fun Fun Christmas"
  },
  {
      "AlbumID": 101,
      "ArtistID": 40,
      "FileName": "Got A Feeling.mp3",
      "ID": 295,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "Got A Feeling"
  },
  {
      "AlbumID": 179,
      "ArtistID": 71,
      "FileName": "Go☆サマーガール.mp3",
      "ID": 296,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "Go☆サマーガール"
  },
  {
      "AlbumID": 180,
      "ArtistID": 72,
      "FileName": "grilletto.mp3",
      "ID": 297,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "grilletto"
  },
  {
      "AlbumID": 181,
      "ArtistID": 37,
      "FileName": "Hajimarino Toki.mp3",
      "ID": 298,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "Hajimarino Toki"
  },
  {
      "AlbumID": 116,
      "ArtistID": 37,
      "FileName": "Hana.mp3",
      "ID": 299,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "Hana"
  },
  {
      "AlbumID": 182,
      "ArtistID": 73,
      "FileName": "Happy encount.mp3",
      "ID": 300,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "Happy encount"
  },
  {
      "AlbumID": 110,
      "ArtistID": 37,
      "FileName": "Hatsukoi.mp3",
      "ID": 301,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "Hatsukoi"
  },
  {
      "AlbumID": 123,
      "ArtistID": 40,
      "FileName": "Heaven’s Door.mp3",
      "ID": 302,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "Heaven’s Door"
  },
  {
      "AlbumID": 183,
      "ArtistID": 74,
      "FileName": "Hello,world!.mp3",
      "ID": 303,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "Hello,world!"
  },
  {
      "AlbumID": 105,
      "ArtistID": 37,
      "FileName": "HELLO.mp3",
      "ID": 304,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "HELLO"
  },
  {
      "AlbumID": 184,
      "ArtistID": 75,
      "FileName": "Here.mp3",
      "ID": 305,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "Here"
  },
  {
      "AlbumID": 105,
      "ArtistID": 37,
      "FileName": "Heroes.mp3",
      "ID": 306,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "Heroes"
  },
  {
      "AlbumID": 105,
      "ArtistID": 37,
      "FileName": "I Remember You.mp3",
      "ID": 307,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "I Remember You"
  },
  {
      "AlbumID": 116,
      "ArtistID": 37,
      "FileName": "I'm ALIVE.mp3",
      "ID": 308,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "Im ALIVE"
  },
  {
      "AlbumID": 109,
      "ArtistID": 37,
      "FileName": "Ihoujin.mp3",
      "ID": 309,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "Ihoujin"
  },
  {
      "AlbumID": 182,
      "ArtistID": 73,
      "FileName": "inverted world.mp3",
      "ID": 310,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "inverted world"
  },
  {
      "AlbumID": 185,
      "ArtistID": 76,
      "FileName": "Is There Still Anything That Love Can Do.mp3",
      "ID": 311,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "Is There Still Anything That Love Can Do?"
  },
  {
      "AlbumID": 107,
      "ArtistID": 37,
      "FileName": "It's OK.mp3",
      "ID": 312,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "Its OK"
  },
  {
      "AlbumID": 186,
      "ArtistID": 30,
      "FileName": "It's okay to social misfit!.mp3",
      "ID": 313,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "Its okay to social misfit!"
  },
  {
      "AlbumID": 112,
      "ArtistID": 37,
      "FileName": "Itsumademo Kawaranu Aio.mp3",
      "ID": 314,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "Itsumademo Kawaranu Aio"
  },
  {
      "AlbumID": 187,
      "ArtistID": 63,
      "FileName": "Jasmine.mp3",
      "ID": 315,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "Jasmine"
  },
  {
      "AlbumID": 117,
      "ArtistID": 37,
      "FileName": "JEWEL.mp3",
      "ID": 316,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "JEWEL"
  },
  {
      "AlbumID": 188,
      "ArtistID": 30,
      "FileName": "Just disappear.mp3",
      "ID": 317,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "Just disappear"
  },
  {
      "AlbumID": 103,
      "ArtistID": 37,
      "FileName": "Kanade.mp3",
      "ID": 318,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "Kanade"
  },
  {
      "AlbumID": 108,
      "ArtistID": 77,
      "FileName": "Kie Kitano - Hazakura.mp3",
      "ID": 319,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "Kie Kitano - Hazakura"
  },
  {
      "AlbumID": 103,
      "ArtistID": 37,
      "FileName": "Kimiga Omoideni Narumaeni.mp3",
      "ID": 320,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "Kimiga Omoideni Narumaeni"
  },
  {
      "AlbumID": 123,
      "ArtistID": 40,
      "FileName": "KIRA☆KIRA☆.mp3",
      "ID": 321,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "KIRA☆KIRA☆"
  },
  {
      "AlbumID": 123,
      "ArtistID": 40,
      "FileName": "Kiss Kiss Kiss.mp3",
      "ID": 322,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "Kiss Kiss Kiss"
  },
  {
      "AlbumID": 91,
      "ArtistID": 36,
      "FileName": "KOI SEYO OTOME.mp3",
      "ID": 323,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "KOI SEYO OTOME"
  },
  {
      "AlbumID": 116,
      "ArtistID": 37,
      "FileName": "Kokoni Iruwa.mp3",
      "ID": 324,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "Kokoni Iruwa"
  },
  {
      "AlbumID": 103,
      "ArtistID": 37,
      "FileName": "Konomama Kimidakeo Ubaisaritai.mp3",
      "ID": 325,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "Konomama Kimidakeo Ubaisaritai"
  },
  {
      "AlbumID": 98,
      "ArtistID": 37,
      "FileName": "Konyadake Kitto.mp3",
      "ID": 326,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "Konyadake Kitto"
  },
  {
      "AlbumID": 189,
      "ArtistID": 78,
      "FileName": "Kuchizuke Diamond.mp3",
      "ID": 327,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "Kuchizuke Diamond"
  },
  {
      "AlbumID": 190,
      "ArtistID": 63,
      "FileName": "Lamp.mp3",
      "ID": 328,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "Lamp"
  },
  {
      "AlbumID": 103,
      "ArtistID": 37,
      "FileName": "let go.mp3",
      "ID": 329,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "let go"
  },
  {
      "AlbumID": 94,
      "ArtistID": 37,
      "FileName": "Little Car.mp3",
      "ID": 330,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "Little Car"
  },
  {
      "AlbumID": 191,
      "ArtistID": 63,
      "FileName": "Lovers.mp3",
      "ID": 331,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "Lovers"
  },
  {
      "AlbumID": 191,
      "ArtistID": 63,
      "FileName": "MAGIC.mp3",
      "ID": 332,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "MAGIC"
  },
  {
      "AlbumID": 112,
      "ArtistID": 37,
      "FileName": "Manatsuno Yono Yume.mp3",
      "ID": 333,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "Manatsuno Yono Yume"
  },
  {
      "AlbumID": 106,
      "ArtistID": 37,
      "FileName": "Mata Aeru Himade.mp3",
      "ID": 334,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "Mata Aeru Himade"
  },
  {
      "AlbumID": 110,
      "ArtistID": 37,
      "FileName": "MIDNIGHT PRETENDERS.mp3",
      "ID": 335,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "MIDNIGHT PRETENDERS"
  },
  {
      "AlbumID": 169,
      "ArtistID": 64,
      "FileName": "Mine (Remaster for 星の消えた夜に 2022).mp3",
      "ID": 336,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "Mine (Remaster for 星の消えた夜に 2022)"
  },
  {
      "AlbumID": 192,
      "ArtistID": 72,
      "FileName": "MIRAI.mp3",
      "ID": 337,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "MIRAI"
  },
  {
      "AlbumID": 193,
      "ArtistID": 50,
      "FileName": "Mirror.mp3",
      "ID": 338,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "Mirror"
  },
  {
      "AlbumID": 110,
      "ArtistID": 37,
      "FileName": "Momenno Handkerchief.mp3",
      "ID": 339,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "Momenno Handkerchief"
  },
  {
      "AlbumID": 194,
      "ArtistID": 71,
      "FileName": "monochrome.mp3",
      "ID": 340,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "monochrome"
  },
  {
      "AlbumID": 116,
      "ArtistID": 37,
      "FileName": "My Darling.mp3",
      "ID": 341,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "My Darling"
  },
  {
      "AlbumID": 169,
      "ArtistID": 64,
      "FileName": "my sweetest one (Remaster for 星の消えた夜に 2022).mp3",
      "ID": 342,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "my sweetest one (Remaster for 星の消えた夜に 2022)"
  },
  {
      "AlbumID": 115,
      "ArtistID": 37,
      "FileName": "My Way.mp3",
      "ID": 343,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "My Way"
  },
  {
      "AlbumID": 195,
      "ArtistID": 36,
      "FileName": "Natsurenbo.mp3",
      "ID": 344,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "Natsurenbo"
  },
  {
      "AlbumID": 196,
      "ArtistID": 37,
      "FileName": "NEWDAY.mp3",
      "ID": 345,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "NEWDAY"
  },
  {
      "AlbumID": 172,
      "ArtistID": 36,
      "FileName": "No.1.mp3",
      "ID": 346,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "No.1"
  },
  {
      "AlbumID": 109,
      "ArtistID": 37,
      "FileName": "Omoideno Sukuriin.mp3",
      "ID": 347,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "Omoideno Sukuriin"
  },
  {
      "AlbumID": 105,
      "ArtistID": 37,
      "FileName": "ONCE.mp3",
      "ID": 348,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "ONCE"
  },
  {
      "AlbumID": 106,
      "ArtistID": 37,
      "FileName": "One More Time.mp3",
      "ID": 349,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "One More Time"
  },
  {
      "AlbumID": 116,
      "ArtistID": 37,
      "FileName": "Perfect Boy.mp3",
      "ID": 350,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "Perfect Boy"
  },
  {
      "AlbumID": 197,
      "ArtistID": 58,
      "FileName": "Pretender.mp3",
      "ID": 351,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "Pretender"
  },
  {
      "AlbumID": 198,
      "ArtistID": 47,
      "FileName": "purest note 〜あたたかい音 - Ver. Strings Quartet.mp3",
      "ID": 352,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "purest note 〜あたたかい音 - Ver. Strings Quartet"
  },
  {
      "AlbumID": 125,
      "ArtistID": 35,
      "FileName": "RESET.mp3",
      "ID": 353,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "RESET"
  },
  {
      "AlbumID": 199,
      "ArtistID": 66,
      "FileName": "Rising Hope.mp3",
      "ID": 354,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "Rising Hope"
  },
  {
      "AlbumID": 200,
      "ArtistID": 79,
      "FileName": "Romance.mp3",
      "ID": 355,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "Romance"
  },
  {
      "AlbumID": 110,
      "ArtistID": 37,
      "FileName": "Roppongi Junjouha.mp3",
      "ID": 356,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "Roppongi Junjouha"
  },
  {
      "AlbumID": 103,
      "ArtistID": 37,
      "FileName": "Saigo No Ame.mp3",
      "ID": 357,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "Saigo No Ame"
  },
  {
      "AlbumID": 103,
      "ArtistID": 37,
      "FileName": "Saudade.mp3",
      "ID": 358,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "Saudade"
  },
  {
      "AlbumID": 167,
      "ArtistID": 37,
      "FileName": "Sayonara.mp3",
      "ID": 359,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "Sayonara"
  },
  {
      "AlbumID": 122,
      "ArtistID": 47,
      "FileName": "SELF PRODUCER.mp3",
      "ID": 360,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "SELF PRODUCER"
  },
  {
      "AlbumID": 201,
      "ArtistID": 63,
      "FileName": "Shake & Shake.mp3",
      "ID": 361,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "Shake & Shake"
  },
  {
      "AlbumID": 96,
      "ArtistID": 37,
      "FileName": "Shiawaseni Naritai.mp3",
      "ID": 362,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "Shiawaseni Naritai"
  },
  {
      "AlbumID": 202,
      "ArtistID": 31,
      "FileName": "SHOCK!.mp3",
      "ID": 363,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "SHOCK!"
  },
  {
      "AlbumID": 197,
      "ArtistID": 58,
      "FileName": "Shukumei.mp3",
      "ID": 364,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "Shukumei"
  },
  {
      "AlbumID": 116,
      "ArtistID": 37,
      "FileName": "Silent Tears.mp3",
      "ID": 365,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "Silent Tears"
  },
  {
      "AlbumID": 203,
      "ArtistID": 73,
      "FileName": "Sincerely.mp3",
      "ID": 366,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "Sincerely"
  },
  {
      "AlbumID": 79,
      "ArtistID": 34,
      "FileName": "Sleeping town.mp3",
      "ID": 367,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "Sleeping town"
  },
  {
      "AlbumID": 112,
      "ArtistID": 37,
      "FileName": "Sorato Kimino Aidani.mp3",
      "ID": 368,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "Sorato Kimino Aidani"
  },
  {
      "AlbumID": 204,
      "ArtistID": 76,
      "FileName": "Sparkle - Original Version.mp3",
      "ID": 369,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "Sparkle - Original Version"
  },
  {
      "AlbumID": 109,
      "ArtistID": 37,
      "FileName": "Stay With Me.mp3",
      "ID": 370,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "Stay With Me"
  },
  {
      "AlbumID": 116,
      "ArtistID": 37,
      "FileName": "Sunshine.mp3",
      "ID": 371,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "Sunshine"
  },
  {
      "AlbumID": 205,
      "ArtistID": 80,
      "FileName": "The Fog.mp3",
      "ID": 372,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "The Fog"
  },
  {
      "AlbumID": 96,
      "ArtistID": 37,
      "FileName": "There will be love there.mp3",
      "ID": 373,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "There will be love there"
  },
  {
      "AlbumID": 103,
      "ArtistID": 37,
      "FileName": "Ti Amo.mp3",
      "ID": 374,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "Ti Amo"
  },
  {
      "AlbumID": 112,
      "ArtistID": 37,
      "FileName": "TOMORROW.mp3",
      "ID": 375,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "TOMORROW"
  },
  {
      "AlbumID": 98,
      "ArtistID": 37,
      "FileName": "Tooku Tooku.mp3",
      "ID": 376,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "Tooku Tooku"
  },
  {
      "AlbumID": 206,
      "ArtistID": 30,
      "FileName": "Toy.mp3",
      "ID": 377,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "Toy"
  },
  {
      "AlbumID": 207,
      "ArtistID": 63,
      "FileName": "Traveling.mp3",
      "ID": 378,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "Traveling"
  },
  {
      "AlbumID": 94,
      "ArtistID": 37,
      "FileName": "True.mp3",
      "ID": 379,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "True"
  },
  {
      "AlbumID": 208,
      "ArtistID": 37,
      "FileName": "Umiwo Miteru.mp3",
      "ID": 380,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "Umiwo Miteru"
  },
  {
      "AlbumID": 164,
      "ArtistID": 58,
      "FileName": "Universe.mp3",
      "ID": 381,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "Universe"
  },
  {
      "AlbumID": 69,
      "ArtistID": 31,
      "FileName": "violeta.mp3",
      "ID": 382,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "violeta"
  },
  {
      "AlbumID": 208,
      "ArtistID": 37,
      "FileName": "WAY YOU ARE.mp3",
      "ID": 383,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "WAY YOU ARE"
  },
  {
      "AlbumID": 165,
      "ArtistID": 37,
      "FileName": "White Letter.mp3",
      "ID": 384,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "White Letter"
  },
  {
      "AlbumID": 209,
      "ArtistID": 37,
      "FileName": "Who Are You.mp3",
      "ID": 385,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "Who Are You"
  },
  {
      "AlbumID": 210,
      "ArtistID": 73,
      "FileName": "WILL.mp3",
      "ID": 386,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "WILL"
  },
  {
      "AlbumID": 197,
      "ArtistID": 58,
      "FileName": "Yesterday.mp3",
      "ID": 387,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "Yesterday"
  },
  {
      "AlbumID": 116,
      "ArtistID": 37,
      "FileName": "You are Beautiful.mp3",
      "ID": 388,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "You are Beautiful"
  },
  {
      "AlbumID": 211,
      "ArtistID": 55,
      "FileName": "you.mp3",
      "ID": 389,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "you"
  },
  {
      "AlbumID": 212,
      "ArtistID": 81,
      "FileName": "Yunomi  – はんぶんこ花火 .mp3",
      "ID": 390,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "Yunomi  – はんぶんこ花火"
  },
  {
      "AlbumID": 213,
      "ArtistID": 79,
      "FileName": "あの夢をなぞって.mp3",
      "ID": 391,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "あの夢をなぞって"
  },
  {
      "AlbumID": 120,
      "ArtistID": 47,
      "FileName": "いつだって青空.mp3",
      "ID": 392,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "いつだって青空"
  },
  {
      "AlbumID": 191,
      "ArtistID": 63,
      "FileName": "ここから見える景色.mp3",
      "ID": 393,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "ここから見える景色"
  },
  {
      "AlbumID": 214,
      "ArtistID": 46,
      "FileName": "さくら 〜あなたに出会えてよかった〜.mp3",
      "ID": 394,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "さくら 〜あなたに出会えてよかった〜"
  },
  {
      "AlbumID": 215,
      "ArtistID": 37,
      "FileName": "しあわせ.mp3",
      "ID": 395,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "しあわせ"
  },
  {
      "AlbumID": 123,
      "ArtistID": 40,
      "FileName": "ずっと二人で.mp3",
      "ID": 396,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "ずっと二人で"
  },
  {
      "AlbumID": 172,
      "ArtistID": 36,
      "FileName": "そっけない.mp3",
      "ID": 397,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "そっけない"
  },
  {
      "AlbumID": 154,
      "ArtistID": 62,
      "FileName": "ただ君に晴れ.mp3",
      "ID": 398,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "ただ君に晴れ"
  },
  {
      "AlbumID": 213,
      "ArtistID": 79,
      "FileName": "たぶん.mp3",
      "ID": 399,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "たぶん"
  },
  {
      "AlbumID": 216,
      "ArtistID": 55,
      "FileName": "ふたりきりルームシアター.mp3",
      "ID": 400,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "ふたりきりルームシアター"
  },
  {
      "AlbumID": 217,
      "ArtistID": 37,
      "FileName": "また君と.mp3",
      "ID": 401,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "また君と"
  },
  {
      "AlbumID": 200,
      "ArtistID": 79,
      "FileName": "もう少しだけ.mp3",
      "ID": 402,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "もう少しだけ"
  },
  {
      "AlbumID": 200,
      "ArtistID": 79,
      "FileName": "もしも命が描けたら.mp3",
      "ID": 403,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "もしも命が描けたら"
  },
  {
      "AlbumID": 218,
      "ArtistID": 47,
      "FileName": "アイアイ愛してるよ♡.mp3",
      "ID": 404,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "アイアイ愛してるよ♡"
  },
  {
      "AlbumID": 219,
      "ArtistID": 79,
      "FileName": "アイドル.mp3",
      "ID": 405,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "アイドル"
  },
  {
      "AlbumID": 219,
      "ArtistID": 79,
      "FileName": "アドベンチャー.mp3",
      "ID": 406,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "アドベンチャー"
  },
  {
      "AlbumID": 191,
      "ArtistID": 63,
      "FileName": "アネモネ.mp3",
      "ID": 407,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "アネモネ"
  },
  {
      "AlbumID": 213,
      "ArtistID": 79,
      "FileName": "アンコール.mp3",
      "ID": 408,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "アンコール"
  },
  {
      "AlbumID": 207,
      "ArtistID": 63,
      "FileName": "イコール.mp3",
      "ID": 409,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "イコール"
  },
  {
      "AlbumID": 220,
      "ArtistID": 81,
      "FileName": "インドア系ならトラックメイカー.mp3",
      "ID": 410,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "インドア系ならトラックメイカー"
  },
  {
      "AlbumID": 159,
      "ArtistID": 60,
      "FileName": "インフェルノ.mp3",
      "ID": 411,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "インフェルノ"
  },
  {
      "AlbumID": 221,
      "ArtistID": 63,
      "FileName": "エンドロール.mp3",
      "ID": 412,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "エンドロール"
  },
  {
      "AlbumID": 172,
      "ArtistID": 36,
      "FileName": "キセキ.mp3",
      "ID": 413,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "キセキ"
  },
  {
      "AlbumID": 222,
      "ArtistID": 3,
      "FileName": "キミと未来.mp3",
      "ID": 414,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "キミと未来"
  },
  {
      "AlbumID": 123,
      "ArtistID": 40,
      "FileName": "ギミギミ.mp3",
      "ID": 415,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "ギミギミ"
  },
  {
      "AlbumID": 218,
      "ArtistID": 47,
      "FileName": "シャラララ.mp3",
      "ID": 416,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "シャラララ"
  },
  {
      "AlbumID": 223,
      "ArtistID": 82,
      "FileName": "シュガーソングとビターステップ.mp3",
      "ID": 417,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "シュガーソングとビターステップ"
  },
  {
      "AlbumID": 205,
      "ArtistID": 80,
      "FileName": "シュガーロス.mp3",
      "ID": 418,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "シュガーロス"
  },
  {
      "AlbumID": 224,
      "ArtistID": 55,
      "FileName": "シンシアリー.mp3",
      "ID": 419,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "シンシアリー"
  },
  {
      "AlbumID": 212,
      "ArtistID": 81,
      "FileName": "ジェリーフィッシュ.mp3",
      "ID": 420,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "ジェリーフィッシュ (feat. ローラーガール)"
  },
  {
      "AlbumID": 225,
      "ArtistID": 55,
      "FileName": "セツナdays.mp3",
      "ID": 421,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "セツナdays"
  },
  {
      "AlbumID": 219,
      "ArtistID": 79,
      "FileName": "セブンティーン.mp3",
      "ID": 422,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "セブンティーン"
  },
  {
      "AlbumID": 221,
      "ArtistID": 63,
      "FileName": "センス・オブ・ワンダー.mp3",
      "ID": 423,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "センス・オブ・ワンダー"
  },
  {
      "AlbumID": 226,
      "ArtistID": 63,
      "FileName": "ソーダ.mp3",
      "ID": 424,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "ソーダ"
  },
  {
      "AlbumID": 200,
      "ArtistID": 79,
      "FileName": "ツバメ (feat. ミドリーズ).mp3",
      "ID": 425,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "ツバメ (feat. ミドリーズ)"
  },
  {
      "AlbumID": 227,
      "ArtistID": 55,
      "FileName": "ツーアウトロマンス.mp3",
      "ID": 426,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "ツーアウトロマンス"
  },
  {
      "AlbumID": 228,
      "ArtistID": 63,
      "FileName": "ナイトウォーカー.mp3",
      "ID": 427,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "ナイトウォーカー"
  },
  {
      "AlbumID": 205,
      "ArtistID": 80,
      "FileName": "ニゲラ.mp3",
      "ID": 428,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "ニゲラ"
  },
  {
      "AlbumID": 213,
      "ArtistID": 79,
      "FileName": "ハルカ.mp3",
      "ID": 429,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "ハルカ"
  },
  {
      "AlbumID": 213,
      "ArtistID": 79,
      "FileName": "ハルジオン.mp3",
      "ID": 430,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "ハルジオン"
  },
  {
      "AlbumID": 229,
      "ArtistID": 62,
      "FileName": "パレード.mp3",
      "ID": 431,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "パレード"
  },
  {
      "AlbumID": 225,
      "ArtistID": 55,
      "FileName": "ヒーロー・イン・ザ・ミラー.mp3",
      "ID": 432,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "ヒーロー・イン・ザ・ミラー"
  },
  {
      "AlbumID": 205,
      "ArtistID": 80,
      "FileName": "ビーユアセルフ.mp3",
      "ID": 433,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "ビーユアセルフ"
  },
  {
      "AlbumID": 160,
      "ArtistID": 63,
      "FileName": "ファンファーレ.mp3",
      "ID": 434,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "ファンファーレ"
  },
  {
      "AlbumID": 160,
      "ArtistID": 63,
      "FileName": "フィクション.mp3",
      "ID": 435,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "フィクション"
  },
  {
      "AlbumID": 230,
      "ArtistID": 73,
      "FileName": "フロム.mp3",
      "ID": 436,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "フロム"
  },
  {
      "AlbumID": 231,
      "ArtistID": 62,
      "FileName": "ブレーメン.mp3",
      "ID": 437,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "ブレーメン"
  },
  {
      "AlbumID": 232,
      "ArtistID": 64,
      "FileName": "ポラリス.mp3",
      "ID": 438,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "ポラリス"
  },
  {
      "AlbumID": 219,
      "ArtistID": 79,
      "FileName": "ミスター.mp3",
      "ID": 439,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "ミスター"
  },
  {
      "AlbumID": 233,
      "ArtistID": 47,
      "FileName": "ミラクルバング!.mp3",
      "ID": 440,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "ミラクルバング!"
  },
  {
      "AlbumID": 234,
      "ArtistID": 61,
      "FileName": "ミラーチューン.mp3",
      "ID": 441,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "ミラーチューン"
  },
  {
      "AlbumID": 123,
      "ArtistID": 40,
      "FileName": "ユラユラ.mp3",
      "ID": 442,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "ユラユラ"
  },
  {
      "AlbumID": 235,
      "ArtistID": 47,
      "FileName": "ラストカード.mp3",
      "ID": 443,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "ラストカード"
  },
  {
      "AlbumID": 205,
      "ArtistID": 80,
      "FileName": "ラブの逃走.mp3",
      "ID": 444,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "ラブの逃走"
  },
  {
      "AlbumID": 200,
      "ArtistID": 79,
      "FileName": "ラブレター.mp3",
      "ID": 445,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "ラブレター"
  },
  {
      "AlbumID": 236,
      "ArtistID": 63,
      "FileName": "リタルダンド.mp3",
      "ID": 446,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "リタルダンド"
  },
  {
      "AlbumID": 205,
      "ArtistID": 80,
      "FileName": "ロックでキス.mp3",
      "ID": 447,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "ロックでキス"
  },
  {
      "AlbumID": 237,
      "ArtistID": 37,
      "FileName": "ワインレッドの心.mp3",
      "ID": 448,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "ワインレッドの心"
  },
  {
      "AlbumID": 200,
      "ArtistID": 79,
      "FileName": "三原色.mp3",
      "ID": 449,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "三原色"
  },
  {
      "AlbumID": 198,
      "ArtistID": 47,
      "FileName": "会いたかった空 - Ver. Strings Quartet.mp3",
      "ID": 450,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "会いたかった空 - Ver. Strings Quartet"
  },
  {
      "AlbumID": 200,
      "ArtistID": 79,
      "FileName": "優しい彗星.mp3",
      "ID": 451,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "優しい彗星"
  },
  {
      "AlbumID": 238,
      "ArtistID": 83,
      "FileName": "光るなら.mp3",
      "ID": 452,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "光るなら"
  },
  {
      "AlbumID": 219,
      "ArtistID": 79,
      "FileName": "勇者.mp3",
      "ID": 453,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "勇者"
  },
  {
      "AlbumID": 139,
      "ArtistID": 62,
      "FileName": "又三郎.mp3",
      "ID": 454,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "又三郎"
  },
  {
      "AlbumID": 122,
      "ArtistID": 47,
      "FileName": "境界の彼方.mp3",
      "ID": 455,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "境界の彼方"
  },
  {
      "AlbumID": 213,
      "ArtistID": 79,
      "FileName": "夜に駆ける.mp3",
      "ID": 456,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "夜に駆ける"
  },
  {
      "AlbumID": 91,
      "ArtistID": 36,
      "FileName": "女性が歌うキセキGReeeeN青空エール主題歌 whiteeeen.mp3",
      "ID": 457,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "女性が歌うキセキGReeeeN青空エール主題歌 whiteeeen"
  },
  {
      "AlbumID": 91,
      "ArtistID": 36,
      "FileName": "女性が歌う高嶺の花子さんback number.mp3",
      "ID": 458,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "女性が歌う高嶺の花子さんback number"
  },
  {
      "AlbumID": 219,
      "ArtistID": 79,
      "FileName": "好きだ.mp3",
      "ID": 459,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "好きだ"
  },
  {
      "AlbumID": 91,
      "ArtistID": 36,
      "FileName": "好きな人かいることJY好きな人がいること主題歌.mp3",
      "ID": 460,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "好きな人かいることJY好きな人がいること主題歌"
  },
  {
      "AlbumID": 172,
      "ArtistID": 36,
      "FileName": "好きな人がいること.mp3",
      "ID": 461,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "好きな人がいること"
  },
  {
      "AlbumID": 239,
      "ArtistID": 55,
      "FileName": "好きになってよかったな.mp3",
      "ID": 462,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "好きになってよかったな"
  },
  {
      "AlbumID": 205,
      "ArtistID": 80,
      "FileName": "寄り酔い.mp3",
      "ID": 463,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "寄り酔い"
  },
  {
      "AlbumID": 131,
      "ArtistID": 31,
      "FileName": "幽霊東京.mp3",
      "ID": 464,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "幽霊東京"
  },
  {
      "AlbumID": 200,
      "ArtistID": 79,
      "FileName": "怪物.mp3",
      "ID": 465,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "怪物"
  },
  {
      "AlbumID": 122,
      "ArtistID": 47,
      "FileName": "恋.mp3",
      "ID": 466,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "恋"
  },
  {
      "AlbumID": 123,
      "ArtistID": 40,
      "FileName": "恋焦がれて.mp3",
      "ID": 467,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "恋焦がれて"
  },
  {
      "AlbumID": 240,
      "ArtistID": 62,
      "FileName": "晴る.mp3",
      "ID": 468,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "晴る"
  },
  {
      "AlbumID": 241,
      "ArtistID": 63,
      "FileName": "本音.mp3",
      "ID": 469,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "本音"
  },
  {
      "AlbumID": 123,
      "ArtistID": 40,
      "FileName": "歌うたいのバラッド.mp3",
      "ID": 470,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "歌うたいのバラッド"
  },
  {
      "AlbumID": 242,
      "ArtistID": 61,
      "FileName": "正しくなれない - From THE FIRST TAKE.mp3",
      "ID": 471,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "正しくなれない - From THE FIRST TAKE"
  },
  {
      "AlbumID": 243,
      "ArtistID": 40,
      "FileName": "永遠 - marriage ver.mp3",
      "ID": 472,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "永遠 - marriage ver."
  },
  {
      "AlbumID": 205,
      "ArtistID": 80,
      "FileName": "泡沫.mp3",
      "ID": 473,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "泡沫"
  },
  {
      "AlbumID": 219,
      "ArtistID": 79,
      "FileName": "海のまにまに.mp3",
      "ID": 474,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "海のまにまに"
  },
  {
      "AlbumID": 244,
      "ArtistID": 40,
      "FileName": "涙のキッス.mp3",
      "ID": 475,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "涙のキッス"
  },
  {
      "AlbumID": 132,
      "ArtistID": 56,
      "FileName": "白金ディスコ.mp3",
      "ID": 476,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "白金ディスコ"
  },
  {
      "AlbumID": 245,
      "ArtistID": 80,
      "FileName": "真っ裸.mp3",
      "ID": 477,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "真っ裸"
  },
  {
      "AlbumID": 246,
      "ArtistID": 63,
      "FileName": "祝祭.mp3",
      "ID": 478,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "祝祭"
  },
  {
      "AlbumID": 219,
      "ArtistID": 79,
      "FileName": "祝福.mp3",
      "ID": 479,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "祝福"
  },
  {
      "AlbumID": 192,
      "ArtistID": 72,
      "FileName": "約束 -Promise code.mp3",
      "ID": 480,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "約束 -Promise code-"
  },
  {
      "AlbumID": 247,
      "ArtistID": 80,
      "FileName": "絶頂讃歌.mp3",
      "ID": 481,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "絶頂讃歌"
  },
  {
      "AlbumID": 213,
      "ArtistID": 79,
      "FileName": "群青.mp3",
      "ID": 482,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "群青"
  },
  {
      "AlbumID": 248,
      "ArtistID": 62,
      "FileName": "花に亡霊.mp3",
      "ID": 483,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "花に亡霊"
  },
  {
      "AlbumID": 153,
      "ArtistID": 62,
      "FileName": "靴の花火.mp3",
      "ID": 484,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "靴の花火"
  },
  {
      "AlbumID": 249,
      "ArtistID": 63,
      "FileName": "願い.mp3",
      "ID": 485,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "願い"
  },
  {
      "AlbumID": 250,
      "ArtistID": 31,
      "FileName": "飽和.mp3",
      "ID": 486,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 5,
      "Title": "飽和"
  },
  {
      "AlbumID": 251,
      "ArtistID": 84,
      "FileName": "11 Giờ 11 Phút - Htrol Remix.mp3",
      "ID": 487,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 6,
      "Title": "11 Giờ 11 Phút - Htrol Remix"
  },
  {
      "AlbumID": 252,
      "ArtistID": 85,
      "FileName": "Against The Sun.mp3",
      "ID": 488,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 6,
      "Title": "Against The Sun"
  },
  {
      "AlbumID": 251,
      "ArtistID": 84,
      "FileName": "Anh đã lạc vào - Htrol Remix.mp3",
      "ID": 489,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 6,
      "Title": "Anh đã lạc vào - Htrol Remix"
  },
  {
      "AlbumID": 253,
      "ArtistID": 86,
      "FileName": "Anything Anymore.mp3",
      "ID": 490,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 6,
      "Title": "Anything Anymore"
  },
  {
      "AlbumID": 254,
      "ArtistID": 87,
      "FileName": "Anywhere I Go.mp3",
      "ID": 491,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 6,
      "Title": "Anywhere I Go"
  },
  {
      "AlbumID": 255,
      "ArtistID": 27,
      "FileName": "Are You Lonely.mp3",
      "ID": 492,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 6,
      "Title": "Are You Lonely"
  },
  {
      "AlbumID": 256,
      "ArtistID": 88,
      "FileName": "Beautiful Now.mp3",
      "ID": 493,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 6,
      "Title": "Beautiful Now"
  },
  {
      "AlbumID": 257,
      "ArtistID": 89,
      "FileName": "Body Back (feat. Maia Wright).mp3",
      "ID": 494,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 6,
      "Title": "Body Back (feat. Maia Wright)"
  },
  {
      "AlbumID": 258,
      "ArtistID": 6,
      "FileName": "Can't Wait.mp3",
      "ID": 495,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 6,
      "Title": "Cant Wait"
  },
  {
      "AlbumID": 251,
      "ArtistID": 84,
      "FileName": "Có Trăng Quên Đèn - Htrol Remix.mp3",
      "ID": 496,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 6,
      "Title": "Có Trăng Quên Đèn - Htrol Remix"
  },
  {
      "AlbumID": 259,
      "ArtistID": 16,
      "FileName": "DRUM GO DUM.mp3",
      "ID": 497,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 6,
      "Title": "DRUM GO DUM"
  },
  {
      "AlbumID": 251,
      "ArtistID": 84,
      "FileName": "Em là nhất miền Tây - Htrol Remix.mp3",
      "ID": 498,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 6,
      "Title": "Em là nhất miền Tây - Htrol Remix"
  },
  {
      "AlbumID": 260,
      "ArtistID": 15,
      "FileName": "End of Time.mp3",
      "ID": 499,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 6,
      "Title": "End of Time"
  },
  {
      "AlbumID": 22,
      "ArtistID": 15,
      "FileName": "Fade.mp3",
      "ID": 500,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 6,
      "Title": "Fade"
  },
  {
      "AlbumID": 261,
      "ArtistID": 90,
      "FileName": "Firebird.mp3",
      "ID": 501,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 6,
      "Title": "Firebird"
  },
  {
      "AlbumID": 22,
      "ArtistID": 15,
      "FileName": "Force.mp3",
      "ID": 502,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 6,
      "Title": "Force"
  },
  {
      "AlbumID": 262,
      "ArtistID": 91,
      "FileName": "Frame of Mind.mp3",
      "ID": 503,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 6,
      "Title": "Frame of Mind"
  },
  {
      "AlbumID": 263,
      "ArtistID": 16,
      "FileName": "GIANTS.mp3",
      "ID": 504,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 6,
      "Title": "GIANTS"
  },
  {
      "AlbumID": 264,
      "ArtistID": 16,
      "FileName": "GODS.mp3",
      "ID": 505,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 6,
      "Title": "GODS"
  },
  {
      "AlbumID": 265,
      "ArtistID": 92,
      "FileName": "Heart afire.mp3",
      "ID": 506,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 6,
      "Title": "heart afire"
  },
  {
      "AlbumID": 259,
      "ArtistID": 16,
      "FileName": "I'LL SHOW YOU.mp3",
      "ID": 507,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 6,
      "Title": "ILL SHOW YOU"
  },
  {
      "AlbumID": 266,
      "ArtistID": 88,
      "FileName": "Ignite - LOL.mp3",
      "ID": 508,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 6,
      "Title": "Ignite - 2016 League Of Legends World Championship"
  },
  {
      "AlbumID": 267,
      "ArtistID": 15,
      "FileName": "Ignite.mp3",
      "ID": 509,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 6,
      "Title": "Ignite"
  },
  {
      "AlbumID": 268,
      "ArtistID": 93,
      "FileName": "Inside the Lines.mp3",
      "ID": 510,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 6,
      "Title": "Inside the Lines"
  },
  {
      "AlbumID": 36,
      "ArtistID": 22,
      "FileName": "Jackpot.mp3",
      "ID": 511,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 6,
      "Title": "Jackpot"
  },
  {
      "AlbumID": 269,
      "ArtistID": 94,
      "FileName": "Justin Caruso - Talk About Me ft. Victoria Zaro (Leowi Remix).mp3",
      "ID": 512,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 6,
      "Title": "Justin Caruso - Talk About Me ft. Victoria Zaro (Leowi Remix)"
  },
  {
      "AlbumID": 269,
      "ArtistID": 94,
      "FileName": "K-391 & Diviners feat. Anna Yvette - City Of Gold.mp3",
      "ID": 513,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 6,
      "Title": "K-391 & Diviners feat. Anna Yvette - City Of Gold"
  },
  {
      "AlbumID": 270,
      "ArtistID": 95,
      "FileName": "Lights Go Down (Radio Mix) [feat. Curtains].mp3",
      "ID": 514,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 6,
      "Title": "Lights Go Down (Radio Mix) [feat. Curtains]"
  },
  {
      "AlbumID": 271,
      "ArtistID": 6,
      "FileName": "Linked.mp3",
      "ID": 515,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 6,
      "Title": "Linked"
  },
  {
      "AlbumID": 272,
      "ArtistID": 96,
      "FileName": "Lone Digger.mp3",
      "ID": 516,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 6,
      "Title": "Lone Digger"
  },
  {
      "AlbumID": 259,
      "ArtistID": 16,
      "FileName": "MORE.mp3",
      "ID": 517,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 6,
      "Title": "MORE"
  },
  {
      "AlbumID": 269,
      "ArtistID": 97,
      "FileName": "MORTEN - Beautiful Heartbeat (Deorro Remix).mp3",
      "ID": 518,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 6,
      "Title": "MORTEN - Beautiful Heartbeat (Deorro Remix)"
  },
  {
      "AlbumID": 273,
      "ArtistID": 15,
      "FileName": "Move Your Body - Alan Walker Remix.mp3",
      "ID": 519,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 6,
      "Title": "Move Your Body - Alan Walker Remix"
  },
  {
      "AlbumID": 274,
      "ArtistID": 17,
      "FileName": "Nen Va Hoa - SONBEAT REMIX.mp3",
      "ID": 520,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 6,
      "Title": "Nen Va Hoa - SONBEAT REMIX"
  },
  {
      "AlbumID": 275,
      "ArtistID": 98,
      "FileName": "Never Coming Home.mp3",
      "ID": 521,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 6,
      "Title": "Never Coming Home (feat. Kinley)"
  },
  {
      "AlbumID": 276,
      "ArtistID": 99,
      "FileName": "Nightcore - Angel.mp3",
      "ID": 522,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 6,
      "Title": "Nightcore - Angel"
  },
  {
      "AlbumID": 276,
      "ArtistID": 99,
      "FileName": "Nightcore - Army Of Two.mp3",
      "ID": 523,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 6,
      "Title": "Nightcore - Army Of Two"
  },
  {
      "AlbumID": 276,
      "ArtistID": 99,
      "FileName": "Nightcore - Blackout.mp3",
      "ID": 524,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 6,
      "Title": "Nightcore - Blackout"
  },
  {
      "AlbumID": 276,
      "ArtistID": 99,
      "FileName": "Nightcore - Catch Fire.mp3",
      "ID": 525,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 6,
      "Title": "Nightcore - Catch Fire"
  },
  {
      "AlbumID": 276,
      "ArtistID": 99,
      "FileName": "Nightcore - Counting Stars.mp3",
      "ID": 526,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 6,
      "Title": "Nightcore - Counting Stars"
  },
  {
      "AlbumID": 276,
      "ArtistID": 99,
      "FileName": "Nightcore - Disconnected.mp3",
      "ID": 527,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 6,
      "Title": "Nightcore - Disconnected"
  },
  {
      "AlbumID": 276,
      "ArtistID": 99,
      "FileName": "Nightcore - Fireflies (Remix).mp3",
      "ID": 528,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 6,
      "Title": "Nightcore - Fireflies (Remix)"
  },
  {
      "AlbumID": 276,
      "ArtistID": 99,
      "FileName": "Nightcore - Glad You Came.mp3",
      "ID": 529,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 6,
      "Title": "Nightcore - Glad You Came"
  },
  {
      "AlbumID": 276,
      "ArtistID": 99,
      "FileName": "Nightcore - Hey Devil.mp3",
      "ID": 530,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 6,
      "Title": "Nightcore - Hey Devil"
  },
  {
      "AlbumID": 276,
      "ArtistID": 99,
      "FileName": "Nightcore - How To Be A Heartbreaker.mp3",
      "ID": 531,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 6,
      "Title": "Nightcore - How To Be A Heartbreaker"
  },
  {
      "AlbumID": 276,
      "ArtistID": 99,
      "FileName": "Nightcore - I Like It Loud.mp3",
      "ID": 532,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 6,
      "Title": "Nightcore - I Like It Loud"
  },
  {
      "AlbumID": 276,
      "ArtistID": 99,
      "FileName": "Nightcore - I'm Not Here For Your Entertainment.mp3",
      "ID": 533,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 6,
      "Title": "Nightcore - Im Not Here For Your Entertainment"
  },
  {
      "AlbumID": 276,
      "ArtistID": 99,
      "FileName": "Nightcore - My Demons.mp3",
      "ID": 534,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 6,
      "Title": "Nightcore - My Demons"
  },
  {
      "AlbumID": 276,
      "ArtistID": 99,
      "FileName": "Nightcore - Run.mp3",
      "ID": 535,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 6,
      "Title": "Nightcore - Run"
  },
  {
      "AlbumID": 276,
      "ArtistID": 99,
      "FileName": "Nightcore - Soldier.mp3",
      "ID": 536,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 6,
      "Title": "Nightcore - Soldier"
  },
  {
      "AlbumID": 276,
      "ArtistID": 99,
      "FileName": "Nightcore - Start A Fire.mp3",
      "ID": 537,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 6,
      "Title": "Nightcore - Start A Fire"
  },
  {
      "AlbumID": 276,
      "ArtistID": 99,
      "FileName": "Nightcore - Stay the Night.mp3",
      "ID": 538,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 6,
      "Title": "Nightcore - Stay the Night"
  },
  {
      "AlbumID": 276,
      "ArtistID": 99,
      "FileName": "Nightcore - Stay.mp3",
      "ID": 539,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 6,
      "Title": "Nightcore - Stay"
  },
  {
      "AlbumID": 276,
      "ArtistID": 99,
      "FileName": "Nightcore - The Nights.mp3",
      "ID": 540,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 6,
      "Title": "Nightcore - The Nights"
  },
  {
      "AlbumID": 276,
      "ArtistID": 99,
      "FileName": "Nightcore - The Phoenix.mp3",
      "ID": 541,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 6,
      "Title": "Nightcore - The Phoenix"
  },
  {
      "AlbumID": 276,
      "ArtistID": 99,
      "FileName": "Nightcore - Windows Down.mp3",
      "ID": 542,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 6,
      "Title": "Nightcore - Windows Down"
  },
  {
      "AlbumID": 277,
      "ArtistID": 87,
      "FileName": "Nothing Stopping Me.mp3",
      "ID": 543,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 6,
      "Title": "Nothing Stopping Me"
  },
  {
      "AlbumID": 278,
      "ArtistID": 100,
      "FileName": "Numb (feat. Johnning).mp3",
      "ID": 544,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 6,
      "Title": "Numb (feat. Johnning)"
  },
  {
      "AlbumID": 279,
      "ArtistID": 101,
      "FileName": "On the Line.mp3",
      "ID": 545,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 6,
      "Title": "On the Line"
  },
  {
      "AlbumID": 280,
      "ArtistID": 102,
      "FileName": "Our Story - Radio Edit.mp3",
      "ID": 546,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 6,
      "Title": "Our Story - Radio Edit"
  },
  {
      "AlbumID": 281,
      "ArtistID": 103,
      "FileName": "Phoenix.mp3",
      "ID": 547,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 6,
      "Title": "Phoenix"
  },
  {
      "AlbumID": 282,
      "ArtistID": 15,
      "FileName": "Play.mp3",
      "ID": 548,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 6,
      "Title": "Play"
  },
  {
      "AlbumID": 283,
      "ArtistID": 16,
      "FileName": "POP_STARS.mp3",
      "ID": 549,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 6,
      "Title": "POP-STARS"
  },
  {
      "AlbumID": 284,
      "ArtistID": 85,
      "FileName": "Red Line.mp3",
      "ID": 550,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 6,
      "Title": "Red Line"
  },
  {
      "AlbumID": 285,
      "ArtistID": 104,
      "FileName": "Rhymastic - Yêu 5 Remix.mp3",
      "ID": 551,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 6,
      "Title": "Rhymastic - Yêu 5 Remix"
  },
  {
      "AlbumID": 286,
      "ArtistID": 16,
      "FileName": "RISE.mp3",
      "ID": 552,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 6,
      "Title": "RISE"
  },
  {
      "AlbumID": 287,
      "ArtistID": 105,
      "FileName": "Robot Love.mp3",
      "ID": 553,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 6,
      "Title": "Robot Love"
  },
  {
      "AlbumID": 288,
      "ArtistID": 106,
      "FileName": "Saving Light.mp3",
      "ID": 554,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 6,
      "Title": "Saving Light"
  },
  {
      "AlbumID": 289,
      "ArtistID": 102,
      "FileName": "Smoke Filled Room.mp3",
      "ID": 555,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 6,
      "Title": "Smoke Filled Room"
  },
  {
      "AlbumID": 290,
      "ArtistID": 107,
      "FileName": "Start Again.mp3",
      "ID": 556,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 6,
      "Title": "Start Again"
  },
  {
      "AlbumID": 291,
      "ArtistID": 108,
      "FileName": "Summer Air.mp3",
      "ID": 557,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 6,
      "Title": "Summer Air"
  },
  {
      "AlbumID": 292,
      "ArtistID": 109,
      "FileName": "Surrender.mp3",
      "ID": 558,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 6,
      "Title": "Surrender"
  },
  {
      "AlbumID": 259,
      "ArtistID": 16,
      "FileName": "THE BADDEST.mp3",
      "ID": 559,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 6,
      "Title": "THE BADDEST"
  },
  {
      "AlbumID": 293,
      "ArtistID": 15,
      "FileName": "The Spectre.mp3",
      "ID": 560,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 6,
      "Title": "The Spectre"
  },
  {
      "AlbumID": 294,
      "ArtistID": 110,
      "FileName": "Thunder.mp3",
      "ID": 561,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 6,
      "Title": "Thunder"
  },
  {
      "AlbumID": 295,
      "ArtistID": 91,
      "FileName": "Till It's Over.mp3",
      "ID": 562,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 6,
      "Title": "Till Its Over"
  },
  {
      "AlbumID": 296,
      "ArtistID": 111,
      "FileName": "Untouchable.mp3",
      "ID": 563,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 6,
      "Title": "Untouchable"
  },
  {
      "AlbumID": 259,
      "ArtistID": 16,
      "FileName": "VILLAIN.mp3",
      "ID": 564,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 6,
      "Title": "VILLAIN"
  },
  {
      "AlbumID": 269,
      "ArtistID": 94,
      "FileName": "Virtual Riot - Idols.mp3",
      "ID": 565,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 6,
      "Title": "Virtual Riot - Idols"
  },
  {
      "AlbumID": 297,
      "ArtistID": 87,
      "FileName": "Walk Thru Fire.mp3",
      "ID": 566,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 6,
      "Title": "Walk Thru Fire"
  },
  {
      "AlbumID": 298,
      "ArtistID": 112,
      "FileName": "Without You (feat. Sandro Cavazza).mp3",
      "ID": 567,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 6,
      "Title": "Without You (feat. Sandro Cavazza)"
  },
  {
      "AlbumID": 299,
      "ArtistID": 113,
      "FileName": "Anh Sai Rồi.mp3",
      "ID": 568,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 7,
      "Title": "Anh Sai Rồi"
  },
  {
      "AlbumID": 300,
      "ArtistID": 114,
      "FileName": "Anh Đã Quen Với Cô Đơn.mp3",
      "ID": 569,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 7,
      "Title": "Anh Đã Quen Với Cô Đơn"
  },
  {
      "AlbumID": 301,
      "ArtistID": 115,
      "FileName": "Bloom.mp3",
      "ID": 570,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 7,
      "Title": "Bloom"
  },
  {
      "AlbumID": 299,
      "ArtistID": 113,
      "FileName": "Buông Đôi Tay Nhau Ra.mp3",
      "ID": 571,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 7,
      "Title": "Buông Đôi Tay Nhau Ra"
  },
  {
      "AlbumID": 302,
      "ArtistID": 116,
      "FileName": "Bức Tranh Từ Nước Mắt.mp3",
      "ID": 572,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 7,
      "Title": "Bức Tranh Từ Nước Mắt"
  },
  {
      "AlbumID": 303,
      "ArtistID": 116,
      "FileName": "Chạm Đáy Nỗi Đau - Piano Version.mp3",
      "ID": 573,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 7,
      "Title": "Chạm Đáy Nỗi Đau - Piano Version"
  },
  {
      "AlbumID": 304,
      "ArtistID": 116,
      "FileName": "Chạm Đáy Nỗi Đau.mp3",
      "ID": 574,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 7,
      "Title": "Chạm Đáy Nỗi Đau"
  },
  {
      "AlbumID": 299,
      "ArtistID": 113,
      "FileName": "Chắc Ai Đó Sẽ Về.mp3",
      "ID": 575,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 7,
      "Title": "Chắc Ai Đó Sẽ Về"
  },
  {
      "AlbumID": 305,
      "ArtistID": 116,
      "FileName": "Càng Níu Giữ Càng Dễ Mất.mp3",
      "ID": 576,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 7,
      "Title": "Càng Níu Giữ Càng Dễ Mất"
  },
  {
      "AlbumID": 306,
      "ArtistID": 117,
      "FileName": "Có hẹn với thanh xuân.mp3",
      "ID": 577,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 7,
      "Title": "có hẹn với thanh xuân"
  },
  {
      "AlbumID": 307,
      "ArtistID": 118,
      "FileName": "Cảm Giác Lúc Ấy Sẽ Ra Sao.mp3",
      "ID": 578,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 7,
      "Title": "Cảm Giác Lúc Ấy Sẽ Ra Sao"
  },
  {
      "AlbumID": 308,
      "ArtistID": 116,
      "FileName": "Day Dứt Nỗi Đau.mp3",
      "ID": 579,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 7,
      "Title": "Day Dứt Nỗi Đau"
  },
  {
      "AlbumID": 309,
      "ArtistID": 116,
      "FileName": "Dưới Những Cơn Mưa.mp3",
      "ID": 580,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 7,
      "Title": "Dưới Những Cơn Mưa"
  },
  {
      "AlbumID": 303,
      "ArtistID": 116,
      "FileName": "Em Gái Mưa - Piano Version.mp3",
      "ID": 581,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 7,
      "Title": "Em Gái Mưa - Piano Version"
  },
  {
      "AlbumID": 310,
      "ArtistID": 117,
      "FileName": "Em Đã Biết.mp3",
      "ID": 582,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 7,
      "Title": "Em Đã Biết"
  },
  {
      "AlbumID": 311,
      "ArtistID": 116,
      "FileName": "Gương Mặt Lạ Lẫm.mp3",
      "ID": 583,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 7,
      "Title": "Gương Mặt Lạ Lẫm"
  },
  {
      "AlbumID": 312,
      "ArtistID": 119,
      "FileName": "I Do.mp3",
      "ID": 584,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 7,
      "Title": "I Do"
  },
  {
      "AlbumID": 313,
      "ArtistID": 120,
      "FileName": "Khi Người Lớn Cô Đơn.mp3",
      "ID": 585,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 7,
      "Title": "Khi Người Lớn Cô Đơn"
  },
  {
      "AlbumID": 314,
      "ArtistID": 116,
      "FileName": "Không Cần Thêm Một Ai Nữa.mp3",
      "ID": 586,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 7,
      "Title": "Không Cần Thêm Một Ai Nữa"
  },
  {
      "AlbumID": 315,
      "ArtistID": 117,
      "FileName": "Không Sao Mà, Em Đây Rồi.mp3",
      "ID": 587,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 7,
      "Title": "Không Sao Mà, Em Đây Rồi"
  },
  {
      "AlbumID": 269,
      "ArtistID": 94,
      "FileName": "Madilyn Paige - I'm Yours - Perfect Two.mp3",
      "ID": 588,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 7,
      "Title": "Madilyn Paige - Im Yours - Perfect Two"
  },
  {
      "AlbumID": 316,
      "ArtistID": 121,
      "FileName": "Memories.mp3",
      "ID": 589,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 7,
      "Title": "Memories"
  },
  {
      "AlbumID": 317,
      "ArtistID": 118,
      "FileName": "Mình Là Gì Của Nhau.mp3",
      "ID": 590,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 7,
      "Title": "Mình Là Gì Của Nhau"
  },
  {
      "AlbumID": 318,
      "ArtistID": 116,
      "FileName": "Một Bước Yêu Vạn Dặm Đau.mp3",
      "ID": 591,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 7,
      "Title": "Một Bước Yêu Vạn Dặm Đau"
  },
  {
      "AlbumID": 319,
      "ArtistID": 122,
      "FileName": "Một Nhà.mp3",
      "ID": 592,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 7,
      "Title": "Một Nhà"
  },
  {
      "AlbumID": 320,
      "ArtistID": 123,
      "FileName": "Người Đáng Thương Là Anh.mp3",
      "ID": 593,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 7,
      "Title": "Người Đáng Thương Là Anh"
  },
  {
      "AlbumID": 321,
      "ArtistID": 124,
      "FileName": "Người Ấy.mp3",
      "ID": 594,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 7,
      "Title": "Người Ấy"
  },
  {
      "AlbumID": 276,
      "ArtistID": 99,
      "FileName": "Nightcore - Hometown Smile.mp3",
      "ID": 595,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 7,
      "Title": "Nightcore - Hometown Smile"
  },
  {
      "AlbumID": 276,
      "ArtistID": 99,
      "FileName": "Nightcore - I See Your Monsters.mp3",
      "ID": 596,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 7,
      "Title": "Nightcore - I See Your Monsters"
  },
  {
      "AlbumID": 276,
      "ArtistID": 99,
      "FileName": "Nightcore - If I Die Young.mp3",
      "ID": 597,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 7,
      "Title": "Nightcore - If I Die Young"
  },
  {
      "AlbumID": 276,
      "ArtistID": 99,
      "FileName": "Nightcore - Let Me Love You.mp3",
      "ID": 598,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 7,
      "Title": "Nightcore - Let Me Love You"
  },
  {
      "AlbumID": 276,
      "ArtistID": 99,
      "FileName": "Nightcore - Locked Away.mp3",
      "ID": 599,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 7,
      "Title": "Nightcore - Locked Away"
  },
  {
      "AlbumID": 276,
      "ArtistID": 99,
      "FileName": "Nightcore - Mine.mp3",
      "ID": 600,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 7,
      "Title": "Nightcore - Mine"
  },
  {
      "AlbumID": 276,
      "ArtistID": 99,
      "FileName": "Nightcore - New Day.mp3",
      "ID": 601,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 7,
      "Title": "Nightcore - New Day"
  },
  {
      "AlbumID": 276,
      "ArtistID": 99,
      "FileName": "Nightcore - Sakura.mp3",
      "ID": 602,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 7,
      "Title": "Nightcore - Sakura"
  },
  {
      "AlbumID": 276,
      "ArtistID": 99,
      "FileName": "Nightcore - Say I Love You.mp3",
      "ID": 603,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 7,
      "Title": "Nightcore - Say I Love You"
  },
  {
      "AlbumID": 276,
      "ArtistID": 99,
      "FileName": "Nightcore - Still Here.mp3",
      "ID": 604,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 7,
      "Title": "Nightcore - Still Here"
  },
  {
      "AlbumID": 276,
      "ArtistID": 99,
      "FileName": "Nightcore - Try.mp3",
      "ID": 605,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 7,
      "Title": "Nightcore - Try"
  },
  {
      "AlbumID": 276,
      "ArtistID": 99,
      "FileName": "Nightcore - Where Is The Love.mp3",
      "ID": 606,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 7,
      "Title": "Nightcore - Where Is The Love"
  },
  {
      "AlbumID": 322,
      "ArtistID": 114,
      "FileName": "Nếu Ngày Ấy.mp3",
      "ID": 607,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 7,
      "Title": "Nếu Ngày Ấy"
  },
  {
      "AlbumID": 323,
      "ArtistID": 125,
      "FileName": "One Call Away.mp3",
      "ID": 608,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 7,
      "Title": "One Call Away"
  },
  {
      "AlbumID": 324,
      "ArtistID": 126,
      "FileName": "PHIEU BE NGOAN 2 - FOE TEAM.mp3",
      "ID": 609,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 7,
      "Title": "PHIEU BE NGOAN 2 - FOE TEAM"
  },
  {
      "AlbumID": 325,
      "ArtistID": 114,
      "FileName": "Phía Sau Một Cô Gái.mp3",
      "ID": 610,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 7,
      "Title": "Phía Sau Một Cô Gái"
  },
  {
      "AlbumID": 326,
      "ArtistID": 127,
      "FileName": "Sau Tất Cả Erik.mp3",
      "ID": 611,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 7,
      "Title": "Sau Tất Cả"
  },
  {
      "AlbumID": 327,
      "ArtistID": 124,
      "FileName": "Tâm Sự Tuổi 30.mp3",
      "ID": 612,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 7,
      "Title": "Tâm Sự Tuổi 30"
  },
  {
      "AlbumID": 328,
      "ArtistID": 116,
      "FileName": "Tìm Được Nhau Khó Thế Nào.mp3",
      "ID": 613,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 7,
      "Title": "Tìm Được Nhau Khó Thế Nào"
  },
  {
      "AlbumID": 329,
      "ArtistID": 116,
      "FileName": "Tình Yêu Chắp Vá.mp3",
      "ID": 614,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 7,
      "Title": "Tình Yêu Chắp Vá"
  },
  {
      "AlbumID": 330,
      "ArtistID": 116,
      "FileName": "Tự Lau Nước Mắt.mp3",
      "ID": 615,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 7,
      "Title": "Tự Lau Nước Mắt"
  },
  {
      "AlbumID": 331,
      "ArtistID": 126,
      "FileName": "V.I.E.T Underground - Forever Love.mp3",
      "ID": 616,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 7,
      "Title": "V.I.E.T Underground - Forever Love"
  },
  {
      "AlbumID": 323,
      "ArtistID": 125,
      "FileName": "We Don't Talk Anymore.mp3",
      "ID": 617,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 7,
      "Title": "We Dont Talk Anymore (feat. Selena Gomez)"
  },
  {
      "AlbumID": 285,
      "ArtistID": 104,
      "FileName": "Yêu 5.mp3",
      "ID": 618,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 7,
      "Title": "Yêu 5"
  },
  {
      "AlbumID": 332,
      "ArtistID": 123,
      "FileName": "Yêu Là Tha Thứ.mp3",
      "ID": 619,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 7,
      "Title": "Yêu Là Tha Thứ"
  },
  {
      "AlbumID": 333,
      "ArtistID": 123,
      "FileName": "Yêu Đơn Phương.mp3",
      "ID": 620,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 7,
      "Title": "Yêu Đơn Phương"
  },
  {
      "AlbumID": 299,
      "ArtistID": 113,
      "FileName": "Âm Thầm Bên Em.mp3",
      "ID": 621,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 7,
      "Title": "Âm Thầm Bên Em"
  },
  {
      "AlbumID": 334,
      "ArtistID": 123,
      "FileName": "Đau Để Trưởng Thành.mp3",
      "ID": 622,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 7,
      "Title": "Đau Để Trưởng Thành"
  },
  {
      "AlbumID": 335,
      "ArtistID": 114,
      "FileName": "Đi Để Trở Về.mp3",
      "ID": 623,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 7,
      "Title": "Đi Để Trở Về"
  },
  {
      "AlbumID": 299,
      "ArtistID": 113,
      "FileName": "Ấn Nút Nhớ... Thả Giấc Mơ.mp3",
      "ID": 624,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 7,
      "Title": "Ấn Nút Nhớ... Thả Giấc Mơ"
  },
  {
      "AlbumID": 336,
      "ArtistID": 15,
      "FileName": "All Falls Down (feat. Juliander).mp3",
      "ID": 625,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "All Falls Down (feat. Juliander)"
  },
  {
      "AlbumID": 337,
      "ArtistID": 15,
      "FileName": "Alone, Pt. II.mp3",
      "ID": 626,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Alone, Pt. II"
  },
  {
      "AlbumID": 338,
      "ArtistID": 15,
      "FileName": "Alone.mp3",
      "ID": 627,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Alone"
  },
  {
      "AlbumID": 339,
      "ArtistID": 123,
      "FileName": "Anh Không Đòi Quà.mp3",
      "ID": 628,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Anh Không Đòi Quà"
  },
  {
      "AlbumID": 340,
      "ArtistID": 123,
      "FileName": "Anh Đã Sai.mp3",
      "ID": 629,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Anh Đã Sai"
  },
  {
      "AlbumID": 341,
      "ArtistID": 125,
      "FileName": "Attention.mp3",
      "ID": 630,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Attention"
  },
  {
      "AlbumID": 342,
      "ArtistID": 128,
      "FileName": "Beautiful Creatures (feat. MAX).mp3",
      "ID": 631,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Beautiful Creatures (feat. MAX)"
  },
  {
      "AlbumID": 251,
      "ArtistID": 84,
      "FileName": "Buồn Lắm Em Ơi - Htrol Remix.mp3",
      "ID": 632,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Buồn Lắm Em Ơi - Htrol Remix"
  },
  {
      "AlbumID": 343,
      "ArtistID": 129,
      "FileName": "By My Side.mp3",
      "ID": 633,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "By My Side"
  },
  {
      "AlbumID": 344,
      "ArtistID": 89,
      "FileName": "Bye Bye.mp3",
      "ID": 634,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Bye Bye (feat. Ivy Adara)"
  },
  {
      "AlbumID": 251,
      "ArtistID": 84,
      "FileName": "Bán Duyên - Htrol Remix.mp3",
      "ID": 635,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Bán Duyên - Htrol Remix"
  },
  {
      "AlbumID": 251,
      "ArtistID": 84,
      "FileName": "Bạn Tình Ơi 3 - Htrol Remix.mp3",
      "ID": 636,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Bạn Tình Ơi 3 - Htrol Remix"
  },
  {
      "AlbumID": 251,
      "ArtistID": 84,
      "FileName": "Bỏ Phật Nhập Ma - Htrol Remix.mp3",
      "ID": 637,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Bỏ Phật Nhập Ma - Htrol Remix"
  },
  {
      "AlbumID": 343,
      "ArtistID": 129,
      "FileName": "Carousel.mp3",
      "ID": 638,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Carousel"
  },
  {
      "AlbumID": 345,
      "ArtistID": 130,
      "FileName": "Cause I Love You.mp3",
      "ID": 639,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Cause I Love You"
  },
  {
      "AlbumID": 251,
      "ArtistID": 84,
      "FileName": "China - Anh Mỉm Cười Trông Thật Đẹp - Htrol Remix.mp3",
      "ID": 640,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "China - Anh Mỉm Cười Trông Thật Đẹp - Htrol Remix"
  },
  {
      "AlbumID": 251,
      "ArtistID": 84,
      "FileName": "China - Anh đi vội vàng hơn cả tình yêu - Htrol Remix.mp3",
      "ID": 641,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Anh đi vội vàng hơn cả tình yêu - Htrol Remix"
  },
  {
      "AlbumID": 251,
      "ArtistID": 84,
      "FileName": "China - Bách Hoa Hương - Htrol Remix.mp3",
      "ID": 642,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "China - Bách Hoa Hương - Htrol Remix"
  },
  {
      "AlbumID": 251,
      "ArtistID": 84,
      "FileName": "China - Hồng Nhan Xưa - Htrol Remix.mp3",
      "ID": 643,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "China - Hồng Nhan Xưa - Htrol Remix"
  },
  {
      "AlbumID": 251,
      "ArtistID": 84,
      "FileName": "China - Không Bằng - Htrol Remix.mp3",
      "ID": 644,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "China - Không Bằng - Htrol Remix"
  },
  {
      "AlbumID": 251,
      "ArtistID": 84,
      "FileName": "China - Một Triệu Khả Năng - Htrol Remix.mp3",
      "ID": 645,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "China - Một Triệu Khả Năng - Htrol Remix"
  },
  {
      "AlbumID": 251,
      "ArtistID": 84,
      "FileName": "China - Nhân Gian Thán - Htrol Remix.mp3",
      "ID": 646,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Nhân Gian Thán - Htrol Remix"
  },
  {
      "AlbumID": 251,
      "ArtistID": 84,
      "FileName": "China - Tam Thốn Thiên Đường - Htrol Remix.mp3",
      "ID": 647,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "China - Tam Thốn Thiên Đường - Htrol Remix"
  },
  {
      "AlbumID": 251,
      "ArtistID": 84,
      "FileName": "China - Trong Mắt Đều Là Anh - Htrol Remix.mp3",
      "ID": 648,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "China - Trong Mắt Đều Là Anh - Htrol Remix"
  },
  {
      "AlbumID": 251,
      "ArtistID": 84,
      "FileName": "China - Tô Mạc Già - Htrol Remix.mp3",
      "ID": 649,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "China - Tô Mạc Già - Htrol"
  },
  {
      "AlbumID": 251,
      "ArtistID": 84,
      "FileName": "China - Từ Cửu Môn Hồi Ức - Htrol Remix.mp3",
      "ID": 650,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "China - Từ Cửu Môn Hồi Ức - Htrol Remix"
  },
  {
      "AlbumID": 251,
      "ArtistID": 84,
      "FileName": "China - Tỳ Bà Hành - Htrol Remix.mp3",
      "ID": 651,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "China - Tỳ Bà Hành - Htrol Remix"
  },
  {
      "AlbumID": 251,
      "ArtistID": 84,
      "FileName": "China - Xuân Tháng 3 - Htrol Remix.mp3",
      "ID": 652,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "China - Xuân Tháng 3 - Htrol Remix"
  },
  {
      "AlbumID": 299,
      "ArtistID": 113,
      "FileName": "Chúng Ta Không Thuộc Về Nhau.mp3",
      "ID": 653,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Chúng Ta Không Thuộc Về Nhau"
  },
  {
      "AlbumID": 251,
      "ArtistID": 84,
      "FileName": "Chưa Bao Giờ Em Quên - Htrol Remix.mp3",
      "ID": 654,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Chưa Bao Giờ Em Quên - Htrol Remix"
  },
  {
      "AlbumID": 299,
      "ArtistID": 113,
      "FileName": "Cơn Mưa Ngang Qua.mp3",
      "ID": 655,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Cơn Mưa Ngang Qua"
  },
  {
      "AlbumID": 346,
      "ArtistID": 117,
      "FileName": "Cứ Chill Thôi.mp3",
      "ID": 656,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Cứ Chill Thôi"
  },
  {
      "AlbumID": 347,
      "ArtistID": 131,
      "FileName": "Daily (feat. Jon Becker).mp3",
      "ID": 657,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Daily (feat. Jon Becker)"
  },
  {
      "AlbumID": 343,
      "ArtistID": 129,
      "FileName": "Dangerous.mp3",
      "ID": 658,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Dangerous"
  },
  {
      "AlbumID": 348,
      "ArtistID": 132,
      "FileName": "Danza Kuduro.mp3",
      "ID": 659,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Danza Kuduro"
  },
  {
      "AlbumID": 349,
      "ArtistID": 15,
      "FileName": "Darkside.mp3",
      "ID": 660,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Darkside"
  },
  {
      "AlbumID": 350,
      "ArtistID": 114,
      "FileName": "Daydream.mp3",
      "ID": 661,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Daydream"
  },
  {
      "AlbumID": 351,
      "ArtistID": 133,
      "FileName": "Despacito.mp3",
      "ID": 662,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Despacito"
  },
  {
      "AlbumID": 352,
      "ArtistID": 15,
      "FileName": "Diamond Heart.mp3",
      "ID": 663,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Diamond Heart"
  },
  {
      "AlbumID": 353,
      "ArtistID": 15,
      "FileName": "Different World (feat. CORSAK).mp3",
      "ID": 664,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Different World (feat. CORSAK)"
  },
  {
      "AlbumID": 343,
      "ArtistID": 129,
      "FileName": "Drive My Car.mp3",
      "ID": 665,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Drive My Car"
  },
  {
      "AlbumID": 343,
      "ArtistID": 129,
      "FileName": "Ecstasy.mp3",
      "ID": 666,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Ecstasy"
  },
  {
      "AlbumID": 299,
      "ArtistID": 113,
      "FileName": "Em Của Ngày Hôm Qua.mp3",
      "ID": 667,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Em Của Ngày Hôm Qua"
  },
  {
      "AlbumID": 251,
      "ArtistID": 84,
      "FileName": "Em Mỉm Cười Trông Thật Đẹp - Htrol Remix.mp3",
      "ID": 668,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Em Mỉm Cười Trông Thật Đẹp - Htrol Remix"
  },
  {
      "AlbumID": 251,
      "ArtistID": 84,
      "FileName": "Em Ổn Không - Htrol Remix.mp3",
      "ID": 669,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Em Ổn Không - Htrol Remix"
  },
  {
      "AlbumID": 354,
      "ArtistID": 15,
      "FileName": "Faded.mp3",
      "ID": 670,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Faded"
  },
  {
      "AlbumID": 355,
      "ArtistID": 134,
      "FileName": "Fading.mp3",
      "ID": 671,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Fading"
  },
  {
      "AlbumID": 356,
      "ArtistID": 15,
      "FileName": "Fake A Smile.mp3",
      "ID": 672,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Fake A Smile"
  },
  {
      "AlbumID": 343,
      "ArtistID": 129,
      "FileName": "Fight.mp3",
      "ID": 673,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Fight"
  },
  {
      "AlbumID": 357,
      "ArtistID": 135,
      "FileName": "Forever Young.mp3",
      "ID": 674,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Forever Young"
  },
  {
      "AlbumID": 343,
      "ArtistID": 129,
      "FileName": "Frozen.mp3",
      "ID": 675,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Frozen"
  },
  {
      "AlbumID": 251,
      "ArtistID": 84,
      "FileName": "Giang Hải Không Độ Nàng - Htrol Remix.mp3",
      "ID": 676,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Giang Hải Không Độ Nàng - Htrol Remix"
  },
  {
      "AlbumID": 343,
      "ArtistID": 129,
      "FileName": "Give Me Your Love.mp3",
      "ID": 677,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Give Me Your Love"
  },
  {
      "AlbumID": 358,
      "ArtistID": 123,
      "FileName": "Giá Như Anh Lặng Im.mp3",
      "ID": 678,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Giá Như Anh Lặng Im"
  },
  {
      "AlbumID": 359,
      "ArtistID": 15,
      "FileName": "Heading Home.mp3",
      "ID": 679,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Heading Home"
  },
  {
      "AlbumID": 360,
      "ArtistID": 15,
      "FileName": "Headlights.mp3",
      "ID": 680,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Headlights (feat. KIDDO)"
  },
  {
      "AlbumID": 361,
      "ArtistID": 15,
      "FileName": "Hello World.mp3",
      "ID": 681,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Hello World"
  },
  {
      "AlbumID": 251,
      "ArtistID": 84,
      "FileName": "Hoài Công - Htrol Remix.mp3",
      "ID": 682,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Hoài Công - Htrol Remix"
  },
  {
      "AlbumID": 343,
      "ArtistID": 129,
      "FileName": "Hypnotized.mp3",
      "ID": 683,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Hypnotized"
  },
  {
      "AlbumID": 362,
      "ArtistID": 136,
      "FileName": "I Took A Pill In Ibiza - Seeb Remix.mp3",
      "ID": 684,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "I Took A Pill In Ibiza - Seeb Remix"
  },
  {
      "AlbumID": 344,
      "ArtistID": 89,
      "FileName": "Just For A Moment.mp3",
      "ID": 685,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Just For A Moment (feat. Iselin)"
  },
  {
      "AlbumID": 251,
      "ArtistID": 84,
      "FileName": "Khó Vẽ Nụ Cười - Htrol Remix.mp3",
      "ID": 686,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Khó Vẽ Nụ Cười - Htrol"
  },
  {
      "AlbumID": 299,
      "ArtistID": 113,
      "FileName": "Không Phải Dạng Vừa Đâu.mp3",
      "ID": 687,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Không Phải Dạng Vừa Đâu"
  },
  {
      "AlbumID": 343,
      "ArtistID": 129,
      "FileName": "Kids in Love.mp3",
      "ID": 688,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Kids in Love"
  },
  {
      "AlbumID": 363,
      "ArtistID": 137,
      "FileName": "Kings & Queens.mp3",
      "ID": 689,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Kings & Queens"
  },
  {
      "AlbumID": 251,
      "ArtistID": 84,
      "FileName": "Kiếp Duyên Không Thành - Htrol Remix.mp3",
      "ID": 690,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Kiếp Duyên Không Thành - Htrol"
  },
  {
      "AlbumID": 251,
      "ArtistID": 84,
      "FileName": "Kiếp Má Hồng - Htrol Remix.mp3",
      "ID": 691,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Kiếp Má Hồng - Htrol Remix"
  },
  {
      "AlbumID": 251,
      "ArtistID": 84,
      "FileName": "Kết Duyên - Htrol Remix.mp3",
      "ID": 692,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Kết Duyên - Htrol Remix"
  },
  {
      "AlbumID": 364,
      "ArtistID": 114,
      "FileName": "Lalala Soobin.mp3",
      "ID": 693,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Lalala"
  },
  {
      "AlbumID": 365,
      "ArtistID": 16,
      "FileName": "Legends Never Die.mp3",
      "ID": 694,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Legends Never Die"
  },
  {
      "AlbumID": 366,
      "ArtistID": 15,
      "FileName": "Lily.mp3",
      "ID": 695,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Lily"
  },
  {
      "AlbumID": 367,
      "ArtistID": 138,
      "FileName": "Love How It Hurts (feat. Tina Stachowiak).mp3",
      "ID": 696,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Love How It Hurts (feat. Tina Stachowiak)"
  },
  {
      "AlbumID": 251,
      "ArtistID": 84,
      "FileName": "Lão Ái Xử Trảm - Htrol Remix.mp3",
      "ID": 697,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Lão Ái Xử Trảm - Htrol Remix"
  },
  {
      "AlbumID": 299,
      "ArtistID": 113,
      "FileName": "Lạc Trôi.mp3",
      "ID": 698,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Lạc Trôi"
  },
  {
      "AlbumID": 251,
      "ArtistID": 84,
      "FileName": "Lặng Lẽ Buông - Htrol Remix.mp3",
      "ID": 699,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Lặng Lẽ Buông - Htrol Remix"
  },
  {
      "AlbumID": 251,
      "ArtistID": 84,
      "FileName": "Lữ Khách Qua Thời Gian - Htrol Remix.mp3",
      "ID": 700,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Lữ Khách Qua Thời Gian - Htrol Remix"
  },
  {
      "AlbumID": 368,
      "ArtistID": 121,
      "FileName": "Maps.mp3",
      "ID": 701,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Maps"
  },
  {
      "AlbumID": 369,
      "ArtistID": 139,
      "FileName": "Meant To Be.mp3",
      "ID": 702,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Meant To Be"
  },
  {
      "AlbumID": 343,
      "ArtistID": 129,
      "FileName": "Mermaids.mp3",
      "ID": 703,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Mermaids"
  },
  {
      "AlbumID": 370,
      "ArtistID": 138,
      "FileName": "Miracles (feat. Tina Stachowiak).mp3",
      "ID": 704,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Miracles (feat. Tina Stachowiak)"
  },
  {
      "AlbumID": 371,
      "ArtistID": 130,
      "FileName": "Mãi Mãi Bên Nhau.mp3",
      "ID": 705,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Mãi Mãi Bên Nhau"
  },
  {
      "AlbumID": 251,
      "ArtistID": 84,
      "FileName": "Một Giấc Mộng Xưa - Htrol Remix.mp3",
      "ID": 706,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Một Giấc Mộng Xưa - Htrol Remix"
  },
  {
      "AlbumID": 319,
      "ArtistID": 122,
      "FileName": "Một Nhà.mp3",
      "ID": 707,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Một Nhà"
  },
  {
      "AlbumID": 299,
      "ArtistID": 113,
      "FileName": "Một Năm Mới Bình An.mp3",
      "ID": 708,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Một Năm Mới Bình An"
  },
  {
      "AlbumID": 251,
      "ArtistID": 84,
      "FileName": "Một Đường Nở hoa - Htrol Remix.mp3",
      "ID": 709,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Một Đường Nở hoa - Htrol Remix"
  },
  {
      "AlbumID": 372,
      "ArtistID": 138,
      "FileName": "Next To Me (feat. Tina Stachowiak).mp3",
      "ID": 710,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Next To Me (feat. Tina Stachowiak)"
  },
  {
      "AlbumID": 373,
      "ArtistID": 114,
      "FileName": "Ngày Mai Em Đi.mp3",
      "ID": 711,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Ngày Mai Em Đi"
  },
  {
      "AlbumID": 374,
      "ArtistID": 140,
      "FileName": "Người Âm Phủ.mp3",
      "ID": 712,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Người Âm Phủ"
  },
  {
      "AlbumID": 251,
      "ArtistID": 84,
      "FileName": "Nhói Lòng Thuyền Hoa - Htrol Remix.mp3",
      "ID": 713,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Nhói Lòng Thuyền Hoa - Htrol Remix"
  },
  {
      "AlbumID": 375,
      "ArtistID": 130,
      "FileName": "Như Phút Ban Đầu.mp3",
      "ID": 714,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Như Phút Ban Đầu"
  },
  {
      "AlbumID": 276,
      "ArtistID": 99,
      "FileName": "Nightcore - Beautiful Creatures.mp3",
      "ID": 715,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Nightcore - Beautiful Creatures"
  },
  {
      "AlbumID": 276,
      "ArtistID": 99,
      "FileName": "Nightcore - Castle On The Hill.mp3",
      "ID": 716,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Nightcore - Castle On The Hill"
  },
  {
      "AlbumID": 276,
      "ArtistID": 99,
      "FileName": "Nightcore - Fire.mp3",
      "ID": 717,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Nightcore - Fire"
  },
  {
      "AlbumID": 276,
      "ArtistID": 99,
      "FileName": "Nightcore - Fireflies.mp3",
      "ID": 718,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Nightcore - Fireflies"
  },
  {
      "AlbumID": 276,
      "ArtistID": 99,
      "FileName": "Nightcore - Lights.mp3",
      "ID": 719,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Nightcore - Lights"
  },
  {
      "AlbumID": 276,
      "ArtistID": 99,
      "FileName": "Nightcore - Like A Ricochet.mp3",
      "ID": 720,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Nightcore - Like A Ricochet"
  },
  {
      "AlbumID": 276,
      "ArtistID": 99,
      "FileName": "Nightcore - Move Like Jagger.mp3",
      "ID": 721,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Nightcore - Move Like Jagger"
  },
  {
      "AlbumID": 276,
      "ArtistID": 99,
      "FileName": "Nightcore - No Friends.mp3",
      "ID": 722,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Nightcore - No Friends"
  },
  {
      "AlbumID": 276,
      "ArtistID": 99,
      "FileName": "Nightcore - One Last Time.mp3",
      "ID": 723,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Nightcore - One Last Time"
  },
  {
      "AlbumID": 276,
      "ArtistID": 99,
      "FileName": "Nightcore - Rather Be.mp3",
      "ID": 724,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Nightcore - Rather Be"
  },
  {
      "AlbumID": 276,
      "ArtistID": 99,
      "FileName": "Nightcore - Remember When.mp3",
      "ID": 725,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Nightcore - Remember When"
  },
  {
      "AlbumID": 276,
      "ArtistID": 99,
      "FileName": "Nightcore - Superheroes.mp3",
      "ID": 726,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Nightcore - Superheroes"
  },
  {
      "AlbumID": 276,
      "ArtistID": 99,
      "FileName": "Nightcore - We Should Start Right Now.mp3",
      "ID": 727,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Nightcore - We Should Start Right Now"
  },
  {
      "AlbumID": 376,
      "ArtistID": 123,
      "FileName": "Não Cá Vàng.mp3",
      "ID": 728,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Não Cá Vàng"
  },
  {
      "AlbumID": 299,
      "ArtistID": 113,
      "FileName": "Nơi Này Có Anh.mp3",
      "ID": 729,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Nơi Này Có Anh"
  },
  {
      "AlbumID": 299,
      "ArtistID": 113,
      "FileName": "Nắng Ấm Xa Dần.mp3",
      "ID": 730,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Nắng Ấm Xa Dần"
  },
  {
      "AlbumID": 377,
      "ArtistID": 104,
      "FileName": "Nến Và Hoa.mp3",
      "ID": 731,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Nến Và Hoa"
  },
  {
      "AlbumID": 251,
      "ArtistID": 84,
      "FileName": "Nếu Em Không Về - Htrol Remix.mp3",
      "ID": 732,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Nếu Em Không Về - Htrol Remix"
  },
  {
      "AlbumID": 251,
      "ArtistID": 84,
      "FileName": "Nếu Như Anh Thành Công - Htrol Remix.mp3",
      "ID": 733,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Nếu Như Anh Thành Công - Htrol Remix"
  },
  {
      "AlbumID": 343,
      "ArtistID": 129,
      "FileName": "Ocean.mp3",
      "ID": 734,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Ocean"
  },
  {
      "AlbumID": 378,
      "ArtistID": 15,
      "FileName": "On My Way.mp3",
      "ID": 735,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "On My Way"
  },
  {
      "AlbumID": 379,
      "ArtistID": 121,
      "FileName": "Payphone.mp3",
      "ID": 736,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Payphone"
  },
  {
      "AlbumID": 251,
      "ArtistID": 84,
      "FileName": "Phi Điểu Và Ve Sầu - Htrol Remix.mp3",
      "ID": 737,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Phi Điểu Và Ve Sầu - Htrol Remix"
  },
  {
      "AlbumID": 380,
      "ArtistID": 141,
      "FileName": "Post Malone.mp3",
      "ID": 738,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Post Malone (feat. RANI)"
  },
  {
      "AlbumID": 381,
      "ArtistID": 15,
      "FileName": "PS5.mp3",
      "ID": 739,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "PS5 (with TOMORROW X TOGETHER & Alan Walker)"
  },
  {
      "AlbumID": 251,
      "ArtistID": 84,
      "FileName": "Quan Sơn Tửu - Htrol Remix.mp3",
      "ID": 740,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Quan Sơn Tửu - Htrol Remix"
  },
  {
      "AlbumID": 382,
      "ArtistID": 142,
      "FileName": "Rather Be (feat. Jess Glynne).mp3",
      "ID": 741,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Rather Be (feat. Jess Glynne)"
  },
  {
      "AlbumID": 343,
      "ArtistID": 129,
      "FileName": "Rendezvous.mp3",
      "ID": 742,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Rendezvous"
  },
  {
      "AlbumID": 383,
      "ArtistID": 142,
      "FileName": "Rockabye (feat. Sean Paul & Anne-Marie).mp3",
      "ID": 743,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Rockabye (feat. Sean Paul & Anne-Marie)"
  },
  {
      "AlbumID": 384,
      "ArtistID": 143,
      "FileName": "Sad Story (Out Of Luck).mp3",
      "ID": 744,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Sad Story (Out Of Luck)"
  },
  {
      "AlbumID": 363,
      "ArtistID": 137,
      "FileName": "Salt.mp3",
      "ID": 745,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Salt"
  },
  {
      "AlbumID": 343,
      "ArtistID": 129,
      "FileName": "Save Me.mp3",
      "ID": 746,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Save Me"
  },
  {
      "AlbumID": 343,
      "ArtistID": 129,
      "FileName": "Seventeen.mp3",
      "ID": 747,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Seventeen"
  },
  {
      "AlbumID": 385,
      "ArtistID": 144,
      "FileName": "Señorita.mp3",
      "ID": 748,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Señorita"
  },
  {
      "AlbumID": 386,
      "ArtistID": 145,
      "FileName": "Shelter.mp3",
      "ID": 749,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Shelter"
  },
  {
      "AlbumID": 361,
      "ArtistID": 15,
      "FileName": "Shut Up.mp3",
      "ID": 750,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Shut Up"
  },
  {
      "AlbumID": 343,
      "ArtistID": 129,
      "FileName": "Sign.mp3",
      "ID": 751,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Sign"
  },
  {
      "AlbumID": 387,
      "ArtistID": 15,
      "FileName": "Sing Me to Sleep.mp3",
      "ID": 752,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Sing Me to Sleep"
  },
  {
      "AlbumID": 383,
      "ArtistID": 142,
      "FileName": "Solo (feat. Demi Lovato).mp3",
      "ID": 753,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Solo (feat. Demi Lovato)"
  },
  {
      "AlbumID": 388,
      "ArtistID": 146,
      "FileName": "STAR WALKIN' (League of Legends Worlds Anthem).mp3",
      "ID": 754,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "STAR WALKIN (League of Legends Worlds Anthem)"
  },
  {
      "AlbumID": 389,
      "ArtistID": 93,
      "FileName": "Stay Young.mp3",
      "ID": 755,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Stay Young"
  },
  {
      "AlbumID": 390,
      "ArtistID": 15,
      "FileName": "Strongest (Alan Walker Remix).mp3",
      "ID": 756,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Strongest (Alan Walker Remix)"
  },
  {
      "AlbumID": 368,
      "ArtistID": 121,
      "FileName": "Sugar.mp3",
      "ID": 757,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Sugar"
  },
  {
      "AlbumID": 343,
      "ArtistID": 129,
      "FileName": "Summer Love.mp3",
      "ID": 758,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Summer Love"
  },
  {
      "AlbumID": 363,
      "ArtistID": 137,
      "FileName": "Sweet but Psycho.mp3",
      "ID": 759,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Sweet but Psycho"
  },
  {
      "AlbumID": 383,
      "ArtistID": 142,
      "FileName": "Symphony.mp3",
      "ID": 760,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Symphony (feat. Zara Larsson)"
  },
  {
      "AlbumID": 251,
      "ArtistID": 84,
      "FileName": "Sài Gòn Đau Lòng Quá - Htrol Remix.mp3",
      "ID": 761,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Sài Gòn Đau Lòng Quá - Htrol Remix"
  },
  {
      "AlbumID": 251,
      "ArtistID": 84,
      "FileName": "Sợ Phải Kết Thúc - Htrol Remix.mp3",
      "ID": 762,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Sợ Phải Kết Thúc - Htrol Remix"
  },
  {
      "AlbumID": 343,
      "ArtistID": 129,
      "FileName": "Take Me Away.mp3",
      "ID": 763,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Take Me Away"
  },
  {
      "AlbumID": 391,
      "ArtistID": 93,
      "FileName": "The Ocean (feat. Shy Martin).mp3",
      "ID": 764,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "The Ocean (feat. Shy Martin)"
  },
  {
      "AlbumID": 392,
      "ArtistID": 147,
      "FileName": "Thu Cuối.mp3",
      "ID": 765,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Thu Cuối (feat. Mr.T & Hằng BingBoong)"
  },
  {
      "AlbumID": 251,
      "ArtistID": 84,
      "FileName": "Thuyền Quyên - Htrol Remix.mp3",
      "ID": 766,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Thuyền Quyên - Htrol Remix"
  },
  {
      "AlbumID": 251,
      "ArtistID": 84,
      "FileName": "Thê Tử - Htrol Remix.mp3",
      "ID": 767,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Thê Tử - Htrol Remix"
  },
  {
      "AlbumID": 251,
      "ArtistID": 84,
      "FileName": "Thằng Hầu - Htrol.mp3",
      "ID": 768,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Thằng Hầu - Htrol"
  },
  {
      "AlbumID": 251,
      "ArtistID": 84,
      "FileName": "Thế Thái - Htrol Remix.mp3",
      "ID": 769,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Thế Thái - Htrol Remix"
  },
  {
      "AlbumID": 251,
      "ArtistID": 84,
      "FileName": "Thị Mầu - Htrol Remix.mp3",
      "ID": 770,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Thị Mầu - Htrol Remix"
  },
  {
      "AlbumID": 393,
      "ArtistID": 15,
      "FileName": "Tired.mp3",
      "ID": 771,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Tired"
  },
  {
      "AlbumID": 394,
      "ArtistID": 148,
      "FileName": "Tomorrow tonight.mp3",
      "ID": 772,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "tomorrow tonight"
  },
  {
      "AlbumID": 251,
      "ArtistID": 84,
      "FileName": "Tránh Duyên - Htrol Remix.mp3",
      "ID": 773,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Tránh Duyên - Htrol Remix"
  },
  {
      "AlbumID": 395,
      "ArtistID": 123,
      "FileName": "Tạm Biệt Em.mp3",
      "ID": 774,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Tạm Biệt Em"
  },
  {
      "AlbumID": 59,
      "ArtistID": 15,
      "FileName": "Unity.mp3",
      "ID": 775,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Unity"
  },
  {
      "AlbumID": 396,
      "ArtistID": 114,
      "FileName": "Vai Lan Don Dua.mp3",
      "ID": 776,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Vai Lan Don Dua"
  },
  {
      "AlbumID": 251,
      "ArtistID": 84,
      "FileName": "Vong Xuyên Bỉ Ngạn - Htrol Remix.mp3",
      "ID": 777,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Vong Xuyên Bỉ Ngạn - Htrol Remix"
  },
  {
      "AlbumID": 251,
      "ArtistID": 84,
      "FileName": "Vì Em  Anh Nguyện Làm Bầu Trời Nắng Hạ - Htrol Remix.mp3",
      "ID": 778,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Vì Em  Anh Nguyện Làm Bầu Trời Nắng Hạ - Htrol Remix"
  },
  {
      "AlbumID": 397,
      "ArtistID": 87,
      "FileName": "Waiting.mp3",
      "ID": 779,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Waiting"
  },
  {
      "AlbumID": 398,
      "ArtistID": 87,
      "FileName": "Way Back.mp3",
      "ID": 780,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Way Back"
  },
  {
      "AlbumID": 343,
      "ArtistID": 129,
      "FileName": "What Are You Waiting For.mp3",
      "ID": 781,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "What Are You Waiting For"
  },
  {
      "AlbumID": 343,
      "ArtistID": 129,
      "FileName": "Without You.mp3",
      "ID": 782,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Without You"
  },
  {
      "AlbumID": 399,
      "ArtistID": 15,
      "FileName": "World We Used To Know.mp3",
      "ID": 783,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "World We Used To Know"
  },
  {
      "AlbumID": 400,
      "ArtistID": 16,
      "FileName": "Worlds Collide.mp3",
      "ID": 784,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Worlds Collide"
  },
  {
      "AlbumID": 401,
      "ArtistID": 149,
      "FileName": "Wrap Me In Plastic - Marcus Layton Radio Edit.mp3",
      "ID": 785,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Wrap Me In Plastic - Marcus Layton Radio Edit"
  },
  {
      "AlbumID": 402,
      "ArtistID": 150,
      "FileName": "You and I.mp3",
      "ID": 786,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "You and I"
  },
  {
      "AlbumID": 403,
      "ArtistID": 118,
      "FileName": "Yêu Em Dại Khờ.mp3",
      "ID": 787,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Yêu Em Dại Khờ"
  },
  {
      "AlbumID": 251,
      "ArtistID": 84,
      "FileName": "Đau Để Trưởng Thành - Htrol Remix.mp3",
      "ID": 788,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Đau Để Trưởng Thành - Htrol Remix"
  },
  {
      "AlbumID": 251,
      "ArtistID": 84,
      "FileName": "Đom Đóm - Htrol Remix.mp3",
      "ID": 789,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Đom Đóm - Htrol"
  },
  {
      "AlbumID": 251,
      "ArtistID": 84,
      "FileName": "Đánh Mất Em Remix - Htrol Remix.mp3",
      "ID": 790,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Đánh Mất Em Remix - Htrol Remix"
  },
  {
      "AlbumID": 251,
      "ArtistID": 84,
      "FileName": "Đóa Quỳnh Lan - Htrol Remix.mp3",
      "ID": 791,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Đóa Quỳnh Lan - Htrol Remix"
  },
  {
      "AlbumID": 404,
      "ArtistID": 123,
      "FileName": "Đắng Lòng Thanh Niên.mp3",
      "ID": 792,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Đắng Lòng Thanh Niên"
  },
  {
      "AlbumID": 405,
      "ArtistID": 123,
      "FileName": "Đếm Ngày Xa Em.mp3",
      "ID": 793,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Đếm Ngày Xa Em"
  },
  {
      "AlbumID": 251,
      "ArtistID": 84,
      "FileName": "Đừng Như Người Dưng - Htrol Remix.mp3",
      "ID": 794,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 8,
      "Title": "Đừng Như Người Dưng - Htrol Remix"
  },
  {
      "AlbumID": 406,
      "ArtistID": 151,
      "FileName": "01. Snow in Summer.mp3",
      "ID": 795,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 9,
      "Title": "Snow in Summer"
  },
  {
      "AlbumID": 407,
      "ArtistID": 152,
      "FileName": "03. A Beautiful Song.mp3",
      "ID": 796,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 9,
      "Title": "A Beautiful Song"
  },
  {
      "AlbumID": 408,
      "ArtistID": 153,
      "FileName": "04. Emil - Karma.mp3",
      "ID": 797,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 9,
      "Title": "Emil - Karma"
  },
  {
      "AlbumID": 409,
      "ArtistID": 154,
      "FileName": "05 A Beautiful Song.mp3",
      "ID": 798,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 9,
      "Title": "A Beautiful Song"
  },
  {
      "AlbumID": 409,
      "ArtistID": 154,
      "FileName": "07 Song of the Ancients - Atonement.mp3",
      "ID": 799,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 9,
      "Title": "Song of the Ancients - Atonement"
  },
  {
      "AlbumID": 410,
      "ArtistID": 154,
      "FileName": "08. A Beautiful Song.mp3",
      "ID": 800,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 9,
      "Title": "A Beautiful Song"
  },
  {
      "AlbumID": 411,
      "ArtistID": 155,
      "FileName": "09. Shadowlord - Another Edit Version.mp3",
      "ID": 801,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 9,
      "Title": "Shadowlord - Another Edit Version"
  },
  {
      "AlbumID": 412,
      "ArtistID": 156,
      "FileName": "09. Shadowlord.mp3",
      "ID": 802,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 9,
      "Title": "Shadowlord"
  },
  {
      "AlbumID": 413,
      "ArtistID": 157,
      "FileName": "10. Emil - Despair.mp3",
      "ID": 803,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 9,
      "Title": "Emil - Despair"
  },
  {
      "AlbumID": 410,
      "ArtistID": 154,
      "FileName": "10. Grandma - Destruction.mp3",
      "ID": 804,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 9,
      "Title": "Grandma - Destruction"
  },
  {
      "AlbumID": 409,
      "ArtistID": 154,
      "FileName": "12 Bipolar Nightmare.mp3",
      "ID": 805,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 9,
      "Title": "Bipolar Nightmare"
  },
  {
      "AlbumID": 413,
      "ArtistID": 156,
      "FileName": "13. Umare Iduru Ishi - Konomama Ja Dame.mp3",
      "ID": 806,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 9,
      "Title": "Umare Iduru Ishi - Konomama Ja Dame"
  },
  {
      "AlbumID": 413,
      "ArtistID": 156,
      "FileName": "15. Umare Iduru Ishi - Kami Ni Natta.mp3",
      "ID": 807,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 9,
      "Title": "Umare Iduru Ishi - Kami Ni Natta"
  },
  {
      "AlbumID": 413,
      "ArtistID": 156,
      "FileName": "19. Toritsuita Goubyou - Kami Ni Natta.mp3",
      "ID": 808,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 9,
      "Title": "Toritsuita Goubyou - Kami Ni Natta"
  },
  {
      "AlbumID": 413,
      "ArtistID": 156,
      "FileName": "20. Possessed By Disease - Become A God.mp3",
      "ID": 809,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 9,
      "Title": "Possessed By Disease - Become A God"
  },
  {
      "AlbumID": 410,
      "ArtistID": 154,
      "FileName": "22. Dark Colossus - Kaiju.mp3",
      "ID": 810,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 9,
      "Title": "Dark Colossus - Kaiju"
  },
  {
      "AlbumID": 410,
      "ArtistID": 154,
      "FileName": "25. Possessed by Disease.mp3",
      "ID": 811,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 9,
      "Title": "Possessed by Disease"
  },
  {
      "AlbumID": 406,
      "ArtistID": 151,
      "FileName": "26. The Dark Colossus Destroys All.mp3",
      "ID": 812,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 9,
      "Title": "The Dark Colossus Destroys All"
  },
  {
      "AlbumID": 410,
      "ArtistID": 154,
      "FileName": "29. Dependent Weakling.mp3",
      "ID": 813,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 9,
      "Title": "Dependent Weakling"
  },
  {
      "AlbumID": 414,
      "ArtistID": 158,
      "FileName": "32. Song of the Ancients (Fate).mp3",
      "ID": 814,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 9,
      "Title": "Song of the Ancients (Fate)"
  },
  {
      "AlbumID": 410,
      "ArtistID": 154,
      "FileName": "32. War & War.mp3",
      "ID": 815,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 9,
      "Title": "War & War"
  },
  {
      "AlbumID": 414,
      "ArtistID": 158,
      "FileName": "36. Emil (Karma).mp3",
      "ID": 816,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 9,
      "Title": "Emil (Karma)"
  },
  {
      "AlbumID": 410,
      "ArtistID": 154,
      "FileName": "39. Emil - Despair.mp3",
      "ID": 817,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 9,
      "Title": "Emil - Despair"
  },
  {
      "AlbumID": 410,
      "ArtistID": 154,
      "FileName": "43. Bipolar Nightmare.mp3",
      "ID": 818,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 9,
      "Title": "Bipolar Nightmare"
  },
  {
      "AlbumID": 414,
      "ArtistID": 158,
      "FileName": "43. Shadowlord - White (Note Remix).mp3",
      "ID": 819,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 9,
      "Title": "Shadowlord - White (Note Remix)"
  },
  {
      "AlbumID": 269,
      "ArtistID": 94,
      "FileName": "Ai Wo Torimodose.mp3",
      "ID": 820,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 9,
      "Title": "Ai Wo Torimodose"
  },
  {
      "AlbumID": 415,
      "ArtistID": 159,
      "FileName": "DUEL!!.mp3",
      "ID": 821,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 9,
      "Title": "DUEL!!"
  },
  {
      "AlbumID": 269,
      "ArtistID": 94,
      "FileName": "Mega Man 4 Opening Sequence Arrangement.mp3",
      "ID": 822,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 9,
      "Title": "Mega Man 4 Opening Sequence Arrangement"
  },
  {
      "AlbumID": 415,
      "ArtistID": 159,
      "FileName": "Onslaught.mp3",
      "ID": 823,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 9,
      "Title": "Onslaught"
  },
  {
      "AlbumID": 409,
      "ArtistID": 154,
      "FileName": "01 City Ruins.mp3",
      "ID": 824,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "City Ruins"
  },
  {
      "AlbumID": 416,
      "ArtistID": 152,
      "FileName": "01. Ashes of Dreams (Emi Evans & J'Nique Nicole Vocals).mp3",
      "ID": 825,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Ashes of Dreams (Emi Evans & JNique Nicole Vocals)"
  },
  {
      "AlbumID": 417,
      "ArtistID": 160,
      "FileName": "01. Hajimari (Beginning).mp3",
      "ID": 826,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Hajimari (Beginning)"
  },
  {
      "AlbumID": 418,
      "ArtistID": 153,
      "FileName": "01. Kainé - Salvation.mp3",
      "ID": 827,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Kaine - Salvation"
  },
  {
      "AlbumID": 419,
      "ArtistID": 161,
      "FileName": "01. Piano - Weight of the World.mp3",
      "ID": 828,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Piano: Weight of the World"
  },
  {
      "AlbumID": 410,
      "ArtistID": 154,
      "FileName": "01. Significance - Nothing.mp3",
      "ID": 829,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Significance - Nothing"
  },
  {
      "AlbumID": 420,
      "ArtistID": 152,
      "FileName": "01. Snow in Summer (Orchestral).mp3",
      "ID": 830,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Snow in Summer"
  },
  {
      "AlbumID": 421,
      "ArtistID": 154,
      "FileName": "01. Snow in Summer.mp3",
      "ID": 831,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Snow in Summer"
  },
  {
      "AlbumID": 422,
      "ArtistID": 162,
      "FileName": "01. Song of the Ancients.mp3",
      "ID": 832,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Song of the Ancients"
  },
  {
      "AlbumID": 423,
      "ArtistID": 163,
      "FileName": "01. Sunshower (Snow In Summer).mp3",
      "ID": 833,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Sunshower (Snow In Summer)"
  },
  {
      "AlbumID": 409,
      "ArtistID": 154,
      "FileName": "02 Amusement Park.mp3",
      "ID": 834,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Amusement Park"
  },
  {
      "AlbumID": 410,
      "ArtistID": 154,
      "FileName": "02. City Ruins - Rays of Light.mp3",
      "ID": 835,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "City Ruins - Rays of Light"
  },
  {
      "AlbumID": 416,
      "ArtistID": 152,
      "FileName": "02. Emil (Addendum version).mp3",
      "ID": 836,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Emil (Addendum version)"
  },
  {
      "AlbumID": 424,
      "ArtistID": 155,
      "FileName": "02. Emil - Sacrifice.mp3",
      "ID": 837,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Emil - Sacrifice"
  },
  {
      "AlbumID": 411,
      "ArtistID": 164,
      "FileName": "02. Hills of Radiant Winds - Another Edit Version.mp3",
      "ID": 838,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Hills of Radiant Winds - Another Edit Version"
  },
  {
      "AlbumID": 417,
      "ArtistID": 160,
      "FileName": "02. Inori (Prayers).mp3",
      "ID": 839,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Inori (Prayers)"
  },
  {
      "AlbumID": 425,
      "ArtistID": 162,
      "FileName": "02. Kainé - Escape.mp3",
      "ID": 840,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Kainé - Escape"
  },
  {
      "AlbumID": 422,
      "ArtistID": 162,
      "FileName": "02. Kainé.mp3",
      "ID": 841,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Kainé"
  },
  {
      "AlbumID": 423,
      "ArtistID": 163,
      "FileName": "02. Pale Moonlight (Shadowlord_s Castle_Roar).mp3",
      "ID": 842,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Pale Moonlight (Shadowlords Castle-Roar)"
  },
  {
      "AlbumID": 426,
      "ArtistID": 152,
      "FileName": "02. Peaceful Sleep (Orchestral).mp3",
      "ID": 843,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Peaceful Sleep"
  },
  {
      "AlbumID": 413,
      "ArtistID": 156,
      "FileName": "02. Peaceful Sleep.mp3",
      "ID": 844,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Peaceful Sleep"
  },
  {
      "AlbumID": 419,
      "ArtistID": 165,
      "FileName": "02. Piano - Amusement Park.mp3",
      "ID": 845,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Piano: Amusement Park"
  },
  {
      "AlbumID": 427,
      "ArtistID": 166,
      "FileName": "02. Song of the Ancients - Popola.mp3",
      "ID": 846,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Song of the Ancients - Popola"
  },
  {
      "AlbumID": 420,
      "ArtistID": 152,
      "FileName": "02. Song of the Ancients.mp3",
      "ID": 847,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Song of the Ancients"
  },
  {
      "AlbumID": 424,
      "ArtistID": 162,
      "FileName": "03. Emil - Piano.mp3",
      "ID": 848,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Emil - Piano"
  },
  {
      "AlbumID": 420,
      "ArtistID": 152,
      "FileName": "03. Hills of Radiant Winds.mp3",
      "ID": 849,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Hills of Radiant Winds"
  },
  {
      "AlbumID": 421,
      "ArtistID": 154,
      "FileName": "03. Kainé (Concert).mp3",
      "ID": 850,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Kainé"
  },
  {
      "AlbumID": 425,
      "ArtistID": 162,
      "FileName": "03. Kainé.mp3",
      "ID": 851,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Kainé"
  },
  {
      "AlbumID": 423,
      "ArtistID": 163,
      "FileName": "03. Nightengale (Kain__Duet Ver).mp3",
      "ID": 852,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Nightengale (Kainé-Duet Ver.)"
  },
  {
      "AlbumID": 410,
      "ArtistID": 154,
      "FileName": "03. Peaceful Sleep.mp3",
      "ID": 853,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Peaceful Sleep"
  },
  {
      "AlbumID": 419,
      "ArtistID": 162,
      "FileName": "03. Piano - A Beautiful Song.mp3",
      "ID": 854,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Piano: A Beautiful Song"
  },
  {
      "AlbumID": 428,
      "ArtistID": 162,
      "FileName": "03. Snow in Summer.mp3",
      "ID": 855,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Snow in Summer"
  },
  {
      "AlbumID": 418,
      "ArtistID": 153,
      "FileName": "03. Song of the Ancients - Devola.mp3",
      "ID": 856,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Song of the Ancients - Dev"
  },
  {
      "AlbumID": 417,
      "ArtistID": 160,
      "FileName": "03. Toki No Shizuku (Droplets Of Time).mp3",
      "ID": 857,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Toki No Shizuku (Droplets Of Time)"
  },
  {
      "AlbumID": 426,
      "ArtistID": 152,
      "FileName": "03. Vague Hope (Emi Evans Vocals).mp3",
      "ID": 858,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Vague Hope (Emi Evans Vocals)"
  },
  {
      "AlbumID": 409,
      "ArtistID": 154,
      "FileName": "04 Peaceful Sleep.mp3",
      "ID": 859,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Peaceful Sleep"
  },
  {
      "AlbumID": 420,
      "ArtistID": 152,
      "FileName": "04. Emil (Ochestral).mp3",
      "ID": 860,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Emil"
  },
  {
      "AlbumID": 425,
      "ArtistID": 167,
      "FileName": "04. Kainé - Oboe and Bassoon Ensemble.mp3",
      "ID": 861,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Kainé - Oboe and Bassoon Ensemble"
  },
  {
      "AlbumID": 417,
      "ArtistID": 160,
      "FileName": "04. Kaze No Koe (Voice Of The Wind).mp3",
      "ID": 862,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Kaze No Koe (Voice Of The Wind)"
  },
  {
      "AlbumID": 423,
      "ArtistID": 163,
      "FileName": "04. Memories (Song Of The Ancients_Devola).mp3",
      "ID": 863,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Memories (Song Of The Ancients-Devola)"
  },
  {
      "AlbumID": 419,
      "ArtistID": 168,
      "FileName": "04. Piano - City Ruins.mp3",
      "ID": 864,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Piano: City Ruins"
  },
  {
      "AlbumID": 428,
      "ArtistID": 162,
      "FileName": "04. Shadowlord.mp3",
      "ID": 865,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Shadowlord"
  },
  {
      "AlbumID": 422,
      "ArtistID": 162,
      "FileName": "04. Snow in Summer.mp3",
      "ID": 866,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Snow in Summer"
  },
  {
      "AlbumID": 421,
      "ArtistID": 154,
      "FileName": "04. Song of the Ancients - Devola.mp3",
      "ID": 867,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Song of the Ancients - Devola"
  },
  {
      "AlbumID": 429,
      "ArtistID": 169,
      "FileName": "04. Voice of no Return.mp3",
      "ID": 868,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Voice of no Return"
  },
  {
      "AlbumID": 430,
      "ArtistID": 27,
      "FileName": "04.Peaceful Sleep.mp3",
      "ID": 869,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Peaceful Sleep"
  },
  {
      "AlbumID": 423,
      "ArtistID": 163,
      "FileName": "05. A Heart Not Forgotten (Emil_Karma).mp3",
      "ID": 870,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "A Heart Not Forgotten (Emil-Karma)"
  },
  {
      "AlbumID": 424,
      "ArtistID": 170,
      "FileName": "05. Emil - Recorder Ensemble.mp3",
      "ID": 871,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Emil - Recorder Ensemble"
  },
  {
      "AlbumID": 422,
      "ArtistID": 162,
      "FileName": "05. Emil.mp3",
      "ID": 872,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Emil"
  },
  {
      "AlbumID": 417,
      "ArtistID": 160,
      "FileName": "05. Kaikyo (Homesick).mp3",
      "ID": 873,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Kaikyo (Homesick)"
  },
  {
      "AlbumID": 416,
      "ArtistID": 152,
      "FileName": "05. Kainé (Addendum version).mp3",
      "ID": 874,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Kainé (Addendum version)"
  },
  {
      "AlbumID": 425,
      "ArtistID": 162,
      "FileName": "05. Kainé - Duet.mp3",
      "ID": 875,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Kainé - Duet"
  },
  {
      "AlbumID": 419,
      "ArtistID": 171,
      "FileName": "05. Piano - Dependent Weakling.mp3",
      "ID": 876,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Piano: Dependent Weakling"
  },
  {
      "AlbumID": 421,
      "ArtistID": 154,
      "FileName": "05. Repose.mp3",
      "ID": 877,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Repose"
  },
  {
      "AlbumID": 427,
      "ArtistID": 172,
      "FileName": "05. Song of the Ancients - Mandolin Ensemble.mp3",
      "ID": 878,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Song of the Ancients - Mandolin Ensemble"
  },
  {
      "AlbumID": 406,
      "ArtistID": 166,
      "FileName": "05. Song of the Ancients - Popola.mp3",
      "ID": 879,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Song of the Ancients - Popola"
  },
  {
      "AlbumID": 431,
      "ArtistID": 162,
      "FileName": "06 Emil - Piano Ver.mp3",
      "ID": 880,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Emil - Piano Ver."
  },
  {
      "AlbumID": 409,
      "ArtistID": 154,
      "FileName": "06 Vague Hope.mp3",
      "ID": 881,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Vague Hope"
  },
  {
      "AlbumID": 416,
      "ArtistID": 152,
      "FileName": "06. City Ruins (Addendum version).mp3",
      "ID": 882,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "City Ruins (Addendum version)"
  },
  {
      "AlbumID": 424,
      "ArtistID": 173,
      "FileName": "06. Emil.mp3",
      "ID": 883,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Emil"
  },
  {
      "AlbumID": 422,
      "ArtistID": 174,
      "FileName": "06. Grandma (Piano).mp3",
      "ID": 884,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Grandma"
  },
  {
      "AlbumID": 414,
      "ArtistID": 175,
      "FileName": "06. Grandma.mp3",
      "ID": 885,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Grandma"
  },
  {
      "AlbumID": 425,
      "ArtistID": 167,
      "FileName": "06. Kainé.mp3",
      "ID": 886,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Kainé"
  },
  {
      "AlbumID": 419,
      "ArtistID": 176,
      "FileName": "06. Piano - Peaceful Sleep.mp3",
      "ID": 887,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Piano: Peaceful Sleep"
  },
  {
      "AlbumID": 427,
      "ArtistID": 162,
      "FileName": "06. Song of the Ancients.mp3",
      "ID": 888,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Song of the Ancients"
  },
  {
      "AlbumID": 410,
      "ArtistID": 154,
      "FileName": "06. The Color of Depression.mp3",
      "ID": 889,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "The Color of Depression"
  },
  {
      "AlbumID": 431,
      "ArtistID": 162,
      "FileName": "07 Kaine - Duet Ver.mp3",
      "ID": 890,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Kaine - Duet Ver."
  },
  {
      "AlbumID": 410,
      "ArtistID": 154,
      "FileName": "07. Amusement Park.mp3",
      "ID": 891,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Amusement Park"
  },
  {
      "AlbumID": 406,
      "ArtistID": 162,
      "FileName": "07. Grandma.mp3",
      "ID": 892,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Grandma"
  },
  {
      "AlbumID": 420,
      "ArtistID": 152,
      "FileName": "07. Kaine.mp3",
      "ID": 893,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Kaine"
  },
  {
      "AlbumID": 425,
      "ArtistID": 167,
      "FileName": "07. Kainé.mp3",
      "ID": 894,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Kainé"
  },
  {
      "AlbumID": 419,
      "ArtistID": 177,
      "FileName": "07. Piano - Copied City.mp3",
      "ID": 895,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Piano: Copied City"
  },
  {
      "AlbumID": 422,
      "ArtistID": 162,
      "FileName": "07. Repose.mp3",
      "ID": 896,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Repose"
  },
  {
      "AlbumID": 428,
      "ArtistID": 178,
      "FileName": "07. Snow in Summer.mp3",
      "ID": 897,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Snow in Summer"
  },
  {
      "AlbumID": 414,
      "ArtistID": 175,
      "FileName": "07. Song of the Ancients (Devola).mp3",
      "ID": 898,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Song of the Ancients (Devola)"
  },
  {
      "AlbumID": 430,
      "ArtistID": 27,
      "FileName": "07.Memories of Dust.mp3",
      "ID": 899,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Memories of Dust"
  },
  {
      "AlbumID": 431,
      "ArtistID": 154,
      "FileName": "08 The Wretched Automatons-a capella.mp3",
      "ID": 900,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "The Wretched Automatons-a capella"
  },
  {
      "AlbumID": 423,
      "ArtistID": 163,
      "FileName": "08. Flower (Yonah_Piano ver.).mp3",
      "ID": 901,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Flower (Yonah-Piano ver.)"
  },
  {
      "AlbumID": 419,
      "ArtistID": 168,
      "FileName": "08. Piano - Voice of no Return.mp3",
      "ID": 902,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Piano: Voice of no Return"
  },
  {
      "AlbumID": 413,
      "ArtistID": 157,
      "FileName": "08. Vague Hope.mp3",
      "ID": 903,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Vague Hope"
  },
  {
      "AlbumID": 431,
      "ArtistID": 162,
      "FileName": "09 Song of the Ancients - Piano Ver.mp3",
      "ID": 904,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Song of the Ancients - Piano Ver."
  },
  {
      "AlbumID": 409,
      "ArtistID": 154,
      "FileName": "09 The Sound of the End.mp3",
      "ID": 905,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "The Sound of the End"
  },
  {
      "AlbumID": 421,
      "ArtistID": 154,
      "FileName": "09. Emil.mp3",
      "ID": 906,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Emil"
  },
  {
      "AlbumID": 420,
      "ArtistID": 152,
      "FileName": "09. Grandma.mp3",
      "ID": 907,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Grandma"
  },
  {
      "AlbumID": 422,
      "ArtistID": 162,
      "FileName": "09. Shadowlord.mp3",
      "ID": 908,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Shadowlord"
  },
  {
      "AlbumID": 413,
      "ArtistID": 156,
      "FileName": "09. Song Of The Ancients - Atonement.mp3",
      "ID": 909,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Song Of The Ancients - Atonement"
  },
  {
      "AlbumID": 423,
      "ArtistID": 163,
      "FileName": "09. Veil (The Prestigious Mask).mp3",
      "ID": 910,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Veil (The Prestigious Mask)"
  },
  {
      "AlbumID": 410,
      "ArtistID": 154,
      "FileName": "09. Voice of no Return - Guitar.mp3",
      "ID": 911,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Voice of no Return - Guitar"
  },
  {
      "AlbumID": 406,
      "ArtistID": 162,
      "FileName": "09. Yonah - Pluck Ver..mp3",
      "ID": 912,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Yonah - Pluck Ver."
  },
  {
      "AlbumID": 430,
      "ArtistID": 27,
      "FileName": "09.Voice of NO Return.mp3",
      "ID": 913,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Voice of NO Return"
  },
  {
      "AlbumID": 431,
      "ArtistID": 162,
      "FileName": "10 Shadowlord-Music Box Ver.mp3",
      "ID": 914,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Shadowlord-Music Box Ver."
  },
  {
      "AlbumID": 419,
      "ArtistID": 176,
      "FileName": "10. Piano - The Tower.mp3",
      "ID": 915,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Piano: The Tower"
  },
  {
      "AlbumID": 422,
      "ArtistID": 151,
      "FileName": "10. The Wretched Automatons.mp3",
      "ID": 916,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "The Wretched Automatons"
  },
  {
      "AlbumID": 416,
      "ArtistID": 152,
      "FileName": "10. Weight of the World (Emi Evans & J'Nique Nicole Vocals).mp3",
      "ID": 917,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Weight of the World (Emi Evans & JNique Nicole Vocals)"
  },
  {
      "AlbumID": 409,
      "ArtistID": 154,
      "FileName": "11 The Tower.mp3",
      "ID": 918,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "The Tower"
  },
  {
      "AlbumID": 420,
      "ArtistID": 152,
      "FileName": "11. Ashes of Dreams (Ochestral).mp3",
      "ID": 919,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Orchestra: Ashes of Dreams"
  },
  {
      "AlbumID": 421,
      "ArtistID": 154,
      "FileName": "11. Ashes of Dreams.mp3",
      "ID": 920,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Ashes of Dreams"
  },
  {
      "AlbumID": 410,
      "ArtistID": 154,
      "FileName": "11. Faltering Prayer - Dawn Breeze.mp3",
      "ID": 921,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Faltering Prayer - Dawn Breeze"
  },
  {
      "AlbumID": 423,
      "ArtistID": 163,
      "FileName": "11. Heavy Heart (Emil_Piano ver.).mp3",
      "ID": 922,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Heavy Heart (Emil-Piano ver.)"
  },
  {
      "AlbumID": 417,
      "ArtistID": 160,
      "FileName": "11. Hoshi No Mebuki (Nature's Blessing).mp3",
      "ID": 923,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Hoshi No Mebuki (Natures Blessing)"
  },
  {
      "AlbumID": 419,
      "ArtistID": 179,
      "FileName": "11. Piano - The Sound of the End.mp3",
      "ID": 924,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Piano: The Sound of the End"
  },
  {
      "AlbumID": 421,
      "ArtistID": 154,
      "FileName": "12. Grandma.mp3",
      "ID": 925,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Grandma"
  },
  {
      "AlbumID": 419,
      "ArtistID": 162,
      "FileName": "12. Piano - Vague Hope.mp3",
      "ID": 926,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Piano: Vague Hope"
  },
  {
      "AlbumID": 417,
      "ArtistID": 160,
      "FileName": "12. Sabigoe (Dignified Voice).mp3",
      "ID": 927,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Sabigoe (Dignified Voice)"
  },
  {
      "AlbumID": 411,
      "ArtistID": 180,
      "FileName": "13. The Wretched Automatons - Weiss Edition Arrangement.mp3",
      "ID": 928,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "The Wretched Automatons - Weiss Edition Arrangement"
  },
  {
      "AlbumID": 417,
      "ArtistID": 160,
      "FileName": "13. Toki No Kane (Bell Of Time).mp3",
      "ID": 929,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Toki No Kane (Bell Of Time)"
  },
  {
      "AlbumID": 410,
      "ArtistID": 154,
      "FileName": "13. Treasured Times.mp3",
      "ID": 930,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Treasured Times"
  },
  {
      "AlbumID": 406,
      "ArtistID": 155,
      "FileName": "14. Dispossession - Piano Ver..mp3",
      "ID": 931,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Dispossession - Piano Ver."
  },
  {
      "AlbumID": 411,
      "ArtistID": 181,
      "FileName": "14. Grandma - Weiss Edition Arrangement.mp3",
      "ID": 932,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Grandma - Weiss Edition Arrangement"
  },
  {
      "AlbumID": 414,
      "ArtistID": 175,
      "FileName": "14. The Ultimate Weapon.mp3",
      "ID": 933,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "The Ultimate Weapon"
  },
  {
      "AlbumID": 410,
      "ArtistID": 154,
      "FileName": "14. Vague Hope - Cold Rain.mp3",
      "ID": 934,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Vague Hope - Cold Rain"
  },
  {
      "AlbumID": 409,
      "ArtistID": 154,
      "FileName": "15 Kainé.mp3",
      "ID": 935,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Kainé"
  },
  {
      "AlbumID": 406,
      "ArtistID": 151,
      "FileName": "15. Ashes of Dreams - New.mp3",
      "ID": 936,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Ashes of Dreams - New"
  },
  {
      "AlbumID": 417,
      "ArtistID": 160,
      "FileName": "15. Aun (Breathe).mp3",
      "ID": 937,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Aun (Breathe)"
  },
  {
      "AlbumID": 410,
      "ArtistID": 154,
      "FileName": "15. Weight of the World English Version.mp3",
      "ID": 938,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Weight of the World English Version"
  },
  {
      "AlbumID": 409,
      "ArtistID": 154,
      "FileName": "16 Ashes of Dreams.mp3",
      "ID": 939,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Ashes of Dreams"
  },
  {
      "AlbumID": 414,
      "ArtistID": 175,
      "FileName": "16. Dispossession (Piano Version).mp3",
      "ID": 940,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Dispossession (Piano Version)"
  },
  {
      "AlbumID": 406,
      "ArtistID": 162,
      "FileName": "16. Kainé - Premonition.mp3",
      "ID": 941,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Kainé - Premonition"
  },
  {
      "AlbumID": 417,
      "ArtistID": 160,
      "FileName": "16. Omokage (Vestige).mp3",
      "ID": 942,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Omokage (Vestige)"
  },
  {
      "AlbumID": 410,
      "ArtistID": 154,
      "FileName": "17. City Ruins - Shade.mp3",
      "ID": 943,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "City Ruins - Shade"
  },
  {
      "AlbumID": 414,
      "ArtistID": 175,
      "FileName": "17. Dispossession (Strings Version).mp3",
      "ID": 944,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Dispossession (Strings Version)"
  },
  {
      "AlbumID": 406,
      "ArtistID": 166,
      "FileName": "17. Song of the Ancients - Devola.mp3",
      "ID": 945,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Song of the Ancients - Devola"
  },
  {
      "AlbumID": 414,
      "ArtistID": 175,
      "FileName": "18. Dispossession (Pluck Version).mp3",
      "ID": 946,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Dispossession (Pluck Version)"
  },
  {
      "AlbumID": 417,
      "ArtistID": 160,
      "FileName": "18. Kyusai (Aid).mp3",
      "ID": 947,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Kyusai (Aid)"
  },
  {
      "AlbumID": 406,
      "ArtistID": 162,
      "FileName": "18. The Ultimate Weapon.mp3",
      "ID": 948,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "The Ultimate Weapon"
  },
  {
      "AlbumID": 414,
      "ArtistID": 175,
      "FileName": "19. Dispossession (Music Box Version).mp3",
      "ID": 949,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Dispossession (Music Box Version)"
  },
  {
      "AlbumID": 411,
      "ArtistID": 182,
      "FileName": "19. Fleeting Words - Weiss Edition Arrangement.mp3",
      "ID": 950,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Fleeting Words - Weiss Edition Arrangement"
  },
  {
      "AlbumID": 406,
      "ArtistID": 162,
      "FileName": "19. Halua.mp3",
      "ID": 951,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Halua"
  },
  {
      "AlbumID": 410,
      "ArtistID": 154,
      "FileName": "19. Voice of no Return - Normal.mp3",
      "ID": 952,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Voice of no Return - Normal"
  },
  {
      "AlbumID": 414,
      "ArtistID": 175,
      "FileName": "20. Yonah (Piano Version).mp3",
      "ID": 953,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Yonah (Piano Version)"
  },
  {
      "AlbumID": 414,
      "ArtistID": 175,
      "FileName": "21. Yonah (Strings Version).mp3",
      "ID": 954,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Yonah (Strings Version)"
  },
  {
      "AlbumID": 406,
      "ArtistID": 166,
      "FileName": "22. His Dream.mp3",
      "ID": 955,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "His Dream"
  },
  {
      "AlbumID": 414,
      "ArtistID": 175,
      "FileName": "22. Yonah (Pluck Version 1).mp3",
      "ID": 956,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Yonah (Pluck Version 1)"
  },
  {
      "AlbumID": 406,
      "ArtistID": 166,
      "FileName": "23. This Dream.mp3",
      "ID": 957,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "This Dream"
  },
  {
      "AlbumID": 414,
      "ArtistID": 175,
      "FileName": "23. Yonah (Pluck Version 2).mp3",
      "ID": 958,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Yonah (Pluck Version 2)"
  },
  {
      "AlbumID": 406,
      "ArtistID": 155,
      "FileName": "24. Dispossession - Strings Ver..mp3",
      "ID": 959,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Dispossession - Strings Ver."
  },
  {
      "AlbumID": 410,
      "ArtistID": 154,
      "FileName": "26. Broken Heart.mp3",
      "ID": 960,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Broken Heart"
  },
  {
      "AlbumID": 410,
      "ArtistID": 154,
      "FileName": "27. Wretched Weaponry ：Quiet.mp3",
      "ID": 961,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Wretched Weaponry: Quiet"
  },
  {
      "AlbumID": 406,
      "ArtistID": 162,
      "FileName": "27. Yonah - Piano Ver..mp3",
      "ID": 962,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Yonah - Piano Ver."
  },
  {
      "AlbumID": 406,
      "ArtistID": 151,
      "FileName": "28. Ashes of Dreams - Nouveau.mp3",
      "ID": 963,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Ashes of Dreams - Nouveau"
  },
  {
      "AlbumID": 414,
      "ArtistID": 158,
      "FileName": "28. His Dream.mp3",
      "ID": 964,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "His Dream"
  },
  {
      "AlbumID": 410,
      "ArtistID": 154,
      "FileName": "28. Mourning.mp3",
      "ID": 965,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Mourning"
  },
  {
      "AlbumID": 406,
      "ArtistID": 151,
      "FileName": "29. Ashes of Dreams - Naudhaich.mp3",
      "ID": 966,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Ashes of Dreams - Naudhaich"
  },
  {
      "AlbumID": 414,
      "ArtistID": 158,
      "FileName": "29. This Dream.mp3",
      "ID": 967,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "This Dream"
  },
  {
      "AlbumID": 406,
      "ArtistID": 151,
      "FileName": "30. Ashes of Dreams - Lost Music Box Version.mp3",
      "ID": 968,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Ashes of Dreams - Lost Music Box Version"
  },
  {
      "AlbumID": 414,
      "ArtistID": 158,
      "FileName": "30. Repose.mp3",
      "ID": 969,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Repose"
  },
  {
      "AlbumID": 410,
      "ArtistID": 154,
      "FileName": "30. Weight of the World Kowaretasekainouta.mp3",
      "ID": 970,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Weight of the World Kowaretasekainouta"
  },
  {
      "AlbumID": 406,
      "ArtistID": 154,
      "FileName": "31. Fleeting Words - Family.mp3",
      "ID": 971,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Fleeting Words - Family"
  },
  {
      "AlbumID": 410,
      "ArtistID": 154,
      "FileName": "31. Rebirth & Hope.mp3",
      "ID": 972,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Rebirth & Hope"
  },
  {
      "AlbumID": 406,
      "ArtistID": 166,
      "FileName": "33. Repose.mp3",
      "ID": 973,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Repose"
  },
  {
      "AlbumID": 410,
      "ArtistID": 154,
      "FileName": "34. Widespread Illness.mp3",
      "ID": 974,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Widespread Illness"
  },
  {
      "AlbumID": 406,
      "ArtistID": 166,
      "FileName": "35. Dispossession - Music Box Ver..mp3",
      "ID": 975,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Dispossession - Music Box Ver."
  },
  {
      "AlbumID": 410,
      "ArtistID": 154,
      "FileName": "35. Fortress of Lies.mp3",
      "ID": 976,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Fortress of Lies"
  },
  {
      "AlbumID": 410,
      "ArtistID": 154,
      "FileName": "36. Vague Hope - Spring Rain.mp3",
      "ID": 977,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Vague Hope - Spring Rain"
  },
  {
      "AlbumID": 414,
      "ArtistID": 158,
      "FileName": "37. Emil (Sacrifice).mp3",
      "ID": 978,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Emil (Sacrifice)"
  },
  {
      "AlbumID": 410,
      "ArtistID": 154,
      "FileName": "38. Blissful Death.mp3",
      "ID": 979,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Blissful Death"
  },
  {
      "AlbumID": 414,
      "ArtistID": 158,
      "FileName": "39. Ashes of Dreams (New).mp3",
      "ID": 980,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Ashes of Dreams (New)"
  },
  {
      "AlbumID": 414,
      "ArtistID": 158,
      "FileName": "40. Ashes of Dreams (Nouveau).mp3",
      "ID": 981,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Ashes of Dreams (Nouveau)"
  },
  {
      "AlbumID": 406,
      "ArtistID": 155,
      "FileName": "40. Emil - Sacrifice.mp3",
      "ID": 982,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Emil - Sacrifice"
  },
  {
      "AlbumID": 410,
      "ArtistID": 154,
      "FileName": "40. Faltering Prayer - Starry Sky.mp3",
      "ID": 983,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Faltering Prayer - Starry Sky"
  },
  {
      "AlbumID": 414,
      "ArtistID": 158,
      "FileName": "41. Ashes of Dreams (Nuadhaich).mp3",
      "ID": 984,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Ashes of Dreams (Nuadhaich)"
  },
  {
      "AlbumID": 414,
      "ArtistID": 158,
      "FileName": "42. Ashes of Dreams (Aratanaru).mp3",
      "ID": 985,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Ashes of Dreams (Aratanaru)"
  },
  {
      "AlbumID": 410,
      "ArtistID": 154,
      "FileName": "42. The Tower.mp3",
      "ID": 986,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "The Tower"
  },
  {
      "AlbumID": 406,
      "ArtistID": 151,
      "FileName": "45. Ashes of Dreams - Aratanaru.mp3",
      "ID": 987,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Ashes of Dreams - Aratanaru"
  },
  {
      "AlbumID": 432,
      "ArtistID": 183,
      "FileName": "Kamura Song of Purification (Hinoe) - Japanese.mp3",
      "ID": 988,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Kamuras Song of Purification (Hinoe) - Japanese"
  },
  {
      "AlbumID": 432,
      "ArtistID": 183,
      "FileName": "Kamuras Song of Purification.mp3",
      "ID": 989,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 10,
      "Title": "Kamuras Song of Purification"
  },
  {
      "AlbumID": 426,
      "ArtistID": 152,
      "FileName": "01. Alien Manifestation (J'Nique Nicole Vocals).mp3",
      "ID": 990,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 11,
      "Title": "Alien Manifestation (JNique Nicole Vocals)"
  },
  {
      "AlbumID": 407,
      "ArtistID": 152,
      "FileName": "01. City Ruins.mp3",
      "ID": 991,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 11,
      "Title": "City Ruins"
  },
  {
      "AlbumID": 424,
      "ArtistID": 155,
      "FileName": "01. Emil - Karma.mp3",
      "ID": 992,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 11,
      "Title": "Emil - Karma"
  },
  {
      "AlbumID": 425,
      "ArtistID": 162,
      "FileName": "01. Kainé - Salvation.mp3",
      "ID": 993,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 11,
      "Title": "Kainé - Salvation"
  },
  {
      "AlbumID": 408,
      "ArtistID": 153,
      "FileName": "01. Snow in Summer (Gestalt).mp3",
      "ID": 994,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 11,
      "Title": "Snow in Summer"
  },
  {
      "AlbumID": 414,
      "ArtistID": 175,
      "FileName": "01. Snow in Summer (Origin).mp3",
      "ID": 995,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 11,
      "Title": "Snow in Summer"
  },
  {
      "AlbumID": 412,
      "ArtistID": 156,
      "FileName": "01. Snow in Summer (Weiss).mp3",
      "ID": 996,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 11,
      "Title": "Snow in Summer"
  },
  {
      "AlbumID": 411,
      "ArtistID": 151,
      "FileName": "01. Snow in Summer - Another Edit Version.mp3",
      "ID": 997,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 11,
      "Title": "Snow in Summer - Another Edit Version"
  },
  {
      "AlbumID": 428,
      "ArtistID": 151,
      "FileName": "01. Snow in Summer.mp3",
      "ID": 998,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 11,
      "Title": "Snow in Summer"
  },
  {
      "AlbumID": 427,
      "ArtistID": 166,
      "FileName": "01. Song of the Ancients - Devola.mp3",
      "ID": 999,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 11,
      "Title": "Song of the Ancients - Devola"
  },
  {
      "AlbumID": 407,
      "ArtistID": 152,
      "FileName": "02. Amusement Park.mp3",
      "ID": 1000,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 11,
      "Title": "Amusement Park"
  },
  {
      "AlbumID": 418,
      "ArtistID": 153,
      "FileName": "02. Hills of Radiant Wind.mp3",
      "ID": 1001,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 11,
      "Title": "Hills of Radiant Wind"
  },
  {
      "AlbumID": 414,
      "ArtistID": 175,
      "FileName": "02. Hills of Radiant Winds (Gestalt).mp3",
      "ID": 1002,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 11,
      "Title": "Hills of Radiant Winds"
  },
  {
      "AlbumID": 406,
      "ArtistID": 164,
      "FileName": "02. Hills of Radiant Winds (Replicant).mp3",
      "ID": 1003,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 11,
      "Title": "Hills of Radiant Winds"
  },
  {
      "AlbumID": 412,
      "ArtistID": 156,
      "FileName": "02. Hills of Radiant Winds (Weiss).mp3",
      "ID": 1004,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 11,
      "Title": "Hills of Radiant Winds"
  },
  {
      "AlbumID": 421,
      "ArtistID": 154,
      "FileName": "02. Hills of Radiant Winds.mp3",
      "ID": 1005,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 11,
      "Title": "Hills of Radiant Winds"
  },
  {
      "AlbumID": 428,
      "ArtistID": 155,
      "FileName": "02. Shadowlord.mp3",
      "ID": 1006,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 11,
      "Title": "Shadowlord"
  },
  {
      "AlbumID": 409,
      "ArtistID": 154,
      "FileName": "03 Memories of Dust.mp3",
      "ID": 1007,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 11,
      "Title": "Memories of Dust"
  },
  {
      "AlbumID": 429,
      "ArtistID": 184,
      "FileName": "03. Birth of a Wish.mp3",
      "ID": 1008,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 11,
      "Title": "Birth of a Wish"
  },
  {
      "AlbumID": 416,
      "ArtistID": 152,
      "FileName": "03. Deep Crimson Foe.mp3",
      "ID": 1009,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 11,
      "Title": "Deep Crimson Foe"
  },
  {
      "AlbumID": 422,
      "ArtistID": 185,
      "FileName": "03. Hills of Radiant Wind.mp3",
      "ID": 1010,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 11,
      "Title": "Hills of Radiant Wind"
  },
  {
      "AlbumID": 411,
      "ArtistID": 162,
      "FileName": "03. Kainé - Another Edit Version.mp3",
      "ID": 1011,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 11,
      "Title": "Kainé - Another Edit Version"
  },
  {
      "AlbumID": 412,
      "ArtistID": 156,
      "FileName": "03. Kainé.mp3",
      "ID": 1012,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 11,
      "Title": "Kaine"
  },
  {
      "AlbumID": 427,
      "ArtistID": 162,
      "FileName": "03. Song of the Ancients - Hollow Dreams.mp3",
      "ID": 1013,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 11,
      "Title": "Song of the Ancients - Hollow Dreams"
  },
  {
      "AlbumID": 430,
      "ArtistID": 27,
      "FileName": "03.City Ruins (Shade).mp3",
      "ID": 1014,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 11,
      "Title": "City Ruins (Shade)"
  },
  {
      "AlbumID": 407,
      "ArtistID": 152,
      "FileName": "04. Alien Manifestation.mp3",
      "ID": 1015,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 11,
      "Title": "Alien Manifestation"
  },
  {
      "AlbumID": 424,
      "ArtistID": 162,
      "FileName": "04. Emil.mp3",
      "ID": 1016,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 11,
      "Title": "Emil"
  },
  {
      "AlbumID": 410,
      "ArtistID": 154,
      "FileName": "04. Memories of Dust.mp3",
      "ID": 1017,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 11,
      "Title": "Memories of Dust"
  },
  {
      "AlbumID": 416,
      "ArtistID": 152,
      "FileName": "04. Song of the Ancients (Emi Evans & J'Nique Nicole Vocals).mp3",
      "ID": 1018,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 11,
      "Title": "Song of the Ancients (Emi Evans & JNique Nicole Vocals)"
  },
  {
      "AlbumID": 427,
      "ArtistID": 155,
      "FileName": "04. Song of the Ancients - Fate.mp3",
      "ID": 1019,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 11,
      "Title": "Song of the Ancients - Fate"
  },
  {
      "AlbumID": 418,
      "ArtistID": 153,
      "FileName": "04. The Dark Colossus Destroys All.mp3",
      "ID": 1020,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 11,
      "Title": "The Dark Colossus Destroys All"
  },
  {
      "AlbumID": 410,
      "ArtistID": 154,
      "FileName": "05. Birth of a Wish.mp3",
      "ID": 1021,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 11,
      "Title": "Birth of a Wish"
  },
  {
      "AlbumID": 414,
      "ArtistID": 175,
      "FileName": "05. Cold Steel Coffin.mp3",
      "ID": 1022,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 11,
      "Title": "Cold Steel Coffin"
  },
  {
      "AlbumID": 412,
      "ArtistID": 156,
      "FileName": "05. Deep Crimson Foe.mp3",
      "ID": 1023,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 11,
      "Title": "Deep Crimson Foe"
  },
  {
      "AlbumID": 420,
      "ArtistID": 152,
      "FileName": "05. Gods Bound by Rules.mp3",
      "ID": 1024,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 11,
      "Title": "Gods Bound by Rules"
  },
  {
      "AlbumID": 407,
      "ArtistID": 152,
      "FileName": "05. The Tower.mp3",
      "ID": 1025,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 11,
      "Title": "The Tower"
  },
  {
      "AlbumID": 407,
      "ArtistID": 152,
      "FileName": "06. Dependent Weakling.mp3",
      "ID": 1026,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 11,
      "Title": "Dependent Weakling"
  },
  {
      "AlbumID": 411,
      "ArtistID": 155,
      "FileName": "06. Emil - Another Edit Version.mp3",
      "ID": 1027,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 11,
      "Title": "Emil - Another Edit Version"
  },
  {
      "AlbumID": 412,
      "ArtistID": 156,
      "FileName": "06. Emil.mp3",
      "ID": 1028,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 11,
      "Title": "Emil"
  },
  {
      "AlbumID": 428,
      "ArtistID": 167,
      "FileName": "06. Shadowlord.mp3",
      "ID": 1029,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 11,
      "Title": "Shadowlord"
  },
  {
      "AlbumID": 421,
      "ArtistID": 154,
      "FileName": "06. The Wretched Automatons.mp3",
      "ID": 1030,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 11,
      "Title": "The Wretched Automatons"
  },
  {
      "AlbumID": 416,
      "ArtistID": 152,
      "FileName": "07. A Beautiful Song (Emi Evans & J'Nique Nicole Vocals).mp3",
      "ID": 1031,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 11,
      "Title": "A Beautiful Song (Emi Evans & JNique Nicole Vocals)"
  },
  {
      "AlbumID": 407,
      "ArtistID": 152,
      "FileName": "07. Bipolar Nightmare.mp3",
      "ID": 1032,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 11,
      "Title": "Bipolar Nightmare"
  },
  {
      "AlbumID": 424,
      "ArtistID": 167,
      "FileName": "07. Emil.mp3",
      "ID": 1033,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 11,
      "Title": "Emil"
  },
  {
      "AlbumID": 411,
      "ArtistID": 154,
      "FileName": "07. Fleeting Words - Another Edit Version.mp3",
      "ID": 1034,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 11,
      "Title": "Fleeting Words - Another Edit Version"
  },
  {
      "AlbumID": 412,
      "ArtistID": 156,
      "FileName": "07. Fleeting Words.mp3",
      "ID": 1035,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 11,
      "Title": "Fleeting Words"
  },
  {
      "AlbumID": 421,
      "ArtistID": 154,
      "FileName": "07. Possessed by Disease.mp3",
      "ID": 1036,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 11,
      "Title": "Possessed by Disease"
  },
  {
      "AlbumID": 427,
      "ArtistID": 178,
      "FileName": "07. Song of the Ancients.mp3",
      "ID": 1037,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 11,
      "Title": "Song of the Ancients"
  },
  {
      "AlbumID": 409,
      "ArtistID": 154,
      "FileName": "08 Pascal.mp3",
      "ID": 1038,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 11,
      "Title": "Pascal"
  },
  {
      "AlbumID": 416,
      "ArtistID": 152,
      "FileName": "08. Copied City.mp3",
      "ID": 1039,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 11,
      "Title": "Copied City"
  },
  {
      "AlbumID": 407,
      "ArtistID": 152,
      "FileName": "08. Mourning.mp3",
      "ID": 1040,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 11,
      "Title": "Mourning"
  },
  {
      "AlbumID": 412,
      "ArtistID": 156,
      "FileName": "08. Song of the Ancients (Weiss).mp3",
      "ID": 1041,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 11,
      "Title": "Song of the Ancients"
  },
  {
      "AlbumID": 411,
      "ArtistID": 186,
      "FileName": "08. Song of the Ancients - Another Edit Version.mp3",
      "ID": 1042,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 11,
      "Title": "Song of the Ancients - Another Edit Version"
  },
  {
      "AlbumID": 427,
      "ArtistID": 187,
      "FileName": "08. Song of the Ancients.mp3",
      "ID": 1043,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 11,
      "Title": "Song of the Ancients"
  },
  {
      "AlbumID": 414,
      "ArtistID": 175,
      "FileName": "08. The Wretched Automatons.mp3",
      "ID": 1044,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 11,
      "Title": "The Wretched Automatons"
  },
  {
      "AlbumID": 421,
      "ArtistID": 154,
      "FileName": "08. Weight of the World.mp3",
      "ID": 1045,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 11,
      "Title": "Weight of the World"
  },
  {
      "AlbumID": 430,
      "ArtistID": 27,
      "FileName": "08.Pascal.mp3",
      "ID": 1046,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 11,
      "Title": "Pascal"
  },
  {
      "AlbumID": 414,
      "ArtistID": 175,
      "FileName": "09. City of Commerce.mp3",
      "ID": 1047,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 11,
      "Title": "City of Commerce"
  },
  {
      "AlbumID": 416,
      "ArtistID": 152,
      "FileName": "09. Crumbling Lies.mp3",
      "ID": 1048,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 11,
      "Title": "Crumbling Lies"
  },
  {
      "AlbumID": 407,
      "ArtistID": 152,
      "FileName": "09. The Sound of the End.mp3",
      "ID": 1049,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 11,
      "Title": "The Sound of the End"
  },
  {
      "AlbumID": 409,
      "ArtistID": 154,
      "FileName": "10 Alien Manifestation.mp3",
      "ID": 1050,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 11,
      "Title": "Alien Manifestation"
  },
  {
      "AlbumID": 406,
      "ArtistID": 155,
      "FileName": "10. City of Commerce.mp3",
      "ID": 1051,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 11,
      "Title": "City of Commerce"
  },
  {
      "AlbumID": 421,
      "ArtistID": 154,
      "FileName": "10. Shadowlord -Live.mp3",
      "ID": 1052,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 11,
      "Title": "Shadowlord"
  },
  {
      "AlbumID": 420,
      "ArtistID": 152,
      "FileName": "10. Shadowlord.mp3",
      "ID": 1053,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 11,
      "Title": "Shadowlord"
  },
  {
      "AlbumID": 414,
      "ArtistID": 175,
      "FileName": "10. Song of the Ancients (Popola).mp3",
      "ID": 1054,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 11,
      "Title": "Song of the Ancients (Popola)"
  },
  {
      "AlbumID": 407,
      "ArtistID": 152,
      "FileName": "10. Weight of the World.mp3",
      "ID": 1055,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 11,
      "Title": "Weight of the World"
  },
  {
      "AlbumID": 413,
      "ArtistID": 156,
      "FileName": "11. Alien Manifestation.mp3",
      "ID": 1056,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 11,
      "Title": "Alien Manifestation"
  },
  {
      "AlbumID": 411,
      "ArtistID": 188,
      "FileName": "11. Kainé - Weiss Edition Arrangement.mp3",
      "ID": 1057,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 11,
      "Title": "Kainé - Weiss Edition Arrangement"
  },
  {
      "AlbumID": 412,
      "ArtistID": 156,
      "FileName": "11. Kainé.mp3",
      "ID": 1058,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 11,
      "Title": "Kaine"
  },
  {
      "AlbumID": 414,
      "ArtistID": 175,
      "FileName": "11. The Prestigious Mask (Gestalt).mp3",
      "ID": 1059,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 11,
      "Title": "The Prestigious Mask"
  },
  {
      "AlbumID": 406,
      "ArtistID": 155,
      "FileName": "11. The Prestigious Mask.mp3",
      "ID": 1060,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 11,
      "Title": "The Prestigious Mask"
  },
  {
      "AlbumID": 414,
      "ArtistID": 175,
      "FileName": "12. Temple of Drifting Sands (Gestalt).mp3",
      "ID": 1061,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 11,
      "Title": "Temple of Drifting Sands"
  },
  {
      "AlbumID": 406,
      "ArtistID": 155,
      "FileName": "12. Temple of Drifting Sands.mp3",
      "ID": 1062,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 11,
      "Title": "Temple of Drifting Sands"
  },
  {
      "AlbumID": 413,
      "ArtistID": 156,
      "FileName": "12. Weight Of The World.mp3",
      "ID": 1063,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 11,
      "Title": "Weight Of The World"
  },
  {
      "AlbumID": 409,
      "ArtistID": 154,
      "FileName": "13 Mourning.mp3",
      "ID": 1064,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 11,
      "Title": "Mourning"
  },
  {
      "AlbumID": 414,
      "ArtistID": 175,
      "FileName": "13. Gods Bound by Rules.mp3",
      "ID": 1065,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 11,
      "Title": "Gods Bound by Rules"
  },
  {
      "AlbumID": 421,
      "ArtistID": 154,
      "FileName": "13. Song of the Ancients - Fate.mp3",
      "ID": 1066,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 11,
      "Title": "Song of the Ancients - Fate"
  },
  {
      "AlbumID": 409,
      "ArtistID": 154,
      "FileName": "14 Weight of the World.mp3",
      "ID": 1067,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 11,
      "Title": "Weight of the World"
  },
  {
      "AlbumID": 412,
      "ArtistID": 156,
      "FileName": "14. Grandma.mp3",
      "ID": 1068,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 11,
      "Title": "Grandma"
  },
  {
      "AlbumID": 409,
      "ArtistID": 154,
      "FileName": "17 Weight of the World - the End of YoRHa.mp3",
      "ID": 1069,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 11,
      "Title": "Weight of the World - the End of YoRHa"
  },
  {
      "AlbumID": 412,
      "ArtistID": 156,
      "FileName": "19. Fleeting Words.mp3",
      "ID": 1070,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 11,
      "Title": "Fleeting Words"
  },
  {
      "AlbumID": 410,
      "ArtistID": 154,
      "FileName": "20. Pascal.mp3",
      "ID": 1071,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 11,
      "Title": "Pascal"
  },
  {
      "AlbumID": 410,
      "ArtistID": 154,
      "FileName": "21. Forest Kingdom.mp3",
      "ID": 1072,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 11,
      "Title": "Forest Kingdom"
  },
  {
      "AlbumID": 406,
      "ArtistID": 166,
      "FileName": "21. The Lost Forest.mp3",
      "ID": 1073,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 11,
      "Title": "The Lost Forest"
  },
  {
      "AlbumID": 410,
      "ArtistID": 154,
      "FileName": "23. Copied City.mp3",
      "ID": 1074,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 11,
      "Title": "Copied City"
  },
  {
      "AlbumID": 414,
      "ArtistID": 158,
      "FileName": "24. The Dark Colossus Destroys All.mp3",
      "ID": 1075,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 11,
      "Title": "The Dark Colossus Destroys All"
  },
  {
      "AlbumID": 410,
      "ArtistID": 154,
      "FileName": "24. Wretched Weaponry ：Medium／Dynamic.mp3",
      "ID": 1076,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 11,
      "Title": "Wretched Weaponry: Medium-Dynamic"
  },
  {
      "AlbumID": 406,
      "ArtistID": 162,
      "FileName": "25. Kainé - Salvation.mp3",
      "ID": 1077,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 11,
      "Title": "Kainé - Salvation"
  },
  {
      "AlbumID": 414,
      "ArtistID": 158,
      "FileName": "25. Song of the Ancients (Hollow Dreams).mp3",
      "ID": 1078,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 11,
      "Title": "Song of the Ancients (Hollow Dreams)"
  },
  {
      "AlbumID": 414,
      "ArtistID": 158,
      "FileName": "26. Kainé (Salvation).mp3",
      "ID": 1079,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 11,
      "Title": "Kainé (Salvation)"
  },
  {
      "AlbumID": 414,
      "ArtistID": 158,
      "FileName": "27. Kainé (Escape).mp3",
      "ID": 1080,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 11,
      "Title": "Kainé (Escape)"
  },
  {
      "AlbumID": 406,
      "ArtistID": 162,
      "FileName": "32. Fleeting Words - Outsider.mp3",
      "ID": 1081,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 11,
      "Title": "Fleeting Words - Outsider"
  },
  {
      "AlbumID": 410,
      "ArtistID": 154,
      "FileName": "33. Crumbling Lies - Front.mp3",
      "ID": 1082,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 11,
      "Title": "Crumbling Lies - Front"
  },
  {
      "AlbumID": 414,
      "ArtistID": 158,
      "FileName": "34. Dance of the Evanescent.mp3",
      "ID": 1083,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 11,
      "Title": "Dance of the Evanescent"
  },
  {
      "AlbumID": 406,
      "ArtistID": 162,
      "FileName": "34. Song of the Ancients - Hollow Dreams.mp3",
      "ID": 1084,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 11,
      "Title": "Song of the Ancients - Hollow Dreams"
  },
  {
      "AlbumID": 410,
      "ArtistID": 154,
      "FileName": "37. Song of the Ancients - Atonement.mp3",
      "ID": 1085,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 11,
      "Title": "Song of the Ancients - Atonement"
  },
  {
      "AlbumID": 414,
      "ArtistID": 158,
      "FileName": "38. Shadowlord.mp3",
      "ID": 1086,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 11,
      "Title": "Shadowlord"
  },
  {
      "AlbumID": 406,
      "ArtistID": 155,
      "FileName": "38. Song of the Ancients - Fate.mp3",
      "ID": 1087,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 11,
      "Title": "Song of the Ancients - Fate"
  },
  {
      "AlbumID": 406,
      "ArtistID": 155,
      "FileName": "39. Emil - Karma.mp3",
      "ID": 1088,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 11,
      "Title": "Emil - Karma"
  },
  {
      "AlbumID": 410,
      "ArtistID": 154,
      "FileName": "41. Alien Manifestation.mp3",
      "ID": 1089,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 11,
      "Title": "Alien Manifestation"
  },
  {
      "AlbumID": 406,
      "ArtistID": 155,
      "FileName": "41. Shadowlord.mp3",
      "ID": 1090,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 11,
      "Title": "Shadowlord"
  },
  {
      "AlbumID": 406,
      "ArtistID": 162,
      "FileName": "43. Grandma - Reunion.mp3",
      "ID": 1091,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 11,
      "Title": "Grandma - Reunion"
  },
  {
      "AlbumID": 406,
      "ArtistID": 162,
      "FileName": "44. Kainé - Escape.mp3",
      "ID": 1092,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 11,
      "Title": "Kainé - Escape"
  },
  {
      "AlbumID": 410,
      "ArtistID": 154,
      "FileName": "44. The Sound of the End.mp3",
      "ID": 1093,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 11,
      "Title": "The Sound of the End"
  },
  {
      "AlbumID": 410,
      "ArtistID": 154,
      "FileName": "45. Weight of the World Nouveau - FR Version.mp3",
      "ID": 1094,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 11,
      "Title": "Weight of the World Nouveau - FR Version"
  },
  {
      "AlbumID": 410,
      "ArtistID": 154,
      "FileName": "46. Weight of the World the End of YoRHa.mp3",
      "ID": 1095,
      "More": "",
      "Private": "0",
      "Rank": "4",
      "TagID": 11,
      "Title": "Weight of the World the End of YoRHa"
  }
];
var Artists = [
  {
      "ID": 0,
      "More": "",
      "Name": "NIVIRO",
      "Rank": "4",
      "Thumb": "artists/NIVIRO.jpg"
  },
  {
      "ID": 1,
      "More": "",
      "Name": "Defqwop",
      "Rank": "4",
      "Thumb": "artists/Defqwop.jpg"
  },
  {
      "ID": 2,
      "More": "",
      "Name": "Brooks, Molly Ann, IZECOLD",
      "Rank": "4",
      "Thumb": "artists/Brooks, Molly Ann, IZECOLD.jpg"
  },
  {
      "ID": 3,
      "More": "",
      "Name": "Tobu",
      "Rank": "4",
      "Thumb": "artists/Tobu.jpg"
  },
  {
      "ID": 4,
      "More": "",
      "Name": "Virtual Riot",
      "Rank": "4",
      "Thumb": "artists/Virtual Riot.jpg"
  },
  {
      "ID": 5,
      "More": "",
      "Name": "Elektronomia",
      "Rank": "4",
      "Thumb": "artists/Elektronomia.jpg"
  },
  {
      "ID": 6,
      "More": "",
      "Name": "Jim Yosef",
      "Rank": "4",
      "Thumb": "artists/Jim Yosef.jpg"
  },
  {
      "ID": 7,
      "More": "",
      "Name": "Ahxello",
      "Rank": "4",
      "Thumb": "artists/Ahxello.jpg"
  },
  {
      "ID": 8,
      "More": "",
      "Name": "Doctor Vox",
      "Rank": "4",
      "Thumb": "artists/Doctor Vox.jpg"
  },
  {
      "ID": 9,
      "More": "",
      "Name": "Panda Eyes",
      "Rank": "4",
      "Thumb": "artists/Panda Eyes.jpg"
  },
  {
      "ID": 10,
      "More": "",
      "Name": "Razihel, TeamMate, Hyper Potions",
      "Rank": "4",
      "Thumb": "artists/Razihel, TeamMate, Hyper Potions.jpg"
  },
  {
      "ID": 11,
      "More": "",
      "Name": "Ampyx",
      "Rank": "4",
      "Thumb": "artists/Ampyx.jpg"
  },
  {
      "ID": 12,
      "More": "",
      "Name": "Distrion, Electro-Light",
      "Rank": "4",
      "Thumb": "artists/Distrion, Electro-Light.jpg"
  },
  {
      "ID": 13,
      "More": "",
      "Name": "Hoaprox",
      "Rank": "4",
      "Thumb": "artists/Hoaprox.jpg"
  },
  {
      "ID": 14,
      "More": "",
      "Name": "Steerner, Martell",
      "Rank": "4",
      "Thumb": "artists/Steerner, Martell.jpg"
  },
  {
      "ID": 15,
      "More": "",
      "Name": "Alan Walker",
      "Rank": "4",
      "Thumb": "artists/Alan Walker.jpg"
  },
  {
      "ID": 16,
      "More": "",
      "Name": "League of Legends",
      "Rank": "4",
      "Thumb": "artists/League of Legends.jpg"
  },
  {
      "ID": 17,
      "More": "",
      "Name": "Sonbeat",
      "Rank": "4",
      "Thumb": "artists/Sonbeat.jpg"
  },
  {
      "ID": 18,
      "More": "",
      "Name": "Vexento",
      "Rank": "4",
      "Thumb": "artists/Vexento.jpg"
  },
  {
      "ID": 19,
      "More": "",
      "Name": "Tez Cadey",
      "Rank": "4",
      "Thumb": "artists/Tez Cadey.jpg"
  },
  {
      "ID": 20,
      "More": "",
      "Name": "Mich",
      "Rank": "4",
      "Thumb": "artists/Mich.jpg"
  },
  {
      "ID": 21,
      "More": "",
      "Name": "Jebase",
      "Rank": "4",
      "Thumb": "artists/Jebase.jpg"
  },
  {
      "ID": 22,
      "More": "",
      "Name": "TheFatRat",
      "Rank": "4",
      "Thumb": "artists/TheFatRat.jpg"
  },
  {
      "ID": 23,
      "More": "",
      "Name": "O M II N",
      "Rank": "4",
      "Thumb": "artists/O M II N.jpg"
  },
  {
      "ID": 24,
      "More": "",
      "Name": "K-391",
      "Rank": "4",
      "Thumb": "artists/K-391.jpg"
  },
  {
      "ID": 25,
      "More": "",
      "Name": "Eightfold X MKJ",
      "Rank": "4",
      "Thumb": "artists/Eightfold X MKJ.jpg"
  },
  {
      "ID": 26,
      "More": "",
      "Name": "Contacreast, Diviners",
      "Rank": "4",
      "Thumb": "artists/Contacreast, Diviners.jpg"
  },
  {
      "ID": 27,
      "More": "",
      "Name": "Eve",
      "Rank": "4",
      "Thumb": "artists/Eve.jpg"
  },
  {
      "ID": 28,
      "More": "",
      "Name": "Giga",
      "Rank": "4",
      "Thumb": "artists/Giga.jpg"
  },
  {
      "ID": 29,
      "More": "",
      "Name": "Azari",
      "Rank": "4",
      "Thumb": "artists/Azari.jpg"
  },
  {
      "ID": 30,
      "More": "",
      "Name": "takayan",
      "Rank": "4",
      "Thumb": "artists/takayan.jpg"
  },
  {
      "ID": 31,
      "More": "",
      "Name": "Ayase",
      "Rank": "4",
      "Thumb": "artists/Ayase.jpg"
  },
  {
      "ID": 32,
      "More": "",
      "Name": "Kanaria",
      "Rank": "4",
      "Thumb": "artists/Kanaria.jpg"
  },
  {
      "ID": 33,
      "More": "",
      "Name": "Chinozo",
      "Rank": "4",
      "Thumb": "artists/Chinozo.jpg"
  },
  {
      "ID": 34,
      "More": "",
      "Name": "whaledontsleep",
      "Rank": "4",
      "Thumb": "artists/whaledontsleep.jpg"
  },
  {
      "ID": 35,
      "More": "",
      "Name": "CHIHIRO",
      "Rank": "4",
      "Thumb": "artists/CHIHIRO.jpg"
  },
  {
      "ID": 36,
      "More": "",
      "Name": "Kobasolo",
      "Rank": "4",
      "Thumb": "artists/Kobasolo.jpg"
  },
  {
      "ID": 37,
      "More": "",
      "Name": "Ms.OOJA",
      "Rank": "4",
      "Thumb": "artists/Ms.OOJA.jpg"
  },
  {
      "ID": 38,
      "More": "",
      "Name": "Akie",
      "Rank": "4",
      "Thumb": "artists/Akie.jpg"
  },
  {
      "ID": 39,
      "More": "",
      "Name": "山田タマル",
      "Rank": "4",
      "Thumb": "artists/山田タマル.jpg"
  },
  {
      "ID": 40,
      "More": "",
      "Name": "BENI",
      "Rank": "4",
      "Thumb": "artists/BENI.jpg"
  },
  {
      "ID": 41,
      "More": "",
      "Name": "Tiara",
      "Rank": "4",
      "Thumb": "artists/Tiara.jpg"
  },
  {
      "ID": 42,
      "More": "",
      "Name": "Duca",
      "Rank": "4",
      "Thumb": "artists/Duca.jpg"
  },
  {
      "ID": 43,
      "More": "",
      "Name": "majiko",
      "Rank": "4",
      "Thumb": "artists/majiko.jpg"
  },
  {
      "ID": 44,
      "More": "",
      "Name": "Uru",
      "Rank": "4",
      "Thumb": "artists/Uru.jpg"
  },
  {
      "ID": 45,
      "More": "",
      "Name": "Riyu Renji",
      "Rank": "4",
      "Thumb": "artists/Riyu Renji.jpg"
  },
  {
      "ID": 46,
      "More": "",
      "Name": "RSP",
      "Rank": "4",
      "Thumb": "artists/RSP.jpg"
  },
  {
      "ID": 47,
      "More": "",
      "Name": "茅原実里",
      "Rank": "4",
      "Thumb": "artists/茅原実里.jpg"
  },
  {
      "ID": 48,
      "More": "",
      "Name": "Rainych",
      "Rank": "4",
      "Thumb": "artists/Rainych.jpg"
  },
  {
      "ID": 49,
      "More": "",
      "Name": "TEE",
      "Rank": "4",
      "Thumb": "artists/TEE.jpg"
  },
  {
      "ID": 50,
      "More": "",
      "Name": "Rei Yasuda",
      "Rank": "4",
      "Thumb": "artists/Rei Yasuda.jpg"
  },
  {
      "ID": 51,
      "More": "",
      "Name": "7!!",
      "Rank": "4",
      "Thumb": "artists/7!!.jpg"
  },
  {
      "ID": 52,
      "More": "",
      "Name": "wacci",
      "Rank": "4",
      "Thumb": "artists/wacci.jpg"
  },
  {
      "ID": 53,
      "More": "",
      "Name": "ShibayanRecords",
      "Rank": "4",
      "Thumb": "artists/ShibayanRecords.jpg"
  },
  {
      "ID": 54,
      "More": "",
      "Name": "Happy Birthday",
      "Rank": "4",
      "Thumb": "artists/Happy Birthday.jpg"
  },
  {
      "ID": 55,
      "More": "",
      "Name": "shimamo",
      "Rank": "4",
      "Thumb": "artists/shimamo.jpg"
  },
  {
      "ID": 56,
      "More": "",
      "Name": "物語シリーズ",
      "Rank": "4",
      "Thumb": "artists/物語シリーズ.jpg"
  },
  {
      "ID": 57,
      "More": "",
      "Name": "JUJU, JAY'ED",
      "Rank": "4",
      "Thumb": "artists/JUJU, JAYED.jpg"
  },
  {
      "ID": 58,
      "More": "",
      "Name": "OFFICIAL HIGE DANDISM",
      "Rank": "4",
      "Thumb": "artists/OFFICIAL HIGE DANDISM.jpg"
  },
  {
      "ID": 59,
      "More": "",
      "Name": "ALI, AKLO",
      "Rank": "4",
      "Thumb": "artists/ALI, AKLO.jpg"
  },
  {
      "ID": 60,
      "More": "",
      "Name": "Mrs. GREEN APPLE",
      "Rank": "4",
      "Thumb": "artists/Mrs. GREEN APPLE.jpg"
  },
  {
      "ID": 61,
      "More": "",
      "Name": "ZUTOMAYO",
      "Rank": "4",
      "Thumb": "artists/ZUTOMAYO.jpg"
  },
  {
      "ID": 62,
      "More": "",
      "Name": "ヨルシカ",
      "Rank": "4",
      "Thumb": "artists/ヨルシカ.jpg"
  },
  {
      "ID": 63,
      "More": "",
      "Name": "sumika",
      "Rank": "4",
      "Thumb": "artists/sumika.jpg"
  },
  {
      "ID": 64,
      "More": "",
      "Name": "Aimer",
      "Rank": "4",
      "Thumb": "artists/Aimer.jpg"
  },
  {
      "ID": 65,
      "More": "",
      "Name": "BRIGHT",
      "Rank": "4",
      "Thumb": "artists/BRIGHT.jpg"
  },
  {
      "ID": 66,
      "More": "",
      "Name": "LiSA",
      "Rank": "4",
      "Thumb": "artists/LiSA.jpg"
  },
  {
      "ID": 67,
      "More": "",
      "Name": "Masayuki Suzuki, 鈴木愛理",
      "Rank": "4",
      "Thumb": "artists/Masayuki Suzuki, 鈴木愛理.jpg"
  },
  {
      "ID": 68,
      "More": "",
      "Name": "田所あずさ",
      "Rank": "4",
      "Thumb": "artists/田所あずさ.jpg"
  },
  {
      "ID": 69,
      "More": "",
      "Name": "Shxne",
      "Rank": "4",
      "Thumb": "artists/Shxne.jpg"
  },
  {
      "ID": 70,
      "More": "",
      "Name": "Selphius",
      "Rank": "4",
      "Thumb": "artists/Selphius.jpg"
  },
  {
      "ID": 71,
      "More": "",
      "Name": "誘宵美九 (CV: 茅原実里)",
      "Rank": "4",
      "Thumb": "artists/誘宵美九 (CV 茅原実里).jpg"
  },
  {
      "ID": 72,
      "More": "",
      "Name": "GARNiDELiA",
      "Rank": "4",
      "Thumb": "artists/GARNiDELiA.jpg"
  },
  {
      "ID": 73,
      "More": "",
      "Name": "TRUE",
      "Rank": "4",
      "Thumb": "artists/TRUE.jpg"
  },
  {
      "ID": 74,
      "More": "",
      "Name": "BUMP OF CHICKEN",
      "Rank": "4",
      "Thumb": "artists/BUMP OF CHICKEN.jpg"
  },
  {
      "ID": 75,
      "More": "",
      "Name": "JUNNA",
      "Rank": "4",
      "Thumb": "artists/JUNNA.jpg"
  },
  {
      "ID": 76,
      "More": "",
      "Name": "RADWIMPS",
      "Rank": "4",
      "Thumb": "artists/RADWIMPS.jpg"
  },
  {
      "ID": 77,
      "More": "",
      "Name": "Kie Kitano",
      "Rank": "4",
      "Thumb": "artists/Kie Kitano.jpg"
  },
  {
      "ID": 78,
      "More": "",
      "Name": "WEAVER",
      "Rank": "4",
      "Thumb": "artists/WEAVER.jpg"
  },
  {
      "ID": 79,
      "More": "",
      "Name": "YOASOBI",
      "Rank": "4",
      "Thumb": "artists/YOASOBI.jpg"
  },
  {
      "ID": 80,
      "More": "",
      "Name": "和ぬか",
      "Rank": "4",
      "Thumb": "artists/和ぬか.jpg"
  },
  {
      "ID": 81,
      "More": "",
      "Name": "Yunomi",
      "Rank": "4",
      "Thumb": "artists/Yunomi.jpg"
  },
  {
      "ID": 82,
      "More": "",
      "Name": "UNISON SQUARE GARDEN",
      "Rank": "4",
      "Thumb": "artists/UNISON SQUARE GARDEN.jpg"
  },
  {
      "ID": 83,
      "More": "",
      "Name": "Goose house",
      "Rank": "4",
      "Thumb": "artists/Goose house.jpg"
  },
  {
      "ID": 84,
      "More": "",
      "Name": "Htrol",
      "Rank": "4",
      "Thumb": "artists/Htrol.jpg"
  },
  {
      "ID": 85,
      "More": "",
      "Name": "Anna Yvette",
      "Rank": "4",
      "Thumb": "artists/Anna Yvette.jpg"
  },
  {
      "ID": 86,
      "More": "",
      "Name": "LZRD, Jake Miller",
      "Rank": "4",
      "Thumb": "artists/LZRD, Jake Miller.jpg"
  },
  {
      "ID": 87,
      "More": "",
      "Name": "Vicetone",
      "Rank": "4",
      "Thumb": "artists/Vicetone.jpg"
  },
  {
      "ID": 88,
      "More": "",
      "Name": "Zedd",
      "Rank": "4",
      "Thumb": "artists/Zedd.jpg"
  },
  {
      "ID": 89,
      "More": "",
      "Name": "Gryffin",
      "Rank": "4",
      "Thumb": "artists/Gryffin.jpg"
  },
  {
      "ID": 90,
      "More": "",
      "Name": "Galantis",
      "Rank": "4",
      "Thumb": "artists/Galantis.jpg"
  },
  {
      "ID": 91,
      "More": "",
      "Name": "Tristam",
      "Rank": "4",
      "Thumb": "artists/Tristam.jpg"
  },
  {
      "ID": 92,
      "More": "",
      "Name": "Jodex",
      "Rank": "4",
      "Thumb": "artists/Jodex.jpg"
  },
  {
      "ID": 93,
      "More": "",
      "Name": "Mike Perry",
      "Rank": "4",
      "Thumb": "artists/Mike Perry.jpg"
  },
  {
      "ID": 94,
      "More": "",
      "Name": "Unknown",
      "Rank": "4",
      "Thumb": "artists/Unknown.jpg"
  },
  {
      "ID": 95,
      "More": "",
      "Name": "The Jane Doze, Curtains",
      "Rank": "4",
      "Thumb": "artists/The Jane Doze, Curtains.jpg"
  },
  {
      "ID": 96,
      "More": "",
      "Name": "Caravan Palace",
      "Rank": "4",
      "Thumb": "artists/Caravan Palace.jpg"
  },
  {
      "ID": 97,
      "More": "",
      "Name": "MORTEN",
      "Rank": "4",
      "Thumb": "artists/MORTEN.jpg"
  },
  {
      "ID": 98,
      "More": "",
      "Name": "FWLR, KINLEY",
      "Rank": "4",
      "Thumb": "artists/FWLR, KINLEY.jpg"
  },
  {
      "ID": 99,
      "More": "",
      "Name": "Nightcore",
      "Rank": "4",
      "Thumb": "artists/Nightcore.jpg"
  },
  {
      "ID": 100,
      "More": "",
      "Name": "Prefekt, Johnning",
      "Rank": "4",
      "Thumb": "artists/Prefekt, Johnning.jpg"
  },
  {
      "ID": 101,
      "More": "",
      "Name": "Angelika Vee, Goblins from Mars",
      "Rank": "4",
      "Thumb": "artists/Angelika Vee, Goblins from Mars.jpg"
  },
  {
      "ID": 102,
      "More": "",
      "Name": "Mako",
      "Rank": "4",
      "Thumb": "artists/Mako.jpg"
  },
  {
      "ID": 103,
      "More": "",
      "Name": "Netrum/Halvorsen",
      "Rank": "4",
      "Thumb": "artists/NetrumHalvorsen.jpg"
  },
  {
      "ID": 104,
      "More": "",
      "Name": "Rhymastic",
      "Rank": "4",
      "Thumb": "artists/Rhymastic.jpg"
  },
  {
      "ID": 105,
      "More": "",
      "Name": "Klaypex, Greta",
      "Rank": "4",
      "Thumb": "artists/Klaypex, Greta.jpg"
  },
  {
      "ID": 106,
      "More": "",
      "Name": "Gareth Emery,STANDERWICK,HALIENE",
      "Rank": "4",
      "Thumb": "artists/Gareth Emery,STANDERWICK,HALIENE.jpg"
  },
  {
      "ID": 107,
      "More": "",
      "Name": "Sub.Sound",
      "Rank": "4",
      "Thumb": "artists/Sub.Sound.jpg"
  },
  {
      "ID": 108,
      "More": "",
      "Name": "ItaloBrothers",
      "Rank": "4",
      "Thumb": "artists/ItaloBrothers.jpg"
  },
  {
      "ID": 109,
      "More": "",
      "Name": "Cash Cash",
      "Rank": "4",
      "Thumb": "artists/Cash Cash.jpg"
  },
  {
      "ID": 110,
      "More": "",
      "Name": "Gabry Ponte, LUM!X, Prezioso",
      "Rank": "4",
      "Thumb": "artists/Gabry Ponte, LUM!X, Prezioso.jpg"
  },
  {
      "ID": 111,
      "More": "",
      "Name": "Tritonal, Cash Cash",
      "Rank": "4",
      "Thumb": "artists/Tritonal, Cash Cash.jpg"
  },
  {
      "ID": 112,
      "More": "",
      "Name": "Avicii, Sandro Cavazza",
      "Rank": "4",
      "Thumb": "artists/Avicii, Sandro Cavazza.jpg"
  },
  {
      "ID": 113,
      "More": "",
      "Name": "Sơn Tùng M-TP",
      "Rank": "4",
      "Thumb": "artists/Sơn Tùng M-TP.jpg"
  },
  {
      "ID": 114,
      "More": "",
      "Name": "SOOBIN",
      "Rank": "4",
      "Thumb": "artists/SOOBIN.jpg"
  },
  {
      "ID": 115,
      "More": "",
      "Name": "Dabin, Dia Frampton",
      "Rank": "4",
      "Thumb": "artists/Dabin, Dia Frampton.jpg"
  },
  {
      "ID": 116,
      "More": "",
      "Name": "Mr.Siro",
      "Rank": "4",
      "Thumb": "artists/Mr.Siro.jpg"
  },
  {
      "ID": 117,
      "More": "",
      "Name": "Suni Hạ Linh",
      "Rank": "4",
      "Thumb": "artists/Suni Hạ Linh.jpg"
  },
  {
      "ID": 118,
      "More": "",
      "Name": "Lou Hoàng",
      "Rank": "4",
      "Thumb": "artists/Lou Hoàng.jpg"
  },
  {
      "ID": 119,
      "More": "",
      "Name": "911",
      "Rank": "4",
      "Thumb": "artists/911.jpg"
  },
  {
      "ID": 120,
      "More": "",
      "Name": "Phạm Hồng Phước",
      "Rank": "4",
      "Thumb": "artists/Phạm Hồng Phước.jpg"
  },
  {
      "ID": 121,
      "More": "",
      "Name": "Maroon 5",
      "Rank": "4",
      "Thumb": "artists/Maroon 5.jpg"
  },
  {
      "ID": 122,
      "More": "",
      "Name": "Da LAB",
      "Rank": "4",
      "Thumb": "artists/Da LAB.jpg"
  },
  {
      "ID": 123,
      "More": "",
      "Name": "Only C",
      "Rank": "4",
      "Thumb": "artists/Only C.jpg"
  },
  {
      "ID": 124,
      "More": "",
      "Name": "Trịnh Thăng Bình",
      "Rank": "4",
      "Thumb": "artists/Trịnh Thăng Bình.jpg"
  },
  {
      "ID": 125,
      "More": "",
      "Name": "Charlie Puth",
      "Rank": "4",
      "Thumb": "artists/Charlie Puth.jpg"
  },
  {
      "ID": 126,
      "More": "",
      "Name": "FOE",
      "Rank": "4",
      "Thumb": "artists/FOE.jpg"
  },
  {
      "ID": 127,
      "More": "",
      "Name": "Erik",
      "Rank": "4",
      "Thumb": "artists/Erik.jpg"
  },
  {
      "ID": 128,
      "More": "",
      "Name": "ILLENIUM, MAX",
      "Rank": "4",
      "Thumb": "artists/ILLENIUM, MAX.jpg"
  },
  {
      "ID": 129,
      "More": "",
      "Name": "DEAMN",
      "Rank": "4",
      "Thumb": "artists/DEAMN.jpg"
  },
  {
      "ID": 130,
      "More": "",
      "Name": "Noo Phước Thịnh",
      "Rank": "4",
      "Thumb": "artists/Noo Phước Thịnh.jpg"
  },
  {
      "ID": 131,
      "More": "",
      "Name": "Rival, Cadmium, Jon Becker",
      "Rank": "4",
      "Thumb": "artists/Rival, Cadmium, Jon Becker.jpg"
  },
  {
      "ID": 132,
      "More": "",
      "Name": "Don Omar, Lucenzo",
      "Rank": "4",
      "Thumb": "artists/Don Omar, Lucenzo.jpg"
  },
  {
      "ID": 133,
      "More": "",
      "Name": "Luis Fonsi, Daddy Yankee",
      "Rank": "4",
      "Thumb": "artists/Luis Fonsi, Daddy Yankee.jpg"
  },
  {
      "ID": 134,
      "More": "",
      "Name": "Alle Farben, ILIRA",
      "Rank": "4",
      "Thumb": "artists/Alle Farben, ILIRA.jpg"
  },
  {
      "ID": 135,
      "More": "",
      "Name": "UNDRESSD, Ellie May",
      "Rank": "4",
      "Thumb": "artists/UNDRESSD, Ellie May.jpg"
  },
  {
      "ID": 136,
      "More": "",
      "Name": "Mike Posner, Seeb",
      "Rank": "4",
      "Thumb": "artists/Mike Posner, Seeb.jpg"
  },
  {
      "ID": 137,
      "More": "",
      "Name": "Ava Max",
      "Rank": "4",
      "Thumb": "artists/Ava Max.jpg"
  },
  {
      "ID": 138,
      "More": "",
      "Name": "Axel Johansson, Tina Stachowiak",
      "Rank": "4",
      "Thumb": "artists/Axel Johansson, Tina Stachowiak.jpg"
  },
  {
      "ID": 139,
      "More": "",
      "Name": "Arc North, Krista Marina",
      "Rank": "4",
      "Thumb": "artists/Arc North, Krista Marina.jpg"
  },
  {
      "ID": 140,
      "More": "",
      "Name": "Osad,VRT",
      "Rank": "4",
      "Thumb": "artists/Osad,VRT.jpg"
  },
  {
      "ID": 141,
      "More": "",
      "Name": "Sam Feldt, RANI",
      "Rank": "4",
      "Thumb": "artists/Sam Feldt, RANI.jpg"
  },
  {
      "ID": 142,
      "More": "",
      "Name": "Clean Bandit",
      "Rank": "4",
      "Thumb": "artists/Clean Bandit.jpg"
  },
  {
      "ID": 143,
      "More": "",
      "Name": "Merk & Kremont, Ady Suleiman",
      "Rank": "4",
      "Thumb": "artists/Merk & Kremont, Ady Suleiman.jpg"
  },
  {
      "ID": 144,
      "More": "",
      "Name": "Shawn Mendes, Camila Cabello",
      "Rank": "4",
      "Thumb": "artists/Shawn Mendes, Camila Cabello.jpg"
  },
  {
      "ID": 145,
      "More": "",
      "Name": "Porter Robinson, Madeon",
      "Rank": "4",
      "Thumb": "artists/Porter Robinson, Madeon.jpg"
  },
  {
      "ID": 146,
      "More": "",
      "Name": "Lil Nas X",
      "Rank": "4",
      "Thumb": "artists/Lil Nas X.jpg"
  },
  {
      "ID": 147,
      "More": "",
      "Name": "YanBi,Hằng BingBoong,Mr. T",
      "Rank": "4",
      "Thumb": "artists/YanBi,Hằng BingBoong,Mr. T.jpg"
  },
  {
      "ID": 148,
      "More": "",
      "Name": "Loote",
      "Rank": "4",
      "Thumb": "artists/Loote.jpg"
  },
  {
      "ID": 149,
      "More": "",
      "Name": "CHROMANCE, Marcus Layton",
      "Rank": "4",
      "Thumb": "artists/CHROMANCE, Marcus Layton.jpg"
  },
  {
      "ID": 150,
      "More": "",
      "Name": "Kevin Silvester, kidkatu, Julie Zorrilla",
      "Rank": "4",
      "Thumb": "artists/Kevin Silvester, kidkatu, Julie Zorrilla.jpg"
  },
  {
      "ID": 151,
      "More": "",
      "Name": "Ryuichi Takada",
      "Rank": "4",
      "Thumb": "artists/Ryuichi Takada.jpg"
  },
  {
      "ID": 152,
      "More": "",
      "Name": "岡部 啓一",
      "Rank": "4",
      "Thumb": "artists/岡部 啓一.jpg"
  },
  {
      "ID": 153,
      "More": "",
      "Name": "MONACA",
      "Rank": "4",
      "Thumb": "artists/MONACA.jpg"
  },
  {
      "ID": 154,
      "More": "",
      "Name": "Keiichi Okabe",
      "Rank": "4",
      "Thumb": "artists/Keiichi Okabe.jpg"
  },
  {
      "ID": 155,
      "More": "",
      "Name": "Kuniyuki Takahashi",
      "Rank": "4",
      "Thumb": "artists/Kuniyuki Takahashi.jpg"
  },
  {
      "ID": 156,
      "More": "",
      "Name": "岡部啓一",
      "Rank": "4",
      "Thumb": "artists/岡部啓一.jpg"
  },
  {
      "ID": 157,
      "More": "",
      "Name": "帆足圭吾",
      "Rank": "4",
      "Thumb": "artists/帆足圭吾.jpg"
  },
  {
      "ID": 158,
      "More": "",
      "Name": "Okabe Keiichi",
      "Rank": "4",
      "Thumb": "artists/Okabe Keiichi.jpg"
  },
  {
      "ID": 159,
      "More": "",
      "Name": "上松範康",
      "Rank": "4",
      "Thumb": "artists/上松範康.jpg"
  },
  {
      "ID": 160,
      "More": "",
      "Name": "Various",
      "Rank": "4",
      "Thumb": "artists/Various.jpg"
  },
  {
      "ID": 161,
      "More": "",
      "Name": "Dai Sakakibara",
      "Rank": "4",
      "Thumb": "artists/Dai Sakakibara.jpg"
  },
  {
      "ID": 162,
      "More": "",
      "Name": "Keigo Hoashi",
      "Rank": "4",
      "Thumb": "artists/Keigo Hoashi.jpg"
  },
  {
      "ID": 163,
      "More": "",
      "Name": "Sean Schafianski",
      "Rank": "4",
      "Thumb": "artists/Sean Schafianski.jpg"
  },
  {
      "ID": 164,
      "More": "",
      "Name": "Oliver Good",
      "Rank": "4",
      "Thumb": "artists/Oliver Good.jpg"
  },
  {
      "ID": 165,
      "More": "",
      "Name": "marasy",
      "Rank": "4",
      "Thumb": "artists/marasy.jpg"
  },
  {
      "ID": 166,
      "More": "",
      "Name": "Shotaro Seo",
      "Rank": "4",
      "Thumb": "artists/Shotaro Seo.jpg"
  },
  {
      "ID": 167,
      "More": "",
      "Name": "Sachiko Miyano",
      "Rank": "4",
      "Thumb": "artists/Sachiko Miyano.jpg"
  },
  {
      "ID": 168,
      "More": "",
      "Name": "yo suzuki (akisai)",
      "Rank": "4",
      "Thumb": "artists/yo suzuki (akisai).jpg"
  },
  {
      "ID": 169,
      "More": "",
      "Name": "Tomoyuki Asakawa",
      "Rank": "4",
      "Thumb": "artists/Tomoyuki Asakawa.jpg"
  },
  {
      "ID": 170,
      "More": "",
      "Name": "Kenji Kaneko",
      "Rank": "4",
      "Thumb": "artists/Kenji Kaneko.jpg"
  },
  {
      "ID": 171,
      "More": "",
      "Name": "Mariko Taguchi",
      "Rank": "4",
      "Thumb": "artists/Mariko Taguchi.jpg"
  },
  {
      "ID": 172,
      "More": "",
      "Name": "Ryo Aoyama",
      "Rank": "4",
      "Thumb": "artists/Ryo Aoyama.jpg"
  },
  {
      "ID": 173,
      "More": "",
      "Name": "Mariam Abounnasr",
      "Rank": "4",
      "Thumb": "artists/Mariam Abounnasr.jpg"
  },
  {
      "ID": 174,
      "More": "",
      "Name": "Masato Koda",
      "Rank": "4",
      "Thumb": "artists/Masato Koda.jpg"
  },
  {
      "ID": 175,
      "More": "",
      "Name": "Unknown Artist",
      "Rank": "4",
      "Thumb": "artists/Unknown Artist.jpg"
  },
  {
      "ID": 176,
      "More": "",
      "Name": "Yasumasa Kumagai",
      "Rank": "4",
      "Thumb": "artists/Yasumasa Kumagai.jpg"
  },
  {
      "ID": 177,
      "More": "",
      "Name": "Taku Yabuki",
      "Rank": "4",
      "Thumb": "artists/Taku Yabuki.jpg"
  },
  {
      "ID": 178,
      "More": "",
      "Name": "Daisuke Shinoda",
      "Rank": "4",
      "Thumb": "artists/Daisuke Shinoda.jpg"
  },
  {
      "ID": 179,
      "More": "",
      "Name": "Duke of Pianeet",
      "Rank": "4",
      "Thumb": "artists/Duke of Pianeet.jpg"
  },
  {
      "ID": 180,
      "More": "",
      "Name": "Shiryu Miyanoshita",
      "Rank": "4",
      "Thumb": "artists/Shiryu Miyanoshita.jpg"
  },
  {
      "ID": 181,
      "More": "",
      "Name": "Christian Gulino",
      "Rank": "4",
      "Thumb": "artists/Christian Gulino.jpg"
  },
  {
      "ID": 182,
      "More": "",
      "Name": "Akio Noguchi",
      "Rank": "4",
      "Thumb": "artists/Akio Noguchi.jpg"
  },
  {
      "ID": 183,
      "More": "",
      "Name": "Reo Uratani",
      "Rank": "4",
      "Thumb": "artists/Reo Uratani.jpg"
  },
  {
      "ID": 184,
      "More": "",
      "Name": "Daisuke Kadowaki",
      "Rank": "4",
      "Thumb": "artists/Daisuke Kadowaki.jpg"
  },
  {
      "ID": 185,
      "More": "",
      "Name": "Kumi Tanioka",
      "Rank": "4",
      "Thumb": "artists/Kumi Tanioka.jpg"
  },
  {
      "ID": 186,
      "More": "",
      "Name": "Kuniyuki Takahashi, Shotaro Seo",
      "Rank": "4",
      "Thumb": "artists/Kuniyuki Takahashi, Shotaro Seo.jpg"
  },
  {
      "ID": 187,
      "More": "",
      "Name": "Kousuke Yamashita",
      "Rank": "4",
      "Thumb": "artists/Kousuke Yamashita.jpg"
  },
  {
      "ID": 188,
      "More": "",
      "Name": "Ryu Kawamura",
      "Rank": "4",
      "Thumb": "artists/Ryu Kawamura.jpg"
  }
];

var Albums = [
  {
      "ArtistID": 0,
      "ID": 0,
      "More": "",
      "Name": "Flares",
      "Rank": "4",
      "Thumb": "albums/Flares.jpg"
  },
  {
      "ArtistID": 1,
      "ID": 1,
      "More": "",
      "Name": "Awakening",
      "Rank": "4",
      "Thumb": "albums/Awakening.jpg"
  },
  {
      "ArtistID": 2,
      "ID": 2,
      "More": "",
      "Name": "Close (Brooks Remix)",
      "Rank": "4",
      "Thumb": "albums/Close (Brooks Remix).jpg"
  },
  {
      "ArtistID": 3,
      "ID": 3,
      "More": "",
      "Name": "Cloud 9",
      "Rank": "4",
      "Thumb": "albums/Cloud 9.jpg"
  },
  {
      "ArtistID": 3,
      "ID": 4,
      "More": "",
      "Name": "Colors",
      "Rank": "4",
      "Thumb": "albums/Colors.jpg"
  },
  {
      "ArtistID": 4,
      "ID": 5,
      "More": "",
      "Name": "The Classics",
      "Rank": "4",
      "Thumb": "albums/The Classics.jpg"
  },
  {
      "ArtistID": 5,
      "ID": 6,
      "More": "",
      "Name": "Energy",
      "Rank": "4",
      "Thumb": "albums/Energy.jpg"
  },
  {
      "ArtistID": 6,
      "ID": 7,
      "More": "",
      "Name": "Everlasting",
      "Rank": "4",
      "Thumb": "albums/Everlasting.jpg"
  },
  {
      "ArtistID": 5,
      "ID": 8,
      "More": "",
      "Name": "Fire",
      "Rank": "4",
      "Thumb": "albums/Fire.jpg"
  },
  {
      "ArtistID": 7,
      "ID": 9,
      "More": "",
      "Name": "Frisbee",
      "Rank": "4",
      "Thumb": "albums/Frisbee.jpg"
  },
  {
      "ArtistID": 8,
      "ID": 10,
      "More": "",
      "Name": "Level Up",
      "Rank": "4",
      "Thumb": "albums/Level Up.jpg"
  },
  {
      "ArtistID": 9,
      "ID": 11,
      "More": "",
      "Name": "KIKO",
      "Rank": "4",
      "Thumb": "albums/KIKO.jpg"
  },
  {
      "ArtistID": 3,
      "ID": 12,
      "More": "",
      "Name": "Higher",
      "Rank": "4",
      "Thumb": "albums/Higher.jpg"
  },
  {
      "ArtistID": 3,
      "ID": 13,
      "More": "",
      "Name": "Hope",
      "Rank": "4",
      "Thumb": "albums/Hope.jpg"
  },
  {
      "ArtistID": 10,
      "ID": 14,
      "More": "",
      "Name": "Legends (Hyper Potions Remix)",
      "Rank": "4",
      "Thumb": "albums/Legends (Hyper Potions Remix).jpg"
  },
  {
      "ArtistID": 5,
      "ID": 15,
      "More": "",
      "Name": "Limitless",
      "Rank": "4",
      "Thumb": "albums/Limitless.jpg"
  },
  {
      "ArtistID": 11,
      "ID": 16,
      "More": "",
      "Name": "Rise - Ampyx",
      "Rank": "4",
      "Thumb": "albums/Rise - Ampyx.jpg"
  },
  {
      "ArtistID": 12,
      "ID": 17,
      "More": "",
      "Name": "Rubik",
      "Rank": "4",
      "Thumb": "albums/Rubik.jpg"
  },
  {
      "ArtistID": 13,
      "ID": 18,
      "More": "",
      "Name": "S.K.Y.Prox",
      "Rank": "4",
      "Thumb": "albums/S.K.Y.Prox.jpg"
  },
  {
      "ArtistID": 3,
      "ID": 19,
      "More": "",
      "Name": "Seven",
      "Rank": "4",
      "Thumb": "albums/Seven.jpg"
  },
  {
      "ArtistID": 14,
      "ID": 20,
      "More": "",
      "Name": "Sky (feat. Martell) [Radio Edit]",
      "Rank": "4",
      "Thumb": "albums/Sky (feat. Martell) [Radio Edit].jpg"
  },
  {
      "ArtistID": 5,
      "ID": 21,
      "More": "",
      "Name": "Sky High",
      "Rank": "4",
      "Thumb": "albums/Sky High.jpg"
  },
  {
      "ArtistID": 15,
      "ID": 22,
      "More": "",
      "Name": "Origins",
      "Rank": "4",
      "Thumb": "albums/Origins.jpg"
  },
  {
      "ArtistID": 3,
      "ID": 23,
      "More": "",
      "Name": "Sunburst",
      "Rank": "4",
      "Thumb": "albums/Sunburst.jpg"
  },
  {
      "ArtistID": 5,
      "ID": 24,
      "More": "",
      "Name": "Vision",
      "Rank": "4",
      "Thumb": "albums/Vision.jpg"
  },
  {
      "ArtistID": 16,
      "ID": 25,
      "More": "",
      "Name": "Welcome to Planet Urf",
      "Rank": "4",
      "Thumb": "albums/Welcome to Planet Urf.jpg"
  },
  {
      "ArtistID": 17,
      "ID": 26,
      "More": "",
      "Name": "Muvik",
      "Rank": "4",
      "Thumb": "albums/Muvik.jpg"
  },
  {
      "ArtistID": 18,
      "ID": 27,
      "More": "",
      "Name": "Guava Breeze",
      "Rank": "4",
      "Thumb": "albums/Guava Breeze.jpg"
  },
  {
      "ArtistID": 18,
      "ID": 28,
      "More": "",
      "Name": "Home",
      "Rank": "4",
      "Thumb": "albums/Home.jpg"
  },
  {
      "ArtistID": 18,
      "ID": 29,
      "More": "",
      "Name": "Classics 2014 - 2015",
      "Rank": "4",
      "Thumb": "albums/Classics 2014 - 2015.jpg"
  },
  {
      "ArtistID": 19,
      "ID": 30,
      "More": "",
      "Name": "Seve (Radio Edit)",
      "Rank": "4",
      "Thumb": "albums/Seve (Radio Edit).jpg"
  },
  {
      "ArtistID": 20,
      "ID": 31,
      "More": "",
      "Name": "Somero",
      "Rank": "4",
      "Thumb": "albums/Somero.jpg"
  },
  {
      "ArtistID": 21,
      "ID": 32,
      "More": "",
      "Name": "Turtle Beach",
      "Rank": "4",
      "Thumb": "albums/Turtle Beach.jpg"
  },
  {
      "ArtistID": 3,
      "ID": 33,
      "More": "",
      "Name": "Candyland",
      "Rank": "4",
      "Thumb": "albums/Candyland.jpg"
  },
  {
      "ArtistID": 22,
      "ID": 34,
      "More": "",
      "Name": "Close To The Sun",
      "Rank": "4",
      "Thumb": "albums/Close To The Sun.jpg"
  },
  {
      "ArtistID": 3,
      "ID": 35,
      "More": "",
      "Name": "Cool",
      "Rank": "4",
      "Thumb": "albums/Cool.jpg"
  },
  {
      "ArtistID": 22,
      "ID": 36,
      "More": "",
      "Name": "Jackpot",
      "Rank": "4",
      "Thumb": "albums/Jackpot.jpg"
  },
  {
      "ArtistID": 22,
      "ID": 37,
      "More": "",
      "Name": "Fly Away",
      "Rank": "4",
      "Thumb": "albums/Fly Away.jpg"
  },
  {
      "ArtistID": 18,
      "ID": 38,
      "More": "",
      "Name": "Happy Robot",
      "Rank": "4",
      "Thumb": "albums/Happy Robot.jpg"
  },
  {
      "ArtistID": 11,
      "ID": 39,
      "More": "",
      "Name": "Holo",
      "Rank": "4",
      "Thumb": "albums/Holo.jpg"
  },
  {
      "ArtistID": 3,
      "ID": 40,
      "More": "",
      "Name": "Infectious",
      "Rank": "4",
      "Thumb": "albums/Infectious.jpg"
  },
  {
      "ArtistID": 3,
      "ID": 41,
      "More": "",
      "Name": "Joy",
      "Rank": "4",
      "Thumb": "albums/Joy.jpg"
  },
  {
      "ArtistID": 3,
      "ID": 42,
      "More": "",
      "Name": "Lets Go",
      "Rank": "4",
      "Thumb": "albums/Lets Go.jpg"
  },
  {
      "ArtistID": 3,
      "ID": 43,
      "More": "",
      "Name": "Perpetuo",
      "Rank": "4",
      "Thumb": "albums/Perpetuo.jpg"
  },
  {
      "ArtistID": 18,
      "ID": 44,
      "More": "",
      "Name": "Masked Heroes",
      "Rank": "4",
      "Thumb": "albums/Masked Heroes.jpg"
  },
  {
      "ArtistID": 18,
      "ID": 45,
      "More": "",
      "Name": "Masked Raver",
      "Rank": "4",
      "Thumb": "albums/Masked Raver.jpg"
  },
  {
      "ArtistID": 3,
      "ID": 46,
      "More": "",
      "Name": "Mesmerize",
      "Rank": "4",
      "Thumb": "albums/Mesmerize.jpg"
  },
  {
      "ArtistID": 22,
      "ID": 47,
      "More": "",
      "Name": "Monody (feat. Laura Brehm)",
      "Rank": "4",
      "Thumb": "albums/Monody (feat. Laura Brehm).jpg"
  },
  {
      "ArtistID": 3,
      "ID": 48,
      "More": "",
      "Name": "Nostalgia",
      "Rank": "4",
      "Thumb": "albums/Nostalgia.jpg"
  },
  {
      "ArtistID": 23,
      "ID": 49,
      "More": "",
      "Name": "Sunset",
      "Rank": "4",
      "Thumb": "albums/Sunset.jpg"
  },
  {
      "ArtistID": 18,
      "ID": 50,
      "More": "",
      "Name": "The Silent Miracle",
      "Rank": "4",
      "Thumb": "albums/The Silent Miracle.jpg"
  },
  {
      "ArtistID": 22,
      "ID": 51,
      "More": "",
      "Name": "Warrior Songs",
      "Rank": "4",
      "Thumb": "albums/Warrior Songs.jpg"
  },
  {
      "ArtistID": 18,
      "ID": 52,
      "More": "",
      "Name": "Piece Of Me (Vexento Remix)",
      "Rank": "4",
      "Thumb": "albums/Piece Of Me (Vexento Remix).jpg"
  },
  {
      "ArtistID": 18,
      "ID": 53,
      "More": "",
      "Name": "Sad Robot",
      "Rank": "4",
      "Thumb": "albums/Sad Robot.jpg"
  },
  {
      "ArtistID": 24,
      "ID": 54,
      "More": "",
      "Name": "Hello, World",
      "Rank": "4",
      "Thumb": "albums/Hello, World.jpg"
  },
  {
      "ArtistID": 18,
      "ID": 55,
      "More": "",
      "Name": "Tevo",
      "Rank": "4",
      "Thumb": "albums/Tevo.jpg"
  },
  {
      "ArtistID": 25,
      "ID": 56,
      "More": "",
      "Name": "Trap Queen",
      "Rank": "4",
      "Thumb": "albums/Trap Queen.jpg"
  },
  {
      "ArtistID": 18,
      "ID": 57,
      "More": "",
      "Name": "Trippy Love",
      "Rank": "4",
      "Thumb": "albums/Trippy Love.jpg"
  },
  {
      "ArtistID": 26,
      "ID": 58,
      "More": "",
      "Name": "Tropic Love",
      "Rank": "4",
      "Thumb": "albums/Tropic Love.jpg"
  },
  {
      "ArtistID": 22,
      "ID": 59,
      "More": "",
      "Name": "Unity",
      "Rank": "4",
      "Thumb": "albums/Unity.jpg"
  },
  {
      "ArtistID": 18,
      "ID": 60,
      "More": "",
      "Name": "Verve",
      "Rank": "4",
      "Thumb": "albums/Verve.jpg"
  },
  {
      "ArtistID": 18,
      "ID": 61,
      "More": "",
      "Name": "Where We Belong",
      "Rank": "4",
      "Thumb": "albums/Where We Belong.jpg"
  },
  {
      "ArtistID": 27,
      "ID": 62,
      "More": "",
      "Name": "Kaikai Kitan / Ao No Waltz",
      "Rank": "4",
      "Thumb": "albums/Kaikai Kitan  Ao No Waltz.jpg"
  },
  {
      "ArtistID": 28,
      "ID": 63,
      "More": "",
      "Name": "デスぺレート",
      "Rank": "4",
      "Thumb": "albums/デスぺレート.jpg"
  },
  {
      "ArtistID": 27,
      "ID": 64,
      "More": "",
      "Name": "Bunka",
      "Rank": "4",
      "Thumb": "albums/Bunka.jpg"
  },
  {
      "ArtistID": 27,
      "ID": 65,
      "More": "",
      "Name": "Gunjo Sanka / Yuseiboushi",
      "Rank": "4",
      "Thumb": "albums/Gunjo Sanka  Yuseiboushi.jpg"
  },
  {
      "ArtistID": 28,
      "ID": 66,
      "More": "",
      "Name": "Beyond the way",
      "Rank": "4",
      "Thumb": "albums/Beyond the way.jpg"
  },
  {
      "ArtistID": 29,
      "ID": 67,
      "More": "",
      "Name": "Casino",
      "Rank": "4",
      "Thumb": "albums/Casino.jpg"
  },
  {
      "ArtistID": 30,
      "ID": 68,
      "More": "",
      "Name": "Cheating is a crime",
      "Rank": "4",
      "Thumb": "albums/Cheating is a crime.jpg"
  },
  {
      "ArtistID": 31,
      "ID": 69,
      "More": "",
      "Name": "GHOST CITY TOKYO (digital edition)",
      "Rank": "4",
      "Thumb": "albums/GHOST CITY TOKYO (digital edition).jpg"
  },
  {
      "ArtistID": 32,
      "ID": 70,
      "More": "",
      "Name": "Demon Lord",
      "Rank": "4",
      "Thumb": "albums/Demon Lord.jpg"
  },
  {
      "ArtistID": 32,
      "ID": 71,
      "More": "",
      "Name": "ENVY BABY",
      "Rank": "4",
      "Thumb": "albums/ENVY BABY.jpg"
  },
  {
      "ArtistID": 32,
      "ID": 72,
      "More": "",
      "Name": "EYE",
      "Rank": "4",
      "Thumb": "albums/EYE.jpg"
  },
  {
      "ArtistID": 27,
      "ID": 73,
      "More": "",
      "Name": "FightSong",
      "Rank": "4",
      "Thumb": "albums/FightSong.jpg"
  },
  {
      "ArtistID": 28,
      "ID": 74,
      "More": "",
      "Name": "GRAPHIX",
      "Rank": "4",
      "Thumb": "albums/GRAPHIX.jpg"
  },
  {
      "ArtistID": 33,
      "ID": 75,
      "More": "",
      "Name": "Good-bye Declaration",
      "Rank": "4",
      "Thumb": "albums/Good-bye Declaration.jpg"
  },
  {
      "ArtistID": 32,
      "ID": 76,
      "More": "",
      "Name": "KING",
      "Rank": "4",
      "Thumb": "albums/KING.jpg"
  },
  {
      "ArtistID": 32,
      "ID": 77,
      "More": "",
      "Name": "MIRA",
      "Rank": "4",
      "Thumb": "albums/MIRA.jpg"
  },
  {
      "ArtistID": 29,
      "ID": 78,
      "More": "",
      "Name": "Nightmare",
      "Rank": "4",
      "Thumb": "albums/Nightmare.jpg"
  },
  {
      "ArtistID": 34,
      "ID": 79,
      "More": "",
      "Name": "Nerenaiyoruni ka-tenwoakete",
      "Rank": "4",
      "Thumb": "albums/Nerenaiyoruni ka-tenwoakete.jpg"
  },
  {
      "ArtistID": 32,
      "ID": 80,
      "More": "",
      "Name": "QUEEN",
      "Rank": "4",
      "Thumb": "albums/QUEEN.jpg"
  },
  {
      "ArtistID": 28,
      "ID": 81,
      "More": "",
      "Name": "Ready Steady (feat. Hatsune Miku, Kagamine Rin, Kagamine Len)",
      "Rank": "4",
      "Thumb": "albums/Ready Steady (feat. Hatsune Miku, Kagamine Rin, Kagamine Len).jpg"
  },
  {
      "ArtistID": 32,
      "ID": 82,
      "More": "",
      "Name": "Rendezvous",
      "Rank": "4",
      "Thumb": "albums/Rendezvous.jpg"
  },
  {
      "ArtistID": 29,
      "ID": 83,
      "More": "",
      "Name": "Shadow Shadow",
      "Rank": "4",
      "Thumb": "albums/Shadow Shadow.jpg"
  },
  {
      "ArtistID": 29,
      "ID": 84,
      "More": "",
      "Name": "Whisper Whisper Whisper",
      "Rank": "4",
      "Thumb": "albums/Whisper Whisper Whisper.jpg"
  },
  {
      "ArtistID": 29,
      "ID": 85,
      "More": "",
      "Name": "Witch Hunt",
      "Rank": "4",
      "Thumb": "albums/Witch Hunt.jpg"
  },
  {
      "ArtistID": 32,
      "ID": 86,
      "More": "",
      "Name": "Yoidoreshirazu",
      "Rank": "4",
      "Thumb": "albums/Yoidoreshirazu.jpg"
  },
  {
      "ArtistID": 32,
      "ID": 87,
      "More": "",
      "Name": "アイデンティティ",
      "Rank": "4",
      "Thumb": "albums/アイデンティティ.jpg"
  },
  {
      "ArtistID": 32,
      "ID": 88,
      "More": "",
      "Name": "エンヴィーベイビー x KING",
      "Rank": "4",
      "Thumb": "albums/エンヴィーベイビー x KING.jpg"
  },
  {
      "ArtistID": 35,
      "ID": 89,
      "More": "",
      "Name": "KOI",
      "Rank": "4",
      "Thumb": "albums/KOI.jpg"
  },
  {
      "ArtistID": 36,
      "ID": 90,
      "More": "",
      "Name": "これくしょん３",
      "Rank": "4",
      "Thumb": "albums/これくしょん３.jpg"
  },
  {
      "ArtistID": 36,
      "ID": 91,
      "More": "",
      "Name": "KOBASOLO",
      "Rank": "4",
      "Thumb": "albums/KOBASOLO.jpg"
  },
  {
      "ArtistID": 36,
      "ID": 92,
      "More": "",
      "Name": "これくしょん",
      "Rank": "4",
      "Thumb": "albums/これくしょん.jpg"
  },
  {
      "ArtistID": 37,
      "ID": 93,
      "More": "",
      "Name": "FAITH",
      "Rank": "4",
      "Thumb": "albums/FAITH.jpg"
  },
  {
      "ArtistID": 37,
      "ID": 94,
      "More": "",
      "Name": "40",
      "Rank": "4",
      "Thumb": "albums/40.jpg"
  },
  {
      "ArtistID": 38,
      "ID": 95,
      "More": "",
      "Name": "Akie",
      "Rank": "4",
      "Thumb": "albums/Akie.jpg"
  },
  {
      "ArtistID": 37,
      "ID": 96,
      "More": "",
      "Name": "WOMAN 2 ～Love Song Covers～",
      "Rank": "4",
      "Thumb": "albums/WOMAN 2 ～Love Song Covers～.jpg"
  },
  {
      "ArtistID": 39,
      "ID": 97,
      "More": "",
      "Name": "TVアニメ『終末なにしてますか?忙しいですか?救ってもらっていいですか?』オリジナルサウンドトラック「青い記憶」",
      "Rank": "4",
      "Thumb": "albums/TVアニメ『終末なにしてますか忙しいですか救ってもらっていいですか』オリジナルサウンドトラック「青い記憶」.jpg"
  },
  {
      "ArtistID": 37,
      "ID": 98,
      "More": "",
      "Name": "Best & Coupling Covers",
      "Rank": "4",
      "Thumb": "albums/Best & Coupling Covers.jpg"
  },
  {
      "ArtistID": 37,
      "ID": 99,
      "More": "",
      "Name": "Ms.OOJAの、いちばん泣けるドリカム",
      "Rank": "4",
      "Thumb": "albums/Ms.OOJAの、いちばん泣けるドリカム.jpg"
  },
  {
      "ArtistID": 37,
      "ID": 100,
      "More": "",
      "Name": "Stories",
      "Rank": "4",
      "Thumb": "albums/Stories.jpg"
  },
  {
      "ArtistID": 40,
      "ID": 101,
      "More": "",
      "Name": "CINEMATIC",
      "Rank": "4",
      "Thumb": "albums/CINEMATIC.jpg"
  },
  {
      "ArtistID": 41,
      "ID": 102,
      "More": "",
      "Name": "All About Tiara Ⅲ / Fan Selection Best",
      "Rank": "4",
      "Thumb": "albums/All About Tiara Ⅲ  Fan Selection Best.jpg"
  },
  {
      "ArtistID": 37,
      "ID": 103,
      "More": "",
      "Name": "MAN ＆ WOMAN",
      "Rank": "4",
      "Thumb": "albums/MAN ＆ WOMAN.jpg"
  },
  {
      "ArtistID": 37,
      "ID": 104,
      "More": "",
      "Name": "Be...",
      "Rank": "4",
      "Thumb": "albums/Be....jpg"
  },
  {
      "ArtistID": 37,
      "ID": 105,
      "More": "",
      "Name": "PRESENT",
      "Rank": "4",
      "Thumb": "albums/PRESENT.jpg"
  },
  {
      "ArtistID": 37,
      "ID": 106,
      "More": "",
      "Name": "また恋をすることなど",
      "Rank": "4",
      "Thumb": "albums/また恋をすることなど.jpg"
  },
  {
      "ArtistID": 37,
      "ID": 107,
      "More": "",
      "Name": "VOICE",
      "Rank": "4",
      "Thumb": "albums/VOICE.jpg"
  },
  {
      "ArtistID": 42,
      "ID": 108,
      "More": "",
      "Name": "Collection",
      "Rank": "4",
      "Thumb": "albums/Collection.jpg"
  },
  {
      "ArtistID": 37,
      "ID": 109,
      "More": "",
      "Name": "流しのOOJA〜VINTAGE SONG COVERS〜",
      "Rank": "4",
      "Thumb": "albums/流しのOOJA〜VINTAGE SONG COVERS〜.jpg"
  },
  {
      "ArtistID": 37,
      "ID": 110,
      "More": "",
      "Name": "流しのOOJA 2 〜VINTAGE SONG COVERS〜",
      "Rank": "4",
      "Thumb": "albums/流しのOOJA 2 〜VINTAGE SONG COVERS〜.jpg"
  },
  {
      "ArtistID": 37,
      "ID": 111,
      "More": "",
      "Name": "あなたに会えなくなる日まで / You are Beautiful",
      "Rank": "4",
      "Thumb": "albums/あなたに会えなくなる日まで  You are Beautiful.jpg"
  },
  {
      "ArtistID": 37,
      "ID": 112,
      "More": "",
      "Name": "THE HITS ～NO.1 SONG COVERS～",
      "Rank": "4",
      "Thumb": "albums/THE HITS ～NO.1 SONG COVERS～.jpg"
  },
  {
      "ArtistID": 37,
      "ID": 113,
      "More": "",
      "Name": "鐘が鳴る (Acoustic ver.)",
      "Rank": "4",
      "Thumb": "albums/鐘が鳴る (Acoustic ver.).jpg"
  },
  {
      "ArtistID": 43,
      "ID": 114,
      "More": "",
      "Name": "Contrast",
      "Rank": "4",
      "Thumb": "albums/Contrast.jpg"
  },
  {
      "ArtistID": 37,
      "ID": 115,
      "More": "",
      "Name": "HEART",
      "Rank": "4",
      "Thumb": "albums/HEART.jpg"
  },
  {
      "ArtistID": 37,
      "ID": 116,
      "More": "",
      "Name": "AGAIN",
      "Rank": "4",
      "Thumb": "albums/AGAIN.jpg"
  },
  {
      "ArtistID": 37,
      "ID": 117,
      "More": "",
      "Name": "COLOR",
      "Rank": "4",
      "Thumb": "albums/COLOR.jpg"
  },
  {
      "ArtistID": 44,
      "ID": 118,
      "More": "",
      "Name": "remember",
      "Rank": "4",
      "Thumb": "albums/remember.jpg"
  },
  {
      "ArtistID": 46,
      "ID": 119,
      "More": "",
      "Name": "Low",
      "Rank": "4",
      "Thumb": "albums/Low.jpg"
  },
  {
      "ArtistID": 47,
      "ID": 120,
      "More": "",
      "Name": "Re:Contact",
      "Rank": "4",
      "Thumb": "albums/ReContact.jpg"
  },
  {
      "ArtistID": 48,
      "ID": 121,
      "More": "",
      "Name": "summertime",
      "Rank": "4",
      "Thumb": "albums/summertime.jpg"
  },
  {
      "ArtistID": 47,
      "ID": 122,
      "More": "",
      "Name": "SANCTUARYⅡ 〜Minori Chihara Best Album〜 (Artist Edition)",
      "Rank": "4",
      "Thumb": "albums/SANCTUARYⅡ 〜Minori Chihara Best Album〜 (Artist Edition).jpg"
  },
  {
      "ArtistID": 40,
      "ID": 123,
      "More": "",
      "Name": "BEST All Singles&Covers Hits",
      "Rank": "4",
      "Thumb": "albums/BEST All Singles&Covers Hits.jpg"
  },
  {
      "ArtistID": 50,
      "ID": 124,
      "More": "",
      "Name": "Re:I",
      "Rank": "4",
      "Thumb": "albums/ReI.jpg"
  },
  {
      "ArtistID": 35,
      "ID": 125,
      "More": "",
      "Name": "NAMIDA CARATS",
      "Rank": "4",
      "Thumb": "albums/NAMIDA CARATS.jpg"
  },
  {
      "ArtistID": 51,
      "ID": 126,
      "More": "",
      "Name": "アニップス",
      "Rank": "4",
      "Thumb": "albums/アニップス.jpg"
  },
  {
      "ArtistID": 52,
      "ID": 127,
      "More": "",
      "Name": "日常ドラマチック",
      "Rank": "4",
      "Thumb": "albums/日常ドラマチック.jpg"
  },
  {
      "ArtistID": 53,
      "ID": 128,
      "More": "",
      "Name": "TOHO BOSSA NOVA 2",
      "Rank": "4",
      "Thumb": "albums/TOHO BOSSA NOVA 2.jpg"
  },
  {
      "ArtistID": 54,
      "ID": 129,
      "More": "",
      "Name": "今夜きみが怖い夢を見ませんように",
      "Rank": "4",
      "Thumb": "albums/今夜きみが怖い夢を見ませんように.jpg"
  },
  {
      "ArtistID": 55,
      "ID": 130,
      "More": "",
      "Name": "君に出逢えて",
      "Rank": "4",
      "Thumb": "albums/君に出逢えて.jpg"
  },
  {
      "ArtistID": 31,
      "ID": 131,
      "More": "",
      "Name": "夜撫でるメノウ / 幽霊東京",
      "Rank": "4",
      "Thumb": "albums/夜撫でるメノウ  幽霊東京.jpg"
  },
  {
      "ArtistID": 56,
      "ID": 132,
      "More": "",
      "Name": "Utamonogatari Special Edition (Original Soundtrack)",
      "Rank": "4",
      "Thumb": "albums/Utamonogatari Special Edition (Original Soundtrack).jpg"
  },
  {
      "ArtistID": 57,
      "ID": 133,
      "More": "",
      "Name": "明日がくるなら",
      "Rank": "4",
      "Thumb": "albums/明日がくるなら.jpg"
  },
  {
      "ArtistID": 55,
      "ID": 134,
      "More": "",
      "Name": "百満開花",
      "Rank": "4",
      "Thumb": "albums/百満開花.jpg"
  },
  {
      "ArtistID": 58,
      "ID": 135,
      "More": "",
      "Name": "エスカパレード",
      "Rank": "4",
      "Thumb": "albums/エスカパレード.jpg"
  },
  {
      "ArtistID": 59,
      "ID": 136,
      "More": "",
      "Name": "LOST IN PARADISE",
      "Rank": "4",
      "Thumb": "albums/LOST IN PARADISE.jpg"
  },
  {
      "ArtistID": 60,
      "ID": 137,
      "More": "",
      "Name": "ダンスホール",
      "Rank": "4",
      "Thumb": "albums/ダンスホール.jpg"
  },
  {
      "ArtistID": 61,
      "ID": 138,
      "More": "",
      "Name": "朗らかな皮膚とて不服",
      "Rank": "4",
      "Thumb": "albums/朗らかな皮膚とて不服.jpg"
  },
  {
      "ArtistID": 62,
      "ID": 139,
      "More": "",
      "Name": "又三郎",
      "Rank": "4",
      "Thumb": "albums/又三郎.jpg"
  },
  {
      "ArtistID": 62,
      "ID": 140,
      "More": "",
      "Name": "夜行",
      "Rank": "4",
      "Thumb": "albums/夜行.jpg"
  },
  {
      "ArtistID": 62,
      "ID": 141,
      "More": "",
      "Name": "思想犯",
      "Rank": "4",
      "Thumb": "albums/思想犯.jpg"
  },
  {
      "ArtistID": 62,
      "ID": 142,
      "More": "",
      "Name": "春泥棒",
      "Rank": "4",
      "Thumb": "albums/春泥棒.jpg"
  },
  {
      "ArtistID": 62,
      "ID": 143,
      "More": "",
      "Name": "盗作",
      "Rank": "4",
      "Thumb": "albums/盗作.jpg"
  },
  {
      "ArtistID": 61,
      "ID": 144,
      "More": "",
      "Name": "正しい偽りからの起床",
      "Rank": "4",
      "Thumb": "albums/正しい偽りからの起床.jpg"
  },
  {
      "ArtistID": 61,
      "ID": 145,
      "More": "",
      "Name": "沈香学",
      "Rank": "4",
      "Thumb": "albums/沈香学.jpg"
  },
  {
      "ArtistID": 62,
      "ID": 146,
      "More": "",
      "Name": "藍二乗",
      "Rank": "4",
      "Thumb": "albums/藍二乗.jpg"
  },
  {
      "ArtistID": 62,
      "ID": 147,
      "More": "",
      "Name": "雨とカプチーノ",
      "Rank": "4",
      "Thumb": "albums/雨とカプチーノ.jpg"
  },
  {
      "ArtistID": 62,
      "ID": 148,
      "More": "",
      "Name": "風を食む",
      "Rank": "4",
      "Thumb": "albums/風を食む.jpg"
  },
  {
      "ArtistID": 62,
      "ID": 149,
      "More": "",
      "Name": "幻燈",
      "Rank": "4",
      "Thumb": "albums/幻燈.jpg"
  },
  {
      "ArtistID": 61,
      "ID": 150,
      "More": "",
      "Name": "ぐされ",
      "Rank": "4",
      "Thumb": "albums/ぐされ.jpg"
  },
  {
      "ArtistID": 36,
      "ID": 151,
      "More": "",
      "Name": "これくしょん2",
      "Rank": "4",
      "Thumb": "albums/これくしょん2.jpg"
  },
  {
      "ArtistID": 27,
      "ID": 152,
      "More": "",
      "Name": "Smile",
      "Rank": "4",
      "Thumb": "albums/Smile.jpg"
  },
  {
      "ArtistID": 62,
      "ID": 153,
      "More": "",
      "Name": "夏草が邪魔をする",
      "Rank": "4",
      "Thumb": "albums/夏草が邪魔をする.jpg"
  },
  {
      "ArtistID": 62,
      "ID": 154,
      "More": "",
      "Name": "負け犬にアンコールはいらない",
      "Rank": "4",
      "Thumb": "albums/負け犬にアンコールはいらない.jpg"
  },
  {
      "ArtistID": 36,
      "ID": 155,
      "More": "",
      "Name": "Clumsy",
      "Rank": "4",
      "Thumb": "albums/Clumsy.jpg"
  },
  {
      "ArtistID": 27,
      "ID": 156,
      "More": "",
      "Name": "Kaizin",
      "Rank": "4",
      "Thumb": "albums/Kaizin.jpg"
  },
  {
      "ArtistID": 36,
      "ID": 157,
      "More": "",
      "Name": "これくしょん ヴァイナル",
      "Rank": "4",
      "Thumb": "albums/これくしょん ヴァイナル.jpg"
  },
  {
      "ArtistID": 62,
      "ID": 158,
      "More": "",
      "Name": "だから僕は音楽を辞めた",
      "Rank": "4",
      "Thumb": "albums/だから僕は音楽を辞めた.jpg"
  },
  {
      "ArtistID": 60,
      "ID": 159,
      "More": "",
      "Name": "Attitude",
      "Rank": "4",
      "Thumb": "albums/Attitude.jpg"
  },
  {
      "ArtistID": 63,
      "ID": 160,
      "More": "",
      "Name": "Chime",
      "Rank": "4",
      "Thumb": "albums/Chime.jpg"
  },
  {
      "ArtistID": 64,
      "ID": 161,
      "More": "",
      "Name": "7月の翼",
      "Rank": "4",
      "Thumb": "albums/7月の翼.jpg"
  },
  {
      "ArtistID": 64,
      "ID": 162,
      "More": "",
      "Name": "Ref:rain / 眩いばかり",
      "Rank": "4",
      "Thumb": "albums/Refrain  眩いばかり.jpg"
  },
  {
      "ArtistID": 37,
      "ID": 163,
      "More": "",
      "Name": "あなたが決めた今日なら",
      "Rank": "4",
      "Thumb": "albums/あなたが決めた今日なら.jpg"
  },
  {
      "ArtistID": 58,
      "ID": 164,
      "More": "",
      "Name": "Editorial",
      "Rank": "4",
      "Thumb": "albums/Editorial.jpg"
  },
  {
      "ArtistID": 37,
      "ID": 165,
      "More": "",
      "Name": "PROUD",
      "Rank": "4",
      "Thumb": "albums/PROUD.jpg"
  },
  {
      "ArtistID": 36,
      "ID": 166,
      "More": "",
      "Name": "collection vinyl",
      "Rank": "4",
      "Thumb": "albums/collection vinyl.jpg"
  },
  {
      "ArtistID": 37,
      "ID": 167,
      "More": "",
      "Name": "My Way",
      "Rank": "4",
      "Thumb": "albums/My Way.jpg"
  },
  {
      "ArtistID": 40,
      "ID": 168,
      "More": "",
      "Name": "Y/our Song",
      "Rank": "4",
      "Thumb": "albums/Your Song.jpg"
  },
  {
      "ArtistID": 64,
      "ID": 169,
      "More": "",
      "Name": "星の消えた夜に",
      "Rank": "4",
      "Thumb": "albums/星の消えた夜に.jpg"
  },
  {
      "ArtistID": 27,
      "ID": 170,
      "More": "",
      "Name": "Otogi",
      "Rank": "4",
      "Thumb": "albums/Otogi.jpg"
  },
  {
      "ArtistID": 64,
      "ID": 171,
      "More": "",
      "Name": "Bitter & Sweet",
      "Rank": "4",
      "Thumb": "albums/Bitter & Sweet.jpg"
  },
  {
      "ArtistID": 36,
      "ID": 172,
      "More": "",
      "Name": "Kobasolo Cover",
      "Rank": "4",
      "Thumb": "albums/Kobasolo Cover.jpg"
  },
  {
      "ArtistID": 66,
      "ID": 173,
      "More": "",
      "Name": "LANDSPACE",
      "Rank": "4",
      "Thumb": "albums/LANDSPACE.jpg"
  },
  {
      "ArtistID": 67,
      "ID": 174,
      "More": "",
      "Name": "ALL TIME ROCK N ROLL",
      "Rank": "4",
      "Thumb": "albums/ALL TIME ROCK N ROLL.jpg"
  },
  {
      "ArtistID": 61,
      "ID": 175,
      "More": "",
      "Name": "潜潜話",
      "Rank": "4",
      "Thumb": "albums/潜潜話.jpg"
  },
  {
      "ArtistID": 68,
      "ID": 176,
      "More": "",
      "Name": "So What?",
      "Rank": "4",
      "Thumb": "albums/So What.jpg"
  },
  {
      "ArtistID": 69,
      "ID": 177,
      "More": "",
      "Name": "Fukashigi No Carte \"Bunny Girl Senpai\"",
      "Rank": "4",
      "Thumb": "albums/Fukashigi No Carte Bunny Girl Senpai.jpg"
  },
  {
      "ArtistID": 70,
      "ID": 178,
      "More": "",
      "Name": "Shinsekai PLUS",
      "Rank": "4",
      "Thumb": "albums/Shinsekai PLUS.jpg"
  },
  {
      "ArtistID": 71,
      "ID": 179,
      "More": "",
      "Name": "選んでデート・ア・ライブ 〜DATE A LIVE BEST SELECTION〜",
      "Rank": "4",
      "Thumb": "albums/選んでデート・ア・ライブ 〜DATE A LIVE BEST SELECTION〜.jpg"
  },
  {
      "ArtistID": 72,
      "ID": 180,
      "More": "",
      "Name": "Linkage Ring",
      "Rank": "4",
      "Thumb": "albums/Linkage Ring.jpg"
  },
  {
      "ArtistID": 37,
      "ID": 181,
      "More": "",
      "Name": "はじまりの時",
      "Rank": "4",
      "Thumb": "albums/はじまりの時.jpg"
  },
  {
      "ArtistID": 73,
      "ID": 182,
      "More": "",
      "Name": "Happy encount",
      "Rank": "4",
      "Thumb": "albums/Happy encount.jpg"
  },
  {
      "ArtistID": 74,
      "ID": 183,
      "More": "",
      "Name": "Butterflies",
      "Rank": "4",
      "Thumb": "albums/Butterflies.jpg"
  },
  {
      "ArtistID": 75,
      "ID": 184,
      "More": "",
      "Name": "Here",
      "Rank": "4",
      "Thumb": "albums/Here.jpg"
  },
  {
      "ArtistID": 76,
      "ID": 185,
      "More": "",
      "Name": "Weathering With You",
      "Rank": "4",
      "Thumb": "albums/Weathering With You.jpg"
  },
  {
      "ArtistID": 30,
      "ID": 186,
      "More": "",
      "Name": "Savior Takayan!",
      "Rank": "4",
      "Thumb": "albums/Savior Takayan!.jpg"
  },
  {
      "ArtistID": 63,
      "ID": 187,
      "More": "",
      "Name": "Jasmine",
      "Rank": "4",
      "Thumb": "albums/Jasmine.jpg"
  },
  {
      "ArtistID": 30,
      "ID": 188,
      "More": "",
      "Name": "Just disappear",
      "Rank": "4",
      "Thumb": "albums/Just disappear.jpg"
  },
  {
      "ArtistID": 78,
      "ID": 189,
      "More": "",
      "Name": "Night Rainbow",
      "Rank": "4",
      "Thumb": "albums/Night Rainbow.jpg"
  },
  {
      "ArtistID": 63,
      "ID": 190,
      "More": "",
      "Name": "AMUSIC",
      "Rank": "4",
      "Thumb": "albums/AMUSIC.jpg"
  },
  {
      "ArtistID": 63,
      "ID": 191,
      "More": "",
      "Name": "Familia",
      "Rank": "4",
      "Thumb": "albums/Familia.jpg"
  },
  {
      "ArtistID": 72,
      "ID": 192,
      "More": "",
      "Name": "Violet Cry",
      "Rank": "4",
      "Thumb": "albums/Violet Cry.jpg"
  },
  {
      "ArtistID": 50,
      "ID": 193,
      "More": "",
      "Name": "Will",
      "Rank": "4",
      "Thumb": "albums/Will.jpg"
  },
  {
      "ArtistID": 71,
      "ID": 194,
      "More": "",
      "Name": "デート・ア・ライブ キャラクターソングコレクション",
      "Rank": "4",
      "Thumb": "albums/デート・ア・ライブ キャラクターソングコレクション.jpg"
  },
  {
      "ArtistID": 36,
      "ID": 195,
      "More": "",
      "Name": "Natsurenbo",
      "Rank": "4",
      "Thumb": "albums/Natsurenbo.jpg"
  },
  {
      "ArtistID": 37,
      "ID": 196,
      "More": "",
      "Name": "翼",
      "Rank": "4",
      "Thumb": "albums/翼.jpg"
  },
  {
      "ArtistID": 58,
      "ID": 197,
      "More": "",
      "Name": "Traveler",
      "Rank": "4",
      "Thumb": "albums/Traveler.jpg"
  },
  {
      "ArtistID": 47,
      "ID": 198,
      "More": "",
      "Name": "Minori with Strings Quartet 〜弦楽四重奏の調べ〜",
      "Rank": "4",
      "Thumb": "albums/Minori with Strings Quartet 〜弦楽四重奏の調べ〜.jpg"
  },
  {
      "ArtistID": 66,
      "ID": 199,
      "More": "",
      "Name": "Launcher",
      "Rank": "4",
      "Thumb": "albums/Launcher.jpg"
  },
  {
      "ArtistID": 79,
      "ID": 200,
      "More": "",
      "Name": "THE BOOK 2",
      "Rank": "4",
      "Thumb": "albums/THE BOOK 2.jpg"
  },
  {
      "ArtistID": 63,
      "ID": 201,
      "More": "",
      "Name": "Shake & Shake",
      "Rank": "4",
      "Thumb": "albums/Shake & Shake.jpg"
  },
  {
      "ArtistID": 31,
      "ID": 202,
      "More": "",
      "Name": "SHOCK!",
      "Rank": "4",
      "Thumb": "albums/SHOCK!.jpg"
  },
  {
      "ArtistID": 73,
      "ID": 203,
      "More": "",
      "Name": "Lonely Queens Liberation Party",
      "Rank": "4",
      "Thumb": "albums/Lonely Queens Liberation Party.jpg"
  },
  {
      "ArtistID": 76,
      "ID": 204,
      "More": "",
      "Name": "Human Bloom",
      "Rank": "4",
      "Thumb": "albums/Human Bloom.jpg"
  },
  {
      "ArtistID": 80,
      "ID": 205,
      "More": "",
      "Name": "青二才",
      "Rank": "4",
      "Thumb": "albums/青二才.jpg"
  },
  {
      "ArtistID": 30,
      "ID": 206,
      "More": "",
      "Name": "Toy",
      "Rank": "4",
      "Thumb": "albums/Toy.jpg"
  },
  {
      "ArtistID": 63,
      "ID": 207,
      "More": "",
      "Name": "Equal / Traveling",
      "Rank": "4",
      "Thumb": "albums/Equal  Traveling.jpg"
  },
  {
      "ArtistID": 37,
      "ID": 208,
      "More": "",
      "Name": "SHINE",
      "Rank": "4",
      "Thumb": "albums/SHINE.jpg"
  },
  {
      "ArtistID": 37,
      "ID": 209,
      "More": "",
      "Name": "Who Are You",
      "Rank": "4",
      "Thumb": "albums/Who Are You.jpg"
  },
  {
      "ArtistID": 73,
      "ID": 210,
      "More": "",
      "Name": "WILL",
      "Rank": "4",
      "Thumb": "albums/WILL.jpg"
  },
  {
      "ArtistID": 55,
      "ID": 211,
      "More": "",
      "Name": "you",
      "Rank": "4",
      "Thumb": "albums/you.jpg"
  },
  {
      "ArtistID": 81,
      "ID": 212,
      "More": "",
      "Name": "ジェリーフィッシュ (feat. ローラーガール)",
      "Rank": "4",
      "Thumb": "albums/ジェリーフィッシュ (feat. ローラーガール).jpg"
  },
  {
      "ArtistID": 79,
      "ID": 213,
      "More": "",
      "Name": "THE BOOK",
      "Rank": "4",
      "Thumb": "albums/THE BOOK.jpg"
  },
  {
      "ArtistID": 46,
      "ID": 214,
      "More": "",
      "Name": "さくら 〜あなたに出会えてよかった〜",
      "Rank": "4",
      "Thumb": "albums/さくら 〜あなたに出会えてよかった〜.jpg"
  },
  {
      "ArtistID": 37,
      "ID": 215,
      "More": "",
      "Name": "渋谷純愛物語",
      "Rank": "4",
      "Thumb": "albums/渋谷純愛物語.jpg"
  },
  {
      "ArtistID": 55,
      "ID": 216,
      "More": "",
      "Name": "ふたりきりルームシアター",
      "Rank": "4",
      "Thumb": "albums/ふたりきりルームシアター.jpg"
  },
  {
      "ArtistID": 37,
      "ID": 217,
      "More": "",
      "Name": "また君と",
      "Rank": "4",
      "Thumb": "albums/また君と.jpg"
  },
  {
      "ArtistID": 47,
      "ID": 218,
      "More": "",
      "Name": "SPIRAL",
      "Rank": "4",
      "Thumb": "albums/SPIRAL.jpg"
  },
  {
      "ArtistID": 79,
      "ID": 219,
      "More": "",
      "Name": "THE BOOK 3",
      "Rank": "4",
      "Thumb": "albums/THE BOOK 3.jpg"
  },
  {
      "ArtistID": 81,
      "ID": 220,
      "More": "",
      "Name": "ゆのもきゅ",
      "Rank": "4",
      "Thumb": "albums/ゆのもきゅ.jpg"
  },
  {
      "ArtistID": 63,
      "ID": 221,
      "More": "",
      "Name": "Harmonize e.p",
      "Rank": "4",
      "Thumb": "albums/Harmonize e.p.jpg"
  },
  {
      "ArtistID": 3,
      "ID": 222,
      "More": "",
      "Name": "スパイシーチョコレート BEST OF LOVE SONGS",
      "Rank": "4",
      "Thumb": "albums/スパイシーチョコレート BEST OF LOVE SONGS.jpg"
  },
  {
      "ArtistID": 82,
      "ID": 223,
      "More": "",
      "Name": "Dr.Izzy",
      "Rank": "4",
      "Thumb": "albums/Dr.Izzy.jpg"
  },
  {
      "ArtistID": 55,
      "ID": 224,
      "More": "",
      "Name": "シンシアリー",
      "Rank": "4",
      "Thumb": "albums/シンシアリー.jpg"
  },
  {
      "ArtistID": 55,
      "ID": 225,
      "More": "",
      "Name": "shimamo",
      "Rank": "4",
      "Thumb": "albums/shimamo.jpg"
  },
  {
      "ArtistID": 63,
      "ID": 226,
      "More": "",
      "Name": "I co Y",
      "Rank": "4",
      "Thumb": "albums/I co Y.jpg"
  },
  {
      "ArtistID": 55,
      "ID": 227,
      "More": "",
      "Name": "ツーアウトロマンス",
      "Rank": "4",
      "Thumb": "albums/ツーアウトロマンス.jpg"
  },
  {
      "ArtistID": 63,
      "ID": 228,
      "More": "",
      "Name": "Shake & Shake / ナイトウォーカー",
      "Rank": "4",
      "Thumb": "albums/Shake & Shake  ナイトウォーカー.jpg"
  },
  {
      "ArtistID": 62,
      "ID": 229,
      "More": "",
      "Name": "パレード",
      "Rank": "4",
      "Thumb": "albums/パレード.jpg"
  },
  {
      "ArtistID": 73,
      "ID": 230,
      "More": "",
      "Name": "フロム",
      "Rank": "4",
      "Thumb": "albums/フロム.jpg"
  },
  {
      "ArtistID": 62,
      "ID": 231,
      "More": "",
      "Name": "ブレーメン",
      "Rank": "4",
      "Thumb": "albums/ブレーメン.jpg"
  },
  {
      "ArtistID": 64,
      "ID": 232,
      "More": "",
      "Name": "BEST SELECTION \"blanc\"",
      "Rank": "4",
      "Thumb": "albums/BEST SELECTION blanc.jpg"
  },
  {
      "ArtistID": 47,
      "ID": 233,
      "More": "",
      "Name": "ありがとう、だいすき",
      "Rank": "4",
      "Thumb": "albums/ありがとう、だいすき.jpg"
  },
  {
      "ArtistID": 61,
      "ID": 234,
      "More": "",
      "Name": "ミラーチューン",
      "Rank": "4",
      "Thumb": "albums/ミラーチューン.jpg"
  },
  {
      "ArtistID": 47,
      "ID": 235,
      "More": "",
      "Name": "Innocent Age",
      "Rank": "4",
      "Thumb": "albums/Innocent Age.jpg"
  },
  {
      "ArtistID": 63,
      "ID": 236,
      "More": "",
      "Name": "リタルダンド",
      "Rank": "4",
      "Thumb": "albums/リタルダンド.jpg"
  },
  {
      "ArtistID": 37,
      "ID": 237,
      "More": "",
      "Name": "ワインレッドの心",
      "Rank": "4",
      "Thumb": "albums/ワインレッドの心.jpg"
  },
  {
      "ArtistID": 83,
      "ID": 238,
      "More": "",
      "Name": "Milk",
      "Rank": "4",
      "Thumb": "albums/Milk.jpg"
  },
  {
      "ArtistID": 55,
      "ID": 239,
      "More": "",
      "Name": "好きになってよかったな",
      "Rank": "4",
      "Thumb": "albums/好きになってよかったな.jpg"
  },
  {
      "ArtistID": 62,
      "ID": 240,
      "More": "",
      "Name": "晴る",
      "Rank": "4",
      "Thumb": "albums/晴る.jpg"
  },
  {
      "ArtistID": 63,
      "ID": 241,
      "More": "",
      "Name": "本音",
      "Rank": "4",
      "Thumb": "albums/本音.jpg"
  },
  {
      "ArtistID": 61,
      "ID": 242,
      "More": "",
      "Name": "正しくなれない (From THE FIRST TAKE)",
      "Rank": "4",
      "Thumb": "albums/正しくなれない (From THE FIRST TAKE).jpg"
  },
  {
      "ArtistID": 40,
      "ID": 243,
      "More": "",
      "Name": "四季うた summer",
      "Rank": "4",
      "Thumb": "albums/四季うた summer.jpg"
  },
  {
      "ArtistID": 40,
      "ID": 244,
      "More": "",
      "Name": "COVERS 3",
      "Rank": "4",
      "Thumb": "albums/COVERS 3.jpg"
  },
  {
      "ArtistID": 80,
      "ID": 245,
      "More": "",
      "Name": "真っ裸",
      "Rank": "4",
      "Thumb": "albums/真っ裸.jpg"
  },
  {
      "ArtistID": 63,
      "ID": 246,
      "More": "",
      "Name": "祝祭",
      "Rank": "4",
      "Thumb": "albums/祝祭.jpg"
  },
  {
      "ArtistID": 80,
      "ID": 247,
      "More": "",
      "Name": "絶頂讃歌",
      "Rank": "4",
      "Thumb": "albums/絶頂讃歌.jpg"
  },
  {
      "ArtistID": 62,
      "ID": 248,
      "More": "",
      "Name": "花に亡霊",
      "Rank": "4",
      "Thumb": "albums/花に亡霊.jpg"
  },
  {
      "ArtistID": 63,
      "ID": 249,
      "More": "",
      "Name": "Negai / Higher Ground",
      "Rank": "4",
      "Thumb": "albums/Negai  Higher Ground.jpg"
  },
  {
      "ArtistID": 31,
      "ID": 250,
      "More": "",
      "Name": "飽和 / シネマ",
      "Rank": "4",
      "Thumb": "albums/飽和  シネマ.jpg"
  },
  {
      "ArtistID": 84,
      "ID": 251,
      "More": "",
      "Name": "Htrol Remix",
      "Rank": "4",
      "Thumb": "albums/Htrol Remix.jpg"
  },
  {
      "ArtistID": 85,
      "ID": 252,
      "More": "",
      "Name": "Against The Sun",
      "Rank": "4",
      "Thumb": "albums/Against The Sun.jpg"
  },
  {
      "ArtistID": 86,
      "ID": 253,
      "More": "",
      "Name": "Anything Anymore",
      "Rank": "4",
      "Thumb": "albums/Anything Anymore.jpg"
  },
  {
      "ArtistID": 87,
      "ID": 254,
      "More": "",
      "Name": "Anywhere I Go",
      "Rank": "4",
      "Thumb": "albums/Anywhere I Go.jpg"
  },
  {
      "ArtistID": 27,
      "ID": 255,
      "More": "",
      "Name": "Are You Lonely",
      "Rank": "4",
      "Thumb": "albums/Are You Lonely.jpg"
  },
  {
      "ArtistID": 88,
      "ID": 256,
      "More": "",
      "Name": "True Colors",
      "Rank": "4",
      "Thumb": "albums/True Colors.jpg"
  },
  {
      "ArtistID": 89,
      "ID": 257,
      "More": "",
      "Name": "Body Back (feat. Maia Wright)",
      "Rank": "4",
      "Thumb": "albums/Body Back (feat. Maia Wright).jpg"
  },
  {
      "ArtistID": 6,
      "ID": 258,
      "More": "",
      "Name": "NCS is Love, NCS is Life, Vol. 1",
      "Rank": "4",
      "Thumb": "albums/NCS is Love, NCS is Life, Vol. 1.jpg"
  },
  {
      "ArtistID": 16,
      "ID": 259,
      "More": "",
      "Name": "ALL OUT",
      "Rank": "4",
      "Thumb": "albums/ALL OUT.jpg"
  },
  {
      "ArtistID": 15,
      "ID": 260,
      "More": "",
      "Name": "End of Time",
      "Rank": "4",
      "Thumb": "albums/End of Time.jpg"
  },
  {
      "ArtistID": 90,
      "ID": 261,
      "More": "",
      "Name": "Pharmacy",
      "Rank": "4",
      "Thumb": "albums/Pharmacy.jpg"
  },
  {
      "ArtistID": 91,
      "ID": 262,
      "More": "",
      "Name": "Frame of Mind",
      "Rank": "4",
      "Thumb": "albums/Frame of Mind.jpg"
  },
  {
      "ArtistID": 16,
      "ID": 263,
      "More": "",
      "Name": "GIANTS",
      "Rank": "4",
      "Thumb": "albums/GIANTS.jpg"
  },
  {
      "ArtistID": 16,
      "ID": 264,
      "More": "",
      "Name": "GODS",
      "Rank": "4",
      "Thumb": "albums/GODS.jpg"
  },
  {
      "ArtistID": 92,
      "ID": 265,
      "More": "",
      "Name": "heart afire",
      "Rank": "4",
      "Thumb": "albums/heart afire.jpg"
  },
  {
      "ArtistID": 88,
      "ID": 266,
      "More": "",
      "Name": "Ignite (2016 League Of Legends World Championship)",
      "Rank": "4",
      "Thumb": "albums/Ignite (2016 League Of Legends World Championship).jpg"
  },
  {
      "ArtistID": 15,
      "ID": 267,
      "More": "",
      "Name": "Ignite",
      "Rank": "4",
      "Thumb": "albums/Ignite.jpg"
  },
  {
      "ArtistID": 93,
      "ID": 268,
      "More": "",
      "Name": "Inside the Lines",
      "Rank": "4",
      "Thumb": "albums/Inside the Lines.jpg"
  },
  {
      "ArtistID": 94,
      "ID": 269,
      "More": "",
      "Name": "Unknown",
      "Rank": "4",
      "Thumb": "albums/Unknown.jpg"
  },
  {
      "ArtistID": 95,
      "ID": 270,
      "More": "",
      "Name": "Lights Go Down (Radio Mix) [feat. Curtains]",
      "Rank": "4",
      "Thumb": "albums/Lights Go Down (Radio Mix) [feat. Curtains].jpg"
  },
  {
      "ArtistID": 6,
      "ID": 271,
      "More": "",
      "Name": "Linked",
      "Rank": "4",
      "Thumb": "albums/Linked.jpg"
  },
  {
      "ArtistID": 96,
      "ID": 272,
      "More": "",
      "Name": "<I°_°I>",
      "Rank": "4",
      "Thumb": "albums/Sad Robot.jpg"
  },
  {
      "ArtistID": 15,
      "ID": 273,
      "More": "",
      "Name": "This Is Acting (Deluxe Version)",
      "Rank": "4",
      "Thumb": "albums/This Is Acting (Deluxe Version).jpg"
  },
  {
      "ArtistID": 17,
      "ID": 274,
      "More": "",
      "Name": "Nen va Hoa",
      "Rank": "4",
      "Thumb": "albums/Nen va Hoa.jpg"
  },
  {
      "ArtistID": 98,
      "ID": 275,
      "More": "",
      "Name": "Never Coming Home (feat. Kinley)",
      "Rank": "4",
      "Thumb": "albums/Never Coming Home (feat. Kinley).jpg"
  },
  {
      "ArtistID": 99,
      "ID": 276,
      "More": "",
      "Name": "Nightcore",
      "Rank": "4",
      "Thumb": "albums/Nightcore.jpg"
  },
  {
      "ArtistID": 87,
      "ID": 277,
      "More": "",
      "Name": "Nothing Stopping Me",
      "Rank": "4",
      "Thumb": "albums/Nothing Stopping Me.jpg"
  },
  {
      "ArtistID": 100,
      "ID": 278,
      "More": "",
      "Name": "Numb (feat. Johnning)",
      "Rank": "4",
      "Thumb": "albums/Numb (feat. Johnning).jpg"
  },
  {
      "ArtistID": 101,
      "ID": 279,
      "More": "",
      "Name": "On the Line",
      "Rank": "4",
      "Thumb": "albums/On the Line.jpg"
  },
  {
      "ArtistID": 102,
      "ID": 280,
      "More": "",
      "Name": "Our Story (Radio Edit)",
      "Rank": "4",
      "Thumb": "albums/Our Story (Radio Edit).jpg"
  },
  {
      "ArtistID": 103,
      "ID": 281,
      "More": "",
      "Name": "Phoenix",
      "Rank": "4",
      "Thumb": "albums/Phoenix.jpg"
  },
  {
      "ArtistID": 15,
      "ID": 282,
      "More": "",
      "Name": "Play",
      "Rank": "4",
      "Thumb": "albums/Play.jpg"
  },
  {
      "ArtistID": 16,
      "ID": 283,
      "More": "",
      "Name": "POP/STARS",
      "Rank": "4",
      "Thumb": "albums/POPSTARS.jpg"
  },
  {
      "ArtistID": 85,
      "ID": 284,
      "More": "",
      "Name": "Red Line",
      "Rank": "4",
      "Thumb": "albums/Red Line.jpg"
  },
  {
      "ArtistID": 104,
      "ID": 285,
      "More": "",
      "Name": "Yêu 5",
      "Rank": "4",
      "Thumb": "albums/Yêu 5.jpg"
  },
  {
      "ArtistID": 16,
      "ID": 286,
      "More": "",
      "Name": "RISE",
      "Rank": "4",
      "Thumb": "albums/RISE.jpg"
  },
  {
      "ArtistID": 105,
      "ID": 287,
      "More": "",
      "Name": "The Future",
      "Rank": "4",
      "Thumb": "albums/The Future.jpg"
  },
  {
      "ArtistID": 106,
      "ID": 288,
      "More": "",
      "Name": "Saving Light",
      "Rank": "4",
      "Thumb": "albums/Saving Light.jpg"
  },
  {
      "ArtistID": 102,
      "ID": 289,
      "More": "",
      "Name": "Hourglass",
      "Rank": "4",
      "Thumb": "albums/Hourglass.jpg"
  },
  {
      "ArtistID": 107,
      "ID": 290,
      "More": "",
      "Name": "Start Again",
      "Rank": "4",
      "Thumb": "albums/Start Again.jpg"
  },
  {
      "ArtistID": 108,
      "ID": 291,
      "More": "",
      "Name": "Summer Air",
      "Rank": "4",
      "Thumb": "albums/Summer Air.jpg"
  },
  {
      "ArtistID": 109,
      "ID": 292,
      "More": "",
      "Name": "Blood, Sweat & 3 Years",
      "Rank": "4",
      "Thumb": "albums/Blood, Sweat & 3 Years.jpg"
  },
  {
      "ArtistID": 15,
      "ID": 293,
      "More": "",
      "Name": "The Spectre",
      "Rank": "4",
      "Thumb": "albums/The Spectre.jpg"
  },
  {
      "ArtistID": 110,
      "ID": 294,
      "More": "",
      "Name": "Thunder",
      "Rank": "4",
      "Thumb": "albums/Thunder.jpg"
  },
  {
      "ArtistID": 91,
      "ID": 295,
      "More": "",
      "Name": "Till Its Over",
      "Rank": "4",
      "Thumb": "albums/Till Its Over.jpg"
  },
  {
      "ArtistID": 111,
      "ID": 296,
      "More": "",
      "Name": "Untouchable",
      "Rank": "4",
      "Thumb": "albums/Untouchable.jpg"
  },
  {
      "ArtistID": 87,
      "ID": 297,
      "More": "",
      "Name": "Walk Thru Fire",
      "Rank": "4",
      "Thumb": "albums/Walk Thru Fire.jpg"
  },
  {
      "ArtistID": 112,
      "ID": 298,
      "More": "",
      "Name": "AVĪCI (01)",
      "Rank": "4",
      "Thumb": "albums/AVĪCI (01).jpg"
  },
  {
      "ArtistID": 113,
      "ID": 299,
      "More": "",
      "Name": "m-tp M-TP",
      "Rank": "4",
      "Thumb": "albums/m-tp M-TP.jpg"
  },
  {
      "ArtistID": 114,
      "ID": 300,
      "More": "",
      "Name": "Anh Đã Quen Với Cô Đơn",
      "Rank": "4",
      "Thumb": "albums/Anh Đã Quen Với Cô Đơn.jpg"
  },
  {
      "ArtistID": 115,
      "ID": 301,
      "More": "",
      "Name": "Wild Youth",
      "Rank": "4",
      "Thumb": "albums/Wild Youth.jpg"
  },
  {
      "ArtistID": 116,
      "ID": 302,
      "More": "",
      "Name": "Bức Tranh Từ Nước Mắt",
      "Rank": "4",
      "Thumb": "albums/Bức Tranh Từ Nước Mắt.jpg"
  },
  {
      "ArtistID": 116,
      "ID": 303,
      "More": "",
      "Name": "Mr. Siro (Piano Version)",
      "Rank": "4",
      "Thumb": "albums/Mr. Siro (Piano Version).jpg"
  },
  {
      "ArtistID": 116,
      "ID": 304,
      "More": "",
      "Name": "Chạm Đáy Nỗi Đau",
      "Rank": "4",
      "Thumb": "albums/Chạm Đáy Nỗi Đau.jpg"
  },
  {
      "ArtistID": 116,
      "ID": 305,
      "More": "",
      "Name": "Càng Níu Giữ Càng Dễ Mất",
      "Rank": "4",
      "Thumb": "albums/Càng Níu Giữ Càng Dễ Mất.jpg"
  },
  {
      "ArtistID": 117,
      "ID": 306,
      "More": "",
      "Name": "Hương Mùa Hè",
      "Rank": "4",
      "Thumb": "albums/Hương Mùa Hè.jpg"
  },
  {
      "ArtistID": 118,
      "ID": 307,
      "More": "",
      "Name": "Cảm Giác Lúc Ấy Sẽ Ra Sao",
      "Rank": "4",
      "Thumb": "albums/Cảm Giác Lúc Ấy Sẽ Ra Sao.jpg"
  },
  {
      "ArtistID": 116,
      "ID": 308,
      "More": "",
      "Name": "Day Dứt Nỗi Đau",
      "Rank": "4",
      "Thumb": "albums/Day Dứt Nỗi Đau.jpg"
  },
  {
      "ArtistID": 116,
      "ID": 309,
      "More": "",
      "Name": "Dưới Những Cơn Mưa",
      "Rank": "4",
      "Thumb": "albums/Dưới Những Cơn Mưa.jpg"
  },
  {
      "ArtistID": 117,
      "ID": 310,
      "More": "",
      "Name": "Em Đã Biết",
      "Rank": "4",
      "Thumb": "albums/Em Đã Biết.jpg"
  },
  {
      "ArtistID": 116,
      "ID": 311,
      "More": "",
      "Name": "Gương Mặt Lạ Lẫm",
      "Rank": "4",
      "Thumb": "albums/Gương Mặt Lạ Lẫm.jpg"
  },
  {
      "ArtistID": 119,
      "ID": 312,
      "More": "",
      "Name": "Illuminate... (The Hits and More)",
      "Rank": "4",
      "Thumb": "albums/Illuminate... (The Hits and More).jpg"
  },
  {
      "ArtistID": 120,
      "ID": 313,
      "More": "",
      "Name": "Phạm Hồng Phước Collection",
      "Rank": "4",
      "Thumb": "albums/Phạm Hồng Phước Collection.jpg"
  },
  {
      "ArtistID": 116,
      "ID": 314,
      "More": "",
      "Name": "Không Cần Thêm Một Ai Nữa",
      "Rank": "4",
      "Thumb": "albums/Không Cần Thêm Một Ai Nữa.jpg"
  },
  {
      "ArtistID": 117,
      "ID": 315,
      "More": "",
      "Name": "Không Sao Mà, Em Đây Rồi",
      "Rank": "4",
      "Thumb": "albums/Không Sao Mà, Em Đây Rồi.jpg"
  },
  {
      "ArtistID": 121,
      "ID": 316,
      "More": "",
      "Name": "JORDI (Deluxe)",
      "Rank": "4",
      "Thumb": "albums/JORDI (Deluxe).jpg"
  },
  {
      "ArtistID": 118,
      "ID": 317,
      "More": "",
      "Name": "Mình Là Gì Của Nhau",
      "Rank": "4",
      "Thumb": "albums/Mình Là Gì Của Nhau.jpg"
  },
  {
      "ArtistID": 116,
      "ID": 318,
      "More": "",
      "Name": "Một Bước Yêu Vạn Dặm Đau",
      "Rank": "4",
      "Thumb": "albums/Một Bước Yêu Vạn Dặm Đau.jpg"
  },
  {
      "ArtistID": 122,
      "ID": 319,
      "More": "",
      "Name": "Một Nhà",
      "Rank": "4",
      "Thumb": "albums/Một Nhà.jpg"
  },
  {
      "ArtistID": 123,
      "ID": 320,
      "More": "",
      "Name": "Người Đáng Thương Là Anh",
      "Rank": "4",
      "Thumb": "albums/Người Đáng Thương Là Anh.jpg"
  },
  {
      "ArtistID": 124,
      "ID": 321,
      "More": "",
      "Name": "Ca Sĩ Giấu Mặt",
      "Rank": "4",
      "Thumb": "albums/Ca Sĩ Giấu Mặt.jpg"
  },
  {
      "ArtistID": 114,
      "ID": 322,
      "More": "",
      "Name": "Nếu Ngày Ấy",
      "Rank": "4",
      "Thumb": "albums/Nếu Ngày Ấy.jpg"
  },
  {
      "ArtistID": 125,
      "ID": 323,
      "More": "",
      "Name": "Nine Track Mind",
      "Rank": "4",
      "Thumb": "albums/Nine Track Mind.jpg"
  },
  {
      "ArtistID": 126,
      "ID": 324,
      "More": "",
      "Name": "Phieu be ngoan",
      "Rank": "4",
      "Thumb": "albums/Phieu be ngoan.jpg"
  },
  {
      "ArtistID": 114,
      "ID": 325,
      "More": "",
      "Name": "Phía Sau Một Cô Gái",
      "Rank": "4",
      "Thumb": "albums/Phía Sau Một Cô Gái.jpg"
  },
  {
      "ArtistID": 127,
      "ID": 326,
      "More": "",
      "Name": "Sau Tất Cả - Single",
      "Rank": "4",
      "Thumb": "albums/Sau Tất Cả - Single.jpg"
  },
  {
      "ArtistID": 124,
      "ID": 327,
      "More": "",
      "Name": "The First Show",
      "Rank": "4",
      "Thumb": "albums/The First Show.jpg"
  },
  {
      "ArtistID": 116,
      "ID": 328,
      "More": "",
      "Name": "Tìm Được Nhau Khó Thế Nào",
      "Rank": "4",
      "Thumb": "albums/Tìm Được Nhau Khó Thế Nào.jpg"
  },
  {
      "ArtistID": 116,
      "ID": 329,
      "More": "",
      "Name": "Tình Yêu Chắp Vá",
      "Rank": "4",
      "Thumb": "albums/Tình Yêu Chắp Vá.jpg"
  },
  {
      "ArtistID": 116,
      "ID": 330,
      "More": "",
      "Name": "Tự Lau Nước Mắt",
      "Rank": "4",
      "Thumb": "albums/Tự Lau Nước Mắt.jpg"
  },
  {
      "ArtistID": 126,
      "ID": 331,
      "More": "",
      "Name": "Forever Lover",
      "Rank": "4",
      "Thumb": "albums/Forever Lover.jpg"
  },
  {
      "ArtistID": 123,
      "ID": 332,
      "More": "",
      "Name": "Yêu Là Tha Thứ",
      "Rank": "4",
      "Thumb": "albums/Yêu Là Tha Thứ.jpg"
  },
  {
      "ArtistID": 123,
      "ID": 333,
      "More": "",
      "Name": "Yêu Đơn Phương",
      "Rank": "4",
      "Thumb": "albums/Yêu Đơn Phương.jpg"
  },
  {
      "ArtistID": 123,
      "ID": 334,
      "More": "",
      "Name": "Đau Để Trưởng Thành",
      "Rank": "4",
      "Thumb": "albums/Đau Để Trưởng Thành.jpg"
  },
  {
      "ArtistID": 114,
      "ID": 335,
      "More": "",
      "Name": "Đi Để Trở Về",
      "Rank": "4",
      "Thumb": "albums/Đi Để Trở Về.jpg"
  },
  {
      "ArtistID": 15,
      "ID": 336,
      "More": "",
      "Name": "All Falls Down (feat. Juliander)",
      "Rank": "4",
      "Thumb": "albums/All Falls Down (feat. Juliander).jpg"
  },
  {
      "ArtistID": 15,
      "ID": 337,
      "More": "",
      "Name": "Alone, Pt. II",
      "Rank": "4",
      "Thumb": "albums/Alone, Pt. II.jpg"
  },
  {
      "ArtistID": 15,
      "ID": 338,
      "More": "",
      "Name": "Alone",
      "Rank": "4",
      "Thumb": "albums/Alone.jpg"
  },
  {
      "ArtistID": 123,
      "ID": 339,
      "More": "",
      "Name": "Anh Không Đòi Quà",
      "Rank": "4",
      "Thumb": "albums/Anh Không Đòi Quà.jpg"
  },
  {
      "ArtistID": 123,
      "ID": 340,
      "More": "",
      "Name": "Anh Đã Sai",
      "Rank": "4",
      "Thumb": "albums/Anh Đã Sai.jpg"
  },
  {
      "ArtistID": 125,
      "ID": 341,
      "More": "",
      "Name": "Voicenotes",
      "Rank": "4",
      "Thumb": "albums/Voicenotes.jpg"
  },
  {
      "ArtistID": 128,
      "ID": 342,
      "More": "",
      "Name": "Awake",
      "Rank": "4",
      "Thumb": "albums/Awake.jpg"
  },
  {
      "ArtistID": 129,
      "ID": 343,
      "More": "",
      "Name": "Save Me",
      "Rank": "4",
      "Thumb": "albums/Save Me.jpg"
  },
  {
      "ArtistID": 89,
      "ID": 344,
      "More": "",
      "Name": "Gravity",
      "Rank": "4",
      "Thumb": "albums/Gravity.jpg"
  },
  {
      "ArtistID": 130,
      "ID": 345,
      "More": "",
      "Name": "Cause I Love You",
      "Rank": "4",
      "Thumb": "albums/Cause I Love You.jpg"
  },
  {
      "ArtistID": 117,
      "ID": 346,
      "More": "",
      "Name": "Cứ Chill Thôi",
      "Rank": "4",
      "Thumb": "albums/Cứ Chill Thôi.jpg"
  },
  {
      "ArtistID": 131,
      "ID": 347,
      "More": "",
      "Name": "Daily (feat. Jon Becker)",
      "Rank": "4",
      "Thumb": "albums/Daily (feat. Jon Becker).jpg"
  },
  {
      "ArtistID": 132,
      "ID": 348,
      "More": "",
      "Name": "Meet The Orphans",
      "Rank": "4",
      "Thumb": "albums/Meet The Orphans.jpg"
  },
  {
      "ArtistID": 15,
      "ID": 349,
      "More": "",
      "Name": "Darkside",
      "Rank": "4",
      "Thumb": "albums/Darkside.jpg"
  },
  {
      "ArtistID": 114,
      "ID": 350,
      "More": "",
      "Name": "Daydream",
      "Rank": "4",
      "Thumb": "albums/Daydream.jpg"
  },
  {
      "ArtistID": 133,
      "ID": 351,
      "More": "",
      "Name": "VIDA",
      "Rank": "4",
      "Thumb": "albums/VIDA.jpg"
  },
  {
      "ArtistID": 15,
      "ID": 352,
      "More": "",
      "Name": "Diamond Heart",
      "Rank": "4",
      "Thumb": "albums/Diamond Heart.jpg"
  },
  {
      "ArtistID": 15,
      "ID": 353,
      "More": "",
      "Name": "Different World (feat. CORSAK)",
      "Rank": "4",
      "Thumb": "albums/Different World (feat. CORSAK).jpg"
  },
  {
      "ArtistID": 15,
      "ID": 354,
      "More": "",
      "Name": "Faded",
      "Rank": "4",
      "Thumb": "albums/Faded.jpg"
  },
  {
      "ArtistID": 134,
      "ID": 355,
      "More": "",
      "Name": "Fading",
      "Rank": "4",
      "Thumb": "albums/Fading.jpg"
  },
  {
      "ArtistID": 15,
      "ID": 356,
      "More": "",
      "Name": "Fake A Smile",
      "Rank": "4",
      "Thumb": "albums/Fake A Smile.jpg"
  },
  {
      "ArtistID": 135,
      "ID": 357,
      "More": "",
      "Name": "Forever Young",
      "Rank": "4",
      "Thumb": "albums/Forever Young.jpg"
  },
  {
      "ArtistID": 123,
      "ID": 358,
      "More": "",
      "Name": "Giá Như Anh Lặng Im",
      "Rank": "4",
      "Thumb": "albums/Giá Như Anh Lặng Im.jpg"
  },
  {
      "ArtistID": 15,
      "ID": 359,
      "More": "",
      "Name": "Heading Home",
      "Rank": "4",
      "Thumb": "albums/Heading Home.jpg"
  },
  {
      "ArtistID": 15,
      "ID": 360,
      "More": "",
      "Name": "Headlights (feat. KIDDO)",
      "Rank": "4",
      "Thumb": "albums/Headlights (feat. KIDDO).jpg"
  },
  {
      "ArtistID": 15,
      "ID": 361,
      "More": "",
      "Name": "Walkerverse Pt. I & II",
      "Rank": "4",
      "Thumb": "albums/Walkerverse Pt. I & II.jpg"
  },
  {
      "ArtistID": 136,
      "ID": 362,
      "More": "",
      "Name": "At Night, Alone.",
      "Rank": "4",
      "Thumb": "albums/At Night, Alone..jpg"
  },
  {
      "ArtistID": 137,
      "ID": 363,
      "More": "",
      "Name": "Heaven & Hell",
      "Rank": "4",
      "Thumb": "albums/Heaven & Hell.jpg"
  },
  {
      "ArtistID": 114,
      "ID": 364,
      "More": "",
      "Name": "Lalala - Single",
      "Rank": "4",
      "Thumb": "albums/Lalala - Single.jpg"
  },
  {
      "ArtistID": 16,
      "ID": 365,
      "More": "",
      "Name": "Legends Never Die",
      "Rank": "4",
      "Thumb": "albums/Legends Never Die.jpg"
  },
  {
      "ArtistID": 15,
      "ID": 366,
      "More": "",
      "Name": "Different World",
      "Rank": "4",
      "Thumb": "albums/Different World.jpg"
  },
  {
      "ArtistID": 138,
      "ID": 367,
      "More": "",
      "Name": "Love How It Hurts (feat. Tina Stachowiak)",
      "Rank": "4",
      "Thumb": "albums/Love How It Hurts (feat. Tina Stachowiak).jpg"
  },
  {
      "ArtistID": 121,
      "ID": 368,
      "More": "",
      "Name": "V (Asia Tour Edition)",
      "Rank": "4",
      "Thumb": "albums/V (Asia Tour Edition).jpg"
  },
  {
      "ArtistID": 139,
      "ID": 369,
      "More": "",
      "Name": "Meant To Be",
      "Rank": "4",
      "Thumb": "albums/Meant To Be.jpg"
  },
  {
      "ArtistID": 138,
      "ID": 370,
      "More": "",
      "Name": "Miracles (feat. Tina Stachowiak)",
      "Rank": "4",
      "Thumb": "albums/Miracles (feat. Tina Stachowiak).jpg"
  },
  {
      "ArtistID": 130,
      "ID": 371,
      "More": "",
      "Name": "Mãi Mãi Bên Nhau",
      "Rank": "4",
      "Thumb": "albums/Mãi Mãi Bên Nhau.jpg"
  },
  {
      "ArtistID": 138,
      "ID": 372,
      "More": "",
      "Name": "Next To Me (feat. Tina Stachowiak)",
      "Rank": "4",
      "Thumb": "albums/Next To Me (feat. Tina Stachowiak).jpg"
  },
  {
      "ArtistID": 114,
      "ID": 373,
      "More": "",
      "Name": "Ngày Mai Em Đi",
      "Rank": "4",
      "Thumb": "albums/Ngày Mai Em Đi.jpg"
  },
  {
      "ArtistID": 140,
      "ID": 374,
      "More": "",
      "Name": "Người Âm Phủ",
      "Rank": "4",
      "Thumb": "albums/Người Âm Phủ.jpg"
  },
  {
      "ArtistID": 130,
      "ID": 375,
      "More": "",
      "Name": "Như Phút Ban Đầu",
      "Rank": "4",
      "Thumb": "albums/Như Phút Ban Đầu.jpg"
  },
  {
      "ArtistID": 123,
      "ID": 376,
      "More": "",
      "Name": "Não Cá Vàng",
      "Rank": "4",
      "Thumb": "albums/Não Cá Vàng.jpg"
  },
  {
      "ArtistID": 104,
      "ID": 377,
      "More": "",
      "Name": "Nến Và Hoa",
      "Rank": "4",
      "Thumb": "albums/Nến Và Hoa.jpg"
  },
  {
      "ArtistID": 15,
      "ID": 378,
      "More": "",
      "Name": "World Of Walker",
      "Rank": "4",
      "Thumb": "albums/World Of Walker.jpg"
  },
  {
      "ArtistID": 121,
      "ID": 379,
      "More": "",
      "Name": "Overexposed Track By Track",
      "Rank": "4",
      "Thumb": "albums/Overexposed Track By Track.jpg"
  },
  {
      "ArtistID": 141,
      "ID": 380,
      "More": "",
      "Name": "Magnets EP",
      "Rank": "4",
      "Thumb": "albums/Magnets EP.jpg"
  },
  {
      "ArtistID": 15,
      "ID": 381,
      "More": "",
      "Name": "PS5 (with TOMORROW X TOGETHER & Alan Walker)",
      "Rank": "4",
      "Thumb": "albums/PS5 (with TOMORROW X TOGETHER & Alan Walker).jpg"
  },
  {
      "ArtistID": 142,
      "ID": 382,
      "More": "",
      "Name": "New Eyes",
      "Rank": "4",
      "Thumb": "albums/New Eyes.jpg"
  },
  {
      "ArtistID": 142,
      "ID": 383,
      "More": "",
      "Name": "What Is Love? (Deluxe Edition)",
      "Rank": "4",
      "Thumb": "albums/What Is Love (Deluxe Edition).jpg"
  },
  {
      "ArtistID": 143,
      "ID": 384,
      "More": "",
      "Name": "Sad Story (Out Of Luck)",
      "Rank": "4",
      "Thumb": "albums/Sad Story (Out Of Luck).jpg"
  },
  {
      "ArtistID": 144,
      "ID": 385,
      "More": "",
      "Name": "Shawn Mendes (Deluxe)",
      "Rank": "4",
      "Thumb": "albums/Shawn Mendes (Deluxe).jpg"
  },
  {
      "ArtistID": 145,
      "ID": 386,
      "More": "",
      "Name": "Shelter",
      "Rank": "4",
      "Thumb": "albums/Shelter.jpg"
  },
  {
      "ArtistID": 15,
      "ID": 387,
      "More": "",
      "Name": "Sing Me to Sleep",
      "Rank": "4",
      "Thumb": "albums/Sing Me to Sleep.jpg"
  },
  {
      "ArtistID": 146,
      "ID": 388,
      "More": "",
      "Name": "STAR WALKIN (League of Legends Worlds Anthem)",
      "Rank": "4",
      "Thumb": "albums/STAR WALKIN (League of Legends Worlds Anthem).jpg"
  },
  {
      "ArtistID": 93,
      "ID": 389,
      "More": "",
      "Name": "Stay Young",
      "Rank": "4",
      "Thumb": "albums/Stay Young.jpg"
  },
  {
      "ArtistID": 15,
      "ID": 390,
      "More": "",
      "Name": "Strongest (Alan Walker Remix)",
      "Rank": "4",
      "Thumb": "albums/Strongest (Alan Walker Remix).jpg"
  },
  {
      "ArtistID": 93,
      "ID": 391,
      "More": "",
      "Name": "The Ocean (feat. Shy Martin)",
      "Rank": "4",
      "Thumb": "albums/The Ocean (feat. Shy Martin).jpg"
  },
  {
      "ArtistID": 147,
      "ID": 392,
      "More": "",
      "Name": "Tuyển Tập Những Ca Khúc Hay Nhất",
      "Rank": "4",
      "Thumb": "albums/Tuyển Tập Những Ca Khúc Hay Nhất.jpg"
  },
  {
      "ArtistID": 15,
      "ID": 393,
      "More": "",
      "Name": "Tired",
      "Rank": "4",
      "Thumb": "albums/Tired.jpg"
  },
  {
      "ArtistID": 148,
      "ID": 394,
      "More": "",
      "Name": "lost",
      "Rank": "4",
      "Thumb": "albums/lost.jpg"
  },
  {
      "ArtistID": 123,
      "ID": 395,
      "More": "",
      "Name": "Tạm Biệt Em",
      "Rank": "4",
      "Thumb": "albums/Tạm Biệt Em.jpg"
  },
  {
      "ArtistID": 114,
      "ID": 396,
      "More": "",
      "Name": "Vai Lan Don Dua",
      "Rank": "4",
      "Thumb": "albums/Vai Lan Don Dua.jpg"
  },
  {
      "ArtistID": 87,
      "ID": 397,
      "More": "",
      "Name": "Waiting",
      "Rank": "4",
      "Thumb": "albums/Waiting.jpg"
  },
  {
      "ArtistID": 87,
      "ID": 398,
      "More": "",
      "Name": "Way Back",
      "Rank": "4",
      "Thumb": "albums/Way Back.jpg"
  },
  {
      "ArtistID": 15,
      "ID": 399,
      "More": "",
      "Name": "World We Used To Know",
      "Rank": "4",
      "Thumb": "albums/World We Used To Know.jpg"
  },
  {
      "ArtistID": 16,
      "ID": 400,
      "More": "",
      "Name": "Worlds Collide",
      "Rank": "4",
      "Thumb": "albums/Worlds Collide.jpg"
  },
  {
      "ArtistID": 149,
      "ID": 401,
      "More": "",
      "Name": "Wrap Me In Plastic (Marcus Layton Radio Edit)",
      "Rank": "4",
      "Thumb": "albums/Wrap Me In Plastic (Marcus Layton Radio Edit).jpg"
  },
  {
      "ArtistID": 150,
      "ID": 402,
      "More": "",
      "Name": "You and I",
      "Rank": "4",
      "Thumb": "albums/You and I.jpg"
  },
  {
      "ArtistID": 118,
      "ID": 403,
      "More": "",
      "Name": "Yêu Em Dại Khờ",
      "Rank": "4",
      "Thumb": "albums/Yêu Em Dại Khờ.jpg"
  },
  {
      "ArtistID": 123,
      "ID": 404,
      "More": "",
      "Name": "Đắng Lòng Thanh Niên",
      "Rank": "4",
      "Thumb": "albums/Đắng Lòng Thanh Niên.jpg"
  },
  {
      "ArtistID": 123,
      "ID": 405,
      "More": "",
      "Name": "Đếm Ngày Xa Em",
      "Rank": "4",
      "Thumb": "albums/Đếm Ngày Xa Em.jpg"
  },
  {
      "ArtistID": 151,
      "ID": 406,
      "More": "",
      "Name": "NieR Replicant ver.1.22 - Original Soundtrack",
      "Rank": "4",
      "Thumb": "albums/NieR Replicant ver.1.22 - Original Soundtrack.jpg"
  },
  {
      "ArtistID": 152,
      "ID": 407,
      "More": "",
      "Name": "NieR Automata - Orchestral Arrangement Album",
      "Rank": "4",
      "Thumb": "albums/NieR Automata - Orchestral Arrangement Album.jpg"
  },
  {
      "ArtistID": 153,
      "ID": 408,
      "More": "",
      "Name": "NieR Gestalt - Owari no Uta Mini Album",
      "Rank": "4",
      "Thumb": "albums/NieR Gestalt - Owari no Uta Mini Album.jpg"
  },
  {
      "ArtistID": 154,
      "ID": 409,
      "More": "",
      "Name": "NieR - Music Concert CD (The Memories of Puppets)",
      "Rank": "4",
      "Thumb": "albums/NieR - Music Concert CD (The Memories of Puppets).jpg"
  },
  {
      "ArtistID": 154,
      "ID": 410,
      "More": "",
      "Name": "NieR Automata - Original Soundtrack",
      "Rank": "4",
      "Thumb": "albums/NieR Automata - Original Soundtrack.jpg"
  },
  {
      "ArtistID": 155,
      "ID": 411,
      "More": "",
      "Name": "NieR Replicant ver.1.22 - Lunar Tear Soundtrack",
      "Rank": "4",
      "Thumb": "albums/NieR Replicant ver.1.22 - Lunar Tear Soundtrack.jpg"
  },
  {
      "ArtistID": 156,
      "ID": 412,
      "More": "",
      "Name": "NieR Replicant ver.1.22 - Weiss Soundtrack",
      "Rank": "4",
      "Thumb": "albums/NieR Replicant ver.1.22 - Weiss Soundtrack.jpg"
  },
  {
      "ArtistID": 157,
      "ID": 413,
      "More": "",
      "Name": "NieR Automata - Arranged & Unreleased",
      "Rank": "4",
      "Thumb": "albums/NieR Automata - Arranged & Unreleased.jpg"
  },
  {
      "ArtistID": 158,
      "ID": 414,
      "More": "",
      "Name": "NieR Gestalt & Replicant - Original Soundtrack",
      "Rank": "4",
      "Thumb": "albums/NieR Gestalt & Replicant - Original Soundtrack.jpg"
  },
  {
      "ArtistID": 159,
      "ID": 415,
      "More": "",
      "Name": "FINAL FANTASY BRAVE EXVIUS Original Soundtrack",
      "Rank": "4",
      "Thumb": "albums/FINAL FANTASY BRAVE EXVIUS Original Soundtrack.jpg"
  },
  {
      "ArtistID": 152,
      "ID": 416,
      "More": "",
      "Name": "NieR - Orchestral Arrangement Album - Addendum",
      "Rank": "4",
      "Thumb": "albums/NieR - Orchestral Arrangement Album - Addendum.jpg"
  },
  {
      "ArtistID": 160,
      "ID": 417,
      "More": "",
      "Name": "NieR Re[in]carnation - Original Soundtrack",
      "Rank": "4",
      "Thumb": "albums/NieR Re[in]carnation - Original Soundtrack.jpg"
  },
  {
      "ArtistID": 153,
      "ID": 418,
      "More": "",
      "Name": "NieR Replicant - Uragiri no Koe Mini Album",
      "Rank": "4",
      "Thumb": "albums/NieR Replicant - Uragiri no Koe Mini Album.jpg"
  },
  {
      "ArtistID": 161,
      "ID": 419,
      "More": "",
      "Name": "Piano Collections NieR:Automata",
      "Rank": "4",
      "Thumb": "albums/Piano Collections NieRAutomata.jpg"
  },
  {
      "ArtistID": 152,
      "ID": 420,
      "More": "",
      "Name": "NieR Gestalt & Replicant - Orchestral Arrangement Album",
      "Rank": "4",
      "Thumb": "albums/NieR Gestalt & Replicant - Orchestral Arrangement Album.jpg"
  },
  {
      "ArtistID": 154,
      "ID": 421,
      "More": "",
      "Name": "NieR - Music Concert & Talk Live Soundtrack",
      "Rank": "4",
      "Thumb": "albums/NieR - Music Concert & Talk Live Soundtrack.jpg"
  },
  {
      "ArtistID": 162,
      "ID": 422,
      "More": "",
      "Name": "Piano Collections NieR Gestalt & Replicant",
      "Rank": "4",
      "Thumb": "albums/Piano Collections NieR Gestalt & Replicant.jpg"
  },
  {
      "ArtistID": 163,
      "ID": 423,
      "More": "",
      "Name": "NieR Gestalt & Replicant - Jazz Arrange Version [EP]",
      "Rank": "4",
      "Thumb": "albums/NieR Gestalt & Replicant - Jazz Arrange Version [EP].jpg"
  },
  {
      "ArtistID": 155,
      "ID": 424,
      "More": "",
      "Name": "NieR Replicant - 10+1 Years - Emil",
      "Rank": "4",
      "Thumb": "albums/NieR Replicant - 10+1 Years - Emil.jpg"
  },
  {
      "ArtistID": 162,
      "ID": 425,
      "More": "",
      "Name": "NieR Replicant - 10+1 Years - Kainé",
      "Rank": "4",
      "Thumb": "albums/NieR Replicant - 10+1 Years - Kainé.jpg"
  },
  {
      "ArtistID": 152,
      "ID": 426,
      "More": "",
      "Name": "NieR - Orchestral Arrangement Album - Addendum Special Disc",
      "Rank": "4",
      "Thumb": "albums/NieR - Orchestral Arrangement Album - Addendum Special Disc.jpg"
  },
  {
      "ArtistID": 166,
      "ID": 427,
      "More": "",
      "Name": "NieR Replicant - 10+1 Years - Devola & Popola",
      "Rank": "4",
      "Thumb": "albums/NieR Replicant - 10+1 Years - Devola & Popola.jpg"
  },
  {
      "ArtistID": 162,
      "ID": 428,
      "More": "",
      "Name": "NieR Replicant - 10+1 Years - Nier",
      "Rank": "4",
      "Thumb": "albums/NieR Replicant - 10+1 Years - Nier.jpg"
  },
  {
      "ArtistID": 169,
      "ID": 429,
      "More": "",
      "Name": "NieR - Orchestral Arrangement Special Disc",
      "Rank": "4",
      "Thumb": "albums/NieR - Orchestral Arrangement Special Disc.jpg"
  },
  {
      "ArtistID": 27,
      "ID": 430,
      "More": "",
      "Name": "NieR - Become As Gods",
      "Rank": "4",
      "Thumb": "albums/NieR - Become As Gods.jpg"
  },
  {
      "ArtistID": 162,
      "ID": 431,
      "More": "",
      "Name": "NieR Gestalt & Replicant - 15 Nightmares & Arrange Tracks",
      "Rank": "4",
      "Thumb": "albums/NieR Gestalt & Replicant - 15 Nightmares & Arrange Tracks.jpg"
  },
  {
      "ArtistID": 183,
      "ID": 432,
      "More": "",
      "Name": "MONSTER HUNTER RISE ORIGINAL SOUNDTRACK",
      "Rank": "4",
      "Thumb": "albums/MONSTER HUNTER RISE ORIGINAL SOUNDTRACK.jpg"
  }
];

var Tags = [
  {
    "ID": 0,
    "Name": "EDM-High",
    "Thumb": "tags/EDM-High.jpg",
    "Url": "https://null-music.github.io/n/u/l/l/lib/"
  },
  {
    "ID": 1,
    "Name": "EDM-Low",
    "Thumb": "tags/EDM-Low.jpg",
    "Url": "https://null-music.github.io/n/u/l/l/lib/"
  },
  {
    "ID": 2,
    "Name": "EDM-Mid",
    "Thumb": "tags/EDM-Mid.jpg",
    "Url": "https://null-music.github.io/n/u/l/l/lib/"
  },
  {
    "ID": 3,
    "Name": "J-Pop-High",
    "Thumb": "tags/J-Pop-High.jpg",
    "Url": "https://null-music.github.io/n/u/l/l/lib/"
  },
  {
    "ID": 4,
    "Name": "J-Pop-Low",
    "Thumb": "tags/J-Pop-Low.jpg",
    "Url": "https://null-music.github.io/n/u/l/l/lib/"
  },
  {
    "ID": 5,
    "Name": "J-Pop-Mid",
    "Thumb": "tags/J-Pop-Mid.jpg",
    "Url": "https://null-music.github.io/n/u/l/l/lib/"
  },
  {
    "ID": 6,
    "Name": "Pop-High",
    "Thumb": "tags/Pop-High.jpg",
    "Url": "https://null-music2.github.io/n/u/l/l/lib/"
  },
  {
    "ID": 7,
    "Name": "Pop-Low",
    "Thumb": "tags/Pop-Low.jpg",
    "Url": "https://null-music2.github.io/n/u/l/l/lib/"
  },
  {
    "ID": 8,
    "Name": "Pop-Mid",
    "Thumb": "tags/Pop-Mid.jpg",
    "Url": "https://null-music2.github.io/n/u/l/l/lib/"
  },
  {
    "ID": 9,
    "Name": "Symphony-High",
    "Thumb": "tags/Symphony-High.jpg",
    "Url": "https://null-music.github.io/n/u/l/l/lib/"
  },
  {
    "ID": 10,
    "Name": "Symphony-Low",
    "Thumb": "tags/Symphony-Low.jpg",
    "Url": "https://null-music2.github.io/n/u/l/l/lib/"
  },
  {
    "ID": 11,
    "Name": "Symphony-Mid",
    "Thumb": "tags/Symphony-Mid.jpg",
    "Url": "https://null-music2.github.io/n/u/l/l/lib/"
  }
];
//#endregion

//#region static DOM and Variable

const content_view = document.getElementById('content-view');
const btn_search = document.getElementById('btn-search');
const input_search = document.getElementById('input-search');
const play_button = document.getElementById('play-button');
const mute_button = document.getElementById('mute-button');
const player_container = document.getElementById('player-container');
const seek_slider = document.getElementById('seek-slider');
const volume_slider = document.getElementById('volume-slider');
const music_player = document.getElementById('music-player');
music_player.volume = 0.9;
const duration = document.getElementById('duration');
const current_time = document.getElementById('current-time');
const ps_info = document.getElementById('playing-info');
const address_title_1 = document.getElementById('address-title-1');
const address_title_2 = document.getElementById('address-title-2');

var playList = [];
var playListGroup = [];
var playState = 'play';
var muteState = 'unmute';
var raf = null;
var TagHTML = "";
var FavArtistHTML = "";
var MixSongHTML="";
var PlayingSong = null;
var seach_list = document.getElementById("seach-list");
var view_home = document.getElementById("view-home");
var view_list = document.getElementById("view-list");
var play_list = document.getElementById("play-list");
var src_audio = document.getElementById("src-audio");
var thumbPath = "assets/thumbs/music/";

//#endregion

//#region Media Player 
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
    play_button.classList.replace("bi-play-circle","bi-pause-circle");
    playState = 'pause';
  } else {
    music_player?.pause();
    play_button.classList.replace("bi-pause-circle","bi-play-circle");
    cancelAnimationFrame(raf);
    playState = 'play';
  }
});

mute_button?.addEventListener('click', () => {
  if (muteState === 'unmute') {
    music_player.muted = true;
    mute_button.classList.replace("bi-volume-up","bi-volume-mute");
    muteState = 'mute';
  } else {
    music_player.muted = false;
    mute_button.classList.replace("bi-volume-mute","bi-volume-up");
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
function changePlayingSong(){  
  ps_info.innerHTML=`
    <div role="button" onclick="clickCard(`+ PlayingSong?.AlbumID + ',\'' + CONST.TYPE.Albums + `')" class="animate__animated  animate__fadeIn bg-image playing-song-thumb" style="background-image: url('` + thumbPath + Albums[PlayingSong?.AlbumID]?.Thumb + `')"></div>
    <div class="text-truncate animate__animated  animate__fadeIn d-flex flex-column justify-content-center align-items-start ps-2 " style="height: 60px;">
        <span class="hide-on-mobile text-truncate">`+PlayingSong?.Title+`</span>
        <a onclick="clickCard(`+ PlayingSong?.ArtistID + ',\'' + CONST.TYPE.Artists + `')" class="hide-on-mobile text-truncate">`+Artists[PlayingSong?.ArtistID]?.Name+`</a>
    </div>`;
}
function playSong(id) {
  ps_info.setAttribute("style", 'display:none;');
  if (id > -1 && id != null && id != NaN)
    PlayingSong = Songs[id];
  else
    PlayingSong = Songs[0];
  let tag = Tags[PlayingSong.TagID];
  music_player.src = tag?.Url + tag?.Name?.toLowerCase() + '/' + PlayingSong?.FileName;
  music_player?.play();  
  play_button.classList.replace("bi-play-circle","bi-pause-circle");
  requestAnimationFrame(whilePlaying);
  changePlayingSong();
  playState = 'pause';
}
function playThisSong(id) {
  ps_info.setAttribute("style", 'display:none;');
  PlayingSong = Songs[id];
  playList=[PlayingSong];
  let tag = Tags[PlayingSong.TagID];
  music_player.src = tag?.Url + tag?.Name?.toLowerCase() + '/' + PlayingSong?.FileName;
  music_player?.play();
  play_button.classList.replace("bi-play-circle","bi-pause-circle");
  requestAnimationFrame(whilePlaying);
  changePlayingSong();
  playState = 'pause';
}

music_player.onended = function () {
  nextSong();
};

function nextSong() {
  let nextSong = null;
  if (playList?.length > 0) {
    let curIndex = playList.findIndex(x => x.ID == PlayingSong.ID);
    nextSong = playList[curIndex + 1] != null ? playList[curIndex + 1] : playList[0];
  }
  else {
    let curIndex = PlayingSong.ID;
    nextSong = Songs[curIndex + 1] != null ? Songs[curIndex + 1] : Songs[0];
  }
  playSong(nextSong.ID);
}

function prevSong() {
  let prevSong = null;
  if (playList?.length > 0) {
    let curIndex = playList.findIndex(x => x.ID == PlayingSong.ID);
    prevSong = playList[curIndex - 1] != null ? playList[curIndex - 1] : playList[0];
  }
  else {
    let curIndex = PlayingSong.ID;
    prevSong = Songs[curIndex - 1] != null ? Songs[curIndex - 1] : Songs[0];
  }
  playSong(prevSong.ID);
}
function loadPlayList() {
  showPlayList();
  playListHTML = "";
  address_title_1.innerHTML=getBasicAddressTitle("Play List");
  for (let index = 0; index < playList?.length; index++) {
    const element = playList[index];
    playListHTML += playListRender(element)
  }
  play_list.innerHTML = wrapRender(playListHTML);

}

function clickCard(cardID, type) {
  showList();
  let songs = [];
  let cardHTML = "";
  let listHTML = "";
  let albumInfo = "";
  let cardInfo = "";
  let tagHeader = "";
  if (type == CONST.TYPE.Tags) {
    songs = Songs.filter(x => x.TagID == cardID);
    let tag = Tags[cardID];
    address_title_1.innerHTML = getAddressTitle(tag.Name, cardID, CONST.TYPE.Tags, '1');
    cardInfo = cardInfoRender(tag, CONST.TYPE.Tags);
  }
  if (type == CONST.TYPE.Albums) {
    songs = Songs.filter(x => x.AlbumID == cardID);
    let album = Albums[cardID];
    let artist = Artists[album.ArtistID];
    address_title_1.innerHTML = getAddressTitle(artist.Name, artist.ID, CONST.TYPE.Artists, '1');
    address_title_2.innerHTML = getAddressTitle(album.Name, cardID, CONST.TYPE.Albums, '2');
    cardInfo = cardInfoRender(album, CONST.TYPE.Albums, artist);
  }
  if (type == CONST.TYPE.Artists) {
    songs = Songs.filter(x => x.ArtistID == cardID);
    let artist = Artists[cardID];
    cardInfo = cardInfoRender(artist, CONST.TYPE.Artists);
    tagHeader = artist.Name + ' - Song';
    address_title_1.innerHTML = getAddressTitle(artist.Name, cardID, CONST.TYPE.Artists, '1');
    let albums = Albums.filter(x => x.ArtistID == cardID);
    albums.forEach(album => {
      cardHTML += cardRender(album, CONST.TYPE.Albums);
    })
    albumInfo += wrapRender(cardHTML, artist.Name + ' - Album');
  }

  for (let index = 0; index < songs?.length; index++) {
    const element = songs[index];
    listHTML += listRender(element)
  }
  view_list.innerHTML = cardInfo + albumInfo + wrapRender(listHTML, tagHeader);

}
function clickGroup(groupID) {
  showList();
  let songs = [];
  let listHTML = "";
  let cardInfo = "";
  
  address_title_1.innerHTML=getBasicAddressTitle("Mix "+playListGroup[groupID].Name);
  cardInfo = cardGroupInfoRender(groupID);
  
  playListGroup[groupID].Songs.forEach(song=>{
    listHTML += listRender(song);
  });
  view_list.innerHTML = cardInfo + wrapRender(listHTML);

}
function addToPlayList(cardID, type, mode = '1') {
  //1:Play,2:Shuffled,3:Add
  let songs = [];
  if (type == CONST.TYPE.Tags) {
    songs = Songs.filter(x => x.TagID == cardID);
  }
  if (type == CONST.TYPE.Albums) {

    songs = Songs.filter(x => x.AlbumID == cardID);
  }
  if (type == CONST.TYPE.Artists) {

    songs = Songs.filter(x => x.ArtistID == cardID);
  }
  if (mode == '2') songs = shuffleList(songs);
  if (mode == '3') {
    playList = playList.concat(songs);
    if (playState == 'play') {
      playSong(playList[0].ID);
    }
  }
  else {
    playList = songs;
    playSong(playList[0].ID);
  }
}
function addGroupToPlayList(groupID, mode = '1') {
  //1:Play,2:Shuffled,3:Add
  let songs = playListGroup[groupID].Songs;
  if (mode == '2') songs = shuffleList(songs);
  if (mode == '3') {
    playList = playList.concat(songs);
    if (playState == 'play') {
      playSong(playList[0].ID);
    }
  }
  else {
    playList = songs;
    playSong(playList[0].ID);
  }
}
//#endregion

//#region Page Loading Function

function renderPage() {
  let cardHTML = "";
  let favArtistHTML = "";
  let favAlbumHTML = "";
  let mixSongHTML = "";

  favArtistHTML= getRandomFavArtist();
  favAlbumHTML= getRandomFavAlbum();

  Tags.forEach(tag => {
    cardHTML += cardRender(tag, CONST.TYPE.Tags)
    let randomSongTag = getRandom(Songs.filter(x=>x.TagID == tag.ID),15);
    let groupItem={ID:tag.ID, Songs:randomSongTag,Name:tag.Name}
    playListGroup.push(groupItem);
    mixSongHTML+= cardGroupRender(tag.ID,groupItem.Name,groupItem.Songs.map(x=>x?.AlbumID).filter((value,index,array)=>array.indexOf(value) === index));
  });

  MixSongHTML += wrapRender(mixSongHTML, "Mix Song By Tag",'animate__fadeIn animate__slow');
  TagHTML += wrapRender(cardHTML, "Tag",'animate__fadeIn animate__slow');
  view_home.innerHTML = MixSongHTML + favArtistHTML+ favAlbumHTML + TagHTML;
}

renderPage();
function getRandomFavArtist(){  
  let favArtistHTML = "";
  favArtist = getRandomFavorite(Artists,12);
  if(favArtist?.length>0){
    favArtist.forEach(artist=>{
      favArtistHTML+=cardRender(artist, CONST.TYPE.Artists)
    });
  }
  return wrapRender(favArtistHTML,"Random Artist",'animate__fadeIn animate__slow');
}

function getRandomFavAlbum(){  
  let favAlbumHTML = "";
  favAlbum = getRandomFavorite(Albums,12);
  if(favAlbum?.length>0){
    favAlbum.forEach(album=>{
      favAlbumHTML+=cardRender(album, CONST.TYPE.Albums)
    });
  }
  return wrapRender(favAlbumHTML,"Random Album",'animate__fadeIn animate__slow');
}
function showListAlbum(artistID) {
  showHome();
  let albums = artistID?.length > 0 ? Albums.filter(x => x.ArtistID == artistID) : Albums;
  let cardAlbumHTML = "";
  albums.forEach(album => {
    cardAlbumHTML += cardRender(album, CONST.TYPE.Albums)
  });
  view_home.innerHTML = wrapRender(cardAlbumHTML);
}

function showListArtist() {
  showHome();
  let cardArtistHTML = "";
  Artists.forEach(artist => {
    cardArtistHTML += cardRender(artist, CONST.TYPE.Artists)
  });
  view_home.innerHTML = wrapRender(cardArtistHTML);
}
input_search.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    search();
  }
});
function search(){
  showSearch();
  let keyword = input_search?.value;
  let artistCard="";
  let artistSearch="";
  let songCard="";
  let songSearch="";
  let albumCard="";
  let albumSearch="";
  if(keyword?.length>0){
    Artists.filter(x=>x.Name.toLowerCase()?.includes(keyword.toLowerCase())).forEach(artist => {
      artistCard += cardRender(artist, CONST.TYPE.Artists);      
    });
    if(artistCard?.length>0) artistSearch = wrapRender(artistCard, "Artist",'animate__fadeIn');

    Songs.filter(x=>x.Title.toLowerCase()?.includes(keyword.toLowerCase())).forEach(song => {
      songCard += listRender(song);      
    });
    if(songCard?.length>0) songSearch = wrapRender(songCard, "Song",'animate__fadeIn');

    Albums.filter(x=>x.Name.toLowerCase()?.includes(keyword.toLowerCase())).forEach(album => {
      albumCard += cardRender(album, CONST.TYPE.Albums);      
    });
    if(albumCard?.length>0) albumSearch = wrapRender(albumCard, "Album",'animate__fadeIn');

    seach_list.innerHTML = artistSearch +songSearch+albumSearch;
    if(seach_list.innerHTML?.length==0) seach_list.innerHTML = "Nothing was found!"
  }
  
}
//#endregion
//--------------------------------------------------------------------------------------------------------------------//
//#region DOM Render
function wrapRender(htmlItem, title ,cssAnimate) {
  let cssClass = cssAnimate?.length>0 ? cssAnimate :'animate__fadeInRight'
  let titleHTML = title?.length > 0 && title != undefined ? `<div class="ribbon my-2">` + title + `</div>` : '';
  // `<div class="d-flex flex-row justify-content-start align-items-center">
  //   <i class=" ps-4 bi bi-bookmark-heart fs-5"></i>
  //   <span class="fs-6 text-truncate ps-3 pb-1">`+ title + `</span>
  // </div>` : '';
  let item = `
    <div class="category-content animate__animated box-shadow `+ cssClass+` d-flex flex-column">     
      `+ titleHTML + `
      <div class="d-flex flex-wrap">`+ htmlItem + `
      </div>
    </div>`;
  return item;
}
function cardRender(model, type) {
    let cardAvataClas = type == CONST.TYPE.Artists? "rounded-circle" : "rounded-3"
  let item = `
  <div class="card-border d-flex flex-column align-items-center my-2" >
    <div role="button" class=" w-75 card-thumb border-2 border-secondary position-relative box-shadow `+cardAvataClas+`" onclick="clickCard(`+ model.ID + ',\'' + type + `')"
        style='background-image: url("`+ thumbPath + model.Thumb + `");'>
        <div class="w-100 d-flex justify-content-center align-items-center">        
        <a class="w-100 position-absolute top-100 text-center text-truncate pt-2 fs-5 ">
            `+ model.Name + `
        </a>
        </div>
        
    </div>
  </div>`;
  return item;
  // <div class= "position-absolute end-0 top-0" >
  //         <button class="bi bi-play-btn" onclick="addToPlayList(`+ model.ID + ',\'' + type + `')"></button>
  //       </div>
}
function cardGroupRender(groupID,title, thumb=[]) {
    let item = `
  <div class="card-border d-flex flex-column align-items-center my-2" >
    <div class=" w-75 card-thumb border-2 border-secondary rounded-3 position-relative box-shadow" onclick="clickGroup(`+ groupID +`)" >
        <div class=" d-flex flex-wrap h-100 w-100 rounded-3  ">
        <img src="`+thumbPath +Albums[thumb[0]].Thumb+`" style="height:50%;width:50%; border-top-left-radius:var(--bs-border-radius) !important" class="bg-image ">        
        <img src="`+thumbPath +Albums[thumb[1]].Thumb+`" style="height:50%;width:50%;border-top-right-radius:var(--bs-border-radius) !important" class="bg-image">
        <img src="`+thumbPath +Albums[thumb[2]].Thumb+`" style="height:50%;width:50%;border-bottom-left-radius:var(--bs-border-radius) !important" class="bg-image">
        <img src="`+thumbPath +Albums[thumb[3]].Thumb+`" style="height:50%;width:50%;border-bottom-right-radius:var(--bs-border-radius) !important" class="bg-image">
      </div>
        <div class="w-100 d-flex justify-content-center align-items-center">        
        <a class="w-100 position-absolute top-100 text-center text-truncate pt-2 fs-5 ">
            `+ title + `
        </a>
        </div>
        
    </div>
  </div>`;
  return item;
}

function listRender(model) {
    let item = `
  <div class="list-border py-2 w-100 d-flex flex-row align-items-center box-shadow">
    <button class="bi bi-play-circle fs-5 px-3 col-2" onclick="playThisSong('`+ model.ID + `')" style="min-width:50px;max-width:70px;"></button>
    <div class="bg-image col-3" onclick="clickCard(`+ model.AlbumID + ',\'' + CONST.TYPE.Albums + `')"
        style='background-image: url("`+ thumbPath + Albums[model.AlbumID].Thumb + `"); width: 50px;'>
    </div>
    <div class="ps-3 col-8 text-truncate d-flex flex-column justify-content-start align-items-start">
        <span class="text-truncate  w-100">`+ model.Title + `</span>
        <a class="text-truncate w-100" onclick="clickCard(`+ model.ArtistID + ',\'' + CONST.TYPE.Artists + `')">` + Artists[model.ArtistID].Name + ` </a>
    </div>
  </div> `;
  return item;
}
function playListRender(model) {
    let item = `
  <div class="list-border py-2 w-100 d-flex flex-row align-items-center box-shadow">
    <button class="bi bi-play-circle fs-5 px-3 col-2" onclick="playSong('`+ model.ID + `')"style="min-width:50px;max-width:70px;"></button>
    <div class="bg-image col-3" onclick="clickCard(`+ model.AlbumID + ',\'' + CONST.TYPE.Albums + `')"
        style='background-image: url("`+ thumbPath + Albums[model.AlbumID].Thumb + `"); width: 50px;'>
    </div>
    <div class="ps-3 col-8 d-flex text-truncate flex-column justify-content-start align-items-start">
        <span class="text-truncate w-100">`+ model.Title + `</span>
        <a class="text-truncate w-100" onclick="clickCard(`+ model.ArtistID + ',\'' + CONST.TYPE.Artists + `')">` + Artists[model.ArtistID].Name + `</a>
    </div>
  </div> `;
  return item;
}
function cardInfoRender(model, type, artist) {
  let artistInfo = artist != null ? `<a class="text-truncate fs-5 w-100">` + artist?.Name + `</a>` : '';
  let item = `
  <div class="px-3 category-content animate__animated animate__fadeInDown  d-flex flex-column">          
    <div class="flex-row d-flex rounded-3 bg-gradient-1 my-3">
      <span class="ps-3"></span>
      <img class=" my-3 rounded-2 col-4 bg-image" src='`+ thumbPath + model.Thumb + `')></img>      
      <span class="ps-3"></span>
      <div class="d-flex flex-column justify-content-around py-3 col-7">
        <div>
            <div class="text-truncate fs-3 w-100">`+ model.Name + `</div>
            `+ artistInfo + `
        </div>
        <div class="d-flex flex-row pb-2">                                                
            <button onclick="addToPlayList(`+ model.ID + `,'` + type + `','1')"
            class="bi bi-play btn btn-outline-success"></button>

            <button onclick="addToPlayList(`+ model.ID + ',\'' + type + `','2')"
            class="ms-3 bi bi-shuffle btn btn-outline-info"></button>

            <button onclick="addToPlayList(`+ model.ID + ',\'' + type + `','3')"
            class="ms-3 bi bi-music-note-list btn btn-outline-primary"></button>
        </div>
      </div>
    </div>
  </div>
  `;
  //&nbsp;Play All&nbsp;
  return item;
}
function cardGroupInfoRender(groupID) {
  let thumb =playListGroup[groupID].Songs.map(x=>x?.AlbumID).filter((value,index,array)=>array.indexOf(value) === index);
  let item = `
  <div class=" px-3 category-content animate__animated animate__fadeInDown d-flex flex-column">          
    <div class="flex-row d-flex rounded-3 bg-gradient-1 my-3">
    
    <span class="ps-3"></span>
      <div class="bg-image my-3 rounded-2 col-4 d-flex flex-wrap" >
        <img src="`+thumbPath +Albums[thumb[0]].Thumb+`" style="height:50%;width:50%; border-top-left-radius:var(--bs-border-radius) !important" class="bg-image ">        
        <img src="`+thumbPath +Albums[thumb[1]].Thumb+`" style="height:50%;width:50%;border-top-right-radius:var(--bs-border-radius) !important" class="bg-image">
        <img src="`+thumbPath +Albums[thumb[2]].Thumb+`" style="height:50%;width:50%;border-bottom-left-radius:var(--bs-border-radius) !important" class="bg-image">
        <img src="`+thumbPath +Albums[thumb[3]].Thumb+`" style="height:50%;width:50%;border-bottom-right-radius:var(--bs-border-radius) !important" class="bg-image">
      </div>      
      <span class="ps-3"></span>
        <div class="d-flex flex-column justify-content-around py-3 col-7">
            <div>
                <div class="text-truncate fs-3 w-100">`+ playListGroup[groupID].Name + `</div>
            </div>
            <div class="d-flex flex-row pb-2">                                                
                <button onclick="addGroupToPlayList(`+ groupID + `,'1')"
                class="bi bi-play btn btn-outline-success"></button>

                <button onclick="addGroupToPlayList(`+groupID+ `,'2')"
                class="ms-3 bi bi-shuffle btn btn-outline-info"></button>

                <button onclick="addGroupToPlayList(`+ groupID + `,'3')"
                class="ms-3 bi bi-music-note-list btn btn-outline-primary"></button>
            </div>
        </div>
    </div>
  </div>
  `;
  //&nbsp;Play All&nbsp;
  return item;
}
function showHome() {
  clearAddress();
  play_list.setAttribute("style", 'display:none;overflow-x: hidden;')
  view_list.setAttribute("style", 'display:none;overflow-x: hidden;');
  view_home.setAttribute("style", 'display:block;overflow-x: hidden;');  
  seach_list.setAttribute("style", 'display:none;overflow-x: hidden;')
}
function showSearch() {
  clearAddress();
  play_list.setAttribute("style", 'display:none;overflow-x: hidden;')
  view_list.setAttribute("style", 'display:none;overflow-x: hidden;');
  view_home.setAttribute("style", 'display:none;overflow-x: hidden;');
  seach_list.setAttribute("style", 'display:block;overflow-x: hidden;')
}

function showList() {
  clearAddress();
  play_list.setAttribute("style", 'display:none;overflow-x: hidden;')
  view_list.setAttribute("style", ' display:block;overflow-x: hidden;');
  view_home.setAttribute("style", 'display:none;overflow-x: hidden;');
  seach_list.setAttribute("style", 'display:none;overflow-x: hidden;')
}
function showPlayList() {
  clearAddress();
  play_list.setAttribute("style", ' display:block;overflow-x: hidden;')
  view_list.setAttribute("style", 'display:none;overflow-x: hidden;');
  view_home.setAttribute("style", 'display:none;overflow-x: hidden;');
  seach_list.setAttribute("style", 'display:none;overflow-x: hidden;')
}

function calcHeight() {
  let body = document.getElementById('body');
  let header = document.getElementById('header');
  let minusHeight = header?.offsetHeight > 0 ? 250 : 175;
  let height = "height:" + (body.offsetHeight - minusHeight) + 'px';
  content_view.setAttribute("style", height);
}
//#endregion
//--------------------------------------------------------------------------------------------------------------------//
//#region Common Func
function goBack() {
  if (address_title_2.innerHTML?.length > 0) {
    document.getElementById('title-1-click').click();
  }
  else {
    showHome();
  }
}
function getAddressTitle(title, id, type, level) {
  let item = `
    <i class="px-2 fs-6 bi bi-chevron-right"></i>
    <a id="title-`+ level + `-click" class="px-2 fs-4" onclick="clickCard(` + id + ',\'' + type + `')">` + title + `</a>
  `;
  return item;
}
function getBasicAddressTitle(title) {
  let item = `
    <i class="px-2 fs-6 bi bi-chevron-right"></i>
    <a id="title-1-click" class="px-2 fs-4" >` + title + `</a>
  `;
  return item;
}

function clearAddress() {
  address_title_1.innerHTML = '';
  address_title_2.innerHTML = '';
  content_view.scrollTop = 0;
}

function shuffleList(list) {
  let shuffledList = list
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
  return shuffledList;
}

function getRandomFavorite(list,count){
  list =list.sort((a, b) => (a?.Rank > b?.Rank ? 1 : 0));
  let topRank = list[0]?.Rank;
  list=list.filter(x=>x?.Rank == topRank);
  list = shuffleList(list);
  if(list?.length<= count) return list;
  else return list.slice(0,count);
}

function getRandom(list,count) {
  let shuffledList = list
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
  if(shuffledList?.length<= count) return list;
  else return shuffledList.slice(0,count);
}

//#endregion


























