// import { ShoppingCart } from 'lucide-react';
// import React from 'react'



// export default function Navbar() {

//   const NavLink = [
//     {
//       name: 'Products',
//       path: '/products',
//     },
//     {
//       name: 'Features',
//       path: '/features',
//     },
//     {
//       name: 'Pricing',
//       path: '/pricing',
//     },
//     {
//       name: 'Testimonials',
//       path: '/testimonials',
//     },
//     {
//       name: 'FAQ',
//       path: '/faq',
//     },
//   ];
  
//   return (
//     <div className='navbar bg-base-100 '>
//       <div className='navbar-start'>
//         <div className='dropdown'>
//           <div
//             tabIndex={0}
//             role='button'
//             className='btn btn-ghost lg:hidden'
//           >
//             <svg
//               xmlns='http://www.w3.org/2000/svg'
//               className='h-5 w-5'
//               fill='none'
//               viewBox='0 0 24 24'
//               stroke='currentColor'
//             >
//               {' '}
//               <path
//                 strokeLinecap='round'
//                 strokeLinejoin='round'
//                 strokeWidth='2'
//                 d='M4 6h16M4 12h8m-8 6h16'
//               />{' '}
//             </svg>
//           </div>
//           <ul
//             tabIndex='-1'
//             className='menu menu-sm dropdown-content bg-base-100 rounded-box text-[#101727] z-1 mt-3 w-52 p-2 shadow flex'
//           >
//             {NavLink.map((link) => {
//               return (
//                 <li key={link.name}>
//                   <a
//                     href={link.path}
//                     className='btn'
//                   >
//                     {link.name}
//                   </a>
//                 </li>
//               );
//             })}
//           </ul>
//         </div>
//         <a className='btn btn-ghost text-xl custom-text-primary font-bold'>ToolMart</a>
//       </div>
//       <div className='navbar-center hidden lg:flex'>
//         <ul className='menu menu-horizontal px-1 font-semibold text-[#101727]'>
//           {NavLink.map((link) => {
//             return (
//               <li key={link.name}>
//                 <a href=''>{link.name}</a>
//               </li>
//             );
//           })}
//         </ul>
//       </div>
//       <div className='navbar-end flex gap-3 items-center'>
//         <a
//           role='button'
//           className='btn btn-ghost font-semibold'
//         >
//           <ShoppingCart size={16} />
//           Link
//         </a>
//         <a className='btn custom-btn-primary rounded-full text-white'>Get Started</a>
//       </div>
//     </div>
//   );
// }
