import { styled } from 'styled-components';

const StyledSearch = styled.div<{ className?: string }>`
    background-color: ${props => props.theme.backgroundSearchColor};
    width: 100%;
    height: 34px;
    display: flex;
    align-items: center;
    padding: 0 10px;
    border-radius: 50px;
    @media screen and (min-width: 992px) {
        width: 35rem;
        height: 45px;
    }


    .input__search  {
        height: 34px;
        width: 100%;
        display: flex;
        align-items: center;
        @media screen and (min-width: 992px) {
            height: 45px;
        }

        :hover {
            cursor: pointer;
        }
    }


    .input__search input {
        background-color: transparent;
        border: none;
        height: 100%;
        width: 100%;
        outline-width: 0px;
        color:  ${props => props.theme.textColor};
        font-size: 12px;
        font-family: 'Poppins', sans-serif;
        :focus-visible {
            outline-width: 0px;
        }

        @media screen and (min-width: 992px) {
            font-size: 14px;
        }
    }


    .btn-clear {
        display: none;
        &.visible {
            display: block;
        }
    }
`;


export default StyledSearch;