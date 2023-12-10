# text-modifier-rest

## Express based REST interface for generating different kinds of texts

### Modifiers and Parameters

| Modifier | Parameters | Example Input | Example Output |
| --- | --- | --- | --- |
| australia | `reverse` (boolean): Translate from/to Australia | upside down text | ʇxǝʇ uʍop ǝpᴉsdn |
| bold | \- | Bold | 𝗕𝗼𝗹𝗱 |
| braille | `reverse` (boolean): Translate from/to Braille | braille | ⠃⠗⠁⠊⠇⠇⠑⠼ |
| cummy | \- | Just the same text | Just the same text |
| emoji | `maxEmojis` (number): Max emojis after a word | more emotions | more 📈😤 emotions 😍 |
| fancy | \- | a nice italic font | 𝒶 𝓃𝒾𝒸ℯ 𝒾𝓉𝒶𝓁𝒾𝒸 𝒻ℴ𝓃𝓉 |
| fraktur | `bold` (boolean): Bold or not bold | this old German font | 𝔱𝔥𝔦𝔰 𝔬𝔩𝔡 𝔊𝔢𝔯𝔪𝔞𝔫 𝔣𝔬𝔫𝔱 |
| italic | \- | slanted text | 𝘴𝘭𝘢𝘯𝘵𝘦𝘥 𝘵𝘦𝘹𝘵 |
| leet | `advanced` (boolean): Advanced leetspeak <br/> `reverse` (boolean): Translate from/to Leet | leetspeak | 13375p34k |
| mirror | `reverse` (boolean): Translate from/to Mirror | Mirrored text | ɈxɘɈ bɘɿoɿɿiM |
| mock | `startLowerCase` (boolean): Start with lower/upper case | The Mocking SpongeBob Meme Text | ThE MoCkInG SpOnGeBoB MeMe tExT |
| morse | `reverse` (boolean): Translate from/to Morse | morsecode | \-- --- .-. ... . -.-. --- -.. . |
| ogre | \- | Hallo | Meddl Loide |
| owo | `nuzzle` (boolean): Add "schmiegt an" | all your owo needs | aww youw owo nyeeds |
| strikethrough | \- | struck through | s̶t̶r̶u̶c̶k̶ ̶t̶h̶r̶o̶u̶g̶h̶ |
| tiny | \- | very small text | ᵛᵉʳʸ ˢᵐᵃˡˡ ᵗᵉˣᵗ |
| translate | `numberTranslations` (number): Translations count | This text has been badly translated | bad texts have been translated |
| zalgo | `intensity` (number): 0-100, defines the zalgo intensity | oh lord help me he comes | ơ̬͌ḫ̭͐ ͇͓ͥl̻̏͢o̶̥̜r͌͛́d̼̉͢ ͔̆͘h̹̑͝e͙̲ͅl͇̮͘p͍̔̊ ̳̆͠m̼̉̎e̞̞̊ ͍̈̒h̳̫̐ë̴̦ ͚̋͘c̮̟ͯo͌͒̍m̷̀͝e̩͕͂s̩̲̅ |

---

### Example Request

POST `{{url}}/morse`

```json
{
    "text": ". -..- .- -- .--. .-.. .   - . -..- -",
    "params": {
        "reverse": true
    }
}
```

### Example Response

```json
{
    "text": "example text",
    "time": 1
}
```

`time` is the response time in ms