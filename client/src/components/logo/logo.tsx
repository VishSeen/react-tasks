import { FunctionComponent } from "react";
import { LogoProps } from "../../types/ComponentProps";
import StyledWrapper from "./logo-style";

const Logo: FunctionComponent<LogoProps> = ({
    text,
    url,
    className
}) => {
    return (
        <StyledWrapper className='logo-wrapper'>
            {
                url ? (
                    <a href={url} className={['logo', className].join(' ')}>
                        <span>
                            {text}
                        </span>
                    </a>
                ) : (
                        <div className={['logo', className].join(' ')}>
                            <span>
                                {text}
                            </span>
                        </div>
                )
            }
        </StyledWrapper>
    );
}

export default Logo;