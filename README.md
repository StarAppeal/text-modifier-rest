# text-modifier-rest

## Express based REST interface for generating different kinds of texts

### Text Generation Types and Parameters

| Text Type | Example Input | Example Output | Parameters |
| --- | --- | --- | --- |
| Australia | upside down text | ʇxǝʇ uʍop ǝpᴉsdn | `reverse` (boolean): Translate from/to Australia |
| Bold | Bold | 𝗕𝗼𝗹𝗱 | \- |
| Braille | Braille | ⠃⠗⠁⠊⠇⠇⠑⠼ | `reverse` (boolean): Translate from/to Braille |
| Cummy | Just the same text | Just the same text | \- |
| Emoji | more emotions | more 📈😤 emotions 😍 | `maxEmojis` (number): Max emojis after a word |
| Fancy | a nice italic font | 𝒶 𝓃𝒾𝒸ℯ 𝒾𝓉𝒶𝓁𝒾𝒸 𝒻ℴ𝓃𝓉 | \- |
| Fraktur | this old German font | 𝔱𝔥𝔦𝔰 𝔬𝔩𝔡 𝔊𝔢𝔯𝔪𝔞𝔫 𝔣𝔬𝔫𝔱 | `bold` (boolean): Bold or not bold |
| Italic | slanted text | 𝘴𝘭𝘢𝘯𝘵𝘦𝘥 𝘵𝘦𝘹𝘵 | \- |
| Leet | leetspeak | 13375p34k | `advanced` (boolean): Advanced leetspeak <br/> `reverse` (boolean): Translate from/to Leet |
| Mirror | Mirrored text | ɈxɘɈ bɘɿoɿɿiM | `reverse` (boolean): Translate from/to Mirror |
| Mock | The Mocking SpongeBob Meme Text | ThE MoCkInG SpOnGeBoB MeMe tExT | `startLowerCase` (boolean): Start with lower/upper case |
| Morse | morsecode | \-- --- .-. ... . -.-. --- -.. . | `reverse` (boolean): Translate from/to Morse |
| Ogre | Hallo | Meddl Loide | \- |
| owo | all your owo needs | aww youw owo nyeeds | `nuzzle` (boolean): Add "schmiegt an" |
| Strikethrough | struck through | s̶t̶r̶u̶c̶k̶ ̶t̶h̶r̶o̶u̶g̶h̶ | \- |
| Tiny | very small text | ᵛᵉʳʸ ˢᵐᵃˡˡ ᵗᵉˣᵗ | \- |
| Translate | This text has been badly translated | bad texts have been translated | `numberTranslations` (number): Translations count |
| Zalgo | oh lord help me he comes | ơ̬͌ḫ̭͐ ͇͓ͥl̻̏͢o̶̥̜r͌͛́d̼̉͢ ͔̆͘h̹̑͝e͙̲ͅl͇̮͘p͍̔̊ ̳̆͠m̼̉̎e̞̞̊ ͍̈̒h̳̫̐ë̴̦ ͚̋͘c̮̟ͯo͌͒̍m̷̀͝e̩͕͂s̩̲̅ | `intensity` (number): 0-100, defines the zalgo intensity |