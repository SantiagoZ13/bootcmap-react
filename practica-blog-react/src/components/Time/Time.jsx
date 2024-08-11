import Paragraph from "../Paragraph";
import humanize from '../../utils/humanize'

function Time({ children }) {
    return (
        <Paragraph isHelpText size="xs"> 
            <time dateTime={children}>
                {humanize(children)}
            </time>
        </Paragraph>
    )
}
export default Time