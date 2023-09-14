import {styled} from 'styled-components';


const StyledApp = styled.div<{
    className?: string;
    accessibleVariant?: string;
}>`
    .main-wrapper {
        padding-left: 286px;
        padding-top: 12px;
    }

    .main-wrapper__top-bar {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .main-wrapper__top-bar__right {
        display: flex;
        align-items: center;

        .btn-theme {
            width: 45px;
            height: 45px;
            border-radius: 50%;
            background-color: #eff4f7;
            color: #323232;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-left: 10px;
        }
    }
`;


export default StyledApp;