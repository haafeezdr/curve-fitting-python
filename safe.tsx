

// 'use client';
// import React from 'react';
// import Image from 'next/image';
// import { Button } from '../ui/button';
// import { Input } from '../ui/input';
// import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger,} from '../ui/dialog';
// import { useFlutterwave
//   // , closePaymentModal 
// } from 'flutterwave-react-v3';
// import  SelectCountry  from './SelectCountry';
// import { Checkbox } from '../ui/checkbox';
// import { Separator } from '../ui/separator';

// type CourseErollmentProps = {
//   course: any;
//   user: any;
// };

// const CourseEnrollment = ({ course, user }: CourseErollmentProps) => {
//   const config = {
//     public_key: process.env.NEXT_PUBLIC_FLUTTERWAVE_PUBLIC_KEY as string,
//     tx_ref: `MEMA_${Date.now()}`,
//     amount: course.price,
//     currency: 'NGN',
//     payment_options: 'card,mobilemoney,ussd',
//     customer: {
//       email: 'user@gmail.com',
//       phonenumber: '070********',
//       name: 'john doe',
//     },
//     meta: {
//       courseId: course.id,
//       userId: user?.id || 1,
//     },
//     customizations: {
//       title: 'MYMakaranta',
//       description: `Payment for ${course.title}`,
//       logo: 'https://res.cloudinary.com/dsmzgdshz/image/upload/v1719743104/Ma_gzb91f.png',
//     },
//   };
//   const handleFlutterPayment = useFlutterwave(config);

//   return (
//     <Dialog>
//       <DialogTrigger asChild>
//         <Button className='flex w-full border-2 border-gray-300 justify-center items-center py-2 hover:text-white text-sm bg-green-500 hover:bg-green-600 text-black rounded-lg cursor-pointer'>
//           Enroll Now
//         </Button>
//       </DialogTrigger>
//       <DialogContent className='lg:w-[1000px] w-[100%]'>
//         <div className='w-full border border-[#CAE1C2] p-2 rounded-md'>
//           <DialogTitle className='text-sm'>Check Out</DialogTitle>
//         </div>
//         <div className='w-full'>
//           <div className='flex lg:flex-row flex-col gap-3'>
//             <div className='lg:w-[60%] w-full flex-col'>
//               <div className='flex flex-col'>
//                 <h1 className='text-sm font-bold mb-2'>Billing address</h1>
//                   <div className='flex border border-[#CAE1C2] p-4 gap-5 rounded-md'>
//                     <div className=' flex flex-col w-full'>
//                       <h1 className='text-xs font-bold mb-1'>Country</h1>
//                       {/* <SelectCountry /> */}
//                     </div>
//                     <div className=' flex flex-col w-full'>
//                       <h1 className='text-xs font-bold mb-1'>Zip Code</h1>
//                       <Input
//                         type='text'
//                         placeholder='000-0000'
//                         className='w-full outline-none border border-[#CAE1C2]'
//                       />
//                     </div>
//                   </div>
//               </div>
//               <div className='flex flex-col mt-5'>
//                 <div className='flex justify-between'>
//                   <h1 className='text-sm font-bold mb-2'>Payment</h1>
//                   <h1 className='text-sm font-bold mb-2'>Secured Connection</h1>
//                 </div>
//                 <div className='border border-[#CAE1C2] rounded-md'>
//                   <div className=' w-full flex justify-between bg-[#CAE1C2] p-4'>
//                     <h1 className='text-xs font-bold '>Credit/Debit card</h1>
//                     <Image src='/images/card.png' alt='' width={50} height={20}/>
//                   </div>
//                   <div className='flex flex-col w-full p-4 gap-5'>
//                     <div className='flex flex-col w-full'>
//                       <h1 className='text-xs font-bold mb-1'>Name on card</h1>
//                       <Input
//                         type='text'
//                         className='w-full outline-none border border-[#CAE1C2]'
//                         placeholder='Daiyab Haafeez Ali'
//                       />
//                     </div>
//                     <div className='flex flex-col w-full'>
//                       <h1 className='text-xs font-bold mb-1'>Card Number</h1>
//                       <Input
//                         type='number'
//                         className='w-full outline-none border border-[#CAE1C2]'
//                         placeholder='0000-0000-0000-0000'
//                       />
//                     </div>
//                     <div className='flex w-full gap-3'>
//                       <div className='flex flex-col w-full'>
//                         <h1 className='text-xs font-bold mb-1'>Expiry Date</h1>
//                         <Input
//                           type='text'
//                           className='w-full outline-none border border-[#CAE1C2]'
//                           placeholder='MM/YY'
//                         />
//                       </div>
//                       <div className='flex flex-col w-full'>
//                         <h1 className='text-xs font-bold mb-1'>CVV</h1>
//                         <Input
//                           type='number'
//                           className='w-full outline-none border border-[#CAE1C2]'
//                           placeholder='***'
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className='flex justify-between mt-2'>
//                 <h1 className='text-xs font-bold'>Securely save this card for my later purchase</h1>
//                 <Checkbox />
//               </div>
//             </div>
//             <div className='lg:w-[40%] w-full flex flex-col gap-3 lg:mt-6'>
//               <div className='flex flex-col gap-3 border border-[#CAE1C2] rounded-md '>
//                 <Image src='/images/card.png' alt='' width={50} height={150} />
//                 <div className='p-2 bg-[#CAE1C2]'>
//                   <h1 className='text-sm mb-2 font-bold text-center'>The Complete UI/UX Design Course for beginners</h1>
//                   <div className='flex justify-around mb-2'>
//                     <h1 className='text-xs'>12 sections</h1>
//                     <h1 className='text-xs'>10 lessons</h1>
//                     <h1 className='text-xs'>5h 30m</h1>
//                   </div>
//                   <div className='flex p-2 gap-2'>
//                     <p className='text-xs font-bold text-green-600'>$100</p>
//                     <del className='text-xs'>$200</del>
//                   </div>
//                 </div>
//               </div>
//               <div className='flex flex-col gap-3 bg-[#CAE1C2] rounded-md p-3'>
//                 <div className='flex justify-between'>
//                   <h1 className='text-xs font-bold mt-2'>Original price</h1>
//                   <p className='text-xs font-bold'>$100</p>
//                 </div>
//                 <div className='flex justify-between'>
//                   <h1 className='text-xs font-bold mt-2'>Discount</h1>
//                   <p className='text-xs font-bold'>$50</p>
//                 </div>
//                 <Separator/>
//                 <div className='flex justify-between'>
//                   <h1 className='text-xs font-bold mt-2'>Sub-total</h1>
//                   <p className='text-xs font-bold'>$100</p>
//                 </div>
//                 <Separator/>
//                 <div className='flex justify-between'>
//                   <h1 className='text-xs font-bold mt-2'>Total</h1>
//                   <p className='text-xs font-bold'>$100</p>
//                 </div>
//               </div>
//               <div className=' mt-2'>
//                 <p className='text-xs '>By completing this purchase you agree to our terms and conditions</p>
//               </div>
//               <Button
//                   onClick={() => {
//                     handleFlutterPayment({
//                       callback: (response) => {
//                         console.log(response);
//                         // closePaymentModal(); // this will close the modal programmatically
//                       },
//                       onClose: () => {},
//                     });
//                   }}
//                 >
//               Completed Checkout
//             </Button>
//             </div>
//           </div>
//         </div>
//       </DialogContent>
//     </Dialog>
//   );
// };

// export default CourseEnrollment;
