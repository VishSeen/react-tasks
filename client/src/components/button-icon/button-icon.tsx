import { FunctionComponent } from "react";
import { ButtonIconProps } from "../../types/ComponentProps";
import StyledButtonIcon from "./style";


const ButtonIcon: FunctionComponent<ButtonIconProps> = ({
    className,
    icon,
    size = 'normal',
    clickEvent
}) => {
    return (
        <StyledButtonIcon className={`button-icon__wrapper ${size} ${className}`}>
            <button onClick={clickEvent}>
                <span className="material-symbols-rounded">
                    {icon}
                </span>
            </button>
        </StyledButtonIcon>
    )
}


export default ButtonIcon;