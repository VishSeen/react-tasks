import { styled } from "styled-components";
import { BtnProps } from "../form/btn-signin";

type FabBtnProps = {
    icon: string;
    className?: string;
    clickEvent: () => void;
}

const BtnFab: React.FC<FabBtnProps> = ({
    icon,
    className,
    clickEvent
}) => {
    return (
        <StyledWrapper className="btn-fab-wrapper">
            <button className="btn-fab" onClick={clickEvent}>
                <span className="material-icons">
                    {icon}
                </span>
            </button>
        </StyledWrapper>
    )
}


const StyledWrapper = styled.div<{ className?: string }>`

.btn-fab {
    display: flex;
    background-color: #F9D949;
    border: none;
    border-radius: 50%;
    padding: 10px;

    :hover {
        cursor: pointer;
    }
}

.btn-fab span {
    color: white;
}
`;


export default BtnFab;