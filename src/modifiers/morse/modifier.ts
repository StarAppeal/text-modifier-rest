import ModifierRequest from '@/constants/interfaces/ModifierRequest'
import morseMap from '../../constants/maps/morse'
import { getKeyByValue } from '../../globals/modifierHelpers'

const DEFAULT_PARAMS = {
    reverse: false,
}

export default function modify(request: ModifierRequest) {
    const params = { ...DEFAULT_PARAMS, ...request.params }

    return params.reverse
        ? request.text
              .split(' ')
              .map((el) => {
                  return el === '' ? ' ' : getKeyByValue(el, morseMap)
              })
              .join('')
              .replace(/  /g, ' ')
        : request.text
              .toLowerCase()
              .split('')
              .map((el) => {
                  return morseMap[el as keyof typeof morseMap] ?? el
              })
              .join(' ')
}
