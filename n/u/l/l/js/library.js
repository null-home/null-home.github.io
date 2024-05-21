class BookModel {
    constructor() {
        this.Name = '';
        this.Vol = [];
        this.Lang = 'en';
        this.OneShot = false;
        this.Title = '';
        this.Favorite = '5';
    }
}
var DB = [
    {
        "Name": "oregairu", "Status": '1',
        "Vol": [
            "01",
            "02",
            "03",
            "04",
            "05",
            "06",
            "06.5",
            "07",
            "07.5",
            "08",
            "09",
            "10",
            "10.5",
            "11",
            "12",
            "13",
            "14",
            "14.5",
            "15"
        ],
        "Lang": "en",
        "OneShot": false,
        "Title": "",
        "Favorite": "1",
        "Public": "1"
    },
    {
        "Name": "aobuta", "Status": '2',
        "Vol": [
            "01",
            "02",
            "03",
            "04",
            "05",
            "06",
            "07",
            "08",
            "09",
            "10",
            "11",
            "12",
        ],
        "Lang": "en",
        "OneShot": false,
        "Title": "",
        "Favorite": "1",
        "Public": "1"
    },

    {
        "Name": "you-jitsu", "Status": '1',
        "Vol": [
            "01",
            "02",
            "03",
            "04.5",
            "04",
            "05",
            "06",
            "07.5",
            "07",
            "08",
            "09",
            "10",
            "11.5",
            "11"
        ],
        "Lang": "vn",
        "OneShot": false,
        "Title": "",
        "Favorite": "1",
        "Public": "1"
    },
    {
        "Name": "mahouka-koukou", "Status": '1',
        "Vol": [
            "01",
            "02",
            "03",
            "04",
            "05",
            "06",
            "07",
            "08",
            "09",
            "10",
            "11",
            "12",
            "13",
            "14",
            "15",
            "16",
            "17",
            "18",
            "19",
            "20",
            "21",
            "22",
            "23",
            "24",
            "25",
            "26",
            "27",
            "28",
            "29",
            "30",
            "31",
            "32"
        ],
        "Lang": "vn",
        "OneShot": false,
        "Title": "",
        "Favorite": "1",
        "Public": "0"
    },
    {
        "Name": "kono-suba", "Status": '1',
        "Vol": [
            "01",
            "02",
            "03",
            "04",
            "05",
            "06",
            "07",
            "08",
            "09",
            "10",
            "11",
            "12",
            "13",
            "14",
            "15",
            "16",
            "17"
        ],
        "Lang": "vn",
        "OneShot": false,
        "Title": "",
        "Favorite": "1",
        "Public": "0"
    },
    {
        "Name": "you-jitsu-year-2", "Status": '2',
        "Vol": [
            "01",
            "02",
            "03",
            "04.5",
            "04",
            "05",
            "06",
            "07"
        ],
        "Lang": "en",
        "OneShot": false,
        "Title": "",
        "Favorite": "1",
        "Public": "0"
    },

    {
        "Name": "youjo-senki", "Status": '2',
        "Vol": [
            "01",
            "02",
            "03",
            "04",
            "05",
            "06",
            "07",
            "08",
            "09",
            "10",
            "11",
            "12",
            //"13",
            //"14",
        ],
        "Lang": "en",
        "OneShot": false,
        "Title": "",
        "Favorite": "2",
        "Public": "1"
    },
    {
        "Name": "goblin-slayer", "Status": '2',
        "Vol": [
            "01",
            "02",
            "03",
            "04",
            "05",
            "06",
            "07",
            "08",
            "09",
            "10",
            "11",
            "12",
            "13",
            "14",
            "15",
            "16",
        ],
        "Lang": "en",
        "OneShot": false,
        "Title": "",
        "Favorite": "2",
        "Public": "1"
    },
    {
        "Name": "overlord", "Status": '2',
        "Vol": [
            "01",
            "02",
            "03",
            "04",
            "05",
            "06",
            "07",
            "08",
            "09",
            "10",
            "11",
            "12",
            "13",
            "14",
            "15",
            "16",
            //"17",
            //"18",
            //"19",
        ],
        "Lang": "en",
        "OneShot": false,
        "Title": "",
        "Favorite": "1",
        "Public": "1"
    },
    {
        "Name": "tate-no-yuusha", "Status": '2',
        "Vol": [
            "01",
            "02",
            "03",
            "04",
            "05",
            "06",
            "07",
            "08",
            "09",
            "10",
            "11",
            "12",
            "13",
            "14",
            "15",
            "16",
            "17",
            "18",
            "19",
            "20",
            "21",
            "22",
        ],
        "Lang": "en",
        "OneShot": false,
        "Title": "",
        "Favorite": "2",
        "Public": "1"
    },
    {
        "Name": "otome-game-sekai", "Status": '2',
        "Vol": [
            "01",
            "02",
            "03",
            "04",
            "05",
            "06",
            "07",
            "08",
            "09",
            "10",
            "11",
            //"12",
            //"13",
            //"14",
        ],
        "Lang": "en",
        "OneShot": false,
        "Title": "",
        "Favorite": "2",
        "Public": "1"
    },

    {
        "Name": "arifureta", "Status": '1',
        "Vol": [
            "01",
            "02",
            "03",
            "04",
            "05",
            "06",
            "07",
            "08",
            "09",
            "10",
            "10.5",
            "11",
            "12",
            "13",

        ],
        "Lang": "en",
        "OneShot": false,
        "Title": "",
        "Favorite": "2",
        "Public": "1"
    },
    {
        "Name": "hataraku-maou", "Status": '2',
        "Vol": [
            "01",
            "02",
            "03",
            "04",
            "05",
            "06",
            "07",
            "08",
            "09",
            "10",
            "11",
            "12",
            "13",
            "14",
            "15",
            "16",
            "17",
            "18",
            "19",
            "20",
            "21",
        ],
        "Lang": "en",
        "OneShot": false,
        "Title": "",
        "Favorite": "2",
        "Public": "1"
    },


    {
        "Name": "kumo-desu-ga", "Status": '2',
        "Vol": [
            "01",
            "02",
            "03",
            "04",
            "05",
            "06",
            "07",
            "08",
            "09",
            "10",
            "11",
            "12",
            "13",
            "14",
            "15",
            "16",
        ],
        "Lang": "en",
        "OneShot": false,
        "Title": "",
        "Favorite": "2",
        "Public": "1"
    },



    {
        "Name": "spy-classroom", "Status": '2',
        "Vol": [
            "01",
            "02",
            "03",
            "04",
            "05",
            "06"
        ],
        "Lang": "en",
        "OneShot": false,
        "Title": "",
        "Favorite": "3",
        "Public": "0"
    },
    {
        "Name": "sao", "Status": '2',
        "Vol": [
            "01",
            "02",
            "03",
            "04",
            "05",
            "06",
            "07",
            "08",
            "09",
            "10",
            "11",
            "12",
            "13",
            "14",
            "15",
            "16",
            "17",
            "18",
            "19",
            "20",
            "21",
            "22",
            "23",
            "24",
            "25",
            "26",
            "27",
        ],
        "Lang": "en",
        "OneShot": false,
        "Title": "",
        "Favorite": "2",
        "Public": "0"
    },
    {
        "Name": "86-eighty-six", "Status": '2',
        "Vol": [
            "01",
            "02",
            "03",
            "04",
            "05",
            "06",
            "07",
            "08",
            "09",
            "10",
            "11",
            "12",
        ],
        "Lang": "en",
        "OneShot": false,
        "Title": "",
        "Favorite": "2",
        "Public": "1"
    },
    {
        "Name": "all-you-need-is-kill",
        "Vol": [
            ""
        ],
        "Lang": "vn",
        "OneShot": true, "Status": '1',
        "Title": "",
        "Favorite": "5",
        "Public": "1"
    },
    {
        "Name": "amagi-brilliant-park", "Status": '1',
        "Vol": [
            "01",
            "02",
            "03",
            "04",
            "05",
            "06",
            "07",
            "08"
        ],
        "Lang": "en",
        "OneShot": false,
        "Title": "",
        "Favorite": "2",
        "Public": "0"
    },
    {
        "Name": "ame-no-hi-no-iris",
        "Vol": [
            ""
        ],
        "Lang": "vn",
        "OneShot": true, "Status": '1',
        "Title": "",
        "Favorite": "5",
        "Public": "1"
    },
    {
        "Name": "angel-note",
        "Vol": [
            ""
        ],
        "Lang": "vn",
        "OneShot": true, "Status": '1',
        "Title": "",
        "Favorite": "5",
        "Public": "1"
    },
    {
        "Name": "battle-royale",
        "Vol": [
            ""
        ],
        "Lang": "en",
        "OneShot": true, "Status": '1',
        "Title": "",
        "Favorite": "5",
        "Public": "1"
    },
    {
        "Name": "belka-why-dont-you-bark",
        "Vol": [
            ""
        ],
        "Lang": "en",
        "OneShot": true, "Status": '1',
        "Title": "",
        "Favorite": "5",
        "Public": "1"
    },
    {
        "Name": "black-bullet", "Status": '1',
        "Vol": [
            "01",
            "02",
            "03",
            "04",
            "05",
            "06",
            "07"
        ],
        "Lang": "en",
        "OneShot": false,
        "Title": "",
        "Favorite": "2",
        "Public": "1"
    },
    {
        "Name": "bokura-wa-dokonimo-hirakanai",
        "Vol": [
            ""
        ],
        "Lang": "en",
        "OneShot": true, "Status": '1',
        "Title": "",
        "Favorite": "5",
        "Public": "1"
    },
    {
        "Name": "boku-to-kimi-dake-ni",
        "Vol": [
            ""
        ],
        "Lang": "en",
        "OneShot": true, "Status": '1',
        "Title": "",
        "Favorite": "5",
        "Public": "1"
    },
    {
        "Name": "brave-story",
        "Vol": [
            ""
        ],
        "Lang": "en",
        "OneShot": true, "Status": '1',
        "Title": "",
        "Favorite": "5",
        "Public": "1"
    },
    {
        "Name": "bungo-stray-dogs", "Status": '3',
        "Vol": [
            "01",
            "02",
            "03",
            "04",
            "05",
            "06",
            "07",
            "08"
        ],
        "Lang": "en",
        "OneShot": false,
        "Title": "",
        "Favorite": "2",
        "Public": "1"
    },
    {
        "Name": "danmachi", "Status": '2',
        "Vol": [
            "01",
            "02",
            "03",
            "04",
            "05",
            "06",
            "07",
            "08",
            "09",
            "10",
            "11",
            "12",
            "13",
            "14",
            "15",
            "16",
            "17",
            "18",
            //"19",
        ],
        "Lang": "en",
        "OneShot": false,
        "Title": "",
        "Favorite": "2",
        "Public": "0"
    },
    {
        "Name": "danmachi-familia-chronicle", "Status": '1',
        "Vol": [
            "01",
            "02"
        ],
        "Lang": "en",
        "OneShot": false,
        "Title": "",
        "Favorite": "5",
        "Public": "0"
    },
    {
        "Name": "date-a-live", "Status": '1',
        "Vol": [
            "01",
            "02",
            "03",
            "04",
            "05",
            "06",
            "07",
            "08",
            "09",
            "10",
            "11.5",
            "11",
            "12",
            "13",
            "14",
            "15",
            "16",
            "17",
            "18",
            "19",
            "20",
            "21",
            "22",
        ],
        "Lang": "en",
        "OneShot": false,
        "Title": "",
        "Favorite": "3",
        "Public": "0"
    },
    {
        "Name": "demon-city-shinjuku",
        "Vol": [
            ""
        ],
        "Lang": "en",
        "OneShot": true, "Status": '1',
        "Title": "",
        "Favorite": "5",
        "Public": "1"
    },
    {
        "Name": "durarara", "Status": '1',
        "Vol": [
            "0",
            "01",
            "02",
            "03",
            "04",
            "05",
            "06",
            "07",
            "08",
            "09",
            "10",
            "11",
            "12",
            "13",
        ],
        "Lang": "en",
        "OneShot": false,
        "Title": "",
        "Favorite": "2",
        "Public": "1"
    },
    {
        "Name": "gekkou",
        "Vol": [
            ""
        ],
        "Lang": "en",
        "OneShot": true, "Status": '1',
        "Title": "",
        "Favorite": "5",
        "Public": "1"
    },
    {
        "Name": "gimai-seikatsu", "Status": '2',
        "Vol": [
            "01",
            "02",
            "03",
            "04",
            "05",
            "06",
            "07",
            "08"
        ],
        "Lang": "en",
        "OneShot": false,
        "Title": "",
        "Favorite": "3",
        "Public": "0"
    },
    {
        "Name": "harmony",
        "Vol": [
            ""
        ],
        "Lang": "vn",
        "OneShot": true, "Status": '1',
        "Title": "",
        "Favorite": "5",
        "Public": "1"
    },
    {
        "Name": "hello-hello-and-hello",
        "Vol": [
            "",
            ""
        ],
        "Lang": "en",
        "OneShot": true, "Status": '1',
        "Title": "",
        "Favorite": "5",
        "Public": "1"
    },
    {
        "Name": "hello-world",
        "Vol": [
            ""
        ],
        "Lang": "en",
        "OneShot": true, "Status": '1',
        "Title": "",
        "Favorite": "5",
        "Public": "1"
    },
    {
        "Name": "hensuki", "Status": '1',
        "Vol": [
            "01",
            "02",
            "03",
            "04",
            "05",
            "06",
            "07",
            "08",
            "09",
            "10",
            "11",
            "12",
            "13",
            "14",
            "Special"
        ],
        "Lang": "en",
        "OneShot": false,
        "Title": "",
        "Favorite": "2",
        "Public": "0"
    }, {
        "Name": "hensuki", "Status": '1',
        "Vol": [
            "04",
            "05",
            "06",
            "07",
            "08",
            "09",
            "10",
            "11",
        ],
        "Lang": "vn",
        "OneShot": false,
        "Title": "",
        "Favorite": "2",
        "Public": "0"
    },
    {
        "Name": "himote-na-ore-ga",
        "Vol": [
            ""
        ],
        "Lang": "en",
        "OneShot": true, "Status": '1',
        "Title": "",
        "Favorite": "5",
        "Public": "1"
    },
    {
        "Name": "hoshizora-no-shita",
        "Vol": [
            ""
        ],
        "Lang": "vn",
        "OneShot": true, "Status": '1',
        "Title": "",
        "Favorite": "5",
        "Public": "1"
    },
    {
        "Name": "hyouka", "Status": '1',
        "Vol": [
            "01",
            "02",
            "03",
            "04",
            "05",
            "06"
        ],
        "Lang": "vn",
        "OneShot": false,
        "Title": "",
        "Favorite": "1",
        "Public": "1"
    },
    {
        "Name": "ichigo-doumei",
        "Vol": [
            ""
        ],
        "Lang": "vn",
        "OneShot": true, "Status": '1',
        "Title": "",
        "Favorite": "5",
        "Public": "1"
    },
    {
        "Name": "isekai-maou", "Status": '3',
        "Vol": [
            "01",
            "02",
            "03",
            "04",
            "05",
            "06",
            "07",
            "08",
            "09",
            "10",
            "11",
            "12",
            "13",
            "14",
        ],
        "Lang": "en",
        "OneShot": false,
        "Title": "",
        "Favorite": "3",
        "Public": "0"
    },
    {
        "Name": "itai-no-itai-no",
        "Vol": [
            ""
        ],
        "Lang": "en",
        "OneShot": true, "Status": '1',
        "Title": "",
        "Favorite": "5",
        "Public": "1"
    },
    {
        "Name": "joze-to-tora-to-sakana-tachi",
        "Vol": [
            ""
        ],
        "Lang": "en",
        "OneShot": true, "Status": '1',
        "Title": "",
        "Favorite": "5",
        "Public": "1"
    },
    {
        "Name": "juni-taisen",
        "Vol": [
            ""
        ],
        "Lang": "en",
        "OneShot": true, "Status": '1',
        "Title": "",
        "Favorite": "5",
        "Public": "1"
    },
    {
        "Name": "kakushigoto",
        "Vol": [
            ""
        ],
        "Lang": "en",
        "OneShot": true, "Status": '1',
        "Title": "",
        "Favorite": "5",
        "Public": "1"
    },
    {
        "Name": "kimi-boku-ga-denwa",
        "Vol": [
            ""
        ],
        "Lang": "vn",
        "OneShot": true, "Status": '1',
        "Title": "",
        "Favorite": "5",
        "Public": "1"
    },
    {
        "Name": "kimi-no-hanashi",
        "Vol": [
            ""
        ],
        "Lang": "vn",
        "OneShot": true, "Status": '1',
        "Title": "",
        "Favorite": "5",
        "Public": "1"
    },
    {
        "Name": "kimi-no-suizou-wo-tabetai",
        "Vol": [
            ""
        ],
        "Lang": "vn",
        "OneShot": true, "Status": '1',
        "Title": "",
        "Favorite": "5",
        "Public": "1"
    },
    {
        "Name": "kimi-to-boku-no-uta-worlds-end",
        "Vol": [
            ""
        ],
        "Lang": "vn",
        "OneShot": true, "Status": '1',
        "Title": "",
        "Favorite": "5",
        "Public": "1"
    },
    {
        "Name": "koisuru-kiseichuu",
        "Vol": [
            ""
        ],
        "Lang": "vn",
        "OneShot": true, "Status": '1',
        "Title": "",
        "Favorite": "5",
        "Public": "1"
    },

    {
        "Name": "kori-no-kuni-no-amaryillis",
        "Vol": [
            ""
        ],
        "Lang": "en",
        "OneShot": true, "Status": '1',
        "Title": "",
        "Favorite": "5",
        "Public": "1"
    },
    {
        "Name": "kotonoha-no-niwa",
        "Vol": [
            "",
            ""
        ],
        "Lang": "en",
        "OneShot": true, "Status": '1',
        "Title": "",
        "Favorite": "5",
        "Public": "1"
    },
    {
        "Name": "kumo-no-mukou",
        "Vol": [
            ""
        ],
        "Lang": "en",
        "OneShot": true, "Status": '1',
        "Title": "",
        "Favorite": "5",
        "Public": "1"
    },
    {
        "Name": "kuzu-to-kinka-no-qualidea",
        "Vol": [
            ""
        ],
        "Lang": "vn",
        "OneShot": true, "Status": '1',
        "Title": "",
        "Favorite": "5",
        "Public": "1"
    },
    {
        "Name": "macaron",
        "Vol": [
            ""
        ],
        "Lang": "vn",
        "OneShot": true, "Status": '1',
        "Title": "",
        "Favorite": "5",
        "Public": "1"
    },
    {
        "Name": "mahouka-koukou", "Status": '2',
        "Vol": [
            "01",
            "02",
            "03",
            "04",
            "05",
            "06",
            "07",
            "08",
            "09",
            "10",
            "11",
            "12",
            "13",
            "14",
            "15",
            "16",
            "17",
            "18",
            "19",
            "20",
            "21",
            // "22",
            // "23",
            // "24",
            // "25",
            // "26",
            // "27",
            // "28",
            // "29",
            // "30",
            // "31",
            // "32"
        ],
        "Lang": "en",
        "OneShot": false,
        "Title": "",
        "Favorite": "3",
        "Public": "0"
    },

    {
        "Name": "mardock-scramble",
        "Vol": [
            ""
        ],
        "Lang": "en",
        "OneShot": true, "Status": '1',
        "Title": "",
        "Favorite": "5",
        "Public": "1"
    },
    {
        "Name": "mata-onaji-yume",
        "Vol": [
            ""
        ],
        "Lang": "en",
        "OneShot": true, "Status": '1',
        "Title": "",
        "Favorite": "5",
        "Public": "1"
    },
    {
        "Name": "mikkakan-no-koufuku",
        "Vol": [
            ""
        ],
        "Lang": "vn",
        "OneShot": true, "Status": '1',
        "Title": "",
        "Favorite": "5",
        "Public": "1"
    },
    {
        "Name": "mimizuku-to-yoru-no-ou",
        "Vol": [
            ""
        ],
        "Lang": "vn",
        "OneShot": true, "Status": '1',
        "Title": "",
        "Favorite": "5",
        "Public": "1"
    },
    {
        "Name": "mirai",
        "Vol": [
            ""
        ],
        "Lang": "en",
        "OneShot": true, "Status": '1',
        "Title": "",
        "Favorite": "5",
        "Public": "1"
    },
    {
        "Name": "nier-automata", "Status": '1',
        "Vol": [
            "01",
            "02"
        ],
        "Lang": "en",
        "OneShot": false,
        "Title": "",
        "Favorite": "5",
        "Public": "1"
    },
    {
        "Name": "no-game-no-life", "Status": '2',
        "Vol": [
            "01",
            "02",
            "03",
            "04",
            "05",
            "06",
            "07",
            "08",
            "09",
            "10",
            "11",
            "12",
        ],
        "Lang": "en",
        "OneShot": false,
        "Title": "",
        "Favorite": "2",
        "Public": "0"
    },
    {
        "Name": "otogi-no-mori",
        "Vol": [
            ""
        ],
        "Lang": "en",
        "OneShot": true, "Status": '1',
        "Title": "",
        "Favorite": "5",
        "Public": "1"
    },
    
    {
        "Name": "phenomeno",
        "Vol": [
            ""
        ],
        "Lang": "vn",
        "OneShot": true, "Status": '1',
        "Title": "",
        "Favorite": "5",
        "Public": "1"
    },
    {
        "Name": "pygmalion-wa-tane",
        "Vol": [
            ""
        ],
        "Lang": "vn",
        "OneShot": true, "Status": '1',
        "Title": "",
        "Favorite": "5",
        "Public": "1"
    },
    {
        "Name": "riku-and-chise",
        "Vol": [
            ""
        ],
        "Lang": "en",
        "OneShot": true, "Status": '1',
        "Title": "",
        "Favorite": "5",
        "Public": "1"
    },
    {
        "Name": "saijaku-muhai-no-bahamut", "Status": '1',
        "Vol": [
            "01",
            "02",
            "03",
            "04",
            "05",
            "06",
            "07",
            "08",
            "09",
            "10",
            "11",
            "12",
            "13",
            "14",
            "15",
            "16",
            "17",
            "18",
            "19",
            "20"
        ],
        "Lang": "en",
        "OneShot": false,
        "Title": "",
        "Favorite": "3",
        "Public": "0"
    },
    {
        "Name": "sekaiichi-kantan",
        "Vol": [
            ""
        ],
        "Lang": "en",
        "OneShot": true, "Status": '1',
        "Title": "",
        "Favorite": "5",
        "Public": "0"
    },
    {
        "Name": "shiki", "Status": '1',
        "Vol": [
            "01",
            "02"
        ],
        "Lang": "en",
        "OneShot": false,
        "Title": "",
        "Favorite": "5",
        "Public": "1"
    },
    {
        "Name": "side-by-side-dreamers",
        "Vol": [
            ""
        ],
        "Lang": "en",
        "OneShot": true, "Status": '1',
        "Title": "",
        "Favorite": "5",
        "Public": "1"
    },
    {
        "Name": "starting-over",
        "Vol": [
            ""
        ],
        "Lang": "vn",
        "OneShot": true, "Status": '1',
        "Title": "",
        "Favorite": "5",
        "Public": "1"
    },
    {
        "Name": "sugar-dark",
        "Vol": [
            ""
        ],
        "Lang": "en",
        "OneShot": true, "Status": '1',
        "Title": "",
        "Favorite": "5",
        "Public": "1"
    },
    {
        "Name": "tabi-ni-deyou",
        "Vol": [
            ""
        ],
        "Lang": "vn",
        "OneShot": true, "Status": '1',
        "Title": "",
        "Favorite": "5",
        "Public": "1"
    },
    {
        "Name": "tsuki-no-sango",
        "Vol": [
            ""
        ],
        "Lang": "vn",
        "OneShot": true, "Status": '1',
        "Title": "",
        "Favorite": "5",
        "Public": "1"
    },
    {
        "Name": "uchi-musume", "Status": '1',
        "Vol": [
            "01",
            "02",
            "03",
            "04",
            "05",
            "06",
            "07",
            "08",
            "09"
        ],
        "Lang": "en",
        "OneShot": false,
        "Title": "",
        "Favorite": "3",
        "Public": "0"
    },
    {
        "Name": "utsuro-no-hako", "Status": '1',
        "Vol": [
            "01",
            "02",
            "03",
            "04",
            "05",
            "06",
            "07"
        ],
        "Lang": "en",
        "OneShot": false,
        "Title": "",
        "Favorite": "3",
        "Public": "0"
    },
    {
        "Name": "yokohama-station-sf",
        "Vol": [
            ""
        ],
        "Lang": "en",
        "OneShot": true, "Status": '1',
        "Title": "",
        "Favorite": "5",
        "Public": "1"
    },
    {
        "Name": "yume-nikki",
        "Vol": [
            ""
        ],
        "Lang": "en",
        "OneShot": true, "Status": '1',
        "Title": "",
        "Favorite": "5",
        "Public": "1"
    },
    {
        "Name": "ashita-boku-wa-shinu", "Status": '1',
        "Vol": [
            "01",
            "02",
            "03",
            "04"
        ],
        "Lang": "en",
        "OneShot": false,
        "Title": "",
        "Favorite": "5",
        "Public": "0"
    },
    {
        "Name": "kino-no-tabi", "Status": '2',
        "Vol": [
            "01",
            "02",
            "03",
            "04",
            "05",
            "06",
            "07",
            "08",
            "09",
            "10",
            "11",
            "12",
            "13",
            "14",
            "15",
            "16",
            "17"
        ],
        "Lang": "en",
        "OneShot": false,
        "Title": "",
        "Favorite": "3",
        "Public": "1"
    },
    {
        "Name": "kokoro-connect", "Status": '1',
        "Vol": [
            "01",
            "02",
            "03",
            "04",
            "05",
            "06",
            "07",
            "08",
            "09",
            "10",
            "11"
        ],
        "Lang": "en",
        "OneShot": false,
        "Title": "",
        "Favorite": "3",
        "Public": "0"
    },
    {
        "Name": "monogatari", "Status": '3',
        "Vol": [
            "01",
            "02",
            "03",
            "04",
            "05",
            "06",
            "07",
            "08",
            "09",
            "10",
            "11",
            "12",
            "13",
            "14",
            "15",
            "16",
            "17",
            "18",
            "19",
            "20"
        ],
        "Lang": "en",
        "OneShot": false,
        "Title": "",
        "Favorite": "1",
        "Public": "1"
    },
    {
        "Name": "ookami-to-koushinryou", "Status": '1',
        "Vol": [
            "01",
            "02",
            "03",
            "04",
            "05",
            "06",
            "07",
            "08",
            "09",
            "10",
            "11",
            "12",
            "13",
            "14",
            "15",
            "16",
            "17",
            "18",
            "19",
            "20",
            "21",
            "22",
            "23",
            "24",
        ],
        "Lang": "en",
        "OneShot": false,
        "Title": "",
        "Favorite": "3",
        "Public": "1"
    },
    {
        "Name": "psycome", "Status": '1',
        "Vol": [
            "01",
            "02",
            "03",
            "04",
            "05",
            "06",
        ],
        "Lang": "en",
        "OneShot": false,
        "Title": "",
        "Favorite": "5",
        "Public": "0"
    },
    {
        "Name": "re-zero", "Status": '2',
        "Vol": [
            "01",
            "02",
            "03",
            "04",
            "05",
            "06",
            "07",
            "08",
            "09",
            "10",
            "11",
            "12",
            "13",
            "14",
            "15",
            "16",
            "17",
            "18",
            "19",
            "20",
            "21",
            "22",
            "23",
        ],
        "Lang": "en",
        "OneShot": false,
        "Title": "",
        "Favorite": "2",
        "Public": "0"
    },
    {
        "Name": "steins-gate",
        "Vol": [
            "",
        ],
        "Lang": "en",
        "OneShot": true, "Status": '1',
        "Title": "",
        "Favorite": "5",
        "Public": "1"
    },
    {
        "Name": "violet-evergarden", "Status": '1',
        "Vol": [
            "01",
            "02",
            "03",
        ],
        "Lang": "en",
        "OneShot": false,
        "Title": "",
        "Favorite": "2",
        "Public": "1"
    },
    {
        "Name": "zaregoto", "Status": '1',
        "Vol": [
            "01",
            "02",
            "03",
            "04",
            "05",
            "06",
            "07",
            "08",
            "09",
            "10",
        ],
        "Lang": "en",
        "OneShot": false,
        "Title": "",
        "Favorite": "5",
        "Public": "0"
    },
    {
        "Name": "honzuki-no-gekokujou", "Status": '1',
        "Vol": [
            "01",
            "02",
            "03",
            "04",
            "05",
            "06",
            "07",
            "08",
            "09",
            "09.1",
            "09.2",
            "09.3",
            "10",
            "11",
            "12",
            "13",
            "14",
            "15",
            "16",
            "17",
            "18",
            "19",
            "20",
            "21",
            "22",
            "23",
            "24",
            "25",
            "26",
            "27",
            "28",
            "29",
            "30",
            "31",
            // "32",
            // "33",
            "Short",
        ],
        "Lang": "en",
        "OneShot": false,
        "Title": "",
        "Favorite": "3",
        "Public": "1"
    },
    {
        "Name": "mushoku-tensei", "Status": '1',
        "Vol": [
            "01",
            "02",
            "03",
            "04",
            "05",
            "06",
            "07",
            "08",
            "09",
            "10",
            "11",
            "12",
            "13",
            "14",
            "15",
            "16",
            "17",
            "18",
            "19",
            "20",
            "21",
            "22",
            "23",
            "24",
            "25",
            "26",
        ],
        "Lang": "en",
        "OneShot": false,
        "Title": "",
        "Favorite": "2",
        "Public": "0"
    },
    {
        "Name": "toaru-majutsu-no-index", "Status": '1',
        "Vol": [
            "01",
            "02",
            "03",
            "04",
            "05",
            "06",
            "07",
            "08",
            "09",
            "10",
            "11",
            "12",
            "13",
            "14",
            "15",
            "16",
            "17",
            "18",
            "19",
            "20",
            "21",
            "22"
        ],
        "Lang": "en",
        "OneShot": false,
        "Title": "",
        "Favorite": "3",
        "Public": "0"
    },
    {
        "Name": "toaru-majutsu-no-index-nt", "Status": '1',
        "Vol": [
            "01",
            "02",
            "03",
            "04",
            "05",
            "06",
            "07",
            "08",
            "09",
            "10",
            "11",
            "12",
            "13",
            "14",
            "15",
            "16",
            "17",
            "18",
            "19",
            "20",
            "21",
            "22",
            "22R",
        ],
        "Lang": "en",
        "OneShot": false,
        "Title": "",
        "Favorite": "3",
        "Public": "0"
    },
    {
        "Name": "toaru-majutsu-no-index-nt", "Status": '1',
        "Vol": [
            "01",
            "02",
            "03",
        ],
        "Lang": "en",
        "OneShot": false,
        "Title": "",
        "Favorite": "5",
        "Public": "0"
    }
];



var host = "https://null-library.github.io/lib/";
var thumbHost = "https://null-home.github.io/n/u/l/l/assets/thumbs/lightnovel/";
function pageRender() {
    if (!window.location.href.includes('private.html')) DB = DB.filter(x => x.Public == '1');
    var content_wrap = document.getElementById("content-wrap");
    let htmlOneShot = "";
    DB.sort((x, y) => x.Favorite - y.Favorite).forEach(data => {
        if (data.Title == '') {
            let arrName = data.Name.split('-');
            arrName.forEach(char => {
                data.Title += char.charAt(0).toUpperCase() + char.slice(1) + ' ';
            })
            data.Title = data.Title.trim(' ');
        }
        if (data.OneShot) {
            let volUrl = 'one-shot/' + data.Name + '.html';
            let thumbnail = data.Name + '_1.jpg';
            data.Public = '1';
            htmlOneShot += itemRender(host + data.Lang + '/' + volUrl, thumbnail, data.Lang, data.Title);
            // `<div class="item-container">
            //     <a class="item-border" style="text-decoration:none" href="` +  + `" >
            //         <div class="item">
            //             <div class="item-thumbnail">
            //                 <div class="item-img" style="background-image:url('https://null-library.github.io/assets/thumbs/` +  thumbnail + `')"></div>
            //                 <span class="item-rate">` +data.Lang.toUpperCase() + `</span>
            //             </div>
            //             <div class="title-wrap">
            //                 <div class="item-title">` + data.Title + `</div>
            //             </div>
            //         </div>
            //     </a>
            // </div>`;

        }
        else if (data?.Vol?.length > 0) {
            let htmlItem = "";
            data?.Vol.forEach(vol => {
                let volUrl = data.Name + '/' + data.Name + '_vol_' + vol + '.html';
                let volName = data.Title + ' - Vol ' + vol;
                let thumbnail = !data.OneShot ? data.Name + '_vol_' + vol + '_1.jpg' : data.Name + '_1.jpg';

                htmlItem += itemRender(host + data.Lang + '/' + volUrl, thumbnail, data.Lang, volName);

            })
            // content_wrap.innerHTML += `<div class="content__container"><div class="container__header"><div>` +
            //     data.Title + `</div></div><hr class="separate"><div class="container__body">` + htmlItem + `</div></div>`

            content_wrap.innerHTML += wrapRender(data.Title, htmlItem, data.Status);

        }

    });
    content_wrap.innerHTML += wrapRender("One-shot", htmlOneShot, "1");

}

function wrapRender(title, htmlItem, status) {
    var statusTag = "";
    if (status == '1') {
        statusTag = `<span class="item-tag px-2 bg-success fs-5">Ended</span>`;
    }
    else if (status == '2') {
        statusTag = `<span class="item-tag px-2 bg-info fs-5">On-going</span>`;
    }
    else {
        statusTag = `<span class="item-tag px-2 bg-warning fs-5">Waiting</span>`;
    }
    var item = `<div class="content__container">
        <div class="container__header">
            <div class="text-truncate">` + title + `</div>
            `+ statusTag + `
        </div>
        <hr class="separate">
        <div class="container__body">` + htmlItem + `</div>
    </div>`;
    return item;
}
function itemRender(href, thumbnail, lang, volName) {
    var item = `<div class="item-container">
        <a class="item-border" style="text-decoration:none" href="` + href + `" >
            <div class="item">
                <div class="item-thumbnail">
                    <div class="item-img" style="background-image:url('`+ thumbHost + thumbnail + `')"></div>
                    <span class="item-rate">` + lang.toUpperCase() + `</span>
                </div>
                <div class="title-wrap">
                    <div class="item-title">` + volName + `</div>
                </div>
            </div>
        </a>
    </div>`;
    return item;
}
pageRender();