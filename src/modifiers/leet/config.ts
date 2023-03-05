import ModifierConfig from '@/constants/interfaces/ModifierConfig'
import ParamType from '../../constants/enums/ParamType'
import modify from './modifier'

const config: ModifierConfig = {
    function: modify,
    label: '1337',
    value: 'leet',
    params: [
        {
            label: 'Erweitert',
            value: 'advanced',
            type: ParamType.BOOLEAN,
        },
        {
            label: 'Rückgängig',
            value: 'reverse',
            type: ParamType.BOOLEAN,
        },
    ],
}

export default config
