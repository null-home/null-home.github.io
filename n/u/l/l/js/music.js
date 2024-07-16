//#region Data

var CONST = {
    HOST: { Home: "https://null-home.github.io/n/u/l/l/", Music: "https://null-music.github.io/n/u/l/l/", Library: "https://null-library.github.io/n/u/l/l/", },
    TYPE: { Tags: 'Tags', Artists: 'Artists', Albums: 'Albums', Groups: 'Groups' }
};
var Songs = [
	{
		"ID": 0,
		"Title": "Flares",
		"FileName": "01 Flares.m4a",
		"ArtistID": 0,
		"AlbumID": 0,
		"TagID": 0,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1,
		"Title": "Awakening",
		"FileName": "Awakening.mp3",
		"ArtistID": 1,
		"AlbumID": 1,
		"TagID": 0,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 2,
		"Title": "Close - Brooks Remix",
		"FileName": "Close - Brooks Remix.mp3",
		"ArtistID": 2,
		"AlbumID": 2,
		"TagID": 0,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 3,
		"Title": "Cloud 9",
		"FileName": "Cloud 9.mp3",
		"ArtistID": 3,
		"AlbumID": 3,
		"TagID": 0,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 4,
		"Title": "Colors",
		"FileName": "Colors.mp3",
		"ArtistID": 3,
		"AlbumID": 4,
		"TagID": 0,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 5,
		"Title": "Energy Drink",
		"FileName": "Energy Drink.mp3",
		"ArtistID": 4,
		"AlbumID": 5,
		"TagID": 0,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 6,
		"Title": "Energy",
		"FileName": "Energy.mp3",
		"ArtistID": 5,
		"AlbumID": 6,
		"TagID": 0,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 7,
		"Title": "Everlasting",
		"FileName": "Everlasting.mp3",
		"ArtistID": 6,
		"AlbumID": 7,
		"TagID": 0,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 8,
		"Title": "Fire",
		"FileName": "Fire.mp3",
		"ArtistID": 5,
		"AlbumID": 8,
		"TagID": 0,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 9,
		"Title": "Frisbee",
		"FileName": "Frisbee.mp3",
		"ArtistID": 7,
		"AlbumID": 9,
		"TagID": 0,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 10,
		"Title": "Frontier",
		"FileName": "Frontier.mp3",
		"ArtistID": 8,
		"AlbumID": 10,
		"TagID": 0,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 11,
		"Title": "Fuck Off",
		"FileName": "Fuck Off.mp3",
		"ArtistID": 9,
		"AlbumID": 11,
		"TagID": 0,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 12,
		"Title": "Higher",
		"FileName": "Higher.mp3",
		"ArtistID": 3,
		"AlbumID": 12,
		"TagID": 0,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 13,
		"Title": "Highscore",
		"FileName": "Highscore.mp3",
		"ArtistID": 9,
		"AlbumID": 11,
		"TagID": 0,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 14,
		"Title": "Hope",
		"FileName": "Hope.mp3",
		"ArtistID": 3,
		"AlbumID": 13,
		"TagID": 0,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 15,
		"Title": "Legends - Hyper Potions Remix",
		"FileName": "Legends - Hyper Potions Remix.mp3",
		"ArtistID": 10,
		"AlbumID": 14,
		"TagID": 0,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 16,
		"Title": "Limitless",
		"FileName": "Limitless.mp3",
		"ArtistID": 5,
		"AlbumID": 15,
		"TagID": 0,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 17,
		"Title": "Rise",
		"FileName": "Rise - Ampyx.mp3",
		"ArtistID": 11,
		"AlbumID": 16,
		"TagID": 0,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 18,
		"Title": "Rubik",
		"FileName": "Rubik.mp3",
		"ArtistID": 12,
		"AlbumID": 17,
		"TagID": 0,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 19,
		"Title": "S.K.Y.Prox",
		"FileName": "S.K.Y.Prox.mp3",
		"ArtistID": 13,
		"AlbumID": 18,
		"TagID": 0,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 20,
		"Title": "Seven",
		"FileName": "Seven.mp3",
		"ArtistID": 3,
		"AlbumID": 19,
		"TagID": 0,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 21,
		"Title": "Sky (feat. Martell) - Radio Edit",
		"FileName": "Sky (feat. Martell) - Radio Edit.mp3",
		"ArtistID": 14,
		"AlbumID": 20,
		"TagID": 0,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 22,
		"Title": "Sky High",
		"FileName": "Sky High.mp3",
		"ArtistID": 5,
		"AlbumID": 21,
		"TagID": 0,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 23,
		"Title": "Spectre",
		"FileName": "Spectre.mp3",
		"ArtistID": 15,
		"AlbumID": 22,
		"TagID": 0,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 24,
		"Title": "Sunburst",
		"FileName": "Sunburst.mp3",
		"ArtistID": 3,
		"AlbumID": 23,
		"TagID": 0,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 25,
		"Title": "Vision",
		"FileName": "Vision.mp3",
		"ArtistID": 5,
		"AlbumID": 24,
		"TagID": 0,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 26,
		"Title": "Welcome to Planet Urf",
		"FileName": "Welcome to Planet Urf.mp3",
		"ArtistID": 16,
		"AlbumID": 25,
		"TagID": 0,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 27,
		"Title": "Freedom",
		"FileName": "Freedom.mp3",
		"ArtistID": 17,
		"AlbumID": 26,
		"TagID": 1,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 28,
		"Title": "Guava Breeze",
		"FileName": "Guava Breeze.mp3",
		"ArtistID": 18,
		"AlbumID": 27,
		"TagID": 1,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 29,
		"Title": "Home",
		"FileName": "Home.mp3",
		"ArtistID": 18,
		"AlbumID": 28,
		"TagID": 1,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 30,
		"Title": "Lonely Dance",
		"FileName": "Lonely Dance.mp3",
		"ArtistID": 18,
		"AlbumID": 29,
		"TagID": 1,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 31,
		"Title": "Muvik",
		"FileName": "Muvik.mp3",
		"ArtistID": 17,
		"AlbumID": 26,
		"TagID": 1,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 32,
		"Title": "Seve - Radio Edit",
		"FileName": "Seve - Radio Edit.mp3",
		"ArtistID": 19,
		"AlbumID": 30,
		"TagID": 1,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 33,
		"Title": "Somero",
		"FileName": "Somero.mp3",
		"ArtistID": 20,
		"AlbumID": 31,
		"TagID": 1,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 34,
		"Title": "Turtle Beach",
		"FileName": "Turtle Beach.mp3",
		"ArtistID": 21,
		"AlbumID": 32,
		"TagID": 1,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 35,
		"Title": "Candyland",
		"FileName": "Candyland.mp3",
		"ArtistID": 3,
		"AlbumID": 33,
		"TagID": 2,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 36,
		"Title": "Close To The Sun",
		"FileName": "Close To The Sun.mp3",
		"ArtistID": 22,
		"AlbumID": 34,
		"TagID": 2,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 37,
		"Title": "Cool",
		"FileName": "Cool.mp3",
		"ArtistID": 3,
		"AlbumID": 35,
		"TagID": 2,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 38,
		"Title": "Elegy",
		"FileName": "Elegy.mp3",
		"ArtistID": 22,
		"AlbumID": 36,
		"TagID": 2,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 39,
		"Title": "Epic",
		"FileName": "Epic.mp3",
		"ArtistID": 22,
		"AlbumID": 36,
		"TagID": 2,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 40,
		"Title": "Fly Away",
		"FileName": "Fly Away.mp3",
		"ArtistID": 22,
		"AlbumID": 37,
		"TagID": 2,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 41,
		"Title": "Happy Robot",
		"FileName": "Happy Robot.mp3",
		"ArtistID": 18,
		"AlbumID": 38,
		"TagID": 2,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 42,
		"Title": "Holo",
		"FileName": "Holo.mp3",
		"ArtistID": 11,
		"AlbumID": 39,
		"TagID": 2,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 43,
		"Title": "Infectious",
		"FileName": "Infectious.mp3",
		"ArtistID": 3,
		"AlbumID": 40,
		"TagID": 2,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 44,
		"Title": "Joy",
		"FileName": "Joy.mp3",
		"ArtistID": 3,
		"AlbumID": 41,
		"TagID": 2,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 45,
		"Title": "Lets Go",
		"FileName": "Lets Go.mp3",
		"ArtistID": 3,
		"AlbumID": 42,
		"TagID": 2,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 46,
		"Title": "Louder Now",
		"FileName": "Louder Now.mp3",
		"ArtistID": 3,
		"AlbumID": 43,
		"TagID": 2,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 47,
		"Title": "Masked Heroes",
		"FileName": "Masked Heroes.mp3",
		"ArtistID": 18,
		"AlbumID": 44,
		"TagID": 2,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 48,
		"Title": "Masked Raver",
		"FileName": "Masked Raver.mp3",
		"ArtistID": 18,
		"AlbumID": 45,
		"TagID": 2,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 49,
		"Title": "Mesmerize",
		"FileName": "Mesmerize.mp3",
		"ArtistID": 3,
		"AlbumID": 46,
		"TagID": 2,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 50,
		"Title": "Monody (feat. Laura Brehm)",
		"FileName": "Monody (feat. Laura Brehm).mp3",
		"ArtistID": 22,
		"AlbumID": 47,
		"TagID": 2,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 51,
		"Title": "Nostalgia",
		"FileName": "Nostalgia.mp3",
		"ArtistID": 3,
		"AlbumID": 48,
		"TagID": 2,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 52,
		"Title": "Long Journey",
		"FileName": "O M II N - Long Journey.mp3",
		"ArtistID": 23,
		"AlbumID": 49,
		"TagID": 2,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 53,
		"Title": "O M II N - Sunset",
		"FileName": "O M II N - Sunset.mp3",
		"ArtistID": 23,
		"AlbumID": 49,
		"TagID": 2,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 54,
		"Title": "Oh Look Aliens!",
		"FileName": "Oh Look Aliens!.mp3",
		"ArtistID": 18,
		"AlbumID": 50,
		"TagID": 2,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 55,
		"Title": "Origin",
		"FileName": "Origin.mp3",
		"ArtistID": 22,
		"AlbumID": 51,
		"TagID": 2,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 56,
		"Title": "Piece Of Me (Vexento Remix)",
		"FileName": "Piece Of Me (Vexento Remix).mp3",
		"ArtistID": 18,
		"AlbumID": 52,
		"TagID": 2,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 57,
		"Title": "Sad Robot",
		"FileName": "Sad Robot.mp3",
		"ArtistID": 18,
		"AlbumID": 53,
		"TagID": 2,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 58,
		"Title": "Summertime",
		"FileName": "Summertime.mp3",
		"ArtistID": 24,
		"AlbumID": 54,
		"TagID": 2,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 59,
		"Title": "Tevo",
		"FileName": "Tevo.mp3",
		"ArtistID": 18,
		"AlbumID": 55,
		"TagID": 2,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 60,
		"Title": "Trap Queen - Eightfold X MKJ Remix",
		"FileName": "Trap Queen - Eightfold X MKJ Remix.mp3",
		"ArtistID": 25,
		"AlbumID": 56,
		"TagID": 2,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 61,
		"Title": "Trippy Love",
		"FileName": "Trippy Love.mp3",
		"ArtistID": 18,
		"AlbumID": 57,
		"TagID": 2,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 62,
		"Title": "Tropic Love",
		"FileName": "Tropic Love.mp3",
		"ArtistID": 26,
		"AlbumID": 58,
		"TagID": 2,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 63,
		"Title": "Unity",
		"FileName": "Unity.mp3",
		"ArtistID": 22,
		"AlbumID": 59,
		"TagID": 2,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 64,
		"Title": "Verve",
		"FileName": "Verve.mp3",
		"ArtistID": 18,
		"AlbumID": 60,
		"TagID": 2,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 65,
		"Title": "Where We Belong",
		"FileName": "Where We Belong.mp3",
		"ArtistID": 18,
		"AlbumID": 61,
		"TagID": 2,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 66,
		"Title": "Kaikai Kitan",
		"FileName": "01 Kaikai Kitan.m4a",
		"ArtistID": 27,
		"AlbumID": 62,
		"TagID": 3,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 67,
		"Title": "デスぺレート",
		"FileName": "01 デスぺレート.m4a",
		"ArtistID": 28,
		"AlbumID": 63,
		"TagID": 3,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 68,
		"Title": "Nonsense Bungaku",
		"FileName": "02 Nonsense Bungaku.m4a",
		"ArtistID": 27,
		"AlbumID": 64,
		"TagID": 3,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 69,
		"Title": "Inochino Tabekata - DanceMix Ver.",
		"FileName": "04 Inochino Tabekata - DanceMix Ver.m4a",
		"ArtistID": 27,
		"AlbumID": 65,
		"TagID": 3,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 70,
		"Title": "Okinimesumama",
		"FileName": "09 Okinimesumama.m4a",
		"ArtistID": 27,
		"AlbumID": 64,
		"TagID": 3,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 71,
		"Title": "Beyond the way",
		"FileName": "Beyond the way.mp3",
		"ArtistID": 28,
		"AlbumID": 66,
		"TagID": 3,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 72,
		"Title": "Casino",
		"FileName": "Casino.mp3",
		"ArtistID": 29,
		"AlbumID": 67,
		"TagID": 3,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 73,
		"Title": "Catcher in the Ui",
		"FileName": "Catcher in the Ui.mp3",
		"ArtistID": 30,
		"AlbumID": 68,
		"TagID": 3,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 74,
		"Title": "Cheating is a crime",
		"FileName": "Cheating is a crime.mp3",
		"ArtistID": 31,
		"AlbumID": 69,
		"TagID": 3,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 75,
		"Title": "Cynical Night Plan",
		"FileName": "Cynical Night Plan.mp3",
		"ArtistID": 32,
		"AlbumID": 70,
		"TagID": 3,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 76,
		"Title": "Demon Lord",
		"FileName": "Demon Lord.mp3",
		"ArtistID": 33,
		"AlbumID": 71,
		"TagID": 3,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 77,
		"Title": "ENVY BABY",
		"FileName": "ENVY BABY.mp3",
		"ArtistID": 33,
		"AlbumID": 72,
		"TagID": 3,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 78,
		"Title": "EYE",
		"FileName": "EYE.mp3",
		"ArtistID": 33,
		"AlbumID": 73,
		"TagID": 3,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 79,
		"Title": "FightSong",
		"FileName": "FightSong.mp3",
		"ArtistID": 27,
		"AlbumID": 74,
		"TagID": 3,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 80,
		"Title": "Gimme×Gimme feat. 初音ミク・鏡音リン",
		"FileName": "Gimme×Gimme feat. 初音ミク-鏡音リン.mp3",
		"ArtistID": 28,
		"AlbumID": 75,
		"TagID": 3,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 81,
		"Title": "Good-bye Declaration",
		"FileName": "Good-bye Declaration.mp3",
		"ArtistID": 34,
		"AlbumID": 76,
		"TagID": 3,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 82,
		"Title": "KING",
		"FileName": "KING.mp3",
		"ArtistID": 33,
		"AlbumID": 77,
		"TagID": 3,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 83,
		"Title": "last resort",
		"FileName": "last resort.mp3",
		"ArtistID": 32,
		"AlbumID": 70,
		"TagID": 3,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 84,
		"Title": "LUVORATORRRRRY!",
		"FileName": "LUVORATORRRRRY.mp3",
		"ArtistID": 35,
		"AlbumID": 78,
		"TagID": 3,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 85,
		"Title": "MIRA",
		"FileName": "MIRA.mp3",
		"ArtistID": 33,
		"AlbumID": 79,
		"TagID": 3,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 86,
		"Title": "Nightmare",
		"FileName": "Nightmare.mp3",
		"ArtistID": 29,
		"AlbumID": 80,
		"TagID": 3,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 87,
		"Title": "osmanthus",
		"FileName": "osmanthus.mp3",
		"ArtistID": 36,
		"AlbumID": 81,
		"TagID": 3,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 88,
		"Title": "QUEEN",
		"FileName": "QUEEN.mp3",
		"ArtistID": 33,
		"AlbumID": 82,
		"TagID": 3,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 89,
		"Title": "Ready Steady (feat. Hatsune Miku, Kagamine Rin, Kagamine Len)",
		"FileName": "Ready Steady (feat. Hatsune Miku, Kagamine Rin, Kagamine Len).mp3",
		"ArtistID": 28,
		"AlbumID": 83,
		"TagID": 3,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 90,
		"Title": "Rendezvous",
		"FileName": "Rendezvous.mp3",
		"ArtistID": 33,
		"AlbumID": 84,
		"TagID": 3,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 91,
		"Title": "Shadow Shadow",
		"FileName": "Shadow Shadow.mp3",
		"ArtistID": 29,
		"AlbumID": 85,
		"TagID": 3,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 92,
		"Title": "Whisper Whisper Whisper",
		"FileName": "Whisper Whisper Whisper.mp3",
		"ArtistID": 29,
		"AlbumID": 86,
		"TagID": 3,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 93,
		"Title": "Witch Hunt",
		"FileName": "Witch Hunt.mp3",
		"ArtistID": 29,
		"AlbumID": 87,
		"TagID": 3,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 94,
		"Title": "Yoidoreshirazu",
		"FileName": "Yoidoreshirazu.mp3",
		"ArtistID": 33,
		"AlbumID": 88,
		"TagID": 3,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 95,
		"Title": "アイデンティティ",
		"FileName": "アイデンティティ.mp3",
		"ArtistID": 33,
		"AlbumID": 89,
		"TagID": 3,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 96,
		"Title": "エンヴィーベイビー x KING",
		"FileName": "エンヴィーベイビー x KING.mp3",
		"ArtistID": 33,
		"AlbumID": 90,
		"TagID": 3,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 97,
		"Title": "シネマ  初音ミク",
		"FileName": "シネマ  初音ミク.mp3",
		"ArtistID": 32,
		"AlbumID": 70,
		"TagID": 3,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 98,
		"Title": "ワンダラー - 初音ミク",
		"FileName": "ワンダラー - 初音ミク.mp3",
		"ArtistID": 32,
		"AlbumID": 70,
		"TagID": 3,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 99,
		"Title": "ずるいよ…",
		"FileName": "01 ずるいよ….m4a",
		"ArtistID": 37,
		"AlbumID": 91,
		"TagID": 4,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 100,
		"Title": "香水 feat.相沢",
		"FileName": "03  香水 feat.相沢.mp3",
		"ArtistID": 38,
		"AlbumID": 92,
		"TagID": 4,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 101,
		"Title": "Lulalulalu",
		"FileName": "05.ルラルラルー-Kobasolo.mp3",
		"ArtistID": 38,
		"AlbumID": 93,
		"TagID": 4,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 102,
		"Title": "風になる feat.Lefty Hand Cream",
		"FileName": "07  風になる feat.Lefty Hand Cream.mp3",
		"ArtistID": 38,
		"AlbumID": 92,
		"TagID": 4,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 103,
		"Title": "奏(かなで) feat. 安果音",
		"FileName": "08. 奏(かなで) feat. 安果音.mp3",
		"ArtistID": 38,
		"AlbumID": 94,
		"TagID": 4,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 104,
		"Title": "Back-to-back",
		"FileName": "10.背中合わせ-Kobasolo.mp3",
		"ArtistID": 38,
		"AlbumID": 93,
		"TagID": 4,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 105,
		"Title": "30",
		"FileName": "30.mp3",
		"ArtistID": 39,
		"AlbumID": 95,
		"TagID": 4,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 106,
		"Title": "40",
		"FileName": "40.mp3",
		"ArtistID": 39,
		"AlbumID": 96,
		"TagID": 4,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 107,
		"Title": "Akie - Letter Song",
		"FileName": "Akie - Letter Song.mp3",
		"ArtistID": 40,
		"AlbumID": 97,
		"TagID": 4,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 108,
		"Title": "Akie - 天之弱",
		"FileName": "Akie - 天之弱.mp3",
		"ArtistID": 40,
		"AlbumID": 97,
		"TagID": 4,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 109,
		"Title": "Akie - 約束",
		"FileName": "Akie - 約束.mp3",
		"ArtistID": 40,
		"AlbumID": 97,
		"TagID": 4,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 110,
		"Title": "Alone",
		"FileName": "Alone.mp3",
		"ArtistID": 39,
		"AlbumID": 98,
		"TagID": 4,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 111,
		"Title": "Always in my heart",
		"FileName": "Always in my heart.mp3",
		"ArtistID": 41,
		"AlbumID": 99,
		"TagID": 4,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 112,
		"Title": "Ame",
		"FileName": "Ame.mp3",
		"ArtistID": 39,
		"AlbumID": 100,
		"TagID": 4,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 113,
		"Title": "Ano Natsuno Hanabi",
		"FileName": "Ano Natsuno Hanabi.mp3",
		"ArtistID": 39,
		"AlbumID": 101,
		"TagID": 4,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 114,
		"Title": "Anohino Melody",
		"FileName": "Anohino Melody.mp3",
		"ArtistID": 39,
		"AlbumID": 102,
		"TagID": 4,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 115,
		"Title": "Arigato",
		"FileName": "Arigato.mp3",
		"ArtistID": 42,
		"AlbumID": 103,
		"TagID": 4,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 116,
		"Title": "be with you",
		"FileName": "be with you.mp3",
		"ArtistID": 43,
		"AlbumID": 104,
		"TagID": 4,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 117,
		"Title": "Be... - Stardust Version",
		"FileName": "Be... - Stardust Version.mp3",
		"ArtistID": 39,
		"AlbumID": 105,
		"TagID": 4,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 118,
		"Title": "Be... - Teardrop Version",
		"FileName": "Be... - Teardrop Version.mp3",
		"ArtistID": 39,
		"AlbumID": 98,
		"TagID": 4,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 119,
		"Title": "Be...",
		"FileName": "Be....mp3",
		"ArtistID": 39,
		"AlbumID": 106,
		"TagID": 4,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 120,
		"Title": "Call you",
		"FileName": "Call you.mp3",
		"ArtistID": 41,
		"AlbumID": 99,
		"TagID": 4,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 121,
		"Title": "Christmas Song",
		"FileName": "Christmas Song.mp3",
		"ArtistID": 39,
		"AlbumID": 107,
		"TagID": 4,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 122,
		"Title": "Dareyori Sukinanoni",
		"FileName": "Dareyori Sukinanoni.mp3",
		"ArtistID": 39,
		"AlbumID": 108,
		"TagID": 4,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 123,
		"Title": "DEAR...again",
		"FileName": "DEAR...again.mp3",
		"ArtistID": 39,
		"AlbumID": 98,
		"TagID": 4,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 124,
		"Title": "Dear",
		"FileName": "Dear.mp3",
		"ArtistID": 39,
		"AlbumID": 109,
		"TagID": 4,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 125,
		"Title": "Duca - Ai no Niwa",
		"FileName": "Duca - Ai no Niwa.mp3",
		"ArtistID": 44,
		"AlbumID": 110,
		"TagID": 4,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 126,
		"Title": "Earphones",
		"FileName": "Earphones.mp3",
		"ArtistID": 39,
		"AlbumID": 102,
		"TagID": 4,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 127,
		"Title": "Eki",
		"FileName": "Eki.mp3",
		"ArtistID": 39,
		"AlbumID": 111,
		"TagID": 4,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 128,
		"Title": "Ever be my love",
		"FileName": "Ever be my love.mp3",
		"ArtistID": 41,
		"AlbumID": 99,
		"TagID": 4,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 129,
		"Title": "Fall in love",
		"FileName": "Fall in love.mp3",
		"ArtistID": 39,
		"AlbumID": 112,
		"TagID": 4,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 130,
		"Title": "First Love",
		"FileName": "First Love.mp3",
		"ArtistID": 39,
		"AlbumID": 105,
		"TagID": 4,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 131,
		"Title": "Gekkou",
		"FileName": "Gekkou.mp3",
		"ArtistID": 39,
		"AlbumID": 105,
		"TagID": 4,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 132,
		"Title": "Gomenne",
		"FileName": "Gomenne.mp3",
		"ArtistID": 39,
		"AlbumID": 111,
		"TagID": 4,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 133,
		"Title": "Hello, Again",
		"FileName": "Hello, Again.mp3",
		"ArtistID": 39,
		"AlbumID": 98,
		"TagID": 4,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 134,
		"Title": "HIKARI",
		"FileName": "HIKARI.mp3",
		"ArtistID": 39,
		"AlbumID": 107,
		"TagID": 4,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 135,
		"Title": "Hoshifuru Yoruni",
		"FileName": "Hoshifuru Yoruni.mp3",
		"ArtistID": 39,
		"AlbumID": 107,
		"TagID": 4,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 136,
		"Title": "Hoshiwo Koete",
		"FileName": "Hoshiwo Koete.mp3",
		"ArtistID": 39,
		"AlbumID": 102,
		"TagID": 4,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 137,
		"Title": "I LOVE YOU",
		"FileName": "I LOVE YOU.mp3",
		"ArtistID": 39,
		"AlbumID": 113,
		"TagID": 4,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 138,
		"Title": "I WILL",
		"FileName": "I WILL.mp3",
		"ArtistID": 39,
		"AlbumID": 95,
		"TagID": 4,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 139,
		"Title": "Itoshii Hitoyo",
		"FileName": "Itoshii Hitoyo.mp3",
		"ArtistID": 39,
		"AlbumID": 102,
		"TagID": 4,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 140,
		"Title": "Kanashii Kiss",
		"FileName": "Kanashii Kiss.mp3",
		"ArtistID": 39,
		"AlbumID": 101,
		"TagID": 4,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 141,
		"Title": "Kanashimini Sayonara",
		"FileName": "Kanashimini Sayonara.mp3",
		"ArtistID": 39,
		"AlbumID": 114,
		"TagID": 4,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 142,
		"Title": "Kanega Naru - Acoustic ver",
		"FileName": "Kanega Naru - Acoustic ver.mp3",
		"ArtistID": 39,
		"AlbumID": 115,
		"TagID": 4,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 143,
		"Title": "Kanega Naru",
		"FileName": "Kanega Naru.mp3",
		"ArtistID": 39,
		"AlbumID": 107,
		"TagID": 4,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 144,
		"Title": "Kimi Ni Saigo No Kuchizuke Wo",
		"FileName": "Kimi Ni Saigo No Kuchizuke Wo.mp3",
		"ArtistID": 45,
		"AlbumID": 116,
		"TagID": 4,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 145,
		"Title": "Koi",
		"FileName": "Koi.mp3",
		"ArtistID": 39,
		"AlbumID": 117,
		"TagID": 4,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 146,
		"Title": "Letter",
		"FileName": "Letter.mp3",
		"ArtistID": 39,
		"AlbumID": 118,
		"TagID": 4,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 147,
		"Title": "Love Love Love",
		"FileName": "Love Love Love.mp3",
		"ArtistID": 39,
		"AlbumID": 101,
		"TagID": 4,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 148,
		"Title": "Lovin you",
		"FileName": "Lovin you.mp3",
		"ArtistID": 39,
		"AlbumID": 119,
		"TagID": 4,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 149,
		"Title": "M",
		"FileName": "M.mp3",
		"ArtistID": 39,
		"AlbumID": 98,
		"TagID": 4,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 150,
		"Title": "Mata Koi wo Suru Koto Nado",
		"FileName": "Mata Koi wo Suru Koto Nado.mp3",
		"ArtistID": 39,
		"AlbumID": 120,
		"TagID": 4,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 151,
		"Title": "Mirai Yosouzu II",
		"FileName": "Mirai Yosouzu II.mp3",
		"ArtistID": 39,
		"AlbumID": 101,
		"TagID": 4,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 152,
		"Title": "Mirai Yosouzu",
		"FileName": "Mirai Yosouzu.mp3",
		"ArtistID": 39,
		"AlbumID": 101,
		"TagID": 4,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 153,
		"Title": "Missing",
		"FileName": "Missing.mp3",
		"ArtistID": 39,
		"AlbumID": 105,
		"TagID": 4,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 154,
		"Title": "Mokurenno Namida",
		"FileName": "Mokurenno Namida.mp3",
		"ArtistID": 39,
		"AlbumID": 117,
		"TagID": 4,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 155,
		"Title": "Mouhitotsuno Doyoubi",
		"FileName": "Mouhitotsuno Doyoubi.mp3",
		"ArtistID": 39,
		"AlbumID": 117,
		"TagID": 4,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 156,
		"Title": "my graduation",
		"FileName": "My graduation.mp3",
		"ArtistID": 39,
		"AlbumID": 114,
		"TagID": 4,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 157,
		"Title": "Nanpasen",
		"FileName": "Nanpasen.mp3",
		"ArtistID": 39,
		"AlbumID": 111,
		"TagID": 4,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 158,
		"Title": "Natsuo Akiramete",
		"FileName": "Natsuo Akiramete.mp3",
		"ArtistID": 39,
		"AlbumID": 111,
		"TagID": 4,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 159,
		"Title": "PIECE OF MY WISH",
		"FileName": "PIECE OF MY WISH.mp3",
		"ArtistID": 39,
		"AlbumID": 114,
		"TagID": 4,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 160,
		"Title": "Plastic Love",
		"FileName": "Plastic Love.mp3",
		"ArtistID": 39,
		"AlbumID": 112,
		"TagID": 4,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 161,
		"Title": "Rainy Blue",
		"FileName": "Rainy Blue.mp3",
		"ArtistID": 39,
		"AlbumID": 105,
		"TagID": 4,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 162,
		"Title": "remember",
		"FileName": "Remember.mp3",
		"ArtistID": 46,
		"AlbumID": 121,
		"TagID": 4,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 163,
		"Title": "Riyu Renji - Boku Ga Shinou To Omotta No Wa",
		"FileName": "Riyu Renji - Boku Ga Shinou To Omotta No Wa.mp3",
		"ArtistID": 47,
		"AlbumID": 110,
		"TagID": 4,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 164,
		"Title": "Yasashii Uta",
		"FileName": "RSP - Yasashii Uta.mp3",
		"ArtistID": 48,
		"AlbumID": 122,
		"TagID": 4,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 165,
		"Title": "Ruriirono Chikyuu",
		"FileName": "Ruriirono Chikyuu.mp3",
		"ArtistID": 39,
		"AlbumID": 112,
		"TagID": 4,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 166,
		"Title": "Sayonarano Mukougawa",
		"FileName": "Sayonarano Mukougawa.mp3",
		"ArtistID": 39,
		"AlbumID": 111,
		"TagID": 4,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 167,
		"Title": "Scarborough Fair",
		"FileName": "Scarborough Fair.mp3",
		"ArtistID": 41,
		"AlbumID": 99,
		"TagID": 4,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 168,
		"Title": "Seishun No Kage",
		"FileName": "Seishun No Kage.mp3",
		"ArtistID": 39,
		"AlbumID": 117,
		"TagID": 4,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 169,
		"Title": "Sing",
		"FileName": "Sing.mp3",
		"ArtistID": 49,
		"AlbumID": 123,
		"TagID": 4,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 170,
		"Title": "Soramo Toberuhazu",
		"FileName": "Soramo Toberuhazu.mp3",
		"ArtistID": 39,
		"AlbumID": 114,
		"TagID": 4,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 171,
		"Title": "Souha",
		"FileName": "Souha.mp3",
		"ArtistID": 39,
		"AlbumID": 102,
		"TagID": 4,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 172,
		"Title": "Squall",
		"FileName": "Squall.mp3",
		"ArtistID": 39,
		"AlbumID": 106,
		"TagID": 4,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 173,
		"Title": "Story",
		"FileName": "Story.mp3",
		"ArtistID": 39,
		"AlbumID": 105,
		"TagID": 4,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 174,
		"Title": "summertime",
		"FileName": "Summertime.mp3",
		"ArtistID": 50,
		"AlbumID": 124,
		"TagID": 4,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 175,
		"Title": "Sweet Home",
		"FileName": "Sweet Home.mp3",
		"ArtistID": 39,
		"AlbumID": 107,
		"TagID": 4,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 176,
		"Title": "tears",
		"FileName": "Tears.mp3",
		"ArtistID": 39,
		"AlbumID": 105,
		"TagID": 4,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 177,
		"Title": "TEE - Baby I Love You",
		"FileName": "TEE - Baby I Love You.mp3",
		"ArtistID": 51,
		"AlbumID": 110,
		"TagID": 4,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 178,
		"Title": "The signs of LOVE",
		"FileName": "The signs of LOVE.mp3",
		"ArtistID": 39,
		"AlbumID": 101,
		"TagID": 4,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 179,
		"Title": "Time goes by",
		"FileName": "Time goes by.mp3",
		"ArtistID": 39,
		"AlbumID": 98,
		"TagID": 4,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 180,
		"Title": "Tokino Nagareni Miwo Makase",
		"FileName": "Tokino Nagareni Miwo Makase.mp3",
		"ArtistID": 39,
		"AlbumID": 112,
		"TagID": 4,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 181,
		"Title": "Tsugunai",
		"FileName": "Tsugunai.mp3",
		"ArtistID": 39,
		"AlbumID": 111,
		"TagID": 4,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 182,
		"Title": "Woman",
		"FileName": "Woman.mp3",
		"ArtistID": 39,
		"AlbumID": 111,
		"TagID": 4,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 183,
		"Title": "Yukino Hana",
		"FileName": "Yukino Hana.mp3",
		"ArtistID": 39,
		"AlbumID": 105,
		"TagID": 4,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 184,
		"Title": "ありがとう、だいすき",
		"FileName": "ありがとう、だいすき.mp3",
		"ArtistID": 49,
		"AlbumID": 125,
		"TagID": 4,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 185,
		"Title": "いとしのエリー",
		"FileName": "いとしのエリー.mp3",
		"ArtistID": 42,
		"AlbumID": 126,
		"TagID": 4,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 186,
		"Title": "きみのうた",
		"FileName": "きみのうた.mp3",
		"ArtistID": 52,
		"AlbumID": 127,
		"TagID": 4,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 187,
		"Title": "ずるいよ…",
		"FileName": "ずるいよ….mp3",
		"ArtistID": 37,
		"AlbumID": 128,
		"TagID": 4,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 188,
		"Title": "みちしるべ",
		"FileName": "みちしるべ.mp3",
		"ArtistID": 49,
		"AlbumID": 125,
		"TagID": 4,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 189,
		"Title": "もう二度と・・・",
		"FileName": "もう二度と・・・.mp3",
		"ArtistID": 42,
		"AlbumID": 126,
		"TagID": 4,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 190,
		"Title": "オレンジ",
		"FileName": "オレンジ.mp3",
		"ArtistID": 53,
		"AlbumID": 129,
		"TagID": 4,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 191,
		"Title": "キラメキ",
		"FileName": "キラメキ.mp3",
		"ArtistID": 54,
		"AlbumID": 130,
		"TagID": 4,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 192,
		"Title": "タイニーリトル・アジアンタム",
		"FileName": "タイニーリトル・アジアンタム.mp3",
		"ArtistID": 55,
		"AlbumID": 131,
		"TagID": 4,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 193,
		"Title": "君だったら",
		"FileName": "君だったら.mp3",
		"ArtistID": 56,
		"AlbumID": 132,
		"TagID": 4,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 194,
		"Title": "君に出逢えて",
		"FileName": "君に出逢えて.mp3",
		"ArtistID": 57,
		"AlbumID": 133,
		"TagID": 4,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 195,
		"Title": "声を聞かせて",
		"FileName": "声を聞かせて.mp3",
		"ArtistID": 42,
		"AlbumID": 126,
		"TagID": 4,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 196,
		"Title": "夜撫でるメノウ",
		"FileName": "夜撫でるメノウ.mp3",
		"ArtistID": 32,
		"AlbumID": 134,
		"TagID": 4,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 197,
		"Title": "恋愛サーキュレーション",
		"FileName": "恋愛サーキュレーション.mp3",
		"ArtistID": 58,
		"AlbumID": 135,
		"TagID": 4,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 198,
		"Title": "明日がくるなら ballad solo version",
		"FileName": "明日がくるなら ballad solo version.mp3",
		"ArtistID": 59,
		"AlbumID": 136,
		"TagID": 4,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 199,
		"Title": "桜坂",
		"FileName": "桜坂.mp3",
		"ArtistID": 42,
		"AlbumID": 126,
		"TagID": 4,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 200,
		"Title": "永遠",
		"FileName": "永遠.mp3",
		"ArtistID": 42,
		"AlbumID": 126,
		"TagID": 4,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 201,
		"Title": "百満開花",
		"FileName": "百満開花.mp3",
		"ArtistID": 57,
		"AlbumID": 137,
		"TagID": 4,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 202,
		"Title": "瞳をとじて",
		"FileName": "瞳をとじて.mp3",
		"ArtistID": 42,
		"AlbumID": 126,
		"TagID": 4,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 203,
		"Title": "115万キロのフィルム",
		"FileName": "01 115万キロのフィルム.m4a",
		"ArtistID": 60,
		"AlbumID": 138,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 204,
		"Title": "LOST IN PARADISE",
		"FileName": "01 LOST IN PARADISE.m4a",
		"ArtistID": 61,
		"AlbumID": 139,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 205,
		"Title": "ダンスホール",
		"FileName": "01 ダンスホール.m4a",
		"ArtistID": 62,
		"AlbumID": 140,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 206,
		"Title": "低血ボルト",
		"FileName": "01 低血ボルト.m4a",
		"ArtistID": 63,
		"AlbumID": 141,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 207,
		"Title": "又三郎",
		"FileName": "01 又三郎.m4a",
		"ArtistID": 64,
		"AlbumID": 142,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 208,
		"Title": "夜行",
		"FileName": "01 夜行.m4a",
		"ArtistID": 64,
		"AlbumID": 143,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 209,
		"Title": "思想犯",
		"FileName": "01 思想犯.m4a",
		"ArtistID": 64,
		"AlbumID": 144,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 210,
		"Title": "春泥棒",
		"FileName": "01 春泥棒.m4a",
		"ArtistID": 64,
		"AlbumID": 145,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 211,
		"Title": "盗作",
		"FileName": "01 盗作.m4a",
		"ArtistID": 64,
		"AlbumID": 146,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 212,
		"Title": "秒針を噛む",
		"FileName": "01 秒針を噛む.m4a",
		"ArtistID": 63,
		"AlbumID": 147,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 213,
		"Title": "花一匁",
		"FileName": "01 花一匁.m4a",
		"ArtistID": 63,
		"AlbumID": 148,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 214,
		"Title": "藍二乗",
		"FileName": "01 藍二乗.m4a",
		"ArtistID": 64,
		"AlbumID": 149,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 215,
		"Title": "雨とカプチーノ",
		"FileName": "01 雨とカプチーノ.m4a",
		"ArtistID": 64,
		"AlbumID": 150,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 216,
		"Title": "風を食む",
		"FileName": "01 風を食む.m4a",
		"ArtistID": 64,
		"AlbumID": 151,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 217,
		"Title": "Koi Seyo Otome",
		"FileName": "01.恋せよオトメ-Kobasolo.mp3",
		"ArtistID": 38,
		"AlbumID": 93,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 218,
		"Title": "Ao No Waltz",
		"FileName": "02 Ao No Waltz.m4a",
		"ArtistID": 27,
		"AlbumID": 62,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 219,
		"Title": "ヒューマノイド",
		"FileName": "02 ヒューマノイド.m4a",
		"ArtistID": 63,
		"AlbumID": 147,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 220,
		"Title": "ブレーメン",
		"FileName": "02 ブレーメン.m4a",
		"ArtistID": 64,
		"AlbumID": 152,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 221,
		"Title": "正しくなれない",
		"FileName": "02 正しくなれない.m4a",
		"ArtistID": 63,
		"AlbumID": 153,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 222,
		"Title": "残機",
		"FileName": "02 残機.m4a",
		"ArtistID": 63,
		"AlbumID": 148,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 223,
		"Title": "明日はきっといい日になる feat. えみい",
		"FileName": "02. 明日はきっといい日になる feat. えみい.mp3",
		"ArtistID": 38,
		"AlbumID": 94,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 224,
		"Title": "小さな恋のうた feat.七穂",
		"FileName": "02.小さな恋のうた feat.七穂.mp3",
		"ArtistID": 38,
		"AlbumID": 154,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 225,
		"Title": "Dramaturgy",
		"FileName": "03 Dramaturgy.m4a",
		"ArtistID": 27,
		"AlbumID": 64,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 226,
		"Title": "Raison Detre",
		"FileName": "03 Raison Detre.m4a",
		"ArtistID": 27,
		"AlbumID": 155,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 227,
		"Title": "Shinkai",
		"FileName": "03 Shinkai.m4a",
		"ArtistID": 27,
		"AlbumID": 62,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 228,
		"Title": "お勉強しといてよ",
		"FileName": "03 お勉強しといてよ.m4a",
		"ArtistID": 63,
		"AlbumID": 153,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 229,
		"Title": "言って。",
		"FileName": "03 言って。.m4a",
		"ArtistID": 64,
		"AlbumID": 156,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 230,
		"Title": "あの夏に咲け",
		"FileName": "04 あの夏に咲け.m4a",
		"ArtistID": 64,
		"AlbumID": 156,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 231,
		"Title": "ヒッチコック",
		"FileName": "04 ヒッチコック.m4a",
		"ArtistID": 64,
		"AlbumID": 157,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 232,
		"Title": "勘ぐれい",
		"FileName": "04 勘ぐれい.m4a",
		"ArtistID": 63,
		"AlbumID": 153,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 233,
		"Title": "夏恋慕 (feat. 春茶)",
		"FileName": "04. Summer Love.mp3",
		"ArtistID": 38,
		"AlbumID": 158,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 234,
		"Title": "Goodbye with a smile",
		"FileName": "04.さよならスマイル-Kobasolo.mp3",
		"ArtistID": 38,
		"AlbumID": 93,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 235,
		"Title": "Anoko secret",
		"FileName": "05 Anoko secret.m4a",
		"ArtistID": 27,
		"AlbumID": 64,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 236,
		"Title": "Heikousen",
		"FileName": "06 Heikousen.m4a",
		"ArtistID": 27,
		"AlbumID": 159,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 237,
		"Title": "あいつら全員同窓会",
		"FileName": "06 あいつら全員同窓会.m4a",
		"ArtistID": 63,
		"AlbumID": 148,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 238,
		"Title": "又三郎",
		"FileName": "06 又三郎.m4a",
		"ArtistID": 64,
		"AlbumID": 152,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 239,
		"Title": "ラブレター (feat. 春茶)",
		"FileName": "06. ラブレター (feat. 春茶).mp3",
		"ArtistID": 38,
		"AlbumID": 158,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 240,
		"Title": "あとひとつ feat.こぴ",
		"FileName": "06.あとひとつ feat.こぴ.mp3",
		"ArtistID": 38,
		"AlbumID": 160,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 241,
		"Title": "I wish theres no you to be around",
		"FileName": "06.君さえいなけりゃ-Kobasolo.mp3",
		"ArtistID": 38,
		"AlbumID": 93,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 242,
		"Title": "花人局",
		"FileName": "07 花人局.m4a",
		"ArtistID": 64,
		"AlbumID": 146,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 243,
		"Title": "雲と幽霊",
		"FileName": "07 雲と幽霊.m4a",
		"ArtistID": 64,
		"AlbumID": 156,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 244,
		"Title": "I love you so much but I cant tell you",
		"FileName": "07.あなたのことが好きだなんて言えないんです。-Kobasolo.mp3",
		"ArtistID": 38,
		"AlbumID": 93,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 245,
		"Title": "Kokoroyohou",
		"FileName": "08 Kokoroyohou.m4a",
		"ArtistID": 27,
		"AlbumID": 155,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 246,
		"Title": "MILABO",
		"FileName": "08 MILABO.m4a",
		"ArtistID": 63,
		"AlbumID": 153,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 247,
		"Title": "五月は花緑青の窓辺から",
		"FileName": "08 五月は花緑青の窓辺から.m4a",
		"ArtistID": 64,
		"AlbumID": 161,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 248,
		"Title": "青と夏",
		"FileName": "08 青と夏.m4a",
		"ArtistID": 62,
		"AlbumID": 162,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 249,
		"Title": "夜紛い",
		"FileName": "09 夜紛い.m4a",
		"ArtistID": 64,
		"AlbumID": 161,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 250,
		"Title": "HANABI feat.春茶",
		"FileName": "09.HANABI feat.春茶.mp3",
		"ArtistID": 38,
		"AlbumID": 154,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 251,
		"Title": "スパークル(movie ver.) feat. 春茶",
		"FileName": "10. スパークル(movie ver.) feat. 春茶.mp3",
		"ArtistID": 38,
		"AlbumID": 94,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 252,
		"Title": "10時の方角",
		"FileName": "10時の方角.mp3",
		"ArtistID": 65,
		"AlbumID": 163,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 253,
		"Title": "パレード",
		"FileName": "11 パレード.m4a",
		"ArtistID": 64,
		"AlbumID": 161,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 254,
		"Title": "115万キロのフィルム",
		"FileName": "115万キロのフィルム.mp3",
		"ArtistID": 60,
		"AlbumID": 138,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 255,
		"Title": "ミラーチューン",
		"FileName": "12 ミラーチューン.m4a",
		"ArtistID": 63,
		"AlbumID": 148,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 256,
		"Title": "ロマンチシズム",
		"FileName": "12 ロマンチシズム.m4a",
		"ArtistID": 62,
		"AlbumID": 162,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 257,
		"Title": "夜行",
		"FileName": "13 夜行.m4a",
		"ArtistID": 64,
		"AlbumID": 146,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 258,
		"Title": "だから僕は音楽を辞めた",
		"FileName": "14 だから僕は音楽を辞めた.m4a",
		"ArtistID": 64,
		"AlbumID": 161,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 259,
		"Title": "2FACE",
		"FileName": "2FACE.mp3",
		"ArtistID": 42,
		"AlbumID": 126,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 260,
		"Title": "7月の翼",
		"FileName": "7月の翼.mp3",
		"ArtistID": 66,
		"AlbumID": 164,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 261,
		"Title": "After Rain -Scarlet ver.-",
		"FileName": "After Rain -Scarlet ver.-.mp3",
		"ArtistID": 66,
		"AlbumID": 165,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 262,
		"Title": "Aitai",
		"FileName": "Aitai.mp3",
		"ArtistID": 39,
		"AlbumID": 105,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 263,
		"Title": "Anataga Kimeta Kyounara",
		"FileName": "Anataga Kimeta Kyounara.mp3",
		"ArtistID": 39,
		"AlbumID": 166,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 264,
		"Title": "Anatani Aenaku Naruhimade",
		"FileName": "Anatani Aenaku Naruhimade.mp3",
		"ArtistID": 39,
		"AlbumID": 119,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 265,
		"Title": "Apoptosis",
		"FileName": "Apoptosis.mp3",
		"ArtistID": 60,
		"AlbumID": 167,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 266,
		"Title": "Asahino Youna Kiss O Shite",
		"FileName": "Asahino Youna Kiss O Shite.mp3",
		"ArtistID": 39,
		"AlbumID": 168,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 267,
		"Title": "Ato Hitotsu feat. kopi",
		"FileName": "Ato Hitotsu feat. kopi.mp3",
		"ArtistID": 38,
		"AlbumID": 169,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 268,
		"Title": "baby dont know why",
		"FileName": "Baby dont know why.mp3",
		"ArtistID": 39,
		"AlbumID": 109,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 269,
		"Title": "be alive",
		"FileName": "Be alive.mp3",
		"ArtistID": 39,
		"AlbumID": 105,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 270,
		"Title": "Be... - World Sketch Star Piano Remix",
		"FileName": "Be... - World Sketch Star Piano Remix.mp3",
		"ArtistID": 39,
		"AlbumID": 170,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 271,
		"Title": "Beautiful",
		"FileName": "Beautiful.mp3",
		"ArtistID": 42,
		"AlbumID": 171,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 272,
		"Title": "Blind to you (Remaster for 星の消えた夜に 2022)",
		"FileName": "Blind to you (Remaster for 星の消えた夜に 2022).mp3",
		"ArtistID": 66,
		"AlbumID": 172,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 273,
		"Title": "Bokuramadaunderground",
		"FileName": "Bokuramadaunderground.mp3",
		"ArtistID": 27,
		"AlbumID": 173,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 274,
		"Title": "BRAVE",
		"FileName": "BRAVE.mp3",
		"ArtistID": 39,
		"AlbumID": 168,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 275,
		"Title": "Ichinen Nikagetsu Hatsuka",
		"FileName": "BRIGHT - Ichinen Nikagetsu Hatsuka.mp3",
		"ArtistID": 67,
		"AlbumID": 110,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 276,
		"Title": "Bye For Now",
		"FileName": "Bye For Now.mp3",
		"ArtistID": 39,
		"AlbumID": 105,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 277,
		"Title": "Calendar Girl",
		"FileName": "Calendar Girl.mp3",
		"ArtistID": 66,
		"AlbumID": 174,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 278,
		"Title": "CANDY",
		"FileName": "CANDY.mp3",
		"ArtistID": 42,
		"AlbumID": 103,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 279,
		"Title": "Chasin",
		"FileName": "Chasin.mp3",
		"ArtistID": 42,
		"AlbumID": 103,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 280,
		"Title": "Yes",
		"FileName": "Chihiro - Yes.mp3",
		"ArtistID": 37,
		"AlbumID": 128,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 281,
		"Title": "Chiisana Koi no Uta",
		"FileName": "Chiisana Koi no Uta.mp3",
		"ArtistID": 38,
		"AlbumID": 175,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 282,
		"Title": "Cold Kiss",
		"FileName": "Cold Kiss.mp3",
		"ArtistID": 39,
		"AlbumID": 107,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 283,
		"Title": "Crescent Moon",
		"FileName": "Crescent Moon.mp3",
		"ArtistID": 39,
		"AlbumID": 101,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 284,
		"Title": "crossing field",
		"FileName": "Crossing field.mp3",
		"ArtistID": 68,
		"AlbumID": 176,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 285,
		"Title": "DADDY ! DADDY ! DO !",
		"FileName": "DADDY ! DADDY ! DO !.mp3",
		"ArtistID": 69,
		"AlbumID": 177,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 286,
		"Title": "Daisy (Remaster for 星の消えた夜に 2022)",
		"FileName": "Daisy.mp3",
		"ArtistID": 66,
		"AlbumID": 172,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 287,
		"Title": "Dancing All Night",
		"FileName": "Dancing All Night.mp3",
		"ArtistID": 39,
		"AlbumID": 117,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 288,
		"Title": "Darlin’",
		"FileName": "Darlin’.mp3",
		"ArtistID": 42,
		"AlbumID": 126,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 289,
		"Title": "Dear Mr「F」",
		"FileName": "Dear Mr「F」.mp3",
		"ArtistID": 63,
		"AlbumID": 178,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 290,
		"Title": "DEAREST DROP",
		"FileName": "DEAREST DROP.mp3",
		"ArtistID": 70,
		"AlbumID": 179,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 291,
		"Title": "Desert",
		"FileName": "Desert.mp3",
		"ArtistID": 39,
		"AlbumID": 96,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 292,
		"Title": "Dont You Stop",
		"FileName": "Dont You Stop.mp3",
		"ArtistID": 42,
		"AlbumID": 171,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 293,
		"Title": "Epilogue",
		"FileName": "Epilogue.mp3",
		"ArtistID": 39,
		"AlbumID": 96,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 294,
		"Title": "Familia",
		"FileName": "Familia.mp3",
		"ArtistID": 65,
		"AlbumID": 163,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 295,
		"Title": "fiction blue",
		"FileName": "fiction blue.mp3",
		"ArtistID": 32,
		"AlbumID": 70,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 296,
		"Title": "Flyday Chinatown",
		"FileName": "Flyday Chinatown.mp3",
		"ArtistID": 39,
		"AlbumID": 111,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 297,
		"Title": "Footprint",
		"FileName": "Footprint.mp3",
		"ArtistID": 39,
		"AlbumID": 119,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 298,
		"Title": "Forget-me-not",
		"FileName": "Forget-me-not.mp3",
		"ArtistID": 39,
		"AlbumID": 105,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 299,
		"Title": "Fukashigi No Carte \"Bunny Girl Senpai\"",
		"FileName": "Fukashigi No Carte - Bunny Girl Senpai.mp3",
		"ArtistID": 71,
		"AlbumID": 180,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 300,
		"Title": "Fukashigi no Carte",
		"FileName": "Fukashigi no Carte.mp3",
		"ArtistID": 72,
		"AlbumID": 181,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 301,
		"Title": "Fun Fun Christmas",
		"FileName": "Fun Fun Christmas.mp3",
		"ArtistID": 39,
		"AlbumID": 119,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 302,
		"Title": "Got A Feeling",
		"FileName": "Got A Feeling.mp3",
		"ArtistID": 42,
		"AlbumID": 103,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 303,
		"Title": "Go☆サマーガール",
		"FileName": "Go☆サマーガール.mp3",
		"ArtistID": 73,
		"AlbumID": 182,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 304,
		"Title": "grilletto",
		"FileName": "grilletto.mp3",
		"ArtistID": 74,
		"AlbumID": 183,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 305,
		"Title": "Hajimarino Toki",
		"FileName": "Hajimarino Toki.mp3",
		"ArtistID": 39,
		"AlbumID": 184,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 306,
		"Title": "Hana",
		"FileName": "Hana.mp3",
		"ArtistID": 39,
		"AlbumID": 119,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 307,
		"Title": "Happy encount",
		"FileName": "Happy encount.mp3",
		"ArtistID": 75,
		"AlbumID": 185,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 308,
		"Title": "Hatsukoi",
		"FileName": "Hatsukoi.mp3",
		"ArtistID": 39,
		"AlbumID": 112,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 309,
		"Title": "Heaven’s Door",
		"FileName": "Heaven’s Door.mp3",
		"ArtistID": 42,
		"AlbumID": 126,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 310,
		"Title": "Hello,world!",
		"FileName": "Hello,world!.mp3",
		"ArtistID": 76,
		"AlbumID": 186,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 311,
		"Title": "HELLO",
		"FileName": "HELLO.mp3",
		"ArtistID": 39,
		"AlbumID": 107,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 312,
		"Title": "Here",
		"FileName": "Here.mp3",
		"ArtistID": 77,
		"AlbumID": 187,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 313,
		"Title": "Heroes",
		"FileName": "Heroes.mp3",
		"ArtistID": 39,
		"AlbumID": 107,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 314,
		"Title": "I Remember You",
		"FileName": "I Remember You.mp3",
		"ArtistID": 39,
		"AlbumID": 107,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 315,
		"Title": "Ihoujin",
		"FileName": "Ihoujin.mp3",
		"ArtistID": 39,
		"AlbumID": 111,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 316,
		"Title": "Im ALIVE",
		"FileName": "Im ALIVE.mp3",
		"ArtistID": 39,
		"AlbumID": 119,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 317,
		"Title": "inverted world",
		"FileName": "inverted world.mp3",
		"ArtistID": 75,
		"AlbumID": 185,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 318,
		"Title": "Is There Still Anything That Love Can Do?",
		"FileName": "Is There Still Anything That Love Can Do.mp3",
		"ArtistID": 78,
		"AlbumID": 188,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 319,
		"Title": "Its OK",
		"FileName": "Its OK.mp3",
		"ArtistID": 39,
		"AlbumID": 109,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 320,
		"Title": "Its okay to social misfit!",
		"FileName": "Its okay to social misfit!.mp3",
		"ArtistID": 31,
		"AlbumID": 189,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 321,
		"Title": "Itsumademo Kawaranu Aio",
		"FileName": "Itsumademo Kawaranu Aio.mp3",
		"ArtistID": 39,
		"AlbumID": 114,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 322,
		"Title": "Jasmine",
		"FileName": "Jasmine.mp3",
		"ArtistID": 65,
		"AlbumID": 190,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 323,
		"Title": "JEWEL",
		"FileName": "JEWEL.mp3",
		"ArtistID": 39,
		"AlbumID": 120,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 324,
		"Title": "Junrenka",
		"FileName": "Junrenka.mp3",
		"ArtistID": 39,
		"AlbumID": 117,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 325,
		"Title": "Just disappear",
		"FileName": "Just disappear.mp3",
		"ArtistID": 31,
		"AlbumID": 191,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 326,
		"Title": "Kanade",
		"FileName": "Kanade.mp3",
		"ArtistID": 39,
		"AlbumID": 105,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 327,
		"Title": "Katteni Shiyagare",
		"FileName": "Katteni Shiyagare.mp3",
		"ArtistID": 39,
		"AlbumID": 117,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 328,
		"Title": "Kie Kitano - Hazakura",
		"FileName": "Kie Kitano - Hazakura.mp3",
		"ArtistID": 79,
		"AlbumID": 110,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 329,
		"Title": "Kimiga Omoideni Narumaeni",
		"FileName": "Kimiga Omoideni Narumaeni.mp3",
		"ArtistID": 39,
		"AlbumID": 105,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 330,
		"Title": "KIRA☆KIRA☆",
		"FileName": "KIRA☆KIRA☆.mp3",
		"ArtistID": 42,
		"AlbumID": 126,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 331,
		"Title": "Kiss Kiss Kiss",
		"FileName": "Kiss Kiss Kiss.mp3",
		"ArtistID": 42,
		"AlbumID": 126,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 332,
		"Title": "Koibito Mo Nureru Machikado",
		"FileName": "Koibito Mo Nureru Machikado.mp3",
		"ArtistID": 39,
		"AlbumID": 117,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 333,
		"Title": "Kokoni Iruwa",
		"FileName": "Kokoni Iruwa.mp3",
		"ArtistID": 39,
		"AlbumID": 119,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 334,
		"Title": "Konomama Kimidakeo Ubaisaritai",
		"FileName": "Konomama Kimidakeo Ubaisaritai.mp3",
		"ArtistID": 39,
		"AlbumID": 105,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 335,
		"Title": "Konyadake Kitto",
		"FileName": "Konyadake Kitto.mp3",
		"ArtistID": 39,
		"AlbumID": 100,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 336,
		"Title": "Kuchizuke Diamond",
		"FileName": "Kuchizuke Diamond.mp3",
		"ArtistID": 80,
		"AlbumID": 192,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 337,
		"Title": "Lamp",
		"FileName": "Lamp.mp3",
		"ArtistID": 65,
		"AlbumID": 193,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 338,
		"Title": "let go",
		"FileName": "let go.mp3",
		"ArtistID": 39,
		"AlbumID": 105,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 339,
		"Title": "Little Car",
		"FileName": "Little Car.mp3",
		"ArtistID": 39,
		"AlbumID": 96,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 340,
		"Title": "Lovers",
		"FileName": "Lovers.mp3",
		"ArtistID": 65,
		"AlbumID": 194,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 341,
		"Title": "MAGIC",
		"FileName": "MAGIC.mp3",
		"ArtistID": 65,
		"AlbumID": 194,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 342,
		"Title": "Manatsuno Yono Yume",
		"FileName": "Manatsuno Yono Yume.mp3",
		"ArtistID": 39,
		"AlbumID": 114,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 343,
		"Title": "Mata Aeru Himade",
		"FileName": "Mata Aeru Himade.mp3",
		"ArtistID": 39,
		"AlbumID": 108,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 344,
		"Title": "Memory Glass",
		"FileName": "Memory Glass.mp3",
		"ArtistID": 39,
		"AlbumID": 117,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 345,
		"Title": "MIDNIGHT PRETENDERS",
		"FileName": "MIDNIGHT PRETENDERS.mp3",
		"ArtistID": 39,
		"AlbumID": 112,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 346,
		"Title": "Mine (Remaster for 星の消えた夜に 2022)",
		"FileName": "Mine (Remaster for 星の消えた夜に 2022).mp3",
		"ArtistID": 66,
		"AlbumID": 172,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 347,
		"Title": "MIRAI",
		"FileName": "MIRAI.mp3",
		"ArtistID": 74,
		"AlbumID": 195,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 348,
		"Title": "Mirror",
		"FileName": "Mirror.mp3",
		"ArtistID": 52,
		"AlbumID": 196,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 349,
		"Title": "Momenno Handkerchief",
		"FileName": "Momenno Handkerchief.mp3",
		"ArtistID": 39,
		"AlbumID": 112,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 350,
		"Title": "monochrome",
		"FileName": "monochrome.mp3",
		"ArtistID": 73,
		"AlbumID": 197,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 351,
		"Title": "My Darling",
		"FileName": "My Darling.mp3",
		"ArtistID": 39,
		"AlbumID": 119,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 352,
		"Title": "my sweetest one (Remaster for 星の消えた夜に 2022)",
		"FileName": "my sweetest one (Remaster for 星の消えた夜に 2022).mp3",
		"ArtistID": 66,
		"AlbumID": 172,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 353,
		"Title": "My Way",
		"FileName": "My Way.mp3",
		"ArtistID": 39,
		"AlbumID": 118,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 354,
		"Title": "Natsurenbo",
		"FileName": "Natsurenbo.mp3",
		"ArtistID": 38,
		"AlbumID": 198,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 355,
		"Title": "NEWDAY",
		"FileName": "NEWDAY.mp3",
		"ArtistID": 39,
		"AlbumID": 199,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 356,
		"Title": "No.1",
		"FileName": "No.1.mp3",
		"ArtistID": 38,
		"AlbumID": 175,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 357,
		"Title": "Omoideno Sukuriin",
		"FileName": "Omoideno Sukuriin.mp3",
		"ArtistID": 39,
		"AlbumID": 111,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 358,
		"Title": "ONCE",
		"FileName": "ONCE.mp3",
		"ArtistID": 39,
		"AlbumID": 107,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 359,
		"Title": "One More Time",
		"FileName": "One More Time.mp3",
		"ArtistID": 39,
		"AlbumID": 108,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 360,
		"Title": "Perfect Boy",
		"FileName": "Perfect Boy.mp3",
		"ArtistID": 39,
		"AlbumID": 119,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 361,
		"Title": "Pretender",
		"FileName": "Pretender.mp3",
		"ArtistID": 60,
		"AlbumID": 200,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 362,
		"Title": "purest note 〜あたたかい音 - Ver. Strings Quartet",
		"FileName": "purest note 〜あたたかい音 - Ver. Strings Quartet.mp3",
		"ArtistID": 49,
		"AlbumID": 201,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 363,
		"Title": "RESET",
		"FileName": "RESET.mp3",
		"ArtistID": 37,
		"AlbumID": 128,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 364,
		"Title": "Rising Hope",
		"FileName": "Rising Hope.mp3",
		"ArtistID": 68,
		"AlbumID": 202,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 365,
		"Title": "Romance",
		"FileName": "Romance.mp3",
		"ArtistID": 81,
		"AlbumID": 203,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 366,
		"Title": "Roppongi Junjouha",
		"FileName": "Roppongi Junjouha.mp3",
		"ArtistID": 39,
		"AlbumID": 112,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 367,
		"Title": "Ruby No Yubiwa",
		"FileName": "Ruby No Yubiwa.mp3",
		"ArtistID": 39,
		"AlbumID": 117,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 368,
		"Title": "Saigo No Ame",
		"FileName": "Saigo No Ame.mp3",
		"ArtistID": 39,
		"AlbumID": 105,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 369,
		"Title": "Saudade",
		"FileName": "Saudade.mp3",
		"ArtistID": 39,
		"AlbumID": 105,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 370,
		"Title": "Sayonara",
		"FileName": "Sayonara.mp3",
		"ArtistID": 39,
		"AlbumID": 170,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 371,
		"Title": "SELF PRODUCER",
		"FileName": "SELF PRODUCER.mp3",
		"ArtistID": 49,
		"AlbumID": 125,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 372,
		"Title": "Shake & Shake",
		"FileName": "Shake & Shake.mp3",
		"ArtistID": 65,
		"AlbumID": 204,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 373,
		"Title": "Shiawaseni Naritai",
		"FileName": "Shiawaseni Naritai.mp3",
		"ArtistID": 39,
		"AlbumID": 98,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 374,
		"Title": "SHOCK!",
		"FileName": "SHOCK!.mp3",
		"ArtistID": 32,
		"AlbumID": 205,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 375,
		"Title": "Shukumei",
		"FileName": "Shukumei.mp3",
		"ArtistID": 60,
		"AlbumID": 200,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 376,
		"Title": "SHUKUSEI!! LOLI KAMI REQUIEM",
		"FileName": "SHUKUSEI!! LOLI KAMI REQUIEM.mp3",
		"ArtistID": 30,
		"AlbumID": 206,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 377,
		"Title": "Silent Tears",
		"FileName": "Silent Tears.mp3",
		"ArtistID": 39,
		"AlbumID": 119,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 378,
		"Title": "Sincerely",
		"FileName": "Sincerely.mp3",
		"ArtistID": 75,
		"AlbumID": 207,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 379,
		"Title": "Sleeping town",
		"FileName": "Sleeping town.mp3",
		"ArtistID": 36,
		"AlbumID": 81,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 380,
		"Title": "Sorato Kimino Aidani",
		"FileName": "Sorato Kimino Aidani.mp3",
		"ArtistID": 39,
		"AlbumID": 114,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 381,
		"Title": "Sparkle - Original Version",
		"FileName": "Sparkle - Original Version.mp3",
		"ArtistID": 78,
		"AlbumID": 208,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 382,
		"Title": "Stay With Me",
		"FileName": "Stay With Me.mp3",
		"ArtistID": 39,
		"AlbumID": 111,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 383,
		"Title": "Sunshine",
		"FileName": "Sunshine.mp3",
		"ArtistID": 39,
		"AlbumID": 119,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 384,
		"Title": "The Fog",
		"FileName": "The Fog.mp3",
		"ArtistID": 82,
		"AlbumID": 209,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 385,
		"Title": "There will be love there",
		"FileName": "There will be love there.mp3",
		"ArtistID": 39,
		"AlbumID": 98,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 386,
		"Title": "Ti Amo",
		"FileName": "Ti Amo.mp3",
		"ArtistID": 39,
		"AlbumID": 105,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 387,
		"Title": "TOMORROW",
		"FileName": "TOMORROW.mp3",
		"ArtistID": 39,
		"AlbumID": 114,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 388,
		"Title": "Tooku Tooku",
		"FileName": "Tooku Tooku.mp3",
		"ArtistID": 39,
		"AlbumID": 100,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 389,
		"Title": "Toy",
		"FileName": "Toy.mp3",
		"ArtistID": 31,
		"AlbumID": 210,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 390,
		"Title": "Traveling",
		"FileName": "Traveling.mp3",
		"ArtistID": 65,
		"AlbumID": 211,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 391,
		"Title": "True",
		"FileName": "True.mp3",
		"ArtistID": 39,
		"AlbumID": 96,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 392,
		"Title": "Umiwo Miteru",
		"FileName": "Umiwo Miteru.mp3",
		"ArtistID": 39,
		"AlbumID": 212,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 393,
		"Title": "Universe",
		"FileName": "Universe.mp3",
		"ArtistID": 60,
		"AlbumID": 167,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 394,
		"Title": "violeta",
		"FileName": "violeta.mp3",
		"ArtistID": 32,
		"AlbumID": 70,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 395,
		"Title": "WAY YOU ARE",
		"FileName": "WAY YOU ARE.mp3",
		"ArtistID": 39,
		"AlbumID": 212,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 396,
		"Title": "White Letter",
		"FileName": "White Letter.mp3",
		"ArtistID": 39,
		"AlbumID": 168,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 397,
		"Title": "Who Are You",
		"FileName": "Who Are You.mp3",
		"ArtistID": 39,
		"AlbumID": 213,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 398,
		"Title": "WILL",
		"FileName": "WILL.mp3",
		"ArtistID": 75,
		"AlbumID": 214,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 399,
		"Title": "Wine Red No Kokoro",
		"FileName": "Wine Red No Kokoro.mp3",
		"ArtistID": 39,
		"AlbumID": 117,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 400,
		"Title": "Yesterday",
		"FileName": "Yesterday.mp3",
		"ArtistID": 60,
		"AlbumID": 200,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 401,
		"Title": "You are Beautiful",
		"FileName": "You are Beautiful.mp3",
		"ArtistID": 39,
		"AlbumID": 119,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 402,
		"Title": "You were mine",
		"FileName": "You were mine.mp3",
		"ArtistID": 39,
		"AlbumID": 117,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 403,
		"Title": "you",
		"FileName": "you.mp3",
		"ArtistID": 57,
		"AlbumID": 215,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 404,
		"Title": "Yunomi  – はんぶんこ花火",
		"FileName": "Yunomi  – はんぶんこ花火 .mp3",
		"ArtistID": 83,
		"AlbumID": 216,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 405,
		"Title": "あの夢をなぞって",
		"FileName": "あの夢をなぞって.mp3",
		"ArtistID": 81,
		"AlbumID": 217,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 406,
		"Title": "いつだって青空",
		"FileName": "いつだって青空.mp3",
		"ArtistID": 49,
		"AlbumID": 123,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 407,
		"Title": "ここから見える景色",
		"FileName": "ここから見える景色.mp3",
		"ArtistID": 65,
		"AlbumID": 194,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 408,
		"Title": "さくら 〜あなたに出会えてよかった〜",
		"FileName": "さくら 〜あなたに出会えてよかった〜.mp3",
		"ArtistID": 48,
		"AlbumID": 218,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 409,
		"Title": "しあわせ",
		"FileName": "しあわせ.mp3",
		"ArtistID": 39,
		"AlbumID": 219,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 410,
		"Title": "ずっと二人で",
		"FileName": "ずっと二人で.mp3",
		"ArtistID": 42,
		"AlbumID": 126,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 411,
		"Title": "ただ君に晴れ",
		"FileName": "ただ君に晴れ.mp3",
		"ArtistID": 64,
		"AlbumID": 157,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 412,
		"Title": "たぶん",
		"FileName": "たぶん.mp3",
		"ArtistID": 81,
		"AlbumID": 217,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 413,
		"Title": "ふたりきりルームシアター",
		"FileName": "ふたりきりルームシアター.mp3",
		"ArtistID": 57,
		"AlbumID": 220,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 414,
		"Title": "また君と",
		"FileName": "また君と.mp3",
		"ArtistID": 39,
		"AlbumID": 221,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 415,
		"Title": "もう少しだけ",
		"FileName": "もう少しだけ.mp3",
		"ArtistID": 81,
		"AlbumID": 203,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 416,
		"Title": "もしも命が描けたら",
		"FileName": "もしも命が描けたら.mp3",
		"ArtistID": 81,
		"AlbumID": 203,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 417,
		"Title": "アイアイ愛してるよ♡",
		"FileName": "アイアイ愛してるよ♡.mp3",
		"ArtistID": 49,
		"AlbumID": 222,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 418,
		"Title": "アイドル",
		"FileName": "アイドル.mp3",
		"ArtistID": 81,
		"AlbumID": 223,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 419,
		"Title": "アドベンチャー",
		"FileName": "アドベンチャー.mp3",
		"ArtistID": 81,
		"AlbumID": 223,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 420,
		"Title": "アネモネ",
		"FileName": "アネモネ.mp3",
		"ArtistID": 65,
		"AlbumID": 194,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 421,
		"Title": "アンコール",
		"FileName": "アンコール.mp3",
		"ArtistID": 81,
		"AlbumID": 217,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 422,
		"Title": "イコール",
		"FileName": "イコール.mp3",
		"ArtistID": 65,
		"AlbumID": 211,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 423,
		"Title": "インドア系ならトラックメイカー",
		"FileName": "インドア系ならトラックメイカー.mp3",
		"ArtistID": 83,
		"AlbumID": 224,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 424,
		"Title": "インフェルノ",
		"FileName": "インフェルノ.mp3",
		"ArtistID": 62,
		"AlbumID": 162,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 425,
		"Title": "エンドロール",
		"FileName": "エンドロール.mp3",
		"ArtistID": 65,
		"AlbumID": 225,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 426,
		"Title": "キセキ",
		"FileName": "キセキ.mp3",
		"ArtistID": 38,
		"AlbumID": 175,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 427,
		"Title": "キミと未来",
		"FileName": "キミと未来.mp3",
		"ArtistID": 39,
		"AlbumID": 226,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 428,
		"Title": "ギミギミ",
		"FileName": "ギミギミ.mp3",
		"ArtistID": 42,
		"AlbumID": 126,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 429,
		"Title": "シャラララ",
		"FileName": "シャラララ.mp3",
		"ArtistID": 49,
		"AlbumID": 222,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 430,
		"Title": "シュガーソングとビターステップ",
		"FileName": "シュガーソングとビターステップ.mp3",
		"ArtistID": 84,
		"AlbumID": 227,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 431,
		"Title": "シュガーロス",
		"FileName": "シュガーロス.mp3",
		"ArtistID": 82,
		"AlbumID": 209,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 432,
		"Title": "シンシアリー",
		"FileName": "シンシアリー.mp3",
		"ArtistID": 57,
		"AlbumID": 228,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 433,
		"Title": "ジェリーフィッシュ (feat. ローラーガール)",
		"FileName": "ジェリーフィッシュ.mp3",
		"ArtistID": 83,
		"AlbumID": 216,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 434,
		"Title": "セツナdays",
		"FileName": "セツナdays.mp3",
		"ArtistID": 57,
		"AlbumID": 229,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 435,
		"Title": "セブンティーン",
		"FileName": "セブンティーン.mp3",
		"ArtistID": 81,
		"AlbumID": 223,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 436,
		"Title": "センス・オブ・ワンダー",
		"FileName": "センス・オブ・ワンダー.mp3",
		"ArtistID": 65,
		"AlbumID": 225,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 437,
		"Title": "ソーダ",
		"FileName": "ソーダ.mp3",
		"ArtistID": 65,
		"AlbumID": 230,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 438,
		"Title": "ツバメ (feat. ミドリーズ)",
		"FileName": "ツバメ (feat. ミドリーズ).mp3",
		"ArtistID": 81,
		"AlbumID": 203,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 439,
		"Title": "ツーアウトロマンス",
		"FileName": "ツーアウトロマンス.mp3",
		"ArtistID": 57,
		"AlbumID": 231,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 440,
		"Title": "ナイトウォーカー",
		"FileName": "ナイトウォーカー.mp3",
		"ArtistID": 65,
		"AlbumID": 232,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 441,
		"Title": "ニゲラ",
		"FileName": "ニゲラ.mp3",
		"ArtistID": 82,
		"AlbumID": 209,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 442,
		"Title": "ハルカ",
		"FileName": "ハルカ.mp3",
		"ArtistID": 81,
		"AlbumID": 217,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 443,
		"Title": "ハルジオン",
		"FileName": "ハルジオン.mp3",
		"ArtistID": 81,
		"AlbumID": 217,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 444,
		"Title": "パレード",
		"FileName": "パレード.mp3",
		"ArtistID": 64,
		"AlbumID": 233,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 445,
		"Title": "ヒーロー・イン・ザ・ミラー",
		"FileName": "ヒーロー・イン・ザ・ミラー.mp3",
		"ArtistID": 57,
		"AlbumID": 229,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 446,
		"Title": "ビーユアセルフ",
		"FileName": "ビーユアセルフ.mp3",
		"ArtistID": 82,
		"AlbumID": 209,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 447,
		"Title": "ファンファーレ",
		"FileName": "ファンファーレ.mp3",
		"ArtistID": 65,
		"AlbumID": 163,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 448,
		"Title": "フィクション",
		"FileName": "フィクション.mp3",
		"ArtistID": 65,
		"AlbumID": 163,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 449,
		"Title": "フロム",
		"FileName": "フロム.mp3",
		"ArtistID": 75,
		"AlbumID": 234,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 450,
		"Title": "ブレーメン",
		"FileName": "ブレーメン.mp3",
		"ArtistID": 64,
		"AlbumID": 235,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 451,
		"Title": "ポラリス",
		"FileName": "ポラリス.mp3",
		"ArtistID": 66,
		"AlbumID": 236,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 452,
		"Title": "ミスター",
		"FileName": "ミスター.mp3",
		"ArtistID": 81,
		"AlbumID": 223,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 453,
		"Title": "ミラクルバング!",
		"FileName": "ミラクルバング!.mp3",
		"ArtistID": 49,
		"AlbumID": 237,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 454,
		"Title": "ミラーチューン",
		"FileName": "ミラーチューン.mp3",
		"ArtistID": 63,
		"AlbumID": 238,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 455,
		"Title": "ユラユラ",
		"FileName": "ユラユラ.mp3",
		"ArtistID": 42,
		"AlbumID": 126,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 456,
		"Title": "ラストカード",
		"FileName": "ラストカード.mp3",
		"ArtistID": 49,
		"AlbumID": 239,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 457,
		"Title": "ラブの逃走",
		"FileName": "ラブの逃走.mp3",
		"ArtistID": 82,
		"AlbumID": 209,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 458,
		"Title": "ラブレター",
		"FileName": "ラブレター.mp3",
		"ArtistID": 81,
		"AlbumID": 203,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 459,
		"Title": "リタルダンド",
		"FileName": "リタルダンド.mp3",
		"ArtistID": 65,
		"AlbumID": 240,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 460,
		"Title": "ロックでキス",
		"FileName": "ロックでキス.mp3",
		"ArtistID": 82,
		"AlbumID": 209,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 461,
		"Title": "三原色",
		"FileName": "三原色.mp3",
		"ArtistID": 81,
		"AlbumID": 203,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 462,
		"Title": "会いたかった空 - Ver. Strings Quartet",
		"FileName": "会いたかった空 - Ver. Strings Quartet.mp3",
		"ArtistID": 49,
		"AlbumID": 201,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 463,
		"Title": "優しい彗星",
		"FileName": "優しい彗星.mp3",
		"ArtistID": 81,
		"AlbumID": 203,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 464,
		"Title": "光るなら",
		"FileName": "光るなら.mp3",
		"ArtistID": 85,
		"AlbumID": 241,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 465,
		"Title": "勇者",
		"FileName": "勇者.mp3",
		"ArtistID": 81,
		"AlbumID": 223,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 466,
		"Title": "又三郎",
		"FileName": "又三郎.mp3",
		"ArtistID": 64,
		"AlbumID": 142,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 467,
		"Title": "境界の彼方",
		"FileName": "境界の彼方.mp3",
		"ArtistID": 49,
		"AlbumID": 125,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 468,
		"Title": "夜に駆ける",
		"FileName": "夜に駆ける.mp3",
		"ArtistID": 81,
		"AlbumID": 217,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 469,
		"Title": "女性が歌うキセキGReeeeN青空エール主題歌 whiteeeen",
		"FileName": "女性が歌うキセキGReeeeN青空エール主題歌 whiteeeen.mp3",
		"ArtistID": 38,
		"AlbumID": 93,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 470,
		"Title": "女性が歌う高嶺の花子さんback number",
		"FileName": "女性が歌う高嶺の花子さんback number.mp3",
		"ArtistID": 38,
		"AlbumID": 93,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 471,
		"Title": "好きだ",
		"FileName": "好きだ.mp3",
		"ArtistID": 81,
		"AlbumID": 223,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 472,
		"Title": "好きな人かいることJY好きな人がいること主題歌",
		"FileName": "好きな人かいることJY好きな人がいること主題歌.mp3",
		"ArtistID": 38,
		"AlbumID": 93,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 473,
		"Title": "好きな人がいること",
		"FileName": "好きな人がいること.mp3",
		"ArtistID": 38,
		"AlbumID": 175,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 474,
		"Title": "好きになってよかったな",
		"FileName": "好きになってよかったな.mp3",
		"ArtistID": 57,
		"AlbumID": 242,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 475,
		"Title": "寄り酔い",
		"FileName": "寄り酔い.mp3",
		"ArtistID": 82,
		"AlbumID": 209,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 476,
		"Title": "審美眼",
		"FileName": "審美眼.mp3",
		"ArtistID": 82,
		"AlbumID": 243,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 477,
		"Title": "幽霊東京",
		"FileName": "幽霊東京.mp3",
		"ArtistID": 32,
		"AlbumID": 134,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 478,
		"Title": "怪物",
		"FileName": "怪物.mp3",
		"ArtistID": 81,
		"AlbumID": 203,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 479,
		"Title": "恋",
		"FileName": "恋.mp3",
		"ArtistID": 49,
		"AlbumID": 125,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 480,
		"Title": "恋焦がれて",
		"FileName": "恋焦がれて.mp3",
		"ArtistID": 42,
		"AlbumID": 126,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 481,
		"Title": "晴る",
		"FileName": "晴る.mp3",
		"ArtistID": 64,
		"AlbumID": 244,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 482,
		"Title": "本音",
		"FileName": "本音.mp3",
		"ArtistID": 65,
		"AlbumID": 245,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 483,
		"Title": "歌うたいのバラッド",
		"FileName": "歌うたいのバラッド.mp3",
		"ArtistID": 42,
		"AlbumID": 126,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 484,
		"Title": "正しくなれない - From THE FIRST TAKE",
		"FileName": "正しくなれない - From THE FIRST TAKE.mp3",
		"ArtistID": 63,
		"AlbumID": 246,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 485,
		"Title": "永遠 - marriage ver.",
		"FileName": "永遠 - marriage ver.mp3",
		"ArtistID": 42,
		"AlbumID": 247,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 486,
		"Title": "泡沫",
		"FileName": "泡沫.mp3",
		"ArtistID": 82,
		"AlbumID": 209,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 487,
		"Title": "海のまにまに",
		"FileName": "海のまにまに.mp3",
		"ArtistID": 81,
		"AlbumID": 223,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 488,
		"Title": "涙のキッス",
		"FileName": "涙のキッス.mp3",
		"ArtistID": 42,
		"AlbumID": 248,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 489,
		"Title": "白金ディスコ",
		"FileName": "白金ディスコ.mp3",
		"ArtistID": 58,
		"AlbumID": 135,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 490,
		"Title": "真っ裸",
		"FileName": "真っ裸.mp3",
		"ArtistID": 82,
		"AlbumID": 249,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 491,
		"Title": "祝祭",
		"FileName": "祝祭.mp3",
		"ArtistID": 65,
		"AlbumID": 250,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 492,
		"Title": "祝福",
		"FileName": "祝福.mp3",
		"ArtistID": 81,
		"AlbumID": 223,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 493,
		"Title": "約束 -Promise code-",
		"FileName": "約束 -Promise code.mp3",
		"ArtistID": 74,
		"AlbumID": 195,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 494,
		"Title": "絶頂讃歌",
		"FileName": "絶頂讃歌.mp3",
		"ArtistID": 82,
		"AlbumID": 251,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 495,
		"Title": "群青",
		"FileName": "群青.mp3",
		"ArtistID": 81,
		"AlbumID": 217,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 496,
		"Title": "花に亡霊",
		"FileName": "花に亡霊.mp3",
		"ArtistID": 64,
		"AlbumID": 252,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 497,
		"Title": "靴の花火",
		"FileName": "靴の花火.mp3",
		"ArtistID": 64,
		"AlbumID": 156,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 498,
		"Title": "願い",
		"FileName": "願い.mp3",
		"ArtistID": 65,
		"AlbumID": 253,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 499,
		"Title": "飽和",
		"FileName": "飽和.mp3",
		"ArtistID": 32,
		"AlbumID": 254,
		"TagID": 5,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 500,
		"Title": "Against The Sun",
		"FileName": "Against The Sun.mp3",
		"ArtistID": 86,
		"AlbumID": 255,
		"TagID": 6,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 501,
		"Title": "Anything Anymore",
		"FileName": "Anything Anymore.mp3",
		"ArtistID": 87,
		"AlbumID": 256,
		"TagID": 6,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 502,
		"Title": "Anywhere I Go",
		"FileName": "Anywhere I Go.mp3",
		"ArtistID": 88,
		"AlbumID": 257,
		"TagID": 6,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 503,
		"Title": "Are You Lonely",
		"FileName": "Are You Lonely.mp3",
		"ArtistID": 27,
		"AlbumID": 258,
		"TagID": 6,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 504,
		"Title": "Beautiful Now",
		"FileName": "Beautiful Now.mp3",
		"ArtistID": 89,
		"AlbumID": 259,
		"TagID": 6,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 505,
		"Title": "Body Back (feat. Maia Wright)",
		"FileName": "Body Back (feat. Maia Wright).mp3",
		"ArtistID": 90,
		"AlbumID": 260,
		"TagID": 6,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 506,
		"Title": "Cant Wait",
		"FileName": "Cant Wait.mp3",
		"ArtistID": 6,
		"AlbumID": 261,
		"TagID": 6,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 507,
		"Title": "DRUM GO DUM",
		"FileName": "DRUM GO DUM.mp3",
		"ArtistID": 16,
		"AlbumID": 262,
		"TagID": 6,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 508,
		"Title": "End of Time",
		"FileName": "End of Time.mp3",
		"ArtistID": 15,
		"AlbumID": 263,
		"TagID": 6,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 509,
		"Title": "Fade",
		"FileName": "Fade.mp3",
		"ArtistID": 15,
		"AlbumID": 22,
		"TagID": 6,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 510,
		"Title": "Firebird",
		"FileName": "Firebird.mp3",
		"ArtistID": 91,
		"AlbumID": 264,
		"TagID": 6,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 511,
		"Title": "Force",
		"FileName": "Force.mp3",
		"ArtistID": 15,
		"AlbumID": 22,
		"TagID": 6,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 512,
		"Title": "Frame of Mind",
		"FileName": "Frame of Mind.mp3",
		"ArtistID": 92,
		"AlbumID": 265,
		"TagID": 6,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 513,
		"Title": "GIANTS",
		"FileName": "GIANTS.mp3",
		"ArtistID": 16,
		"AlbumID": 266,
		"TagID": 6,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 514,
		"Title": "GODS",
		"FileName": "GODS.mp3",
		"ArtistID": 16,
		"AlbumID": 267,
		"TagID": 6,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 515,
		"Title": "heart afire",
		"FileName": "Heart afire.mp3",
		"ArtistID": 93,
		"AlbumID": 268,
		"TagID": 6,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 516,
		"Title": "ILL SHOW YOU",
		"FileName": "I WILL SHOW YOU.mp3",
		"ArtistID": 16,
		"AlbumID": 262,
		"TagID": 6,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 517,
		"Title": "Ignite - 2016 League Of Legends World Championship",
		"FileName": "Ignite - LOL.mp3",
		"ArtistID": 89,
		"AlbumID": 269,
		"TagID": 6,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 518,
		"Title": "Ignite",
		"FileName": "Ignite.mp3",
		"ArtistID": 15,
		"AlbumID": 270,
		"TagID": 6,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 519,
		"Title": "Inside the Lines",
		"FileName": "Inside the Lines.mp3",
		"ArtistID": 94,
		"AlbumID": 271,
		"TagID": 6,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 520,
		"Title": "Jackpot",
		"FileName": "Jackpot.mp3",
		"ArtistID": 22,
		"AlbumID": 36,
		"TagID": 6,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 521,
		"Title": "Justin Caruso - Talk About Me ft. Victoria Zaro (Leowi Remix)",
		"FileName": "Justin Caruso - Talk About Me ft. Victoria Zaro (Leowi Remix).mp3",
		"ArtistID": 95,
		"AlbumID": 272,
		"TagID": 6,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 522,
		"Title": "K-391 & Diviners feat. Anna Yvette - City Of Gold",
		"FileName": "K-391 & Diviners feat. Anna Yvette - City Of Gold.mp3",
		"ArtistID": 95,
		"AlbumID": 272,
		"TagID": 6,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 523,
		"Title": "Lights Go Down (Radio Mix) [feat. Curtains]",
		"FileName": "Lights Go Down (Radio Mix) feat. Curtains.mp3",
		"ArtistID": 96,
		"AlbumID": 273,
		"TagID": 6,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 524,
		"Title": "Linked",
		"FileName": "Linked.mp3",
		"ArtistID": 6,
		"AlbumID": 274,
		"TagID": 6,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 525,
		"Title": "Lone Digger",
		"FileName": "Lone Digger.mp3",
		"ArtistID": 97,
		"AlbumID": 275,
		"TagID": 6,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 526,
		"Title": "MORE",
		"FileName": "MORE.mp3",
		"ArtistID": 16,
		"AlbumID": 262,
		"TagID": 6,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 527,
		"Title": "MORTEN - Beautiful Heartbeat (Deorro Remix)",
		"FileName": "MORTEN - Beautiful Heartbeat (Deorro Remix).mp3",
		"ArtistID": 98,
		"AlbumID": 272,
		"TagID": 6,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 528,
		"Title": "Move Your Body - Alan Walker Remix",
		"FileName": "Move Your Body - Alan Walker Remix.mp3",
		"ArtistID": 15,
		"AlbumID": 276,
		"TagID": 6,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 529,
		"Title": "Never Coming Home (feat. Kinley)",
		"FileName": "Never Coming Home.mp3",
		"ArtistID": 99,
		"AlbumID": 277,
		"TagID": 6,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 530,
		"Title": "Nightcore - Angel",
		"FileName": "Nightcore - Angel.mp3",
		"ArtistID": 100,
		"AlbumID": 278,
		"TagID": 6,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 531,
		"Title": "Nightcore - Army Of Two",
		"FileName": "Nightcore - Army Of Two.mp3",
		"ArtistID": 100,
		"AlbumID": 278,
		"TagID": 6,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 532,
		"Title": "Nightcore - Blackout",
		"FileName": "Nightcore - Blackout.mp3",
		"ArtistID": 100,
		"AlbumID": 278,
		"TagID": 6,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 533,
		"Title": "Nightcore - Catch Fire",
		"FileName": "Nightcore - Catch Fire.mp3",
		"ArtistID": 100,
		"AlbumID": 278,
		"TagID": 6,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 534,
		"Title": "Nightcore - Counting Stars",
		"FileName": "Nightcore - Counting Stars.mp3",
		"ArtistID": 100,
		"AlbumID": 278,
		"TagID": 6,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 535,
		"Title": "Nightcore - Disconnected",
		"FileName": "Nightcore - Disconnected.mp3",
		"ArtistID": 100,
		"AlbumID": 278,
		"TagID": 6,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 536,
		"Title": "Nightcore - Fireflies (Remix)",
		"FileName": "Nightcore - Fireflies (Remix).mp3",
		"ArtistID": 100,
		"AlbumID": 278,
		"TagID": 6,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 537,
		"Title": "Nightcore - Glad You Came",
		"FileName": "Nightcore - Glad You Came.mp3",
		"ArtistID": 100,
		"AlbumID": 278,
		"TagID": 6,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 538,
		"Title": "Nightcore - Hey Devil",
		"FileName": "Nightcore - Hey Devil.mp3",
		"ArtistID": 100,
		"AlbumID": 278,
		"TagID": 6,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 539,
		"Title": "Nightcore - How To Be A Heartbreaker",
		"FileName": "Nightcore - How To Be A Heartbreaker.mp3",
		"ArtistID": 100,
		"AlbumID": 278,
		"TagID": 6,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 540,
		"Title": "Nightcore - I Like It Loud",
		"FileName": "Nightcore - I Like It Loud.mp3",
		"ArtistID": 100,
		"AlbumID": 278,
		"TagID": 6,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 541,
		"Title": "Nightcore - Im Not Here For Your Entertainment",
		"FileName": "Nightcore - Im Not Here For Your Entertainment.mp3",
		"ArtistID": 100,
		"AlbumID": 278,
		"TagID": 6,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 542,
		"Title": "Nightcore - My Demons",
		"FileName": "Nightcore - My Demons.mp3",
		"ArtistID": 100,
		"AlbumID": 278,
		"TagID": 6,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 543,
		"Title": "Nightcore - Run",
		"FileName": "Nightcore - Run.mp3",
		"ArtistID": 100,
		"AlbumID": 278,
		"TagID": 6,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 544,
		"Title": "Nightcore - Soldier",
		"FileName": "Nightcore - Soldier.mp3",
		"ArtistID": 100,
		"AlbumID": 278,
		"TagID": 6,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 545,
		"Title": "Nightcore - Start A Fire",
		"FileName": "Nightcore - Start A Fire.mp3",
		"ArtistID": 100,
		"AlbumID": 278,
		"TagID": 6,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 546,
		"Title": "Nightcore - Stay the Night",
		"FileName": "Nightcore - Stay the Night.mp3",
		"ArtistID": 100,
		"AlbumID": 278,
		"TagID": 6,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 547,
		"Title": "Nightcore - Stay",
		"FileName": "Nightcore - Stay.mp3",
		"ArtistID": 100,
		"AlbumID": 278,
		"TagID": 6,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 548,
		"Title": "Nightcore - The Nights",
		"FileName": "Nightcore - The Nights.mp3",
		"ArtistID": 100,
		"AlbumID": 278,
		"TagID": 6,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 549,
		"Title": "Nightcore - The Phoenix",
		"FileName": "Nightcore - The Phoenix.mp3",
		"ArtistID": 100,
		"AlbumID": 278,
		"TagID": 6,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 550,
		"Title": "Nightcore - Windows Down",
		"FileName": "Nightcore - Windows Down.mp3",
		"ArtistID": 100,
		"AlbumID": 278,
		"TagID": 6,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 551,
		"Title": "Nothing Stopping Me",
		"FileName": "Nothing Stopping Me.mp3",
		"ArtistID": 88,
		"AlbumID": 279,
		"TagID": 6,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 552,
		"Title": "Numb (feat. Johnning)",
		"FileName": "Numb (feat. Johnning).mp3",
		"ArtistID": 101,
		"AlbumID": 280,
		"TagID": 6,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 553,
		"Title": "On the Line",
		"FileName": "On the Line.mp3",
		"ArtistID": 102,
		"AlbumID": 281,
		"TagID": 6,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 554,
		"Title": "Our Story - Radio Edit",
		"FileName": "Our Story - Radio Edit.mp3",
		"ArtistID": 103,
		"AlbumID": 282,
		"TagID": 6,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 555,
		"Title": "Phoenix",
		"FileName": "Phoenix.mp3",
		"ArtistID": 104,
		"AlbumID": 283,
		"TagID": 6,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 556,
		"Title": "Play",
		"FileName": "Play.mp3",
		"ArtistID": 15,
		"AlbumID": 284,
		"TagID": 6,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 557,
		"Title": "POP-STARS",
		"FileName": "POP_STARS.mp3",
		"ArtistID": 16,
		"AlbumID": 285,
		"TagID": 6,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 558,
		"Title": "Red Line",
		"FileName": "Red Line.mp3",
		"ArtistID": 86,
		"AlbumID": 286,
		"TagID": 6,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 559,
		"Title": "RISE",
		"FileName": "RISE.mp3",
		"ArtistID": 16,
		"AlbumID": 287,
		"TagID": 6,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 560,
		"Title": "Robot Love",
		"FileName": "Robot Love.mp3",
		"ArtistID": 105,
		"AlbumID": 288,
		"TagID": 6,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 561,
		"Title": "Saving Light",
		"FileName": "Saving Light.mp3",
		"ArtistID": 106,
		"AlbumID": 289,
		"TagID": 6,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 562,
		"Title": "Smoke Filled Room",
		"FileName": "Smoke Filled Room.mp3",
		"ArtistID": 103,
		"AlbumID": 290,
		"TagID": 6,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 563,
		"Title": "Start Again",
		"FileName": "Start Again.mp3",
		"ArtistID": 107,
		"AlbumID": 291,
		"TagID": 6,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 564,
		"Title": "Summer Air",
		"FileName": "Summer Air.mp3",
		"ArtistID": 108,
		"AlbumID": 292,
		"TagID": 6,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 565,
		"Title": "Surrender",
		"FileName": "Surrender.mp3",
		"ArtistID": 109,
		"AlbumID": 293,
		"TagID": 6,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 566,
		"Title": "THE BADDEST",
		"FileName": "THE BADDEST.mp3",
		"ArtistID": 16,
		"AlbumID": 262,
		"TagID": 6,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 567,
		"Title": "The Spectre",
		"FileName": "The Spectre.mp3",
		"ArtistID": 15,
		"AlbumID": 294,
		"TagID": 6,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 568,
		"Title": "Thunder",
		"FileName": "Thunder.mp3",
		"ArtistID": 110,
		"AlbumID": 295,
		"TagID": 6,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 569,
		"Title": "Till Its Over",
		"FileName": "Till Its Over.mp3",
		"ArtistID": 92,
		"AlbumID": 296,
		"TagID": 6,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 570,
		"Title": "Untouchable",
		"FileName": "Untouchable.mp3",
		"ArtistID": 111,
		"AlbumID": 297,
		"TagID": 6,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 571,
		"Title": "VILLAIN",
		"FileName": "VILLAIN.mp3",
		"ArtistID": 16,
		"AlbumID": 262,
		"TagID": 6,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 572,
		"Title": "Virtual Riot - Idols",
		"FileName": "Virtual Riot - Idols.mp3",
		"ArtistID": 95,
		"AlbumID": 272,
		"TagID": 6,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 573,
		"Title": "Walk Thru Fire",
		"FileName": "Walk Thru Fire.mp3",
		"ArtistID": 88,
		"AlbumID": 298,
		"TagID": 6,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 574,
		"Title": "Without You (feat. Sandro Cavazza)",
		"FileName": "Without You (feat. Sandro Cavazza).mp3",
		"ArtistID": 112,
		"AlbumID": 299,
		"TagID": 6,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 575,
		"Title": "Bloom",
		"FileName": "Bloom.mp3",
		"ArtistID": 113,
		"AlbumID": 300,
		"TagID": 7,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 576,
		"Title": "I Do",
		"FileName": "I Do.mp3",
		"ArtistID": 114,
		"AlbumID": 301,
		"TagID": 7,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 577,
		"Title": "Madilyn Paige - Im Yours - Perfect Two",
		"FileName": "Madilyn Paige - Im Yours - Perfect Two.mp3",
		"ArtistID": 95,
		"AlbumID": 272,
		"TagID": 7,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 578,
		"Title": "Memories",
		"FileName": "Memories.mp3",
		"ArtistID": 115,
		"AlbumID": 302,
		"TagID": 7,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 579,
		"Title": "Nightcore - Hometown Smile",
		"FileName": "Nightcore - Hometown Smile.mp3",
		"ArtistID": 100,
		"AlbumID": 278,
		"TagID": 7,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 580,
		"Title": "Nightcore - I See Your Monsters",
		"FileName": "Nightcore - I See Your Monsters.mp3",
		"ArtistID": 100,
		"AlbumID": 278,
		"TagID": 7,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 581,
		"Title": "Nightcore - If I Die Young",
		"FileName": "Nightcore - If I Die Young.mp3",
		"ArtistID": 100,
		"AlbumID": 278,
		"TagID": 7,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 582,
		"Title": "Nightcore - Let Me Love You",
		"FileName": "Nightcore - Let Me Love You.mp3",
		"ArtistID": 100,
		"AlbumID": 278,
		"TagID": 7,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 583,
		"Title": "Nightcore - Locked Away",
		"FileName": "Nightcore - Locked Away.mp3",
		"ArtistID": 100,
		"AlbumID": 278,
		"TagID": 7,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 584,
		"Title": "Nightcore - Mine",
		"FileName": "Nightcore - Mine.mp3",
		"ArtistID": 100,
		"AlbumID": 278,
		"TagID": 7,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 585,
		"Title": "Nightcore - New Day",
		"FileName": "Nightcore - New Day.mp3",
		"ArtistID": 100,
		"AlbumID": 278,
		"TagID": 7,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 586,
		"Title": "Nightcore - Sakura",
		"FileName": "Nightcore - Sakura.mp3",
		"ArtistID": 100,
		"AlbumID": 278,
		"TagID": 7,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 587,
		"Title": "Nightcore - Say I Love You",
		"FileName": "Nightcore - Say I Love You.mp3",
		"ArtistID": 100,
		"AlbumID": 278,
		"TagID": 7,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 588,
		"Title": "Nightcore - Still Here",
		"FileName": "Nightcore - Still Here.mp3",
		"ArtistID": 100,
		"AlbumID": 278,
		"TagID": 7,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 589,
		"Title": "Nightcore - Try",
		"FileName": "Nightcore - Try.mp3",
		"ArtistID": 100,
		"AlbumID": 278,
		"TagID": 7,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 590,
		"Title": "Nightcore - Where Is The Love",
		"FileName": "Nightcore - Where Is The Love.mp3",
		"ArtistID": 100,
		"AlbumID": 278,
		"TagID": 7,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 591,
		"Title": "One Call Away",
		"FileName": "One Call Away.mp3",
		"ArtistID": 116,
		"AlbumID": 303,
		"TagID": 7,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 592,
		"Title": "We Dont Talk Anymore (feat. Selena Gomez)",
		"FileName": "We Dont Talk Anymore.mp3",
		"ArtistID": 116,
		"AlbumID": 303,
		"TagID": 7,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 593,
		"Title": "All Falls Down (feat. Juliander)",
		"FileName": "All Falls Down (feat. Juliander).mp3",
		"ArtistID": 15,
		"AlbumID": 304,
		"TagID": 8,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 594,
		"Title": "Alone, Pt. II",
		"FileName": "Alone, Pt. II.mp3",
		"ArtistID": 15,
		"AlbumID": 305,
		"TagID": 8,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 595,
		"Title": "Alone",
		"FileName": "Alone.mp3",
		"ArtistID": 15,
		"AlbumID": 306,
		"TagID": 8,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 596,
		"Title": "Attention",
		"FileName": "Attention.mp3",
		"ArtistID": 116,
		"AlbumID": 307,
		"TagID": 8,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 597,
		"Title": "Beautiful Creatures (feat. MAX)",
		"FileName": "Beautiful Creatures (feat. MAX).mp3",
		"ArtistID": 117,
		"AlbumID": 308,
		"TagID": 8,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 598,
		"Title": "By My Side",
		"FileName": "By My Side.mp3",
		"ArtistID": 118,
		"AlbumID": 309,
		"TagID": 8,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 599,
		"Title": "Bye Bye (feat. Ivy Adara)",
		"FileName": "Bye Bye.mp3",
		"ArtistID": 90,
		"AlbumID": 310,
		"TagID": 8,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 600,
		"Title": "Carousel",
		"FileName": "Carousel.mp3",
		"ArtistID": 118,
		"AlbumID": 309,
		"TagID": 8,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 601,
		"Title": "Daily (feat. Jon Becker)",
		"FileName": "Daily (feat. Jon Becker).mp3",
		"ArtistID": 119,
		"AlbumID": 311,
		"TagID": 8,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 602,
		"Title": "Dangerous",
		"FileName": "Dangerous.mp3",
		"ArtistID": 118,
		"AlbumID": 309,
		"TagID": 8,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 603,
		"Title": "Danza Kuduro",
		"FileName": "Danza Kuduro.mp3",
		"ArtistID": 120,
		"AlbumID": 312,
		"TagID": 8,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 604,
		"Title": "Darkside",
		"FileName": "Darkside.mp3",
		"ArtistID": 15,
		"AlbumID": 313,
		"TagID": 8,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 605,
		"Title": "Despacito",
		"FileName": "Despacito.mp3",
		"ArtistID": 121,
		"AlbumID": 314,
		"TagID": 8,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 606,
		"Title": "Diamond Heart",
		"FileName": "Diamond Heart.mp3",
		"ArtistID": 15,
		"AlbumID": 315,
		"TagID": 8,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 607,
		"Title": "Different World (feat. CORSAK)",
		"FileName": "Different World (feat. CORSAK).mp3",
		"ArtistID": 15,
		"AlbumID": 316,
		"TagID": 8,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 608,
		"Title": "Drive My Car",
		"FileName": "Drive My Car.mp3",
		"ArtistID": 118,
		"AlbumID": 309,
		"TagID": 8,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 609,
		"Title": "Ecstasy",
		"FileName": "Ecstasy.mp3",
		"ArtistID": 118,
		"AlbumID": 309,
		"TagID": 8,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 610,
		"Title": "Faded",
		"FileName": "Faded.mp3",
		"ArtistID": 15,
		"AlbumID": 317,
		"TagID": 8,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 611,
		"Title": "Fading",
		"FileName": "Fading.mp3",
		"ArtistID": 122,
		"AlbumID": 318,
		"TagID": 8,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 612,
		"Title": "Fake A Smile",
		"FileName": "Fake A Smile.mp3",
		"ArtistID": 15,
		"AlbumID": 319,
		"TagID": 8,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 613,
		"Title": "Fight",
		"FileName": "Fight.mp3",
		"ArtistID": 118,
		"AlbumID": 309,
		"TagID": 8,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 614,
		"Title": "Forever Young",
		"FileName": "Forever Young.mp3",
		"ArtistID": 123,
		"AlbumID": 320,
		"TagID": 8,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 615,
		"Title": "Frozen",
		"FileName": "Frozen.mp3",
		"ArtistID": 118,
		"AlbumID": 309,
		"TagID": 8,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 616,
		"Title": "Give Me Your Love",
		"FileName": "Give Me Your Love.mp3",
		"ArtistID": 118,
		"AlbumID": 309,
		"TagID": 8,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 617,
		"Title": "Heading Home",
		"FileName": "Heading Home.mp3",
		"ArtistID": 15,
		"AlbumID": 321,
		"TagID": 8,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 618,
		"Title": "Headlights (feat. KIDDO)",
		"FileName": "Headlights.mp3",
		"ArtistID": 15,
		"AlbumID": 322,
		"TagID": 8,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 619,
		"Title": "Hello World",
		"FileName": "Hello World.mp3",
		"ArtistID": 15,
		"AlbumID": 323,
		"TagID": 8,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 620,
		"Title": "Hypnotized",
		"FileName": "Hypnotized.mp3",
		"ArtistID": 118,
		"AlbumID": 309,
		"TagID": 8,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 621,
		"Title": "I Took A Pill In Ibiza - Seeb Remix",
		"FileName": "I Took A Pill In Ibiza - Seeb Remix.mp3",
		"ArtistID": 124,
		"AlbumID": 324,
		"TagID": 8,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 622,
		"Title": "Just For A Moment (feat. Iselin)",
		"FileName": "Just For A Moment.mp3",
		"ArtistID": 90,
		"AlbumID": 310,
		"TagID": 8,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 623,
		"Title": "Kids in Love",
		"FileName": "Kids in Love.mp3",
		"ArtistID": 118,
		"AlbumID": 309,
		"TagID": 8,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 624,
		"Title": "Kings & Queens",
		"FileName": "Kings & Queens.mp3",
		"ArtistID": 125,
		"AlbumID": 325,
		"TagID": 8,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 625,
		"Title": "Legends Never Die",
		"FileName": "Legends Never Die.mp3",
		"ArtistID": 16,
		"AlbumID": 326,
		"TagID": 8,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 626,
		"Title": "Lily",
		"FileName": "Lily.mp3",
		"ArtistID": 15,
		"AlbumID": 327,
		"TagID": 8,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 627,
		"Title": "Love How It Hurts (feat. Tina Stachowiak)",
		"FileName": "Love How It Hurts (feat. Tina Stachowiak).mp3",
		"ArtistID": 126,
		"AlbumID": 328,
		"TagID": 8,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 628,
		"Title": "Maps",
		"FileName": "Maps.mp3",
		"ArtistID": 115,
		"AlbumID": 329,
		"TagID": 8,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 629,
		"Title": "Marry You",
		"FileName": "Marry You.mp3",
		"ArtistID": 127,
		"AlbumID": 330,
		"TagID": 8,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 630,
		"Title": "Meant To Be",
		"FileName": "Meant To Be.mp3",
		"ArtistID": 128,
		"AlbumID": 331,
		"TagID": 8,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 631,
		"Title": "Mermaids",
		"FileName": "Mermaids.mp3",
		"ArtistID": 118,
		"AlbumID": 309,
		"TagID": 8,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 632,
		"Title": "Miracles (feat. Tina Stachowiak)",
		"FileName": "Miracles (feat. Tina Stachowiak).mp3",
		"ArtistID": 126,
		"AlbumID": 332,
		"TagID": 8,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 633,
		"Title": "Next To Me (feat. Tina Stachowiak)",
		"FileName": "Next To Me (feat. Tina Stachowiak).mp3",
		"ArtistID": 126,
		"AlbumID": 333,
		"TagID": 8,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 634,
		"Title": "Nightcore - Beautiful Creatures",
		"FileName": "Nightcore - Beautiful Creatures.mp3",
		"ArtistID": 100,
		"AlbumID": 278,
		"TagID": 8,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 635,
		"Title": "Nightcore - Castle On The Hill",
		"FileName": "Nightcore - Castle On The Hill.mp3",
		"ArtistID": 100,
		"AlbumID": 278,
		"TagID": 8,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 636,
		"Title": "Nightcore - Fire",
		"FileName": "Nightcore - Fire.mp3",
		"ArtistID": 100,
		"AlbumID": 278,
		"TagID": 8,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 637,
		"Title": "Nightcore - Fireflies",
		"FileName": "Nightcore - Fireflies.mp3",
		"ArtistID": 100,
		"AlbumID": 278,
		"TagID": 8,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 638,
		"Title": "Nightcore - Lights",
		"FileName": "Nightcore - Lights.mp3",
		"ArtistID": 100,
		"AlbumID": 278,
		"TagID": 8,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 639,
		"Title": "Nightcore - Like A Ricochet",
		"FileName": "Nightcore - Like A Ricochet.mp3",
		"ArtistID": 100,
		"AlbumID": 278,
		"TagID": 8,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 640,
		"Title": "Nightcore - Move Like Jagger",
		"FileName": "Nightcore - Move Like Jagger.mp3",
		"ArtistID": 100,
		"AlbumID": 278,
		"TagID": 8,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 641,
		"Title": "Nightcore - No Friends",
		"FileName": "Nightcore - No Friends.mp3",
		"ArtistID": 100,
		"AlbumID": 278,
		"TagID": 8,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 642,
		"Title": "Nightcore - One Last Time",
		"FileName": "Nightcore - One Last Time.mp3",
		"ArtistID": 100,
		"AlbumID": 278,
		"TagID": 8,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 643,
		"Title": "Nightcore - Rather Be",
		"FileName": "Nightcore - Rather Be.mp3",
		"ArtistID": 100,
		"AlbumID": 278,
		"TagID": 8,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 644,
		"Title": "Nightcore - Remember When",
		"FileName": "Nightcore - Remember When.mp3",
		"ArtistID": 100,
		"AlbumID": 278,
		"TagID": 8,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 645,
		"Title": "Nightcore - Superheroes",
		"FileName": "Nightcore - Superheroes.mp3",
		"ArtistID": 100,
		"AlbumID": 278,
		"TagID": 8,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 646,
		"Title": "Nightcore - We Should Start Right Now",
		"FileName": "Nightcore - We Should Start Right Now.mp3",
		"ArtistID": 100,
		"AlbumID": 278,
		"TagID": 8,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 647,
		"Title": "Ocean",
		"FileName": "Ocean.mp3",
		"ArtistID": 118,
		"AlbumID": 309,
		"TagID": 8,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 648,
		"Title": "On My Way",
		"FileName": "On My Way.mp3",
		"ArtistID": 15,
		"AlbumID": 334,
		"TagID": 8,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 649,
		"Title": "Payphone",
		"FileName": "Payphone.mp3",
		"ArtistID": 115,
		"AlbumID": 335,
		"TagID": 8,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 650,
		"Title": "Post Malone (feat. RANI)",
		"FileName": "Post Malone.mp3",
		"ArtistID": 129,
		"AlbumID": 336,
		"TagID": 8,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 651,
		"Title": "PS5 (with TOMORROW X TOGETHER & Alan Walker)",
		"FileName": "PS5.mp3",
		"ArtistID": 15,
		"AlbumID": 337,
		"TagID": 8,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 652,
		"Title": "Rather Be (feat. Jess Glynne)",
		"FileName": "Rather Be (feat. Jess Glynne).mp3",
		"ArtistID": 130,
		"AlbumID": 338,
		"TagID": 8,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 653,
		"Title": "Rendezvous",
		"FileName": "Rendezvous.mp3",
		"ArtistID": 118,
		"AlbumID": 309,
		"TagID": 8,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 654,
		"Title": "Rockabye (feat. Sean Paul & Anne-Marie)",
		"FileName": "Rockabye (feat. Sean Paul & Anne-Marie).mp3",
		"ArtistID": 130,
		"AlbumID": 339,
		"TagID": 8,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 655,
		"Title": "Sad Story (Out Of Luck)",
		"FileName": "Sad Story (Out Of Luck).mp3",
		"ArtistID": 131,
		"AlbumID": 340,
		"TagID": 8,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 656,
		"Title": "Salt",
		"FileName": "Salt.mp3",
		"ArtistID": 125,
		"AlbumID": 325,
		"TagID": 8,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 657,
		"Title": "Save Me",
		"FileName": "Save Me.mp3",
		"ArtistID": 118,
		"AlbumID": 309,
		"TagID": 8,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 658,
		"Title": "Seventeen",
		"FileName": "Seventeen.mp3",
		"ArtistID": 118,
		"AlbumID": 309,
		"TagID": 8,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 659,
		"Title": "Señorita",
		"FileName": "Señorita.mp3",
		"ArtistID": 132,
		"AlbumID": 341,
		"TagID": 8,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 660,
		"Title": "Shelter",
		"FileName": "Shelter.mp3",
		"ArtistID": 133,
		"AlbumID": 342,
		"TagID": 8,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 661,
		"Title": "Shut Up",
		"FileName": "Shut Up.mp3",
		"ArtistID": 15,
		"AlbumID": 323,
		"TagID": 8,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 662,
		"Title": "Sign",
		"FileName": "Sign.mp3",
		"ArtistID": 118,
		"AlbumID": 309,
		"TagID": 8,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 663,
		"Title": "Sing Me to Sleep",
		"FileName": "Sing Me to Sleep.mp3",
		"ArtistID": 15,
		"AlbumID": 343,
		"TagID": 8,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 664,
		"Title": "Solo (feat. Demi Lovato)",
		"FileName": "Solo (feat. Demi Lovato).mp3",
		"ArtistID": 130,
		"AlbumID": 339,
		"TagID": 8,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 665,
		"Title": "STAR WALKIN (League of Legends Worlds Anthem)",
		"FileName": "STAR WALKIN (League of Legends Worlds Anthem).mp3",
		"ArtistID": 134,
		"AlbumID": 344,
		"TagID": 8,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 666,
		"Title": "Stay Young",
		"FileName": "Stay Young.mp3",
		"ArtistID": 94,
		"AlbumID": 345,
		"TagID": 8,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 667,
		"Title": "Strongest (Alan Walker Remix)",
		"FileName": "Strongest (Alan Walker Remix).mp3",
		"ArtistID": 15,
		"AlbumID": 346,
		"TagID": 8,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 668,
		"Title": "Sugar",
		"FileName": "Sugar.mp3",
		"ArtistID": 115,
		"AlbumID": 329,
		"TagID": 8,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 669,
		"Title": "Summer Love",
		"FileName": "Summer Love.mp3",
		"ArtistID": 118,
		"AlbumID": 309,
		"TagID": 8,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 670,
		"Title": "Sweet but Psycho",
		"FileName": "Sweet but Psycho.mp3",
		"ArtistID": 125,
		"AlbumID": 325,
		"TagID": 8,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 671,
		"Title": "Symphony (feat. Zara Larsson)",
		"FileName": "Symphony.mp3",
		"ArtistID": 130,
		"AlbumID": 339,
		"TagID": 8,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 672,
		"Title": "Take Me Away",
		"FileName": "Take Me Away.mp3",
		"ArtistID": 118,
		"AlbumID": 309,
		"TagID": 8,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 673,
		"Title": "The Ocean (feat. Shy Martin)",
		"FileName": "The Ocean (feat. Shy Martin).mp3",
		"ArtistID": 94,
		"AlbumID": 347,
		"TagID": 8,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 674,
		"Title": "Tired",
		"FileName": "Tired.mp3",
		"ArtistID": 15,
		"AlbumID": 348,
		"TagID": 8,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 675,
		"Title": "tomorrow tonight",
		"FileName": "Tomorrow tonight.mp3",
		"ArtistID": 135,
		"AlbumID": 349,
		"TagID": 8,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 676,
		"Title": "Unity",
		"FileName": "Unity.mp3",
		"ArtistID": 15,
		"AlbumID": 59,
		"TagID": 8,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 677,
		"Title": "Waiting",
		"FileName": "Waiting.mp3",
		"ArtistID": 88,
		"AlbumID": 350,
		"TagID": 8,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 678,
		"Title": "Way Back",
		"FileName": "Way Back.mp3",
		"ArtistID": 88,
		"AlbumID": 351,
		"TagID": 8,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 679,
		"Title": "What Are You Waiting For",
		"FileName": "What Are You Waiting For.mp3",
		"ArtistID": 118,
		"AlbumID": 309,
		"TagID": 8,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 680,
		"Title": "Without You",
		"FileName": "Without You.mp3",
		"ArtistID": 118,
		"AlbumID": 309,
		"TagID": 8,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 681,
		"Title": "World We Used To Know",
		"FileName": "World We Used To Know.mp3",
		"ArtistID": 15,
		"AlbumID": 352,
		"TagID": 8,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 682,
		"Title": "Worlds Collide",
		"FileName": "Worlds Collide.mp3",
		"ArtistID": 16,
		"AlbumID": 353,
		"TagID": 8,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 683,
		"Title": "Wrap Me In Plastic - Marcus Layton Radio Edit",
		"FileName": "Wrap Me In Plastic - Marcus Layton Radio Edit.mp3",
		"ArtistID": 136,
		"AlbumID": 354,
		"TagID": 8,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 684,
		"Title": "You and I",
		"FileName": "You and I.mp3",
		"ArtistID": 137,
		"AlbumID": 355,
		"TagID": 8,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 685,
		"Title": "For Whom Do We Fight",
		"FileName": "01. For Whom Do We Fight.mp3",
		"ArtistID": 138,
		"AlbumID": 356,
		"TagID": 9,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 686,
		"Title": "Weight of the World (Prelude Version)",
		"FileName": "01. Weight of the World (Prelude Version).mp3",
		"ArtistID": 139,
		"AlbumID": 357,
		"TagID": 9,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 687,
		"Title": "Mourning ~ God Have Mercy, Pt. I",
		"FileName": "01.Mourning - God Have Mercy, Pt. I.mp3",
		"ArtistID": 27,
		"AlbumID": 358,
		"TagID": 9,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 688,
		"Title": "Birth of a Wish",
		"FileName": "02.Birth of a Wish.mp3",
		"ArtistID": 27,
		"AlbumID": 358,
		"TagID": 9,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 689,
		"Title": "Alien Manifestation",
		"FileName": "04. Alien Manifestation.mp3",
		"ArtistID": 140,
		"AlbumID": 359,
		"TagID": 9,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 690,
		"Title": "Emil - Karma",
		"FileName": "04. Emil - Karma.mp3",
		"ArtistID": 141,
		"AlbumID": 360,
		"TagID": 9,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 691,
		"Title": "Nightmare",
		"FileName": "04. Nightmare.mp3",
		"ArtistID": 142,
		"AlbumID": 356,
		"TagID": 9,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 692,
		"Title": "A Beautiful Song",
		"FileName": "05 A Beautiful Song.mp3",
		"ArtistID": 142,
		"AlbumID": 361,
		"TagID": 9,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 693,
		"Title": "Gods Bound by Rules",
		"FileName": "05. Gods Bound by Rules.mp3",
		"ArtistID": 143,
		"AlbumID": 362,
		"TagID": 9,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 694,
		"Title": "Dependent Weakling",
		"FileName": "06. Dependent Weakling.mp3",
		"ArtistID": 144,
		"AlbumID": 359,
		"TagID": 9,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 695,
		"Title": "Shadowlord (from NieR Gestalt & Replicant Orchestral Arrangement Album)\t",
		"FileName": "06. Shadowlord (from NieR Gestalt & Replicant Orchestral Arrangement Album)_.mp3",
		"ArtistID": 144,
		"AlbumID": 363,
		"TagID": 9,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 696,
		"Title": "Bipolar Nightmare",
		"FileName": "06.Bipolar Nightmare.mp3",
		"ArtistID": 27,
		"AlbumID": 358,
		"TagID": 9,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 697,
		"Title": "Song of the Ancients - Atonement",
		"FileName": "07 Song of the Ancients - Atonement.mp3",
		"ArtistID": 142,
		"AlbumID": 361,
		"TagID": 9,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 698,
		"Title": "Deinei - 泥濘",
		"FileName": "07. Deinei - 泥濘.mp3",
		"ArtistID": 142,
		"AlbumID": 364,
		"TagID": 9,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 699,
		"Title": "The Dark Colossus Destroys All",
		"FileName": "08. The Dark Colossus Destroys All.mp3",
		"ArtistID": 145,
		"AlbumID": 362,
		"TagID": 9,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 700,
		"Title": "A Beautiful Song (Ver1.1a)",
		"FileName": "09. A Beautiful Song (Ver1.1a).mp3",
		"ArtistID": 138,
		"AlbumID": 356,
		"TagID": 9,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 701,
		"Title": "Snow in Summer",
		"FileName": "1.01 Snow in Summer.mp3",
		"ArtistID": 146,
		"AlbumID": 365,
		"TagID": 9,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 702,
		"Title": "Snow in Summer (Orchestral Drums)",
		"FileName": "1.02 Snow in Summer (Orchestral Drums).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 9,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 703,
		"Title": "Wretched Weaponry (Dynamic - No Vocals)",
		"FileName": "1.02 Wretched Weaponry (Dynamic - No Vocals).mp3",
		"ArtistID": 142,
		"AlbumID": 367,
		"TagID": 9,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 704,
		"Title": "Blu-bird",
		"FileName": "1.04 Blu-bird..mp3",
		"ArtistID": 142,
		"AlbumID": 368,
		"TagID": 9,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 705,
		"Title": "Blu-bird",
		"FileName": "1.04 Blu-bird.mp3",
		"ArtistID": 148,
		"AlbumID": 365,
		"TagID": 9,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 706,
		"Title": "Snow in Summer (Vocals + Orchestral Drums)",
		"FileName": "1.05 Snow in Summer (Vocals + Orchestral Drums).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 9,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 707,
		"Title": "A Beautiful Song",
		"FileName": "1.08 A Beautiful Song.mp3",
		"ArtistID": 138,
		"AlbumID": 369,
		"TagID": 9,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 708,
		"Title": "Shadowlord - Another Edit Version",
		"FileName": "1.09 Shadowlord - Another Edit Version.mp3",
		"ArtistID": 148,
		"AlbumID": 370,
		"TagID": 9,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 709,
		"Title": "Emil",
		"FileName": "1.10 Emil.mp3",
		"ArtistID": 149,
		"AlbumID": 371,
		"TagID": 9,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 710,
		"Title": "Grandma - Destruction",
		"FileName": "1.10 Grandma - Destruction.mp3",
		"ArtistID": 142,
		"AlbumID": 369,
		"TagID": 9,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 711,
		"Title": "Deep Crimson Foe",
		"FileName": "1.15 Deep Crimson Foe..mp3",
		"ArtistID": 142,
		"AlbumID": 368,
		"TagID": 9,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 712,
		"Title": "Memories of Dust (Dynamic - No Vocals)",
		"FileName": "1.17 Memories of Dust (Dynamic - No Vocals).mp3",
		"ArtistID": 142,
		"AlbumID": 367,
		"TagID": 9,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 713,
		"Title": "Amusement Park (Dynamic - No Vocals)",
		"FileName": "1.22 Amusement Park (Dynamic - No Vocals).mp3",
		"ArtistID": 142,
		"AlbumID": 367,
		"TagID": 9,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 714,
		"Title": "Ruten - 流転",
		"FileName": "10. Ruten - 流転.mp3",
		"ArtistID": 142,
		"AlbumID": 372,
		"TagID": 9,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 715,
		"Title": "Sōheki - 双璧",
		"FileName": "10. Sōheki - 双璧.mp3",
		"ArtistID": 150,
		"AlbumID": 364,
		"TagID": 9,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 716,
		"Title": "The Sound of the End",
		"FileName": "10.The Sound of the End.mp3",
		"ArtistID": 27,
		"AlbumID": 358,
		"TagID": 9,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 717,
		"Title": "Mourning ~ God Have Mercy, Pt. II",
		"FileName": "11.Mourning - God Have Mercy, Pt. II.mp3",
		"ArtistID": 27,
		"AlbumID": 358,
		"TagID": 9,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 718,
		"Title": "Bipolar Nightmare",
		"FileName": "12 Bipolar Nightmare.mp3",
		"ArtistID": 142,
		"AlbumID": 361,
		"TagID": 9,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 719,
		"Title": "Sanctuary Abandoned by the Gods",
		"FileName": "14 Sanctuary Abandoned by the Gods.mp3",
		"ArtistID": 151,
		"AlbumID": 373,
		"TagID": 9,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 720,
		"Title": "Hollow Resonance",
		"FileName": "14. Hollow Resonance.mp3",
		"ArtistID": 142,
		"AlbumID": 356,
		"TagID": 9,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 721,
		"Title": "Shikku - 疾駆",
		"FileName": "14. Shikku - 疾駆.mp3",
		"ArtistID": 142,
		"AlbumID": 372,
		"TagID": 9,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 722,
		"Title": "Cold Blues and Flaming Reds The Chase",
		"FileName": "15 Cold Blues and Flaming Reds The Chase.mp3",
		"ArtistID": 152,
		"AlbumID": 373,
		"TagID": 9,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 723,
		"Title": "Sajin - 砂塵",
		"FileName": "15. Sajin - 砂塵.mp3",
		"ArtistID": 150,
		"AlbumID": 364,
		"TagID": 9,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 724,
		"Title": "Gōgan - 傲岸",
		"FileName": "17. Gōgan - 傲岸.mp3",
		"ArtistID": 142,
		"AlbumID": 372,
		"TagID": 9,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 725,
		"Title": "Barbarous Beast - Magnamalo",
		"FileName": "18 Barbarous Beast - Magnamalo.mp3",
		"ArtistID": 153,
		"AlbumID": 373,
		"TagID": 9,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 726,
		"Title": "Umare Iduru Ishi - Konomama ja Dame",
		"FileName": "2.01 Umare Iduru Ishi - Konomama ja Dame.mp3",
		"ArtistID": 142,
		"AlbumID": 371,
		"TagID": 9,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 727,
		"Title": "End of the Unknown",
		"FileName": "2.03 End of the Unknown.mp3",
		"ArtistID": 142,
		"AlbumID": 369,
		"TagID": 9,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 728,
		"Title": "Umare Iduru Ishi - Kami ni Natta",
		"FileName": "2.03 Umare Iduru Ishi - Kami ni Natta.mp3",
		"ArtistID": 142,
		"AlbumID": 371,
		"TagID": 9,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 729,
		"Title": "Birth of a Wish - Become a God",
		"FileName": "2.04 Birth of a Wish - Become a God.mp3",
		"ArtistID": 142,
		"AlbumID": 371,
		"TagID": 9,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 730,
		"Title": "Deep Crimson Foe",
		"FileName": "2.05 Deep Crimson Foe.mp3",
		"ArtistID": 138,
		"AlbumID": 365,
		"TagID": 9,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 731,
		"Title": "Dark Colossus - Kaiju",
		"FileName": "2.07 Dark Colossus - Kaiju.mp3",
		"ArtistID": 142,
		"AlbumID": 369,
		"TagID": 9,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 732,
		"Title": "Toritsuita Goubyou - Kami ni Natta",
		"FileName": "2.07 Toritsuita Goubyou - Kami ni Natta.mp3",
		"ArtistID": 142,
		"AlbumID": 371,
		"TagID": 9,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 733,
		"Title": "Possessed by Disease - Become a God",
		"FileName": "2.08 Possessed by Disease - Become a God.mp3",
		"ArtistID": 142,
		"AlbumID": 371,
		"TagID": 9,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 734,
		"Title": "Song of the Ancients - Fate",
		"FileName": "2.09 Song of the Ancients - Fate.mp3",
		"ArtistID": 142,
		"AlbumID": 368,
		"TagID": 9,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 735,
		"Title": "Possessed by Disease",
		"FileName": "2.10 Possessed by Disease.mp3",
		"ArtistID": 142,
		"AlbumID": 369,
		"TagID": 9,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 736,
		"Title": "Birth of a Wish (No Vocals)",
		"FileName": "2.11 Birth of a Wish (No Vocals).mp3",
		"ArtistID": 142,
		"AlbumID": 367,
		"TagID": 9,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 737,
		"Title": "The Dark Colossus Destroys All",
		"FileName": "2.11 The Dark Colossus Destroys All.mp3",
		"ArtistID": 146,
		"AlbumID": 365,
		"TagID": 9,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 738,
		"Title": "Birth of a Wish (Vocals)",
		"FileName": "2.13 Birth of a Wish (Vocals).mp3",
		"ArtistID": 142,
		"AlbumID": 367,
		"TagID": 9,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 739,
		"Title": "Emil - Karma",
		"FileName": "2.13 Emil - Karma.mp3",
		"ArtistID": 142,
		"AlbumID": 368,
		"TagID": 9,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 740,
		"Title": "Dependent Weakling",
		"FileName": "2.14 Dependent Weakling.mp3",
		"ArtistID": 148,
		"AlbumID": 369,
		"TagID": 9,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 741,
		"Title": "Emil [Despair] (No Vocals)",
		"FileName": "2.14 Emil (Despair) (No Vocals).mp3",
		"ArtistID": 142,
		"AlbumID": 367,
		"TagID": 9,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 742,
		"Title": "Emil [Despair] (Vocals)",
		"FileName": "2.15 Emil (Despair) (Vocals).mp3",
		"ArtistID": 142,
		"AlbumID": 367,
		"TagID": 9,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 743,
		"Title": "Grandma [Destruction] (No Vocals)",
		"FileName": "2.16 Grandma (Destruction) (No Vocals).mp3",
		"ArtistID": 142,
		"AlbumID": 367,
		"TagID": 9,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 744,
		"Title": "Grandma [Destruction] (Vocals)",
		"FileName": "2.17 Grandma (Destruction) (Vocals).mp3",
		"ArtistID": 142,
		"AlbumID": 367,
		"TagID": 9,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 745,
		"Title": "Bipolar Nightmare (No Vocals)",
		"FileName": "2.19 Bipolar Nightmare (No Vocals).mp3",
		"ArtistID": 142,
		"AlbumID": 367,
		"TagID": 9,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 746,
		"Title": "Bipolar Nightmare (Vocals)",
		"FileName": "2.20 Bipolar Nightmare (Vocals).mp3",
		"ArtistID": 142,
		"AlbumID": 367,
		"TagID": 9,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 747,
		"Title": "Shadowlord - White-note remix",
		"FileName": "2.20 Shadowlord - White-note remix.mp3",
		"ArtistID": 142,
		"AlbumID": 368,
		"TagID": 9,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 748,
		"Title": "War & War (No Vocals)",
		"FileName": "2.22 War & War (No Vocals).mp3",
		"ArtistID": 142,
		"AlbumID": 367,
		"TagID": 9,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 749,
		"Title": "War & War (Vocals)",
		"FileName": "2.23 War & War (Vocals).mp3",
		"ArtistID": 142,
		"AlbumID": 367,
		"TagID": 9,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 750,
		"Title": "A Beautiful Song (No Vocals - Second Phase)",
		"FileName": "2.27 A Beautiful Song (No Vocals - Second Phase).mp3",
		"ArtistID": 142,
		"AlbumID": 367,
		"TagID": 9,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 751,
		"Title": "A Beautiful Song (No Vocals)",
		"FileName": "2.28 A Beautiful Song (No Vocals).mp3",
		"ArtistID": 142,
		"AlbumID": 367,
		"TagID": 9,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 752,
		"Title": "A Beautiful Song (Vocals)",
		"FileName": "2.29 A Beautiful Song (Vocals).mp3",
		"ArtistID": 142,
		"AlbumID": 367,
		"TagID": 9,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 753,
		"Title": "Dark Colossus [Kaiju] (Calm - No Vocals)",
		"FileName": "2.37 Dark Colossus (Kaiju) (Calm - No Vocals).mp3",
		"ArtistID": 142,
		"AlbumID": 367,
		"TagID": 9,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 754,
		"Title": "Dark Colossus [Kaiju] (No Vocals)",
		"FileName": "2.39 Dark Colossus (Kaiju) (No Vocals).mp3",
		"ArtistID": 142,
		"AlbumID": 367,
		"TagID": 9,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 755,
		"Title": "Dependent Weakling (No Vocals)",
		"FileName": "2.43 Dependent Weakling (No Vocals).mp3",
		"ArtistID": 142,
		"AlbumID": 367,
		"TagID": 9,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 756,
		"Title": "Dependent Weakling (Vocals)",
		"FileName": "2.44 Dependent Weakling (Vocals).mp3",
		"ArtistID": 142,
		"AlbumID": 367,
		"TagID": 9,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 757,
		"Title": "Song of the Ancients [Atonement] (No Vocals)",
		"FileName": "2.49 Song of the Ancients (Atonement) (No Vocals).mp3",
		"ArtistID": 142,
		"AlbumID": 367,
		"TagID": 9,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 758,
		"Title": "Song of the Ancients [Atonement] (Vocals)",
		"FileName": "2.50 Song of the Ancients (Atonement) (Vocals).mp3",
		"ArtistID": 142,
		"AlbumID": 367,
		"TagID": 9,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 759,
		"Title": "Alien Manifestation (Dynamic - No Vocals)",
		"FileName": "2.56 Alien Manifestation (Dynamic - No Vocals).mp3",
		"ArtistID": 142,
		"AlbumID": 367,
		"TagID": 9,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 760,
		"Title": "Alien Manifestation (Dynamic - Vocals)",
		"FileName": "2.57 Alien Manifestation (Dynamic - Vocals).mp3",
		"ArtistID": 142,
		"AlbumID": 367,
		"TagID": 9,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 761,
		"Title": "Emil [Karma] (Orchestral + Drums)",
		"FileName": "27.03 Emil (Karma) (Orchestral + Drums).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 9,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 762,
		"Title": "Emil [Karma] (Piano + Drums)",
		"FileName": "27.07 Emil (Karma) (Piano + Drums).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 9,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 763,
		"Title": "Emil [Karma] (Vocals + Orchestral + Drums)",
		"FileName": "27.10 Emil (Karma) (Vocals + Orchestral + Drums).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 9,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 764,
		"Title": "The Dark Colossus Destroys All (Full)",
		"FileName": "29.02 The Dark Colossus Destroys All (Full).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 9,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 765,
		"Title": "The Dark Colossus Destroys All (Orchestral + Drums)",
		"FileName": "29.03 The Dark Colossus Destroys All (Orchestral + Drums).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 9,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 766,
		"Title": "The Dark Colossus Destroys All (Vocals + Orchestral)",
		"FileName": "29.06 The Dark Colossus Destroys All (Vocals + Orchestral).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 9,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 767,
		"Title": "War & War",
		"FileName": "3.02 War & War.mp3",
		"ArtistID": 142,
		"AlbumID": 369,
		"TagID": 9,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 768,
		"Title": "Emil - Despair",
		"FileName": "3.09 Emil - Despair.mp3",
		"ArtistID": 138,
		"AlbumID": 369,
		"TagID": 9,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 769,
		"Title": "Bipolar Nightmare",
		"FileName": "3.13 Bipolar Nightmare.mp3",
		"ArtistID": 138,
		"AlbumID": 369,
		"TagID": 9,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 770,
		"Title": "Deep Crimson Foe (Full)",
		"FileName": "30.01 Deep Crimson Foe (Full).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 9,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 771,
		"Title": "Deep Crimson Foe (Orchestral)",
		"FileName": "30.02 Deep Crimson Foe (Orchestral).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 9,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 772,
		"Title": "Shadowlords Castle (Orchestral + Drums)",
		"FileName": "32.03 Shadowlords Castle (Orchestral + Drums).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 9,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 773,
		"Title": "Shadowlords Castle (Vocals + Orchestral + Drums)",
		"FileName": "32.10 Shadowlords Castle (Vocals + Orchestral + Drums).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 9,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 774,
		"Title": "Shadowlord [Phase 1] (Orchestral + Music Box)",
		"FileName": "33.03 Shadowlord (Phase 1) (Orchestral + Music Box).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 9,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 775,
		"Title": "Shadowlord [Phase 1] (Orchestral + Organ + Music Box)",
		"FileName": "33.04 Shadowlord (Phase 1) (Orchestral + Organ + Music Box).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 9,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 776,
		"Title": "Shadowlord [Phase 1] (Orchestral + Organ)",
		"FileName": "33.05 Shadowlord (Phase 1) (Orchestral + Organ).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 9,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 777,
		"Title": "Shadowlord [Phase 1] (Orchestral)",
		"FileName": "33.06 Shadowlord (Phase 1) (Orchestral).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 9,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 778,
		"Title": "Shadowlord [Phase 2] (Full)",
		"FileName": "34.01 Shadowlord (Phase 2) (Full).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 9,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 779,
		"Title": "Shadowlord [Phase 2] (Orchestral + Organ + Music Box)",
		"FileName": "34.03 Shadowlord (Phase 2) (Orchestral + Organ + Music Box).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 9,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 780,
		"Title": "Shadowlord [Phase 2] (Orchestral + Organ)",
		"FileName": "34.04 Shadowlord (Phase 2) (Orchestral + Organ).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 9,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 781,
		"Title": "Shadowlord [Phase 2] (Vocals + Orchestral + Music Box)",
		"FileName": "34.09 Shadowlord (Phase 2) (Vocals + Orchestral + Music Box).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 9,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 782,
		"Title": "Shadowlord [Phase 2] (Vocals + Orchestral + Organ)",
		"FileName": "34.10 Shadowlord (Phase 2) (Vocals + Orchestral + Organ).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 9,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 783,
		"Title": "Shadowlord [Phase 3] (Full)",
		"FileName": "35.02 Shadowlord (Phase 3) (Full).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 9,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 784,
		"Title": "Fleeting Words [Outsider] (Full)",
		"FileName": "38.01 Fleeting Words (Outsider) (Full).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 9,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 785,
		"Title": "Fleeting Words [Outsider] (Orchestral)",
		"FileName": "38.02 Fleeting Words (Outsider) (Orchestral).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 9,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 786,
		"Title": "Fleeting Words [Outsider] (Vocals)",
		"FileName": "38.03 Fleeting Words (Outsider) (Vocals).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 9,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 787,
		"Title": "MA Attract Gestalt",
		"FileName": "41.01 MA Attract Gestalt.mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 9,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 788,
		"Title": "The Incomplete Stone (Orchestral + Drums)",
		"FileName": "6.03 The Incomplete Stone (Orchestral + Drums).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 9,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 789,
		"Title": "Ai Wo Torimodose",
		"FileName": "Ai Wo Torimodose.mp3",
		"ArtistID": 95,
		"AlbumID": 272,
		"TagID": 9,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 790,
		"Title": "DUEL!!",
		"FileName": "DUEL!!.mp3",
		"ArtistID": 154,
		"AlbumID": 374,
		"TagID": 9,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 791,
		"Title": "Mega Man 4 Opening Sequence Arrangement",
		"FileName": "Mega Man 4 Opening Sequence Arrangement.mp3",
		"ArtistID": 95,
		"AlbumID": 272,
		"TagID": 9,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 792,
		"Title": "Onslaught",
		"FileName": "Onslaught.mp3",
		"ArtistID": 154,
		"AlbumID": 374,
		"TagID": 9,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 793,
		"Title": "City Ruins",
		"FileName": "01 City Ruins.mp3",
		"ArtistID": 142,
		"AlbumID": 361,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 794,
		"Title": "Ashes of Dreams (Emi Evans & JNique Nicole Vocals)",
		"FileName": "01. Ashes of Dreams (Emi Evans & JNique Nicole Vocals).mp3",
		"ArtistID": 145,
		"AlbumID": 375,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 795,
		"Title": "City Ruins",
		"FileName": "01. City Ruins.mp3",
		"ArtistID": 143,
		"AlbumID": 359,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 796,
		"Title": "Kaine - Salvation",
		"FileName": "01. Kainé - Salvation.mp3",
		"ArtistID": 141,
		"AlbumID": 376,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 797,
		"Title": "Kizuna - 姉弟",
		"FileName": "01. Kizuna - 姉弟.mp3",
		"ArtistID": 142,
		"AlbumID": 364,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 798,
		"Title": "Snow in Summer",
		"FileName": "01. Snow in Summer.mp3",
		"ArtistID": 142,
		"AlbumID": 377,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 799,
		"Title": "Song of the Ancients - Devola (from NieR Replicant ver.1.22474487139... Original Soundtrack)",
		"FileName": "01. Song of the Ancients - Devola (from NieR Replicant ver.1.22474487139... Original Soundtrack).mp3",
		"ArtistID": 150,
		"AlbumID": 378,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 800,
		"Title": "Song of the Ancients",
		"FileName": "01. Song of the Ancients.mp3",
		"ArtistID": 138,
		"AlbumID": 379,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 801,
		"Title": "Sunshower (Snow In Summer)",
		"FileName": "01. Sunshower (Snow In Summer).mp3",
		"ArtistID": 155,
		"AlbumID": 380,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 802,
		"Title": "The Prestigious Mask",
		"FileName": "01. The Prestigious Mask.mp3",
		"ArtistID": 140,
		"AlbumID": 381,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 803,
		"Title": "Weight of the World",
		"FileName": "01. Weight of the World.mp3",
		"ArtistID": 156,
		"AlbumID": 382,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 804,
		"Title": "Amusement Park",
		"FileName": "02 Amusement Park.mp3",
		"ArtistID": 142,
		"AlbumID": 361,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 805,
		"Title": "Brave Hunters",
		"FileName": "02 Brave Hunters.mp3",
		"ArtistID": 151,
		"AlbumID": 373,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 806,
		"Title": "Amusement Park",
		"FileName": "02. Amusement Park.mp3",
		"ArtistID": 157,
		"AlbumID": 382,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 807,
		"Title": "Emil - Sacrifice (from NieR Replicant ver.1.22474487139... Original Soundtrack)\t",
		"FileName": "02. Emil - Sacrifice (from NieR Replicant ver.1.22474487139... Original Soundtrack)_.mp3",
		"ArtistID": 148,
		"AlbumID": 383,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 808,
		"Title": "Inori - 祈リ",
		"FileName": "02. Inori - 祈リ.mp3",
		"ArtistID": 142,
		"AlbumID": 372,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 809,
		"Title": "Kainé - Escape (from NieR Replicant ver.1.22474487139... Original Soundtrack)\t",
		"FileName": "02. Kainé - Escape (from NieR Replicant ver.1.22474487139... Original Soundtrack)_.mp3",
		"ArtistID": 138,
		"AlbumID": 384,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 810,
		"Title": "Kainé",
		"FileName": "02. Kainé.mp3",
		"ArtistID": 138,
		"AlbumID": 379,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 811,
		"Title": "Pale Moonlight (Shadowlords Castle-Roar)",
		"FileName": "02. Pale Moonlight (Shadowlord_s Castle_Roar).mp3",
		"ArtistID": 155,
		"AlbumID": 380,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 812,
		"Title": "Peaceful Sleep",
		"FileName": "02. Peaceful Sleep.mp3",
		"ArtistID": 145,
		"AlbumID": 385,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 813,
		"Title": "Song of the Ancients - Popola (from NieR Replicant ver.1.22474487139... Original Soundtrack)",
		"FileName": "02. Song of the Ancients - Popola (from NieR Replicant ver.1.22474487139... Original Soundtrack).mp3",
		"ArtistID": 150,
		"AlbumID": 378,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 814,
		"Title": "Song of the Ancients",
		"FileName": "02. Song of the Ancients.mp3",
		"ArtistID": 144,
		"AlbumID": 386,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 815,
		"Title": "The Girls Memories",
		"FileName": "02. The Girls Memories.mp3",
		"ArtistID": 138,
		"AlbumID": 356,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 816,
		"Title": "Kamuras Song of Purification - Japanese",
		"FileName": "03 Kamuras Song of Purification - Japanese.mp3",
		"ArtistID": 151,
		"AlbumID": 373,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 817,
		"Title": "Emil - Piano Ver. (from NieR Gestalt & Replicant 15 Nightmares & Arrange Tracks）\t",
		"FileName": "03. Emil - Piano Ver. (from NieR Gestalt & Replicant 15 Nightmares & Arrange Tracks）_.mp3",
		"ArtistID": 138,
		"AlbumID": 383,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 818,
		"Title": "Grandma",
		"FileName": "03. Grandma.mp3",
		"ArtistID": 144,
		"AlbumID": 386,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 819,
		"Title": "Hills of Radiant Wind",
		"FileName": "03. Hills of Radiant Wind.mp3",
		"ArtistID": 158,
		"AlbumID": 379,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 820,
		"Title": "Kainé",
		"FileName": "03. Kainé (Concert).mp3",
		"ArtistID": 142,
		"AlbumID": 377,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 821,
		"Title": "Kainé (from Piano Collections Nier Gestalt & Replicant）\t",
		"FileName": "03. Kainé (from Piano Collections Nier Gestalt & Replicant）_.mp3",
		"ArtistID": 138,
		"AlbumID": 384,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 822,
		"Title": "Nightengale (Kainé-Duet Ver.)",
		"FileName": "03. Nightengale (Kain__Duet Ver).mp3",
		"ArtistID": 155,
		"AlbumID": 380,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 823,
		"Title": "Rays of Light",
		"FileName": "03. Rays of Light.mp3",
		"ArtistID": 142,
		"AlbumID": 356,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 824,
		"Title": "Snow in Summer (from Piano Collections Nier Gestalt & Replicant)\t",
		"FileName": "03. Snow in Summer (from Piano Collections Nier Gestalt & Replicant)_.mp3",
		"ArtistID": 138,
		"AlbumID": 363,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 825,
		"Title": "Song of the Ancients - Dev",
		"FileName": "03. Song of the Ancients - Devola.mp3",
		"ArtistID": 141,
		"AlbumID": 376,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 826,
		"Title": "Song of the Ancients - Hollow Dreams (from NieR Replicant ver.1.22474487139... Original Soundtrack)",
		"FileName": "03. Song of the Ancients - Hollow Dreams (from NieR Replicant ver.1.22474487139... Original Soundtrack).mp3",
		"ArtistID": 138,
		"AlbumID": 378,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 827,
		"Title": "Yoi no Tobari - 宵ノ帳",
		"FileName": "03. Yoi no Tobari - 宵ノ帳.mp3",
		"ArtistID": 142,
		"AlbumID": 364,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 828,
		"Title": "Brave Hunters - Japanese",
		"FileName": "04 Brave Hunters - Japanese.mp3",
		"ArtistID": 151,
		"AlbumID": 373,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 829,
		"Title": "Kamuras Song of Purification",
		"FileName": "04 Kamuras Song of Purification.mp3",
		"ArtistID": 151,
		"AlbumID": 373,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 830,
		"Title": "Peaceful Sleep",
		"FileName": "04 Peaceful Sleep.mp3",
		"ArtistID": 142,
		"AlbumID": 361,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 831,
		"Title": "City Ruins",
		"FileName": "04. City Ruins.mp3",
		"ArtistID": 159,
		"AlbumID": 382,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 832,
		"Title": "Emil (from Piano Collections Nier Gestalt & Replicant)\t",
		"FileName": "04. Emil (from Piano Collections Nier Gestalt & Replicant)_.mp3",
		"ArtistID": 138,
		"AlbumID": 383,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 833,
		"Title": "Emil",
		"FileName": "04. Emil.mp3",
		"ArtistID": 143,
		"AlbumID": 362,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 834,
		"Title": "Kainé - Oboe and Bassoon Ensemble Ver.\t",
		"FileName": "04. Kainé - Oboe and Bassoon Ensemble Ver._.mp3",
		"ArtistID": 144,
		"AlbumID": 384,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 835,
		"Title": "Kaze no Koe - 風ノ声",
		"FileName": "04. Kaze no Koe - 風ノ声.mp3",
		"ArtistID": 142,
		"AlbumID": 372,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 836,
		"Title": "Madoromi - 微睡",
		"FileName": "04. Madoromi - 微睡.mp3",
		"ArtistID": 150,
		"AlbumID": 364,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 837,
		"Title": "Memories (Song Of The Ancients-Devola)",
		"FileName": "04. Memories (Song Of The Ancients_Devola).mp3",
		"ArtistID": 155,
		"AlbumID": 380,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 838,
		"Title": "Shadowlord (from Piano Collections Nier Gestalt & Replicant）\t",
		"FileName": "04. Shadowlord (from Piano Collections Nier Gestalt & Replicant）_.mp3",
		"ArtistID": 138,
		"AlbumID": 363,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 839,
		"Title": "Snow in Summer",
		"FileName": "04. Snow in Summer.mp3",
		"ArtistID": 138,
		"AlbumID": 379,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 840,
		"Title": "Song of the Ancients - Devola",
		"FileName": "04. Song of the Ancients - Devola.mp3",
		"ArtistID": 142,
		"AlbumID": 377,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 841,
		"Title": "Voice of no Return",
		"FileName": "04. Voice of no Return..mp3",
		"ArtistID": 160,
		"AlbumID": 381,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 842,
		"Title": "Peaceful Sleep",
		"FileName": "04.Peaceful Sleep.mp3",
		"ArtistID": 27,
		"AlbumID": 358,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 843,
		"Title": "Best Buddies - Japanese",
		"FileName": "05 Best Buddies - Japanese.mp3",
		"ArtistID": 151,
		"AlbumID": 373,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 844,
		"Title": "Best Buddies",
		"FileName": "05 Best Buddies.mp3",
		"ArtistID": 151,
		"AlbumID": 373,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 845,
		"Title": "Kamuras Song of Purification - Piano Version",
		"FileName": "05 Kamuras Song of Purification - Piano Version.mp3",
		"ArtistID": 151,
		"AlbumID": 387,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 846,
		"Title": "A Heart Not Forgotten (Emil-Karma)",
		"FileName": "05. A Heart Not Forgotten (Emil_Karma).mp3",
		"ArtistID": 155,
		"AlbumID": 380,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 847,
		"Title": "Dreams of Mechanical Puppets",
		"FileName": "05. Dreams of Mechanical Puppets.mp3",
		"ArtistID": 138,
		"AlbumID": 356,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 848,
		"Title": "Emil - Recorder Ensemble Ver.\t",
		"FileName": "05. Emil - Recorder Ensemble Ver._.mp3",
		"ArtistID": 161,
		"AlbumID": 383,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 849,
		"Title": "Emil",
		"FileName": "05. Emil.mp3",
		"ArtistID": 138,
		"AlbumID": 379,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 850,
		"Title": "Kainé (Addendum version)",
		"FileName": "05. Kainé (Addendum version).mp3",
		"ArtistID": 144,
		"AlbumID": 375,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 851,
		"Title": "Kainé - Duet Ver. (from NieR Gestalt & Replicant 15 Nightmares & Arrange Tracks)\t",
		"FileName": "05. Kainé - Duet Ver. (from NieR Gestalt & Replicant 15 Nightmares & Arrange Tracks)_.mp3",
		"ArtistID": 138,
		"AlbumID": 384,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 852,
		"Title": "Kainé",
		"FileName": "05. Kainé.mp3",
		"ArtistID": 144,
		"AlbumID": 386,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 853,
		"Title": "Repose",
		"FileName": "05. Repose.mp3",
		"ArtistID": 142,
		"AlbumID": 377,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 854,
		"Title": "Shadowlord - Sax Ensemble Ver.\t",
		"FileName": "05. Shadowlord - Sax Ensemble Ver._.mp3",
		"ArtistID": 162,
		"AlbumID": 363,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 855,
		"Title": "Song of the Ancients - Mandolin Ensemble Ver.",
		"FileName": "05. Song of the Ancients - Mandolin Ensemble Ver..mp3",
		"ArtistID": 163,
		"AlbumID": 378,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 856,
		"Title": "Forest Kingdom",
		"FileName": "05.Forest Kingdom.mp3",
		"ArtistID": 27,
		"AlbumID": 358,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 857,
		"Title": "Brave Hunters - Piano Version",
		"FileName": "06 Brave Hunters - Piano Version.mp3",
		"ArtistID": 151,
		"AlbumID": 387,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 858,
		"Title": "Emil - Piano Ver.",
		"FileName": "06 Emil - Piano Ver.mp3",
		"ArtistID": 138,
		"AlbumID": 388,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 859,
		"Title": "Vague Hope",
		"FileName": "06 Vague Hope.mp3",
		"ArtistID": 142,
		"AlbumID": 361,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 860,
		"Title": "City Ruins (Addendum version)",
		"FileName": "06. City Ruins (Addendum version).mp3",
		"ArtistID": 144,
		"AlbumID": 375,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 861,
		"Title": "Emil (from NieR Gestalt & Replicant Orchestral Arrangement Album)\t",
		"FileName": "06. Emil (from NieR Gestalt & Replicant Orchestral Arrangement Album)_.mp3",
		"ArtistID": 143,
		"AlbumID": 383,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 862,
		"Title": "Grandma",
		"FileName": "06. Grandma.mp3",
		"ArtistID": 158,
		"AlbumID": 379,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 863,
		"Title": "Peaceful Sleep",
		"FileName": "06. Peaceful Sleep.mp3",
		"ArtistID": 164,
		"AlbumID": 382,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 864,
		"Title": "Song of the Ancients (from Piano Collections Nier Gestalt & Replicant)",
		"FileName": "06. Song of the Ancients (from Piano Collections Nier Gestalt & Replicant).mp3",
		"ArtistID": 138,
		"AlbumID": 378,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 865,
		"Title": "Tōriame - 通リ雨",
		"FileName": "06. Tōriame - 通リ雨.mp3",
		"ArtistID": 150,
		"AlbumID": 372,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 866,
		"Title": "Kaine - Duet Ver.",
		"FileName": "07 Kaine - Duet Ver.mp3",
		"ArtistID": 138,
		"AlbumID": 388,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 867,
		"Title": "Copied City",
		"FileName": "07. Copied City.mp3",
		"ArtistID": 165,
		"AlbumID": 382,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 868,
		"Title": "Fleeting Words",
		"FileName": "07. Fleeting Words.mp3",
		"ArtistID": 144,
		"AlbumID": 386,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 869,
		"Title": "Kainé (from NieR Orchestral Arrangement Album - Addendum)\t",
		"FileName": "07. Kainé (from NieR Orchestral Arrangement Album - Addendum)_.mp3",
		"ArtistID": 144,
		"AlbumID": 384,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 870,
		"Title": "Repose",
		"FileName": "07. Repose.mp3",
		"ArtistID": 138,
		"AlbumID": 379,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 871,
		"Title": "Memories of Dust",
		"FileName": "07.Memories of Dust.mp3",
		"ArtistID": 27,
		"AlbumID": 358,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 872,
		"Title": "Copied City",
		"FileName": "08. Copied City.mp3",
		"ArtistID": 144,
		"AlbumID": 375,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 873,
		"Title": "Emil",
		"FileName": "08. Emil.mp3",
		"ArtistID": 144,
		"AlbumID": 386,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 874,
		"Title": "Flower (Yonah-Piano ver.)",
		"FileName": "08. Flower (Yonah_Piano ver.).mp3",
		"ArtistID": 155,
		"AlbumID": 380,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 875,
		"Title": "Mourning",
		"FileName": "08. Mourning.mp3",
		"ArtistID": 145,
		"AlbumID": 359,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 876,
		"Title": "Voice of no Return",
		"FileName": "08. Voice of no Return.mp3",
		"ArtistID": 159,
		"AlbumID": 382,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 877,
		"Title": "Song of the Ancients - Piano Ver.",
		"FileName": "09 Song of the Ancients - Piano Ver.mp3",
		"ArtistID": 138,
		"AlbumID": 388,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 878,
		"Title": "The Sound of the End",
		"FileName": "09 The Sound of the End.mp3",
		"ArtistID": 142,
		"AlbumID": 361,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 879,
		"Title": "Emil",
		"FileName": "09. Emil.mp3",
		"ArtistID": 142,
		"AlbumID": 377,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 880,
		"Title": "Mizukagami - 水鏡",
		"FileName": "09. Mizukagami - 水鏡.mp3",
		"ArtistID": 142,
		"AlbumID": 364,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 881,
		"Title": "Veil (The Prestigious Mask)",
		"FileName": "09. Veil (The Prestigious Mask).mp3",
		"ArtistID": 155,
		"AlbumID": 380,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 882,
		"Title": "Voice of NO Return",
		"FileName": "09.Voice of NO Return.mp3",
		"ArtistID": 27,
		"AlbumID": 358,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 883,
		"Title": "Significance",
		"FileName": "1.01 Significance.mp3",
		"ArtistID": 142,
		"AlbumID": 369,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 884,
		"Title": "City Ruins - Rays of Light",
		"FileName": "1.02 City Ruins - Rays of Light.mp3",
		"ArtistID": 142,
		"AlbumID": 369,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 885,
		"Title": "Hills of Radiant Winds - Another Edit Version",
		"FileName": "1.02 Hills of Radiant Winds - Another Edit Version.mp3",
		"ArtistID": 166,
		"AlbumID": 370,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 886,
		"Title": "Peaceful Sleep",
		"FileName": "1.02 Peaceful Sleep.mp3",
		"ArtistID": 167,
		"AlbumID": 371,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 887,
		"Title": "Peaceful Sleep",
		"FileName": "1.03 Peaceful Sleep.mp3",
		"ArtistID": 142,
		"AlbumID": 369,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 888,
		"Title": "Snow in Summer (Vocals + Ambient)",
		"FileName": "1.04 Snow in Summer (Vocals + Ambient).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 889,
		"Title": "Song of the Ancients - Popola",
		"FileName": "1.05 Song of the Ancients - Popola.mp3",
		"ArtistID": 150,
		"AlbumID": 365,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 890,
		"Title": "Grandma",
		"FileName": "1.06 Grandma.mp3",
		"ArtistID": 142,
		"AlbumID": 368,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 891,
		"Title": "The Color of Depression",
		"FileName": "1.06 The Color of Depression.mp3",
		"ArtistID": 142,
		"AlbumID": 369,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 892,
		"Title": "Amusement Park",
		"FileName": "1.07 Amusement Park.mp3",
		"ArtistID": 138,
		"AlbumID": 369,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 893,
		"Title": "Fortress of Lies (Vocals)",
		"FileName": "1.07 Fortress of Lies (Vocals).mp3",
		"ArtistID": 142,
		"AlbumID": 367,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 894,
		"Title": "Grandma",
		"FileName": "1.07 Grandma.mp3",
		"ArtistID": 138,
		"AlbumID": 365,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 895,
		"Title": "Snow in Summer (Vocals)",
		"FileName": "1.07 Snow in Summer (Vocals).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 896,
		"Title": "Song of the Ancients - Devola",
		"FileName": "1.07 Song of the Ancients - Devola.mp3",
		"ArtistID": 142,
		"AlbumID": 368,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 897,
		"Title": "Vague Hope",
		"FileName": "1.08 Vague Hope.mp3",
		"ArtistID": 168,
		"AlbumID": 371,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 898,
		"Title": "Voice of No Return - Guitar",
		"FileName": "1.09 Voice of No Return - Guitar.mp3",
		"ArtistID": 142,
		"AlbumID": 369,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 899,
		"Title": "Yonah - Pluck Ver.",
		"FileName": "1.09 Yonah - Pluck Ver..mp3",
		"ArtistID": 138,
		"AlbumID": 365,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 900,
		"Title": "Analogous Memories - Another Edit Version",
		"FileName": "1.10 Analogous Memories - Another Edit Version.mp3",
		"ArtistID": 142,
		"AlbumID": 370,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 901,
		"Title": "City Ruins [Rays of Light] (Medium - No Vocals)",
		"FileName": "1.10 City Ruins (Rays of Light) (Medium - No Vocals).mp3",
		"ArtistID": 142,
		"AlbumID": 367,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 902,
		"Title": "Faltering Prayer - Dawn Breeze",
		"FileName": "1.11 Faltering Prayer - Dawn Breeze.mp3",
		"ArtistID": 142,
		"AlbumID": 369,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 903,
		"Title": "Weight of the World",
		"FileName": "1.12 Weight of the World.mp3",
		"ArtistID": 169,
		"AlbumID": 371,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 904,
		"Title": "Treasured Times",
		"FileName": "1.13 Treasured Times.mp3",
		"ArtistID": 138,
		"AlbumID": 369,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 905,
		"Title": "Dispossession - Piano Ver.",
		"FileName": "1.14 Dispossession - Piano Ver..mp3",
		"ArtistID": 148,
		"AlbumID": 365,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 906,
		"Title": "Peaceful Sleep (No Vocals)",
		"FileName": "1.14 Peaceful Sleep (No Vocals).mp3",
		"ArtistID": 142,
		"AlbumID": 367,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 907,
		"Title": "The Ultimate Weapon",
		"FileName": "1.14 The Ultimate Weapon.mp3",
		"ArtistID": 142,
		"AlbumID": 368,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 908,
		"Title": "Vague Hope - Cold Rain",
		"FileName": "1.14 Vague Hope - Cold Rain.mp3",
		"ArtistID": 138,
		"AlbumID": 369,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 909,
		"Title": "Ashes of Dreams - New",
		"FileName": "1.15 Ashes of Dreams - New.mp3",
		"ArtistID": 146,
		"AlbumID": 365,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 910,
		"Title": "Peaceful Sleep (Vocals)",
		"FileName": "1.15 Peaceful Sleep (Vocals).mp3",
		"ArtistID": 142,
		"AlbumID": 367,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 911,
		"Title": "Weight of the World English Version",
		"FileName": "1.15 Weight of the World English Version.mp3",
		"ArtistID": 142,
		"AlbumID": 369,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 912,
		"Title": "Dispossession - Piano Ver.",
		"FileName": "1.16 Dispossession - Piano Ver..mp3",
		"ArtistID": 142,
		"AlbumID": 368,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 913,
		"Title": "Dispossession - Strings Ver.",
		"FileName": "1.17 Dispossession - Strings Ver..mp3",
		"ArtistID": 142,
		"AlbumID": 368,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 914,
		"Title": "Memories of Dust (Medium - No Vocals)",
		"FileName": "1.18 Memories of Dust (Medium - No Vocals).mp3",
		"ArtistID": 142,
		"AlbumID": 367,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 915,
		"Title": "Memories of Dust (VOCALS ONLY)",
		"FileName": "1.20 Memories of Dust (VOCALS ONLY).mp3",
		"ArtistID": 142,
		"AlbumID": 367,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 916,
		"Title": "Yonah - Piano Ver.",
		"FileName": "1.20 Yonah - Piano Ver..mp3",
		"ArtistID": 142,
		"AlbumID": 368,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 917,
		"Title": "Yonah - Strings Ver.",
		"FileName": "1.21 Yonah - Strings Ver..mp3",
		"ArtistID": 142,
		"AlbumID": 368,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 918,
		"Title": "Amusement Park (Medium - No Vocals)",
		"FileName": "1.23 Amusement Park (Medium - No Vocals).mp3",
		"ArtistID": 142,
		"AlbumID": 367,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 919,
		"Title": "Pascal (No Vocals)",
		"FileName": "1.26 Pascal (No Vocals).mp3",
		"ArtistID": 142,
		"AlbumID": 367,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 920,
		"Title": "Pascal (Vocals)",
		"FileName": "1.27 Pascal (Vocals).mp3",
		"ArtistID": 142,
		"AlbumID": 367,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 921,
		"Title": "City Ruins [Shade] (Medium - No Vocals)",
		"FileName": "1.29 City Ruins (Shade) (Medium - No Vocals).mp3",
		"ArtistID": 142,
		"AlbumID": 367,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 922,
		"Title": "Forest Kingdom (Medium - No Vocals)",
		"FileName": "1.34 Forest Kingdom (Medium - No Vocals).mp3",
		"ArtistID": 142,
		"AlbumID": 367,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 923,
		"Title": "Copied City (Quiet - No Vocals)",
		"FileName": "1.39 Copied City (Quiet - No Vocals).mp3",
		"ArtistID": 142,
		"AlbumID": 367,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 924,
		"Title": "Copied City (Quiet - Vocals)",
		"FileName": "1.40 Copied City (Quiet - Vocals).mp3",
		"ArtistID": 142,
		"AlbumID": 367,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 925,
		"Title": "The Tower (Medium - No Vocals)",
		"FileName": "1.43 The Tower (Medium - No Vocals).mp3",
		"ArtistID": 142,
		"AlbumID": 367,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 926,
		"Title": "Ashes of Dreams",
		"FileName": "10. Ashes of Dreams.mp3",
		"ArtistID": 144,
		"AlbumID": 386,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 927,
		"Title": "The Tower",
		"FileName": "10. The Tower.mp3",
		"ArtistID": 164,
		"AlbumID": 382,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 928,
		"Title": "The Wretched Automatons",
		"FileName": "10. The Wretched Automatons.mp3",
		"ArtistID": 146,
		"AlbumID": 379,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 929,
		"Title": "Grandma [Reunion] (Vocals)",
		"FileName": "10.03 Grandma (Reunion) (Vocals).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 930,
		"Title": "The Tower",
		"FileName": "11 The Tower.mp3",
		"ArtistID": 142,
		"AlbumID": 361,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 931,
		"Title": "Ashes of Dreams",
		"FileName": "11. Ashes of Dreams.mp3",
		"ArtistID": 142,
		"AlbumID": 377,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 932,
		"Title": "Heavy Heart (Emil-Piano ver.)",
		"FileName": "11. Heavy Heart (Emil_Piano ver.).mp3",
		"ArtistID": 155,
		"AlbumID": 380,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 933,
		"Title": "Hoshi no Mebuki - 星ノ芽吹キ",
		"FileName": "11. Hoshi no Mebuki - 星ノ芽吹キ.mp3",
		"ArtistID": 150,
		"AlbumID": 372,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 934,
		"Title": "The Sound of the End",
		"FileName": "11. The Sound of the End.mp3",
		"ArtistID": 170,
		"AlbumID": 382,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 935,
		"Title": "Unei no Tsubomi - 雲翳ノ蕾",
		"FileName": "11. Unei no Tsubomi - 雲翳ノ蕾.mp3",
		"ArtistID": 150,
		"AlbumID": 364,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 936,
		"Title": "Kaine [Premonition]",
		"FileName": "11.01 Kaine (Premonition).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 937,
		"Title": "Grandma",
		"FileName": "12. Grandma.mp3",
		"ArtistID": 142,
		"AlbumID": 377,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 938,
		"Title": "Sabigoe - 寂声",
		"FileName": "12. Sabigoe - 寂声.mp3",
		"ArtistID": 150,
		"AlbumID": 372,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 939,
		"Title": "Vague Hope",
		"FileName": "12. Vague Hope.mp3",
		"ArtistID": 138,
		"AlbumID": 382,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 940,
		"Title": "Weight of the World - English Version (Ver1.1a)",
		"FileName": "12. Weight of the World - English Version (Ver1.1a).mp3",
		"ArtistID": 142,
		"AlbumID": 356,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 941,
		"Title": "Kaine [Salvation]",
		"FileName": "12.01 Kaine (Salvation).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 942,
		"Title": "Sekiryō - 寂寥",
		"FileName": "13. Sekiryō - 寂寥.mp3",
		"ArtistID": 150,
		"AlbumID": 364,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 943,
		"Title": "Toki no Kane - 時ノ鐘",
		"FileName": "13. Toki no Kane - 時ノ鐘.mp3",
		"ArtistID": 142,
		"AlbumID": 372,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 944,
		"Title": "Kagerō - 陽炎",
		"FileName": "14. Kagerō - 陽炎.mp3",
		"ArtistID": 150,
		"AlbumID": 364,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 945,
		"Title": "The Wretched Automatons (Orchestral + Synth)",
		"FileName": "14.05 The Wretched Automatons (Orchestral + Synth).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 946,
		"Title": "The Wretched Automatons (Orchestral)",
		"FileName": "14.06 The Wretched Automatons (Orchestral).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 947,
		"Title": "The Wretched Automatons (Vocals + Orchestral + Synth)",
		"FileName": "14.11 The Wretched Automatons (Vocals + Orchestral + Synth).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 948,
		"Title": "The Wretched Automatons (Vocals + Orchestral)",
		"FileName": "14.12 The Wretched Automatons (Vocals + Orchestral).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 949,
		"Title": "Kainé",
		"FileName": "15 Kainé.mp3",
		"ArtistID": 142,
		"AlbumID": 361,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 950,
		"Title": "Aun - 阿吽",
		"FileName": "15. Aun - 阿吽.mp3",
		"ArtistID": 142,
		"AlbumID": 372,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 951,
		"Title": "City of Commerce",
		"FileName": "15.01 City of Commerce.mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 952,
		"Title": "Ashes of Dreams",
		"FileName": "16 Ashes of Dreams.mp3",
		"ArtistID": 142,
		"AlbumID": 361,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 953,
		"Title": "Beacon of Peace - Japanese",
		"FileName": "16 Beacon of Peace - Japanese.mp3",
		"ArtistID": 153,
		"AlbumID": 373,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 954,
		"Title": "Omokage - 面影",
		"FileName": "16. Omokage - 面影.mp3",
		"ArtistID": 150,
		"AlbumID": 372,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 955,
		"Title": "Shūu - 驟雨",
		"FileName": "16. Shūu - 驟雨.mp3",
		"ArtistID": 150,
		"AlbumID": 364,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 956,
		"Title": "Repose (Full)",
		"FileName": "16.01 Repose (Full).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 957,
		"Title": "Repose (Orchestral + Guitar)",
		"FileName": "16.03 Repose (Orchestral + Guitar).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 958,
		"Title": "Repose (Vocals + Orchestral)",
		"FileName": "16.06 Repose (Vocals + Orchestral).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 959,
		"Title": "Kyūsai - 救済",
		"FileName": "18. Kyūsai - 救済.mp3",
		"ArtistID": 150,
		"AlbumID": 372,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 960,
		"Title": "Beacon of Peace",
		"FileName": "19 Beacon of Peace.mp3",
		"ArtistID": 153,
		"AlbumID": 373,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 961,
		"Title": "Kamuras Song of Purification - Instrumental",
		"FileName": "19 Kamuras Song of Purification - Instrumental.mp3",
		"ArtistID": 151,
		"AlbumID": 373,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 962,
		"Title": "Kainé - Premonition",
		"FileName": "2.01 Kainé - Premonition.mp3",
		"ArtistID": 138,
		"AlbumID": 365,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 963,
		"Title": "Significance",
		"FileName": "2.01 Significance.mp3",
		"ArtistID": 142,
		"AlbumID": 369,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 964,
		"Title": "Analogous Memories - Weiss Edition Arrangement",
		"FileName": "2.02 Analogous Memories - Weiss Edition Arrangement.mp3",
		"ArtistID": 144,
		"AlbumID": 370,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 965,
		"Title": "City Ruins - Shade",
		"FileName": "2.02 City Ruins - Shade.mp3",
		"ArtistID": 142,
		"AlbumID": 369,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 966,
		"Title": "Song of the Ancients (Orchestral + Ambient)",
		"FileName": "2.02 Song of the Ancients (Orchestral + Ambient).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 967,
		"Title": "Song of the Ancients - Devola",
		"FileName": "2.02 Song of the Ancients - Devola.mp3",
		"ArtistID": 150,
		"AlbumID": 365,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 968,
		"Title": "Song of the Ancients (Orchestral)",
		"FileName": "2.03 Song of the Ancients (Orchestral).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 969,
		"Title": "The Ultimate Weapon",
		"FileName": "2.03 The Ultimate Weapon.mp3",
		"ArtistID": 138,
		"AlbumID": 365,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 970,
		"Title": "The Wretched Automatons - Weiss Edition Arrangement",
		"FileName": "2.03 The Wretched Automatons - Weiss Edition Arrangement.mp3",
		"ArtistID": 171,
		"AlbumID": 370,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 971,
		"Title": "Grandma - Weiss Edition Arrangement",
		"FileName": "2.04 Grandma - Weiss Edition Arrangement.mp3",
		"ArtistID": 172,
		"AlbumID": 370,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 972,
		"Title": "Halua",
		"FileName": "2.04 Halua.mp3",
		"ArtistID": 138,
		"AlbumID": 365,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 973,
		"Title": "Song of the Ancients (Vocals + Ambient)",
		"FileName": "2.04 Song of the Ancients (Vocals + Ambient).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 974,
		"Title": "Voice of No Return",
		"FileName": "2.04 Voice of No Return.mp3",
		"ArtistID": 142,
		"AlbumID": 369,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 975,
		"Title": "His Dream",
		"FileName": "2.05 His Dream.mp3",
		"ArtistID": 142,
		"AlbumID": 368,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 976,
		"Title": "Song of the Ancients (Vocals + Orchestral + Ambient)",
		"FileName": "2.05 Song of the Ancients (Vocals + Orchestral + Ambient).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 977,
		"Title": "Song of the Ancients - Weiss Edition Arrangement",
		"FileName": "2.05 Song of the Ancients - Weiss Edition Arrangement.mp3",
		"ArtistID": 169,
		"AlbumID": 370,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 978,
		"Title": "Song of the Ancients (Vocals + Orchestral)",
		"FileName": "2.06 Song of the Ancients (Vocals + Orchestral).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 979,
		"Title": "This Dream",
		"FileName": "2.06 This Dream.mp3",
		"ArtistID": 142,
		"AlbumID": 368,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 980,
		"Title": "Hills of Radiant Winds - Weiss Edition Arrangement",
		"FileName": "2.07 Hills of Radiant Winds - Weiss Edition Arrangement.mp3",
		"ArtistID": 173,
		"AlbumID": 370,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 981,
		"Title": "His Dream",
		"FileName": "2.07 His Dream.mp3",
		"ArtistID": 150,
		"AlbumID": 365,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 982,
		"Title": "Repose",
		"FileName": "2.07 Repose.mp3",
		"ArtistID": 142,
		"AlbumID": 368,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 983,
		"Title": "Song of the Ancients (Vocals Guitar + Ambient)",
		"FileName": "2.07 Song of the Ancients (Vocals Guitar + Ambient).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 984,
		"Title": "Song of the Ancients (Vocals Guitar + Orchestral + Ambient)",
		"FileName": "2.08 Song of the Ancients (Vocals Guitar + Orchestral + Ambient).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 985,
		"Title": "This Dream",
		"FileName": "2.08 This Dream.mp3",
		"ArtistID": 150,
		"AlbumID": 365,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 986,
		"Title": "Dispossession - Strings Ver.",
		"FileName": "2.09 Dispossession - Strings Ver..mp3",
		"ArtistID": 148,
		"AlbumID": 365,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 987,
		"Title": "Fleeting Words - Weiss Edition Arrangement",
		"FileName": "2.09 Fleeting Words - Weiss Edition Arrangement.mp3",
		"ArtistID": 174,
		"AlbumID": 370,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 988,
		"Title": "Song of the Ancients (Vocals Guitar + Orchestral)",
		"FileName": "2.09 Song of the Ancients (Vocals Guitar + Orchestral).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 989,
		"Title": "Ashes of Dreams - Weiss Edition Arrangement",
		"FileName": "2.10 Ashes of Dreams - Weiss Edition Arrangement.mp3",
		"ArtistID": 175,
		"AlbumID": 370,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 990,
		"Title": "Broken Heart",
		"FileName": "2.11 Broken Heart.mp3",
		"ArtistID": 138,
		"AlbumID": 369,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 991,
		"Title": "Wretched Weaponry: Quiet",
		"FileName": "2.12 Wretched Weaponry- Quiet.mp3",
		"ArtistID": 142,
		"AlbumID": 369,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 992,
		"Title": "Yonah - Piano Ver.",
		"FileName": "2.12 Yonah - Piano Ver..mp3",
		"ArtistID": 138,
		"AlbumID": 365,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 993,
		"Title": "Ashes of Dreams - Nouveau",
		"FileName": "2.13 Ashes of Dreams - Nouveau.mp3",
		"ArtistID": 146,
		"AlbumID": 365,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 994,
		"Title": "Mourning",
		"FileName": "2.13 Mourning.mp3",
		"ArtistID": 142,
		"AlbumID": 369,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 995,
		"Title": "Ashes of Dreams - Naudhaich",
		"FileName": "2.14 Ashes of Dreams - Naudhaich.mp3",
		"ArtistID": 146,
		"AlbumID": 365,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 996,
		"Title": "Emil - Sacrifice",
		"FileName": "2.14 Emil - Sacrifice.mp3",
		"ArtistID": 142,
		"AlbumID": 368,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 997,
		"Title": "Weight of the World Kowaretasekainouta",
		"FileName": "2.15 Weight of the World Kowaretasekainouta.mp3",
		"ArtistID": 142,
		"AlbumID": 369,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 998,
		"Title": "Ashes of Dreams - New",
		"FileName": "2.16 Ashes of Dreams - New.mp3",
		"ArtistID": 142,
		"AlbumID": 368,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 999,
		"Title": "Ashes of Dreams - Nouveau",
		"FileName": "2.17 Ashes of Dreams - Nouveau.mp3",
		"ArtistID": 142,
		"AlbumID": 368,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1000,
		"Title": "Ashes of Dreams - Nuadhaich",
		"FileName": "2.18 Ashes of Dreams - Nuadhaich.mp3",
		"ArtistID": 142,
		"AlbumID": 368,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1001,
		"Title": "Ashes of Dreams - Aratanaru",
		"FileName": "2.19 Ashes of Dreams - Aratanaru.mp3",
		"ArtistID": 142,
		"AlbumID": 368,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1002,
		"Title": "Dark Colossus [Kaiju] (VOCALS ONLY)",
		"FileName": "2.41 Dark Colossus (Kaiju) (VOCALS ONLY).mp3",
		"ArtistID": 142,
		"AlbumID": 367,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1003,
		"Title": "The Sound of the End (VOCALS ONLY)",
		"FileName": "2.55 The Sound of the End (VOCALS ONLY).mp3",
		"ArtistID": 142,
		"AlbumID": 367,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1004,
		"Title": "Brave Hunters - Instrumental",
		"FileName": "20 Brave Hunters - Instrumental.mp3",
		"ArtistID": 151,
		"AlbumID": 373,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1005,
		"Title": "His Dream",
		"FileName": "20.01 His Dream.mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1006,
		"Title": "Best Buddies - Instrumental",
		"FileName": "21 Best Buddies - Instrumental.mp3",
		"ArtistID": 151,
		"AlbumID": 373,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1007,
		"Title": "This Dream",
		"FileName": "21.01 This Dream.mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1008,
		"Title": "The Lost Forest (Orchestral)",
		"FileName": "22.03 The Lost Forest (Orchestral).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1009,
		"Title": "The Prestigious Mask",
		"FileName": "23.01 The Prestigious Mask.mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1010,
		"Title": "Temple of the Drifting Sands (Full)",
		"FileName": "24.02 Temple of the Drifting Sands (Full).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1011,
		"Title": "Temple of the Drifting Sands (Orchestral + Drums)",
		"FileName": "24.03 Temple of the Drifting Sands (Orchestral + Drums).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1012,
		"Title": "Temple of the Drifting Sands (Orchestral)",
		"FileName": "24.04 Temple of the Drifting Sands (Orchestral).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1013,
		"Title": "Temple of the Drifting Sands (Vocals 1 + Orchestral)",
		"FileName": "24.07 Temple of the Drifting Sands (Vocals 1 + Orchestral).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1014,
		"Title": "Temple of the Drifting Sands (Vocals 1 + Vocals 2 + Orchestral)",
		"FileName": "24.09 Temple of the Drifting Sands (Vocals 1 + Vocals 2 + Orchestral).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1015,
		"Title": "Temple of the Drifting Sands (Vocals 2 + Orchestral)",
		"FileName": "24.14 Temple of the Drifting Sands (Vocals 2 + Orchestral).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1016,
		"Title": "The Ultimate Weapon (Full)",
		"FileName": "26.02 The Ultimate Weapon (Full).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1017,
		"Title": "The Ultimate Weapon (Orchestral)",
		"FileName": "26.04 The Ultimate Weapon (Orchestral).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1018,
		"Title": "The Ultimate Weapon (Vocals 1 + Drums)",
		"FileName": "26.05 The Ultimate Weapon (Vocals 1 + Drums).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1019,
		"Title": "The Ultimate Weapon (Vocals 1 + Orchestral + Drums)",
		"FileName": "26.06 The Ultimate Weapon (Vocals 1 + Orchestral + Drums).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1020,
		"Title": "The Ultimate Weapon (Vocals 1 + Vocals 2 + Drums)",
		"FileName": "26.08 The Ultimate Weapon (Vocals 1 + Vocals 2 + Drums).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1021,
		"Title": "The Ultimate Weapon (Vocals 1 + Vocals 2 + Orchestral)",
		"FileName": "26.09 The Ultimate Weapon (Vocals 1 + Vocals 2 + Orchestral).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1022,
		"Title": "The Ultimate Weapon (Vocals 2 + Drums)",
		"FileName": "26.12 The Ultimate Weapon (Vocals 2 + Drums).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1023,
		"Title": "The Ultimate Weapon (Vocals 2 + Orchestral + Drums)",
		"FileName": "26.13 The Ultimate Weapon (Vocals 2 + Orchestral + Drums).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1024,
		"Title": "Emil [Sacrifice] (Full)",
		"FileName": "28.01 Emil (Sacrifice) (Full).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1025,
		"Title": "Emil [Sacrifice] (Orchestral)",
		"FileName": "28.02 Emil (Sacrifice) (Orchestral).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1026,
		"Title": "Fleeting Words - Family",
		"FileName": "3.01 Fleeting Words - Family.mp3",
		"ArtistID": 142,
		"AlbumID": 365,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1027,
		"Title": "Rebirth & Hope",
		"FileName": "3.01 Rebirth & Hope.mp3",
		"ArtistID": 138,
		"AlbumID": 369,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1028,
		"Title": "Song of the Ancients [Hollow Dreams]",
		"FileName": "3.01 Song of the Ancients (Hollow Dreams).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1029,
		"Title": "Vague Hope [Cold Rain] (No Vocals)",
		"FileName": "3.01 Vague Hope (Cold Rain) (No Vocals).mp3",
		"ArtistID": 142,
		"AlbumID": 367,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1030,
		"Title": "Vague Hope [Cold Rain] (Vocals)",
		"FileName": "3.02 Vague Hope (Cold Rain) (Vocals).mp3",
		"ArtistID": 142,
		"AlbumID": 367,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1031,
		"Title": "Repose",
		"FileName": "3.03 Repose.mp3",
		"ArtistID": 150,
		"AlbumID": 365,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1032,
		"Title": "Voice of no Return (Normal - Vocals)",
		"FileName": "3.04 Voice of no Return (Normal - Vocals).mp3",
		"ArtistID": 142,
		"AlbumID": 367,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1033,
		"Title": "Widespread Illness",
		"FileName": "3.04 Widespread Illness.mp3",
		"ArtistID": 138,
		"AlbumID": 369,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1034,
		"Title": "Fortress of Lies",
		"FileName": "3.05 Fortress of Lies.mp3",
		"ArtistID": 142,
		"AlbumID": 369,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1035,
		"Title": "Mourning (Chorus)",
		"FileName": "3.06 Mourning (Chorus).mp3",
		"ArtistID": 142,
		"AlbumID": 367,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1036,
		"Title": "Vague Hope - Spring Rain",
		"FileName": "3.06 Vague Hope - Spring Rain.mp3",
		"ArtistID": 138,
		"AlbumID": 369,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1037,
		"Title": "Dance of the Evanescent",
		"FileName": "3.07 Dance of the Evanescent.mp3",
		"ArtistID": 148,
		"AlbumID": 365,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1038,
		"Title": "Mourning (Normal)",
		"FileName": "3.07 Mourning (Normal).mp3",
		"ArtistID": 142,
		"AlbumID": 367,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1039,
		"Title": "Blissful Death",
		"FileName": "3.08 Blissful Death.mp3",
		"ArtistID": 142,
		"AlbumID": 369,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1040,
		"Title": "Mourning (Strings)",
		"FileName": "3.08 Mourning (Strings).mp3",
		"ArtistID": 142,
		"AlbumID": 367,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1041,
		"Title": "Faltering Prayer [Dawn Breeze] (Background)",
		"FileName": "3.09 Faltering Prayer (Dawn Breeze) (Background).mp3",
		"ArtistID": 142,
		"AlbumID": 367,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1042,
		"Title": "Emil - Sacrifice",
		"FileName": "3.10 Emil - Sacrifice.mp3",
		"ArtistID": 148,
		"AlbumID": 365,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1043,
		"Title": "Faltering Prayer - Starry Sky",
		"FileName": "3.10 Faltering Prayer - Starry Sky.mp3",
		"ArtistID": 142,
		"AlbumID": 369,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1044,
		"Title": "Faltering Prayer [Dawn Breeze] (Vocals)",
		"FileName": "3.11 Faltering Prayer (Dawn Breeze) (Vocals).mp3",
		"ArtistID": 142,
		"AlbumID": 367,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1045,
		"Title": "Analogous Memories",
		"FileName": "3.12 Analogous Memories.mp3",
		"ArtistID": 142,
		"AlbumID": 365,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1046,
		"Title": "Faltering Prayer [Starry Sky]",
		"FileName": "3.12 Faltering Prayer (Starry Sky).mp3",
		"ArtistID": 142,
		"AlbumID": 367,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1047,
		"Title": "The Tower",
		"FileName": "3.12 The Tower.mp3",
		"ArtistID": 142,
		"AlbumID": 369,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1048,
		"Title": "The Color of Depression (Vocals)",
		"FileName": "3.14 The Color of Depression (Vocals).mp3",
		"ArtistID": 142,
		"AlbumID": 367,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1049,
		"Title": "Ashes of Dreams - Aratanaru",
		"FileName": "3.15 Ashes of Dreams - Aratanaru.mp3",
		"ArtistID": 146,
		"AlbumID": 365,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1050,
		"Title": "Blissful Death (Normal - No Vocals)",
		"FileName": "3.17 Blissful Death (Normal - No Vocals).mp3",
		"ArtistID": 142,
		"AlbumID": 367,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1051,
		"Title": "Blissful Death (Normal - Vocals)",
		"FileName": "3.18 Blissful Death (Normal - Vocals).mp3",
		"ArtistID": 142,
		"AlbumID": 367,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1052,
		"Title": "Broken Heart (Vocals)",
		"FileName": "3.21 Broken Heart (Vocals).mp3",
		"ArtistID": 142,
		"AlbumID": 367,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1053,
		"Title": "Widespread Illness (Vocals)",
		"FileName": "3.22 Widespread Illness (Vocals).mp3",
		"ArtistID": 142,
		"AlbumID": 367,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1054,
		"Title": "Treasured Time (No Vocals)",
		"FileName": "3.23 Treasured Time (No Vocals).mp3",
		"ArtistID": 142,
		"AlbumID": 367,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1055,
		"Title": "Treasured Times (Vocals)",
		"FileName": "3.25 Treasured Times (Vocals).mp3",
		"ArtistID": 142,
		"AlbumID": 367,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1056,
		"Title": "Weight of the World (No Vocals)",
		"FileName": "3.28 Weight of the World (No Vocals).mp3",
		"ArtistID": 142,
		"AlbumID": 367,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1057,
		"Title": "Weight of the World (Vocals - English)",
		"FileName": "3.29 Weight of the World (Vocals - English).mp3",
		"ArtistID": 142,
		"AlbumID": 367,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1058,
		"Title": "Weight of the World (Vocals - Japanese)",
		"FileName": "3.30 Weight of the World (Vocals - Japanese).mp3",
		"ArtistID": 142,
		"AlbumID": 367,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1059,
		"Title": "Weight of the World (Vocals - Nouveau-FR)",
		"FileName": "3.31 Weight of the World (Vocals - Nouveau-FR).mp3",
		"ArtistID": 142,
		"AlbumID": 367,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1060,
		"Title": "Dance of the Evanescent (Normal)",
		"FileName": "31.02 Dance of the Evanescent (Normal).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1061,
		"Title": "Shadowlords Castle (Vocals + Organ)",
		"FileName": "32.14 Shadowlords Castle (Vocals + Organ).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1062,
		"Title": "Shadowlords Castle (Vocals)",
		"FileName": "32.15 Shadowlords Castle (Vocals).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1063,
		"Title": "Shadowlord [Phase 1] (Organ + Music Box)",
		"FileName": "33.07 Shadowlord (Phase 1) (Organ + Music Box).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1064,
		"Title": "Shadowlord [Phase 1] (Vocals + Organ + Music Box)",
		"FileName": "33.13 Shadowlord (Phase 1) (Vocals + Organ + Music Box).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1065,
		"Title": "Shadowlord [Phase 1] (Vocals + Organ)",
		"FileName": "33.14 Shadowlord (Phase 1) (Vocals + Organ).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1066,
		"Title": "Shadowlord [Phase 1] (Vocals)",
		"FileName": "33.15 Shadowlord (Phase 1) (Vocals).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1067,
		"Title": "Shadowlord [Phase 2] (Vocals + Music Box)",
		"FileName": "34.08 Shadowlord (Phase 2) (Vocals + Music Box).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1068,
		"Title": "Shadowlord [Phase 2] (Vocals + Organ + Music Box)",
		"FileName": "34.12 Shadowlord (Phase 2) (Vocals + Organ + Music Box).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1069,
		"Title": "Shadowlord [Phase 2] (Vocals + Organ)",
		"FileName": "34.13 Shadowlord (Phase 2) (Vocals + Organ).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1070,
		"Title": "Shadowlord [Phase 2] (Vocals)",
		"FileName": "34.14 Shadowlord (Phase 2) (Vocals).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1071,
		"Title": "Shadowlord [Phase 3] (Vocals + Organ)",
		"FileName": "35.06 Shadowlord (Phase 3) (Vocals + Organ).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1072,
		"Title": "Shadowlord [Phase 3] (Vocals)",
		"FileName": "35.07 Shadowlord (Phase 3) (Vocals).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1073,
		"Title": "Ashes of Dreams [Aratanaru] (Alternative Version)",
		"FileName": "36.02 Ashes of Dreams (Aratanaru) (Alternative Version).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1074,
		"Title": "Ashes of Dreams [Naudhaich] (Alternative Version)",
		"FileName": "36.03 Ashes of Dreams (Naudhaich) (Alternative Version).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1075,
		"Title": "Ashes of Dreams [New] (Alternative Version)",
		"FileName": "36.04 Ashes of Dreams (New) (Alternative Version).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1076,
		"Title": "Ashes of Dreams [New] (No Vocals Intro)",
		"FileName": "36.05 Ashes of Dreams (New) (No Vocals Intro).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1077,
		"Title": "Ashes of Dreams [Nouveau] (Alternative Version)",
		"FileName": "36.06 Ashes of Dreams (Nouveau) (Alternative Version).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1078,
		"Title": "Fleeting Words [Family] (Full)",
		"FileName": "37.01 Fleeting Words (Family) (Full).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1079,
		"Title": "Fleeting Words [Family] (Orchestral)",
		"FileName": "37.02 Fleeting Words (Family) (Orchestral).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1080,
		"Title": "Analagous Memories (Orchestral)",
		"FileName": "39.06 Analagous Memories (Orchestral).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1081,
		"Title": "Song of the Ancients [Popola] (No Vocals)",
		"FileName": "4.21 Song of the Ancients (Popola) (No Vocals).mp3",
		"ArtistID": 142,
		"AlbumID": 367,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1082,
		"Title": "Song of the Ancients [Popola] (Vocals)",
		"FileName": "4.22 Song of the Ancients (Popola) (Vocals).mp3",
		"ArtistID": 142,
		"AlbumID": 367,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1083,
		"Title": "Kainé (Salvation)",
		"FileName": "4.23 Kainé (Salvation).mp3",
		"ArtistID": 142,
		"AlbumID": 367,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1084,
		"Title": "Emil (Sacrifice)",
		"FileName": "4.24 Emil (Sacrifice).mp3",
		"ArtistID": 142,
		"AlbumID": 367,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1085,
		"Title": "Hills of Radiant Winds (Orchestral)",
		"FileName": "5.04 Hills of Radiant Winds (Orchestral).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1086,
		"Title": "Hills of Radiant Winds (Vocals + Orchestral)",
		"FileName": "5.06 Hills of Radiant Winds (Vocals + Orchestral).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1087,
		"Title": "Cold Steel Coffin (Piano)",
		"FileName": "8.08 Cold Steel Coffin (Piano).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1088,
		"Title": "Cold Steel Coffin (Vocals + Orchestral + Piano)",
		"FileName": "8.11 Cold Steel Coffin (Vocals + Orchestral + Piano).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1089,
		"Title": "Cold Steel Coffin (Vocals + Orchestral)",
		"FileName": "8.12 Cold Steel Coffin (Vocals + Orchestral).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1090,
		"Title": "Cold Steel Coffin (Vocals + Piano)",
		"FileName": "8.14 Cold Steel Coffin (Vocals + Piano).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1091,
		"Title": "Cold Steel Coffin (Vocals)",
		"FileName": "8.15 Cold Steel Coffin (Vocals).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1092,
		"Title": "Grandma (Full)",
		"FileName": "9.01 Grandma (Full).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1093,
		"Title": "Grandma (Orchestral + Piano)",
		"FileName": "9.02 Grandma (Orchestral + Piano).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1094,
		"Title": "Grandma (Orchestral)",
		"FileName": "9.03 Grandma (Orchestral).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1095,
		"Title": "Grandma (Piano)",
		"FileName": "9.04 Grandma (Piano).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1096,
		"Title": "Grandma (Vocals + Orchestral)",
		"FileName": "9.05 Grandma (Vocals + Orchestral).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1097,
		"Title": "Grandma (Vocals + Piano)",
		"FileName": "9.06 Grandma (Vocals + Piano).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1098,
		"Title": "07 Best Buddies - Piano Version",
		"FileName": "Best Buddies - Piano Version.mp3",
		"ArtistID": 151,
		"AlbumID": 387,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1099,
		"Title": "Kamuras Song of Purification",
		"FileName": "Kamuras Song of Purification.mp3",
		"ArtistID": 176,
		"AlbumID": 389,
		"TagID": 10,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1100,
		"Title": "Alien Manifestation (JNique Nicole Vocals)",
		"FileName": "01. Alien Manifestation (JNique Nicole Vocals).mp3",
		"ArtistID": 144,
		"AlbumID": 385,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1101,
		"Title": "Emil - Karma (from NieR Replicant ver.1.22474487139... Original Soundtrack)\t",
		"FileName": "01. Emil - Karma (from NieR Replicant ver.1.22474487139... Original Soundtrack)_.mp3",
		"ArtistID": 148,
		"AlbumID": 383,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1102,
		"Title": "Kainé - Salvation (from NieR Replicant ver.1.22474487139... Original Soundtrack)\t",
		"FileName": "01. Kainé - Salvation (from NieR Replicant ver.1.22474487139... Original Soundtrack)_.mp3",
		"ArtistID": 138,
		"AlbumID": 384,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1103,
		"Title": "Snow in Summer (from NieR Replicant ver.1.22474487139... Original Soundtrack)\t",
		"FileName": "01. Snow in Summer (from NieR Replicant ver.1.22474487139... Original Soundtrack)_.mp3",
		"ArtistID": 146,
		"AlbumID": 363,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1104,
		"Title": "Snow in Summer",
		"FileName": "01. Snow in Summer (Gestalt).mp3",
		"ArtistID": 141,
		"AlbumID": 360,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1105,
		"Title": "Snow in Summer",
		"FileName": "01. Snow in Summer..mp3",
		"ArtistID": 144,
		"AlbumID": 386,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1106,
		"Title": "Snow in Summer",
		"FileName": "01. Snow in Summer.mp3",
		"ArtistID": 140,
		"AlbumID": 362,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1107,
		"Title": "Breath of Ire",
		"FileName": "02 Breath of Ire.mp3",
		"ArtistID": 153,
		"AlbumID": 373,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1108,
		"Title": "Amusement Park",
		"FileName": "02. Amusement Park.mp3",
		"ArtistID": 140,
		"AlbumID": 359,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1109,
		"Title": "Emil (Addendum version)",
		"FileName": "02. Emil (Addendum version).mp3",
		"ArtistID": 144,
		"AlbumID": 375,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1110,
		"Title": "Hills of Radiant Wind",
		"FileName": "02. Hills of Radiant Wind.mp3",
		"ArtistID": 141,
		"AlbumID": 376,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1111,
		"Title": "Hills of Radiant Winds",
		"FileName": "02. Hills of Radiant Winds.mp3",
		"ArtistID": 142,
		"AlbumID": 377,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1112,
		"Title": "Shadowlord (from NieR Replicant ver.1.22474487139... Original Soundtrack)\t",
		"FileName": "02. Shadowlord (from NieR Replicant ver.1.22474487139... Original Soundtrack)_.mp3",
		"ArtistID": 148,
		"AlbumID": 363,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1113,
		"Title": "Song of the Ancients",
		"FileName": "02. Song of the Ancients.mp3",
		"ArtistID": 140,
		"AlbumID": 362,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1114,
		"Title": "The Ultimate Weapon",
		"FileName": "02. The Ultimate Weapon.mp3",
		"ArtistID": 140,
		"AlbumID": 381,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1115,
		"Title": "Memories of Dust",
		"FileName": "03 Memories of Dust.mp3",
		"ArtistID": 142,
		"AlbumID": 361,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1116,
		"Title": "A Beautiful Song",
		"FileName": "03. A Beautiful Song.mp3",
		"ArtistID": 138,
		"AlbumID": 382,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1117,
		"Title": "Birth of a Wish",
		"FileName": "03. Birth of a Wish..mp3",
		"ArtistID": 177,
		"AlbumID": 381,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1118,
		"Title": "Deep Crimson Foe",
		"FileName": "03. Deep Crimson Foe.mp3",
		"ArtistID": 145,
		"AlbumID": 375,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1119,
		"Title": "Hills of Radiant Winds",
		"FileName": "03. Hills of Radiant Winds.mp3",
		"ArtistID": 143,
		"AlbumID": 362,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1120,
		"Title": "Vague Hope (Emi Evans Vocals)",
		"FileName": "03. Vague Hope (Emi Evans Vocals).mp3",
		"ArtistID": 144,
		"AlbumID": 385,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1121,
		"Title": "City Ruins (Shade)",
		"FileName": "03.City Ruins (Shade).mp3",
		"ArtistID": 27,
		"AlbumID": 358,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1122,
		"Title": "Song of the Ancients (Emi Evans & JNique Nicole Vocals)",
		"FileName": "04. Song of the Ancients (Emi Evans & JNique Nicole Vocals).mp3",
		"ArtistID": 145,
		"AlbumID": 375,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1123,
		"Title": "Song of the Ancients - Fate (from NieR Replicant ver.1.22474487139... Original Soundtrack)",
		"FileName": "04. Song of the Ancients - Fate (from NieR Replicant ver.1.22474487139... Original Soundtrack).mp3",
		"ArtistID": 148,
		"AlbumID": 378,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1124,
		"Title": "The Dark Colossus Destroys All",
		"FileName": "04. The Dark Colossus Destroys All.mp3",
		"ArtistID": 141,
		"AlbumID": 376,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1125,
		"Title": "Dependant Weakling",
		"FileName": "05. Dependant Weakling.mp3",
		"ArtistID": 178,
		"AlbumID": 382,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1126,
		"Title": "Madan - 魔弾",
		"FileName": "05. Madan - 魔弾.mp3",
		"ArtistID": 142,
		"AlbumID": 364,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1127,
		"Title": "The Tower",
		"FileName": "05. The Tower.mp3",
		"ArtistID": 140,
		"AlbumID": 359,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1128,
		"Title": "Kainé (from NieR Gestalt & Replicant Orchestral Arrangement Album)\t",
		"FileName": "06. Kainé (from NieR Gestalt & Replicant Orchestral Arrangement Album)_.mp3",
		"ArtistID": 144,
		"AlbumID": 384,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1129,
		"Title": "The Dark Colossus Destroys All",
		"FileName": "06. The Dark Colossus Destroys All.mp3",
		"ArtistID": 144,
		"AlbumID": 386,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1130,
		"Title": "The Wretched Automatons",
		"FileName": "06. The Wretched Automatons..mp3",
		"ArtistID": 144,
		"AlbumID": 362,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1131,
		"Title": "The Wretched Automatons",
		"FileName": "06. The Wretched Automatons.mp3",
		"ArtistID": 142,
		"AlbumID": 377,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1132,
		"Title": "Lady of Lightning",
		"FileName": "07 Lady of Lightning.mp3",
		"ArtistID": 152,
		"AlbumID": 373,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1133,
		"Title": "A Beautiful Song (Emi Evans & JNique Nicole Vocals)",
		"FileName": "07. A Beautiful Song (Emi Evans & JNique Nicole Vocals).mp3",
		"ArtistID": 145,
		"AlbumID": 375,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1134,
		"Title": "Bipolar Nightmare",
		"FileName": "07. Bipolar Nightmare.mp3",
		"ArtistID": 143,
		"AlbumID": 359,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1135,
		"Title": "Emil (from NieR Orchestral Arrangement Album - Addendum)\t",
		"FileName": "07. Emil (from NieR Orchestral Arrangement Album - Addendum)_.mp3",
		"ArtistID": 144,
		"AlbumID": 383,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1136,
		"Title": "Kainé",
		"FileName": "07. Kainé.mp3",
		"ArtistID": 144,
		"AlbumID": 362,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1137,
		"Title": "Possessed by Disease",
		"FileName": "07. Possessed by Disease.mp3",
		"ArtistID": 142,
		"AlbumID": 377,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1138,
		"Title": "Snow in Summer (from NieR Gestalt & Replicant Orchestral Arrangement Album)\t",
		"FileName": "07. Snow in Summer (from NieR Gestalt & Replicant Orchestral Arrangement Album)_.mp3",
		"ArtistID": 140,
		"AlbumID": 363,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1139,
		"Title": "Song of the Ancients (from NieR Gestalt & Replicant Orchestral Arrangement Album)",
		"FileName": "07. Song of the Ancients (from NieR Gestalt & Replicant Orchestral Arrangement Album).mp3",
		"ArtistID": 140,
		"AlbumID": 378,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1140,
		"Title": "Pascal",
		"FileName": "08 Pascal.mp3",
		"ArtistID": 142,
		"AlbumID": 361,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1141,
		"Title": "Gods Bound by Rules",
		"FileName": "08. Gods Bound by Rules.mp3",
		"ArtistID": 158,
		"AlbumID": 379,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1142,
		"Title": "Normandy - ノルマンディー",
		"FileName": "08. Normandy - ノルマンディー.mp3",
		"ArtistID": 142,
		"AlbumID": 364,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1143,
		"Title": "Song of the Ancients (Emi Evans & JNique Nicole Vocals) (from NieR Orchestral Arrangement Album - Addendum)",
		"FileName": "08. Song of the Ancients (Emi Evans & JNique Nicole Vocals) (from NieR Orchestral Arrangement Album - Addendum).mp3",
		"ArtistID": 179,
		"AlbumID": 378,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1144,
		"Title": "Waltz for Flowers and Puppets",
		"FileName": "08. Waltz for Flowers and Puppets.mp3",
		"ArtistID": 148,
		"AlbumID": 356,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1145,
		"Title": "Weight of the World",
		"FileName": "08. Weight of the World.mp3",
		"ArtistID": 142,
		"AlbumID": 377,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1146,
		"Title": "Pascal",
		"FileName": "08.Pascal.mp3",
		"ArtistID": 27,
		"AlbumID": 358,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1147,
		"Title": "Bipolar Nightmare",
		"FileName": "09. Bipolar Nightmare.mp3",
		"ArtistID": 180,
		"AlbumID": 382,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1148,
		"Title": "Crumbling Lies - Front",
		"FileName": "09. Crumbling Lies - Front.mp3",
		"ArtistID": 145,
		"AlbumID": 375,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1149,
		"Title": "Grandma",
		"FileName": "09. Grandma.mp3",
		"ArtistID": 145,
		"AlbumID": 362,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1150,
		"Title": "Shadowlord",
		"FileName": "09. Shadowlord.mp3",
		"ArtistID": 138,
		"AlbumID": 379,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1151,
		"Title": "Shadowlords Castle",
		"FileName": "09. Shadowlords Castle.mp3",
		"ArtistID": 144,
		"AlbumID": 386,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1152,
		"Title": "Shinpan - 審判",
		"FileName": "09. Shinpan - 審判.mp3",
		"ArtistID": 142,
		"AlbumID": 372,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1153,
		"Title": "The Sound of the End",
		"FileName": "09. The Sound of the End.mp3",
		"ArtistID": 145,
		"AlbumID": 359,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1154,
		"Title": "Snow in Summer - Another Edit Version",
		"FileName": "1.01 Snow in Summer - Another Edit Version.mp3",
		"ArtistID": 146,
		"AlbumID": 370,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1155,
		"Title": "Snow in Summer",
		"FileName": "1.01 Snow in Summer.mp3",
		"ArtistID": 142,
		"AlbumID": 368,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1156,
		"Title": "Hills of Radiant Winds",
		"FileName": "1.02 Hills of Radiant Winds..mp3",
		"ArtistID": 142,
		"AlbumID": 368,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1157,
		"Title": "Hills of Radiant Winds",
		"FileName": "1.02 Hills of Radiant Winds.mp3",
		"ArtistID": 166,
		"AlbumID": 365,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1158,
		"Title": "Kainé - Another Edit Version",
		"FileName": "1.03 Kainé - Another Edit Version.mp3",
		"ArtistID": 138,
		"AlbumID": 370,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1159,
		"Title": "Snow in Summer (Orchestral)",
		"FileName": "1.03 Snow in Summer (Orchestral).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1160,
		"Title": "The Incomplete Stone",
		"FileName": "1.03 The Incomplete Stone..mp3",
		"ArtistID": 142,
		"AlbumID": 368,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1161,
		"Title": "The Incomplete Stone",
		"FileName": "1.03 The Incomplete Stone.mp3",
		"ArtistID": 166,
		"AlbumID": 365,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1162,
		"Title": "Wretched Weaponry (Medium - No Vocals)",
		"FileName": "1.03 Wretched Weaponry (Medium - No Vocals).mp3",
		"ArtistID": 142,
		"AlbumID": 367,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1163,
		"Title": "Gods Bound by Rules - Another Edit Version",
		"FileName": "1.04 Gods Bound by Rules - Another Edit Version.mp3",
		"ArtistID": 146,
		"AlbumID": 370,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1164,
		"Title": "Memories of Dust",
		"FileName": "1.04 Memories of Dust.mp3",
		"ArtistID": 148,
		"AlbumID": 369,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1165,
		"Title": "Birth of a Wish",
		"FileName": "1.05 Birth of a Wish.mp3",
		"ArtistID": 142,
		"AlbumID": 369,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1166,
		"Title": "Cold Steel Coffin",
		"FileName": "1.05 Cold Steel Coffin.mp3",
		"ArtistID": 142,
		"AlbumID": 368,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1167,
		"Title": "Deep Crimson Foe - Another Edit Version",
		"FileName": "1.05 Deep Crimson Foe - Another Edit Version.mp3",
		"ArtistID": 138,
		"AlbumID": 370,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1168,
		"Title": "Cold Steel Coffin",
		"FileName": "1.06 Cold Steel Coffin.mp3",
		"ArtistID": 138,
		"AlbumID": 365,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1169,
		"Title": "Emil - Another Edit Version",
		"FileName": "1.06 Emil - Another Edit Version.mp3",
		"ArtistID": 148,
		"AlbumID": 370,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1170,
		"Title": "Snow in Summer (Vocals + Orchestral)",
		"FileName": "1.06 Snow in Summer (Vocals + Orchestral).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1171,
		"Title": "Fleeting Words - Another Edit Version",
		"FileName": "1.07 Fleeting Words - Another Edit Version.mp3",
		"ArtistID": 142,
		"AlbumID": 370,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1172,
		"Title": "Song of the Ancients - Another Edit Version",
		"FileName": "1.08 Song of the Ancients - Another Edit Version.mp3",
		"ArtistID": 181,
		"AlbumID": 370,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1173,
		"Title": "The Wretched Automatons",
		"FileName": "1.08 The Wretched Automatons..mp3",
		"ArtistID": 142,
		"AlbumID": 368,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1174,
		"Title": "The Wretched Automatons",
		"FileName": "1.08 The Wretched Automatons.mp3",
		"ArtistID": 148,
		"AlbumID": 365,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1175,
		"Title": "City of Commerce",
		"FileName": "1.09 City of Commerce.mp3",
		"ArtistID": 142,
		"AlbumID": 368,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1176,
		"Title": "City Ruins [Rays of Light] (Dynamic - No Vocals)",
		"FileName": "1.09 City Ruins (Rays of Light) (Dynamic - No Vocals).mp3",
		"ArtistID": 142,
		"AlbumID": 367,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1177,
		"Title": "Song of the Ancients - Atonement",
		"FileName": "1.09 Song of the Ancients - Atonement.mp3",
		"ArtistID": 182,
		"AlbumID": 371,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1178,
		"Title": "City of Commerce",
		"FileName": "1.10 City of Commerce.mp3",
		"ArtistID": 148,
		"AlbumID": 365,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1179,
		"Title": "Song of the Ancients - Popola",
		"FileName": "1.10 Song of the Ancients - Popola.mp3",
		"ArtistID": 142,
		"AlbumID": 368,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1180,
		"Title": "Alien Manifestation",
		"FileName": "1.11 Alien Manifestation.mp3",
		"ArtistID": 183,
		"AlbumID": 371,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1181,
		"Title": "The Prestigious Mask",
		"FileName": "1.11 The Prestigious Mask..mp3",
		"ArtistID": 142,
		"AlbumID": 368,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1182,
		"Title": "The Prestigious Mask",
		"FileName": "1.11 The Prestigious Mask.mp3",
		"ArtistID": 148,
		"AlbumID": 365,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1183,
		"Title": "Emils Shop",
		"FileName": "1.12 Emils Shop.mp3",
		"ArtistID": 184,
		"AlbumID": 369,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1184,
		"Title": "Temple of Drifting Sands",
		"FileName": "1.12 Temple of Drifting Sands..mp3",
		"ArtistID": 142,
		"AlbumID": 368,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1185,
		"Title": "Temple of Drifting Sands",
		"FileName": "1.12 Temple of Drifting Sands.mp3",
		"ArtistID": 148,
		"AlbumID": 365,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1186,
		"Title": "Gods Bound by Rules",
		"FileName": "1.13 Gods Bound by Rules..mp3",
		"ArtistID": 142,
		"AlbumID": 368,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1187,
		"Title": "Gods Bound by Rules",
		"FileName": "1.13 Gods Bound by Rules.mp3",
		"ArtistID": 146,
		"AlbumID": 365,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1188,
		"Title": "Memories of Dust (Dynamic - No Vocals)",
		"FileName": "1.17 Memories of Dust (Dynamic - No Vocals).mp3",
		"ArtistID": 142,
		"AlbumID": 367,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1189,
		"Title": "Amusement Park (Dynamic - No Vocals)",
		"FileName": "1.22 Amusement Park (Dynamic - No Vocals).mp3",
		"ArtistID": 142,
		"AlbumID": 367,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1190,
		"Title": "City Ruins [Shade] (Dynamic - No Vocals)",
		"FileName": "1.28 City Ruins (Shade) (Dynamic - No Vocals).mp3",
		"ArtistID": 142,
		"AlbumID": 367,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1191,
		"Title": "Forest Kingdom (Dynamic - No Vocals)",
		"FileName": "1.33 Forest Kingdom (Dynamic - No Vocals).mp3",
		"ArtistID": 142,
		"AlbumID": 367,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1192,
		"Title": "Copied City (Dynamic - No Vocals)",
		"FileName": "1.37 Copied City (Dynamic - No Vocals).mp3",
		"ArtistID": 142,
		"AlbumID": 367,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1193,
		"Title": "Copied City (Dynamic - Vocals)",
		"FileName": "1.38 Copied City (Dynamic - Vocals).mp3",
		"ArtistID": 142,
		"AlbumID": 367,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1194,
		"Title": "The Tower (Dynamic - No Vocals)",
		"FileName": "1.42 The Tower (Dynamic - No Vocals).mp3",
		"ArtistID": 142,
		"AlbumID": 367,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1195,
		"Title": "Alien Manifestation",
		"FileName": "10 Alien Manifestation.mp3",
		"ArtistID": 142,
		"AlbumID": 361,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1196,
		"Title": "Copied City (Ver1.1a)",
		"FileName": "10. Copied City (Ver1.1a).mp3",
		"ArtistID": 138,
		"AlbumID": 356,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1197,
		"Title": "Shadowlord",
		"FileName": "10. Shadowlord -Live.mp3",
		"ArtistID": 142,
		"AlbumID": 377,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1198,
		"Title": "Shadowlord",
		"FileName": "10. Shadowlord.mp3",
		"ArtistID": 144,
		"AlbumID": 362,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1199,
		"Title": "Weight of the World (Emi Evans & JNique Nicole Vocals)",
		"FileName": "10. Weight of the World (Emi Evans & JNique Nicole Vocals).mp3",
		"ArtistID": 145,
		"AlbumID": 375,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1200,
		"Title": "Weight of the World",
		"FileName": "10. Weight of the World.mp3",
		"ArtistID": 145,
		"AlbumID": 359,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1201,
		"Title": "Grandma [Reunion] (Full)",
		"FileName": "10.01 Grandma (Reunion) (Full).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1202,
		"Title": "Grandma [Reunion] (Orchestral)",
		"FileName": "10.02 Grandma (Reunion) (Orchestral).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1203,
		"Title": "Ashes of Dreams",
		"FileName": "11. Ashes of Dreams.mp3",
		"ArtistID": 185,
		"AlbumID": 362,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1204,
		"Title": "Crumbling Lies - Front (Ver1.1a)",
		"FileName": "11. Crumbling Lies - Front (Ver1.1a).mp3",
		"ArtistID": 138,
		"AlbumID": 356,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1205,
		"Title": "Mourning",
		"FileName": "13 Mourning.mp3",
		"ArtistID": 142,
		"AlbumID": 361,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1206,
		"Title": "Song of the Ancients - Fate",
		"FileName": "13. Song of the Ancients - Fate.mp3",
		"ArtistID": 142,
		"AlbumID": 377,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1207,
		"Title": "Kaine [Escape] (Full)",
		"FileName": "13.02 Kaine (Escape) (Full).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1208,
		"Title": "Kaine [Escape] (Orchestral + Drums)",
		"FileName": "13.03 Kaine (Escape) (Orchestral + Drums).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1209,
		"Title": "Kaine [Escape] (Orchestral)",
		"FileName": "13.04 Kaine (Escape) (Orchestral).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1210,
		"Title": "Kaine [Escape] (Vocals + Drums)",
		"FileName": "13.05 Kaine (Escape) (Vocals + Drums).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1211,
		"Title": "Kaine [Escape] (Vocals + Orchestral)",
		"FileName": "13.06 Kaine (Escape) (Vocals + Orchestral).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1212,
		"Title": "Breath of Ire - Japanese",
		"FileName": "14 Breath of Ire - Japanese.mp3",
		"ArtistID": 153,
		"AlbumID": 373,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1213,
		"Title": "Weight of the World",
		"FileName": "14 Weight of the World.mp3",
		"ArtistID": 142,
		"AlbumID": 361,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1214,
		"Title": "The Wretched Automatons (Full)",
		"FileName": "14.02 The Wretched Automatons (Full).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1215,
		"Title": "The Wretched Automatons (Orchestral + Synth + Drums)",
		"FileName": "14.04 The Wretched Automatons (Orchestral + Synth + Drums).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1216,
		"Title": "The Wretched Automatons (Vocals + Drums)",
		"FileName": "14.09 The Wretched Automatons (Vocals + Drums).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1217,
		"Title": "The Wretched Automatons (Vocals + Orchestral + Drums)",
		"FileName": "14.10 The Wretched Automatons (Vocals + Orchestral + Drums).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1218,
		"Title": "The Wretched Automatons (Vocals + Synth + Drums))",
		"FileName": "14.13 The Wretched Automatons (Vocals + Synth + Drums)).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1219,
		"Title": "The Wretched Automatons (Vocals + Synth)",
		"FileName": "14.14 The Wretched Automatons (Vocals + Synth).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1220,
		"Title": "Lady of Lightning - Japanese",
		"FileName": "15 Lady of Lightning - Japanese.mp3",
		"ArtistID": 152,
		"AlbumID": 373,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1221,
		"Title": "Kamuras Song of Purification - Summer Remix",
		"FileName": "17 Kamuras Song of Purification - Summer Remix.mp3",
		"ArtistID": 151,
		"AlbumID": 387,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1222,
		"Title": "Weight of the World - the End of YoRHa",
		"FileName": "17 Weight of the World - the End of YoRHa.mp3",
		"ArtistID": 142,
		"AlbumID": 361,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1223,
		"Title": "Kusabi - 楔",
		"FileName": "17. Kusabi - 楔.mp3",
		"ArtistID": 142,
		"AlbumID": 364,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1224,
		"Title": "Brave Hunters - Summer Remix",
		"FileName": "18 Brave Hunters - Summer Remix.mp3",
		"ArtistID": 151,
		"AlbumID": 387,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1225,
		"Title": "Mama no Otsukai - ママノオツカイ",
		"FileName": "18. Mama no Otsukai - ママノオツカイ.mp3",
		"ArtistID": 142,
		"AlbumID": 364,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1226,
		"Title": "Best Buddies - Summer Remix",
		"FileName": "19 Best Buddies - Summer Remix.mp3",
		"ArtistID": 151,
		"AlbumID": 387,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1227,
		"Title": "Kainé - Weiss Edition Arrangement",
		"FileName": "2.01 Kainé - Weiss Edition Arrangement.mp3",
		"ArtistID": 186,
		"AlbumID": 370,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1228,
		"Title": "Posessed by Disease (Medium - No Vocals)",
		"FileName": "2.01 Posessed by Disease (Medium - No Vocals).mp3",
		"ArtistID": 142,
		"AlbumID": 367,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1229,
		"Title": "The Dark Colossus Destroys All",
		"FileName": "2.01 The Dark Colossus Destroys All.mp3",
		"ArtistID": 142,
		"AlbumID": 368,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1230,
		"Title": "Song of the Ancients - Hollow Dreams",
		"FileName": "2.02 Song of the Ancients - Hollow Dreams.mp3",
		"ArtistID": 142,
		"AlbumID": 368,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1231,
		"Title": "Kainé - Salvation",
		"FileName": "2.03 Kainé - Salvation.mp3",
		"ArtistID": 142,
		"AlbumID": 368,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1232,
		"Title": "Possessed by Disease (Become as Gods)",
		"FileName": "2.03 Possessed by Disease (Become as Gods).mp3",
		"ArtistID": 142,
		"AlbumID": 367,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1233,
		"Title": "Kainé - Escape",
		"FileName": "2.04 Kainé - Escape.mp3",
		"ArtistID": 142,
		"AlbumID": 368,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1234,
		"Title": "Possessed by Disease (Kami ni Nare)",
		"FileName": "2.04 Possessed by Disease (Kami ni Nare).mp3",
		"ArtistID": 142,
		"AlbumID": 367,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1235,
		"Title": "Pascal",
		"FileName": "2.05 Pascal.mp3",
		"ArtistID": 142,
		"AlbumID": 369,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1236,
		"Title": "Possessed by Disease (Normal - No Vocals)",
		"FileName": "2.05 Possessed by Disease (Normal - No Vocals).mp3",
		"ArtistID": 142,
		"AlbumID": 367,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1237,
		"Title": "Forest Kingdom",
		"FileName": "2.06 Forest Kingdom.mp3",
		"ArtistID": 138,
		"AlbumID": 369,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1238,
		"Title": "Possessed by Disease (Normal - Vocals)",
		"FileName": "2.06 Possessed by Disease (Normal - Vocals).mp3",
		"ArtistID": 142,
		"AlbumID": 367,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1239,
		"Title": "The Lost Forest",
		"FileName": "2.06 The Lost Forest.mp3",
		"ArtistID": 150,
		"AlbumID": 365,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1240,
		"Title": "Copied City",
		"FileName": "2.08 Copied City.mp3",
		"ArtistID": 138,
		"AlbumID": 369,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1241,
		"Title": "The Lost Forest",
		"FileName": "2.08 The Lost Forest.mp3",
		"ArtistID": 142,
		"AlbumID": 368,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1242,
		"Title": "Wretched Weaponry: Medium-Dynamic",
		"FileName": "2.09 Wretched Weaponry- Medium-Dynamic.mp3",
		"ArtistID": 142,
		"AlbumID": 369,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1243,
		"Title": "Kainé - Salvation",
		"FileName": "2.10 Kainé - Salvation.mp3",
		"ArtistID": 138,
		"AlbumID": 365,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1244,
		"Title": "Dance of the Evanescent",
		"FileName": "2.11 Dance of the Evanescent.mp3",
		"ArtistID": 142,
		"AlbumID": 368,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1245,
		"Title": "Shadowlords Castle - Roar",
		"FileName": "2.12 Shadowlords Castle - Roar.mp3",
		"ArtistID": 142,
		"AlbumID": 368,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1246,
		"Title": "Shadowlord",
		"FileName": "2.15 Shadowlord.mp3",
		"ArtistID": 142,
		"AlbumID": 368,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1247,
		"Title": "Bipolar Nightmare (Calm - No Vocals)",
		"FileName": "2.18 Bipolar Nightmare (Calm - No Vocals).mp3",
		"ArtistID": 142,
		"AlbumID": 367,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1248,
		"Title": "A Beautiful Song (Calm - No Vocals)",
		"FileName": "2.25 A Beautiful Song (Calm - No Vocals).mp3",
		"ArtistID": 142,
		"AlbumID": 367,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1249,
		"Title": "Crumbling Lies (Back)",
		"FileName": "2.45 Crumbling Lies (Back).mp3",
		"ArtistID": 142,
		"AlbumID": 367,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1250,
		"Title": "Crumbling Lies (Front)",
		"FileName": "2.46 Crumbling Lies (Front).mp3",
		"ArtistID": 142,
		"AlbumID": 367,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1251,
		"Title": "Crumbling Lies (Route C Opening)",
		"FileName": "2.47 Crumbling Lies (Route C Opening).mp3",
		"ArtistID": 142,
		"AlbumID": 367,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1252,
		"Title": "The Sound of the End (Dynamic - No Vocals)",
		"FileName": "2.52 The Sound of the End (Dynamic - No Vocals).mp3",
		"ArtistID": 142,
		"AlbumID": 367,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1253,
		"Title": "The Sound of the End (Medium - No Vocals)",
		"FileName": "2.53 The Sound of the End (Medium - No Vocals).mp3",
		"ArtistID": 142,
		"AlbumID": 367,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1254,
		"Title": "Alien Manifestation (Dynamic - No Vocals)",
		"FileName": "2.56 Alien Manifestation (Dynamic - No Vocals).mp3",
		"ArtistID": 142,
		"AlbumID": 367,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1255,
		"Title": "Alien Manifestation (Dynamic - Vocals)",
		"FileName": "2.57 Alien Manifestation (Dynamic - Vocals).mp3",
		"ArtistID": 142,
		"AlbumID": 367,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1256,
		"Title": "Alien Manifestation (Normal - No Vocals)",
		"FileName": "2.58 Alien Manifestation (Normal - No Vocals).mp3",
		"ArtistID": 142,
		"AlbumID": 367,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1257,
		"Title": "Alien Manifestation (Normal - Vocals)",
		"FileName": "2.59 Alien Manifestation (Normal - Vocals).mp3",
		"ArtistID": 142,
		"AlbumID": 367,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1258,
		"Title": "The Lost Forest (Full)",
		"FileName": "22.02 The Lost Forest (Full).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1259,
		"Title": "Temple of the Drifting Sands (Vocals 1 + Orchestral + Drums)",
		"FileName": "24.06 Temple of the Drifting Sands (Vocals 1 + Orchestral + Drums).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1260,
		"Title": "Temple of the Drifting Sands (Vocals 1 + Vocals 2 + Drums)",
		"FileName": "24.08 Temple of the Drifting Sands (Vocals 1 + Vocals 2 + Drums).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1261,
		"Title": "Temple of the Drifting Sands (Vocals 2 + Orchestral + Drums)",
		"FileName": "24.13 Temple of the Drifting Sands (Vocals 2 + Orchestral + Drums).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1262,
		"Title": "Gods Bound by Rules (Full)",
		"FileName": "25.04 Gods Bound by Rules (Full).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1263,
		"Title": "Gods Bound by Rules (Orchestral + Ambient)",
		"FileName": "25.06 Gods Bound by Rules (Orchestral + Ambient).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1264,
		"Title": "Gods Bound by Rules (Orchestral)",
		"FileName": "25.08 Gods Bound by Rules (Orchestral).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1265,
		"Title": "Gods Bound by Rules (Vocals + Orchestral + Ambient)",
		"FileName": "25.12 Gods Bound by Rules (Vocals + Orchestral + Ambient).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1266,
		"Title": "Gods Bound by Rules (Vocals + Orchestral + Drums)",
		"FileName": "25.13 Gods Bound by Rules (Vocals + Orchestral + Drums).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1267,
		"Title": "Gods Bound by Rules (Vocals + Orchestral)",
		"FileName": "25.14 Gods Bound by Rules (Vocals + Orchestral).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1268,
		"Title": "Emil [Karma] (Full)",
		"FileName": "27.02 Emil (Karma) (Full).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1269,
		"Title": "Emil [Karma] (Orchestral + Piano + Drums)",
		"FileName": "27.04 Emil (Karma) (Orchestral + Piano + Drums).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1270,
		"Title": "Emil [Karma] (Orchestral + Piano)",
		"FileName": "27.05 Emil (Karma) (Orchestral + Piano).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1271,
		"Title": "Emil [Karma] (Orchestral)",
		"FileName": "27.06 Emil (Karma) (Orchestral).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1272,
		"Title": "Emil [Karma] (Piano)",
		"FileName": "27.08 Emil (Karma) (Piano).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1273,
		"Title": "Emil [Karma] (Vocals + Orchestral + Piano)",
		"FileName": "27.11 Emil (Karma) (Vocals + Orchestral + Piano).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1274,
		"Title": "Emil [Karma] (Vocals + Orchestral)",
		"FileName": "27.12 Emil (Karma) (Vocals + Orchestral).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1275,
		"Title": "Emil [Karma] (Vocals + Piano + Drums)",
		"FileName": "27.13 Emil (Karma) (Vocals + Piano + Drums).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1276,
		"Title": "Emil [Karma] (Vocals + Piano)",
		"FileName": "27.14 Emil (Karma) (Vocals + Piano).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1277,
		"Title": "Fleeting Words - Outsider",
		"FileName": "3.02 Fleeting Words - Outsider.mp3",
		"ArtistID": 138,
		"AlbumID": 365,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1278,
		"Title": "Crumbling Lies - Front",
		"FileName": "3.03 Crumbling Lies - Front.mp3",
		"ArtistID": 138,
		"AlbumID": 369,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1279,
		"Title": "Song of the Ancients - Hollow Dreams",
		"FileName": "3.04 Song of the Ancients - Hollow Dreams.mp3",
		"ArtistID": 138,
		"AlbumID": 365,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1280,
		"Title": "Shadowlords Castle",
		"FileName": "3.06 Shadowlords Castle.mp3",
		"ArtistID": 148,
		"AlbumID": 365,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1281,
		"Title": "Song of the Ancients - Atonement",
		"FileName": "3.07 Song of the Ancients - Atonement.mp3",
		"ArtistID": 142,
		"AlbumID": 369,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1282,
		"Title": "Song of the Ancients - Fate",
		"FileName": "3.08 Song of the Ancients - Fate.mp3",
		"ArtistID": 148,
		"AlbumID": 365,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1283,
		"Title": "Emil - Karma",
		"FileName": "3.09 Emil - Karma.mp3",
		"ArtistID": 148,
		"AlbumID": 365,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1284,
		"Title": "Alien Manifestation",
		"FileName": "3.11 Alien Manifestation.mp3",
		"ArtistID": 142,
		"AlbumID": 369,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1285,
		"Title": "Shadowlord",
		"FileName": "3.11 Shadowlord.mp3",
		"ArtistID": 148,
		"AlbumID": 365,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1286,
		"Title": "Grandma - Reunion",
		"FileName": "3.13 Grandma - Reunion.mp3",
		"ArtistID": 138,
		"AlbumID": 365,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1287,
		"Title": "Kainé - Escape",
		"FileName": "3.14 Kainé - Escape.mp3",
		"ArtistID": 138,
		"AlbumID": 365,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1288,
		"Title": "The Sound of the End",
		"FileName": "3.14 The Sound of the End.mp3",
		"ArtistID": 138,
		"AlbumID": 369,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1289,
		"Title": "Weight of the World Nouveau - FR Version",
		"FileName": "3.15 Weight of the World Nouveau - FR Version.mp3",
		"ArtistID": 142,
		"AlbumID": 369,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1290,
		"Title": "Weight of the World - The End of YoRHa",
		"FileName": "3.16 Weight of the World - The End of YoRHa.mp3",
		"ArtistID": 142,
		"AlbumID": 369,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1291,
		"Title": "Weight of the World (the End of YoRHa - No Choir)",
		"FileName": "3.33 Weight of the World (the End of YoRHa - No Choir).mp3",
		"ArtistID": 142,
		"AlbumID": 367,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1292,
		"Title": "Weight of the World (the End of YoRHa - No Vocals)",
		"FileName": "3.34 Weight of the World (the End of YoRHa - No Vocals).mp3",
		"ArtistID": 142,
		"AlbumID": 367,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1293,
		"Title": "Weight of the World (the End of YoRHa)",
		"FileName": "3.35 Weight of the World (the End of YoRHa).mp3",
		"ArtistID": 142,
		"AlbumID": 367,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1294,
		"Title": "Shadowlords Castle (Full)",
		"FileName": "32.02 Shadowlords Castle (Full).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1295,
		"Title": "Shadowlords Castle (Orchestral + Organ + Drums)",
		"FileName": "32.04 Shadowlords Castle (Orchestral + Organ + Drums).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1296,
		"Title": "Shadowlords Castle (Orchestral + Organ)",
		"FileName": "32.05 Shadowlords Castle (Orchestral + Organ).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1297,
		"Title": "Shadowlords Castle (Orchestral)",
		"FileName": "32.06 Shadowlords Castle (Orchestral).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1298,
		"Title": "Shadowlords Castle (Vocals + Orchestral + Organ)",
		"FileName": "32.11 Shadowlords Castle (Vocals + Orchestral + Organ).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1299,
		"Title": "Shadowlords Castle (Vocals + Organ + Drums)",
		"FileName": "32.13 Shadowlords Castle (Vocals + Organ + Drums).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1300,
		"Title": "Shadowlord [Phase 1] (Full)",
		"FileName": "33.01 Shadowlord (Phase 1) (Full).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1301,
		"Title": "Shadowlord [Phase 1] (Vocals + Orchestral + Music Box)",
		"FileName": "33.10 Shadowlord (Phase 1) (Vocals + Orchestral + Music Box).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1302,
		"Title": "Shadowlord [Phase 1] (Vocals + Orchestral + Organ)",
		"FileName": "33.11 Shadowlord (Phase 1) (Vocals + Orchestral + Organ).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1303,
		"Title": "Shadowlord [Phase 2] (Organ)",
		"FileName": "34.07 Shadowlord (Phase 2) (Organ).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1304,
		"Title": "Analagous Memories (Full)",
		"FileName": "39.02 Analagous Memories (Full).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1305,
		"Title": "Analagous Memories (Orchestral + Piano + Drums)",
		"FileName": "39.04 Analagous Memories (Orchestral + Piano + Drums).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1306,
		"Title": "Song of the Ancients [Fate] (No Drums Intro)",
		"FileName": "4.01 Song of the Ancients (Fate) (No Drums Intro).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1307,
		"Title": "Song of the Ancients [Fate] (Special Soundtrack Version)",
		"FileName": "4.02 Song of the Ancients (Fate) (Special Soundtrack Version).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1308,
		"Title": "Song of the Ancients [Fate]",
		"FileName": "4.03 Song of the Ancients (Fate).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1309,
		"Title": "MA Attract Replicant",
		"FileName": "41.02 MA Attract Replicant.mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1310,
		"Title": "Hills of Radiant Winds (Full)",
		"FileName": "5.02 Hills of Radiant Winds (Full).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1311,
		"Title": "Hills of Radiant Winds (Orchestral + Drums)",
		"FileName": "5.03 Hills of Radiant Winds (Orchestral + Drums).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1312,
		"Title": "The Incomplete Stone (Full)",
		"FileName": "6.02 The Incomplete Stone (Full).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1313,
		"Title": "The Incomplete Stone (Vocals Female + Orchestral + Drums)",
		"FileName": "6.06 The Incomplete Stone (Vocals Female + Orchestral + Drums).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1314,
		"Title": "The Incomplete Stone (Vocals Male + Orchestral + Drums)",
		"FileName": "6.10 The Incomplete Stone (Vocals Male + Orchestral + Drums).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1315,
		"Title": "Cold Steel Coffin (Full)",
		"FileName": "8.02 Cold Steel Coffin (Full).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1316,
		"Title": "Cold Steel Coffin (Orchestral + Drums)",
		"FileName": "8.03 Cold Steel Coffin (Orchestral + Drums).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1317,
		"Title": "Cold Steel Coffin (Orchestral + Piano + Drums)",
		"FileName": "8.04 Cold Steel Coffin (Orchestral + Piano + Drums).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1318,
		"Title": "Cold Steel Coffin (Orchestral + Piano)",
		"FileName": "8.05 Cold Steel Coffin (Orchestral + Piano).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1319,
		"Title": "Cold Steel Coffin (Orchestral)",
		"FileName": "8.06 Cold Steel Coffin (Orchestral).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1320,
		"Title": "Cold Steel Coffin (Vocals + Drums)",
		"FileName": "8.09 Cold Steel Coffin (Vocals + Drums).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1321,
		"Title": "Cold Steel Coffin (Vocals + Orchestral + Drums)",
		"FileName": "8.10 Cold Steel Coffin (Vocals + Orchestral + Drums).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1322,
		"Title": "Cold Steel Coffin (Vocals + Piano + Drums)",
		"FileName": "8.13 Cold Steel Coffin (Vocals + Piano + Drums).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 11,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1323,
		"Title": "Brave Hunters (Minoto)",
		"FileName": "01 Brave Hunters (Minoto).mp3",
		"ArtistID": 151,
		"AlbumID": 373,
		"TagID": 12,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1324,
		"Title": "Kamuras Song of Purification (Hinoe) - Japanese",
		"FileName": "01 Kamuras Song of Purification (Hinoe) - Japanese.mp3",
		"ArtistID": 151,
		"AlbumID": 373,
		"TagID": 12,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1325,
		"Title": "Kamuras Song of Purification (Hinoe)",
		"FileName": "01 Kamuras Song of Purification (Hinoe).mp3",
		"ArtistID": 151,
		"AlbumID": 373,
		"TagID": 12,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1326,
		"Title": "Hajimari - 始マリ",
		"FileName": "01. Hajimari - 始マリ.mp3",
		"ArtistID": 150,
		"AlbumID": 372,
		"TagID": 12,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1327,
		"Title": "Brave Hunters (Minoto) - Japanese",
		"FileName": "02 Brave Hunters (Minoto) - Japanese.mp3",
		"ArtistID": 151,
		"AlbumID": 373,
		"TagID": 12,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1328,
		"Title": "Komorebi - 木漏レ日",
		"FileName": "02. Komorebi - 木漏レ日.mp3",
		"ArtistID": 150,
		"AlbumID": 364,
		"TagID": 12,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1329,
		"Title": "Toki no Shizuku - 時ノ雫",
		"FileName": "03. Toki no Shizuku - 時ノ雫.mp3",
		"ArtistID": 142,
		"AlbumID": 372,
		"TagID": 12,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1330,
		"Title": "Kaikyō - 懐郷",
		"FileName": "05. Kaikyō - 懐郷.mp3",
		"ArtistID": 142,
		"AlbumID": 372,
		"TagID": 12,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1331,
		"Title": "Jigi - 児戯",
		"FileName": "06. Jigi - 児戯.mp3",
		"ArtistID": 142,
		"AlbumID": 364,
		"TagID": 12,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1332,
		"Title": "The Wretched Automatons-a capella",
		"FileName": "08 The Wretched Automatons-a capella.mp3",
		"ArtistID": 142,
		"AlbumID": 388,
		"TagID": 12,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1333,
		"Title": "Wretched Weaponry (Quiet - No Vocals)",
		"FileName": "1.04 Wretched Weaponry (Quiet - No Vocals).mp3",
		"ArtistID": 142,
		"AlbumID": 367,
		"TagID": 12,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1334,
		"Title": "Wretched Weaponry (VOCALS ONLY)",
		"FileName": "1.05 Wretched Weaponry (VOCALS ONLY).mp3",
		"ArtistID": 142,
		"AlbumID": 367,
		"TagID": 12,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1335,
		"Title": "City Ruins [Rays of Light] (VOCALS ONLY)",
		"FileName": "1.12 City Ruins (Rays of Light) (VOCALS ONLY).mp3",
		"ArtistID": 142,
		"AlbumID": 367,
		"TagID": 12,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1336,
		"Title": "Peaceful Sleep (Music Box)",
		"FileName": "1.13 Peaceful Sleep (Music Box).mp3",
		"ArtistID": 142,
		"AlbumID": 367,
		"TagID": 12,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1337,
		"Title": "Dispossession - Pluck Ver.",
		"FileName": "1.18 Dispossession - Pluck Ver..mp3",
		"ArtistID": 142,
		"AlbumID": 368,
		"TagID": 12,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1338,
		"Title": "Dispossession - Music Box Ver.",
		"FileName": "1.19 Dispossession - Music Box Ver..mp3",
		"ArtistID": 142,
		"AlbumID": 368,
		"TagID": 12,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1339,
		"Title": "Yonah - Pluck Ver. 1",
		"FileName": "1.22 Yonah - Pluck Ver. 1.mp3",
		"ArtistID": 142,
		"AlbumID": 368,
		"TagID": 12,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1340,
		"Title": "Yonah - Pluck Ver. 2",
		"FileName": "1.23 Yonah - Pluck Ver. 2.mp3",
		"ArtistID": 142,
		"AlbumID": 368,
		"TagID": 12,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1341,
		"Title": "Amusement Park (VOCALS ONLY)",
		"FileName": "1.25 Amusement Park (VOCALS ONLY).mp3",
		"ArtistID": 142,
		"AlbumID": 367,
		"TagID": 12,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1342,
		"Title": "City Ruins [Shade] (VOCALS ONLY)",
		"FileName": "1.31 City Ruins (Shade) (VOCALS ONLY).mp3",
		"ArtistID": 142,
		"AlbumID": 367,
		"TagID": 12,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1343,
		"Title": "The Tower (VOCALS ONLY)",
		"FileName": "1.45 The Tower (VOCALS ONLY).mp3",
		"ArtistID": 142,
		"AlbumID": 367,
		"TagID": 12,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1344,
		"Title": "Shadowlord-Music Box Ver.",
		"FileName": "10 Shadowlord-Music Box Ver.mp3",
		"ArtistID": 138,
		"AlbumID": 388,
		"TagID": 12,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1345,
		"Title": "Hakuhyō no Tsuki - 薄氷ノ月",
		"FileName": "12. Hakuhyō no Tsuki - 薄氷ノ月.mp3",
		"ArtistID": 142,
		"AlbumID": 364,
		"TagID": 12,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1346,
		"Title": "Kaine [Escape] (Vocals)",
		"FileName": "13.07 Kaine (Escape) (Vocals).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 12,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1347,
		"Title": "The Wretched Automatons (Vocals)",
		"FileName": "14.15 The Wretched Automatons (Vocals).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 12,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1348,
		"Title": "Repose (Guitar)",
		"FileName": "16.02 Repose (Guitar).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 12,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1349,
		"Title": "Repose (Orchestral)",
		"FileName": "16.04 Repose (Orchestral).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 12,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1350,
		"Title": "Repose (Vocals + Guitar)",
		"FileName": "16.05 Repose (Vocals + Guitar).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 12,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1351,
		"Title": "Yonah (Piano)",
		"FileName": "17.01 Yonah (Piano).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 12,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1352,
		"Title": "Yonah (Pluck)",
		"FileName": "17.02 Yonah (Pluck).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 12,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1353,
		"Title": "Dispossession (Music Box)",
		"FileName": "18.01 Dispossession (Music Box).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 12,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1354,
		"Title": "Dispossession (Piano)",
		"FileName": "18.02 Dispossession (Piano).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 12,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1355,
		"Title": "Dispossession (Strings)",
		"FileName": "18.03 Dispossession (Strings).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 12,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1356,
		"Title": "Halua",
		"FileName": "19.01 Halua.mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 12,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1357,
		"Title": "Song of the Ancients (Ambient)",
		"FileName": "2.01 Song of the Ancients (Ambient).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 12,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1358,
		"Title": "Song of the Ancients (Vocals Guitar)",
		"FileName": "2.10 Song of the Ancients (Vocals Guitar).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 12,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1359,
		"Title": "Song of the Ancients (Vocals)",
		"FileName": "2.11 Song of the Ancients (Vocals).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 12,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1360,
		"Title": "Ashes of Dreams - Lost Music Box Version",
		"FileName": "2.15 Ashes of Dreams - Lost Music Box Version.mp3",
		"ArtistID": 146,
		"AlbumID": 365,
		"TagID": 12,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1361,
		"Title": "The Ultimate Weapon (Vocals 1 + Orchestral)",
		"FileName": "26.07 The Ultimate Weapon (Vocals 1 + Orchestral).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 12,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1362,
		"Title": "The Ultimate Weapon (Vocals 1 + Vocals 2)",
		"FileName": "26.10 The Ultimate Weapon (Vocals 1 + Vocals 2).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 12,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1363,
		"Title": "The Ultimate Weapon (Vocals 1)",
		"FileName": "26.11 The Ultimate Weapon (Vocals 1).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 12,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1364,
		"Title": "The Ultimate Weapon (Vocals 2 + Orchestral)",
		"FileName": "26.14 The Ultimate Weapon (Vocals 2 + Orchestral).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 12,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1365,
		"Title": "The Ultimate Weapon (Vocals 2)",
		"FileName": "26.15 The Ultimate Weapon (Vocals 2).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 12,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1366,
		"Title": "Emil [Karma] (Vocals)",
		"FileName": "27.15 Emil (Karma) (Vocals).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 12,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1367,
		"Title": "Emil [Sacrifice] (Vocals)",
		"FileName": "28.03 Emil (Sacrifice) (Vocals).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 12,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1368,
		"Title": "Voice of no Return (Guitar)",
		"FileName": "3.03 Voice of no Return (Guitar).mp3",
		"ArtistID": 142,
		"AlbumID": 367,
		"TagID": 12,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1369,
		"Title": "Dispossession - Music Box Ver.",
		"FileName": "3.05 Dispossession - Music Box Ver..mp3",
		"ArtistID": 150,
		"AlbumID": 365,
		"TagID": 12,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1370,
		"Title": "Voice of no Return (VOCALS ONLY)",
		"FileName": "3.05 Voice of no Return (VOCALS ONLY).mp3",
		"ArtistID": 142,
		"AlbumID": 367,
		"TagID": 12,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1371,
		"Title": "Broken Heart (Background)",
		"FileName": "3.19 Broken Heart (Background).mp3",
		"ArtistID": 142,
		"AlbumID": 367,
		"TagID": 12,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1372,
		"Title": "Treasured Times (Background)",
		"FileName": "3.24 Treasured Times (Background).mp3",
		"ArtistID": 142,
		"AlbumID": 367,
		"TagID": 12,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1373,
		"Title": "Shadowlords Castle (Organ)",
		"FileName": "32.08 Shadowlords Castle (Organ).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 12,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1374,
		"Title": "Shadowlord [Phase 1] (Music Box)",
		"FileName": "33.02 Shadowlord (Phase 1) (Music Box).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 12,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1375,
		"Title": "Ashes of Dreams (Music Box)",
		"FileName": "36.01 Ashes of Dreams (Music Box).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 12,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1376,
		"Title": "Fleeting Words [Family] (Vocals)",
		"FileName": "37.03 Fleeting Words (Family) (Vocals).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 12,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1377,
		"Title": "Hills of Radiant Winds (Vocals)",
		"FileName": "5.07 Hills of Radiant Winds (Vocals).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 12,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1378,
		"Title": "The Incomplete Stone (Vocals Female)",
		"FileName": "6.08 The Incomplete Stone (Vocals Female).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 12,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1379,
		"Title": "Grandma (Vocals)",
		"FileName": "9.07 Grandma (Vocals).mp3",
		"ArtistID": 147,
		"AlbumID": 366,
		"TagID": 12,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1380,
		"Title": "11 Giờ 11 Phút - Htrol Remix",
		"FileName": "11 Giờ 11 Phút - Htrol Remix.mp3",
		"ArtistID": 187,
		"AlbumID": 390,
		"TagID": 13,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1381,
		"Title": "Anh đã lạc vào - Htrol Remix",
		"FileName": "Anh đã lạc vào - Htrol Remix.mp3",
		"ArtistID": 187,
		"AlbumID": 390,
		"TagID": 13,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1382,
		"Title": "Bên Trên Tầng Lâu  - Htrol Remix",
		"FileName": "Bên Trên Tầng Lâu  - Htrol Remix.mp3",
		"ArtistID": 187,
		"AlbumID": 390,
		"TagID": 13,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1383,
		"Title": "Có Duyên Không Nợ Remix - Htrol Remix",
		"FileName": "Có Duyên Không Nợ Remix - Htrol Remix.mp3",
		"ArtistID": 187,
		"AlbumID": 390,
		"TagID": 13,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1384,
		"Title": "Có Trăng Quên Đèn - Htrol Remix",
		"FileName": "Có Trăng Quên Đèn - Htrol Remix.mp3",
		"ArtistID": 187,
		"AlbumID": 390,
		"TagID": 13,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1385,
		"Title": "Cảm Ơn Vì Tất Cả - Htrol Remix",
		"FileName": "Cảm Ơn Vì Tất Cả - Htrol Remix.mp3",
		"ArtistID": 187,
		"AlbumID": 390,
		"TagID": 13,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1386,
		"Title": "DƯỚI TÒA SEN VÀNG - AnhVu REMIX",
		"FileName": "DƯỚI TÒA SEN VÀNG - AnhVu REMIX.mp3",
		"ArtistID": 188,
		"AlbumID": 391,
		"TagID": 13,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1387,
		"Title": "Em là nhất miền Tây - Htrol Remix",
		"FileName": "Em là nhất miền Tây - Htrol Remix.mp3",
		"ArtistID": 187,
		"AlbumID": 390,
		"TagID": 13,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1388,
		"Title": "Kiếp Má Hồng - Htrol Remix",
		"FileName": "Kiếp Má Hồng - Htrol Remix.mp3",
		"ArtistID": 187,
		"AlbumID": 390,
		"TagID": 13,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1389,
		"Title": "Là Anh - Htrol Remix",
		"FileName": "Là Anh - Htrol Remix.mp3",
		"ArtistID": 187,
		"AlbumID": 390,
		"TagID": 13,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1390,
		"Title": "Nen Va Hoa - SONBEAT REMIX",
		"FileName": "Nen Va Hoa - SONBEAT REMIX.mp3",
		"ArtistID": 17,
		"AlbumID": 392,
		"TagID": 13,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1391,
		"Title": "Như Bến Đợi Đò - Htrol Remix",
		"FileName": "Như Bến Đợi Đò - Htrol Remix.mp3",
		"ArtistID": 187,
		"AlbumID": 390,
		"TagID": 13,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1392,
		"Title": "Rhymastic - Yêu 5 Remix",
		"FileName": "Rhymastic - Yêu 5 Remix.mp3",
		"ArtistID": 189,
		"AlbumID": 393,
		"TagID": 13,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1393,
		"Title": "Sợ Đánh Mất Em - Htrol Remix",
		"FileName": "Sợ Đánh Mất Em - Htrol Remix.mp3",
		"ArtistID": 187,
		"AlbumID": 390,
		"TagID": 13,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1394,
		"Title": "Thiệp Hồng Em Trao - Htrol Remix",
		"FileName": "Thiệp Hồng Em Trao - Htrol Remix.mp3",
		"ArtistID": 187,
		"AlbumID": 390,
		"TagID": 13,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1395,
		"Title": "Anh Sai Rồi",
		"FileName": "Anh Sai Rồi.mp3",
		"ArtistID": 190,
		"AlbumID": 394,
		"TagID": 14,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1396,
		"Title": "Anh Đã Quen Với Cô Đơn",
		"FileName": "Anh Đã Quen Với Cô Đơn.mp3",
		"ArtistID": 191,
		"AlbumID": 395,
		"TagID": 14,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1397,
		"Title": "Buông Đôi Tay Nhau Ra",
		"FileName": "Buông Đôi Tay Nhau Ra.mp3",
		"ArtistID": 190,
		"AlbumID": 394,
		"TagID": 14,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1398,
		"Title": "Bức Tranh Từ Nước Mắt",
		"FileName": "Bức Tranh Từ Nước Mắt.mp3",
		"ArtistID": 192,
		"AlbumID": 396,
		"TagID": 14,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1399,
		"Title": "Chạm Đáy Nỗi Đau",
		"FileName": "Chạm Đáy Nỗi Đau.mp3",
		"ArtistID": 192,
		"AlbumID": 397,
		"TagID": 14,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1400,
		"Title": "Chắc Ai Đó Sẽ Về",
		"FileName": "Chắc Ai Đó Sẽ Về.mp3",
		"ArtistID": 190,
		"AlbumID": 394,
		"TagID": 14,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1401,
		"Title": "Càng Níu Giữ Càng Dễ Mất",
		"FileName": "Càng Níu Giữ Càng Dễ Mất.mp3",
		"ArtistID": 192,
		"AlbumID": 398,
		"TagID": 14,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1402,
		"Title": "có hẹn với thanh xuân",
		"FileName": "Có hẹn với thanh xuân.mp3",
		"ArtistID": 193,
		"AlbumID": 399,
		"TagID": 14,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1403,
		"Title": "Cảm Giác Lúc Ấy Sẽ Ra Sao",
		"FileName": "Cảm Giác Lúc Ấy Sẽ Ra Sao.mp3",
		"ArtistID": 194,
		"AlbumID": 400,
		"TagID": 14,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1404,
		"Title": "Day Dứt Nỗi Đau",
		"FileName": "Day Dứt Nỗi Đau.mp3",
		"ArtistID": 192,
		"AlbumID": 401,
		"TagID": 14,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1405,
		"Title": "Dưới Những Cơn Mưa",
		"FileName": "Dưới Những Cơn Mưa.mp3",
		"ArtistID": 192,
		"AlbumID": 402,
		"TagID": 14,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1406,
		"Title": "Em Không Sai Chúng Ta Sai",
		"FileName": "Em Không Sai Chúng Ta Sai.mp3",
		"ArtistID": 195,
		"AlbumID": 403,
		"TagID": 14,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1407,
		"Title": "Em Đã Biết",
		"FileName": "Em Đã Biết.mp3",
		"ArtistID": 193,
		"AlbumID": 404,
		"TagID": 14,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1408,
		"Title": "Gương Mặt Lạ Lẫm",
		"FileName": "Gương Mặt Lạ Lẫm.mp3",
		"ArtistID": 192,
		"AlbumID": 405,
		"TagID": 14,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1409,
		"Title": "Khi Người Lớn Cô Đơn",
		"FileName": "Khi Người Lớn Cô Đơn.mp3",
		"ArtistID": 196,
		"AlbumID": 406,
		"TagID": 14,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1410,
		"Title": "Không Cần Thêm Một Ai Nữa",
		"FileName": "Không Cần Thêm Một Ai Nữa.mp3",
		"ArtistID": 192,
		"AlbumID": 407,
		"TagID": 14,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1411,
		"Title": "Không Sao Mà, Em Đây Rồi",
		"FileName": "Không Sao Mà, Em Đây Rồi.mp3",
		"ArtistID": 193,
		"AlbumID": 408,
		"TagID": 14,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1412,
		"Title": "Mình Là Gì Của Nhau",
		"FileName": "Mình Là Gì Của Nhau.mp3",
		"ArtistID": 194,
		"AlbumID": 409,
		"TagID": 14,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1413,
		"Title": "Một Bước Yêu Vạn Dặm Đau",
		"FileName": "Một Bước Yêu Vạn Dặm Đau.mp3",
		"ArtistID": 192,
		"AlbumID": 410,
		"TagID": 14,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1414,
		"Title": "Một Nhà",
		"FileName": "Một Nhà.mp3",
		"ArtistID": 197,
		"AlbumID": 411,
		"TagID": 14,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1415,
		"Title": "Người Đáng Thương Là Anh",
		"FileName": "Người Đáng Thương Là Anh.mp3",
		"ArtistID": 198,
		"AlbumID": 412,
		"TagID": 14,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1416,
		"Title": "Nguoi Ay",
		"FileName": "Người Ấy.mp3",
		"ArtistID": 199,
		"AlbumID": 413,
		"TagID": 14,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1417,
		"Title": "Nếu Ngày Ấy",
		"FileName": "Nếu Ngày Ấy.mp3",
		"ArtistID": 191,
		"AlbumID": 414,
		"TagID": 14,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1418,
		"Title": "PHIEU BE NGOAN 2 - FOE TEAM",
		"FileName": "PHIEU BE NGOAN 2 - FOE TEAM.mp3",
		"ArtistID": 200,
		"AlbumID": 415,
		"TagID": 14,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1419,
		"Title": "Phía Sau Một Cô Gái",
		"FileName": "Phía Sau Một Cô Gái.mp3",
		"ArtistID": 191,
		"AlbumID": 416,
		"TagID": 14,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1420,
		"Title": "Sau Tất Cả",
		"FileName": "Sau Tất Cả Erik.mp3",
		"ArtistID": 201,
		"AlbumID": 417,
		"TagID": 14,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1421,
		"Title": "Tâm sự tuổi 30",
		"FileName": "Tâm Sự Tuổi 30.mp3",
		"ArtistID": 199,
		"AlbumID": 418,
		"TagID": 14,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1422,
		"Title": "Tìm Được Nhau Khó Thế Nào",
		"FileName": "Tìm Được Nhau Khó Thế Nào.mp3",
		"ArtistID": 192,
		"AlbumID": 419,
		"TagID": 14,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1423,
		"Title": "Tình Yêu Chắp Vá",
		"FileName": "Tình Yêu Chắp Vá.mp3",
		"ArtistID": 192,
		"AlbumID": 420,
		"TagID": 14,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1424,
		"Title": "Tự Lau Nước Mắt",
		"FileName": "Tự Lau Nước Mắt.mp3",
		"ArtistID": 192,
		"AlbumID": 421,
		"TagID": 14,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1425,
		"Title": "V.I.E.T Underground - Forever Love",
		"FileName": "V.I.E.T Underground - Forever Love.mp3",
		"ArtistID": 200,
		"AlbumID": 422,
		"TagID": 14,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1426,
		"Title": "Yêu 5",
		"FileName": "Yêu 5.mp3",
		"ArtistID": 189,
		"AlbumID": 393,
		"TagID": 14,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1427,
		"Title": "Yêu Là Tha Thứ",
		"FileName": "Yêu Là Tha Thứ.mp3",
		"ArtistID": 198,
		"AlbumID": 423,
		"TagID": 14,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1428,
		"Title": "Yêu Đơn Phương",
		"FileName": "Yêu Đơn Phương.mp3",
		"ArtistID": 198,
		"AlbumID": 424,
		"TagID": 14,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1429,
		"Title": "Âm Thầm Bên Em",
		"FileName": "Âm Thầm Bên Em.mp3",
		"ArtistID": 190,
		"AlbumID": 394,
		"TagID": 14,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1430,
		"Title": "Đau Để Trưởng Thành",
		"FileName": "Đau Để Trưởng Thành.mp3",
		"ArtistID": 198,
		"AlbumID": 425,
		"TagID": 14,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1431,
		"Title": "Đi Để Trở Về",
		"FileName": "Đi Để Trở Về.mp3",
		"ArtistID": 191,
		"AlbumID": 426,
		"TagID": 14,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1432,
		"Title": "Ấn Nút Nhớ... Thả Giấc Mơ",
		"FileName": "Ấn Nút Nhớ... Thả Giấc Mơ.mp3",
		"ArtistID": 190,
		"AlbumID": 394,
		"TagID": 14,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1433,
		"Title": "Anh Không Đòi Quà",
		"FileName": "Anh Không Đòi Quà.mp3",
		"ArtistID": 198,
		"AlbumID": 427,
		"TagID": 15,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1434,
		"Title": "Anh Đã Sai",
		"FileName": "Anh Đã Sai.mp3",
		"ArtistID": 198,
		"AlbumID": 428,
		"TagID": 15,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1435,
		"Title": "Buồn Lắm Em Ơi - Htrol Remix",
		"FileName": "Buồn Lắm Em Ơi - Htrol Remix.mp3",
		"ArtistID": 187,
		"AlbumID": 390,
		"TagID": 15,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1436,
		"Title": "Bán Duyên - Htrol Remix",
		"FileName": "Bán Duyên - Htrol Remix.mp3",
		"ArtistID": 187,
		"AlbumID": 390,
		"TagID": 15,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1437,
		"Title": "Bạch Nguyệt Quang Và Nốt Chu Sa - Htrol Remix",
		"FileName": "Bạch Nguyệt Quang Và Nốt Chu Sa - Htrol Remix.mp3",
		"ArtistID": 187,
		"AlbumID": 390,
		"TagID": 15,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1438,
		"Title": "Bạn Tình Ơi 3 - Htrol Remix",
		"FileName": "Bạn Tình Ơi 3 - Htrol Remix.mp3",
		"ArtistID": 187,
		"AlbumID": 390,
		"TagID": 15,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1439,
		"Title": "Bỏ Phật Nhập Ma - Htrol Remix",
		"FileName": "Bỏ Phật Nhập Ma - Htrol Remix.mp3",
		"ArtistID": 187,
		"AlbumID": 390,
		"TagID": 15,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1440,
		"Title": "Cause I Love You",
		"FileName": "Cause I Love You.mp3",
		"ArtistID": 202,
		"AlbumID": 429,
		"TagID": 15,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1441,
		"Title": "China - Anh Mỉm Cười Trông Thật Đẹp - Htrol Remix",
		"FileName": "China - Anh Mỉm Cười Trông Thật Đẹp - Htrol Remix.mp3",
		"ArtistID": 187,
		"AlbumID": 390,
		"TagID": 15,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1442,
		"Title": "Anh đi vội vàng hơn cả tình yêu - Htrol Remix",
		"FileName": "China - Anh đi vội vàng hơn cả tình yêu - Htrol Remix.mp3",
		"ArtistID": 187,
		"AlbumID": 390,
		"TagID": 15,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1443,
		"Title": "China - Bách Hoa Hương - Htrol Remix",
		"FileName": "China - Bách Hoa Hương - Htrol Remix.mp3",
		"ArtistID": 187,
		"AlbumID": 390,
		"TagID": 15,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1444,
		"Title": "China - Hồng Nhan Xưa - Htrol Remix",
		"FileName": "China - Hồng Nhan Xưa - Htrol Remix.mp3",
		"ArtistID": 187,
		"AlbumID": 390,
		"TagID": 15,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1445,
		"Title": "China - Không Bằng - Htrol Remix",
		"FileName": "China - Không Bằng - Htrol Remix.mp3",
		"ArtistID": 187,
		"AlbumID": 390,
		"TagID": 15,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1446,
		"Title": "China - Một Triệu Khả Năng - Htrol Remix",
		"FileName": "China - Một Triệu Khả Năng - Htrol Remix.mp3",
		"ArtistID": 187,
		"AlbumID": 390,
		"TagID": 15,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1447,
		"Title": "Nhân Gian Thán - Htrol Remix",
		"FileName": "China - Nhân Gian Thán - Htrol Remix.mp3",
		"ArtistID": 187,
		"AlbumID": 390,
		"TagID": 15,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1448,
		"Title": "China - Tam Thốn Thiên Đường - Htrol Remix",
		"FileName": "China - Tam Thốn Thiên Đường - Htrol Remix.mp3",
		"ArtistID": 187,
		"AlbumID": 390,
		"TagID": 15,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1449,
		"Title": "China - Trong Mắt Đều Là Anh - Htrol Remix",
		"FileName": "China - Trong Mắt Đều Là Anh - Htrol Remix.mp3",
		"ArtistID": 187,
		"AlbumID": 390,
		"TagID": 15,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1450,
		"Title": "China - Tô Mạc Già - Htrol",
		"FileName": "China - Tô Mạc Già - Htrol Remix.mp3",
		"ArtistID": 187,
		"AlbumID": 390,
		"TagID": 15,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1451,
		"Title": "China - Từ Cửu Môn Hồi Ức - Htrol Remix",
		"FileName": "China - Từ Cửu Môn Hồi Ức - Htrol Remix.mp3",
		"ArtistID": 187,
		"AlbumID": 390,
		"TagID": 15,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1452,
		"Title": "China - Tỳ Bà Hành - Htrol Remix",
		"FileName": "China - Tỳ Bà Hành - Htrol Remix.mp3",
		"ArtistID": 187,
		"AlbumID": 390,
		"TagID": 15,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1453,
		"Title": "China - Xuân Tháng 3 - Htrol Remix",
		"FileName": "China - Xuân Tháng 3 - Htrol Remix.mp3",
		"ArtistID": 187,
		"AlbumID": 390,
		"TagID": 15,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1454,
		"Title": "Chúng Ta Không Thuộc Về Nhau",
		"FileName": "Chúng Ta Không Thuộc Về Nhau.mp3",
		"ArtistID": 190,
		"AlbumID": 394,
		"TagID": 15,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1455,
		"Title": "Chưa Bao Giờ Em Quên - Htrol Remix",
		"FileName": "Chưa Bao Giờ Em Quên - Htrol Remix.mp3",
		"ArtistID": 187,
		"AlbumID": 390,
		"TagID": 15,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1456,
		"Title": "Cơn Mưa Ngang Qua",
		"FileName": "Cơn Mưa Ngang Qua.mp3",
		"ArtistID": 190,
		"AlbumID": 394,
		"TagID": 15,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1457,
		"Title": "Cứ Chill Thôi",
		"FileName": "Cứ Chill Thôi.mp3",
		"ArtistID": 193,
		"AlbumID": 430,
		"TagID": 15,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1458,
		"Title": "Daydream",
		"FileName": "Daydream.mp3",
		"ArtistID": 191,
		"AlbumID": 431,
		"TagID": 15,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1459,
		"Title": "Em Của Ngày Hôm Qua",
		"FileName": "Em Của Ngày Hôm Qua.mp3",
		"ArtistID": 190,
		"AlbumID": 394,
		"TagID": 15,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1460,
		"Title": "Em Mỉm Cười Trông Thật Đẹp - Htrol Remix",
		"FileName": "Em Mỉm Cười Trông Thật Đẹp - Htrol Remix.mp3",
		"ArtistID": 187,
		"AlbumID": 390,
		"TagID": 15,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1461,
		"Title": "Em Ổn Không - Htrol Remix",
		"FileName": "Em Ổn Không - Htrol Remix.mp3",
		"ArtistID": 187,
		"AlbumID": 390,
		"TagID": 15,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1462,
		"Title": "Giang Hải Không Độ Nàng - Htrol Remix",
		"FileName": "Giang Hải Không Độ Nàng - Htrol Remix.mp3",
		"ArtistID": 187,
		"AlbumID": 390,
		"TagID": 15,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1463,
		"Title": "Giá Như Anh Lặng Im",
		"FileName": "Giá Như Anh Lặng Im.mp3",
		"ArtistID": 198,
		"AlbumID": 432,
		"TagID": 15,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1464,
		"Title": "Hoài Công - Htrol Remix",
		"FileName": "Hoài Công - Htrol Remix.mp3",
		"ArtistID": 187,
		"AlbumID": 390,
		"TagID": 15,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1465,
		"Title": "Khó Vẽ Nụ Cười - Htrol",
		"FileName": "Khó Vẽ Nụ Cười - Htrol Remix.mp3",
		"ArtistID": 187,
		"AlbumID": 390,
		"TagID": 15,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1466,
		"Title": "Không Phải Dạng Vừa Đâu",
		"FileName": "Không Phải Dạng Vừa Đâu.mp3",
		"ArtistID": 190,
		"AlbumID": 394,
		"TagID": 15,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1467,
		"Title": "Kiếp Duyên Không Thành - Htrol",
		"FileName": "Kiếp Duyên Không Thành - Htrol Remix.mp3",
		"ArtistID": 187,
		"AlbumID": 390,
		"TagID": 15,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1468,
		"Title": "Kết Duyên - Htrol Remix",
		"FileName": "Kết Duyên - Htrol Remix.mp3",
		"ArtistID": 187,
		"AlbumID": 390,
		"TagID": 15,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1469,
		"Title": "Lalala",
		"FileName": "Lalala Soobin.mp3",
		"ArtistID": 191,
		"AlbumID": 433,
		"TagID": 15,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1470,
		"Title": "Lão Ái Xử Trảm - Htrol Remix",
		"FileName": "Lão Ái Xử Trảm - Htrol Remix.mp3",
		"ArtistID": 187,
		"AlbumID": 390,
		"TagID": 15,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1471,
		"Title": "Lạc Trôi",
		"FileName": "Lạc Trôi.mp3",
		"ArtistID": 190,
		"AlbumID": 394,
		"TagID": 15,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1472,
		"Title": "Lặng Lẽ Buông - Htrol Remix",
		"FileName": "Lặng Lẽ Buông - Htrol Remix.mp3",
		"ArtistID": 187,
		"AlbumID": 390,
		"TagID": 15,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1473,
		"Title": "Lữ Khách Qua Thời Gian - Htrol Remix",
		"FileName": "Lữ Khách Qua Thời Gian - Htrol Remix.mp3",
		"ArtistID": 187,
		"AlbumID": 390,
		"TagID": 15,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1474,
		"Title": "Mãi Mãi Bên Nhau",
		"FileName": "Mãi Mãi Bên Nhau.mp3",
		"ArtistID": 202,
		"AlbumID": 434,
		"TagID": 15,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1475,
		"Title": "Một Giấc Mộng Xưa - Htrol Remix",
		"FileName": "Một Giấc Mộng Xưa - Htrol Remix.mp3",
		"ArtistID": 187,
		"AlbumID": 390,
		"TagID": 15,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1476,
		"Title": "Một Nhà",
		"FileName": "Một Nhà.mp3",
		"ArtistID": 197,
		"AlbumID": 411,
		"TagID": 15,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1477,
		"Title": "Một Năm Mới Bình An",
		"FileName": "Một Năm Mới Bình An.mp3",
		"ArtistID": 190,
		"AlbumID": 394,
		"TagID": 15,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1478,
		"Title": "Một Đường Nở hoa - Htrol Remix",
		"FileName": "Một Đường Nở hoa - Htrol Remix.mp3",
		"ArtistID": 187,
		"AlbumID": 390,
		"TagID": 15,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1479,
		"Title": "Ngày Mai Em Đi",
		"FileName": "Ngày Mai Em Đi.mp3",
		"ArtistID": 191,
		"AlbumID": 435,
		"TagID": 15,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1480,
		"Title": "Người Âm Phủ",
		"FileName": "Người Âm Phủ.mp3",
		"ArtistID": 203,
		"AlbumID": 436,
		"TagID": 15,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1481,
		"Title": "Nhói Lòng Thuyền Hoa - Htrol Remix",
		"FileName": "Nhói Lòng Thuyền Hoa - Htrol Remix.mp3",
		"ArtistID": 187,
		"AlbumID": 390,
		"TagID": 15,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1482,
		"Title": "Như Phút Ban Đầu",
		"FileName": "Như Phút Ban Đầu.mp3",
		"ArtistID": 202,
		"AlbumID": 437,
		"TagID": 15,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1483,
		"Title": "Nhất Tiếu Giang Hồ - Htrol Remix",
		"FileName": "Nhất Tiếu Giang Hồ - Htrol Remix.mp3",
		"ArtistID": 187,
		"AlbumID": 390,
		"TagID": 15,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1484,
		"Title": "Não Cá Vàng",
		"FileName": "Não Cá Vàng.mp3",
		"ArtistID": 198,
		"AlbumID": 438,
		"TagID": 15,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1485,
		"Title": "Nơi Này Có Anh",
		"FileName": "Nơi Này Có Anh.mp3",
		"ArtistID": 190,
		"AlbumID": 394,
		"TagID": 15,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1486,
		"Title": "Nắng Ấm Xa Dần",
		"FileName": "Nắng Ấm Xa Dần.mp3",
		"ArtistID": 190,
		"AlbumID": 394,
		"TagID": 15,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1487,
		"Title": "Nến Và Hoa",
		"FileName": "Nến Và Hoa.mp3",
		"ArtistID": 189,
		"AlbumID": 439,
		"TagID": 15,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1488,
		"Title": "Nếu Em Không Về - Htrol Remix",
		"FileName": "Nếu Em Không Về - Htrol Remix.mp3",
		"ArtistID": 187,
		"AlbumID": 390,
		"TagID": 15,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1489,
		"Title": "Nếu Như Anh Thành Công - Htrol Remix",
		"FileName": "Nếu Như Anh Thành Công - Htrol Remix.mp3",
		"ArtistID": 187,
		"AlbumID": 390,
		"TagID": 15,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1490,
		"Title": "Phi Điểu Và Ve Sầu - Htrol Remix",
		"FileName": "Phi Điểu Và Ve Sầu - Htrol Remix.mp3",
		"ArtistID": 187,
		"AlbumID": 390,
		"TagID": 15,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1491,
		"Title": "Quan Sơn Tửu - Htrol Remix",
		"FileName": "Quan Sơn Tửu - Htrol Remix.mp3",
		"ArtistID": 187,
		"AlbumID": 390,
		"TagID": 15,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1492,
		"Title": "See Tình - Htrol Remix",
		"FileName": "See Tình - Htrol Remix.mp3",
		"ArtistID": 187,
		"AlbumID": 390,
		"TagID": 15,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1493,
		"Title": "Sài Gòn Đau Lòng Quá - Htrol Remix",
		"FileName": "Sài Gòn Đau Lòng Quá - Htrol Remix.mp3",
		"ArtistID": 187,
		"AlbumID": 390,
		"TagID": 15,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1494,
		"Title": "Sợ Phải Kết Thúc - Htrol Remix",
		"FileName": "Sợ Phải Kết Thúc - Htrol Remix.mp3",
		"ArtistID": 187,
		"AlbumID": 390,
		"TagID": 15,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1495,
		"Title": "Thu Cuối (feat. Mr.T & Hằng BingBoong)",
		"FileName": "Thu Cuối.mp3",
		"ArtistID": 204,
		"AlbumID": 440,
		"TagID": 15,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1496,
		"Title": "Thuyền Quyên - Htrol Remix",
		"FileName": "Thuyền Quyên - Htrol Remix.mp3",
		"ArtistID": 187,
		"AlbumID": 390,
		"TagID": 15,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1497,
		"Title": "Thê Tử - Htrol Remix",
		"FileName": "Thê Tử - Htrol Remix.mp3",
		"ArtistID": 187,
		"AlbumID": 390,
		"TagID": 15,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1498,
		"Title": "Thằng Hầu - Htrol",
		"FileName": "Thằng Hầu - Htrol.mp3",
		"ArtistID": 187,
		"AlbumID": 390,
		"TagID": 15,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1499,
		"Title": "Thế Thái - Htrol Remix",
		"FileName": "Thế Thái - Htrol Remix.mp3",
		"ArtistID": 187,
		"AlbumID": 390,
		"TagID": 15,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1500,
		"Title": "Thị Mầu - Htrol Remix",
		"FileName": "Thị Mầu - Htrol Remix.mp3",
		"ArtistID": 187,
		"AlbumID": 390,
		"TagID": 15,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1501,
		"Title": "Tránh Duyên - Htrol Remix",
		"FileName": "Tránh Duyên - Htrol Remix.mp3",
		"ArtistID": 187,
		"AlbumID": 390,
		"TagID": 15,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1502,
		"Title": "Tạm Biệt Em",
		"FileName": "Tạm Biệt Em.mp3",
		"ArtistID": 198,
		"AlbumID": 441,
		"TagID": 15,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1503,
		"Title": "Vai Lan Don Dua",
		"FileName": "Vai Lan Don Dua.mp3",
		"ArtistID": 191,
		"AlbumID": 442,
		"TagID": 15,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1504,
		"Title": "Vong Xuyên Bỉ Ngạn - Htrol Remix",
		"FileName": "Vong Xuyên Bỉ Ngạn - Htrol Remix.mp3",
		"ArtistID": 187,
		"AlbumID": 390,
		"TagID": 15,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1505,
		"Title": "Vì Em  Anh Nguyện Làm Bầu Trời Nắng Hạ - Htrol Remix",
		"FileName": "Vì Em  Anh Nguyện Làm Bầu Trời Nắng Hạ - Htrol Remix.mp3",
		"ArtistID": 187,
		"AlbumID": 390,
		"TagID": 15,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1506,
		"Title": "Xuân Phát Tài - Htrol Remix",
		"FileName": "Xuân Phát Tài - Htrol Remix.mp3",
		"ArtistID": 187,
		"AlbumID": 390,
		"TagID": 15,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1507,
		"Title": "Yêu Em Dại Khờ",
		"FileName": "Yêu Em Dại Khờ.mp3",
		"ArtistID": 194,
		"AlbumID": 443,
		"TagID": 15,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1508,
		"Title": "Đau Để Trưởng Thành - Htrol Remix",
		"FileName": "Đau Để Trưởng Thành - Htrol Remix.mp3",
		"ArtistID": 187,
		"AlbumID": 390,
		"TagID": 15,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1509,
		"Title": "Đom Đóm - Htrol",
		"FileName": "Đom Đóm - Htrol Remix.mp3",
		"ArtistID": 187,
		"AlbumID": 390,
		"TagID": 15,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1510,
		"Title": "Đánh Mất Em Remix - Htrol Remix",
		"FileName": "Đánh Mất Em Remix - Htrol Remix.mp3",
		"ArtistID": 187,
		"AlbumID": 390,
		"TagID": 15,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1511,
		"Title": "Đóa Quỳnh Lan - Htrol Remix",
		"FileName": "Đóa Quỳnh Lan - Htrol Remix.mp3",
		"ArtistID": 187,
		"AlbumID": 390,
		"TagID": 15,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1512,
		"Title": "Đắng Lòng Thanh Niên",
		"FileName": "Đắng Lòng Thanh Niên.mp3",
		"ArtistID": 198,
		"AlbumID": 444,
		"TagID": 15,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1513,
		"Title": "Đếm Ngày Xa Em",
		"FileName": "Đếm Ngày Xa Em.mp3",
		"ArtistID": 198,
		"AlbumID": 445,
		"TagID": 15,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1514,
		"Title": "Đừng Như Người Dưng - Htrol Remix",
		"FileName": "Đừng Như Người Dưng - Htrol Remix.mp3",
		"ArtistID": 187,
		"AlbumID": 390,
		"TagID": 15,
		"Private": "0",
		"Url": "",
		"Rank": "4",
		"More": ""
	}
];
var Artists = [
	{
		"ID": 0,
		"Name": "NIVIRO",
		"Thumb": "artists/NIVIRO.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1,
		"Name": "Defqwop",
		"Thumb": "artists/Defqwop.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 2,
		"Name": "Brooks, Molly Ann, IZECOLD",
		"Thumb": "artists/Brooks, Molly Ann, IZECOLD.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 3,
		"Name": "Tobu",
		"Thumb": "artists/Tobu.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 4,
		"Name": "Virtual Riot",
		"Thumb": "artists/Virtual Riot.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 5,
		"Name": "Elektronomia",
		"Thumb": "artists/Elektronomia.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 6,
		"Name": "Jim Yosef",
		"Thumb": "artists/Jim Yosef.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 7,
		"Name": "Ahxello",
		"Thumb": "artists/Ahxello.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 8,
		"Name": "Doctor Vox",
		"Thumb": "artists/Doctor Vox.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 9,
		"Name": "Panda Eyes",
		"Thumb": "artists/Panda Eyes.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 10,
		"Name": "Razihel, TeamMate, Hyper Potions",
		"Thumb": "artists/Razihel, TeamMate, Hyper Potions.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 11,
		"Name": "Ampyx",
		"Thumb": "artists/Ampyx.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 12,
		"Name": "Distrion, Electro-Light",
		"Thumb": "artists/Distrion, Electro-Light.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 13,
		"Name": "Hoaprox",
		"Thumb": "artists/Hoaprox.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 14,
		"Name": "Steerner, Martell",
		"Thumb": "artists/Steerner, Martell.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 15,
		"Name": "Alan Walker",
		"Thumb": "artists/Alan Walker.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 16,
		"Name": "League of Legends",
		"Thumb": "artists/League of Legends.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 17,
		"Name": "Sonbeat",
		"Thumb": "artists/Sonbeat.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 18,
		"Name": "Vexento",
		"Thumb": "artists/Vexento.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 19,
		"Name": "Tez Cadey",
		"Thumb": "artists/Tez Cadey.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 20,
		"Name": "Mich",
		"Thumb": "artists/Mich.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 21,
		"Name": "Jebase",
		"Thumb": "artists/Jebase.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 22,
		"Name": "TheFatRat",
		"Thumb": "artists/TheFatRat.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 23,
		"Name": "O M II N",
		"Thumb": "artists/O M II N.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 24,
		"Name": "K-391",
		"Thumb": "artists/K-391.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 25,
		"Name": "Eightfold X MKJ",
		"Thumb": "artists/Eightfold X MKJ.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 26,
		"Name": "Contacreast, Diviners",
		"Thumb": "artists/Contacreast, Diviners.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 27,
		"Name": "Eve",
		"Thumb": "artists/Eve.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 28,
		"Name": "Giga",
		"Thumb": "artists/Giga.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 29,
		"Name": "Azari",
		"Thumb": "artists/Azari.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 30,
		"Name": "Ui Shigure",
		"Thumb": "artists/Ui Shigure.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 31,
		"Name": "takayan",
		"Thumb": "artists/takayan.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 32,
		"Name": "Ayase",
		"Thumb": "artists/Ayase.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 33,
		"Name": "Kanaria",
		"Thumb": "artists/Kanaria.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 34,
		"Name": "Chinozo",
		"Thumb": "artists/Chinozo.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 35,
		"Name": "Reol",
		"Thumb": "artists/Reol.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 36,
		"Name": "whaledontsleep",
		"Thumb": "artists/whaledontsleep.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 37,
		"Name": "CHIHIRO",
		"Thumb": "artists/CHIHIRO.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 38,
		"Name": "Kobasolo",
		"Thumb": "artists/Kobasolo.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 39,
		"Name": "Ms.OOJA",
		"Thumb": "artists/Ms.OOJA.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 40,
		"Name": "Akie",
		"Thumb": "artists/Akie.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 41,
		"Name": "山田タマル",
		"Thumb": "artists/山田タマル.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 42,
		"Name": "BENI",
		"Thumb": "artists/BENI.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 43,
		"Name": "Tiara",
		"Thumb": "artists/Tiara.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 44,
		"Name": "Duca",
		"Thumb": "artists/Duca.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 45,
		"Name": "majiko",
		"Thumb": "artists/majiko.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 46,
		"Name": "Uru",
		"Thumb": "artists/Uru.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 47,
		"Name": "Riyu Renji",
		"Thumb": "artists/Riyu Renji.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 48,
		"Name": "RSP",
		"Thumb": "artists/RSP.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 49,
		"Name": "茅原実里",
		"Thumb": "artists/茅原実里.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 50,
		"Name": "Rainych",
		"Thumb": "artists/Rainych.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 51,
		"Name": "TEE",
		"Thumb": "artists/TEE.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 52,
		"Name": "Rei Yasuda",
		"Thumb": "artists/Rei Yasuda.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 53,
		"Name": "7!!",
		"Thumb": "artists/7!!.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 54,
		"Name": "wacci",
		"Thumb": "artists/wacci.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 55,
		"Name": "ShibayanRecords",
		"Thumb": "artists/ShibayanRecords.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 56,
		"Name": "Happy Birthday",
		"Thumb": "artists/Happy Birthday.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 57,
		"Name": "shimamo",
		"Thumb": "artists/shimamo.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 58,
		"Name": "物語シリーズ",
		"Thumb": "artists/物語シリーズ.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 59,
		"Name": "JUJU, JAY'ED",
		"Thumb": "artists/JUJU, JAYED.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 60,
		"Name": "OFFICIAL HIGE DANDISM",
		"Thumb": "artists/OFFICIAL HIGE DANDISM.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 61,
		"Name": "ALI, AKLO",
		"Thumb": "artists/ALI, AKLO.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 62,
		"Name": "Mrs. GREEN APPLE",
		"Thumb": "artists/Mrs. GREEN APPLE.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 63,
		"Name": "ZUTOMAYO",
		"Thumb": "artists/ZUTOMAYO.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 64,
		"Name": "ヨルシカ",
		"Thumb": "artists/ヨルシカ.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 65,
		"Name": "sumika",
		"Thumb": "artists/sumika.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 66,
		"Name": "Aimer",
		"Thumb": "artists/Aimer.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 67,
		"Name": "BRIGHT",
		"Thumb": "artists/BRIGHT.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 68,
		"Name": "LiSA",
		"Thumb": "artists/LiSA.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 69,
		"Name": "Masayuki Suzuki, 鈴木愛理",
		"Thumb": "artists/Masayuki Suzuki, 鈴木愛理.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 70,
		"Name": "田所あずさ",
		"Thumb": "artists/田所あずさ.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 71,
		"Name": "Shxne",
		"Thumb": "artists/Shxne.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 72,
		"Name": "Selphius",
		"Thumb": "artists/Selphius.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 73,
		"Name": "誘宵美九 (CV: 茅原実里)",
		"Thumb": "artists/誘宵美九 (CV 茅原実里).jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 74,
		"Name": "GARNiDELiA",
		"Thumb": "artists/GARNiDELiA.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 75,
		"Name": "TRUE",
		"Thumb": "artists/TRUE.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 76,
		"Name": "BUMP OF CHICKEN",
		"Thumb": "artists/BUMP OF CHICKEN.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 77,
		"Name": "JUNNA",
		"Thumb": "artists/JUNNA.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 78,
		"Name": "RADWIMPS",
		"Thumb": "artists/RADWIMPS.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 79,
		"Name": "Kie Kitano",
		"Thumb": "artists/Kie Kitano.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 80,
		"Name": "WEAVER",
		"Thumb": "artists/WEAVER.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 81,
		"Name": "YOASOBI",
		"Thumb": "artists/YOASOBI.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 82,
		"Name": "和ぬか",
		"Thumb": "artists/和ぬか.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 83,
		"Name": "Yunomi",
		"Thumb": "artists/Yunomi.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 84,
		"Name": "UNISON SQUARE GARDEN",
		"Thumb": "artists/UNISON SQUARE GARDEN.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 85,
		"Name": "Goose house",
		"Thumb": "artists/Goose house.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 86,
		"Name": "Anna Yvette",
		"Thumb": "artists/Anna Yvette.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 87,
		"Name": "LZRD, Jake Miller",
		"Thumb": "artists/LZRD, Jake Miller.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 88,
		"Name": "Vicetone",
		"Thumb": "artists/Vicetone.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 89,
		"Name": "Zedd",
		"Thumb": "artists/Zedd.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 90,
		"Name": "Gryffin",
		"Thumb": "artists/Gryffin.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 91,
		"Name": "Galantis",
		"Thumb": "artists/Galantis.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 92,
		"Name": "Tristam",
		"Thumb": "artists/Tristam.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 93,
		"Name": "Jodex",
		"Thumb": "artists/Jodex.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 94,
		"Name": "Mike Perry",
		"Thumb": "artists/Mike Perry.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 95,
		"Name": "Unknown",
		"Thumb": "Unknown",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 96,
		"Name": "The Jane Doze, Curtains",
		"Thumb": "artists/The Jane Doze, Curtains.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 97,
		"Name": "Caravan Palace",
		"Thumb": "artists/Caravan Palace.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 98,
		"Name": "MORTEN",
		"Thumb": "artists/MORTEN.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 99,
		"Name": "FWLR, KINLEY",
		"Thumb": "artists/FWLR, KINLEY.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 100,
		"Name": "Nightcore",
		"Thumb": "artists/Nightcore.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 101,
		"Name": "Prefekt, Johnning",
		"Thumb": "artists/Prefekt, Johnning.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 102,
		"Name": "Angelika Vee, Goblins from Mars",
		"Thumb": "artists/Angelika Vee, Goblins from Mars.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 103,
		"Name": "Mako",
		"Thumb": "artists/Mako.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 104,
		"Name": "Netrum/Halvorsen",
		"Thumb": "artists/NetrumHalvorsen.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 105,
		"Name": "Klaypex, Greta",
		"Thumb": "artists/Klaypex, Greta.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 106,
		"Name": "Gareth Emery,STANDERWICK,HALIENE",
		"Thumb": "artists/Gareth Emery,STANDERWICK,HALIENE.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 107,
		"Name": "Sub.Sound",
		"Thumb": "artists/Sub.Sound.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 108,
		"Name": "ItaloBrothers",
		"Thumb": "artists/ItaloBrothers.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 109,
		"Name": "Cash Cash",
		"Thumb": "artists/Cash Cash.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 110,
		"Name": "Gabry Ponte, LUM!X, Prezioso",
		"Thumb": "artists/Gabry Ponte, LUM!X, Prezioso.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 111,
		"Name": "Tritonal, Cash Cash",
		"Thumb": "artists/Tritonal, Cash Cash.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 112,
		"Name": "Avicii, Sandro Cavazza",
		"Thumb": "artists/Avicii, Sandro Cavazza.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 113,
		"Name": "Dabin, Dia Frampton",
		"Thumb": "artists/Dabin, Dia Frampton.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 114,
		"Name": "911",
		"Thumb": "artists/911.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 115,
		"Name": "Maroon 5",
		"Thumb": "artists/Maroon 5.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 116,
		"Name": "Charlie Puth",
		"Thumb": "artists/Charlie Puth.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 117,
		"Name": "ILLENIUM, MAX",
		"Thumb": "artists/ILLENIUM, MAX.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 118,
		"Name": "DEAMN",
		"Thumb": "artists/DEAMN.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 119,
		"Name": "Rival, Cadmium, Jon Becker",
		"Thumb": "artists/Rival, Cadmium, Jon Becker.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 120,
		"Name": "Don Omar, Lucenzo",
		"Thumb": "artists/Don Omar, Lucenzo.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 121,
		"Name": "Luis Fonsi, Daddy Yankee",
		"Thumb": "artists/Luis Fonsi, Daddy Yankee.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 122,
		"Name": "Alle Farben, ILIRA",
		"Thumb": "artists/Alle Farben, ILIRA.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 123,
		"Name": "UNDRESSD, Ellie May",
		"Thumb": "artists/UNDRESSD, Ellie May.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 124,
		"Name": "Mike Posner, Seeb",
		"Thumb": "artists/Mike Posner, Seeb.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 125,
		"Name": "Ava Max",
		"Thumb": "artists/Ava Max.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 126,
		"Name": "Axel Johansson, Tina Stachowiak",
		"Thumb": "artists/Axel Johansson, Tina Stachowiak.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 127,
		"Name": "Bruno Mars",
		"Thumb": "artists/Bruno Mars.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 128,
		"Name": "Arc North, Krista Marina",
		"Thumb": "artists/Arc North, Krista Marina.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 129,
		"Name": "Sam Feldt, RANI",
		"Thumb": "artists/Sam Feldt, RANI.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 130,
		"Name": "Clean Bandit",
		"Thumb": "artists/Clean Bandit.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 131,
		"Name": "Merk & Kremont, Ady Suleiman",
		"Thumb": "artists/Merk & Kremont, Ady Suleiman.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 132,
		"Name": "Shawn Mendes, Camila Cabello",
		"Thumb": "artists/Shawn Mendes, Camila Cabello.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 133,
		"Name": "Porter Robinson, Madeon",
		"Thumb": "artists/Porter Robinson, Madeon.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 134,
		"Name": "Lil Nas X",
		"Thumb": "artists/Lil Nas X.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 135,
		"Name": "Loote",
		"Thumb": "artists/Loote.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 136,
		"Name": "CHROMANCE, Marcus Layton",
		"Thumb": "artists/CHROMANCE, Marcus Layton.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 137,
		"Name": "Kevin Silvester, kidkatu, Julie Zorrilla",
		"Thumb": "artists/Kevin Silvester, kidkatu, Julie Zorrilla.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 138,
		"Name": "Keigo Hoashi",
		"Thumb": "artists/Keigo Hoashi.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 139,
		"Name": "Masayoshi Soken",
		"Thumb": "artists/Masayoshi Soken.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 140,
		"Name": "Daisuke Shinoda",
		"Thumb": "artists/Daisuke Shinoda.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 141,
		"Name": "MONACA",
		"Thumb": "artists/MONACA.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 142,
		"Name": "Keiichi Okabe",
		"Thumb": "artists/Keiichi Okabe.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 143,
		"Name": "Mariam Abounnasr",
		"Thumb": "artists/Mariam Abounnasr.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 144,
		"Name": "Sachiko Miyano",
		"Thumb": "artists/Sachiko Miyano.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 145,
		"Name": "Kosuke Yamashita",
		"Thumb": "artists/Kosuke Yamashita.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 146,
		"Name": "Ryuichi Takada",
		"Thumb": "artists/Ryuichi Takada.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 147,
		"Name": "Square Enix",
		"Thumb": "artists/Square Enix.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 148,
		"Name": "Kuniyuki Takahashi",
		"Thumb": "artists/Kuniyuki Takahashi.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 149,
		"Name": "Morrigan, Lily",
		"Thumb": "artists/Morrigan, Lily.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 150,
		"Name": "Shotaro Seo",
		"Thumb": "artists/Shotaro Seo.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 151,
		"Name": "裏谷玲央",
		"Thumb": "artists/裏谷玲央.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 152,
		"Name": "茅根美和子",
		"Thumb": "artists/茅根美和子.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 153,
		"Name": "堀諭史",
		"Thumb": "artists/堀諭史.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 154,
		"Name": "上松範康",
		"Thumb": "artists/上松範康.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 155,
		"Name": "Sean Schafianski",
		"Thumb": "artists/Sean Schafianski.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 156,
		"Name": "Dai Sakakibara",
		"Thumb": "artists/Dai Sakakibara.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 157,
		"Name": "marasy",
		"Thumb": "artists/marasy.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 158,
		"Name": "Kumi Tanioka",
		"Thumb": "artists/Kumi Tanioka.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 159,
		"Name": "yo suzuki",
		"Thumb": "artists/yo suzuki.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 160,
		"Name": "Tomoyuki Asakawa",
		"Thumb": "artists/Tomoyuki Asakawa.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 161,
		"Name": "Kenji Kaneko",
		"Thumb": "artists/Kenji Kaneko.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 162,
		"Name": "Hiroshi Suzuki",
		"Thumb": "artists/Hiroshi Suzuki.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 163,
		"Name": "Ryo Aoyama",
		"Thumb": "artists/Ryo Aoyama.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 164,
		"Name": "Yasumasa Kumagai",
		"Thumb": "artists/Yasumasa Kumagai.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 165,
		"Name": "Taku Yabuki",
		"Thumb": "artists/Taku Yabuki.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 166,
		"Name": "Oliver Good",
		"Thumb": "artists/Oliver Good.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 167,
		"Name": "Cheng Bi, Masato Ishinari",
		"Thumb": "artists/Cheng Bi, Masato Ishinari.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 168,
		"Name": "Takuro Iga",
		"Thumb": "artists/Takuro Iga.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 169,
		"Name": "ZANIO",
		"Thumb": "artists/ZANIO.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 170,
		"Name": "Duke of Pianeet",
		"Thumb": "artists/Duke of Pianeet.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 171,
		"Name": "Shiryu Miyanoshita",
		"Thumb": "artists/Shiryu Miyanoshita.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 172,
		"Name": "Christian Gulino",
		"Thumb": "artists/Christian Gulino.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 173,
		"Name": "Moto Fukushima and House of Waters",
		"Thumb": "artists/Moto Fukushima and House of Waters.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 174,
		"Name": "Akio Noguchi",
		"Thumb": "artists/Akio Noguchi.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 175,
		"Name": "Namiko Mori",
		"Thumb": "artists/Namiko Mori.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 176,
		"Name": "Reo Uratani",
		"Thumb": "artists/Reo Uratani.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 177,
		"Name": "Daisuke Kadawaki",
		"Thumb": "artists/Daisuke Kadawaki.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 178,
		"Name": "Mariko Taguchi",
		"Thumb": "artists/Mariko Taguchi.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 179,
		"Name": "Kousuke Yamashita",
		"Thumb": "artists/Kousuke Yamashita.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 180,
		"Name": " Ryota Kikuchi",
		"Thumb": "artists/ Ryota Kikuchi.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 181,
		"Name": "Kuniyuki Takahashi, Shotaro Seo",
		"Thumb": "artists/Kuniyuki Takahashi, Shotaro Seo.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 182,
		"Name": "Jun Hayakawa, Atsuki Yoshida",
		"Thumb": "artists/Jun Hayakawa, Atsuki Yoshida.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 183,
		"Name": "Yutaka Oyama, Junichi Saito, Yusuke Shima, Jose Colon",
		"Thumb": "artists/Yutaka Oyama, Junichi Saito, Yusuke Shima, Jose Colon.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 184,
		"Name": "Kuniyuki Takahashi , Kakeru Ishihama",
		"Thumb": "artists/Kuniyuki Takahashi , Kakeru Ishihama.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 185,
		"Name": "Tomomichi Takeoka",
		"Thumb": "artists/Tomomichi Takeoka.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 186,
		"Name": "Ryu Kawamura",
		"Thumb": "artists/Ryu Kawamura.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 187,
		"Name": "Htrol",
		"Thumb": "artists/Htrol.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 188,
		"Name": "AnhVu Remix",
		"Thumb": "artists/AnhVu Remix.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 189,
		"Name": "Rhymastic",
		"Thumb": "artists/Rhymastic.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 190,
		"Name": "Sơn Tùng M-TP",
		"Thumb": "artists/Sơn Tùng M-TP.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 191,
		"Name": "SOOBIN",
		"Thumb": "artists/SOOBIN.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 192,
		"Name": "Mr.Siro",
		"Thumb": "artists/Mr.Siro.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 193,
		"Name": "Suni Hạ Linh",
		"Thumb": "artists/Suni Hạ Linh.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 194,
		"Name": "Lou Hoàng",
		"Thumb": "artists/Lou Hoàng.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 195,
		"Name": "Erik",
		"Thumb": "artists/Erik.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 196,
		"Name": "Phạm Hồng Phước",
		"Thumb": "artists/Phạm Hồng Phước.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 197,
		"Name": "Da LAB",
		"Thumb": "artists/Da LAB.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 198,
		"Name": "Only C",
		"Thumb": "artists/Only C.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 199,
		"Name": "Trịnh Thăng Bình,",
		"Thumb": "artists/Trịnh Thăng Bình,.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 200,
		"Name": "FOE",
		"Thumb": "artists/FOE.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 201,
		"Name": "Erik",
		"Thumb": "artists/Erik.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 202,
		"Name": "Noo Phước Thịnh",
		"Thumb": "artists/Noo Phước Thịnh.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 203,
		"Name": "Osad,VRT",
		"Thumb": "artists/Osad,VRT.jpg",
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 204,
		"Name": "YanBi,Hằng BingBoong,Mr. T",
		"Thumb": "artists/YanBi,Hằng BingBoong,Mr. T.jpg",
		"Rank": "4",
		"More": ""
	}
];

var Albums = [
	{
		"ID": 0,
		"Name": "Flares",
		"Thumb": "albums/Flares.jpg",
		"ArtistID": 0,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 1,
		"Name": "Awakening",
		"Thumb": "albums/Awakening.jpg",
		"ArtistID": 1,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 2,
		"Name": "Close (Brooks Remix)",
		"Thumb": "albums/Close (Brooks Remix).jpg",
		"ArtistID": 2,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 3,
		"Name": "Cloud 9",
		"Thumb": "albums/Cloud 9.jpg",
		"ArtistID": 3,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 4,
		"Name": "Colors",
		"Thumb": "albums/Colors.jpg",
		"ArtistID": 3,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 5,
		"Name": "The Classics",
		"Thumb": "albums/The Classics.jpg",
		"ArtistID": 4,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 6,
		"Name": "Energy",
		"Thumb": "albums/Energy.jpg",
		"ArtistID": 5,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 7,
		"Name": "Everlasting",
		"Thumb": "albums/Everlasting.jpg",
		"ArtistID": 6,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 8,
		"Name": "Fire",
		"Thumb": "albums/Fire.jpg",
		"ArtistID": 5,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 9,
		"Name": "Frisbee",
		"Thumb": "albums/Frisbee.jpg",
		"ArtistID": 7,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 10,
		"Name": "Level Up",
		"Thumb": "albums/Level Up.jpg",
		"ArtistID": 8,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 11,
		"Name": "KIKO",
		"Thumb": "albums/KIKO.jpg",
		"ArtistID": 9,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 12,
		"Name": "Higher",
		"Thumb": "albums/Higher.jpg",
		"ArtistID": 3,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 13,
		"Name": "Hope",
		"Thumb": "albums/Hope.jpg",
		"ArtistID": 3,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 14,
		"Name": "Legends (Hyper Potions Remix)",
		"Thumb": "albums/Legends (Hyper Potions Remix).jpg",
		"ArtistID": 10,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 15,
		"Name": "Limitless",
		"Thumb": "albums/Limitless.jpg",
		"ArtistID": 5,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 16,
		"Name": "Rise - Ampyx",
		"Thumb": "albums/Rise - Ampyx.jpg",
		"ArtistID": 11,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 17,
		"Name": "Rubik",
		"Thumb": "albums/Rubik.jpg",
		"ArtistID": 12,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 18,
		"Name": "S.K.Y.Prox",
		"Thumb": "albums/S.K.Y.Prox.jpg",
		"ArtistID": 13,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 19,
		"Name": "Seven",
		"Thumb": "albums/Seven.jpg",
		"ArtistID": 3,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 20,
		"Name": "Sky (feat. Martell) [Radio Edit]",
		"Thumb": "albums/Sky (feat. Martell) [Radio Edit].jpg",
		"ArtistID": 14,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 21,
		"Name": "Sky High",
		"Thumb": "albums/Sky High.jpg",
		"ArtistID": 5,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 22,
		"Name": "Origins",
		"Thumb": "albums/Origins.jpg",
		"ArtistID": 15,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 23,
		"Name": "Sunburst",
		"Thumb": "albums/Sunburst.jpg",
		"ArtistID": 3,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 24,
		"Name": "Vision",
		"Thumb": "albums/Vision.jpg",
		"ArtistID": 5,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 25,
		"Name": "Welcome to Planet Urf",
		"Thumb": "albums/Welcome to Planet Urf.jpg",
		"ArtistID": 16,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 26,
		"Name": "Muvik",
		"Thumb": "albums/Muvik.jpg",
		"ArtistID": 17,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 27,
		"Name": "Guava Breeze",
		"Thumb": "albums/Guava Breeze.jpg",
		"ArtistID": 18,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 28,
		"Name": "Home",
		"Thumb": "albums/Home.jpg",
		"ArtistID": 18,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 29,
		"Name": "Classics 2014 - 2015",
		"Thumb": "albums/Classics 2014 - 2015.jpg",
		"ArtistID": 18,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 30,
		"Name": "Seve (Radio Edit)",
		"Thumb": "albums/Seve (Radio Edit).jpg",
		"ArtistID": 19,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 31,
		"Name": "Somero",
		"Thumb": "albums/Somero.jpg",
		"ArtistID": 20,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 32,
		"Name": "Turtle Beach",
		"Thumb": "albums/Turtle Beach.jpg",
		"ArtistID": 21,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 33,
		"Name": "Candyland",
		"Thumb": "albums/Candyland.jpg",
		"ArtistID": 3,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 34,
		"Name": "Close To The Sun",
		"Thumb": "albums/Close To The Sun.jpg",
		"ArtistID": 22,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 35,
		"Name": "Cool",
		"Thumb": "albums/Cool.jpg",
		"ArtistID": 3,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 36,
		"Name": "Jackpot",
		"Thumb": "albums/Jackpot.jpg",
		"ArtistID": 22,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 37,
		"Name": "Fly Away",
		"Thumb": "albums/Fly Away.jpg",
		"ArtistID": 22,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 38,
		"Name": "Happy Robot",
		"Thumb": "albums/Happy Robot.jpg",
		"ArtistID": 18,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 39,
		"Name": "Holo",
		"Thumb": "albums/Holo.jpg",
		"ArtistID": 11,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 40,
		"Name": "Infectious",
		"Thumb": "albums/Infectious.jpg",
		"ArtistID": 3,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 41,
		"Name": "Joy",
		"Thumb": "albums/Joy.jpg",
		"ArtistID": 3,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 42,
		"Name": "Lets Go",
		"Thumb": "albums/Lets Go.jpg",
		"ArtistID": 3,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 43,
		"Name": "Perpetuo",
		"Thumb": "albums/Perpetuo.jpg",
		"ArtistID": 3,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 44,
		"Name": "Masked Heroes",
		"Thumb": "albums/Masked Heroes.jpg",
		"ArtistID": 18,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 45,
		"Name": "Masked Raver",
		"Thumb": "albums/Masked Raver.jpg",
		"ArtistID": 18,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 46,
		"Name": "Mesmerize",
		"Thumb": "albums/Mesmerize.jpg",
		"ArtistID": 3,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 47,
		"Name": "Monody (feat. Laura Brehm)",
		"Thumb": "albums/Monody (feat. Laura Brehm).jpg",
		"ArtistID": 22,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 48,
		"Name": "Nostalgia",
		"Thumb": "albums/Nostalgia.jpg",
		"ArtistID": 3,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 49,
		"Name": "Sunset",
		"Thumb": "albums/Sunset.jpg",
		"ArtistID": 23,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 50,
		"Name": "The Silent Miracle",
		"Thumb": "albums/The Silent Miracle.jpg",
		"ArtistID": 18,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 51,
		"Name": "Warrior Songs",
		"Thumb": "albums/Warrior Songs.jpg",
		"ArtistID": 22,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 52,
		"Name": "Piece Of Me (Vexento Remix)",
		"Thumb": "albums/Piece Of Me (Vexento Remix).jpg",
		"ArtistID": 18,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 53,
		"Name": "Sad Robot",
		"Thumb": "albums/Sad Robot.jpg",
		"ArtistID": 18,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 54,
		"Name": "Hello, World",
		"Thumb": "albums/Hello, World.jpg",
		"ArtistID": 24,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 55,
		"Name": "Tevo",
		"Thumb": "albums/Tevo.jpg",
		"ArtistID": 18,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 56,
		"Name": "Trap Queen",
		"Thumb": "albums/Trap Queen.jpg",
		"ArtistID": 25,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 57,
		"Name": "Trippy Love",
		"Thumb": "albums/Trippy Love.jpg",
		"ArtistID": 18,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 58,
		"Name": "Tropic Love",
		"Thumb": "albums/Tropic Love.jpg",
		"ArtistID": 26,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 59,
		"Name": "Unity",
		"Thumb": "albums/Unity.jpg",
		"ArtistID": 22,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 60,
		"Name": "Verve",
		"Thumb": "albums/Verve.jpg",
		"ArtistID": 18,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 61,
		"Name": "Where We Belong",
		"Thumb": "albums/Where We Belong.jpg",
		"ArtistID": 18,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 62,
		"Name": "Kaikai Kitan / Ao No Waltz",
		"Thumb": "albums/Kaikai Kitan  Ao No Waltz.jpg",
		"ArtistID": 27,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 63,
		"Name": "デスぺレート",
		"Thumb": "albums/デスぺレート.jpg",
		"ArtistID": 28,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 64,
		"Name": "Bunka",
		"Thumb": "albums/Bunka.jpg",
		"ArtistID": 27,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 65,
		"Name": "Gunjo Sanka / Yuseiboushi",
		"Thumb": "albums/Gunjo Sanka  Yuseiboushi.jpg",
		"ArtistID": 27,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 66,
		"Name": "Beyond the way",
		"Thumb": "albums/Beyond the way.jpg",
		"ArtistID": 28,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 67,
		"Name": "Casino",
		"Thumb": "albums/Casino.jpg",
		"ArtistID": 29,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 68,
		"Name": "うい麦畑でつかまえて",
		"Thumb": "albums/うい麦畑でつかまえて.jpg",
		"ArtistID": 30,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 69,
		"Name": "Cheating is a crime",
		"Thumb": "albums/Cheating is a crime.jpg",
		"ArtistID": 31,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 70,
		"Name": "GHOST CITY TOKYO (digital edition)",
		"Thumb": "albums/GHOST CITY TOKYO (digital edition).jpg",
		"ArtistID": 32,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 71,
		"Name": "Demon Lord",
		"Thumb": "albums/Demon Lord.jpg",
		"ArtistID": 33,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 72,
		"Name": "ENVY BABY",
		"Thumb": "albums/ENVY BABY.jpg",
		"ArtistID": 33,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 73,
		"Name": "EYE",
		"Thumb": "albums/EYE.jpg",
		"ArtistID": 33,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 74,
		"Name": "FightSong",
		"Thumb": "albums/FightSong.jpg",
		"ArtistID": 27,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 75,
		"Name": "GRAPHIX",
		"Thumb": "albums/GRAPHIX.jpg",
		"ArtistID": 28,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 76,
		"Name": "Good-bye Declaration",
		"Thumb": "albums/Good-bye Declaration.jpg",
		"ArtistID": 34,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 77,
		"Name": "KING",
		"Thumb": "albums/KING.jpg",
		"ArtistID": 33,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 78,
		"Name": "エンドレスEP",
		"Thumb": "albums/エンドレスEP.jpg",
		"ArtistID": 35,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 79,
		"Name": "MIRA",
		"Thumb": "albums/MIRA.jpg",
		"ArtistID": 33,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 80,
		"Name": "Nightmare",
		"Thumb": "albums/Nightmare.jpg",
		"ArtistID": 29,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 81,
		"Name": "Nerenaiyoruni ka-tenwoakete",
		"Thumb": "albums/Nerenaiyoruni ka-tenwoakete.jpg",
		"ArtistID": 36,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 82,
		"Name": "QUEEN",
		"Thumb": "albums/QUEEN.jpg",
		"ArtistID": 33,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 83,
		"Name": "Ready Steady (feat. Hatsune Miku, Kagamine Rin, Kagamine Len)",
		"Thumb": "albums/Ready Steady (feat. Hatsune Miku, Kagamine Rin, Kagamine Len).jpg",
		"ArtistID": 28,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 84,
		"Name": "Rendezvous",
		"Thumb": "albums/Rendezvous.jpg",
		"ArtistID": 33,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 85,
		"Name": "Shadow Shadow",
		"Thumb": "albums/Shadow Shadow.jpg",
		"ArtistID": 29,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 86,
		"Name": "Whisper Whisper Whisper",
		"Thumb": "albums/Whisper Whisper Whisper.jpg",
		"ArtistID": 29,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 87,
		"Name": "Witch Hunt",
		"Thumb": "albums/Witch Hunt.jpg",
		"ArtistID": 29,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 88,
		"Name": "Yoidoreshirazu",
		"Thumb": "albums/Yoidoreshirazu.jpg",
		"ArtistID": 33,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 89,
		"Name": "アイデンティティ",
		"Thumb": "albums/アイデンティティ.jpg",
		"ArtistID": 33,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 90,
		"Name": "エンヴィーベイビー x KING",
		"Thumb": "albums/エンヴィーベイビー x KING.jpg",
		"ArtistID": 33,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 91,
		"Name": "KOI",
		"Thumb": "albums/KOI.jpg",
		"ArtistID": 37,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 92,
		"Name": "これくしょん３",
		"Thumb": "albums/これくしょん３.jpg",
		"ArtistID": 38,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 93,
		"Name": "KOBASOLO",
		"Thumb": "albums/KOBASOLO.jpg",
		"ArtistID": 38,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 94,
		"Name": "これくしょん",
		"Thumb": "albums/これくしょん.jpg",
		"ArtistID": 38,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 95,
		"Name": "FAITH",
		"Thumb": "albums/FAITH.jpg",
		"ArtistID": 39,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 96,
		"Name": "40",
		"Thumb": "albums/40.jpg",
		"ArtistID": 39,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 97,
		"Name": "Akie",
		"Thumb": "albums/Akie.jpg",
		"ArtistID": 40,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 98,
		"Name": "WOMAN 2 ～Love Song Covers～",
		"Thumb": "albums/WOMAN 2 ～Love Song Covers～.jpg",
		"ArtistID": 39,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 99,
		"Name": "TVアニメ『終末なにしてますか?忙しいですか?救ってもらっていいですか?』オリジナルサウンドトラック「青い記憶」",
		"Thumb": "albums/TVアニメ『終末なにしてますか忙しいですか救ってもらっていいですか』オリジナルサウンドトラック「青い記憶」.jpg",
		"ArtistID": 41,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 100,
		"Name": "Best & Coupling Covers",
		"Thumb": "albums/Best & Coupling Covers.jpg",
		"ArtistID": 39,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 101,
		"Name": "Ms.OOJAの、いちばん泣けるドリカム",
		"Thumb": "albums/Ms.OOJAの、いちばん泣けるドリカム.jpg",
		"ArtistID": 39,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 102,
		"Name": "Stories",
		"Thumb": "albums/Stories.jpg",
		"ArtistID": 39,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 103,
		"Name": "CINEMATIC",
		"Thumb": "albums/CINEMATIC.jpg",
		"ArtistID": 42,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 104,
		"Name": "All About Tiara Ⅲ / Fan Selection Best",
		"Thumb": "albums/All About Tiara Ⅲ  Fan Selection Best.jpg",
		"ArtistID": 43,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 105,
		"Name": "MAN ＆ WOMAN",
		"Thumb": "albums/MAN ＆ WOMAN.jpg",
		"ArtistID": 39,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 106,
		"Name": "Be...",
		"Thumb": "albums/Be....jpg",
		"ArtistID": 39,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 107,
		"Name": "PRESENT",
		"Thumb": "albums/PRESENT.jpg",
		"ArtistID": 39,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 108,
		"Name": "また恋をすることなど",
		"Thumb": "albums/また恋をすることなど.jpg",
		"ArtistID": 39,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 109,
		"Name": "VOICE",
		"Thumb": "albums/VOICE.jpg",
		"ArtistID": 39,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 110,
		"Name": "Collection",
		"Thumb": "albums/Collection.jpg",
		"ArtistID": 44,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 111,
		"Name": "流しのOOJA〜VINTAGE SONG COVERS〜",
		"Thumb": "albums/流しのOOJA〜VINTAGE SONG COVERS〜.jpg",
		"ArtistID": 39,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 112,
		"Name": "流しのOOJA 2 〜VINTAGE SONG COVERS〜",
		"Thumb": "albums/流しのOOJA 2 〜VINTAGE SONG COVERS〜.jpg",
		"ArtistID": 39,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 113,
		"Name": "あなたに会えなくなる日まで / You are Beautiful",
		"Thumb": "albums/あなたに会えなくなる日まで  You are Beautiful.jpg",
		"ArtistID": 39,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 114,
		"Name": "THE HITS ～NO.1 SONG COVERS～",
		"Thumb": "albums/THE HITS ～NO.1 SONG COVERS～.jpg",
		"ArtistID": 39,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 115,
		"Name": "鐘が鳴る (Acoustic ver.)",
		"Thumb": "albums/鐘が鳴る (Acoustic ver.).jpg",
		"ArtistID": 39,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 116,
		"Name": "Contrast",
		"Thumb": "albums/Contrast.jpg",
		"ArtistID": 45,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 117,
		"Name": "流しのOOJA 3〜VINTAGE SONG COVERS〜",
		"Thumb": "albums/流しのOOJA 3〜VINTAGE SONG COVERS〜.jpg",
		"ArtistID": 39,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 118,
		"Name": "HEART",
		"Thumb": "albums/HEART.jpg",
		"ArtistID": 39,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 119,
		"Name": "AGAIN",
		"Thumb": "albums/AGAIN.jpg",
		"ArtistID": 39,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 120,
		"Name": "COLOR",
		"Thumb": "albums/COLOR.jpg",
		"ArtistID": 39,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 121,
		"Name": "remember",
		"Thumb": "albums/remember.jpg",
		"ArtistID": 46,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 122,
		"Name": "Low",
		"Thumb": "albums/Low.jpg",
		"ArtistID": 48,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 123,
		"Name": "Re:Contact",
		"Thumb": "albums/ReContact.jpg",
		"ArtistID": 49,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 124,
		"Name": "summertime",
		"Thumb": "albums/summertime.jpg",
		"ArtistID": 50,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 125,
		"Name": "SANCTUARYⅡ 〜Minori Chihara Best Album〜 (Artist Edition)",
		"Thumb": "albums/SANCTUARYⅡ 〜Minori Chihara Best Album〜 (Artist Edition).jpg",
		"ArtistID": 49,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 126,
		"Name": "BEST All Singles&Covers Hits",
		"Thumb": "albums/BEST All Singles&Covers Hits.jpg",
		"ArtistID": 42,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 127,
		"Name": "Re:I",
		"Thumb": "albums/ReI.jpg",
		"ArtistID": 52,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 128,
		"Name": "NAMIDA CARATS",
		"Thumb": "albums/NAMIDA CARATS.jpg",
		"ArtistID": 37,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 129,
		"Name": "アニップス",
		"Thumb": "albums/アニップス.jpg",
		"ArtistID": 53,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 130,
		"Name": "日常ドラマチック",
		"Thumb": "albums/日常ドラマチック.jpg",
		"ArtistID": 54,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 131,
		"Name": "TOHO BOSSA NOVA 2",
		"Thumb": "albums/TOHO BOSSA NOVA 2.jpg",
		"ArtistID": 55,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 132,
		"Name": "今夜きみが怖い夢を見ませんように",
		"Thumb": "albums/今夜きみが怖い夢を見ませんように.jpg",
		"ArtistID": 56,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 133,
		"Name": "君に出逢えて",
		"Thumb": "albums/君に出逢えて.jpg",
		"ArtistID": 57,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 134,
		"Name": "夜撫でるメノウ / 幽霊東京",
		"Thumb": "albums/夜撫でるメノウ  幽霊東京.jpg",
		"ArtistID": 32,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 135,
		"Name": "Utamonogatari Special Edition (Original Soundtrack)",
		"Thumb": "albums/Utamonogatari Special Edition (Original Soundtrack).jpg",
		"ArtistID": 58,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 136,
		"Name": "明日がくるなら",
		"Thumb": "albums/明日がくるなら.jpg",
		"ArtistID": 59,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 137,
		"Name": "百満開花",
		"Thumb": "albums/百満開花.jpg",
		"ArtistID": 57,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 138,
		"Name": "エスカパレード",
		"Thumb": "albums/エスカパレード.jpg",
		"ArtistID": 60,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 139,
		"Name": "LOST IN PARADISE",
		"Thumb": "albums/LOST IN PARADISE.jpg",
		"ArtistID": 61,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 140,
		"Name": "ダンスホール",
		"Thumb": "albums/ダンスホール.jpg",
		"ArtistID": 62,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 141,
		"Name": "朗らかな皮膚とて不服",
		"Thumb": "albums/朗らかな皮膚とて不服.jpg",
		"ArtistID": 63,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 142,
		"Name": "又三郎",
		"Thumb": "albums/又三郎.jpg",
		"ArtistID": 64,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 143,
		"Name": "夜行",
		"Thumb": "albums/夜行.jpg",
		"ArtistID": 64,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 144,
		"Name": "思想犯",
		"Thumb": "albums/思想犯.jpg",
		"ArtistID": 64,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 145,
		"Name": "春泥棒",
		"Thumb": "albums/春泥棒.jpg",
		"ArtistID": 64,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 146,
		"Name": "盗作",
		"Thumb": "albums/盗作.jpg",
		"ArtistID": 64,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 147,
		"Name": "正しい偽りからの起床",
		"Thumb": "albums/正しい偽りからの起床.jpg",
		"ArtistID": 63,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 148,
		"Name": "沈香学",
		"Thumb": "albums/沈香学.jpg",
		"ArtistID": 63,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 149,
		"Name": "藍二乗",
		"Thumb": "albums/藍二乗.jpg",
		"ArtistID": 64,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 150,
		"Name": "雨とカプチーノ",
		"Thumb": "albums/雨とカプチーノ.jpg",
		"ArtistID": 64,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 151,
		"Name": "風を食む",
		"Thumb": "albums/風を食む.jpg",
		"ArtistID": 64,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 152,
		"Name": "幻燈",
		"Thumb": "albums/幻燈.jpg",
		"ArtistID": 64,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 153,
		"Name": "ぐされ",
		"Thumb": "albums/ぐされ.jpg",
		"ArtistID": 63,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 154,
		"Name": "これくしょん2",
		"Thumb": "albums/これくしょん2.jpg",
		"ArtistID": 38,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 155,
		"Name": "Smile",
		"Thumb": "albums/Smile.jpg",
		"ArtistID": 27,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 156,
		"Name": "夏草が邪魔をする",
		"Thumb": "albums/夏草が邪魔をする.jpg",
		"ArtistID": 64,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 157,
		"Name": "負け犬にアンコールはいらない",
		"Thumb": "albums/負け犬にアンコールはいらない.jpg",
		"ArtistID": 64,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 158,
		"Name": "Clumsy",
		"Thumb": "albums/Clumsy.jpg",
		"ArtistID": 38,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 159,
		"Name": "Kaizin",
		"Thumb": "albums/Kaizin.jpg",
		"ArtistID": 27,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 160,
		"Name": "これくしょん ヴァイナル",
		"Thumb": "albums/これくしょん ヴァイナル.jpg",
		"ArtistID": 38,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 161,
		"Name": "だから僕は音楽を辞めた",
		"Thumb": "albums/だから僕は音楽を辞めた.jpg",
		"ArtistID": 64,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 162,
		"Name": "Attitude",
		"Thumb": "albums/Attitude.jpg",
		"ArtistID": 62,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 163,
		"Name": "Chime",
		"Thumb": "albums/Chime.jpg",
		"ArtistID": 65,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 164,
		"Name": "7月の翼",
		"Thumb": "albums/7月の翼.jpg",
		"ArtistID": 66,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 165,
		"Name": "Ref:rain / 眩いばかり",
		"Thumb": "albums/Refrain  眩いばかり.jpg",
		"ArtistID": 66,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 166,
		"Name": "あなたが決めた今日なら",
		"Thumb": "albums/あなたが決めた今日なら.jpg",
		"ArtistID": 39,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 167,
		"Name": "Editorial",
		"Thumb": "albums/Editorial.jpg",
		"ArtistID": 60,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 168,
		"Name": "PROUD",
		"Thumb": "albums/PROUD.jpg",
		"ArtistID": 39,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 169,
		"Name": "collection vinyl",
		"Thumb": "albums/collection vinyl.jpg",
		"ArtistID": 38,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 170,
		"Name": "My Way",
		"Thumb": "albums/My Way.jpg",
		"ArtistID": 39,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 171,
		"Name": "Y/our Song",
		"Thumb": "albums/Your Song.jpg",
		"ArtistID": 42,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 172,
		"Name": "星の消えた夜に",
		"Thumb": "albums/星の消えた夜に.jpg",
		"ArtistID": 66,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 173,
		"Name": "Otogi",
		"Thumb": "albums/Otogi.jpg",
		"ArtistID": 27,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 174,
		"Name": "Bitter & Sweet",
		"Thumb": "albums/Bitter & Sweet.jpg",
		"ArtistID": 66,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 175,
		"Name": "Kobasolo Cover",
		"Thumb": "albums/Kobasolo Cover.jpg",
		"ArtistID": 38,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 176,
		"Name": "LANDSPACE",
		"Thumb": "albums/LANDSPACE.jpg",
		"ArtistID": 68,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 177,
		"Name": "ALL TIME ROCK N ROLL",
		"Thumb": "albums/ALL TIME ROCK N ROLL.jpg",
		"ArtistID": 69,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 178,
		"Name": "潜潜話",
		"Thumb": "albums/潜潜話.jpg",
		"ArtistID": 63,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 179,
		"Name": "So What?",
		"Thumb": "albums/So What.jpg",
		"ArtistID": 70,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 180,
		"Name": "Fukashigi No Carte \"Bunny Girl Senpai\"",
		"Thumb": "albums/Fukashigi No Carte Bunny Girl Senpai.jpg",
		"ArtistID": 71,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 181,
		"Name": "Shinsekai PLUS",
		"Thumb": "albums/Shinsekai PLUS.jpg",
		"ArtistID": 72,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 182,
		"Name": "選んでデート・ア・ライブ 〜DATE A LIVE BEST SELECTION〜",
		"Thumb": "albums/選んでデート・ア・ライブ 〜DATE A LIVE BEST SELECTION〜.jpg",
		"ArtistID": 73,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 183,
		"Name": "Linkage Ring",
		"Thumb": "albums/Linkage Ring.jpg",
		"ArtistID": 74,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 184,
		"Name": "はじまりの時",
		"Thumb": "albums/はじまりの時.jpg",
		"ArtistID": 39,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 185,
		"Name": "Happy encount",
		"Thumb": "albums/Happy encount.jpg",
		"ArtistID": 75,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 186,
		"Name": "Butterflies",
		"Thumb": "albums/Butterflies.jpg",
		"ArtistID": 76,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 187,
		"Name": "Here",
		"Thumb": "albums/Here.jpg",
		"ArtistID": 77,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 188,
		"Name": "Weathering With You",
		"Thumb": "albums/Weathering With You.jpg",
		"ArtistID": 78,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 189,
		"Name": "Savior Takayan!",
		"Thumb": "albums/Savior Takayan!.jpg",
		"ArtistID": 31,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 190,
		"Name": "Jasmine",
		"Thumb": "albums/Jasmine.jpg",
		"ArtistID": 65,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 191,
		"Name": "Just disappear",
		"Thumb": "albums/Just disappear.jpg",
		"ArtistID": 31,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 192,
		"Name": "Night Rainbow",
		"Thumb": "albums/Night Rainbow.jpg",
		"ArtistID": 80,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 193,
		"Name": "AMUSIC",
		"Thumb": "albums/AMUSIC.jpg",
		"ArtistID": 65,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 194,
		"Name": "Familia",
		"Thumb": "albums/Familia.jpg",
		"ArtistID": 65,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 195,
		"Name": "Violet Cry",
		"Thumb": "albums/Violet Cry.jpg",
		"ArtistID": 74,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 196,
		"Name": "Will",
		"Thumb": "albums/Will.jpg",
		"ArtistID": 52,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 197,
		"Name": "デート・ア・ライブ キャラクターソングコレクション",
		"Thumb": "albums/デート・ア・ライブ キャラクターソングコレクション.jpg",
		"ArtistID": 73,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 198,
		"Name": "Natsurenbo",
		"Thumb": "albums/Natsurenbo.jpg",
		"ArtistID": 38,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 199,
		"Name": "翼",
		"Thumb": "albums/翼.jpg",
		"ArtistID": 39,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 200,
		"Name": "Traveler",
		"Thumb": "albums/Traveler.jpg",
		"ArtistID": 60,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 201,
		"Name": "Minori with Strings Quartet 〜弦楽四重奏の調べ〜",
		"Thumb": "albums/Minori with Strings Quartet 〜弦楽四重奏の調べ〜.jpg",
		"ArtistID": 49,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 202,
		"Name": "Launcher",
		"Thumb": "albums/Launcher.jpg",
		"ArtistID": 68,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 203,
		"Name": "THE BOOK 2",
		"Thumb": "albums/THE BOOK 2.jpg",
		"ArtistID": 81,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 204,
		"Name": "Shake & Shake",
		"Thumb": "albums/Shake & Shake.jpg",
		"ArtistID": 65,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 205,
		"Name": "SHOCK!",
		"Thumb": "albums/SHOCK!.jpg",
		"ArtistID": 32,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 206,
		"Name": "LOLI KAMI REQUIEM",
		"Thumb": "albums/LOLI KAMI REQUIEM.jpg",
		"ArtistID": 30,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 207,
		"Name": "Lonely Queens Liberation Party",
		"Thumb": "albums/Lonely Queens Liberation Party.jpg",
		"ArtistID": 75,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 208,
		"Name": "Human Bloom",
		"Thumb": "albums/Human Bloom.jpg",
		"ArtistID": 78,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 209,
		"Name": "青二才",
		"Thumb": "albums/青二才.jpg",
		"ArtistID": 82,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 210,
		"Name": "Toy",
		"Thumb": "albums/Toy.jpg",
		"ArtistID": 31,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 211,
		"Name": "Equal / Traveling",
		"Thumb": "albums/Equal  Traveling.jpg",
		"ArtistID": 65,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 212,
		"Name": "SHINE",
		"Thumb": "albums/SHINE.jpg",
		"ArtistID": 39,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 213,
		"Name": "Who Are You",
		"Thumb": "albums/Who Are You.jpg",
		"ArtistID": 39,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 214,
		"Name": "WILL",
		"Thumb": "albums/WILL.jpg",
		"ArtistID": 75,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 215,
		"Name": "you",
		"Thumb": "albums/you.jpg",
		"ArtistID": 57,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 216,
		"Name": "ジェリーフィッシュ (feat. ローラーガール)",
		"Thumb": "albums/ジェリーフィッシュ (feat. ローラーガール).jpg",
		"ArtistID": 83,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 217,
		"Name": "THE BOOK",
		"Thumb": "albums/THE BOOK.jpg",
		"ArtistID": 81,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 218,
		"Name": "さくら 〜あなたに出会えてよかった〜",
		"Thumb": "albums/さくら 〜あなたに出会えてよかった〜.jpg",
		"ArtistID": 48,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 219,
		"Name": "渋谷純愛物語",
		"Thumb": "albums/渋谷純愛物語.jpg",
		"ArtistID": 39,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 220,
		"Name": "ふたりきりルームシアター",
		"Thumb": "albums/ふたりきりルームシアター.jpg",
		"ArtistID": 57,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 221,
		"Name": "また君と",
		"Thumb": "albums/また君と.jpg",
		"ArtistID": 39,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 222,
		"Name": "SPIRAL",
		"Thumb": "albums/SPIRAL.jpg",
		"ArtistID": 49,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 223,
		"Name": "THE BOOK 3",
		"Thumb": "albums/THE BOOK 3.jpg",
		"ArtistID": 81,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 224,
		"Name": "ゆのもきゅ",
		"Thumb": "albums/ゆのもきゅ.jpg",
		"ArtistID": 83,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 225,
		"Name": "Harmonize e.p",
		"Thumb": "albums/Harmonize e.p.jpg",
		"ArtistID": 65,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 226,
		"Name": "スパイシーチョコレート BEST OF LOVE SONGS",
		"Thumb": "albums/スパイシーチョコレート BEST OF LOVE SONGS.jpg",
		"ArtistID": 39,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 227,
		"Name": "Dr.Izzy",
		"Thumb": "albums/Dr.Izzy.jpg",
		"ArtistID": 84,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 228,
		"Name": "シンシアリー",
		"Thumb": "albums/シンシアリー.jpg",
		"ArtistID": 57,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 229,
		"Name": "shimamo",
		"Thumb": "albums/shimamo.jpg",
		"ArtistID": 57,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 230,
		"Name": "I co Y",
		"Thumb": "albums/I co Y.jpg",
		"ArtistID": 65,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 231,
		"Name": "ツーアウトロマンス",
		"Thumb": "albums/ツーアウトロマンス.jpg",
		"ArtistID": 57,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 232,
		"Name": "Shake & Shake / ナイトウォーカー",
		"Thumb": "albums/Shake & Shake  ナイトウォーカー.jpg",
		"ArtistID": 65,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 233,
		"Name": "パレード",
		"Thumb": "albums/パレード.jpg",
		"ArtistID": 64,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 234,
		"Name": "フロム",
		"Thumb": "albums/フロム.jpg",
		"ArtistID": 75,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 235,
		"Name": "ブレーメン",
		"Thumb": "albums/ブレーメン.jpg",
		"ArtistID": 64,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 236,
		"Name": "BEST SELECTION \"blanc\"",
		"Thumb": "albums/BEST SELECTION blanc.jpg",
		"ArtistID": 66,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 237,
		"Name": "ありがとう、だいすき",
		"Thumb": "albums/ありがとう、だいすき.jpg",
		"ArtistID": 49,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 238,
		"Name": "ミラーチューン",
		"Thumb": "albums/ミラーチューン.jpg",
		"ArtistID": 63,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 239,
		"Name": "Innocent Age",
		"Thumb": "albums/Innocent Age.jpg",
		"ArtistID": 49,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 240,
		"Name": "リタルダンド",
		"Thumb": "albums/リタルダンド.jpg",
		"ArtistID": 65,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 241,
		"Name": "Milk",
		"Thumb": "albums/Milk.jpg",
		"ArtistID": 85,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 242,
		"Name": "好きになってよかったな",
		"Thumb": "albums/好きになってよかったな.jpg",
		"ArtistID": 57,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 243,
		"Name": "審美眼",
		"Thumb": "albums/審美眼.jpg",
		"ArtistID": 82,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 244,
		"Name": "晴る",
		"Thumb": "albums/晴る.jpg",
		"ArtistID": 64,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 245,
		"Name": "本音",
		"Thumb": "albums/本音.jpg",
		"ArtistID": 65,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 246,
		"Name": "正しくなれない (From THE FIRST TAKE)",
		"Thumb": "albums/正しくなれない (From THE FIRST TAKE).jpg",
		"ArtistID": 63,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 247,
		"Name": "四季うた summer",
		"Thumb": "albums/四季うた summer.jpg",
		"ArtistID": 42,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 248,
		"Name": "COVERS 3",
		"Thumb": "albums/COVERS 3.jpg",
		"ArtistID": 42,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 249,
		"Name": "真っ裸",
		"Thumb": "albums/真っ裸.jpg",
		"ArtistID": 82,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 250,
		"Name": "祝祭",
		"Thumb": "albums/祝祭.jpg",
		"ArtistID": 65,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 251,
		"Name": "絶頂讃歌",
		"Thumb": "albums/絶頂讃歌.jpg",
		"ArtistID": 82,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 252,
		"Name": "花に亡霊",
		"Thumb": "albums/花に亡霊.jpg",
		"ArtistID": 64,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 253,
		"Name": "Negai / Higher Ground",
		"Thumb": "albums/Negai  Higher Ground.jpg",
		"ArtistID": 65,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 254,
		"Name": "飽和 / シネマ",
		"Thumb": "albums/飽和  シネマ.jpg",
		"ArtistID": 32,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 255,
		"Name": "Against The Sun",
		"Thumb": "albums/Against The Sun.jpg",
		"ArtistID": 86,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 256,
		"Name": "Anything Anymore",
		"Thumb": "albums/Anything Anymore.jpg",
		"ArtistID": 87,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 257,
		"Name": "Anywhere I Go",
		"Thumb": "albums/Anywhere I Go.jpg",
		"ArtistID": 88,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 258,
		"Name": "Are You Lonely",
		"Thumb": "albums/Are You Lonely.jpg",
		"ArtistID": 27,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 259,
		"Name": "True Colors",
		"Thumb": "albums/True Colors.jpg",
		"ArtistID": 89,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 260,
		"Name": "Body Back (feat. Maia Wright)",
		"Thumb": "albums/Body Back (feat. Maia Wright).jpg",
		"ArtistID": 90,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 261,
		"Name": "NCS is Love, NCS is Life, Vol. 1",
		"Thumb": "albums/NCS is Love, NCS is Life, Vol. 1.jpg",
		"ArtistID": 6,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 262,
		"Name": "ALL OUT",
		"Thumb": "albums/ALL OUT.jpg",
		"ArtistID": 16,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 263,
		"Name": "End of Time",
		"Thumb": "albums/End of Time.jpg",
		"ArtistID": 15,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 264,
		"Name": "Pharmacy",
		"Thumb": "albums/Pharmacy.jpg",
		"ArtistID": 91,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 265,
		"Name": "Frame of Mind",
		"Thumb": "albums/Frame of Mind.jpg",
		"ArtistID": 92,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 266,
		"Name": "GIANTS",
		"Thumb": "albums/GIANTS.jpg",
		"ArtistID": 16,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 267,
		"Name": "GODS",
		"Thumb": "albums/GODS.jpg",
		"ArtistID": 16,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 268,
		"Name": "heart afire",
		"Thumb": "albums/heart afire.jpg",
		"ArtistID": 93,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 269,
		"Name": "Ignite (2016 League Of Legends World Championship)",
		"Thumb": "albums/Ignite (2016 League Of Legends World Championship).jpg",
		"ArtistID": 89,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 270,
		"Name": "Ignite",
		"Thumb": "albums/Ignite.jpg",
		"ArtistID": 15,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 271,
		"Name": "Inside the Lines",
		"Thumb": "albums/Inside the Lines.jpg",
		"ArtistID": 94,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 272,
		"Name": "Unknown",
		"Thumb": "Unknown.jpg",
		"ArtistID": 95,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 273,
		"Name": "Lights Go Down (Radio Mix) [feat. Curtains]",
		"Thumb": "albums/Lights Go Down (Radio Mix) [feat. Curtains].jpg",
		"ArtistID": 96,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 274,
		"Name": "Linked",
		"Thumb": "albums/Linked.jpg",
		"ArtistID": 6,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 275,
		"Name": "<I°_°I>",
		"Thumb": "albums/Sad Robot.jpg",
		"ArtistID": 97,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 276,
		"Name": "This Is Acting (Deluxe Version)",
		"Thumb": "albums/This Is Acting (Deluxe Version).jpg",
		"ArtistID": 15,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 277,
		"Name": "Never Coming Home (feat. Kinley)",
		"Thumb": "albums/Never Coming Home (feat. Kinley).jpg",
		"ArtistID": 99,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 278,
		"Name": "Nightcore",
		"Thumb": "albums/Nightcore.jpg",
		"ArtistID": 100,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 279,
		"Name": "Nothing Stopping Me",
		"Thumb": "albums/Nothing Stopping Me.jpg",
		"ArtistID": 88,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 280,
		"Name": "Numb (feat. Johnning)",
		"Thumb": "albums/Numb (feat. Johnning).jpg",
		"ArtistID": 101,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 281,
		"Name": "On the Line",
		"Thumb": "albums/On the Line.jpg",
		"ArtistID": 102,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 282,
		"Name": "Our Story (Radio Edit)",
		"Thumb": "albums/Our Story (Radio Edit).jpg",
		"ArtistID": 103,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 283,
		"Name": "Phoenix",
		"Thumb": "albums/Phoenix.jpg",
		"ArtistID": 104,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 284,
		"Name": "Play",
		"Thumb": "albums/Play.jpg",
		"ArtistID": 15,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 285,
		"Name": "POP/STARS",
		"Thumb": "albums/POPSTARS.jpg",
		"ArtistID": 16,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 286,
		"Name": "Red Line",
		"Thumb": "albums/Red Line.jpg",
		"ArtistID": 86,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 287,
		"Name": "RISE",
		"Thumb": "albums/RISE.jpg",
		"ArtistID": 16,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 288,
		"Name": "The Future",
		"Thumb": "albums/The Future.jpg",
		"ArtistID": 105,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 289,
		"Name": "Saving Light",
		"Thumb": "albums/Saving Light.jpg",
		"ArtistID": 106,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 290,
		"Name": "Hourglass",
		"Thumb": "albums/Hourglass.jpg",
		"ArtistID": 103,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 291,
		"Name": "Start Again",
		"Thumb": "albums/Start Again.jpg",
		"ArtistID": 107,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 292,
		"Name": "Summer Air",
		"Thumb": "albums/Summer Air.jpg",
		"ArtistID": 108,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 293,
		"Name": "Blood, Sweat & 3 Years",
		"Thumb": "albums/Blood, Sweat & 3 Years.jpg",
		"ArtistID": 109,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 294,
		"Name": "The Spectre",
		"Thumb": "albums/The Spectre.jpg",
		"ArtistID": 15,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 295,
		"Name": "Thunder",
		"Thumb": "albums/Thunder.jpg",
		"ArtistID": 110,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 296,
		"Name": "Till Its Over",
		"Thumb": "albums/Till Its Over.jpg",
		"ArtistID": 92,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 297,
		"Name": "Untouchable",
		"Thumb": "albums/Untouchable.jpg",
		"ArtistID": 111,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 298,
		"Name": "Walk Thru Fire",
		"Thumb": "albums/Walk Thru Fire.jpg",
		"ArtistID": 88,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 299,
		"Name": "AVĪCI (01)",
		"Thumb": "albums/AVĪCI (01).jpg",
		"ArtistID": 112,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 300,
		"Name": "Wild Youth",
		"Thumb": "albums/Wild Youth.jpg",
		"ArtistID": 113,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 301,
		"Name": "Illuminate... (The Hits and More)",
		"Thumb": "albums/Illuminate... (The Hits and More).jpg",
		"ArtistID": 114,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 302,
		"Name": "JORDI (Deluxe)",
		"Thumb": "albums/JORDI (Deluxe).jpg",
		"ArtistID": 115,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 303,
		"Name": "Nine Track Mind",
		"Thumb": "albums/Nine Track Mind.jpg",
		"ArtistID": 116,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 304,
		"Name": "All Falls Down (feat. Juliander)",
		"Thumb": "albums/All Falls Down (feat. Juliander).jpg",
		"ArtistID": 15,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 305,
		"Name": "Alone, Pt. II",
		"Thumb": "albums/Alone, Pt. II.jpg",
		"ArtistID": 15,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 306,
		"Name": "Alone",
		"Thumb": "albums/Alone.jpg",
		"ArtistID": 15,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 307,
		"Name": "Voicenotes",
		"Thumb": "albums/Voicenotes.jpg",
		"ArtistID": 116,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 308,
		"Name": "Awake",
		"Thumb": "albums/Awake.jpg",
		"ArtistID": 117,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 309,
		"Name": "Save Me",
		"Thumb": "albums/Save Me.jpg",
		"ArtistID": 118,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 310,
		"Name": "Gravity",
		"Thumb": "albums/Gravity.jpg",
		"ArtistID": 90,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 311,
		"Name": "Daily (feat. Jon Becker)",
		"Thumb": "albums/Daily (feat. Jon Becker).jpg",
		"ArtistID": 119,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 312,
		"Name": "Meet The Orphans",
		"Thumb": "albums/Meet The Orphans.jpg",
		"ArtistID": 120,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 313,
		"Name": "Darkside",
		"Thumb": "albums/Darkside.jpg",
		"ArtistID": 15,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 314,
		"Name": "VIDA",
		"Thumb": "albums/VIDA.jpg",
		"ArtistID": 121,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 315,
		"Name": "Diamond Heart",
		"Thumb": "albums/Diamond Heart.jpg",
		"ArtistID": 15,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 316,
		"Name": "Different World (feat. CORSAK)",
		"Thumb": "albums/Different World (feat. CORSAK).jpg",
		"ArtistID": 15,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 317,
		"Name": "Faded",
		"Thumb": "albums/Faded.jpg",
		"ArtistID": 15,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 318,
		"Name": "Fading",
		"Thumb": "albums/Fading.jpg",
		"ArtistID": 122,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 319,
		"Name": "Fake A Smile",
		"Thumb": "albums/Fake A Smile.jpg",
		"ArtistID": 15,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 320,
		"Name": "Forever Young",
		"Thumb": "albums/Forever Young.jpg",
		"ArtistID": 123,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 321,
		"Name": "Heading Home",
		"Thumb": "albums/Heading Home.jpg",
		"ArtistID": 15,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 322,
		"Name": "Headlights (feat. KIDDO)",
		"Thumb": "albums/Headlights (feat. KIDDO).jpg",
		"ArtistID": 15,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 323,
		"Name": "Walkerverse Pt. I & II",
		"Thumb": "albums/Walkerverse Pt. I & II.jpg",
		"ArtistID": 15,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 324,
		"Name": "At Night, Alone.",
		"Thumb": "albums/At Night, Alone..jpg",
		"ArtistID": 124,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 325,
		"Name": "Heaven & Hell",
		"Thumb": "albums/Heaven & Hell.jpg",
		"ArtistID": 125,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 326,
		"Name": "Legends Never Die",
		"Thumb": "albums/Legends Never Die.jpg",
		"ArtistID": 16,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 327,
		"Name": "Different World",
		"Thumb": "albums/Different World.jpg",
		"ArtistID": 15,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 328,
		"Name": "Love How It Hurts (feat. Tina Stachowiak)",
		"Thumb": "albums/Love How It Hurts (feat. Tina Stachowiak).jpg",
		"ArtistID": 126,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 329,
		"Name": "V (Asia Tour Edition)",
		"Thumb": "albums/V (Asia Tour Edition).jpg",
		"ArtistID": 115,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 330,
		"Name": "Wedding Songs",
		"Thumb": "albums/Wedding Songs.jpg",
		"ArtistID": 127,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 331,
		"Name": "Meant To Be",
		"Thumb": "albums/Meant To Be.jpg",
		"ArtistID": 128,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 332,
		"Name": "Miracles (feat. Tina Stachowiak)",
		"Thumb": "albums/Miracles (feat. Tina Stachowiak).jpg",
		"ArtistID": 126,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 333,
		"Name": "Next To Me (feat. Tina Stachowiak)",
		"Thumb": "albums/Next To Me (feat. Tina Stachowiak).jpg",
		"ArtistID": 126,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 334,
		"Name": "World Of Walker",
		"Thumb": "albums/World Of Walker.jpg",
		"ArtistID": 15,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 335,
		"Name": "Overexposed Track By Track",
		"Thumb": "albums/Overexposed Track By Track.jpg",
		"ArtistID": 115,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 336,
		"Name": "Magnets EP",
		"Thumb": "albums/Magnets EP.jpg",
		"ArtistID": 129,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 337,
		"Name": "PS5 (with TOMORROW X TOGETHER & Alan Walker)",
		"Thumb": "albums/PS5 (with TOMORROW X TOGETHER & Alan Walker).jpg",
		"ArtistID": 15,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 338,
		"Name": "New Eyes",
		"Thumb": "albums/New Eyes.jpg",
		"ArtistID": 130,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 339,
		"Name": "What Is Love? (Deluxe Edition)",
		"Thumb": "albums/What Is Love (Deluxe Edition).jpg",
		"ArtistID": 130,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 340,
		"Name": "Sad Story (Out Of Luck)",
		"Thumb": "albums/Sad Story (Out Of Luck).jpg",
		"ArtistID": 131,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 341,
		"Name": "Shawn Mendes (Deluxe)",
		"Thumb": "albums/Shawn Mendes (Deluxe).jpg",
		"ArtistID": 132,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 342,
		"Name": "Shelter",
		"Thumb": "albums/Shelter.jpg",
		"ArtistID": 133,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 343,
		"Name": "Sing Me to Sleep",
		"Thumb": "albums/Sing Me to Sleep.jpg",
		"ArtistID": 15,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 344,
		"Name": "STAR WALKIN (League of Legends Worlds Anthem)",
		"Thumb": "albums/STAR WALKIN (League of Legends Worlds Anthem).jpg",
		"ArtistID": 134,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 345,
		"Name": "Stay Young",
		"Thumb": "albums/Stay Young.jpg",
		"ArtistID": 94,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 346,
		"Name": "Strongest (Alan Walker Remix)",
		"Thumb": "albums/Strongest (Alan Walker Remix).jpg",
		"ArtistID": 15,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 347,
		"Name": "The Ocean (feat. Shy Martin)",
		"Thumb": "albums/The Ocean (feat. Shy Martin).jpg",
		"ArtistID": 94,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 348,
		"Name": "Tired",
		"Thumb": "albums/Tired.jpg",
		"ArtistID": 15,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 349,
		"Name": "lost",
		"Thumb": "albums/lost.jpg",
		"ArtistID": 135,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 350,
		"Name": "Waiting",
		"Thumb": "albums/Waiting.jpg",
		"ArtistID": 88,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 351,
		"Name": "Way Back",
		"Thumb": "albums/Way Back.jpg",
		"ArtistID": 88,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 352,
		"Name": "World We Used To Know",
		"Thumb": "albums/World We Used To Know.jpg",
		"ArtistID": 15,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 353,
		"Name": "Worlds Collide",
		"Thumb": "albums/Worlds Collide.jpg",
		"ArtistID": 16,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 354,
		"Name": "Wrap Me In Plastic (Marcus Layton Radio Edit)",
		"Thumb": "albums/Wrap Me In Plastic (Marcus Layton Radio Edit).jpg",
		"ArtistID": 136,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 355,
		"Name": "You and I",
		"Thumb": "albums/You and I.jpg",
		"ArtistID": 137,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 356,
		"Name": "NieR:Automata Ver1.1a Original Soundtrack",
		"Thumb": "albums/NieRAutomata Ver1.1a Original Soundtrack.jpg",
		"ArtistID": 138,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 357,
		"Name": "FINAL FANTASY XIV - Vows of Virtue, Deeds of Cruelty",
		"Thumb": "albums/FINAL FANTASY XIV - Vows of Virtue, Deeds of Cruelty.jpg",
		"ArtistID": 139,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 358,
		"Name": "NieR: Become As Gods",
		"Thumb": "albums/NieR Become As Gods.jpg",
		"ArtistID": 27,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 359,
		"Name": "NieR:Automata Orchestral Arrangement Album",
		"Thumb": "albums/NieRAutomata Orchestral Arrangement Album.jpg",
		"ArtistID": 140,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 360,
		"Name": "NieR Gestalt - Owari no Uta Mini Album",
		"Thumb": "albums/NieR Gestalt - Owari no Uta Mini Album.jpg",
		"ArtistID": 141,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 361,
		"Name": "NieR - Music Concert CD (The Memories of Puppets)",
		"Thumb": "albums/NieR - Music Concert CD (The Memories of Puppets).jpg",
		"ArtistID": 142,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 362,
		"Name": "NieR Gestalt & Replicant Orchestral Arrangement Album",
		"Thumb": "albums/NieR Gestalt & Replicant Orchestral Arrangement Album.jpg",
		"ArtistID": 143,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 363,
		"Name": "NieR Replicant - 10+1 Years - Nier",
		"Thumb": "albums/NieR Replicant - 10+1 Years - Nier.jpg",
		"ArtistID": 144,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 364,
		"Name": "NieR Re[in]carnation Original Soundtrack: The Story of the Sun and the Moon",
		"Thumb": "albums/NieR Re[in]carnation Original Soundtrack The Story of the Sun and the Moon.jpg",
		"ArtistID": 142,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 365,
		"Name": "NieR Replicant ver.1.22474487139... Original Soundtrack",
		"Thumb": "albums/NieR Replicant ver.1.22474487139... Original Soundtrack.jpg",
		"ArtistID": 146,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 366,
		"Name": "NieR Replicant ver.1.22474487139... GAMERIP Soundtrack",
		"Thumb": "albums/NieR Replicant ver.1.22474487139... GAMERIP Soundtrack.jpg",
		"ArtistID": 147,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 367,
		"Name": "NieR: Automata [GAME RIP] Soundtrack",
		"Thumb": "albums/NieR Automata [GAME RIP] Soundtrack.jpg",
		"ArtistID": 142,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 368,
		"Name": "NieR Gestalt & Replicant Original Soundtrack",
		"Thumb": "albums/NieR Gestalt & Replicant Original Soundtrack.jpg",
		"ArtistID": 142,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 369,
		"Name": "NieR: Automata Original Soundtrack",
		"Thumb": "albums/NieR Automata Original Soundtrack.jpg",
		"ArtistID": 138,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 370,
		"Name": "NieR Replicant ver.1.22474487139... Special Soundtrack",
		"Thumb": "albums/NieR Replicant ver.1.22474487139... Special Soundtrack.jpg",
		"ArtistID": 148,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 371,
		"Name": "NieR: Automata Arranged & Unreleased Tracks",
		"Thumb": "albums/NieR Automata Arranged & Unreleased Tracks.jpg",
		"ArtistID": 149,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 372,
		"Name": "NieR Re[in]carnation Original Soundtrack",
		"Thumb": "albums/NieR Re[in]carnation Original Soundtrack.jpg",
		"ArtistID": 142,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 373,
		"Name": "モンスターハンターライズ オリジナルサウンドトラック",
		"Thumb": "albums/モンスターハンターライズ オリジナルサウンドトラック.jpg",
		"ArtistID": 151,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 374,
		"Name": "FINAL FANTASY BRAVE EXVIUS Original Soundtrack",
		"Thumb": "albums/FINAL FANTASY BRAVE EXVIUS Original Soundtrack.jpg",
		"ArtistID": 154,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 375,
		"Name": "NieR Orchestral Arrangement Album - Addendum",
		"Thumb": "albums/NieR Orchestral Arrangement Album - Addendum.jpg",
		"ArtistID": 145,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 376,
		"Name": "NieR Replicant - Uragiri no Koe Mini Album",
		"Thumb": "albums/NieR Replicant - Uragiri no Koe Mini Album.jpg",
		"ArtistID": 141,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 377,
		"Name": "NieR - Music Concert & Talk Live Soundtrack",
		"Thumb": "albums/NieR - Music Concert & Talk Live Soundtrack.jpg",
		"ArtistID": 142,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 378,
		"Name": "NieR Replicant - 10+1 Years - Devola & Popola",
		"Thumb": "albums/NieR Replicant - 10+1 Years - Devola & Popola.jpg",
		"ArtistID": 150,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 379,
		"Name": "NieR Gestalt & Replicant Piano Collections",
		"Thumb": "albums/NieR Gestalt & Replicant Piano Collections.jpg",
		"ArtistID": 138,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 380,
		"Name": "NieR Gestalt & Replicant - Jazz Arrange Version [EP]",
		"Thumb": "albums/NieR Gestalt & Replicant - Jazz Arrange Version [EP].jpg",
		"ArtistID": 155,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 381,
		"Name": "NieR Orchestral Arrangement Special Disc",
		"Thumb": "albums/NieR Orchestral Arrangement Special Disc.jpg",
		"ArtistID": 140,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 382,
		"Name": "NieR: Automata Piano Collections",
		"Thumb": "albums/NieR Automata Piano Collections.jpg",
		"ArtistID": 156,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 383,
		"Name": "NieR Replicant - 10+1 Years - Emil",
		"Thumb": "albums/NieR Replicant - 10+1 Years - Emil.jpg",
		"ArtistID": 148,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 384,
		"Name": "NieR Replicant - 10+1 Years - Kainé",
		"Thumb": "albums/NieR Replicant - 10+1 Years - Kainé.jpg",
		"ArtistID": 138,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 385,
		"Name": "NieR Orchestral Arrangement Album - Addendum Special Disc",
		"Thumb": "albums/NieR Orchestral Arrangement Album - Addendum Special Disc.jpg",
		"ArtistID": 145,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 386,
		"Name": "NieR Replicant ver.1.22474487139… Choir Arrangement Album",
		"Thumb": "albums/NieR Replicant ver.1.22474487139… Choir Arrangement Album.jpg",
		"ArtistID": 144,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 387,
		"Name": "MONSTER HUNTER RISE Extra Tracks Ⅱ",
		"Thumb": "albums/MONSTER HUNTER RISE Extra Tracks Ⅱ.jpg",
		"ArtistID": 151,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 388,
		"Name": "NieR Gestalt & Replicant - 15 Nightmares & Arrange Tracks",
		"Thumb": "albums/NieR Gestalt & Replicant - 15 Nightmares & Arrange Tracks.jpg",
		"ArtistID": 138,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 389,
		"Name": "MONSTER HUNTER RISE ORIGINAL SOUNDTRACK",
		"Thumb": "albums/MONSTER HUNTER RISE ORIGINAL SOUNDTRACK.jpg",
		"ArtistID": 176,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 390,
		"Name": "Htrol Remix",
		"Thumb": "albums/Htrol Remix.jpg",
		"ArtistID": 187,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 391,
		"Name": "Remix",
		"Thumb": "albums/Remix.jpg",
		"ArtistID": 188,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 392,
		"Name": "Nen va Hoa",
		"Thumb": "albums/Nen va Hoa.jpg",
		"ArtistID": 17,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 393,
		"Name": "Yêu 5",
		"Thumb": "albums/Yêu 5.jpg",
		"ArtistID": 189,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 394,
		"Name": "m-tp M-TP",
		"Thumb": "albums/m-tp M-TP.jpg",
		"ArtistID": 190,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 395,
		"Name": "Anh Đã Quen Với Cô Đơn",
		"Thumb": "albums/Anh Đã Quen Với Cô Đơn.jpg",
		"ArtistID": 191,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 396,
		"Name": "Bức Tranh Từ Nước Mắt",
		"Thumb": "albums/Bức Tranh Từ Nước Mắt.jpg",
		"ArtistID": 192,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 397,
		"Name": "Chạm Đáy Nỗi Đau",
		"Thumb": "albums/Chạm Đáy Nỗi Đau.jpg",
		"ArtistID": 192,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 398,
		"Name": "Càng Níu Giữ Càng Dễ Mất",
		"Thumb": "albums/Càng Níu Giữ Càng Dễ Mất.jpg",
		"ArtistID": 192,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 399,
		"Name": "Hương Mùa Hè",
		"Thumb": "albums/Hương Mùa Hè.jpg",
		"ArtistID": 193,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 400,
		"Name": "Cảm Giác Lúc Ấy Sẽ Ra Sao",
		"Thumb": "albums/Cảm Giác Lúc Ấy Sẽ Ra Sao.jpg",
		"ArtistID": 194,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 401,
		"Name": "Day Dứt Nỗi Đau",
		"Thumb": "albums/Day Dứt Nỗi Đau.jpg",
		"ArtistID": 192,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 402,
		"Name": "Dưới Những Cơn Mưa",
		"Thumb": "albums/Dưới Những Cơn Mưa.jpg",
		"ArtistID": 192,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 403,
		"Name": "Em Không Sai Chúng Ta Sai",
		"Thumb": "albums/Em Không Sai Chúng Ta Sai.jpg",
		"ArtistID": 201,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 404,
		"Name": "Em Đã Biết",
		"Thumb": "albums/Em Đã Biết.jpg",
		"ArtistID": 193,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 405,
		"Name": "Gương Mặt Lạ Lẫm",
		"Thumb": "albums/Gương Mặt Lạ Lẫm.jpg",
		"ArtistID": 192,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 406,
		"Name": "Phạm Hồng Phước Collection",
		"Thumb": "albums/Phạm Hồng Phước Collection.jpg",
		"ArtistID": 196,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 407,
		"Name": "Không Cần Thêm Một Ai Nữa",
		"Thumb": "albums/Không Cần Thêm Một Ai Nữa.jpg",
		"ArtistID": 192,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 408,
		"Name": "Không Sao Mà, Em Đây Rồi",
		"Thumb": "albums/Không Sao Mà, Em Đây Rồi.jpg",
		"ArtistID": 193,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 409,
		"Name": "Mình Là Gì Của Nhau",
		"Thumb": "albums/Mình Là Gì Của Nhau.jpg",
		"ArtistID": 194,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 410,
		"Name": "Một Bước Yêu Vạn Dặm Đau",
		"Thumb": "albums/Một Bước Yêu Vạn Dặm Đau.jpg",
		"ArtistID": 192,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 411,
		"Name": "Một Nhà",
		"Thumb": "albums/Một Nhà.jpg",
		"ArtistID": 197,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 412,
		"Name": "Người Đáng Thương Là Anh",
		"Thumb": "albums/Người Đáng Thương Là Anh.jpg",
		"ArtistID": 198,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 413,
		"Name": "Ca Sĩ Giấu Mặt",
		"Thumb": "albums/Ca Sĩ Giấu Mặt.jpg",
		"ArtistID": 199,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 414,
		"Name": "Nếu Ngày Ấy",
		"Thumb": "albums/Nếu Ngày Ấy.jpg",
		"ArtistID": 191,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 415,
		"Name": "Phieu be ngoan",
		"Thumb": "albums/Phieu be ngoan.jpg",
		"ArtistID": 200,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 416,
		"Name": "Phía Sau Một Cô Gái",
		"Thumb": "albums/Phía Sau Một Cô Gái.jpg",
		"ArtistID": 191,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 417,
		"Name": "Sau Tất Cả - Single",
		"Thumb": "albums/Sau Tất Cả - Single.jpg",
		"ArtistID": 201,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 418,
		"Name": "The First Show",
		"Thumb": "albums/The First Show.jpg",
		"ArtistID": 199,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 419,
		"Name": "Tìm Được Nhau Khó Thế Nào",
		"Thumb": "albums/Tìm Được Nhau Khó Thế Nào.jpg",
		"ArtistID": 192,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 420,
		"Name": "Tình Yêu Chắp Vá",
		"Thumb": "albums/Tình Yêu Chắp Vá.jpg",
		"ArtistID": 192,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 421,
		"Name": "Tự Lau Nước Mắt",
		"Thumb": "albums/Tự Lau Nước Mắt.jpg",
		"ArtistID": 192,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 422,
		"Name": "Forever Lover",
		"Thumb": "albums/Forever Lover.jpg",
		"ArtistID": 200,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 423,
		"Name": "Yêu Là Tha Thứ",
		"Thumb": "albums/Yêu Là Tha Thứ.jpg",
		"ArtistID": 198,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 424,
		"Name": "Yêu Đơn Phương",
		"Thumb": "albums/Yêu Đơn Phương.jpg",
		"ArtistID": 198,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 425,
		"Name": "Đau Để Trưởng Thành",
		"Thumb": "albums/Đau Để Trưởng Thành.jpg",
		"ArtistID": 198,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 426,
		"Name": "Đi Để Trở Về",
		"Thumb": "albums/Đi Để Trở Về.jpg",
		"ArtistID": 191,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 427,
		"Name": "Anh Không Đòi Quà",
		"Thumb": "albums/Anh Không Đòi Quà.jpg",
		"ArtistID": 198,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 428,
		"Name": "Anh Đã Sai",
		"Thumb": "albums/Anh Đã Sai.jpg",
		"ArtistID": 198,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 429,
		"Name": "Cause I Love You",
		"Thumb": "albums/Cause I Love You.jpg",
		"ArtistID": 202,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 430,
		"Name": "Cứ Chill Thôi",
		"Thumb": "albums/Cứ Chill Thôi.jpg",
		"ArtistID": 193,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 431,
		"Name": "Daydream",
		"Thumb": "albums/Daydream.jpg",
		"ArtistID": 191,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 432,
		"Name": "Giá Như Anh Lặng Im",
		"Thumb": "albums/Giá Như Anh Lặng Im.jpg",
		"ArtistID": 198,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 433,
		"Name": "Lalala - Single",
		"Thumb": "albums/Lalala - Single.jpg",
		"ArtistID": 191,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 434,
		"Name": "Mãi Mãi Bên Nhau",
		"Thumb": "albums/Mãi Mãi Bên Nhau.jpg",
		"ArtistID": 202,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 435,
		"Name": "Ngày Mai Em Đi",
		"Thumb": "albums/Ngày Mai Em Đi.jpg",
		"ArtistID": 191,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 436,
		"Name": "Người Âm Phủ",
		"Thumb": "albums/Người Âm Phủ.jpg",
		"ArtistID": 203,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 437,
		"Name": "Như Phút Ban Đầu",
		"Thumb": "albums/Như Phút Ban Đầu.jpg",
		"ArtistID": 202,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 438,
		"Name": "Não Cá Vàng",
		"Thumb": "albums/Não Cá Vàng.jpg",
		"ArtistID": 198,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 439,
		"Name": "Nến Và Hoa",
		"Thumb": "albums/Nến Và Hoa.jpg",
		"ArtistID": 189,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 440,
		"Name": "Tuyển Tập Những Ca Khúc Hay Nhất",
		"Thumb": "albums/Tuyển Tập Những Ca Khúc Hay Nhất.jpg",
		"ArtistID": 204,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 441,
		"Name": "Tạm Biệt Em",
		"Thumb": "albums/Tạm Biệt Em.jpg",
		"ArtistID": 198,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 442,
		"Name": "Vai Lan Don Dua",
		"Thumb": "albums/Vai Lan Don Dua.jpg",
		"ArtistID": 191,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 443,
		"Name": "Yêu Em Dại Khờ",
		"Thumb": "albums/Yêu Em Dại Khờ.jpg",
		"ArtistID": 194,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 444,
		"Name": "Đắng Lòng Thanh Niên",
		"Thumb": "albums/Đắng Lòng Thanh Niên.jpg",
		"ArtistID": 198,
		"Rank": "4",
		"More": ""
	},
	{
		"ID": 445,
		"Name": "Đếm Ngày Xa Em",
		"Thumb": "albums/Đếm Ngày Xa Em.jpg",
		"ArtistID": 198,
		"Rank": "4",
		"More": ""
	}
];

var Tags = [
    {
        "ID": 0,
        "Name": "EDM-High",
        "Thumb": "tags/EDM-High.jpg",
        "Url": "https://null-music3.github.io/n/u/l/l/"
    },
    {
        "ID": 1,
        "Name": "EDM-Low",
        "Thumb": "tags/EDM-Low.jpg",
        "Url": "https://null-music3.github.io/n/u/l/l/"
    },
    {
        "ID": 2,
        "Name": "EDM-Mid",
        "Thumb": "tags/EDM-Mid.jpg",
        "Url": "https://null-music3.github.io/n/u/l/l/"
    },
    {
        "ID": 3,
        "Name": "J-Pop-High",
        "Thumb": "tags/J-Pop-High.jpg",
        "Url": "https://null-music3.github.io/n/u/l/l/"
    },
    {
        "ID": 4,
        "Name": "J-Pop-Low",
        "Thumb": "tags/J-Pop-Low.jpg",
        "Url": "https://null-music3.github.io/n/u/l/l/"
    },
    {
        "ID": 5,
        "Name": "J-Pop-Mid",
        "Thumb": "tags/J-Pop-Mid.jpg",
        "Url": "https://null-music.github.io/n/u/l/l/"
    },
    {
        "ID": 6,
        "Name": "Pop-High",
        "Thumb": "tags/Pop-High.jpg",
        "Url": "https://null-music3.github.io/n/u/l/l/"
    },
    {
        "ID": 7,
        "Name": "Pop-Low",
        "Thumb": "tags/Pop-Low.jpg",
        "Url": "https://null-music3.github.io/n/u/l/l/"
    },
    {
        "ID": 8,
        "Name": "Pop-Mid",
        "Thumb": "tags/Pop-Mid.jpg",
        "Url": "https://null-music3.github.io/n/u/l/l/"
    },
    {
        "ID": 9,
        "Name": "Symphony-High",
        "Thumb": "tags/Symphony-High.jpg",
        "Url": "https://null-music.github.io/n/u/l/l/"
    },
    {
        "ID": 10,
        "Name": "Symphony-Low",
        "Thumb": "tags/Symphony-Low.jpg",
        "Url": "https://null-music2.github.io/n/u/l/l/"
    },
    {
        "ID": 11,
        "Name": "Symphony-Mid",
        "Thumb": "tags/Symphony-Mid.jpg",
        "Url": "https://null-music2.github.io/n/u/l/l/"
    },
    {
        "ID": 12,
        "Name": "Symphony-Under",
        "Thumb": "tags/Symphony-Under.jpg",
        "Url": "https://null-music.github.io/n/u/l/l/"
    },
    {
        "ID": 13,
        "Name": "VC-Pop-High",
        "Thumb": "tags/VC-Pop-High.jpg",
        "Url": "https://null-music3.github.io/n/u/l/l/"
    },
    {
        "ID": 14,
        "Name": "VC-Pop-Low",
        "Thumb": "tags/VC-Pop-Low.jpg",
        "Url": "https://null-music3.github.io/n/u/l/l/"
    },
    {
        "ID": 15,
        "Name": "VC-Pop-Mid",
        "Thumb": "tags/VC-Pop-Mid.jpg",
        "Url": "https://null-music3.github.io/n/u/l/l/"
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
const main_ui = document.getElementById('main-ui');
const lite_ui = document.getElementById('lite-ui');
const show_ui_button = document.getElementById('show-ui-button');
var btnSHP = document.getElementById('btn-show-home-panel');
var BGPanel = document.getElementById('background-panel');

var tempPlayList = [];
var playList = [];
var playListGroup = [];
var playState = 'play';
var muteState = 'unmute';
var raf = null;
var TagHTML = "";
var FavArtistHTML = "";
var MixSongHTML = "";
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
        play_button.classList.replace("bi-play-circle", "bi-pause-circle");
        playState = 'pause';
    } else {
        music_player?.pause();
        play_button.classList.replace("bi-pause-circle", "bi-play-circle");
        cancelAnimationFrame(raf);
        playState = 'play';
    }
});

mute_button?.addEventListener('click', () => {
    if (muteState === 'unmute') {
        music_player.muted = true;
        mute_button.classList.replace("bi-volume-up", "bi-volume-mute");
        muteState = 'mute';
    } else {
        music_player.muted = false;
        mute_button.classList.replace("bi-volume-mute", "bi-volume-up");
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
function changePlayingSong() {
    ps_info.innerHTML = `
    <div role="button" onclick="clickCard(`+ PlayingSong?.AlbumID + ',\'' + CONST.TYPE.Albums + `')" class="animate__animated  animate__fadeIn bg-image playing-song-thumb" style="background-image: url('` + thumbPath + Albums[PlayingSong?.AlbumID]?.Thumb + `')"></div>
    <div class="text-truncate animate__animated  animate__fadeIn d-flex flex-column justify-content-center align-items-start ps-2 " style="height: 60px;">
        <span class="hide-on-mobile text-truncate max-width-250">`+ PlayingSong?.Title + `</span>
        <a onclick="clickCard(`+ PlayingSong?.ArtistID + ',\'' + CONST.TYPE.Artists + `')" class="max-width-250 hide-on-mobile text-truncate">` + Artists[PlayingSong?.ArtistID]?.Name + `</a>
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
    play_button.classList.replace("bi-play-circle", "bi-pause-circle");
    requestAnimationFrame(whilePlaying);
    changePlayingSong();
    playState = 'pause';
}
function playThisSong(id) {
    ps_info.setAttribute("style", 'display:none;');
    PlayingSong = Songs[id];
    if(tempPlayList?.length>0 && tempPlayList?.find(x=>x?.ID ==PlayingSong?.ID) !=null){        
        playList = [...tempPlayList];
    }
    else{
        playList = [PlayingSong];
    }
    let tag = Tags[PlayingSong.TagID];
    music_player.src = tag?.Url + tag?.Name?.toLowerCase() + '/' + PlayingSong?.FileName;
    music_player?.play();
    play_button.classList.replace("bi-play-circle", "bi-pause-circle");
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
    address_title_1.innerHTML = getBasicAddressTitle("Play List");
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
    tempPlayList= songs;
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

    address_title_1.innerHTML = getBasicAddressTitle("Mix " + playListGroup[groupID].Name);
    cardInfo = cardGroupInfoRender(groupID);

    playListGroup[groupID].Songs.forEach(song => {
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


//#region Visualizer

//#endregion
//#region Page Loading Function

function renderPage() {
    let cardHTML = "";
    let favArtistHTML = "";
    let favAlbumHTML = "";
    let mixSongHTML = "";

    favArtistHTML = getRandomFavArtist();
    favAlbumHTML = getRandomFavAlbum();

    Tags.forEach(tag => {
        cardHTML += cardRender(tag, CONST.TYPE.Tags)
        let randomSongTag = getRandom(Songs.filter(x => x.TagID == tag.ID), 15);
        let groupItem = { ID: tag.ID, Songs: randomSongTag, Name: tag.Name }
        playListGroup.push(groupItem);
        mixSongHTML += cardGroupRender(tag.ID, groupItem.Name, groupItem.Songs.map(x => x?.AlbumID).filter((value, index, array) => array.indexOf(value) === index));
    });

    MixSongHTML += wrapRender(mixSongHTML, "Mix Song By Tag", 'animate__fadeIn animate__slow');
    TagHTML += wrapRender(cardHTML, "Tag", 'animate__fadeIn animate__slow');
    view_home.innerHTML = MixSongHTML + favArtistHTML + favAlbumHTML + TagHTML;
}

renderPage();
function getRandomFavArtist() {
    let favArtistHTML = "";
    favArtist = getRandomFavorite(Artists, 12);
    if (favArtist?.length > 0) {
        favArtist.forEach(artist => {
            favArtistHTML += cardRender(artist, CONST.TYPE.Artists)
        });
    }
    return wrapRender(favArtistHTML, "Random Artist", 'animate__fadeIn animate__slow');
}

function getRandomFavAlbum() {
    let favAlbumHTML = "";
    favAlbum = getRandomFavorite(Albums, 12);
    if (favAlbum?.length > 0) {
        favAlbum.forEach(album => {
            favAlbumHTML += cardRender(album, CONST.TYPE.Albums)
        });
    }
    return wrapRender(favAlbumHTML, "Random Album", 'animate__fadeIn animate__slow');
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
input_search.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the button element with a click
        search();
    }
});
function search() {
    showSearch();
    let keyword = input_search?.value;
    let artistCard = "";
    let artistSearch = "";
    let songCard = "";
    let songSearch = "";
    let albumCard = "";
    let albumSearch = "";
    if (keyword?.length > 0) {
        Artists.filter(x => x.Name.toLowerCase()?.includes(keyword.toLowerCase())).forEach(artist => {
            artistCard += cardRender(artist, CONST.TYPE.Artists);
        });
        if (artistCard?.length > 0) artistSearch = wrapRender(artistCard, "Artist", 'animate__fadeIn');

        Songs.filter(x => x.Title.toLowerCase()?.includes(keyword.toLowerCase())).forEach(song => {
            songCard += listRender(song);
        });
        if (songCard?.length > 0) songSearch = wrapRender(songCard, "Song", 'animate__fadeIn');

        Albums.filter(x => x.Name.toLowerCase()?.includes(keyword.toLowerCase())).forEach(album => {
            albumCard += cardRender(album, CONST.TYPE.Albums);
        });
        if (albumCard?.length > 0) albumSearch = wrapRender(albumCard, "Album", 'animate__fadeIn');

        seach_list.innerHTML = artistSearch + songSearch + albumSearch;
        if (seach_list.innerHTML?.length == 0) seach_list.innerHTML = "Nothing was found!"
    }

}
//#endregion
//--------------------------------------------------------------------------------------------------------------------//
//#region DOM Render
function wrapRender(htmlItem, title, cssAnimate) {
    let cssClass = cssAnimate?.length > 0 ? cssAnimate : 'animate__fadeInRight'
    let titleHTML = title?.length > 0 && title != undefined ? `<div class="ribbon my-2">` + title + `</div>` : '';
    // `<div class="d-flex flex-row justify-content-start align-items-center">
    //   <i class=" ps-4 bi bi-bookmark-heart fs-5"></i>
    //   <span class="fs-6 text-truncate ps-3 pb-1">`+ title + `</span>
    // </div>` : '';
    let item = `
    <div class="category-content animate__animated box-shadow `+ cssClass + ` d-flex flex-column">     
      `+ titleHTML + `
      <div class="d-flex flex-wrap">`+ htmlItem + `
      </div>
    </div>`;
    return item;
}
function cardRender(model, type) {
    let cardAvataClas = type == CONST.TYPE.Artists ? "rounded-circle" : "rounded-3"
    let item = `
  <div class="card-border d-flex flex-column align-items-center my-2" >
    <div role="button" class=" w-75 card-thumb border-2 border-secondary position-relative box-shadow `+ cardAvataClas + `" onclick="clickCard(` + model.ID + ',\'' + type + `')"
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
function cardGroupRender(groupID, title, thumb = []) {
    let item = `
  <div class="card-border d-flex flex-column align-items-center my-2" >
    <div class=" w-75 card-thumb border-2 border-secondary rounded-3 position-relative box-shadow" onclick="clickGroup(`+ groupID + `)" >
        <div class=" d-flex flex-wrap h-100 w-100 rounded-3  ">
        <img src="`+ thumbPath + Albums[thumb[0] ?? thumb[0]].Thumb + `" style="height:50%;width:50%; border-top-left-radius:var(--bs-border-radius) !important" class="bg-image ">        
        <img src="`+ thumbPath + Albums[thumb[1] ?? thumb[0]].Thumb + `" style="height:50%;width:50%;border-top-right-radius:var(--bs-border-radius) !important" class="bg-image">
        <img src="`+ thumbPath + Albums[thumb[2] ?? thumb[0]].Thumb + `" style="height:50%;width:50%;border-bottom-left-radius:var(--bs-border-radius) !important" class="bg-image">
        <img src="`+ thumbPath + Albums[thumb[3] ?? thumb[0]].Thumb + `" style="height:50%;width:50%;border-bottom-right-radius:var(--bs-border-radius) !important" class="bg-image">
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
    return item;
}
function cardGroupInfoRender(groupID) {
    let thumb = playListGroup[groupID].Songs.map(x => x?.AlbumID).filter((value, index, array) => array.indexOf(value) === index);
    let item = `
  <div class=" px-3 category-content animate__animated animate__fadeInDown d-flex flex-column">          
    <div class="flex-row d-flex rounded-3 bg-gradient-1 my-3">
    
    <span class="ps-3"></span>
      <div class="bg-image my-3 rounded-2 col-4 d-flex flex-wrap" >
        <img src="`+ thumbPath + Albums[thumb[0]].Thumb + `" style="height:50%;width:50%; border-top-left-radius:var(--bs-border-radius) !important" class="bg-image ">        
        <img src="`+ thumbPath + Albums[thumb[1]].Thumb + `" style="height:50%;width:50%;border-top-right-radius:var(--bs-border-radius) !important" class="bg-image">
        <img src="`+ thumbPath + Albums[thumb[2]].Thumb + `" style="height:50%;width:50%;border-bottom-left-radius:var(--bs-border-radius) !important" class="bg-image">
        <img src="`+ thumbPath + Albums[thumb[3]].Thumb + `" style="height:50%;width:50%;border-bottom-right-radius:var(--bs-border-radius) !important" class="bg-image">
      </div>      
      <span class="ps-3"></span>
        <div class="d-flex flex-column justify-content-around py-3 col-7">
            <div>
                <div class="text-truncate fs-3 w-100">`+ playListGroup[groupID].Name + `</div>
            </div>
            <div class="d-flex flex-row pb-2">                                                
                <button onclick="addGroupToPlayList(`+ groupID + `,'1')"
                class="bi bi-play btn btn-outline-success"></button>

                <button onclick="addGroupToPlayList(`+ groupID + `,'2')"
                class="ms-3 bi bi-shuffle btn btn-outline-info"></button>

                <button onclick="addGroupToPlayList(`+ groupID + `,'3')"
                class="ms-3 bi bi-music-note-list btn btn-outline-primary"></button>
            </div>
        </div>
    </div>
  </div>
  `;
    return item;
}

function calcHeight() {
    let div = document.getElementById('content-view');
    let body = document.getElementById('body');
    let header = document.getElementById('header');
    let minusHeight = header?.offsetHeight > 0 ? 250 : 150;
    let height = "height:" + (body.offsetHeight - minusHeight) + 'px';
    div.setAttribute("style", height);
}
function showHome() {
    clearAddress();
    calcHeight();
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
function hideUI(isHide) {
    if (isHide) {
        main_ui.setAttribute("style", 'visibility:hidden;opacity:0');
        lite_ui.setAttribute("style", 'visibility:visible;opacity:1;z-index: 20;');
        btnSHP.style.display = 'none';
        BGPanel.style.opacity = 0.9;
    }
    else {
        main_ui.setAttribute("style", 'visibility:visible;opacity:1');
        lite_ui.setAttribute("style", 'visibility:hidden;opacity:0;z-index: -1;');
        btnSHP.style.display = 'block';
        BGPanel.style.opacity = 0.4;
    }
}
function shuffleList(list) {
    let shuffledList = list
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);
    return shuffledList;
}

function getRandomFavorite(list, count) {
    list = list.sort((a, b) => (a?.Rank > b?.Rank ? 1 : 0));
    let topRank = list[0]?.Rank;
    list = list.filter(x => x?.Rank == topRank);
    list = shuffleList(list);
    if (list?.length <= count) return list;
    else return list.slice(0, count);
}

function getRandom(list, count) {
    let shuffledList = list
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);
    if (shuffledList?.length <= count) return list;
    else return shuffledList.slice(0, count);
}

window.onhashchange = function () {
    goBack();
}
//#endregion


























