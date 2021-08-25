// courtesy of Raechel Odom

const marvelMovies = {
  "civilWar": {
    "title": "Captain America: Civil War",
    "releaseYear": 2016,
    "directors": ["Joe Russo", "Anthony Russo"],
    "rating": "PG13",
    "stars": ["Chris Evans", "Robert Downey Jr.", "Sebtastian Stan", "Paul Rudd", "Elizabeth Olsen", "Paul Bettany", "Jeremy Renner", "Scarlett Johansson", "Anthony Mackie", "Tom Holland"],
    "imdbRating": 7.8,
    "characters": ["Iron Man", "Captain America", "Bucky Barnes", "Scarlet Witch", "Spider-Man", "Vision", "Ant-Man", "Hawkeye", "Black Widow", "Falcon"],
    "basedOn": ["Civil War"],
    "link": "https://www.imdb.com/title/tt3498820/",
    "img": "https://upload.wikimedia.org/wikipedia/en/5/53/Captain_America_Civil_War_poster.jpg",
    "id": 1,
    "favorite": false
  },
  "logan": {
    "title": "Logan",
    "releaseYear": 2017,
    "directors": ["James Mangold"],
    "rating": "R",
    "stars": ["Hugh Jackman", "Patrick Stewart"],
    "imdbRating": 8.1,
    "characters": ["Wolverine", "X-23", "Professor Xavier"],
    "basedOn": ["Old Man Logan"],
    "link": "https://www.imdb.com/title/tt3315342/?ref_=fn_al_tt_1",
    "img": "https://upload.wikimedia.org/wikipedia/en/3/37/Logan_2017_poster.jpg",
    "id": 2,
    "favorite": false

  },
  "avengers": {
    "title": "The Avengers",
    "releaseYear": 2012,
    "directors": ["Joss Whedon"],
    "rating": "PG13",
    "stars": ["Chris Evans", "Robert Downey Jr.", "Scarlett Johansson", "Chris Hemsworth", "Samuel L. Jackson", "Tom Hiddleston", "Mark Ruffalo", "Jeremy Renner"],
    "imdbRating": 8.1,
    "characters": ["Captain America", "Iron Man", "Black Widow", "Thor", "Nick Fury", "Loki", "Hulk", "Hawkeye"],
    "basedOn": ["The New Avengers"],
    "link": "https://www.imdb.com/title/tt0848228/?ref_=nv_sr_1",
    "img": "https://upload.wikimedia.org/wikipedia/en/f/f9/TheAvengers2012Poster.jpg",
    "id": 3,
    "favorite": false
  },
  "ragnarok": {
    "title": "Thor Ragnarok",
    "releaseYear": 2017,
    "directors": ["Taika Waititi"],
    "rating": "PG13",
    "stars": ["Chris Hemsworth", "Tom Hiddleston", "Mark Ruffalo", "Cate Blanchett", "Jeff Goldblum", "Anthony Hopkins", "Taika Waititi"],
    "imdbRating": 7.9,
    "characters": ["Thor", "Loki", "Hulk", "Valkyrie", "Hela", "Surtur", "Grandmaster", "Odin", "Korg", "Miek"],
    "basedOn": ["Ragnarok", "Unworthy Thor", "Planet Hulk"],
    "link": "https://www.imdb.com/title/tt3501632/?ref_=nv_sr_1",
    "img": "https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_.jpg",
    "id": 4,
    "favorite": false
  },
  "blackPanther": {
    "title": "Black Panther",
    "releaseYear": 2018,
    "directors": ["Ryan Coogler"],
    "rating": "PG13",
    "stars": ["Chadwick Boseman", "Michael B. Jordan", "Lupita Nyong'o", "Martin Freeman", "Danai Gurira", "Angela Bassett", "Winston Duke", "Leticia Wright", "Daniel Kaluuya"],
    "imdbRating": 7.3,
    "characters": ["Black Panther", "Shuri", "M'Baku", "Okoye", "Killmonger", "Nakia"],
    "basedOn": ["Jungle Action Vol. 2 #6"],
    "link": "https://www.imdb.com/title/tt1825683/?ref_=nv_sr_1",
    "img": "https://images-na.ssl-images-amazon.com/images/I/61BlAIoqQUL.jpg",
    "id": 5,
    "favorite": false
  },
  "doctorStrange": {
    "title": "Doctor Strange",
    "releaseYear": 2016,
    "directors": ["Scott Derrickson"],
    "rating": "PG13",
    "stars": ["Benedict Cumberbatch", "Chiwetel Ejiofor", "Rachel McAdams", "Benedict Wong", "Mads Mikkelsen", "Tilda Swinton"],
    "imdbRating": 7.5,
    "characters": ["Doctor Stephen Strange", "Ancient One", "Karl Mordo", "Wong"],
    "basedOn": ["Strange Tales #115"],
    "link": "https://www.imdb.com/title/tt1211837/?ref_=nv_sr_1",
    "img": "https://images-na.ssl-images-amazon.com/images/I/61tM93KYzpL.jpg",
    "id": 6,
    "favorite": false

  },
  "antman": {
    "title": "Ant-Man",
    "releaseYear": 2015,
    "directors": ["Peyton Reed"],
    "rating": "PG13",
    "stars": ["Paul Rudd", "Evageline Lilly", "Michael Peña", "Tip 'T.I.' Harris", "Anthony Mackie"],
    "imdbRating": 7.3,
    "characters": ["Ant-Man", "Wasp", "Hank Pym", "Yellow Jacket", "Falcon"],
    "basedOn": ["Marvel Premiere Vol 1 #47"],
    "link": "https://www.imdb.com/title/tt0478970/?ref_=nv_sr_2",
    "img": "https://upload.wikimedia.org/wikipedia/en/7/75/Ant-Man_poster.jpg",
    "id": 7,
    "favorite": false
  },
  "captainMarvel": {
    "title": "Captain Marvel",
    "releaseYear": 2019,
    "directors": ["Anna Boden", "Ryan Fleck"],
    "rating": "PG13",
    "stars": ["Brie Larson", "Samuel L. Jackson","Ben Mendelsohn", "Lee Pace", "Clark Gregg"],
    "imdbRating": 7.2,
    "characters": ["Captain Marvel", "Nick Fury", "Talos", "Korath", "Phil Coulson", "Ronan"],
    "basedOn": ["Captain Marvel Vol. 7 #1"],
    "link": "https://www.imdb.com/title/tt4154664/?ref_=nv_sr_1",
    "img": "https://upload.wikimedia.org/wikipedia/en/8/85/Captain_Marvel_poster.jpg",
    "id": 8,
    "favorite": false
  },
  "spiderman": {
    "title": "Spider-Man: Homecoming",
    "releaseYear": 2017,
    "directors": ["Jon Watts"],
    "rating": "PG13",
    "stars": ["Tom Holland", "Michael Keaton", "Jon Favreau", "Donald Glover", "Robert Downey Jr."],
    "imdbRating": 7.5,
    "characters": ["Spider-Man", "Iron Man", "Vulture"],
    "basedOn": ["Ultimate Spider-Man"],
    "link": "https://www.imdb.com/title/tt2250912/?ref_=nv_sr_2",
    "img": "https://vignette.wikia.nocookie.net/marveldatabase/images/4/4f/Spider-Man_Homecoming_poster_004.jpg/revision/latest?cb=20170524085936",
    "id": 9,
    "favorite": false
  },
  "xmen": {
    "title": "X2",
    "releaseYear": 2003,
    "directors": ["Brian Singer"],
    "rating": "PG13",
    "stars": ["Hugh Jackman", "Patrick Stewart", "Ian McKellen", "Halle Berry", "James Marsden", "Anna Paquin", "Alan Cumming", "Famke Janssen"],
    "imdbRating": 7.5,
    "characters": ["Wolverine", "Professor Xavier", "Magneto", "Storm", "Jean Grey", "Cyclops", "Rogue", "Mystique", "Nightcrawler"],
    "basedOn": ["Marvel Graphic Novel Vol 1 #5", "Ultimate X-Men Vol 1 #7"],
    "link": "https://www.imdb.com/title/tt0290334/?ref_=nv_sr_1",
    "img": "https://pm1.narvii.com/6351/8e0e038edb374cc4a92bc95836da604deaaee377_hq.jpg",
    "id": 10,
    "favorite": false
  },
  "deadpool": {
    "title": "Deadpool",
    "releaseYear": 2016,
    "directors": ["Tim Miller"],
    "rating": "R",
    "stars": ["Ryan Reynolds", "Morena Baccarin", "T.J. Miller", "Ed Skrein", "Brianna Hildebrand"],
    "imdbRating": 8,
    "characters": ["Deadpool", "Negasonic Teenage Warhead", "Ajax", "Colossus"],
    "basedOn": ["Deadpool Vol. 1 #1"],
    "link": "https://www.imdb.com/title/tt1431045/",
    "img": "https://images-na.ssl-images-amazon.com/images/I/51Gh9OaWVcL.jpg",
    "id": 11,
    "favorite": false
  },
  "guardians": {
    "title": "Guardians of the Galaxy",
    "releaseYear": 2014,
    "directors": ["James Gunn"],
    "rating": "PG13",
    "stars": ["Chris Pratt", "Zoe Saldana", "Dave Bautista", "Vin Diesel", "Bradley Cooper", "Lee Pace", "Michael Rooker", "Karen Gillian"],
    "imdbRating": 8.1,
    "characters": ["Star-Lord", "Gamora", "Groot", "Rocket Raccoon", "Drax", "Nebula", "Ronan", "Yondu"],
    "basedOn": ["Annihilation: Conquest"],
    "link": "https://www.imdb.com/title/tt2015381/",
    "img": "https://m.media-amazon.com/images/M/MV5BMTAwMjU5OTgxNjZeQTJeQWpwZ15BbWU4MDUxNDYxODEx._V1_SY1000_CR0,0,674,1000_AL_.jpg",
    "id": 12,
    "favorite": false
  },
  "infinityWar": {
  "title": "Avengers: Infinity War",
  "releaseYear": 2018,
  "directors": ["Anthony Russo", "Joe Russo"],
  "rating": "PG13",
  "stars": ["Robert Downey Jr.", "Chris Hemsworth", "Chris Evans", "Josh Brolin", "Mark Ruffalo", "Scarlett Johansson", "Don Cheadle", "Benedict Cumberbatch", "Tom Holland", "Chadwick Boseman", "Zoe Saldana", "Tom Hiddleston", "Anthony Mackie", "Karen Gillian", "Chris Pratt", "Dave Bautista", "Sebastian Stan", "Elizabeth Olsen", "Bradley Cooper", "Samuel L. Jackson", "Jeremy Renner"],
  "imdbRating": 8.5,
  "characters": ["Iron Man", "Captain America", "Thor", "Thanos", "Hulk", "Black Widow", "War Machine", "Doctor Strange", "Spider-Man", "Black Panther", "Gamora", "Loki", "Falcon", "Gamora", "Star-Lord", "Drax", "Bucky Barnes", "Scarlet Witch", "Rocket Raccoon", "Nick Fury", "Hawkeye"],
  "basedOn": ["The Infinity Gauntlet"],
  "link": "https://www.imdb.com/title/tt4154756/",
  "img": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
  "id": 13,
  "favorite": false
  }
}

const marvelComics = {
  "infinityWar": {
    "title": "The Infinity Gauntlet",
    "publishDate": 1991,
    "writers": ["Jim Starlin"],
    "pencillers": ["George Pérez", "Ron Lim"],
    "inkers": ["Josef Rubinstein", "Rom Christopher", "Bruce N Solotoff"],
    "letterers": ["Jack Morelli"],
    "colorists": ["Max Scheele", "Ian Laughlin"],
    "editors": ["Craig Anderson"],
    "characters": ["Thanos", "Mistress Death", "Adam Warlock", "Silver Surfer", "Doctor Strange", "Nebula", "Mephisto"],
    "adapted": true,
    "summary": "Thanos, a powerful being, takes the task of correcting the imbalance of living beings and intends to kill half the universe. The Silver Surfer, learning of these plans, notifies the Avengers in attempt to stop him.",
    "link": "https://marvel.fandom.com/wiki/Infinity_War",
    "img": "https://vignette.wikia.nocookie.net/marveldatabase/images/a/ad/Infinity_War_Vol_1_1_Full.jpg/revision/latest?cb=20101014141710",
    "id": 14,
    "favorite": false
  },
  "civilWar": {
    "title": "Civil War",
    "publishDate": 2006,
    "writers": ["Mark Millar"],
    "pencillers": ["Steve McNiven"],
    "inkers": ["Dexter Vines"],
    "letterers": ["Chris Eliopoulos"],
    "colorists": ["Morry Hollowell"],
    "editors": ["Molly Lazer", "Aubrey Sitterson", "Andy Schmidt", "Tom Brevoort"],
    "characters": ["Iron Man", "Spider-Man", "Doctor Strange", "Luke Cage", "Mister Fantastic", "Henry Pym", "Captain America", "Black Panther"],
    "adapted": true,
    "summary": "After a huge number of civilian lives lost, the government tries to enact The Superhero Registration Act, an authoritarian law where all heroes will have to register with the government. Some heroes, like Iron Man, are in favor of the law while others, like Captain America, are not.",
    "link": "https://marvel.fandom.com/wiki/Civil_War_(Event)",
    "img": "https://vignette.wikia.nocookie.net/marveldatabase/images/0/0f/Civil_War_Vol_1_1_Turner_Variant.jpg/revision/latest?cb=20070524065830",
    "id": 15,
    "favorite": false
  },
  "houseOfM": {
    "title": "House of M",
    "publishDate": 2005,
    "writers": ["Brian Michael Bendis"],
    "pencillers": ["Oliver Coipel"],
    "inkers": ["Tim Townsend"],
    "letterers": null,
    "colorists": ["Frank D'Armata"],
    "editors": null,
    "characters": ["Scarlet Witch", "Quicksilver", "Magneto", "Professor Xavier", "Captain America", "Emma Frost", "Doctor Strange"],
    "adapted": false,
    "summary": "Mutant Scarlet Witch suffers a breakdown and cannot control her powers. The Avengers quarrel on how to help her, some of them think there is no other way than to kill her, while others think they could control her magic. When they try to talk to her, she alters the reality of Earth and the lives of the heroes in it.",
    "link": "https://marvel.fandom.com/wiki/Earth-58163",
    "img": "https://vignette.wikia.nocookie.net/marveldatabase/images/6/67/Family_Magnus_%28Earth-58163%29_from_House_of_M_Vol_1_6_001.jpg/revision/latest/scale-to-width-down/700?cb=20061206101145",
    "id": 16,
    "favorite": false
  },
  "ragnarok": {
    "title": "Ragnarök: Part the First",
    "publishDate": 2006,
    "writers": ["Michael Avon Oeming", "Daniel Berman"],
    "pencillers": ["Andrea Divito"],
    "inkers": ["Andrea Divito"],
    "letterers": ["Randy Gentile"],
    "colorists": ["Laura Villari"],
    "editors": ["Tom Brevoot"],
    "characters": ["Thor", "Odin", "Loki", "Surtur", "Fenris"],
    "adapted": true,
    "summary": "The fall of Asgard has come and Thor must defend his home against those who would see it crumble.",
    "link": "https://marvel.fandom.com/wiki/Ragnarok_(Event)",
    "img": "https://vignette.wikia.nocookie.net/marveldatabase/images/9/97/Ragnarok_%28Event%29_from_Thor_Vol_1_128_001.jpg/revision/latest/scale-to-width-down/250?cb=20170425185039",
    "id": 17,
    "favorite": false
  },
  "unworthyThor": {
    "title": "Unworthy Thor Vol. 1 'The Hammer from Heaven'",
    "publishDate": 2017,
    "writers": ["Jason Aaron"],
    "pencillers": ["Olivier Coipel"],
    "inkers": ["Olivier Coipel"],
    "letterers": ["Joe Sabino"],
    "colorists": ["Matthew Wilson"],
    "editors": ["Wil Moss", "Charles Beacham", "Tom Brevoort"],
    "characters": ["Thor", "Odin"],
    "adapted": true,
    "summary": "Thor loses Mjolnir, the most powerful weapon and is desperate to regain his purpose in the cosmos.",
    "link": "https://marvel.fandom.com/wiki/File:Unworthy_Thor_Vol_1_1.jpg",
    "img": "https://vignette.wikia.nocookie.net/marveldatabase/images/2/2b/Unworthy_Thor_Vol_1_1.jpg/revision/latest/scale-to-width-down/316?cb=20161027234838",
    "id": 18,
    "favorite": false
  },
  "professorHulk": {
    "title": "Incredible Hulk Vol. 1 #377 'Honey, I Shrunk the Hulk'",
    "publishDate": 1991,
    "writers": ["Peter David"],
    "pencillers": ["Dale Keown"],
    "inkers": ["Bob McLeod"],
    "letterers": ["Joe Rosen"],
    "colorists": ["Glynis Oliver"],
    "editors": ["Bobbie Chase"],
    "characters": ["Hulk"],
    "adapted": false,
    "summary": "Bruce Banner's multiple personalities have begun to merge into a separate personality, eventually known as Professor Hulk.",
    "link": "https://marvel.fandom.com/wiki/File:Incredible_Hulk_Vol_1_1.jpg",
    "img": "https://vignette.wikia.nocookie.net/marveldatabase/images/f/fa/Incredible_Hulk_Vol_1_1.jpg/revision/latest/scale-to-width-down/310?cb=20171228052320",
    "id": 19,
    "favorite": false
  },
  "planetHulk": {
    "title": "Incredible Hulk Vol. 2 #92 'Exile, Part 1'",
    "publishDate": 2006,
    "writers": ["Greg Pak"],
    "pencillers": ["Carlo Pagualayan"],
    "inkers": ["Jeffrey Huet"],
    "letterers": ["Randy Gentile"],
    "colorists": ["Chris Sotomayor"],
    "editors": ["Mark Paniccia", "Nathan Cosby"],
    "characters": ["Hulk", "Mister Fantastic", "Doctor Strange", "Iron Man", "Black Bolt"],
    "adapted": true,
    "summary": "The Hulk lands on an alien planet known as Sakaar and winds up a gladiator alongside other creatures, such as Miek and Korg, fighting under the Red King.",
    "link": "https://marvel.fandom.com/wiki/Planet_Hulk",
    "img": "https://vignette.wikia.nocookie.net/marveldatabase/images/c/c9/Incredible_Hulk_Vol_2_92_Textless.jpg/revision/latest/scale-to-width-down/200?cb=20090803143444",
    "id": 20,
    "favorite": false
  },
  "newAgeOfApocalypse": {
    "title": "X-Men: Age of Apocalypse Vol. 1 #1 'Like Father Like Daughter'",
    "publishDate": 2005,
    "writers": ["Akira Yoshida"],
    "pencillers": ["Chris Bachalo"],
    "inkers": ["Tim Townsend"],
    "letterers": ["Chris Eliopoulos", "Mike Marts"],
    "colorists": ["Studio F", "Edgar Delgado"],
    "editors": ["Mike Marts"],
    "characters": ["Quicksilver", "Rogue", "Magneto", "Storm", "Gambit", "Sunfire", "Nightcrawler", "Wolfsbane", "X-23", "Wolverine"],
    "adapted": false,
    "summary": "Apocalypse has been defeated but now the Mr. Sinister and the Sinister Six have appeared and sought out Weapon-X, better known as Wolverine.",
    "link": "https://marvel.fandom.com/wiki/File:Age_of_Apocalypse_Vol_1_1.jpg",
    "img": "https://vignette.wikia.nocookie.net/marveldatabase/images/1/13/Age_of_Apocalypse_Vol_1_1.jpg/revision/latest/scale-to-width-down/316?cb=20120302211301",
    "id": 21,
    "favorite": false
  },
  "ageOfApocalypse": {
    "title": "X-Men: Alpha Vol. 1 #1 'Beginnings...'",
    "publishDate": 1995,
    "writers": ["Scott Lobdell", "Mark Waid"],
    "pencillers": ["Roger Cruz", "Steve Epting"],
    "inkers": ["Tim Townsend", "Dan Panosian"],
    "letterers": ["Richard Starkings", "Comicraft"],
    "colorists": ["Steve Buccallato", "Electric Crayon"],
    "editors": ["Bob Harras"],
    "characters": ["Magneto", "Rogue", "Iceman", "Quicksilver", "Sabretooth", "Wild Child", "Morph", "Bishop", "Storm", "Nightcrawler"],
    "adapted": true,
    "summary": "Charles Xavier's son goes back in time and attempts to kill Magneto, but Charles gives his life instead causing an alternate reality where the X-Men now need to fight an eternal mutant, Apocalypse.",
    "link": "https://marvel.fandom.com/wiki/X-Men:_Alpha_Vol_1_1",
    "img": "https://vignette.wikia.nocookie.net/marveldatabase/images/c/cf/X-Men_Alpha_Vol_1_1.jpg/revision/latest/scale-to-width-down/300?cb=20180129050548",
    "id": 22,
    "favorite": false
  },
  "oldManLogan": {
    "title": "Old Man Logan Vol. 1 #1",
    "publishDate": 2015,
    "writers": ["Brian Michael Bendis"],
    "pencillers": ["Andrea Sorrentino"],
    "inkers": ["Andrea Sorrentino"],
    "letterers": ["Cory Petit"],
    "colorists": ["Marcelo Maiolo"],
    "editors": ["Mike Marts", "Mark Paniccia", "Xander Jarowey"],
    "characters": ["Wolverine"],
    "adapted": true,
    "summary": "Logan begins a journey across a wasteland America where villains are ruling and heroes are murdered.",
    "link": "https://marvel.fandom.com/wiki/Old_Man_Logan_Vol_1_1",
    "img": "https://vignette.wikia.nocookie.net/marveldatabase/images/5/58/Old_Man_Logan_Vol_1_1.jpg/revision/latest/scale-to-width-down/300?cb=20150522004120",
    "id": 23,
    "favorite": false
  },
  "newMutants": {
    "title": "New Mutants Vol. 1 #98 'The Beginning of the End, Pt. 1'",
    "publishDate": 1991,
    "writers": ["Rob Liefeld", "Fabian Nicieza"],
    "pencillers": ["Rob Liefeld"],
    "inkers": ["Rob Liefeld"],
    "letterers": ["Joe Rosen"],
    "colorists": ["Steve Buccallato"],
    "editors": ["Bob Harras"],
    "characters": ["Cable", "Cannonball", "Domino", "Deadpool"],
    "adapted": false,
    "summary": "The first appearance of Deadpool, where he arrives to take a bounty out on Cable but Domino takes him down first.",
    "link": "https://marvel.fandom.com/wiki/New_Mutants_Vol_1_98",
    "img": "https://vignette.wikia.nocookie.net/marveldatabase/images/8/87/New_Mutants_Vol_1_98.jpg/revision/latest/scale-to-width-down/300?cb=20140731070600",
    "id": 24,
    "favorite": false
  },
  "captainMarvel": {
    "title": "Captain Marvel Vol. 7 #1",
    "publishDate": 2012,
    "writers": ["Kelly Sue DeConnick"],
    "pencillers": ["Dexter Soy"],
    "inkers": ["Dexter Soy"],
    "letterers": ["Joe Caramagna"],
    "colorists": ["Dexter Soy"],
    "editors": ["Stephen Wacker"],
    "characters": ["Captain Marvel", "Captain America"],
    "adapted": true,
    "summary": "The first appearance of Carol Danvers as Captain Marvel, ace pilot and legendary avenger.",
    "link": "https://marvel.fandom.com/wiki/File:Captain_Marvel_Vol_1_1.jpg",
    "img": "https://vignette.wikia.nocookie.net/marveldatabase/images/9/92/Captain_Marvel_Vol_1_1.jpg/revision/latest/scale-to-width-down/317?cb=20080816201429",
    "id": 25,
    "favorite": false
  },
  "captainAmerica": {
    "title": "Captain America Comics Vol. 1 #1 'Meet Captain America'",
    "publishDate": 1941,
    "writers": ["Joe Simon", "Jack Kirby"],
    "pencillers": ["Joe Simon", "Jack Kirby"],
    "inkers": ["Al Liederman"],
    "letterers": null,
    "colorists": null,
    "editors": ["Joe Simon"],
    "characters": ["Captain America"],
    "adapted": true,
    "summary": "A young soldier is given serum to become bigger, faster, and stronger than a normal human. The doctor who gave it to him calls him Captain America and tells him his duty is to protect America from nazi forces.",
    "link": "https://marvel.fandom.com/wiki/File:Captain_America_Comics_Vol_1_1.jpg",
    "img": "https://vignette.wikia.nocookie.net/marveldatabase/images/9/9f/Captain_America_Comics_Vol_1_1.jpg/revision/latest/scale-to-width-down/337?cb=20180404011756",
    "id": 26,
    "favorite": false
  },
  "infinityWar": {
    "title": "Captain America Vol. 5 #1 'Out of Time: Part 1'",
    "publishDate": 2005,
    "writers": ["Ed Brubaker"],
    "pencillers": ["Steve Epting"],
    "inkers": ["Steve Epting"],
    "letterers": ["Randy Gentile"],
    "colorists": ["Frank D'Armata"],
    "editors": ["Tom Brevoort", "Andy Schmidt", "Nicole Wiley", "Molly Lazer"],
    "characters": ["Captain America", "Bucky Barnes"],
    "adapted": false,
    "summary": "Steve deals with the repurcussions of the Avengers disbanding and a cybernetic assassin breaks into Red Skull's apartment to kill him and steal his Cosmic Cube.",
    "link": "https://marvel.fandom.com/wiki/File:Captain_America_Vol_5_1.jpg",
    "img": "https://vignette.wikia.nocookie.net/marveldatabase/images/9/9d/Captain_America_Vol_5_1.jpg/revision/latest/scale-to-width-down/312?cb=20181116202236",
    "id": 27,
    "favorite": false
  },
  "amazingFantasy": {
    "title": "Amazing Fantasy Vol. 1 #15 'Spider-Man!'",
    "publishDate": 1962,
    "writers": ["Stan Lee", "Steve Ditko"],
    "pencillers": ["Steve Ditko"],
    "inkers": ["Steve Ditko"],
    "letterers": ["Artie Simek"],
    "colorists": null,
    "editors": ["Stan Lee"],
    "characters": ["Spider-Man", "Uncle Ben", "Aunt May", "J. Jonah Jameson"],
    "adapted": true,
    "summary": "A young boy finds out he has new abilities after being bitten by a radioactive spider. After taking on becoming a local celebrity, he neglects to stop a theif who then kills the boy's uncle, changing the boy's views on crime-fighting forever.",
    "link": "https://marvel.fandom.com/wiki/File:Amazing_Fantasy_Vol_1_15.jpg",
    "img": "https://vignette.wikia.nocookie.net/marveldatabase/images/6/6c/Amazing_Fantasy_Vol_1_15.jpg/revision/latest/scale-to-width-down/323?cb=20170406022750",
    "id": 28,
    "favorite": false
  },
  "avengers": {
    "title": "The Avengers Vol. 1 #1 'The Coming of the Avengers!'",
    "publishDate": 1963,
    "writers": ["Stan Lee"],
    "pencillers": ["Jack Kirby"],
    "inkers": ["Dick Ayers"],
    "letterers": ["Sam Rosen"],
    "colorists": ["Stan Goldberg"],
    "editors": ["Stan Lee"],
    "characters": ["Ant-Man", "Wasp", "Hulk", "Iron Man", "Thor", "Loki", "Mister Fantastic", "Invisible Girl", "Human Torch", "Thing"],
    "adapted": true,
    "summary": "Loki tries to pull cause havoc while his physical form is imprisoned and the gang must join together to stop him. Wasp coins the term 'Avengers' and the group agrees to take it on.",
    "link": "https://marvel.fandom.com/wiki/File:Avengers_Vol_1_1.jpg",
    "img": "https://vignette.wikia.nocookie.net/marveldatabase/images/c/cc/Avengers_Vol_1_1.jpg/revision/latest/scale-to-width-down/320?cb=20161102224454",
    "id": 29,
    "favorite": false
  },
  "fantasticFour": {
    "title": "Fantastic Four Vol. 1 #1 'The Fantastic Four'",
    "publishDate": 1961,
    "writers": ["Stan Lee"],
    "pencillers": ["Jack Kirby"],
    "inkers": ["George Klein", "Christopher Rule"],
    "letterers": ["Artie Simek"],
    "colorists": ["Stan Goldberg"],
    "editors": ["Stan Lee"],
    "characters": ["Mister Fantastic", "Invisible Girl", "Human Torch", "Thing"],
    "adapted": true,
    "summary": "The four get in a rocket and head to space but are hit with cosmic rays. When they land back on Earth, they find they now have special abilities.",
    "link": "https://marvel.fandom.com/wiki/File:Fantastic_Four_Vol_1_1.png",
    "img": "https://vignette.wikia.nocookie.net/marveldatabase/images/1/1e/Fantastic_Four_Vol_1_1.png/revision/latest/scale-to-width-down/317?cb=20151212151723",
    "id": 30,
    "favorite": false
  },
  "ironMan": {
    "title": "Tales of Suspense Vol. 1 #39 'Iron Man Is Born!'",
    "publishDate": 1963,
    "writers": ["Stan Lee", "Larry Lieber"],
    "pencillers": ["Don Heck"],
    "inkers": ["Don Heck"],
    "letterers": ["Artie Simek"],
    "colorists": ["Stan Goldberg"],
    "editors": ["Stan Lee"],
    "characters": ["Iron Man"],
    "adapted": true,
    "summary": "Tony Stark is captured after getting injured and his captors attempt to force him to develop tech for them. He resists and creates a metal suit for himself to keep the shrapnel in his chest from puncturing his heart and escapes into the jungle.",
    "link": "https://marvel.fandom.com/wiki/Tales_of_Suspense_Vol_1_39",
    "img": "https://vignette.wikia.nocookie.net/marveldatabase/images/e/ec/Tales_of_Suspense_Vol_1_39.jpg/revision/latest/scale-to-width-down/300?cb=20171107013333",
    "id": 31,
    "favorite": false
  },
  "strangeTales": {
    "title": "Strange Tales Vol. 1 #110 'Doctor Strange Master of Black Magic'",
    "publishDate": 1963,
    "writers": ["Stan Lee", "Ernie Hart"],
    "pencillers": ["Steve Ditko"],
    "inkers": ["Steve Ditko"],
    "letterers": ["Terry Szenics"],
    "colorists": ["Stan Goldberg"],
    "editors": ["Stan Lee"],
    "characters": ["Doctor Strange", "Ancient One"],
    "adapted": false,
    "summary": "The first appearance of Doctor Strange, a wizard who can travel through dreams, and does so to get a man to confess his crimes.",
    "link": "https://marvel.fandom.com/wiki/Strange_Tales_Vol_1_110",
    "img": "https://vignette.wikia.nocookie.net/marveldatabase/images/3/3e/Strange_Tales_Vol_1_110.jpg/revision/latest/scale-to-width-down/300?cb=20171225224240",
    "id": 32,
    "favorite": false
  },
  "incredibleHulk": {
    "title": "Incredible Hulk Vol. 1 #181 'And Now..the Wolverine!'",
    "publishDate": 1974,
    "writers": ["Len Wein"],
    "pencillers": ["Herb Trimpe"],
    "inkers": ["Jack Abel"],
    "letterers": ["Artie Simek"],
    "colorists": ["Glynis Wein"],
    "editors": ["Roy Thomas"],
    "characters": ["Hulk", "Wolverine"],
    "adapted": false,
    "summary": "The first appearance of Wolverine, as he and Hulk fight in what will become an infamous showdown between the two.",
    "link": "https://marvel.fandom.com/wiki/Incredible_Hulk_Vol_1_181",
    "img": "https://vignette.wikia.nocookie.net/marveldatabase/images/a/a9/Incredible_Hulk_Vol_1_181.jpg/revision/latest/scale-to-width-down/300?cb=20180402002312",
    "id": 33,
    "favorite": false
  },
  "blackWidow": {
    "title": "Tales of Suspense Vol. 1 #52 'The Crimson Dynamo Strikes Again!'",
    "publishDate": 1964,
    "writers": ["Stan Lee", "N. Korok"],
    "pencillers": ["Don Heck"],
    "inkers": ["Don Heck"],
    "letterers": ["Sam Rosen"],
    "colorists": null,
    "editors": ["Stan Lee"],
    "characters": ["Black Widow", "Iron Man", "Crimson Dynamo"],
    "adapted": false,
    "summary": "In the first appearance of secret agent Black Widow, Tony Stark, or Iron Man, is her target, but after a fight in his factory, she escapes and is on the run.",
    "link": "https://marvel.fandom.com/wiki/Tales_of_Suspense_Vol_1_52",
    "img": "https://vignette.wikia.nocookie.net/marveldatabase/images/6/60/Tales_of_Suspense_Vol_1_52.jpg/revision/latest/scale-to-width-down/300?cb=20171222050410",
    "id": 34,
    "favorite": false
  },
  "blackPanther": {
    "title": "Fantastic Four Vol. 1 #52 'The Black Panther!'",
    "publishDate": 1966,
    "writers": ["Stan Lee"],
    "pencillers": ["Jack Kirby"],
    "inkers": ["Joe Sinnott"],
    "letterers": ["Sam Rosen"],
    "colorists": ["Stan Goldberg"],
    "editors": ["Stan Lee"],
    "characters": ["Black Panther", "Mister Fantastic", "Invisible Girl", "Human Torch", "Thing"],
    "adapted": false,
    "summary": "The Fanstastic Four are given a spacecraft by Wakanda and visit the mysterious country, then meet their leader, T'Challla.",
    "link": "https://marvel.fandom.com/wiki/Fantastic_Four_Vol_1_52",
    "img": "https://vignette.wikia.nocookie.net/marveldatabase/images/a/a2/Fantastic_Four_Vol_1_52.jpg/revision/latest/scale-to-width-down/300?cb=20180126032018",
    "id": 35,
    "favorite": false
  },
  "talesToAstonish": {
    "title": "Tales to Astonish Vol. 1 #35 'Return of the Ant-Man'",
    "publishDate": 1962,
    "writers": ["Stan Lee", "Larry Lieber"],
    "pencillers": ["Jack Kirby"],
    "inkers": ["Dick Ayers"],
    "letterers": null,
    "colorists": ["Stan Goldberg"],
    "editors": ["Stan Lee"],
    "characters": ["Ant-Man"],
    "adapted": false,
    "summary": "Doctor Hank Pym has created a serum that allows him to become the size of ants and a second serum that allows him to regain his original size. Secret agents attempt to steal the serum from him but he refuses and decides the only way to keep people from stealing it is to use it.",
    "link": "https://marvel.fandom.com/wiki/Tales_to_Astonish_Vol_1_35",
    "img": "https://vignette.wikia.nocookie.net/marveldatabase/images/9/90/Tales_to_Astonish_Vol_1_35.png/revision/latest/scale-to-width-down/300?cb=20160118030840",
    "id": 36,
    "favorite": false
  },
  "invincibleIronMan": {
    "title": "Iron Man Vol. 1 #55 'Beware the ... Blood Brothers!'",
    "publishDate": 1973,
    "writers": ["Jim Starlin", "Mike Friedrich"],
    "pencillers": ["Jim Starlin"],
    "inkers": ["Mike Esposito"],
    "letterers": ["John Costanza"],
    "colorists": null,
    "editors": ["Roy Thomas"],
    "characters": ["Iron Man", "Drax the Destroyer", "Thanos"],
    "adapted": false,
    "summary": "In the first appearance of Thanos and Drax, Iron Man and Drax team up to fight Thanos and the Blood Brothers but Thanos escapes leaving a robot in his place.",
    "link": "https://marvel.fandom.com/wiki/Iron_Man_Vol_1_55",
    "img": "https://vignette.wikia.nocookie.net/marveldatabase/images/d/dd/Iron_Man_Vol_1_55.jpg/revision/latest/scale-to-width-down/300?cb=20171223062502",
    "id": 37,
    "favorite": false
  },
  "guardians": {
    "title": "Annihilation: Conquest - Starlord Vol. 1 #6 'Last Stand'",
    "publishDate": 2008,
    "writers": ["Dan Abnett", "Andy Lanning"],
    "pencillers": ["Tom Raney", "Wellinton Alves"],
    "inkers": ["Scot Hanna"],
    "letterers": ["Joe Caramagnan"],
    "colorists": ["Frank D'Amata"],
    "editors": ["Bill Rosenann"],
    "characters": ["Nova", "Star-Lord", "Adam Warlock", "Ronan", "Gamora", "Drax", "Warlock", "Mantis", "Rocket Raccoon", "Groot"],
    "adapted": true,
    "summary": "The rag-tag group of heroes bands together to fight Ultron with the fate of Earth and the Kree empire on the line.",
    "link": "https://marvel.fandom.com/wiki/Annihilation:_Conquest_Vol_1_6",
    "img": "https://vignette.wikia.nocookie.net/marveldatabase/images/5/5f/Annihilation_Conquest_Vol_1_6.jpg/revision/latest/scale-to-width-down/300?cb=20140429051007",
    "id": 38,
    "favorite": false
  },
  "funeralForAFreak": {
    "title": "Deadpool Vol. 1 #61 'Funeral for a Freak, Part 1: 'Nuff Said!'",
    "publishDate": 2002,
    "writers": ["Frank Tieri"],
    "pencillers": ["Jim Calafiore"],
    "inkers": ["Jon Holdredge"],
    "letterers": ["Dave Sharpe"],
    "colorists": ["Color Dojo"],
    "editors": ["Mike Marts", "Mike Raicht"],
    "characters": ["Deadpool", "Death", "Wolverine", "Cable", "Black Panther"],
    "adapted": false,
    "summary": "Wolverine must organize Deadpool a funeral.",
    "link": "https://marvel.fandom.com/wiki/Deadpool_Vol_1_61",
    "img": "https://vignette.wikia.nocookie.net/marveldatabase/images/6/67/Deadpool_Vol_1_61.jpg/revision/latest/scale-to-width-down/300?cb=20071103032232",
    "id": 39,
    "favorite": false
  },
  "amazingSpiderman": {
    "title": "Amazing Spider-Man Vol. 1 #2 'Duel to the Death with the Vulture!'",
    "publishDate": 1963,
    "writers": ["Stan Lee", "Steve Ditko"],
    "pencillers": ["Steve Ditko"],
    "inkers": ["Steve Ditko"],
    "letterers": ["John Duffy"],
    "colorists": null,
    "editors": ["Stan Lee"],
    "characters": ["Spider-Man", "Vulture", "Aunt May"],
    "adapted": true,
    "summary": "There's a new criminal in town and his name is Vulture. No one can catch this guy, but Peter Parker decides to try it and gets caught.",
    "link": "https://marvel.fandom.com/wiki/Amazing_Spider-Man_Vol_1_2",
    "img": "https://vignette.wikia.nocookie.net/marveldatabase/images/c/c7/Amazing_Spider-Man_Vol_1_2.jpg/revision/latest/scale-to-width-down/300?cb=20170406023749",
    "id": 40,
    "favorite": false
  },
  "defenders": {
    "title": "Marvel Feature Vol. 1 #1 'The Day of the Defenders!'",
    "publishDate": 1971,
    "writers": ["Roy Thomas"],
    "pencillers": ["Ross Andru"],
    "inkers": ["Bill Everett"],
    "letterers": ["Sam Rosen"],
    "colorists": null,
    "editors": ["Stan Lee"],
    "characters": ["Doctor Strange", "Hulk", "Wong", "Silver Surfer"],
    "adapted": false,
    "summary": "In the first appearance of the Defenders, Doctor Strange and Hulk attempt to destory the Omegatron before it destroys the planet. When the threat is postponed, Doctor Strange suggests they stay united as a team and called themselved the Defenders.",
    "link": "https://marvel.fandom.com/wiki/Marvel_Feature_Vol_1_1",
    "img": "https://vignette.wikia.nocookie.net/marveldatabase/images/3/30/Marvel_Feature_Vol_1_1.jpg/revision/latest/scale-to-width-down/300?cb=20080724123652",
    "id": 41,
    "favorite": false
  },
  "uncannyXmen": {
    "title": "Uncanny X-Men Vol. 1 #266 'Gambit: Out of the Frying Pan'",
    "publishDate": 1990,
    "writers": ["Chris Claremont"],
    "pencillers": ["Mike Collins"],
    "inkers": ["Josef Rubinstein"],
    "letterers": ["Pat Brosseau"],
    "colorists": ["Brad Vancata"],
    "editors": ["Bob Harras"],
    "characters": ["Gambit", "Mystique", "Storm"],
    "adapted": false,
    "summary": "Storm runs into a new mutant with cosmic card throwing powers who calls himself Gambit while she's on the run during an attempt to steal back already stolen paintings.",
    "link": "https://marvel.fandom.com/wiki/Uncanny_X-Men_Vol_1_266",
    "img": "https://vignette.wikia.nocookie.net/marveldatabase/images/d/de/Uncanny_X-Men_Vol_1_266.jpg/revision/latest/scale-to-width-down/300?cb=20091105232323",
    "id": 42,
    "favorite": false
  },
  "xFactor": {
    "title": "X-Factor Vol. 1 #15 'Whose Death is it, Anyway?'",
    "publishDate": 1987,
    "writers": ["Louise Simonson"],
    "pencillers": ["Walter Simonson"],
    "inkers": ["Bob Wiacek"],
    "letterers": ["Joe Rosen"],
    "colorists": ["Petra Scotese"],
    "editors": ["Robert Harras"],
    "characters": ["Cyclops", "Jean Grey", "Beast", "Angel", "Iceman", "Apocalypse", "War", "Pestilence", "Famine"],
    "adapted": false,
    "summary": "Cyclops deals with the aftermath of the death of his family meanwhile Apocalypse has gotten his Horsemen ready to destroy New York City.",
    "link": "https://marvel.fandom.com/wiki/X-Factor_Vol_1_15",
    "img": "https://vignette.wikia.nocookie.net/marveldatabase/images/b/bc/X-Factor_Vol_1_15.jpg/revision/latest/scale-to-width-down/300?cb=20181231020801",
    "id": 43,
    "favorite": false
  }
}



// return a list of comics that were written before 2000
const findPremillennialComics = () => {
  const marvelComicNames = Object.keys(marvelComics)
  const filteredComics = marvelComicNames.filter(comic => {
    return marvelComics[comic].publishDate < 2000
  })
  return filteredComics
}

findPremillennialComics()


// return a list of comics that were edited by stan Lee
const findStanLeeComics = () => {
  const marvelComicNames = Object.keys(marvelComics)
  const filteredComics = marvelComicNames.filter(comic => {
    if (marvelComics[comic].editors) {
      return marvelComics[comic].editors.includes('Stan Lee')
    }
  })
  return filteredComics
}

findStanLeeComics()


// return a list of comics that were adapted
const findAdaptedComics = () => {
  const marvelComicNames = Object.keys(marvelComics)
  const filteredComics = marvelComicNames.filter(comic => {
    return marvelComics[comic].adapted === true
  })
  return filteredComics
}

findAdaptedComics()

//return an array of comics and an array of movies (concated) that feature captain America
const findCaptainAmericaMedia = () => {
  const marvelComicNames = Object.keys(marvelComics)
  const marvelMovieNames = Object.keys(marvelMovies)
  const capComics = marvelComicNames.filter(comic => {
    return marvelComics[comic].characters.includes('Captain America')
  })
  const capMovies = marvelMovieNames.filter(movie => {
    return marvelMovies[movie].characters.includes('Captain America')
  })
  const capMedia = capComics.concat(capMovies)
  return capMedia
}

findCaptainAmericaMedia()

// return a list of movies with an R rating
const findRRatedMovies = () => {
  const marvelMovieNames = Object.keys(marvelMovies)
  const filteredMovies = marvelMovieNames.filter(movie => {
    return marvelMovies[movie].rating === 'R'
  })
  return filteredMovies
}

findRRatedMovies()

// return a list of movies with above a 8 rating on imdb


// sort the movies by their ratings



// create an object with each character as the key and the movies they appear in as the value
