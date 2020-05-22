import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {

  return (
    <Fragment>
      <div className="belt">
        {props.showSushi.map(sushi => <Sushi key={sushi.id} oneSushi={sushi} handleSushiClick={props.handleSushiClick}/>)}
        <MoreButton handleClick={props.handleShowClick}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer