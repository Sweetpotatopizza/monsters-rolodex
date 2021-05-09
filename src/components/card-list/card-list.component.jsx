import React from 'react'

import {Card} from '../card/card.component'
 
import './card-list.styles.css'

export const CardList = (props) => (
            // map: whatever this function returns, it's going to return in the place of every element in this array
              // key is used because if one of the state element changed, react need to know what element need to be updated. With key, we don't have to rerender everything, we can only render part of one
    // mosnter = {mosnter} : pass monster in to the Card component
    <div className="card-list">{props.monsters.map((monster) => (      
        <Card key={monster.id} monster={monster}/>
      ))}</div>
);