import { useLayoutEffect, useState } from "react";
import { UserPanelProps } from "../../types/ComponentProps";
import StyledWrapper from "./user-panel.style";



const UserPanel: React.FC<UserPanelProps> = ({
    name,
    image
}) => {
    const [panelVisible, setPanelVisible] = useState<boolean>(false);

    const userPanelClicked = (): void => {
        if(panelVisible) {
            setPanelVisible(false)
        } else {
            setPanelVisible(true);
        }
    }

    return (
        <StyledWrapper $primary className="user-panel-wrapper">
            <div className="user-panel" onClick={userPanelClicked}>
                <div className="user-panel__user-name">
                    <p>
                        {name}
                    </p>

                    <span className="material-icons">expand_more</span>
                </div>

                <div className="user-panel__user-profile-image">
                    <img src={image.src} alt={image.altText} />
                </div>
            </div>

            <div className={`user-info-panel ${panelVisible ? 'visible' : 'none'}`}>
                <p>hell</p>
            </div>
        </StyledWrapper>
    );
}



export default UserPanel;