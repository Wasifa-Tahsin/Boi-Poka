import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToStoredReadList } from '../../Utility/AddT0DB';

const BookDetail = () => {

    const {bookId}=useParams()
    const id=parseInt(bookId)

    const data=useLoaderData()

    const book=data.find(book=>book.bookId===id)
    // console.log(book);

    const {bookId : currentBookId,image}=book


    const handleMarkAsRead=(id)=>{

      addToStoredReadList(id)
    }


    return (
        <div className='my-12'>
          <h2>BookDetails :{bookId}</h2>  
          <img className='w-36 ' src={image} alt="" />
          <br></br>
          <button onClick={()=>handleMarkAsRead(bookId)} className='btn btn-outline mr-4 btn-accent'> Mark as Read</button>
          <button className='btn btn-accent'> Add to WhishList</button>
        </div>
    );
};

export default BookDetail;