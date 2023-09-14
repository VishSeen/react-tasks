import styled from "styled-components";


const StyledWrapper = styled.div<{
    $primary?: boolean;
}>`
    &.user-panel-wrapper {
        padding: 4px;
        position: relative;
        width: 237px;
        height: 50px;
        transition: 0.1s ease-in all;
        &:hover {
            border-radius: 45px;
            background-color: ${props => props.theme.backgroundSearchColor};

        }

        &.visible {
            border-radius: 20px;
            border-bottom-right-radius: 0;
            border-bottom-left-radius: 0;
            background-color: ${props => props.theme.backgroundSearchColor};
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
        margin-right: 14px;
        opacity: 0.7;
        transition: 0.3s ease-in-out all;

        @media screen and (min-width: 992px) {
            display: flex;
            flex-direction: row;
            align-items: center;
        }

        p {
            color: ${props => props.theme.textColor};
            font-weight: 500;
            font-size: 14px;
            font-style: normal;
            line-height: normal;
        }

        span {
            color: ${props => props.theme.textColor};
        }
    }

    .user-panel__user-profile-image {
        border-radius: 50%;
        width: 40px;
        height: 40px;
        overflow: hidden;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }


    .user-info-panel {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 100%;
        right: 0;
        padding: 10px;
        background-color: ${props => props.theme.backgroundSearchColor};;
        border-radius: 20px;
        border-top-right-radius: 0;
        border-top-left-radius: 0;
        &.visible {
            display: block;
        }
        &.none {
            display: none;
        }
    }
`;


export default StyledWrapper;