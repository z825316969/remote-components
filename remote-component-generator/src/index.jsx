import React from 'react'

function Test({ data }) {
  return (
    <div style={{
      border: '0.5px solid #ffffff',
      display: 'flex',
      padding: '12px 16px',
      background: 'linear-gradient(-180deg, rgba(255, 255, 255, 0.4) 0%, #ffffff 100%)',
      alignItems: 'stretch',
      borderRadius: '12px',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      width: '311px',
      height: '136px'
    }}>
  <div style={{flexDirection: 'row', display: 'flex', alignItems: 'center'}}>
    <div style={{
      padding: '2px 5px',
      background: "#ff7700",
      borderRadius: '4px',
      color: "#ffffff", fontSize: '12px',
      marginRight: '10px'
    }}>
      改签
    </div>
    <span style={{color: "#111111", fontSize: '12px',}}>03月20日 周五出发</span>
  </div>
  <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline', marginTop: '11px'}}>
    <span style={{
      color: "#111111",
      fontSize: '24px',
      fontWeight: "bold",
      lineHeight: '28px',
    }}>{data.time1}</span>
    <span style={{
      color: "#111111",
      fontSize: '13px',
    }}>G4531</span>
    <span style={{
      color: "#111111",
      fontSize: '24px',
      fontWeight: "bold",
      lineHeight: '28px',
    }}>{data.time2}</span>
  </div>
  <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginTop: '11px'}}>
    <div style={{
      color: "#111111",
      fontSize: '14px',
    }}>{data.station1}</div>
    <img
      src="https://dimg04.fx.ctripcorp.com/images/1gz1312000c4vhoueE4C8.png"
      style={{width: '74px', height: '6px'}}
    />
       <div style={{
      color: "#111111",
      fontSize: '14px',
    }}>{data.station2}</div>
  </div>
  <img
    src="https://dimg04.fx.ctripcorp.com/images/1gz1412000c4vhout0676.png"
    style={{marginTop: '10px'}}
  />
</div>
  )
}

export default Test
