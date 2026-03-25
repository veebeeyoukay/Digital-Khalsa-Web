export type Emotion =
  | 'peaceful'
  | 'grateful'
  | 'seeking_strength'
  | 'in_pain'
  | 'joyful'
  | 'anxious'
  | 'hopeful'
  | 'grieving';

export const EMOTION_META: Record<
  Emotion,
  { label: string; icon: string; description: string }
> = {
  peaceful: {
    label: 'Peaceful',
    icon: '\u{1F54A}\u{FE0F}', // dove
    description: 'Calm, content, at ease',
  },
  grateful: {
    label: 'Grateful',
    icon: '\u{1F64F}', // folded hands
    description: 'Thankful for blessings',
  },
  seeking_strength: {
    label: 'Seeking Strength',
    icon: '\u{1F4AA}', // flexed bicep
    description: 'Need courage or resilience',
  },
  in_pain: {
    label: 'In Pain',
    icon: '\u{1F494}', // broken heart
    description: 'Hurting, struggling, lost',
  },
  joyful: {
    label: 'Joyful',
    icon: '\u{2728}', // sparkles
    description: 'Happy, celebrating, blissful',
  },
  anxious: {
    label: 'Anxious',
    icon: '\u{1F32A}\u{FE0F}', // tornado
    description: 'Worried, restless, uncertain',
  },
  hopeful: {
    label: 'Hopeful',
    icon: '\u{1F31F}', // glowing star
    description: 'Looking forward with faith',
  },
  grieving: {
    label: 'Grieving',
    icon: '\u{1F56F}\u{FE0F}', // candle
    description: 'Mourning, processing loss',
  },
};

export interface GurbaniVerse {
  id: number;
  gurmukhi: string;
  transliteration: string;
  translation: string;
  source: string; // e.g. "SGGS Ang 1"
  ang: number;
  writer: string;
  emotions: Emotion[];
}

export const GURBANI_VERSES: GurbaniVerse[] = [
  // ===== PEACEFUL =====
  {
    id: 1,
    gurmukhi: 'ਸਤਿਗੁਰ ਕੀ ਜਿਸ ਨੋ ਮਤਿ ਆਵੈ ਸੋ ਸਤਿਗੁਰ ਮਾਹਿ ਸਮਾਨਾ ॥',
    transliteration:
      'Satgur kee jis no mat aavai so Satgur maahi samaanaa.',
    translation:
      'One who receives the teachings of the True Guru is absorbed into the True Guru.',
    source: 'SGGS Ang 602',
    ang: 602,
    writer: 'Guru Amar Das Ji',
    emotions: ['peaceful', 'hopeful'],
  },
  {
    id: 2,
    gurmukhi: 'ਜਿਸ ਕੈ ਅੰਤਰਿ ਰਾਜ ਅਭਿਮਾਨੁ ॥ ਸੋ ਨਰਕਪਾਤੀ ਹੋਵਤ ਸੁਆਨੁ ॥',
    transliteration:
      'Jis kai antar raaj abhimaan. So narakpaatee hovat suaan.',
    translation:
      'One whose heart is filled with pride and arrogance shall fall into hell, reduced to a dog.',
    source: 'SGGS Ang 278',
    ang: 278,
    writer: 'Guru Arjan Dev Ji',
    emotions: ['peaceful'],
  },
  {
    id: 3,
    gurmukhi:
      'ਚਿੰਤਾ ਤਾ ਕੀ ਕੀਜੀਐ ਜੋ ਅਨਹੋਨੀ ਹੋਇ ॥ ਇਹੁ ਮਾਰਗੁ ਸੰਸਾਰ ਕੋ ਨਾਨਕ ਥਿਰੁ ਨਹੀ ਕੋਇ ॥',
    transliteration:
      'Chintaa taa kee keejee-ai jo anhonee ho-e. Ih maarag sansaar ko Naanak thir nahee ko-e.',
    translation:
      'Why worry about what is destined to happen? This is the way of the world, O Nanak, nothing is permanent.',
    source: 'SGGS Ang 1429',
    ang: 1429,
    writer: 'Guru Tegh Bahadur Ji',
    emotions: ['peaceful', 'anxious'],
  },
  {
    id: 4,
    gurmukhi:
      'ਤੇਰਾ ਕੀਆ ਮੀਠਾ ਲਾਗੈ ॥ ਹਰਿ ਨਾਮੁ ਪਦਾਰਥੁ ਨਾਨਕ ਮਾਂਗੈ ॥',
    transliteration:
      'Teraa kee-aa meethaa laagai. Har Naam padaarath Naanak maangai.',
    translation:
      'Your actions seem so sweet to me. Nanak begs for the treasure of the Name of the Lord.',
    source: 'SGGS Ang 394',
    ang: 394,
    writer: 'Guru Arjan Dev Ji',
    emotions: ['peaceful', 'grateful'],
  },

  // ===== GRATEFUL =====
  {
    id: 5,
    gurmukhi:
      'ਜਿਸ ਨੋ ਬਖਸੇ ਸਿਫਤਿ ਸਾਲਾਹ ॥ ਨਾਨਕ ਪਾਤਿਸਾਹੀ ਪਾਤਿਸਾਹੁ ॥',
    transliteration:
      'Jis no bakhse sifat saalaah. Naanak paatisaahee paatisaahu.',
    translation:
      'One whom the Lord blesses with praise and adoration, O Nanak, is the king of kings.',
    source: 'SGGS Ang 5',
    ang: 5,
    writer: 'Guru Nanak Dev Ji',
    emotions: ['grateful', 'joyful'],
  },
  {
    id: 6,
    gurmukhi:
      'ਸਭਿ ਸੁਖ ਮਨਿ ਵਸਹਿ ਜਾ ਤੂ ਮੇਰੇ ਸਾਹਿਬਾ ਕਿਰਪਾ ਕਰਹਿ ਤਾ ਤੇਰਾ ਨਾਵ ਲਈ ॥',
    transliteration:
      'Sabh sukh man vaseh jaa too mere Saahibaa kirpaa karahi taa teraa naav la-ee.',
    translation:
      'All comforts come to dwell in my mind; O my Lord, when You show Your mercy, I take Your Name.',
    source: 'SGGS Ang 762',
    ang: 762,
    writer: 'Guru Ram Das Ji',
    emotions: ['grateful', 'peaceful'],
  },
  {
    id: 7,
    gurmukhi:
      'ਧੰਨੁ ਧੰਨੁ ਰਾਮ ਦਾਸ ਗੁਰੁ ਜਿਨਿ ਸਿਰਿਆ ਤਿਨੈ ਸਵਾਰਿਆ ॥',
    transliteration:
      'Dhann dhann Raam Daas Gur jin siri-aa tinai savaari-aa.',
    translation:
      'Blessed, blessed is Guru Ram Das; the One who created You has also exalted You.',
    source: 'SGGS Ang 968',
    ang: 968,
    writer: 'Guru Arjan Dev Ji',
    emotions: ['grateful', 'joyful'],
  },

  // ===== SEEKING STRENGTH =====
  {
    id: 8,
    gurmukhi:
      'ਦੇਹ ਸ਼ਿਵਾ ਬਰ ਮੋਹਿ ਇਹੈ ਸ਼ੁਭ ਕਰਮਨ ਤੇ ਕਬਹੂੰ ਨ ਟਰੋਂ ॥',
    transliteration:
      'Deh Shivaa bar mohi ihai shubh karman te kabhoon na taron.',
    translation:
      'O God, grant me this boon: that I may never turn away from righteous deeds.',
    source: 'Dasam Granth',
    ang: 0,
    writer: 'Guru Gobind Singh Ji',
    emotions: ['seeking_strength', 'hopeful'],
  },
  {
    id: 9,
    gurmukhi:
      'ਨਿਰਭਉ ਨਿਰਵੈਰੁ ਅਕਾਲ ਮੂਰਤਿ ਅਜੂਨੀ ਸੈਭੰ ਗੁਰ ਪ੍ਰਸਾਦਿ ॥',
    transliteration:
      'Nirbhau nirvair akaal moorat ajoonee saibhang gur prasaad.',
    translation:
      'Without fear, without hatred, immortal form, beyond birth, self-existent. By the Guru\'s grace.',
    source: 'SGGS Ang 1 (Mool Mantar)',
    ang: 1,
    writer: 'Guru Nanak Dev Ji',
    emotions: ['seeking_strength', 'peaceful'],
  },
  {
    id: 10,
    gurmukhi:
      'ਜਉ ਤਉ ਪ੍ਰੇਮ ਖੇਲਣ ਕਾ ਚਾਉ ॥ ਸਿਰੁ ਧਰਿ ਤਲੀ ਗਲੀ ਮੇਰੀ ਆਉ ॥',
    transliteration:
      'Jau tau prem khelan kaa chaau. Sir dhar talee galee meree aau.',
    translation:
      'If you desire to play the game of love, come to my path with your head on your palm.',
    source: 'SGGS Ang 1412',
    ang: 1412,
    writer: 'Guru Nanak Dev Ji',
    emotions: ['seeking_strength', 'hopeful'],
  },
  {
    id: 11,
    gurmukhi:
      'ਸੂਰਾ ਸੋ ਪਹਿਚਾਨੀਐ ਜੁ ਲਰੈ ਦੀਨ ਕੇ ਹੇਤ ॥ ਪੁਰਜਾ ਪੁਰਜਾ ਕਟਿ ਮਰੈ ਕਬਹੂ ਨ ਛਾਡੈ ਖੇਤੁ ॥',
    transliteration:
      'Sooraa so pahchaanee-ai ju larai deen ke het. Purjaa purjaa kat marai kabhoo na chhaadai khet.',
    translation:
      'A true hero is known by the one who fights for the downtrodden. Cut apart piece by piece, they never leave the field of battle.',
    source: 'SGGS Ang 1105',
    ang: 1105,
    writer: 'Guru Nanak Dev Ji / Kabir Ji',
    emotions: ['seeking_strength'],
  },

  // ===== IN PAIN =====
  {
    id: 12,
    gurmukhi:
      'ਦੁਖੁ ਦਾਰੂ ਸੁਖੁ ਰੋਗੁ ਭਇਆ ਜਾ ਸੁਖੁ ਤਾਮਿ ਨ ਹੋਈ ॥',
    transliteration:
      'Dukh daaroo sukh rog bha-i-aa jaa sukh taam na ho-ee.',
    translation:
      'Suffering is the medicine and pleasure the disease, because where there is pleasure, there is no longing for God.',
    source: 'SGGS Ang 469',
    ang: 469,
    writer: 'Guru Nanak Dev Ji',
    emotions: ['in_pain', 'seeking_strength'],
  },
  {
    id: 13,
    gurmukhi:
      'ਨਾਨਕ ਦੁਖੀਆ ਸਭੁ ਸੰਸਾਰੁ ॥ ਸੁਖੀਆ ਸੋਇ ਜਿਸੁ ਨਾਮਿ ਪਿਆਰੁ ॥',
    transliteration:
      'Naanak dukhee-aa sabh sansaar. Sukhee-aa so-e jis naam pi-aar.',
    translation:
      'O Nanak, the whole world is unhappy. Only the one who loves the Naam is truly happy.',
    source: 'SGGS Ang 954',
    ang: 954,
    writer: 'Guru Amar Das Ji',
    emotions: ['in_pain', 'hopeful'],
  },
  {
    id: 14,
    gurmukhi:
      'ਤੁਧੁ ਆਪੇ ਭਾਣਾ ਦੁਖੁ ਦੀਆ ॥ ਤੁਧੁ ਆਪੇ ਵਿਛੋੜਾ ਕੀਆ ॥',
    transliteration:
      'Tudh aape bhaanaa dukh dee-aa. Tudh aape vichhorhaa kee-aa.',
    translation:
      'By Your own will, You have given me this pain. By Your own will, You have separated me from Yourself.',
    source: 'SGGS Ang 417',
    ang: 417,
    writer: 'Guru Nanak Dev Ji',
    emotions: ['in_pain', 'grieving'],
  },
  {
    id: 15,
    gurmukhi:
      'ਜੋ ਜੋ ਦੀਸੈ ਸੋ ਸੋ ਰੋਗੀ ॥ ਰੋਗ ਰਹਿਤ ਮੇਰਾ ਸਤਿਗੁਰੁ ਜੋਗੀ ॥',
    transliteration:
      'Jo jo deesai so so rogee. Rog rahit meraa Satgur jogee.',
    translation:
      'All that I see is suffering and diseased. Only my True Guru, the Yogi, is free of disease.',
    source: 'SGGS Ang 1140',
    ang: 1140,
    writer: 'Guru Arjan Dev Ji',
    emotions: ['in_pain', 'peaceful'],
  },

  // ===== JOYFUL =====
  {
    id: 16,
    gurmukhi:
      'ਵਾਹਿਗੁਰੂ ਵਾਹਿਗੁਰੂ ਵਾਹਿਗੁਰੂ ਵਾਹਿ ਜੀਉ ॥',
    transliteration: 'Vaahiguroo Vaahiguroo Vaahiguroo Vaahi Jee-o.',
    translation:
      'Waaheguru, Waaheguru, Waaheguru, Waahey Jee-o -- the Lord is wonderful!',
    source: 'SGGS Ang 1402',
    ang: 1402,
    writer: 'Guru Ram Das Ji / Bhai Gurdas Ji (Vaar)',
    emotions: ['joyful', 'grateful'],
  },
  {
    id: 17,
    gurmukhi:
      'ਆਨੰਦੁ ਭਇਆ ਮੇਰੀ ਮਾਏ ਸਤਿਗੁਰੂ ਮੈ ਪਾਇਆ ॥',
    transliteration:
      'Aanand bha-i-aa meree maa-e Satguroo mai paa-i-aa.',
    translation:
      'I am in ecstasy, O my mother! I have found my True Guru.',
    source: 'SGGS Ang 917',
    ang: 917,
    writer: 'Guru Amar Das Ji',
    emotions: ['joyful', 'grateful'],
  },
  {
    id: 18,
    gurmukhi:
      'ਮੇਰੇ ਮਨ ਅਨਦਿਨੁ ਧਿਆਇ ਨਾਮੁ ਹਰਿ ਹਰਿ ਸੁਖਦਾਤਾ ॥',
    transliteration:
      'Mere man an-din dhiaa-e Naam Har Har sukhdaataa.',
    translation:
      'O my mind, meditate on the Name of the Lord, Har Har, the Giver of peace, night and day.',
    source: 'SGGS Ang 669',
    ang: 669,
    writer: 'Guru Ram Das Ji',
    emotions: ['joyful', 'peaceful'],
  },

  // ===== ANXIOUS =====
  {
    id: 19,
    gurmukhi:
      'ਜਾ ਕਉ ਮੁਸਕਲੁ ਅਤਿ ਬਣੈ ਢੋਈ ਕੋਇ ਨ ਦੇਇ ॥ ਲਾਗੂ ਹੋਏ ਦੁਸਮਨਾ ਸਾਕ ਭਿ ਭਜਿ ਖਲੇ ॥',
    transliteration:
      'Jaa kau muskal at banai dho-ee ko-e na de-e. Laagoo ho-e dusmanaa saak bhi bhaj khale.',
    translation:
      'When you are confronted with terrible hardships and no one offers you any support, when your friends turn into enemies and even your relatives desert you --',
    source: 'SGGS Ang 70',
    ang: 70,
    writer: 'Guru Arjan Dev Ji',
    emotions: ['anxious', 'seeking_strength'],
  },
  {
    id: 20,
    gurmukhi:
      'ਸਭੇ ਥੋਕ ਪਰਾਪਤੇ ਜੇ ਆਵੈ ਇਕੁ ਹਥਿ ॥ ਜਨਮੁ ਪਦਾਰਥੁ ਸਫਲੁ ਹੈ ਜੇ ਸਚਾ ਸਬਦੁ ਕਥਿ ॥',
    transliteration:
      'Sabhe thok paraapte je aavai ik hath. Janam padaarath safal hai je sachaa sabad kath.',
    translation:
      'Everything is obtained if the One comes into your hands. The precious human birth is fruitful if you speak the True Word.',
    source: 'SGGS Ang 44',
    ang: 44,
    writer: 'Guru Nanak Dev Ji',
    emotions: ['anxious', 'hopeful'],
  },
  {
    id: 21,
    gurmukhi:
      'ਭੈ ਕਾਹੂ ਕਉ ਦੇਤ ਨਹਿ ਨਹਿ ਭੈ ਮਾਨਤ ਆਨ ॥ ਕਹੁ ਨਾਨਕ ਸੁਨਿ ਰੇ ਮਨਾ ਗਿਆਨੀ ਤਾਹਿ ਬਖਾਨ ॥',
    transliteration:
      'Bhai kaahoo kau det nahi nahi bhai maanat aan. Kahu Naanak sun re manaa giaanee taahi bakhaan.',
    translation:
      'One who does not frighten anyone, and who is not afraid of anyone else -- says Nanak, listen, mind: call that person spiritually wise.',
    source: 'SGGS Ang 1427',
    ang: 1427,
    writer: 'Guru Tegh Bahadur Ji',
    emotions: ['anxious', 'seeking_strength', 'peaceful'],
  },

  // ===== HOPEFUL =====
  {
    id: 22,
    gurmukhi:
      'ਜੇ ਵਡ ਭਾਗ ਹੋਵਹਿ ਮੁਖਿ ਮਸਤਕਿ ਹਰਿ ਨਾਮੁ ਤਿਨਾ ਹੀ ਲਇਆ ॥',
    transliteration:
      'Je vad bhaag hoveh mukh mastak Har Naam tinaa hee la-i-aa.',
    translation:
      'If great good fortune is written on one\'s forehead, then the Lord\'s Name is received.',
    source: 'SGGS Ang 922',
    ang: 922,
    writer: 'Guru Amar Das Ji',
    emotions: ['hopeful', 'grateful'],
  },
  {
    id: 23,
    gurmukhi:
      'ਹਰਿ ਜੀਉ ਤੇਰੀ ਦਾਤੀ ਰਾਜਾ ॥ ਆਠ ਪਹਰ ਤੁਧੁ ਸਦਾ ਧਿਆਈ ॥',
    transliteration:
      'Har Jee-o teree daatee raajaa. Aath pahar tudh sadaa dhiaa-ee.',
    translation:
      'O Dear Lord, Your gifts make me a king. Twenty-four hours a day, I meditate on You.',
    source: 'SGGS Ang 670',
    ang: 670,
    writer: 'Guru Ram Das Ji',
    emotions: ['hopeful', 'grateful'],
  },
  {
    id: 24,
    gurmukhi:
      'ਸੋ ਦਰੁ ਕੇਹਾ ਸੋ ਘਰੁ ਕੇਹਾ ਜਿਤੁ ਬਹਿ ਸਰਬ ਸਮਾਲੇ ॥',
    transliteration:
      'So dar kehaa so ghar kehaa jit bahi sarab samaale.',
    translation:
      'What is that door, and what is that home, in which You sit and take care of all?',
    source: 'SGGS Ang 6 (So Dar)',
    ang: 6,
    writer: 'Guru Nanak Dev Ji',
    emotions: ['hopeful', 'peaceful'],
  },

  // ===== GRIEVING =====
  {
    id: 25,
    gurmukhi:
      'ਜੋ ਉਪਜਿਓ ਸੋ ਬਿਨਸਿ ਹੈ ਪਰੋ ਆਜੁ ਕੈ ਕਾਲਿ ॥ ਨਾਨਕ ਹਰਿ ਗੁਨ ਗਾਇ ਲੇ ਛਾਡਿ ਸਗਲ ਜੰਜਾਲ ॥',
    transliteration:
      'Jo upji-o so binas hai paro aaj kai kaal. Naanak Har gun gaa-e le chhaad sagal janjaal.',
    translation:
      'Whatever has been created shall be destroyed; everyone shall perish, today or tomorrow. O Nanak, sing the praises of the Lord and give up all entanglements.',
    source: 'SGGS Ang 1429',
    ang: 1429,
    writer: 'Guru Tegh Bahadur Ji',
    emotions: ['grieving', 'peaceful'],
  },
  {
    id: 26,
    gurmukhi:
      'ਅਵਰ ਕੋ ਭੇਜਤ ਸੋਚ ਨ ਕੀਜੈ ॥ ਆਪਨ ਕੀਆ ਕਿ ਆਪ ਹੀ ਲੀਜੈ ॥',
    transliteration:
      'Avar ko bhejat soch na keejai. Aapan kee-aa ki aap hee leejai.',
    translation:
      'Do not grieve at the passing of others -- know that each must face the same. What one has sown, one must reap.',
    source: 'SGGS Ang 1352',
    ang: 1352,
    writer: 'Bhagat Kabir Ji',
    emotions: ['grieving'],
  },
  {
    id: 27,
    gurmukhi:
      'ਮਰਣੈ ਕੀ ਚਿੰਤਾ ਨਹੀ ਜੀਵਣ ਕੀ ਨਹੀ ਆਸ ॥ ਤੂ ਸਰਬ ਜੀਆ ਪ੍ਰਤਿਪਾਲਕ ॥',
    transliteration:
      'Marnai kee chintaa nahee jeevan kee nahee aas. Too sarab jee-aa pratipaalk.',
    translation:
      'I have no anxiety about dying, and no hope of living. You are the Cherisher of all beings.',
    source: 'SGGS Ang 20',
    ang: 20,
    writer: 'Guru Nanak Dev Ji',
    emotions: ['grieving', 'peaceful', 'seeking_strength'],
  },
  {
    id: 28,
    gurmukhi:
      'ਜੈਸੀ ਮੈ ਆਵੈ ਖਸਮ ਕੀ ਬਾਣੀ ਤੈਸੜਾ ਕਰੀ ਗਿਆਨੁ ਵੇ ਲਾਲੋ ॥',
    transliteration:
      'Jaisee mai aavai Khasam kee baanee taisrhaa karee giaan ve Laalo.',
    translation:
      'As the Lord\'s Word comes to me, so do I express it, O Lalo.',
    source: 'SGGS Ang 722',
    ang: 722,
    writer: 'Guru Nanak Dev Ji',
    emotions: ['grieving', 'seeking_strength'],
  },

  // ===== ADDITIONAL MIXED EMOTIONS =====
  {
    id: 29,
    gurmukhi:
      'ਮਿਠਤੁ ਨੀਵੀ ਨਾਨਕਾ ਗੁਣ ਚੰਗਿਆਈਆ ਤਤੁ ॥',
    transliteration:
      'Mithat neevee Naanakaa gun changiaa-ee-aa tat.',
    translation:
      'Sweetness and humility, O Nanak, are the essence of virtue and goodness.',
    source: 'SGGS Ang 470',
    ang: 470,
    writer: 'Guru Nanak Dev Ji',
    emotions: ['peaceful', 'grateful'],
  },
  {
    id: 30,
    gurmukhi:
      'ਸਲੋਕੁ ॥ ਪਵਣੁ ਗੁਰੂ ਪਾਣੀ ਪਿਤਾ ਮਾਤਾ ਧਰਤਿ ਮਹਤੁ ॥ ਦਿਵਸੁ ਰਾਤਿ ਦੁਇ ਦਾਈ ਦਾਇਆ ਖੇਲੈ ਸਗਲ ਜਗਤੁ ॥',
    transliteration:
      'Salok. Pavan guroo paanee pitaa maataa dharat mahat. Divas raat du-e daa-ee daa-i-aa khelai sagal jagat.',
    translation:
      'Air is the Guru, water is the Father, and the great earth is the Mother. Day and night are the two caregivers, in whose lap the whole world plays.',
    source: 'SGGS Ang 8 (Japji Sahib closing)',
    ang: 8,
    writer: 'Guru Nanak Dev Ji',
    emotions: ['grateful', 'peaceful', 'joyful'],
  },
];

/**
 * Get verses matching a given emotion.
 */
export function getVersesByEmotion(emotion: Emotion): GurbaniVerse[] {
  return GURBANI_VERSES.filter((v) => v.emotions.includes(emotion));
}

/**
 * Get a random subset of verses for a given emotion.
 */
export function getRandomVerses(emotion: Emotion, count = 3): GurbaniVerse[] {
  const matching = getVersesByEmotion(emotion);
  const shuffled = [...matching].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}
