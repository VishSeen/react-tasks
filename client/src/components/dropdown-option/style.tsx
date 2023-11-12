import styled from 'styled-components';

const StyledDropdown = styled.div`
    width: 200px;
    padding: 5px;
    display: none;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
    background-color: ${props => props.theme.backgroundColor};
    border: 1px solid ${props => props.theme.borderColor};
    border-radius: 8px;
    box-shadow: ${props => props.theme.boxShadow};
    -webkit-box-shadow: ${props => props.theme.boxShadow};
    -moz-box-shadow: ${props => props.theme.boxShadow};

    &.visible {
        display: flex;
    }
`;


export default StyledDropdown;