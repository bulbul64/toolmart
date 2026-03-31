export default function Card({ tool }) {
  return (
    <div className='relative w-64 p-6 py-10 bg-white rounded-2xl border border-gray-100 shadow-sm text-center transition duration-300 '>
      <span className='absolute top-4 right-4 text-xs font-bold text-gray-300'>{tool.id}</span>

      <div className='flex items-center justify-center w-14 h-14 mx-auto mb-4 rounded-full bg-gray-50'>
        <img
          src={tool.icon}
          alt='Card Icon'
          className='w-8 h-8 object-contain'
        />
      </div>

      <h3 className='text-lg font-semibold text-gray-800 mb-2'>{tool.title}</h3>

      <p className='text-gray-500 text-sm leading-relaxed'>{tool.description}</p>
    </div>
  );
}
