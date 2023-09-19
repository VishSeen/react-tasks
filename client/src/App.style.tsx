import {styled} from 'styled-components';


const StyledApp = styled.div<{
    className?: string;
    accessibleVariant?: string;
}>`
    .main-wrapper {
        padding-left: 286px;
        padding-top: 27px;
    }

    .top-bar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 18px;
        position: fixed;
    }

    .top-bar__right {
        display: flex;
        align-items: center;

        .btn-theme {
            width: 45px;
            height: 45px;
            border-radius: 50%;
            background-color: ${props => props.theme.backgroundSearchColor};
            color: ${props => props.theme.textColor};
            display: flex;
            align-items: center;
            justify-content: center;
            margin-left: 10px;

            span {
                color: ${props => props.theme.textColor};
            }
        }
    }
`;


export default StyledApp;