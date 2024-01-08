import { FunctionComponent, useState } from "react";
import StyledWrapper from './style';
import { FabBtnProps } from "../../types/ComponentProps";


const ButtonFab: FunctionComponent<FabBtnProps> = ({
    icon = 'add',
    className
}) => {
    const [fabClicked, setFabClicked] = useState<boolean>(false);

    const onClick = () => {
        setFabClicked(!fabClicked);

        if (fabClicked) {
            setFabClicked(false);
        }
    }

    return (
        <StyledWrapper className={['btn-fab-wrapper', className].join(' ')}>
            <button className={`btn-fab ${fabClicked ? 'rotate' : ''}`} onClick={onClick}>
                <span className={`material-symbols-rounded `}>
                    {icon}
                </span>
            </button>
        </StyledWrapper>
    )
}


export default ButtonFab;