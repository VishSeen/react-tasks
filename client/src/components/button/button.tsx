import { FunctionComponent } from "react";
import StyledButton from "./style";
import { ButtonProps } from "../../types/ComponentProps";
import config from '../../config.json';

const Button: FunctionComponent<ButtonProps> = ({
    className,
    title,
    iconRight,
    buttonType,
    clickEvent
}) => {
    return (
        <StyledButton className={['button__wrapper', className, buttonType].join(' ')}>
            <button>
                {title}

                {
                    iconRight && (
                        <span className={config?.icons}>
                            {iconRight}
                        </span>
                    )
                }
            </button>
        </StyledButton>
    )
}

export default Button;