export default function ProductCard({ product, cart, setCart }) {

  return (
    <div className='p-4 bg-white shadow-md rounded-lg overflow-hidden border border-gray-200'>
      <div className='p-6 flex flex-col'>
        {/* category */}
        <div className='flex justify-between items-center mb-4'>
          <div className='bg-gray-100 p-2 rounded-lg'>
            <img
              src={product.image}
              alt={product.name}
              className='w-8 h-8 object-contain'
            />
          </div>

          <span className='text-xs font-semibold px-2 py-1 rounded bg-yellow-100 text-yellow-700'>
            {product.category}
          </span>
        </div>
        {/* title and price */}
        <div className='flex justify-between items-center'>
          <h2 className='text-2xl font-bold'>{product.name}</h2>
        </div>
        <span className='text-xl font-semibold mt-2'>
          ${product.price.amount}/{product.price.duration}
        </span>

        {/*  description */}
        <p className='text-gray-600 mt-3'>{product.description}.</p>

        <ul className='mt-4 flex flex-col gap-2 text-sm'>
          {product.features.map((feature, i) => {
            return (
              <li
                key={i}
                className='flex items-center'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-4 h-4 mr-2 text-green-500 shrink-0'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M5 13l4 4L19 7'
                  />
                </svg>
                <span>{feature}</span>
              </li>
            );
          })}
        </ul>

        {/* buy now */}
        <div className='mt-6'>
          <button
            onClick={() => setCart((previous) => [...previous, product])}
            className='w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition'
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}
