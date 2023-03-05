import ModifierConfig from '@/constants/interfaces/ModifierConfig'
import ParamType from '../../constants/enums/ParamType'
import modify from './modifier'

const config: ModifierConfig = {
    function: modify,
    label: '(Shitty) Translate',
    value: 'translate',
    params: [
        {
            label: 'Anzahl Übersetzungen',
            value: 'numberTranslations',
            type: ParamType.NUMBER,
        },
    ],
}

export default config
