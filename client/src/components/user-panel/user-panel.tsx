
import { useState } from "react";
import { UserPanelProps } from "../../types/ComponentProps";
import StyledWrapper from "./style";
import UserPanelInfo from "../user-panel-info/user-panel-info";
import config from '../../config.json';



const UserPanel: React.FC<UserPanelProps> = ({
    className,
    image,
    name,
    email,
    isInfoVisible
}) => {
    const [panelVisible, setPanelVisible] = useState<boolean>(false);

    return (
        <StyledWrapper
            className={`user-panel-wrapper ${className}`}
            onMouseEnter={() => setPanelVisible(true)}
            onMouseLeave={() => setPanelVisible(false)}
        >
            <div className="user-panel">
                {
                    isInfoVisible && (
                        <div className="user-panel__user-name">
                            <p>
                                {name}
                            </p>

                            <span className={config?.icons}>expand_more</span>
                        </div>
                    )
                }

                <div className="user-panel__user-profile-image">
                    <img src={image.src} alt={image.altText} />
                </div>
            </div>

            <UserPanelInfo
                name={name}
                email={email}
                image={image}
                isOpened={panelVisible}
            />
        </StyledWrapper>
    );
}



export default UserPanel;