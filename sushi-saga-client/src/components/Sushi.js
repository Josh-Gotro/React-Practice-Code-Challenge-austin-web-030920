import React, { Fragment } from 'react'

const Sushi = (props) => {
  return (
    <div className="sushi">
      <div className="plate" 
        onClick={() => props.handleSushiClick(props.oneSushi)}>
        { 
          /* Tell me if this sushi has been eaten! */ 
          props.oneSushi.eaten ? null : <img src={props.oneSushi.img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {(props.oneSushi.name)} - ${props.oneSushi.price}
      </h4>
    </div>
  )
}

export default Sushi