
function CardFront() {
  return (
    <div className="z-10 absolute rounded-xl h-[157px] w-[285px] left-4 -top-[7.25rem] lg:left-0 lg:top-64 lg:order-1 bg-[url('./images/bg-card-front.png')] py-4 px-[1rem]  lg:w-[445px] lg:h-[245px] aspect-video bg-no-repeat lg:py-6 lg:px-8 bg-cover flex flex-col justify-between text-neutralWhite shadow-lg">
      <div className="flex gap-2 lg:gap-4 items-center">
        <div className="w-8 h-8 rounded-full bg-neutralWhite lg:w-12 lg:h-12"></div>
        <div className="w-[16px] h-[16px] lg:w-[22px] lg:h-[22px] rounded-full border border-neutralWhite"></div>
      </div>
      <div className="flex flex-col gap-4">
        <p className="tracking-[2.25px] lg:tracking-[3.5px] text-lg lg:text-[1.75rem]">0000 0000 0000 0000</p>
        <div className="flex justify-between text-[0.625rem] lg:text-[0.875rem]">
          <p id="cardName" className="tracking-[0.75px] lg:tracking-[2px] uppercase">jane appleseed</p>
          <p id="cardCvc" className="tracking-[0.75px] lg:tracking-[2px] ">00/00</p>
        </div>
      </div>
    </div>
  )
}

function CardBack() {
  return (
    <div className="absolute rounded-xl h-[157px] w-[285px] right-4 bottom-12 lg:left-24 lg:bottom-64 bg-[url('./images/bg-card-back.png')] py-4 px-[1.125rem] lg:w-[445px] lg:h-[245px] aspect-video bg-no-repeat bg-cover shadow-lg">
      <div className="absolute text-neutralWhite text-[0.625rem] lg:text-[0.875rem] tracking-[2px] right-[32px] top-[70px] lg:right-[58px] lg:top-[108px]">000</div>
    </div>
  )
}

function Banner() {
  return <div className="flex items-center justify-center bg-[url('./images/bg-main-mobile.png')] w-full h-[240px] bg-no-repeat bg-cover bg-center
      lg:bg-[url('./images/bg-main-desktop.png')] lg:h-full lg:row-start-1 lg:col-start-1 lg:col-span-3">
      </div>;
}

function App() {
  return (
    <div className="min-h-screen flex flex-col 
    lg:grid grid-cols-9 lg:h-full">
      <Banner />
      <div className="lg:col-start-2 lg:row-start-1 lg:col-span-3 h-full w-full flex flex-col justify-center items-center relative">
        <CardFront />
        <CardBack />
      </div>


      <div className=" flex items-center justify-center
      lg:h-full lg:col-start-6 lg:col-span-3 pt-20 mx-6">
        <form action="" className="w-full flex flex-col gap-3">

          {/* CARDHOLDER NAME & NUMBER */}
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="cardholderName" className="uppercase text-[0.75rem] tracking-[2px] text-neutralVeryDarkViolet">Cardholder Name</label>
            <input type="text" name="cardholderName" placeholder="e.g. Jane Appleseed" className="border rounded-lg px-4 py-2 w-full border-neutralLightGrayishViolet outline-none focus:border-endGradient placeholder:text-neutralLightGrayishViolet"/>
          </div>
          <div className="flex flex-col gap-2 w-full">
            <label htmlFor="cardNumber" className="uppercase text-[0.75rem] tracking-[2px] text-neutralVeryDarkViolet">Card Number</label>
            <input type="text" name="cardNumber" placeholder="e.g. 1234 5678 9123 0000" className="border rounded-lg px-4 py-2 w-full border-neutralLightGrayishViolet outline-none focus:border-endGradient placeholder:text-neutralLightGrayishViolet"/>
          </div>

          {/* EXP DATE & CVC */}
          <div className="flex gap-3 pb-3"> 
            <div className="flex flex-col gap-2 w-[73px]">
              <label htmlFor="cardExpiryMonth" className="uppercase text-[0.75rem] tracking-[2px] text-neutralVeryDarkViolet">EXP. DATE</label>
              <input type="text" name="cardExpiryMonth" placeholder="MM" className="border rounded-lg px-4 py-2 border-neutralLightGrayishViolet outline-none focus:border-endGradient placeholder:text-neutralLightGrayishViolet"/>
            </div>
            <div className="flex flex-col gap-2 w-[73px]">
              <label htmlFor="cardholderName" className="uppercase text-[0.75rem] tracking-[2px] text-neutralVeryDarkViolet">(MM/YY)</label>
              <input type="text" name="cardholderName" placeholder="YY" className="border rounded-lg px-4 py-2 w-full border-neutralLightGrayishViolet outline-none focus:border-endGradient placeholder:text-neutralLightGrayishViolet"/>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="cardholderName" className="uppercase text-[0.75rem] tracking-[2px] text-neutralVeryDarkViolet">CVC</label>
              <input type="text" name="cardholderName" placeholder="e.g. 123" className="border rounded-lg px-4 py-2 w-full border-neutralLightGrayishViolet outline-none focus:border-endGradient placeholder:text-neutralLightGrayishViolet"/>
            </div>
          </div>
          <button className="py-[.875rem] bg-neutralVeryDarkViolet text-neutralWhite rounded-lg">Submit</button>
        </form>
      </div>
    </div>
    
  );
}

export default App;

// ESTIMATED TIME TO COMPLETE: 3 - 5 HOURS.
// START @ 12:45PM - 2:10PM
// RESUME @ 3:07PM - 