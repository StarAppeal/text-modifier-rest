import ModifierConfig from '@/constants/interfaces/ModifierConfig'
import ParamType from '../../constants/enums/ParamType'
import modify from './modifier'

const config: ModifierConfig = {
    function: modify,
    label: 'ɐᴉlɐɹʇsn∀',
    value: 'australia',
    params: [
        {
            label: 'Rückgängig',
            value: 'reverse',
            type: ParamType.BOOLEAN,
        },
    ],
}

export default config
