
export interface Manuscript {
  contents: string[];
  lang: string;
}


export const manuscripts: Manuscript[] = [
  {
    contents: [
      '可逆反応の逆不可逆反応',
      '不可逆反応の逆可逆反応',
      '可逆反応も不可逆反応も化学反応',
    ],
    lang: 'ja',
  },
  {
    contents: [
      'お宮の前の飴屋に',
      'あんまと尼が雨やどり',
      '雨やむまで',
      'あんまももうと',
      'あんま申す',
      'あんま尼もみ',
      '尼あんまもむ',
      'あんまうまいか',
      '尼うまいか',
      'あんまも尼もみなうまい',
      'あんまもおもみやれ',
      '尼もおもみやれ',
      '雨やどり'
    ],
    lang: 'ja',
  },
  {
    contents: [
      'Peter Piper picked a peck of pickled peppers.',
      'A peck of pickled peppers Peter Piper picked.',
      'If Peter Piper picked a peck of pickled peppers,',
      'Where\'s the peck of pickled peppers Peter Piper picked?',
    ],
    lang: 'en-US',
  },
  {
    contents: [
      'A big black bug bit a big black bear, but the big black bear bit the big black bug back.',
    ],
    lang: 'en-US',
  },
  {
    contents: [
      'How much wood would a woodchuck chuck if a woodchuck could chuck wood?',
      'He would chuck, he would, as much as he could, and chuck as much wood',
      'As a woodchuck would if a woodchuck could chuck wood',
    ],
    lang: 'en-US',
  },
];
