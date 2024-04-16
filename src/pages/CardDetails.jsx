
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';


const CardDetails = ({cards}) => {

    const { image, estate_title, segment_name, price, area, description,id } = cards;
    return (
        <div>
       <section className="py-6 sm:py-12 text-gray-100">
	<div className="container p-6 mx-auto space-y-8">
		
		<div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
			<article className="flex flex-col bg-gray-900">
				<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
					<img  src={image} />
				</a>
				<div className="flex flex-col flex-1 p-6">
					<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
					<a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline text-violet-400">{segment_name}</a>
					<h3 className="flex-1 py-2 text-lg font-semibold leading-snug">{estate_title}</h3>
                    {
                        description.length > 20
                        ? <p>{description.slice(0,20)} <Link 
                        to={`/cards/${id}`}
                        className='text-blue-600 font-bold'>View Details...</Link></p>
                        : <p>{description}</p>
                    }
					<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-400">
						<span>{price}</span>
						<span>{area}</span>
					</div>
				</div>
			</article>
			
			{/* <article className="flex flex-col bg-gray-900">
				<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
					<img alt="" className="object-cover w-full h-52 bg-gray-500" src="https://source.unsplash.com/200x200/?fashion?3" />
				</a>
				<div className="flex flex-col flex-1 p-6">
					<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
					<a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline text-violet-400">Convenire</a>
					<h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Te nulla oportere reprimique his dolorum</h3>
					<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-400">
						<span>June 3, 2020</span>
						<span>2.3K views</span>
					</div>
				</div>
			</article> 
			<article className="flex flex-col bg-gray-900">
				<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
					<img alt="" className="object-cover w-full h-52 bg-gray-500" src="https://source.unsplash.com/200x200/?fashion?3" />
				</a>
				<div className="flex flex-col flex-1 p-6">
					<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
					<a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline text-violet-400">Convenire</a>
					<h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Te nulla oportere reprimique his dolorum</h3>
					<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-400">
						<span>June 3, 2020</span>
						<span>2.3K views</span>
					</div>
				</div>
			</article>  */}
			
		</div>
	</div>
</section>
        </div>
    );
};

CardDetails.propTypes={
    cards:PropTypes.node,
}

export default CardDetails;