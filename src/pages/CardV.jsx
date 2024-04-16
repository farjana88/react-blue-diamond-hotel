import { useLoaderData, useParams } from "react-router-dom";
// import { PropTypes } from 'prop-types';



const CardV = () => {
   
    const cards = useLoaderData()
    const {id} = useParams()
    const cardV = cards.find(card =>card.id==id)
    // const books = useLoaderData()
    // const {id} = useParams()
    // const bookDetails = books.find(book =>book.id==id)
    // const{image,bookName, author, category,review, tags, totalpages, yearOfPublishing, rating}=bookDetails

    

     const { image, estate_title, segment_name, price, area, description, location, facilities,  } = cards
    
    return (
        <div>
        <h2>card view</h2>
      
        <div className="max-w-xs p-6 rounded-md shadow-md bg-gray-900 text-gray-50">
	<img src={image} alt="" className="object-cover object-center w-full rounded-md h-72 bg-gray-500" />
	<div className="mt-6 mb-2">
		<span className="block text-xs font-medium tracking-widest uppercase text-violet-400">{segment_name}</span>
        <p>{id}</p>
		<h2 className="text-xl font-semibold tracking-wide">{estate_title}</h2>
        
        <h2>{location}</h2>
        <h2>{facilities}</h2>
	</div>
	<p className="text-gray-100">{description}.</p>
    <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-400">
						<span>{price}</span>
						<span>{area}</span>
					</div>
</div>
       
        </div>
    );
};



export default CardV;