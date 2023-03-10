const superHeroes = `[
    {
      "name": "Batman",
      "url":"images/Batman.jpg",
      "character": "борец с преступностью, филантроп, миллиардер",
      "abilities":" интеллект, обширные познания, знания боевых искусств, ловкость"
    },
    {
        "name": "Superman",
        "url":"images/superman.jpg",
        "character": "борец за справедливость",
        "abilities":"непробиваемость, суперсила, полет, самоисцеление, суперзрение и суперслух, классный костюм"
    },
    {
        "name": "Ironman",
        "url":"images/ironman.jpg",
        "character": "гений, миллиардер, плейбой, филантроп",
        "abilities":"высокий уровень интеллекта, широкие познания науки и техники, связь со всемирной паутиной, бронекостюмы"
    },
    {
        "name": "Spiderman",
        "url":"images/spiderman.jpg",
        "character": "борец за справедливость, студент, фотограф",
        "abilities":"сверхчеловеческие рефлексы, «паучье чутье», способность прилепляться к твердым поверхностям, производство паутины"
    },
    {
        "name": "CaptainAmerica",
        "url":"images/america.jpg",
        "character": "супер-солдат",
        "abilities":" сила, выносливость, бессмертие, быстрая регенерация, мастерство скрытности и боя"
    },
    {
        "name": "Tor",
        "url":"images/tor.jpg",
        "character": "борец за справедливость, скандинавский бог",
        "abilities":" все, что может бог, плюс молот Мьелнир"
    },
    {
        "name": "Halk",
        "url":"images/halk.jpg",
        "character": "супергерой, борец за справедливость, ученый-биохимик",
        "abilities":" сверхчеловеческая сила искорость, выносливость, полет"
    },
    {
        "name": "Чудо-женщина",
        "url":"images/woman.jpg",
        "character": "супергероиня, секретарь-референт",
        "abilities":"сверхчеловеческая сила искорость, выносливость, полет"
    },
    {
        "name": "Черная вдова",
        "url":"images/blackwomen.jpg",
        "character": "супергероиня, шпионка",
        "abilities":"пик человеческого физического потенциала, замедленное старение, знание многих языков"
    },
    {
        "name": "Deadpool",
        "url":"images/deadpool.jpg",
        "character": "антигерой, наемник",
        "abilities":"высокий болевой порог, регенерация и бессмертие, сверхчеловеческая иммунная система"
    }
  ]`;
  const SuperHeroeJson=JSON.parse(superHeroes);
  export {SuperHeroeJson};