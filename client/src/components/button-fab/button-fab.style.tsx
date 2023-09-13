import { styled } from 'styled-components';

const StyledWrapper = styled.div<{
    className?: string
 }>`
  position: fixed;
  bottom: 1rem;
  right: 1rem;

  @media screen and (min-width: 992px) {
    bottom: 2rem;
    right: 2rem;
  }

  .btn-fab {
    height: 50px;
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    background-color: #ffd646;
    border: none;
    border-radius: 50%;
    box-shadow: 0px 3px 7px 0px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease-in-out;

    &:hover {
      cursor: pointer;
      background-color: #dcc03e;
    }

    @media screen and (min-width: 992px) {
      width: 60px;
      height: 60px;
    }
  }

  .btn-fab span {
    color: #323232;
    font-weight: 600;
    transition: 0.2s ease-in all;

    &.rotate {
        transform: rotate(45deg);
    }
  }
`;

export default StyledWrapper;