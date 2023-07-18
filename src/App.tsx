import { useForm, SubmitHandler, useFormState } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { CardDetailsSchema } from './models/CardDetailsSchema';
import {useState, ChangeEvent} from 'react';
import complete from './images/icon-complete.svg';
import { clear } from 'console';

function ThankYou(props: { clearForm: Function}) {
  return (
   <div className='flex flex-col items-center justify-center gap-8 w-full'>
    <img src={complete} alt='tick icon' />

    <div className="flex flex-col items-center gap-6 pb-4">
      <h1 className='uppercase text-3xl tracking-widest text-neutralVeryDarkViolet'>Thank You!</h1>
      <p className='text-neutralDarkGrayishViolet'>We've added your card details</p>
    </div>
    <button onClick={() => props.clearForm()} className='w-full bg-neutralVeryDarkViolet text-neutralWhite rounded-lg py-[.875rem]'>Continue</button>
   </div>
  )
}


function CardFront(props: {cardHolderName: string, cardNumber: string, expiryMonth: string, expiryYear: string}) {

  return (
    <div className="z-10 absolute rounded-xl h-[157px] w-[285px] left-4 -top-[7.25rem] lg:left-0 lg:top-64 lg:order-1 bg-[url('./images/bg-card-front.png')] py-4 px-[1rem]  lg:w-[445px] lg:h-[245px] aspect-video bg-no-repeat lg:py-6 lg:px-8 bg-cover flex flex-col justify-between text-neutralWhite shadow-lg">
      <div className="flex gap-2 lg:gap-4 items-center">
        <div className="w-8 h-8 rounded-full bg-neutralWhite lg:w-12 lg:h-12"></div>
        <div className="w-[16px] h-[16px] lg:w-[22px] lg:h-[22px] rounded-full border border-neutralWhite"></div>
      </div>
    <div className="flex flex-col gap-8">
        {props.cardNumber ?
        <p className="tracking-[2.25px] lg:tracking-[3.5px] text-lg lg:text-[1.75rem]">{props.cardNumber}</p>
        :
        <p className="tracking-[2.25px] lg:tracking-[3.5px] text-lg lg:text-[1.75rem]">0000 0000 0000 0000</p>
        }

        <div className="flex justify-between text-[0.625rem] lg:text-[0.875rem]">
          {props.cardHolderName ? 
          <p id="cardName" className="tracking-[0.75px] lg:tracking-[2px] uppercase">{props.cardHolderName}</p> :
          <p id="cardName" className="tracking-[0.75px] lg:tracking-[2px] uppercase">jane appleseed</p>
          }
          <div id="expiryMonth" className="tracking-[0.75px] lg:tracking-[2px] ">
            {props.expiryMonth ? 
              <span>{props.expiryMonth}</span> : "00"
            }
            /
            {props.expiryYear ?
              <span>{props.expiryYear}</span> : "00"
            }
          </div>
          
        </div>
      </div>
    </div>
  )
}

function CardBack(props: {cvc: string}) {
  return (
    <div className="absolute rounded-xl h-[157px] w-[285px] right-4 bottom-12 lg:left-24 lg:bottom-64 bg-[url('./images/bg-card-back.png')] py-4 px-[1.125rem] lg:w-[445px] lg:h-[245px] aspect-video bg-no-repeat bg-cover shadow-lg">
      <div className="absolute text-neutralWhite text-[0.625rem] lg:text-[0.875rem] tracking-[2px] right-[32px] top-[70px] lg:right-[58px] lg:top-[108px]">
        {props.cvc ? 
        <span>{props.cvc}</span> : <span>000</span>
        }
      </div>
    </div>
  )
}

function Banner() {
  return <div className="flex items-center justify-center bg-[url('./images/bg-main-mobile.png')] w-full h-[240px] bg-no-repeat bg-cover bg-center
      lg:bg-[url('./images/bg-main-desktop.png')] lg:h-full lg:row-start-1 lg:col-start-1 lg:col-span-3">
      </div>;
}


type CardDetails = z.infer<typeof CardDetailsSchema>

function App() {
  const [submitted, setSubmitted] = useState(false);

  const [cardHolderName, setCardHolderName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryMonth, setExpiryMonth] = useState('');
  const [expiryYear, setExpiryYear] = useState('');
  const [cvc, setCvc] = useState('');

  const {register, handleSubmit, trigger, reset, formState: {errors}} = useForm<CardDetails>({ resolver: zodResolver(CardDetailsSchema)});


  const onSubmit: SubmitHandler<CardDetails> = (data) => {
    // show success page
    setSubmitted(true);
  }

  function clearForm() {
    setSubmitted(false);
    reset();
  }

  let expiryError;

  if (errors.cardExpiryMonth || errors.cardExpiryYear) {
    expiryError = "Cannot be blank";
  }


  return (
    <div className="min-h-screen flex flex-col 
    lg:grid grid-cols-9 lg:h-full">
      <Banner />
      <div className="lg:col-start-2 lg:row-start-1 lg:col-span-3 h-full w-full flex flex-col justify-center items-center relative">
        <CardFront 
        cardHolderName={cardHolderName} cardNumber={cardNumber} expiryMonth={expiryMonth} expiryYear={expiryYear}/>
        <CardBack cvc={cvc}/>
      </div>


      <div className=" flex items-center justify-center
      lg:h-full lg:col-start-6 lg:col-span-3 pt-20 mx-6">
        {submitted ? (
          <ThankYou clearForm={clearForm} />
        ) :
        (
          
        <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col gap-3">

          {/* CARDHOLDER NAME & NUMBER */}
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="cardholderName" className="uppercase text-[0.75rem] tracking-[2px] text-neutralVeryDarkViolet">Cardholder Name</label>
            <input {...register("cardholderName")} 
            onChange={e => setCardHolderName(e.target.value)}
            type="text" name="cardholderName" placeholder="e.g. Jane Appleseed" className={`border rounded-lg px-4 py-2 w-full border-neutralLightGrayishViolet outline-none focus:border-endGradient placeholder:text-neutralLightGrayishViolet ${errors.cardholderName ? 'border-primaryRed':''}`}/>
            {errors.cardholderName && <p className='text-primaryRed text-[0.75rem]'>{errors.cardholderName.message}</p>}
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="cardNumber" className="uppercase text-[0.75rem] tracking-[2px] text-neutralVeryDarkViolet">Card Number</label>
            <input {...register("cardNumber")} onChange={e => setCardNumber(e.target.value)} type="text" name="cardNumber" maxLength={19} placeholder="e.g. 1234 5678 9123 0000" className={`border rounded-lg px-4 py-2 w-full border-neutralLightGrayishViolet outline-none focus:border-endGradient placeholder:text-neutralLightGrayishViolet ${errors.cardNumber ? 'border-primaryRed':''}`}/>
            {errors.cardNumber && <p className='text-primaryRed text-[0.75rem]'>{errors.cardNumber.message}</p>}
          </div>

          {/* EXP DATE & CVC */}
          <div className="flex gap-3 pb-3"> 
            <div className="flex flex-col gap-2">
              <label htmlFor="cardExpiryMonth" className="uppercase text-[0.75rem] tracking-[2px] text-neutralVeryDarkViolet">EXP. DATE (MM/yy)</label>
              <div className='flex w-[180px] flex-col gap-2'>
                  <div className='flex gap-2'>
                    <input {...register("cardExpiryMonth")} onChange={e => setExpiryMonth(e.target.value)} type="text" name="cardExpiryMonth" maxLength={2} placeholder="MM" className={`w-[50%] border rounded-lg px-4 py-2 border-neutralLightGrayishViolet outline-none focus:border-endGradient placeholder:text-neutralLightGrayishViolet ${errors.cardExpiryMonth ? 'border-primaryRed':''}`}/>
                    <input {...register("cardExpiryYear")} onChange={e => setExpiryYear(e.target.value)} type="text" name="cardExpiryYear" maxLength={2} placeholder="YY" className={`w-[50%] border rounded-lg px-4 py-2 border-neutralLightGrayishViolet outline-none focus:border-endGradient placeholder:text-neutralLightGrayishViolet ${errors.cardExpiryYear ? 'border-primaryRed' : ''}`}/>
                  </div>
                  
                  {expiryError && <p className='text-primaryRed text-[0.75rem]'>{expiryError}</p>}
              </div>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="cardCVC" className="uppercase text-[0.75rem] tracking-[2px] text-neutralVeryDarkViolet">CVC</label>
              <input {...register("cardCVC")} onChange={e => setCvc(e.target.value)} type="text" name="cardCVC" maxLength={3} placeholder="e.g. 123" className={`border rounded-lg px-4 py-2 w-full border-neutralLightGrayishViolet outline-none focus:border-endGradient placeholder:text-neutralLightGrayishViolet ${errors.cardCVC ? 'border-primaryRed':''}`}/>
              {errors.cardCVC && 
              <p className='text-primaryRed text-[0.75rem]'>{errors.cardCVC.message}</p>}
            </div>
          </div>
          <button type='submit' className="py-[.875rem] bg-neutralVeryDarkViolet text-neutralWhite rounded-lg">Submit</button>
        </form>
        )}
      </div>
    </div>
    
  );
}

export default App;

// ESTIMATED TIME TO COMPLETE: 3 - 5 HOURS.
// START @ 12:45PM - 2:10PM
// RESUME @ 3:07PM - 4:07PM
// RESUME @ 5:06PM -