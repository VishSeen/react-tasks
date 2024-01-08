import { styled } from 'styled-components';


const StyledNavBarMenu = styled.nav<{
    className: string;
}>`
    .nav-bar__menu {
        margin-top: 100px;
        li {
            width: 100%;
            margin: 7px 0;
        }

        a {
            color: ${props => props.theme.color.white};
            display: flex;
            align-items: center;
            font-size: 14px;
            padding: 10px;
            border-radius: 4px;
            transition: 0.3s ease-in all;
            &:hover {
                    color: ${props => props.theme.color.accent};

                span.material-symbols-rounded {
                    color: ${props => props.theme.color.accent};
                    font-variation-settings:
                    'FILL' 1,
                    'wght' 400,
                    'GRAD' 0,
                    'opsz' 24
                }
            }

            &.active {
                color: ${props => props.theme.color.accent};
                background-color: ${props => props.theme.hover.navMenuItem};

                span.material-symbols-rounded {
                    color: ${props => props.theme.color.accent};
                    font-variation-settings:
                    'FILL' 1,
                    'wght' 400,
                    'GRAD' 0,
                    'opsz' 24
                }
            }

            span.material-symbols-rounded {
                font-size: 18px;
                margin-right: 16px;
                margin-bottom: 1px;
                transition: 0.2s ease-in-out all;
            }
        }
    }
`;

export default StyledNavBarMenu;

