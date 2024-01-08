import styled from 'styled-components';

const StyledDropdownItem = styled.div`
    width: 100%;
    border-radius: 5px;
    transition: 0.2s all ease-in-out;
    &:hover {
        background-color: ${props => props.theme.hover.dropdownItem};
    }

    button {
        width: 100%;
        padding: 8px 12px;
        display: flex;
        align-items: center;
        color: ${props => props.theme.color.text.textColor};
        opacity: 0.8;

        .icon {
            font-size: 18px;
            font-weight: bold;
            color: ${props => props.theme.color.text.textColor};
            margin-right: 6px;
        }

        .text {
            font-size: 12px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
        }
    }
`;

export default StyledDropdownItem;