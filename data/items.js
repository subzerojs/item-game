var gameItems = [
  {
    group: 'Предметы интерьера',
    name: 'Аптечка',
    description: 'Драгоценности, которые хранятся годами',
    quetions: 'Стоит, закрывается, кидается, выручает, воздействует, пластмассовое, дорогое, глубокое, полезное, платное, хранит, прямоугольное'
  },
  {
    group: 'Предметы интерьера',
    name: 'Бокал',
    description: 'Мужчина, собравший вечером двух подруг',
    quetions: 'Стоит, разбивается, моется, пачкается, кидается, блестит, украшает, стеклянное, гладкое, хрупкое, полое, платное, маленькое, бесформенное, отражающее, звучит'
  },
  {
    group: 'Предметы интерьера',
    name: 'Будильник',
    description: 'С этим предметом связано начало дня',
    quetions: 'Стоит, двигается, показывает, звучит, выручает, стеклянное/металлическое/пластмассовое, гладкое, громкое, низкое, круглое, ломается, платное, полезное, разбирается, кидается, чинится, маленькое'
  },
  {
    group: 'Предметы интерьера',
    name: 'Ваза',
    description: 'Дама с панамой',
    quetions: 'Стоит, разбивается, моется, пачкается, двигается, блестит, украшает, стеклянное, полое, хрупкое, длинное, яркое, узорчатое, платное, полезное, глубокое, крашенное, бесформенное, разноцветное'
  },
  {
    group: 'Предметы интерьера',
    name: 'Вентилятор',
    description: 'Этот предмет работает по заданным координатам',
    quetions: 'Стоит, разбирается, складывается, дует, выручает, подключается, ломается, воздействует, металлическое/пластмассовое, круглое, холодное, быстрое, длинное, платное, полезное, электронное, чинится, разбирается, современное'
  },
  {
    group: 'Предметы интерьера',
    name: 'Весы',
    description: 'Вердикт без языка выносить умеет',
    quetions: 'Стоит, моется, измеряет, показывает, ломается, стеклянное/пластмассовое/металлическое, гладкое, плоское, платное, полезное, электронное'
  },
  {
    group: 'Предметы интерьера',
    name: 'Вешалка',
    description: 'Предмет между небом и землей повис',
    quetions: 'Моется, висит, крепится, выручает, выпрямляет, ломается, металлическое/деревянное, бесформенное, платное, полезное, безразмерное'
  },
  {
    group: 'Предметы интерьера',
    name: 'Гитара',
    description: 'Благодаря этому настроение может быть плохим и хорошим',
    quetions: 'Ломается, моется, плавает, звучит, развлекает, чинится, деревянное, полое, горит, плоское, дорогое, бесформенное'
  },
  {
    group: 'Предметы интерьера',
    name: 'Горшок с цветком',
    description: 'За этим предметом можно ухаживать',
    quetions: 'Стоит, ломается, пахнет, украшает, бесформенное, глубокое, полезное, платное, пластмассовое, широкое, разноцветное, маленькое'
  },
  {
    group: 'Предметы интерьера',
    name: 'Дверь',
    description: 'То в коридор, то в комнату заглядывает / Без этого жить нельзя',
    quetions: 'Невесомое, ломается, двигается, выручает, деревянное, широкое, горит, большое, моется, чинится, плоское, прямоугольное, дорогое, полезное, тяжелое, вставляется'
  },
  {
    group: 'Предметы интерьера',
    name: 'Диван',
    description: 'Помощник в сборе пришедших гостей',
    quetions: 'Стоит, разбирается, моется, горит, тканевое, тяжелое, ломается, чинится, удобное, большое, широкое, мягкое, полезное, дорогое, домашнее, бесформенное, гладкое, длинное, выручает'
  },
  {
    group: 'Предметы интерьера',
    name: 'Домофон',
    description: 'Сторожем работает, про всех докладывает',
    quetions: 'Невесомое, крепится, висит, рассказывает, пластмассовое, выручает, ломается, чинится, электронное, домашнее, полезное, современное, гладкое, связывает'
  },
  {
    group: 'Предметы интерьера',
    name: 'Журнал',
    description: 'Кому в руки предмет попал, тот многое узнать может',
    quetions: 'Кидается, закрывается, ломается, пачкается, горит, показывает, рассказывает, гнется, пахнет, развлекает, плоское, тонкое, гладкое, прямоугольное, разноцветное, познавательное, платное, яркое, модное'
  },
  {
    group: 'Предметы интерьера',
    name: 'Зеркало',
    description: 'Этот предмет только правду говорит',
    quetions: 'Разбивается, моется, плоское, хрупкое, пачкается, украшает, отражающее, блестит, крепится, гладкое, показывает, режет, полезное, платное'
  },
  {
    group: 'Предметы интерьера',
    name: 'Игровая приставка',
    description: 'Этот предмет любят взрослые и дети',
    quetions: 'Разбивается, моется, плоское, хрупкое, пачкается, украшает, отражающее, блестит, крепится, гладкое, показывает, режет, полезное, платное'
  },
  {
    group: 'Предметы интерьера',
    name: 'Игрушка',
    description: 'Бывает много, но любимая одна',
    quetions: 'Кидается, тянется, моется, пачкается, горит, впитывает, гнется, развлекает, украшает, чинится, бесформенное, мягкое, разноцветное, невесомое, тканевое'
  },
  {
    group: 'Предметы интерьера',
    name: 'Картина',
    description: 'Этот предмет создан человеком с грязными руками',
    quetions: 'Горит, висит, показывает, крепится, украшает, прямоугольное, гладкое, невесомое, разноцветное, плоское, яркое, дорогое'
  },
  {
    group: 'Предметы интерьера',
    name: 'Книга',
    description: 'Этот предмет может создаваться годами',
    quetions: 'Кидается, закрывается, пачкается, познавательное, ломается, чинится, прямоугольное, разноцветное, платное, полезное, безразмерное, горит, показывает, читается, впитывает, гнётся, развлекает, плоское'
  },
  {
    group: 'Предметы интерьера',
    name: 'Коврик',
    description: 'Этот предмет является сборником пыли и мелкого мусора',
    quetions: 'Тянется, моется, пачкается, вытряхивается, мягкое, греет, узорчатое, дорогое, полезное, широкое, складывается, впитывает, низкое'
  },
  {
    group: 'Предметы интерьера',
    name: 'Комод',
    description: 'Это многоэтажный предмет, который хранит в себе много тайн',
    quetions: 'Стоит, закрывается, моется, хранит, выручает, ломается, чинится, деревянное, широкое, полое, гладкое, дорогое, полезное, горит, тяжелое, низкое, большое, прямоугольное'
  },
  {
    group: 'Предметы интерьера',
    name: 'Корзина для белья',
    description: 'Предмет, жаждущий грязных связей',
    quetions: 'Стоит, закрывается, моется, пачкается, пахнет, глубокое, большое, грязное, удобное, полезное, платное, домашнее'
  },
  {
    group: 'Предметы интерьера',
    name: 'Косметичка',
    description: 'Близкая подруга девушек, которая хранит в себе лекарства от изъянов',
    quetions: 'Закрывается, моется, пачкается, хранит, вытряхивается, Тканевое, бесформенное, гладкое, разноцветное, модное, полезное, горит, впитывает, гнется, пахнет, тонкое, маленькое, полое, грязное, глубокое, выручает'
  },
  {
    group: 'Предметы интерьера',
    name: 'Кресло',
    description: 'Этот предмет является местом чтения газет',
    quetions: 'Стоит, впитывает, пачкается, мягкое, яркое, дорогое, полезное, удобное, безразмерное, горит, чинится, ломается, тяжелое, большое, домашнее, тканевое'
  },
  {
    group: 'Предметы интерьера',
    name: 'Кровать',
    description: 'Этот предмет примет в объятия после тяжелого дня',
    quetions: 'Стоит, ломается, чинится, горит, деревянное/металлическое, удобное, полезное, мягкое, впитывает, низкое, большое, тяжелое, домашнее, тканевое, впитывает'
  },
  {
    group: 'Предметы интерьера',
    name: 'Кухонная плита',
    description: 'Этому предмету кладут в рот металлические листы',
    quetions: 'Стоит, моется, пачкается, хранит, вставляется,  выручает, металлическое, прямоугольное, твердое, греет, горит, светится, разбирается, полезное, тяжелое, дорогое, большое, домашнее, удобное'
  },
  {
    group: 'Предметы интерьера',
    name: 'Лампа настольная',
    description: 'Персонаж одной американской киностудии, показывающийся в начале фильмов',
    quetions: 'Стоит, складывается, светит, выручает, полезное, стеклянное/пластмассовое, бесформенное, лопается, греет, яркое, платное, гнется, подключается, электронное, чинится, удобное'
  },
  {
    group: 'Предметы интерьера',
    name: 'Люстра',
    description: 'Этот предмет носит жёлтый берет / Этот предмет можно достать с помощью стула',
    quetions: 'Разбивается, моется, ломается, вставляется, выручает, стеклянное, полезное, яркое, дорогое, висит, крепится, блестит, украшает, разноцветное, хрупкое, лопается'
  },
  {
    group: 'Предметы интерьера',
    name: 'Микроволновка',
    description: 'На этот предмет не следует класть телефон',
    quetions: 'Стоит, закрывается, моется, пачкается, выручает, полезное, ломается, металлическое, прямоугольное, дорогое, безразмерное, греет, светится, звучит, воздействует, подключается, чинится, пахнет, удобное, домашнее, современное, электронное'
  },
  {
    group: 'Предметы интерьера',
    name: 'Музыкальный центр',
    description: 'Главный предмет любой вечеринки',
    quetions: 'Стоит, выручает, подключается, пластмассовое, громкое, полезное, безразмерное, звучит, воздействует, развлекает, тяжелое, современное, прямоугольное, электронное'
  },
  {
    group: 'Предметы интерьера',
    name: 'Ноутбук',
    description: 'Лучший друг, делающий что угодно / Что угодно сделает быстрее человека',
    quetions: 'Удобное, электронное, плоское, прямоугольное, выручает, чинится, подключается, заряжается, читается, звучит, светится, закрывается, ломается, хранит, пластмассовое/металлическое, дорогое, Полезное'
  },
  {
    group: 'Предметы интерьера',
    name: 'Обогреватель',
    description: 'Этот предмет похож на музыкальный инструмент',
    quetions: 'Стоит, греет, бесформенное, выручает, подключается, металлическое, гладкое, платное, полезное, воздействует, низкое, современное, электронное, удобное, безразмерное'
  },
  {
    group: 'Предметы интерьера',
    name: 'Пепельница',
    description: 'Это нужная вещь в кабинете, которая может подчеркнуть статус',
    quetions: 'Стоит, грязное, моется, хранит, вытряхивается, разбивается, стеклянное/металлическое, ломается, платное, полезное, холодное, утилизирует, украшает, круглое, твердое'
  },
  {
    group: 'Предметы интерьера',
    name: 'Подсвечник',
    description: 'Этот предмет поможет создать романтическую обстановку',
    quetions: 'Стоит, моется, пачкается, выручает, металлическое, бесформенное, полезное, длинное, платное, узорчатое, греет, украшает, невесомое, удобное, твердое'
  },
  {
    group: 'Предметы интерьера',
    name: 'Подушка',
    description: 'Каждый вечер к себе манит',
    quetions: 'Прямоугольное, мягкое, полезное, удобное, складывается, пачкается, моется, гнется, впитывает, украшает, домашнее, парное, тканевое, невесомое, кидается'
  },
  {
    group: 'Предметы интерьера',
    name: 'Полка',
    description: 'На этом предмете стоят товары, но не для продажи',
    quetions: 'Висит, плоское, удобное, моется, крепится, твердое, хранит, выручает, ломается, деревянное/пластмассовое, полезное, гладкое, горит'
  },
  {
    group: 'Предметы интерьера',
    name: 'Посуда',
    description: 'Этот набор предметов страдает во время семейной ссоры',
    quetions: 'Хрупкое, тонкое, разноцветное, разбивается, моется, хранит, выручает, гладкое, яркое, узорчатое, дорогое, полезное, безразмерное, блестит, украшает, глубокое'
  },
  {
    group: 'Предметы интерьера',
    name: 'Посудомоечная машина',
    description: 'В рекламе этого предмета женщина сравнивает себя с ним',
    quetions: 'Удобное, стоит, закрывается, моется, звучит, хранит, выручает, ломается, чинится, подключается, дорогое, полезное, большое, воздействует, прямоугольное, домашнее'
  },

// 37


]