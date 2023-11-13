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
            {
                iconRight ? (
                    <button>
                        <div className="content">
                            <span className="text">
                                {title}
                            </span>

                            {
                                iconRight && (
                                    <span className={`icon ${config?.icons}`}>
                                        {iconRight}
                                    </span>
                                )
                            }
                        </div>
                    </button>
                ) : (
                    <button>
                        <span className="text">
                            {title}
                        </span>
                    </button>
                )
            }
        </StyledButton>
    )
}

export default Button;