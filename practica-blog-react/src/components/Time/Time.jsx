import Paragraph from "../Paragraph";

const humanize = (date) => date

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