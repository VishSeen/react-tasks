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
    const [btnCloseVisible, setBtnCloseVisible] = useState<boolean>(false);


    return (
        <StyledSearch className="search-bar-wrapper">
            <div className="btn-search">
                <ButtonIcon icon="search" clickEvent={btnSearchClick} />
            </div>

            <div className="input__search">
                <input
                    placeholder={title}
                    type="text"
                    name="search"
                    id="input-search"
                    onChange={inputChange}
                    onFocus={() => setBtnCloseVisible(!btnCloseVisible)}
                />
            </div>

            <div className={`btn-clear ${btnCloseVisible ? 'visible' : ''}`}>
                <ButtonIcon icon="close" size='mini' clickEvent={btnCloseClick} />
            </div>
        </StyledSearch>
    );
};




export default SearchBar;
