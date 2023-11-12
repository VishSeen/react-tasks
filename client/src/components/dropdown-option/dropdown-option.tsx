import { FunctionComponent } from "react"
import StyledDropdown from "./style";
import { DropdownOptionProps } from "../../types/ComponentProps";
import DropdownItem from "../dropdown-item/dropdown-item";

const DropdownOption: FunctionComponent<DropdownOptionProps> = ({
    className,
    items,
    isOpened
}) => {
    return (
        <StyledDropdown className={`dropdown-option__wrapper ${className} ${isOpened ? 'visible' : ''}`}>
            {
                items && (
                    items.map((item, key) => (
                        <DropdownItem
                            key={key}
                            title={item?.title}
                            clickEvent={item?.clickEvent}
                        />
                    ))
                )
            }
        </StyledDropdown>
    )
}

export default DropdownOption;