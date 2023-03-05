import ModifierRequest from '@/constants/interfaces/ModifierRequest'
import australiaMap from '../../constants/maps/australia'
import { defaultModifier } from '../../globals/modifierHelpers'

const DEFAULT_PARAMS = {
    reverse: false,
}

export default function modify(request: ModifierRequest) {
    const params = { ...DEFAULT_PARAMS, ...request.params }
    return defaultModifier(request.text, australiaMap, true, params.reverse)
}
