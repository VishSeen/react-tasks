import React from "react";
import styled from "styled-components";

type SearchBarProps = {
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
    title = "Search Button",
    searchHandler
}) => {
    return (
        <StyledWrapper className="search-bar-wrapper">
            <div className="search-bar">
                <BtnSearch icon="search" clickEvent={searchHandler} />
            </div>
        </StyledWrapper>
    );
};


const StyledWrapper = styled.div<{ className?: string }>`
  background: red;
`;

export default SearchBar;
