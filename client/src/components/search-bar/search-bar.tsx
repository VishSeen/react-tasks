import React from "react";
import styled from "styled-components";

export type SearchBarProps = {
    title?: string;
    searchHandler?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

type BtnSearchProps = {
    icon: string;
    clickEvent?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}


const BtnSearch: React.FC<BtnSearchProps> = ({
    icon,
    clickEvent
}) => {
    return (
        <button onClick={clickEvent}>
            <span className="material-icons">
                {icon}
            </span>
        </button>
    );
}

const SearchBar: React.FC<SearchBarProps> = ({
    title = "Search here ..",
    searchHandler
}) => {
    return (
        <StyledWrapper className="search-bar-wrapper">
            <div className="btn__search-bar">
                <BtnSearch icon="search" clickEvent={searchHandler} />
            </div>

            <div className="input__search">
                <input placeholder={title} type="text" name="search" id="input-search" />
            </div>
        </StyledWrapper>
    );
};


const StyledWrapper = styled.div<{ className?: string }>`
    background: #F1F6F9;
    width: 35rem;
    height: 50px;
    display: flex;
    align-items: center;
    padding: 0 20px 0 10px;
    border-radius: 50px;

    .btn__search-bar button {
        border: none;
        color: #323232;
        background-color: transparent;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 6px;

        :hover {
            cursor: pointer;
        }
    }


    .input__search  {
        height: 50px;
        width: 100%;
        display: flex;
        align-items: center;
        :hover {
            cursor: pointer;
        }
    }

    .input__search input {
        background-color: transparent;
        border: none;
        height: 100%;
        width: 100%;
        outline-width: 0px;
        font-size: 16px;
        font-family: 'Poppins', sans-serif;

        :focus-visible {
            outline-width: 0px;
        }
    }
`;

export default SearchBar;
