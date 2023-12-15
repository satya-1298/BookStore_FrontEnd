import React from 'react'
import book1 from '../Asserts/book22.png'
import './BookOne.css'
import { Button } from '@mui/material'
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

function BookOne(props) {
    const [value, setValue] = React.useState(2);

    return (
        <div className='Main-O'>
            <div className='container'>
                <div>
                    <div>
                        <img src={props.data.images} className='img-o' />
                    </div>
                    <div>
                        <Button id='addtobag' type='submit' variant='contained'>ADD TO BAG</Button>

                        <Button id='wishlist' type='submit' variant='contained'> <div className='symbol'>&#10084;</div> WISHLIST</Button>

                    </div>
                </div>
                <div className='detail-o'>

                    <div className='title-o'><b>{props.data.title}</b></div>
                    <div className='author-o'>{props.data.author}</div>
                    <div className='rating-o'>
                        <div className='rating-bno' ><b>4.3 &#9733;</b></div>
                        <div className='stock' >({props.data.quantityInStock})</div>
                    </div>
                    <div className='price-o'>
                        <div className='price-rs'><b>Rs. {props.data.price} </b></div>
                        <div className='discount-o'>Rs. {props.data.discount}</div>
                    </div>
                    <div className='horizon'><hr /></div>

                    <div style={{ color: 'grey', marginTop: '3ch' }}>&#9673; Book Detail</div>
                    <div className='discription-o'>{props.data.description}</div>
                    <div className='horizon'><hr /></div>
                    <div className='cutsom-o'>Customer Feedback</div>

                    <div className='overall-o'>
                        <div className='ov-heading'> Overall rating</div>
                        <div className='star-o'>
                            <Typography component="legend"></Typography>
                            <Rating
                                name="simple-controlled"
                                value={value}
                                onChange={(event, newValue) => {
                                    setValue(newValue);
                                }}
                            />
                        </div>
                        <div className='writereview'>Write your review</div>
                        <div id='submit-o'>
                            <Button type='submit' variant='contained'>Submit</Button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default BookOne