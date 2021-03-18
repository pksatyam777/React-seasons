import React from 'react'
import "semantic-ui-css/semantic.min.css";
import './seaasonDisplay.css'

const seasonconfig={
  summer:{
    text:"lets hit the beach",
    iconn:'sun'
  },
  winter:{
    text:"burry its chilly",
    iconn:'snowflake'
  }
}

const getSeason=(Latitude,month)=>{
  if (month>2 && month>9){
  return Latitude >0 ? 'summer':'winter'
}
else{

  return Latitude <0 ? 'winter':'summer'
}
}


const Season=(props)=>{
  const ses=getSeason(props.Latitude,new Date().getMonth());
  const {text,iconn}=seasonconfig[ses]

  return(

    <div className={`Season ${ses}`}>
    <i className={`${iconn} icon  massive icn-1`} />
    <h1>{ses === 'winter'? 'burry it is chilly':'lets hits the beach'}</h1>
    <i className={`${iconn} icon  massive icn-2`} />
    </div>
  );

}
export default Season
