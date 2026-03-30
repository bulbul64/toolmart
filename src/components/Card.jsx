

export default function Card({ tool }) {

  console.log(tool)
  return (
    <div className='relative w-64 p-6 py-12 bg-white rounded-xl shadow-md text-center'>
      {/* number */}
      <span className='absolute top-3 right-3 text-gray-400 font-bold'>{tool.id}</span>
      {/* icon */}
      <img
        src={tool.icon}
        alt='Card Icon'
        className='mx-auto w-12 h-12 mb-4'
      />

      {/* title */}
      <h3 className='text-lg font-semibold mb-2'>{tool.title}</h3>

      {/* description */}
      <p className='text-gray-600 text-sm'>
       {tool.description}
      </p>
    </div>
  );
}
