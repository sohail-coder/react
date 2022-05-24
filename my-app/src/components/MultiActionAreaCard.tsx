import * as React from 'react';
import { Button } from '@mui/material';
import './styles/MultiActionAreaCard.css';
import AccessTimeSharpIcon from '@mui/icons-material/AccessTimeSharp';
import PersonOutlineSharpIcon from '@mui/icons-material/PersonOutlineSharp';
import AddIcon from '@mui/icons-material/Add';

interface CardDetails {
  img:string,
  title: string;
  author:string,
  read:string,
  popularity:string
}



const MultiActionAreaCard=({...book}:CardDetails)=>{
  return (
    <div className="card">
      <img src={book.img} alt="Avatar" />
      <div className="container">
        <p className='title'>{book.title}</p>
        <p className='card_author'>{book.author}</p>
        <div className='info'>
          <div className='info1'>
            <div className="extra_content">
              <AccessTimeSharpIcon style={{
                left: "8.33%",
                right: "8.33%",
                top: "8.33%",
                bottom: "8.33%",
                }}/>
            </div>
            <div className="extra_content">
              <p className='info_read'>{book.read}</p>
            </div>
          </div>

          <div className="info2">
            <div className="popularity">
              <PersonOutlineSharpIcon/>
            </div>
            <div className="popularity">
              <p className='info_read'>{book.popularity}</p>
            </div>
          </div>
        </div>
     
      </div>
      
      <div className="button">
        <Button variant="text"
        sx={{
          ':hover': {
            bgcolor: 'primary.main',
            color: 'white',
          },
        }}
        startIcon={<AddIcon/>}
        style={{width:"100%"}}>Add to library</Button>
      </div>
  </div>
  );
}
export default MultiActionAreaCard;
