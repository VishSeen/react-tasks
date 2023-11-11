import { FunctionComponent } from "react";
import StyledChip from "./style"
import { ChipTagProps } from "../../types/ComponentProps";


const ChipTag: FunctionComponent<ChipTagProps> = ({
    className,
    tag
}) => {
    return(
        <StyledChip className={`chip-tag__wrapper ${className} ${tag}`}>
            <span>
                #{tag}
            </span>
        </StyledChip>
    )
}

export default ChipTag;