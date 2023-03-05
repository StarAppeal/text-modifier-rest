import ModifierRequest from './ModifierRequest'
import Param from './Param'

interface ModifierConfig {
    function: (request: ModifierRequest) => string | Promise<string>
    label: string
    value: string
    hidden?: boolean
    params?: Param[]
}

export default ModifierConfig
