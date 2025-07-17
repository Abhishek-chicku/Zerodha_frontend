import React from 'react';

function Hero() {
    return (
        <div class="container p-5 mb-5">
            <div class='row text-center'>
                <img src='media/images/homeHero.png' class='mb-5' alt='Hero Image'/>
                <h1 class="mt-5">Invest In Everything</h1>
                <p>Online platfroms to invest in stock,derivatives,mutual funds and more</p>
                <button  class="p-2 btn btn-primary fs-5"style={{width:"20%" , margin:"0 auto"}}>Signup Now</button>
            </div>
        </div>
   );
}

export default Hero;