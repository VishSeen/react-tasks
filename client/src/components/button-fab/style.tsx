import { styled } from 'styled-components';

const StyledWrapper = styled.div`
  .btn-fab {
    height: 40px;
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    background-color: #ffd646;
    border: none;
    border-radius: 50%;
    box-shadow: 0px 3px 7px 0px rgba(0, 0, 0, 0.3);
    transition: all 0.3s ease-in-out;

    @media screen and (min-width: 992px) {
        width: 60px;
        height: 60px;
    }

    &:hover {
      cursor: pointer;
      background-color: #dcc03e;
    }
  }


  .btn-fab span {
    color: #323232;
    font-size: 20px;
    font-weight: 600;
    transition: 0.2s ease-in all;
    @media screen and (min-width: 992px) {
        font-size: 28px;
    }

    &.rotate {
        transform: rotate(45deg);
    }
  }
`;

export default StyledWrapper;