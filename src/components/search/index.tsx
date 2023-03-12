import { useRef, memo } from "react"
import { Button, TextField } from "@mui/material"
import './index.scss';

const Search = memo(({ onSearch }: {onSearch: (value: string) => void}) => {
  const input = useRef<any>();

  return (
    <div className="search_container">
        <TextField 
            label="Enter username"
            variant="filled"
            inputRef={input}
            className='search_input'
        />
        <Button variant="contained" onClick={() => onSearch(input?.current?.value || '')}>Search</Button>
    </div>
  )
});

export default Search
