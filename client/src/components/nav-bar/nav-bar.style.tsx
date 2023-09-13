import { styled } from 'styled-components';

const StyledNav = styled.div`
    position: fixed;
    top: 1rem;
    left: 1rem;
    bottom: 1rem;
    width: 257px;
    padding: 20px;
    background-color: #323232;
    border-radius: 19px;
    z-index: 10;

    .nav-bar {
        height: 100%;
        width: 100%;
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
                color: #fff;
            }
        }
    }
`;


export default StyledNav;