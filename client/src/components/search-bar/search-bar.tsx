import React from "react";
import styled from "styled-components";
import StyledSearch from "./search-bar.style";
import { SearchBarProps } from "../../types/ComponentProps";



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
            <span className="material-symbols-rounded">
                {icon}
            </span>
        </button>
    );
}

const SearchBar: React.FC<SearchBarProps> = ({
    title = "Search here .. ",
    onChange,
    onBtnClick
}) => {
    return (
        <StyledSearch className="search-bar-wrapper">
            <div className="btn__search-bar">
                <BtnSearch icon="search" clickEvent={onBtnClick} />
            </div>

            <div className="input__search">
                <input onChange={onChange} placeholder={title} type="text" name="search" id="input-search" />
            </div>
        </StyledSearch>
    );
};




export default SearchBar;
