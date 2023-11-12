import { FunctionComponent } from "react";
import StyledDropdownItem from "./style";
import { DropdownItemProps } from "../../types/ComponentProps";
import config from '../../config.json'


const DropdownItem: FunctionComponent<DropdownItemProps> = ({
    className,
    title,
    titleColor,
    iconLeft,
    clickEvent
}) => {
    return(
        <StyledDropdownItem className={`dropdown-item__wrapper ${className}`}>
            <button onClick={clickEvent}>
                {
                    iconLeft && (
                        <span className={`icon ${config?.icons}`}>
                            {iconLeft}
                        </span>
                    )
                }

                <span
                    className="text"
                    style={{
                        color: `${titleColor}`
                    }}
                >
                    {title}
                </span>
            </button>
        </StyledDropdownItem>
    )
}

export default DropdownItem;