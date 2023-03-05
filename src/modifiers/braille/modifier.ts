import ModifierRequest from '@/constants/interfaces/ModifierRequest'
import braille from 'braille'

const DEFAULT_PARAMS = {
    reverse: false,
}

export default function modify(request: ModifierRequest) {
    const params = { ...DEFAULT_PARAMS, ...request.params }

    const str = request.text
        .toUpperCase()
        .replace(/Ä/g, 'AE')
        .replace(/Ö/g, 'OE')
        .replace(/Ü/g, 'UE')
    return params.reverse ? braille.toText(str) : braille.toBraille(str)
}
