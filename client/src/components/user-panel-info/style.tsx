import styled from 'styled-components';

const StyledUserPanelInfo = styled.div`
    width: 100%;
    box-shadow: ${props => props.theme.boxShadow};
    display: none;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 18px;
    border: 1px solid ${props => props.theme.borderColor};
    padding: 10px;
    position: absolute;
    top: 63px;
    right: 0;
    left: 0;
    @media screen and (min-width: 768px) {
        width: 241px;
        position: relative;
        top: 6px;
    }


    &.visible {
        display: flex;
    }

    .user-info {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 26px;

        .image {
            width: 75px;
            height: 75px;
            border-radius: 50%;
            overflow: hidden;
            margin-bottom: 18px;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }

        .info {
            text-align: center;
            p {
                color: ${props => props.theme.textColor};
                font-size: 16px;
                font-style: normal;
                font-weight: 500;
                line-height: 7px;
            }

            span {
                color: ${props => props.theme.textColor};
                font-size: 10px;
                font-style: normal;
                font-weight: 300;
                line-height: normal;
            }
        }
    }


    .middle-container {
        margin-bottom: 12px;
    }

    .bottom-container {
        border-top: 1px solid ${props => props.theme.borderColor};
        padding-top: 5px;

        .dropdown-item__wrapper {
            &:hover {
                background-color: transparent;
            }

            button {
                justify-content: center;
                padding: 10px;
            }
        }
    }
`;

export default StyledUserPanelInfo;