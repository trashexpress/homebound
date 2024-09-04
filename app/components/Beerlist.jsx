import React from 'react'
import Beers from './Beers'

const Beerlist = () => {
  return (
    <div className="flex flex-col gap-10 mt-8 mx-auto px-4">
        
        <Beers beercan={'/can.png'} beerglass={'/tulipglass.png'} title='Sour the people' description='A vibrant and refreshing Strawberry Sour Beer with juicy fruit flavors and a crisp, tangy finish' abv='6.5%'/>
        <Beers beercan={'/can.png'} beerglass={'/tulipglass.png'} title='excess equilibreum' description='A Hazy IPA bursting with juicy hop flavors and a smooth, creamy finish, perfect for a tropical, fruit-forward experience.' abv='6.5%'/>
        <Beers beercan={'/can.png'} beerglass={'/tulipglass.png'} title='Blonde Ale' description='A crisp and easy-drinking Blonde Ale with subtle malt sweetness and a refreshing, clean finish' abv='6.5%'/>

    </div>
  )
}

export default Beerlist