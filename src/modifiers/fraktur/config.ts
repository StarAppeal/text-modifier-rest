import ModifierConfig from '@/constants/interfaces/ModifierConfig'
import ParamType from '../../constants/enums/ParamType'
import generate from './modifier'

const config: ModifierConfig = {
    function: generate,
    label: '𝔉𝔯𝔞𝔨𝔱𝔲𝔯',
    value: 'fraktur',
    params: [
        {
            label: 'Fett',
            value: 'bold',
            type: ParamType.BOOLEAN,
        },
    ],
}

export default config
