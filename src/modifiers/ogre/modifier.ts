import ModifierRequest from '@/constants/interfaces/ModifierRequest'
import ogreMap from '../../constants/maps/ogre'
import { getRandomNumber } from '../../globals/modifierHelpers'

export default async function modify(request: ModifierRequest) {
    let result = request.text
    for (let [key, value] of Object.entries(ogreMap)) {
        const length = value.length
        result = result.replaceAll(key, () => {
            return value[getRandomNumber(length)]
        })
    }
    return result
}
