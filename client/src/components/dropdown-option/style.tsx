import styled from 'styled-components';

const StyledDropdown = styled.div`
    width: 200px;
    padding: 5px;
    display: none;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
    background-color: ${props => props.theme.background.body};
    border: 1px solid ${props => props.theme.color.border};
    border-radius: 8px;
    box-shadow: ${props => props.theme.boxShadow.dropdownOption};
    -webkit-box-shadow: ${props => props.theme.boxShadow.dropdownOption};
    -moz-box-shadow: ${props => props.theme.boxShadow.dropdownOption};

    &.visible {
        display: flex;
    }
`;


export default StyledDropdown;