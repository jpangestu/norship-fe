import Image from 'next/image';
import noImage from '../public/noImage.svg';

export default function CardProduct({ data }: { data: any }) {
 console.log(data);
 return (
  <div className="card bg-base-100 w-[20%] h-96 shadow-sm">
   <figure>
    <Image
     src={noImage}
     alt="Image Product"
     className="object-cover"
    />
   </figure>
   <div className="card-body">
    <h2 className="card-title line-clamp-1 text-pretty">{data.name}</h2>
    <p className="h-20 w-full line-clamp-4 text-left">{data.description}</p>
    <div className="card-actions justify-end">
     <button className="flex justify-center items-center w-10 h-10 rounded-full hover:bg-gray-500">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
     </button>
    </div>
   </div>
  </div >
 );
}