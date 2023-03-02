import ModifierRequest from '@/constants/interfaces/ModifierRequest'
import { defaultModifier } from '../../globals/modifierHelpers'
import {
    fraktur as frakturMap,
    frakturBold as frakturBoldMap,
} from '../../constants/maps/fraktur'

const DEFAULT_PARAMS = {
    bold: false,
}

export default function modify(request: ModifierRequest) {
    const params = { ...DEFAULT_PARAMS, ...request.params }
    const fractureMap = params.bold ? frakturBoldMap : frakturMap
    return defaultModifier(request.text, fractureMap)
}
