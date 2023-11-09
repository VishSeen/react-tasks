import React, { FunctionComponent, useState } from "react";
import StyledSearch from "./style";
import { SearchBarProps } from "../../types/ComponentProps";
import ButtonIcon from "../button-icon/button-icon";

const SearchBar: FunctionComponent<SearchBarProps> = ({
    title = "Search here .. ",
    inputChange,
    btnSearchClick,
    btnCloseClick
}) => {
    const [searchText, setSearchtext] = useState<String>('');

    return (
        <StyledSearch className="search-bar-wrapper">
            <div className="btn-search-bar">
                <ButtonIcon icon="search" clickEvent={btnSearchClick} />
            </div>

            <div className="input__search">
                <input onChange={inputChange} placeholder={title} type="text" name="search" id="input-search" />
            </div>

            <div className="btn-clear">
                <ButtonIcon icon="close" clickEvent={btnCloseClick} />
            </div>
        </StyledSearch>
    );
};




export default SearchBar;
