import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import book1 from '../Asserts/book1.png'
import './Book.css'

export default function Book(props) {
    return (
        <div onClick={()=>{
            props.id(props.data)
        }} >
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        m: 1,
                        width: 128,
                        height: 128,
                    },
                }}
            >
                <Paper elevation={7}  id='paper-book' >
                    <div>
                        <div className='img-div'>
                            <img src={props.data.images} className='img-book' ></img>
                        </div>
                        <div className='description-book'>

                            <div><b>{props.data.title}</b></div>
                            <div className='author'>{props.data.author}</div>
                            <div className='rating'>
                                <div  className='rating-no' ><b>4.3 &#9733;</b></div>
                                <div style={{fontSize:'small',marginTop:'1ch'}}>({props.data.quantityInStock})</div>
                            </div>
                            <div className='price-b'>
                            <div><b>Rs. {props.data.price}</b></div>
                            <div className='discount'>Rs.{props.data.discount}</div>
                            </div>
                        </div>
                    </div>

                </Paper>

            </Box>
        </div>
    );
}