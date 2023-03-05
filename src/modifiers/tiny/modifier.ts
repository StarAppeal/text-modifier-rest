import ModifierRequest from '@/constants/interfaces/ModifierRequest'
import tinyMap from '../../constants/maps/tiny'
import { defaultModifier } from '../../globals/modifierHelpers'

export default function modify(request: ModifierRequest) {
    return defaultModifier(request.text.toLowerCase(), tinyMap)
}
