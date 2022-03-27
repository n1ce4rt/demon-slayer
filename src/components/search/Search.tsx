import {TextField} from "@mui/material";

type propsType = {
    searchHero: (name: string) => void
}
export const Search = ({searchHero}: propsType) => {
    return (
        <TextField
            id="filled-search"
            label="Search"
            type="search"
            variant="outlined"
            onChange={(e) => searchHero(e.currentTarget.value)}
        />
    )
}