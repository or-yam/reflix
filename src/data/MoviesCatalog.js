const moviesCatalog = [
  {
    id: 0,
    isRented: false,
    title: 'Tarzan',
    year: 1999,
    img:
      'https://vignette.wikia.nocookie.net/disney-fan-fiction/images/4/42/Tarzan_2004_cover.jpg/revision/latest?cb=20140331030811',
    descrShort:
      "Tarzan was born into wealth but raised into incredible misfortune. Shiprweck, parents mauled by a jaguar. Luckily, a troop of gorillas took him in, but the Big Daddy gorilla never took a liking to him. That is, until the end when it's too late. Why is it too late? Watch and find out.",
  },
  {
    id: 1,
    isRented: false,
    title: 'The Lion King',
    img:
      'https://img00.deviantart.net/b782/i/2006/207/e/7/the_lion_king_front_cd_cover_by_peachpocket285.jpg',
    year: 1994,
    descrShort:
      'A young lion prince named Simba is born into wealth but raised into incredible misfortune. Trickster uncle, dying father, usurpation. Luckily, an unlikely meerkat-warthog pair take him in and teach him The Ways of the Bum Life. Be prepared for ghostly hallucinations, wild baboons, creepy crawlies.',
  },
  {
    id: 2,
    isRented: false,
    title: 'Beauty and the Beast',
    year: 1991,
    img:
      'https://images-na.ssl-images-amazon.com/images/I/81etFyb9N-L._SL1500_.jpg',
    descrShort:
      'A kickass woman named Belle who does not succumb to social norms gets crap from a bunch of village idiots, chief amongst them a total tool named Gaston. Belle shows everyone how great she is when she turns a beast (not Gaston) into a man. Love ensues, but then the villagers fall trap to severe group-think mentality led by the main tool himself.',
  },
  {
    id: 3,
    isRented: false,
    title: 'The Sword in the Stone',
    year: 1963,
    img: 'https://www.disneyinfo.nl/images/laserdiscs/229-1-AS-front.jpg',
    descrShort:
      "Arthur is a young boy who just wants to be a knight's squire. Alas, he is dubbed 'Wart' early on, and it was all downhill from there for a while. On a hunting trip he falls in on Merlin, literally. Merlin is a possibly-mentally-unstable-and-ethically-dubious Wizard that turns Arthur into a literate, at-one-point harassed squirrel. Watch to find out what the heck that means.",
  },
  {
    id: 4,
    isRented: false,
    title: 'Beauty and the Beast',
    year: 2016,
    img: 'https://images-na.ssl-images-amazon.com/images/I/51ArFYSFGJL.jpg',
    descrShort:
      "Basically the same as the original, except now Hermi-- Emma Wattson plays Belle, fittingly so some would say, given how actively progressive she is regarding women's rights. Rumor has it that in the bonus scenes she whips out a wand and turns Gaston into a toad, but in order to watch those scenes you need to recite a certain incantation.",
  },

  {
    id: 5,
    isRented: false,
    title: 'Star Wars: Episode V - The Empire Strikes Back',
    year: 1980,
    img:
      'https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,641,1000_AL_.jpg',
    descrShort:
      'After the Rebels are brutally overpowered by the Empire on the ice planet Hoth, Luke Skywalker begins Jedi training with Yoda, while his friends are pursued by Darth Vader and a bounty hunter named Boba Fett all over the galaxy.',
  },
  {
    id: 6,
    isRented: false,
    title: 'Borat',
    year: 2006,
    img:
      'https://m.media-amazon.com/images/M/MV5BMTk0MTQ3NDQ4Ml5BMl5BanBnXkFtZTcwOTQ3OTQzMw@@._V1_SY1000_CR0,0,676,1000_AL_.jpg',
    descrShort:
      'Kazakh TV talking head Borat is dispatched to the United States to report on the greatest country in the world. With a documentary crew in tow, Borat becomes more interested in locating and marrying Pamela Anderson.',
  },
  {
    id: 7,
    isRented: false,
    title: 'Fight Club',
    year: 1999,
    img:
      'https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SY1000_CR0,0,666,1000_AL_.jpg',
    descrShort:
      'An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.',
  },
  {
    id: 8,
    isRented: false,
    title: 'Snatch',
    year: 2000,
    img:
      'https://m.media-amazon.com/images/M/MV5BMTA2NDYxOGYtYjU1Mi00Y2QzLTgxMTQtMWI1MGI0ZGQ5MmU4XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SY1000_SX684_AL_.jpg',
    descrShort:
      'Unscrupulous boxing promoters, violent bookmakers, a Russian gangster, incompetent amateur robbers and supposedly Jewish jewelers fight to track down a priceless stolen diamond.',
  },
  {
    id: 9,
    isRented: false,
    title: 'Watchmen',
    year: 2009,
    img:
      'https://m.media-amazon.com/images/M/MV5BY2IzNGNiODgtOWYzOS00OTI0LTgxZTUtOTA5OTQ5YmI3NGUzXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,666,1000_AL_.jpg',
    descrShort:
      'In 1985 where former superheroes exist, the murder of a colleague sends active vigilante Rorschach into his own sprawling investigation, uncovering something that could completely change the course of history as we know it.',
  },
  {
    id: 10,
    isRented: false,
    title: 'The Good The Bad And The Ugly',
    year: 1966,
    img:
      'https://m.media-amazon.com/images/M/MV5BOTQ5NDI3MTI4MF5BMl5BanBnXkFtZTgwNDQ4ODE5MDE@._V1_SY1000_CR0,0,656,1000_AL_.jpg',
    descrShort:
      'A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.',
  },
];

export default moviesCatalog;
