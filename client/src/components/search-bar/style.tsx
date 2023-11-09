import { styled } from 'styled-components';

const StyledSearch = styled.div<{ className?: string }>`
    background-color: ${props => props.theme.backgroundSearchColor};
    width: 35rem;
    height: 45px;
    display: flex;
    align-items: center;
    padding: 0 10px;
    border-radius: 50px;

    .btn-icon button {
        border: none;
        color: ${props => props.theme.textColor};
        opacity: 0.5;
        background-color: transparent;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 6px;

        :hover {
            cursor: pointer;
        }
    }


    .input__search  {
        height: 50px;
        width: 100%;
        display: flex;
        align-items: center;
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
        font-size: 14px;
        font-family: 'Poppins', sans-serif;
        :focus-visible {
            outline-width: 0px;
        }

        @media screen and (min-width: 992px) {
            font-size: 14px;
        }
    }
`;

export default StyledSearch;