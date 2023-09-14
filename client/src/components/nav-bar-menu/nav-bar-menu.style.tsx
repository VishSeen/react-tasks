import {styled} from 'styled-components';


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
            color: #fff;
            display: flex;
            align-items: center;
            font-size: 14px;
            padding: 10px;
            border-radius: 4px;
            transition: 0.3s ease-in all;

            &.active {
                color: ${props => props.theme.accentColor};
                background-color: #ffffff12;
            }

            span {
                font-size: 18px;
                margin-right: 16px;
            }
        }
    }
`;

export default StyledNavBarMenu;

