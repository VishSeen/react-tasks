import { FunctionComponent } from "react";
import StyledPopupAdd from "./style";
import { PopupAddProps } from "../../types/ComponentProps";
import Button from "../button/button";
import { ButtonType } from "../../constants";



const PopupNew: FunctionComponent<PopupAddProps> = ({
    className,
    formItems
}) => {
    return (
        <StyledPopupAdd className={['popup-add__wrapper', className].join('')}>
            <div className="button__container">
                <Button title="ADD" buttonType={ButtonType.filled} />
            </div>
        </StyledPopupAdd>
    )
}

export default PopupNew;