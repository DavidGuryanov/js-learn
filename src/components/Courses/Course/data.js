// export const tasksArray = [
//   {
//     id: 1,
//     type: 'lection',
//     title: 'Лекция 1.1.1',
//     video: 'https://youtu.be/MhclBrxHZ9o',
//     text: '',
//     additionalMaterials: [
//       {
//         name: 'Типы данных Кантор',
//         link: 'https://learn.javascript.ru/types',
//       },
//       {
//         name: 'typeof MDN',
//         link: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/typeof',
//       },
//     ],
//   },
//   {
//     id: 2,
//     type: 'lection',
//     title: 'Лекция 1.1.2',
//     video: 'https://youtu.be/_mDRMdx4GnU',
//     text:
//       'Note: Всегда предпочитайте const перед let. Использование var вовсе нежелательно\n' +
//       'Note: Принятый стиль именования - camelCase\n' +
//       'Note: Создание переменных без идентификатора let/const/var - плохая практика.',
//     additionalMaterials: [
//       {
//         name: 'Переменные Кантор',
//         link: 'https://learn.javascript.ru/variables',
//       },
//       {
//         name: 'Разница между var let const',
//         link:
//           'https://medium.com/nuances-of-programming/в-чём-разница-между-var-let-и-const-в-javascript-3084bfe9f7a3',
//       },
//       { name: 'Советы по стилю кода', link: 'https://learn.javascript.ru/coding-style' },
//     ],
//   },
//   {
//     id: 3,
//     type: 'lection',
//     title: 'Лекция 1.1.3',
//     video: 'https://youtu.be/qYhsv6NrfVo',
//     text: '',
//     additionalMaterials: [],
//   },
//   {
//     id: 4,
//     type: 'task',
//     title: 'Практическая задача 1.1.4',
//     text: `Errors &#10;
//       Обычно вам нужно избегать ошибок, но в этом упражнении вы будете порождать ошибки. Это поможет вам понять, какие типы ошибок возникают в разных ситуациях, и привыкнуть распознавать их в будущем.\n
//       Вам нужно реализовать 2 функции. Ваша задача — породить две ошибки внутри специально созданных функций.
//       reference
//       Сделайте так, чтобы код внутри функции reference порождал ошибку типа ReferenceError.
//       Вспомните, что ReferenceError возникает, когда используется несуществующий идентификатор (имя). Например, если ваша функция возвращает значение константы, но такой константы не существует. Или в каком-нибудь выражении (фрагмент кода, который вычисляется в значение, как формула) используется неизвестный идентификатор.\n
//       type
//       Сделайте так, чтобы код внутри функции type порождал ошибку типа TypeError.
//       Вспомните, что TypeError возникает, когда вы используете неправильный тип. Например, если вы пытаетесь вызвать численную константу как функцию.\n
//       ВАЖНО\n
//       Ошибки должны генерироваться внутри функций reference и type.`,
//     code: 'function reference() {return a} \n function type() {let a = 1; a()}',
//   },
//   {
//     id: 5,
//     type: 'lection',
//     title: 'Лекция 1.1.5',
//     video: 'https://youtu.be/aDfFtf2-OB4',
//     text: '',
//     additionalMaterials: [
//       { name: 'Преобразование типов Кантор', link: 'https://learn.javascript.ru/type-conversions' },
//     ],
//   },
//   {
//     id: 6,
//     type: 'test',
//     title: 'Теоретическая задача 1.1.6',
//     text: 'Выберите правильный ответ \n Укажите все значения NaN',
//     variants: [
//       {
//         body: '"4px" - 2',
//         answer: true,
//       },
//       { body: 'null + 1', answer: false },
//       { body: 'undefined + 1', answer: true },
//       { body: 'true + false', answer: false },
//     ],
//   },
//   {
//     id: 7,
//     type: 'test',
//     title: 'Теоретическая задача 1.1.7',
//     text: 'Выберите правильный ответ \n Укажите все случаи для которых typeof === "number"',
//     variants: [
//       {
//         body: '" -9 " + 5',
//         answer: true,
//       },
//       { body: '"" - 1 + 0', answer: false },
//       { body: '"" + 1 + 0', answer: false },
//       { body: '"4" — 2', answer: true },
//     ],
//   },
//   {
//     id: 8,
//     type: 'test',
//     title: 'Теоретическая задача 1.1.8',
//     text: 'Выберите правильный ответ \n Укажите все случаи для которых typeof === "object"',
//     variants: [
//       {
//         body: 'typeof null',
//         answer: true,
//       },
//       { body: 'typeof alert', answer: false },
//       { body: 'typeof {}', answer: true },
//       { body: 'typeof []', answer: true },
//     ],
//   },
//   {
//     id: 9,
//     type: 'test',
//     title: 'Теоретическая задача 1.1.9',
//     text:
//       'Выберите правильный ответ \n Укажите все значения для которых верно равенство Boolean(<значение>) === true',
//     variants: [
//       {
//         body: '""',
//         answer: false,
//       },
//       { body: '" "', answer: true },
//       { body: '{}', answer: true },
//       { body: '[]', answer: true },
//       { body: '0', answer: false },
//       { body: '10', answer: true },
//     ],
//   },
//   {
//     id: 10,
//     type: 'test',
//     title: 'Теоретическая задача 1.1.10',
//     text: 'Укажите все значение для которых верно равенство == false',
//     variants: [
//       {
//         body: '"false"',
//         answer: false,
//       },
//       { body: 'undefined', answer: true },
//       { body: 'null', answer: true },
//       { body: '"0"', answer: false },
//     ],
//   },
//   {
//     id: 11,
//     type: 'test',
//     title: 'Теоретическая задача 1.1.11',
//     text: 'Чему будет равно значение выражения 1 + "3" + false + 22',
//     variants: [
//       {
//         body: '26',
//         answer: false,
//       },
//       { body: '"26"', answer: false },
//       { body: 'NaN', answer: false },
//       { body: '"13false22"', answer: true },
//     ],
//   },
//   {
//     id: 12,
//     type: 'test',
//     title: 'Теоретическая задача 1.1.12',
//     text: 'Чему будет равно значение выражения 1 - "3" + null + 22',
//     variants: [
//       {
//         body: '20',
//         answer: true,
//       },
//       { body: '"-222"', answer: false },
//       { body: 'NaN', answer: false },
//       { body: '"-2null22"', answer: false },
//     ],
//   },
//   {
//     id: 13,
//     type: 'test',
//     title: 'Теоретическая задача 1.1.13',
//     text: 'Чему будет равно значение выражения 1 - "3" - null + "22"',
//     variants: [
//       {
//         body: '"NaN"',
//         answer: false,
//       },
//       { body: '"-222"', answer: true },
//       { body: 'NaN', answer: false },
//       { body: '"2undefined22"', answer: false },
//       { body: '20', answer: false },
//     ],
//   },
//   {
//     id: 14,
//     type: 'task',
//     title: 'Практическая задача 1.1.14',
//     text:
//       '' +
//       'Default To\n' +
//       'Реализуйте функцию defaultTo, которая принимает значение первым аргументом и его значение по-умолчанию вторым. Если первое значение null, NaN или undefined, то должно быть возвращено значение по-умолчанию. Если нет, то нужно вернуть само значение (первый аргумент).',
//     examples: [
//       'console.log(defaultTo(1, 10)); // 1',
//       'console.log(defaultTo(undefined, 10)); // 10',
//     ],
//     code: 'const defaultTo = (value, defaultValue) => {};',
//   },
//   {
//     id: 15,
//     type: 'lection',
//     title: 'Лекция 1.1.15',
//     video: 'https://youtu.be/-tCMB1EPy3c',
//     text: '',
//     additionalMaterials: [
//       {
//         name: 'Числа Кантор',
//         link: 'https://learn.javascript.ru/number',
//       },
//     ],
//   },
//   {
//     id: 16,
//     type: 'task',
//     title: 'Практическая задача 1.1.16',
//     text:
//       'compareWithPrecision\n' +
//       'Напишите функцию, которая сравнивает два числа с определенной погрешностью.',
//     examples: ['compareWithPrecision(0.1 + 0.2, 0.3, 0.0001) // true'],
//     code: 'function compareWithPrecision(a, b, precision) {}',
//   },
//   {
//     id: 17,
//     type: 'lection',
//     title: 'Лекция 1.1.17',
//     video: 'https://youtu.be/WFnpc7OePzE',
//     text: '',
//     additionalMaterials: [
//       {
//         name: 'Строки Кантор',
//         link: 'https://learn.javascript.ru/string',
//       },
//     ],
//   },
//   {
//     id: 18,
//     type: 'task',
//     title: 'Практическая задача 1.1.18',
//     text:
//       'Capitalize\n' +
//       'Реализуйте функцию capitalize, которая принимает строку в качестве аргумента и возвращает новую строку, в которой первые буквы слов заглавные, а все остальные - строчные.',
//     examples: [
//       "const str = 'sOme RanDoM sTRING';",
//       'console.log(capitalize(str)); // Some Random String',
//     ],
//     code: 'function capitalize(str){}',
//   },
//   {
//     id: 19,
//     type: 'task',
//     title: 'Практическая задача 1.1.19',
//     text:
//       'Stop gninnipS My sdroW!\n' +
//       'Реализуйте функцию reverseLongWords, которая принимает строку в качестве аргумента и возвращает новую строку, в которой каждое слово, которое содержит 5 или больше символов, написана наоборот.\n',
//     examples: [
//       "reverseLongWords('Hey fellow warriors'); // Hey wollef sroirraw\n",
//       "reverseLongWords('This is a test'); // This is a test\n",
//       "reverseLongWords('This is another test'); // This is rehtona test",
//     ],
//     code: 'const reverseLongWords = (str) => {};',
//   },
//   {
//     id: 20,
//     type: 'lection',
//     title: 'Лекция 1.1.20',
//     video: 'https://youtu.be/YKAnmsaPOkU',
//     text: '',
//     additionalMaterials: [],
//   },
//   {
//     id: 21,
//     type: 'task',
//     title: 'Практическая задача 1.1.21',
//     text:
//       'На входе есть текст, разделенный переносами строк На выходе каждая строка должна быть обернута тегом\n' +
//       'Wrap Paragraph\n' +
//       'Реализуйте функцию wrapInParagraph, которая принимает на вход текст, разделененный переносами строк и возвращает новый текст, в котором каждая строка обернута в тег',
//     examples: [
//       'const text = `Some\n' + 'simple multiline\n' + 'text`;',
//       'console.log(wrapInParagraph(text)); // <p>Some</p>\n' +
//         '// <p>simple multiline</p>\n' +
//         '// <p>text</p>',
//       "const text2 = 'some\ntext';",
//       'console.log(wrapInParagraph(text2)); // <p>some</p>\n' + '// <p>text</p>',
//     ],
//     code: 'function wrapInParagraph(str){}',
//   },
// ]

export const tasksArray = [
  {
    course: 'jscore',
    fullName: 'JavaScript Core',
    tasks: [
      {
        id: 1,
        type: 'lection',
        title: 'Лекция 1.1.1',
        fullTitle: 'Типы данных',
        video: 'https://youtu.be/MhclBrxHZ9o',
        text: '',
        additionalMaterials: [
          {
            name: 'Типы данных Кантор',
            link: 'https://learn.javascript.ru/types',
          },
          {
            name: 'typeof MDN',
            link: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/typeof',
          },
        ],
      },
      {
        id: 2,
        type: 'lection',
        title: 'Лекция 1.1.2',
        fullTitle: 'Переменные',
        video: 'https://youtu.be/_mDRMdx4GnU',
        text:
          'Note: Всегда предпочитайте const перед let. Использование var вовсе нежелательно\n' +
          'Note: Принятый стиль именования - camelCase\n' +
          'Note: Создание переменных без идентификатора let/const/var - плохая практика.',
        additionalMaterials: [
          {
            name: 'Переменные Кантор',
            link: 'https://learn.javascript.ru/variables',
          },
          {
            name: 'Разница между var let const',
            link:
              'https://medium.com/nuances-of-programming/в-чём-разница-между-var-let-и-const-в-javascript-3084bfe9f7a3',
          },
          { name: 'Советы по стилю кода', link: 'https://learn.javascript.ru/coding-style' },
        ],
      },
      {
        id: 3,
        type: 'lection',
        title: 'Лекция 1.1.3',
        fullTitle: 'Ошибки',
        video: 'https://youtu.be/qYhsv6NrfVo',
        text: '',
        additionalMaterials: [],
      },
      {
        id: 4,
        type: 'task',
        title: 'Урок с кодом 1.1.4',
        fullTitle: 'Ошибки',
        text: `Errors &#10;
      Обычно вам нужно избегать ошибок, но в этом упражнении вы будете порождать ошибки. Это поможет вам понять, какие типы ошибок возникают в разных ситуациях, и привыкнуть распознавать их в будущем.\n
      Вам нужно реализовать 2 функции. Ваша задача — породить две ошибки внутри специально созданных функций.
      reference
      Сделайте так, чтобы код внутри функции reference порождал ошибку типа ReferenceError.
      Вспомните, что ReferenceError возникает, когда используется несуществующий идентификатор (имя). Например, если ваша функция возвращает значение константы, но такой константы не существует. Или в каком-нибудь выражении (фрагмент кода, который вычисляется в значение, как формула) используется неизвестный идентификатор.\n
      type
      Сделайте так, чтобы код внутри функции type порождал ошибку типа TypeError.
      Вспомните, что TypeError возникает, когда вы используете неправильный тип. Например, если вы пытаетесь вызвать численную константу как функцию.\n
      ВАЖНО\n
      Ошибки должны генерироваться внутри функций reference и type.`,
        code: 'function reference() {return a} \n function type() {let a = 1; a()}',
      },
      {
        id: 5,
        type: 'lection',
        title: 'Лекция 1.1.5',
        fullTitle: 'Преобразование типов',
        video: 'https://youtu.be/aDfFtf2-OB4',
        text: '',
        additionalMaterials: [
          {
            name: 'Преобразование типов Кантор',
            link: 'https://learn.javascript.ru/type-conversions',
          },
        ],
      },
      {
        id: 6,
        type: 'test',
        title: 'Тест 1.1.6',
        fullTitle: 'Преобразование типов',
        text: 'Выберите правильный ответ \n Укажите все значения NaN',
        variants: [
          {
            body: '"4px" - 2',
            answer: true,
          },
          { body: 'null + 1', answer: false },
          { body: 'undefined + 1', answer: true },
          { body: 'true + false', answer: false },
        ],
      },
      {
        id: 7,
        type: 'test',
        title: 'Тест 1.1.7',
        fullTitle: 'Преобразование типов',
        text: 'Выберите правильный ответ \n Укажите все случаи для которых typeof === "number"',
        variants: [
          {
            body: '" -9 " + 5',
            answer: true,
          },
          { body: '"" - 1 + 0', answer: false },
          { body: '"" + 1 + 0', answer: false },
          { body: '"4" — 2', answer: true },
        ],
      },
      {
        id: 8,
        type: 'test',
        title: 'Тест 1.1.8',
        fullTitle: 'Преобразование типов',
        text: 'Выберите правильный ответ \n Укажите все случаи для которых typeof === "object"',
        variants: [
          {
            body: 'typeof null',
            answer: true,
          },
          { body: 'typeof alert', answer: false },
          { body: 'typeof {}', answer: true },
          { body: 'typeof []', answer: true },
        ],
      },
      {
        id: 9,
        type: 'test',
        title: 'Тест 1.1.9',
        fullTitle: 'Преобразование типов',
        text:
          'Выберите правильный ответ \n Укажите все значения для которых верно равенство Boolean(<значение>) === true',
        variants: [
          {
            body: '""',
            answer: false,
          },
          { body: '" "', answer: true },
          { body: '{}', answer: true },
          { body: '[]', answer: true },
          { body: '0', answer: false },
          { body: '10', answer: true },
        ],
      },
      {
        id: 10,
        type: 'test',
        title: 'Тест 1.1.10',
        fullTitle: 'Преобразование типов',
        text: 'Укажите все значение для которых верно равенство == false',
        variants: [
          {
            body: '"false"',
            answer: false,
          },
          { body: 'undefined', answer: true },
          { body: 'null', answer: true },
          { body: '"0"', answer: false },
        ],
      },
      {
        id: 11,
        type: 'test',
        title: 'Тест 1.1.11',
        fullTitle: 'Преобразование типов',
        text: 'Чему будет равно значение выражения 1 + "3" + false + 22',
        variants: [
          {
            body: '26',
            answer: false,
          },
          { body: '"26"', answer: false },
          { body: 'NaN', answer: false },
          { body: '"13false22"', answer: true },
        ],
      },
      {
        id: 12,
        type: 'test',
        title: 'Тест 1.1.12',
        fullTitle: 'Преобразование типов',
        text: 'Чему будет равно значение выражения 1 - "3" + null + 22',
        variants: [
          {
            body: '20',
            answer: true,
          },
          { body: '"-222"', answer: false },
          { body: 'NaN', answer: false },
          { body: '"-2null22"', answer: false },
        ],
      },
      {
        id: 13,
        type: 'test',
        title: 'Тест 1.1.13',
        fullTitle: 'Преобразование типов',
        text: 'Чему будет равно значение выражения 1 - "3" - null + "22"',
        variants: [
          {
            body: '"NaN"',
            answer: false,
          },
          { body: '"-222"', answer: true },
          { body: 'NaN', answer: false },
          { body: '"2undefined22"', answer: false },
          { body: '20', answer: false },
        ],
      },
      {
        id: 14,
        type: 'task',
        title: 'Урок с кодом 1.1.14',
        fullTitle: 'defaultTo',
        text:
          '' +
          'Default To\n' +
          'Реализуйте функцию defaultTo, которая принимает значение первым аргументом и его значение по-умолчанию вторым. Если первое значение null, NaN или undefined, то должно быть возвращено значение по-умолчанию. Если нет, то нужно вернуть само значение (первый аргумент).',
        examples: [
          'console.log(defaultTo(1, 10)); // 1',
          'console.log(defaultTo(undefined, 10)); // 10',
        ],
        code: 'const defaultTo = (value, defaultValue) => {};',
      },
      {
        id: 15,
        type: 'lection',
        title: 'Лекция 1.1.15',
        fullTitle: 'Числа в JS',
        video: 'https://youtu.be/-tCMB1EPy3c',
        text: '',
        additionalMaterials: [
          {
            name: 'Числа Кантор',
            link: 'https://learn.javascript.ru/number',
          },
        ],
      },
      {
        id: 16,
        type: 'task',
        title: 'Урок с кодом 1.1.16',
        fullTitle: 'compareWithPrecision',
        text:
          'compareWithPrecision\n' +
          'Напишите функцию, которая сравнивает два числа с определенной погрешностью.',
        examples: ['compareWithPrecision(0.1 + 0.2, 0.3, 0.0001) // true'],
        code: 'function compareWithPrecision(a, b, precision) {}',
      },
      {
        id: 17,
        type: 'lection',
        title: 'Лекция 1.1.17',
        fullTitle: 'Строки в JS',
        video: 'https://youtu.be/WFnpc7OePzE',
        text: '',
        additionalMaterials: [
          {
            name: 'Строки Кантор',
            link: 'https://learn.javascript.ru/string',
          },
        ],
      },
      {
        id: 18,
        type: 'task',
        title: 'Урок с кодом 1.1.18',
        fullTitle: 'Capitalize',
        text:
          'Capitalize\n' +
          'Реализуйте функцию capitalize, которая принимает строку в качестве аргумента и возвращает новую строку, в которой первые буквы слов заглавные, а все остальные - строчные.',
        examples: [
          "const str = 'sOme RanDoM sTRING';",
          'console.log(capitalize(str)); // Some Random String',
        ],
        code: 'function capitalize(str){}',
      },
      {
        id: 19,
        type: 'task',
        title: 'Урок с кодом 1.1.19',
        fullTitle: 'Stop spinning',
        text:
          'Stop gninnipS My sdroW!\n' +
          'Реализуйте функцию reverseLongWords, которая принимает строку в качестве аргумента и возвращает новую строку, в которой каждое слово, которое содержит 5 или больше символов, написана наоборот.\n',
        examples: [
          "reverseLongWords('Hey fellow warriors'); // Hey wollef sroirraw\n",
          "reverseLongWords('This is a test'); // This is a test\n",
          "reverseLongWords('This is another test'); // This is rehtona test",
        ],
        code: 'const reverseLongWords = (str) => {};',
      },
      {
        id: 20,
        type: 'lection',
        title: 'Лекция 1.1.20',
        fullTitle: 'Template strings',
        video: 'https://youtu.be/YKAnmsaPOkU',
        text: '',
        additionalMaterials: [],
      },
      {
        id: 21,
        type: 'task',
        title: 'Урок с кодом 1.1.21',
        fullTitle: 'Wrap Paragraph',
        text:
          'На входе есть текст, разделенный переносами строк На выходе каждая строка должна быть обернута тегом\n' +
          'Wrap Paragraph\n' +
          'Реализуйте функцию wrapInParagraph, которая принимает на вход текст, разделененный переносами строк и возвращает новый текст, в котором каждая строка обернута в тег',
        examples: [
          'const text = `Some\n' + 'simple multiline\n' + 'text`;',
          'console.log(wrapInParagraph(text)); // <p>Some</p>\n' +
            '// <p>simple multiline</p>\n' +
            '// <p>text</p>',
          "const text2 = 'some\ntext';",
          'console.log(wrapInParagraph(text2)); // <p>some</p>\n' + '// <p>text</p>',
        ],
        code: 'function wrapInParagraph(str){}',
      },
    ],
  },
  {
    course: 'jsadv',
    fullName: 'JavaScript Advanced',
    tasks: [
      {
        id: 229,
        type: 'lection',
        title: 'Лекция 1.1.1',
        fullTitle: 'Wrap Paragraph',
        video: 'https://youtu.be/MhclBrxHZ9o',
        text: '',
        additionalMaterials: [
          {
            name: 'Типы данных Кантор',
            link: 'https://learn.javascript.ru/types',
          },
          {
            name: 'typeof MDN',
            link: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/typeof',
          },
        ],
      },
      {
        id: 228,
        type: 'lection',
        title: 'Лекция 1.1.2',
        fullTitle: 'Wrap Paragraph',
        video: 'https://youtu.be/_mDRMdx4GnU',
        text:
          'Note: Всегда предпочитайте const перед let. Использование var вовсе нежелательно\n' +
          'Note: Принятый стиль именования - camelCase\n' +
          'Note: Создание переменных без идентификатора let/const/var - плохая практика.',
        additionalMaterials: [
          {
            name: 'Переменные Кантор',
            link: 'https://learn.javascript.ru/variables',
          },
          {
            name: 'Разница между var let const',
            link:
              'https://medium.com/nuances-of-programming/в-чём-разница-между-var-let-и-const-в-javascript-3084bfe9f7a3',
          },
          { name: 'Советы по стилю кода', link: 'https://learn.javascript.ru/coding-style' },
        ],
      },
    ],
  },
]
