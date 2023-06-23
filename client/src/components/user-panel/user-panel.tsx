import { styled } from "styled-components";

type Image = {
    src: string;
    alt: string;
}

type UserProps = {
    name: string;
    image: Image;
    clickEvent: (event: React.MouseEvent<HTMLDivElement>) => void;
}


const UserPanel: React.FC<UserProps> = ({
    name,
    image,
    clickEvent
}) => {
    return (
        <StyledWrapper className="user-panel-wrapper">
            <div className="user-panel" onClick={clickEvent}>
                <div className="user-name">
                    <p>
                        {name}
                    </p>
                </div>

                <div className="user-profile-image">
                    <img src={image.src} alt={image.alt} />
                </div>
            </div>
        </StyledWrapper>
    );
}



const StyledWrapper = styled.div`


    .user-panel {
        display: flex;
        align-items: center;
        justify-content: flex-end;

        &:hover {
            cursor: pointer;
        }
    }


    .user-panel .user-name {
        margin-right: 14px;

        p {
            font-weight: 600;
        }
    }


    .user-panel .user-profile-image {
        border-radius: 50%;
        width: 50px;
        height: 50px;
        overflow: hidden;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
`;


export default UserPanel;