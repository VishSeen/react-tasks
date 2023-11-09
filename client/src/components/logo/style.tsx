import { styled } from 'styled-components';


const StyledWrapper = styled.div<{
    className?: string
}>`
    .logo {
        &.dark {
            span {
                color: #323232;
            }
        }
        span {
            font-family: 'Fredoka', sans-serif;
            font-size: 32px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            color: #ffffff;
            transition: 0.2s ease-in-out all;
        }
    }
`

export default StyledWrapper;