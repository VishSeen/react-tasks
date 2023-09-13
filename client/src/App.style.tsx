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
`;


export default StyledApp;