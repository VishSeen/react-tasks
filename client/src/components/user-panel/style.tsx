import styled from "styled-components";


const StyledWrapper = styled.div`
    &.user-panel-wrapper {
        padding: 4px;
        position: unset;
        width: fit-content;
        height: 50px;
        transition: 0.1s ease-in all;
        @media screen and (min-width: 992px) {
            position: relative;
            width: 237px;
        }
    }


    .user-panel {
        display: flex;
        align-items: center;
        justify-content: flex-end;

        &:hover {
            cursor: pointer;

            .user-panel__user-name {
                opacity: 1;
            }
        }
    }

    .user-panel__user-name {
        display: none;
        margin-right: 14px;
        opacity: 0.7;
        transition: 0.3s ease-in-out all;
        @media screen and (min-width: 992px) {
            display: flex;
            flex-direction: row;
            align-items: center;
        }

        p {
            color: ${props => props.theme.color.text.textColor};
            font-weight: 500;
            font-size: 14px;
            font-style: normal;
            line-height: normal;
        }

        span {
            color: ${props => props.theme.color.text.textColor};
        }
    }

    .user-panel__user-profile-image {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        overflow: hidden;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
`;


export default StyledWrapper;