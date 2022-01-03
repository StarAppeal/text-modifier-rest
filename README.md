# text-generator-rest

### Express based REST interface for generating different kinds of texts.

**Possible text generations and their parameters:**

- _Australia_ for **ʇxǝʇ uʍop ǝpᴉsdn**
  - _reverse_: boolean - wether or not to translate **from** or **to** _Australia_
- _Braille_ for **⠃⠗⠁⠊⠇⠇⠑⠼**
  - _reverse_: boolean - wether or not to translate **from** or **to** _Braille_
- _Cummy_ for just the same text
- _Emoji_ for **more 📈😤 emotions 😍**
- _Fancy_ for **𝒶 𝓃𝒾𝒸ℯ 𝒾𝓉𝒶𝓁𝒾𝒸 𝒻ℴ𝓃𝓉**
- _Fraktur_ for **𝔱𝔥𝔦𝔰 𝔬𝔩𝔡 𝔊𝔢𝔯𝔪𝔞𝔫 𝔣𝔬𝔫𝔱**
  - _bold_: boolean - 𝖇𝖔𝖑𝖉 or 𝔫𝔬𝔱 𝔟𝔬𝔩𝔡
- _Leet_ for **13375p34k**
  - _advanced_: boolean - a more advanced leetspeak for the most elite of the elitists
  - _reverse_: boolean - wether or not to translate **from** or **to** _Leet_
- _Mock_ for **ThE MoCkInG SpOnGeBoB MeMe tExT**
  - _startLowerCase_: boolean - start with a lowercase or an uppercase letter
- _Morse_ for **-- --- .-. ... . -.-. --- -.. .**
  - _reverse_: boolean - wether or not to translate **from** or **to** _Morse_
- _owo_ for **aww youw owo nyeeds**
  - _nuzzle_: boolean - add **schmiegt an** to the end of the text. More language support to come.
- _Tiny_ for **ᵛᵉʳʸ ˢᵐᵃˡˡ ᵗᵉˣᵗ**
- _Translate_ for **bad texts have been translated**
  - _numberTranslations_: number - number of languages the text is being translated to before translating back to German. More language support to come.
- _Zalgo_ for **ơ̬͌ḫ̭͐ ͇͓ͥl̻̏͢o̶̥̜r͌͛́d̼̉͢ ͔̆͘h̹̑͝e͙̲ͅl͇̮͘p͍̔̊ ̳̆͠m̼̉̎e̞̞̊ ͍̈̒h̳̫̐ë̴̦ ͚̋͘c̮̟ͯo͌͒̍m̷̀͝e̩͕͂s̩̲̅**
  - _intensity_: number - value from _0_ to _100_ to define, you guessed it, the intensity of the zalgo
