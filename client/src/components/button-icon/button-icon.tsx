import { FunctionComponent } from "react";
import { ButtonIconProps } from "../../types/ComponentProps";
import StyledButtonIcon from "./style";


const ButtonIcon: FunctionComponent<ButtonIconProps> = ({
    icon,
    clickEvent
}) => {
    return (
        <StyledButtonIcon className="button-icon__wrapper">
            <button onClick={clickEvent}>
                <span className="material-symbols-rounded">
                    {icon}
                </span>
            </button>
        </StyledButtonIcon>
    )
}


export default ButtonIcon;