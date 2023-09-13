import styled from "styled-components";


const StyledWrapper = styled.div<{
    $primary?: boolean;
}>`
    &.user-panel-wrapper {
        background-color: #F1F6F9;
        border-radius: 45px;
        padding: 4px;
        position: relative;
    }

    .user-panel {
        display: flex;
    align-items: center;
    justify-content: center;
    width: 250px;

        &:hover {
            cursor: pointer;

            .user-panel__user-name {
                opacity: 1;
            }
        }
    }


    .user-panel__user-name {
        margin-right: 14px;
        display: none;
        opacity: 0.7;
        transition: 0.3s ease-in-out all;

        @media screen and (min-width: 992px) {
            display: flex;
            flex-direction: row;
            align-items: center;
        }

        p {
            color: #323232;
            font-weight: 600;
            font-size: 14px;
            font-style: normal;
            line-height: normal;
        }

        span {
            color: #323232;
        }
    }


    .user-panel__user-profile-image {
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


    .user-info-panel {
        position: absolute;
    width: 100%;
    height: 100%;
    top: 68px;
    right: 0;

        border-radius: 7px;
        padding: 10px;
        background-color: #F1F6F9;
        box-shadow: 0px 3px 7px 0px rgba(0, 0, 0, 0.3);
        &.visible {
            display: block;
        }
        &.none {
            display: none;
        }
    }
`;


export default StyledWrapper;