import React from 'react';
import './search.css';
import Container from "react-bootstrap/Container";

const SearchBox=({searchfeild, searchChange})=>{
    return(
        <Container>
            <div className='pa3'>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <input 
                className='pa2 ba'
                 type="search" id='search_field'
                 placeholder='Search User' 
                 onChange={searchChange}/>
                 <br></br><br></br> <br></br><br></br>
            </div>
            </Container>
        );
}

export default SearchBox;