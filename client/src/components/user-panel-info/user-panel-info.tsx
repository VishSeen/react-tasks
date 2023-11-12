import { FunctionComponent } from "react"
import StyledUserPanelInfo from "./style";
import { UserPanelInfoProps } from "../../types/ComponentProps";
import DropdownItem from "../dropdown-item/dropdown-item";


const UserPanelInfo: FunctionComponent<UserPanelInfoProps> = ({
    className,
    image,
    name,
    email,
    items,
    isOpened = false
}) => {
    return (
        <StyledUserPanelInfo className={`user-panel-info__wrapper ${className} ${isOpened ? 'visible' : ''}`}>
            <div className="user-info">
                <div className="image">
                    <img
                        src={image?.src}
                        alt={image?.altText}
                    />
                </div>

                <div className="info">
                    <p>
                        {name}
                    </p>

                    <span>
                        {email}
                    </span>
                </div>
            </div>

            <div className="middle-container">
                <DropdownItem
                    title="Edit Profile"
                />
                <DropdownItem
                    title="Settings"
                />
            </div>

            <div className="bottom-container">
                <DropdownItem
                    title="Sign out"
                    clickEvent={() => alert('Log out')}
                />
            </div>
        </StyledUserPanelInfo>
    )
}


export default UserPanelInfo;