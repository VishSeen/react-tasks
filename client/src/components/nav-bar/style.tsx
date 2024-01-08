import { styled } from 'styled-components';

const StyledNav = styled.div`
    width: 257px;
    padding: 35px 20px;
    background-color: ${props => props.theme.background.navBar};
    border-radius: 19px;
    z-index: 10;

    .nav-bar {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        &.btn-icon-nav {
            button {
                opacity: 1;
            }

            button span {
                color: ${props => props.theme.background.white};
            }
        }
    }

    .nav-bar__top-bar {
        display: flex;
            align-items: flex-end;

        .btn-nav {
            margin-right: 16px;
            background-color: transparent;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 4px;

            span {
                color: ${props => props.theme.color.dark};
            }
        }
    }

    .nav-bar__center-bar {
        height: 100%;
    }
`;


export default StyledNav;