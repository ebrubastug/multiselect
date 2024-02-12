import React from "react";
import { TextField, Autocomplete, MenuItem } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import Httper from "../lib/api";

const url = "https://rickandmortyapi.com/api/character";
var res = await Httper("get", url);

const data = res.map((item) => item);

function Select() {
  return (
    <div>
      <Autocomplete
        sx={{ m: 1, width: 500 }}
        multiple
        options={data}
        getOptionLabel={(option) => option?.name}
        disableCloseOnSelect
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            label="Rick and Morty"
            placeholder="Multiple Autocomplete"
          />
        )}
        renderOption={(props, option, { selected }) => (
          <MenuItem
            {...props}
            key={option?.id}
            value={option?.name}
            selectedValue={option?.name}
            sx={{ justifyContent: "space-between" }}
          >
            {selected ? <CheckIcon color="info" /> : null}
            {
              <img
                src={option?.image}
                width={50}
                height={50}
                style={{ margin: "5px" }}
              ></img>
            }
            {option?.name} <br />
            {option?.episode?.length} Episode
          </MenuItem>
        )}
      />
    </div>
  );
}
export default Select;
