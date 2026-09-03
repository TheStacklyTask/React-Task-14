const destinations = [
  {
    id: 'ubud-bali',
    name: 'Ubud',
    country: 'Indonesia',
    region: 'Asia',
    price: 890,
    days: 7,
    rating: 4.8,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdm_4uhYTvOiLRms9Yzj3uLwyRCzXtyKDOSzmMJk51y-AAzxHnexsVFRc&s=10',
    description:
      'Terraced rice paddies, riverside temples, and slow mornings spent among the treetops of the Campuhan Ridge.',
    travelStyle: 'Wellness & Nature',
    bestPeriod: 'April – October',
    highlights: [
      'Sunrise walk through the Tegalalang rice terraces',
      'Traditional Balinese cooking class in a family compound',
      'Water purification ceremony at Tirta Empul',
      'Sound-bath session overlooking the Campuhan Ridge',
    ],
  },
  {
    id: 'kyoto-japan',
    name: 'Kyoto',
    country: 'Japan',
    region: 'Asia',
    price: 1240,
    days: 6,
    rating: 4.9,
    image:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/32/58/b4/76/caption.jpg?w=500&h=400&s=1',
    description:
      'A thousand years of quiet ceremony, from moss gardens to lantern-lit alleys in Gion.',
    travelStyle: 'Culture & Heritage',
    bestPeriod: 'March – May, October – November',
    highlights: [
      'Private tea ceremony with a certified tea master',
      'Dawn visit to Fushimi Inari before the crowds arrive',
      'Bamboo grove cycling tour through Arashiyama',
      'Kaiseki dinner in a 200-year-old machiya house',
    ],
  },
  {
    id: 'lofoten-norway',
    name: 'Lofoten Islands',
    country: 'Norway',
    region: 'Europe',
    price: 1690,
    days: 8,
    rating: 4.9,
    image:
      'https://images.unsplash.com/photo-1601439678777-b2b3c56fa627?w=1200&q=80',
    description:
      'Jagged granite peaks rising straight out of the Norwegian Sea, fishing villages painted the colour of rust.',
    travelStyle: 'Adventure & Scenery',
    bestPeriod: 'June – August',
    highlights: [
      'Midnight sun kayaking through Reine fjord',
      'Hike to the Kvalvika beach viewpoint',
      'Stay in a converted rorbu fisherman\u2019s cabin',
      'Fresh cod supper at a working harbour',
    ],
  },
  {
    id: 'oaxaca-mexico',
    name: 'Oaxaca',
    country: 'Mexico',
    region: 'Americas',
    price: 760,
    days: 5,
    rating: 4.7,
    image:
      'https://images.unsplash.com/photo-1518659526054-190340b32735?w=1200&q=80',
    description:
      'Mezcal distilleries, mole simmered for days, and market stalls stacked with dye-bright textiles.',
    travelStyle: 'Food & Culture',
    bestPeriod: 'October – April',
    highlights: [
      'Mezcal tasting at a family-run palenque',
      'Hands-on mole negro cooking workshop',
      'Sunday market at Tlacolula de Matamoros',
      'Archaeological walk through Monte Alb\u00e1n',
    ],
  },
  {
    id: 'zanzibar-tanzania',
    name: 'Zanzibar',
    country: 'Tanzania',
    region: 'Africa',
    price: 980,
    days: 7,
    rating: 4.6,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvfIR-JIwLEfz6vtEgjf2cnEF49JcjfO8N4RXdXc8huptXiXD2q1ocnSrh&s=10',
    description:
      'Spice-scented lanes in Stone Town give way to sandbanks the colour of bleached coral.',
    travelStyle: 'Beach & Culture',
    bestPeriod: 'June – October',
    highlights: [
      'Spice farm walk through clove and nutmeg groves',
      'Dhow sailing at sunset off Nungwi',
      'Free-diving lesson at Mnemba Atoll',
      'Guided history walk through Stone Town',
    ],
  },
  {
    id: 'patagonia-chile',
    name: 'Torres del Paine',
    country: 'Chile',
    region: 'Americas',
    price: 1520,
    days: 9,
    rating: 4.9,
    image:
      'https://images.unsplash.com/photo-1531065208531-4036c0dba3ca?w=1200&q=80',
    description:
      'Granite towers, glacial lakes turned turquoise by mineral silt, and guanacos grazing at the trailhead.',
    travelStyle: 'Adventure & Nature',
    bestPeriod: 'November – March',
    highlights: [
      'Full-day trek to the base of the Torres',
      'Boat approach to the Grey Glacier face',
      'Wildlife spotting drive through the steppe',
      'Refugio dinner with fellow trekkers',
    ],
  },
  {
    id: 'marrakech-morocco',
    name: 'Marrakech',
    country: 'Morocco',
    region: 'Africa',
    price: 690,
    days: 5,
    rating: 4.5,
    image:
      'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=1200&q=80',
    description:
      'Riads hidden behind unmarked doors, the calligraphy of tile work, and the low hum of the souks at dusk.',
    travelStyle: 'Culture & Craft',
    bestPeriod: 'March – May, September – November',
    highlights: [
      'Private tour of the Bahia Palace at opening hour',
      'Leatherwork and dye workshop in the tanneries district',
      'Overnight in the Agafay desert under canvas',
      'Rooftop mint tea overlooking the Koutoubia',
    ],
  },
  {
    id: 'queenstown-nz',
    name: 'Queenstown',
    country: 'New Zealand',
    region: 'Oceania',
    price: 1380,
    days: 8,
    rating: 4.8,
    image:
      'https://cdn.sanity.io/images/nxpteyfv/goguides/0184e549ace9a8d33f497762faba0f7906bad791-1600x1067.jpg',
    description:
      'Alpine lake water and vineyard terraces set against the jagged Remarkables.',
    travelStyle: 'Adventure & Scenery',
    bestPeriod: 'December – February',
    highlights: [
      'Jet boat run through the Shotover Canyon',
      'Pinot tasting across Gibbston Valley cellar doors',
      'Gondola sunset over Lake Wakatipu',
      'Day trip to Milford Sound',
    ],
  },
];

export default destinations;
