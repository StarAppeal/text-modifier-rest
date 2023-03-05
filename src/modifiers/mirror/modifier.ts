import ModifierRequest from '@/constants/interfaces/ModifierRequest'
import mirrorMap from '../../constants/maps/mirror'
import { defaultModifier } from '../../globals/modifierHelpers'

const DEFAULT_PARAMS = {
    reverse: false,
}

export default function modify(request: ModifierRequest) {
    const params = { ...DEFAULT_PARAMS, ...request.params }
    return defaultModifier(request.text, mirrorMap, true, params.reverse)
}
