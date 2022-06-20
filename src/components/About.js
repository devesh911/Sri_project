import React, { useState } from 'react'

export default function About(props) {


  // const [style, setstyle] = useState({
  //   color: 'black',
  //   backgroundColor: 'white',
  //   // border: "solid 1px red" 
  // })

  // if(props.mode === 'dark' ) {
  //   setstyle({
  //         color: 'black',
  //         backgroundColor: 'white'
  //       })
   
  //   console.log("Hey")
  // }
  // else if (props.mode === 'light' ) {
  //   setstyle({
  //     color: '#816797',
  //     backgroundColor: '#1B2430',
  //   })
   
  // }



  return (
    <div className="container my-3" style={{color: props.mode==='light'?'black':'#816797' , backgroundColor:props.mode==='light'?'white':'#1B2430' , border:"solid 1px #816797" , borderRadius:"10px"}}>
      <h1>About us</h1>
      <div className="accordion" id="accordionExample" >
        <div className="accordion-item my-2" style={{color: props.mode==='light'?'black':'#816797' , backgroundColor: props.mode==='light'?'white':'#1B2430' , border:"solid 1px #816797"}}>
          <h2 className="accordion-header" id="headingOne">
            <button style={{color: props.mode==='light'?'black':'#816797' , backgroundColor:props.mode==='light'?'white':'#1B2430' , border:"solid 1px #816797"}} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Accordion Item #1
      </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
          </div>
        </div>
        <div className="accordion-item my-2" style={{color: props.mode==='light'?'black':'#816797' , backgroundColor:props.mode==='light'?'white':'#1B2430' , border:"solid 1px #816797"}}>
          <h2 className="accordion-header" id="headingTwo">
            <button style={{color: props.mode==='light'?'black':'#816797' , backgroundColor:props.mode==='light'?'white':'#1B2430' , border:"solid 1px #816797"}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Accordion Item #2
      </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
          </div>
        </div>
        <div className="accordion-item my-2" style={{color: props.mode==='light'?'black':'#816797' , backgroundColor:props.mode==='light'?'white':'#1B2430' , border:"solid 1px #816797"}}>
          <h2 className="accordion-header" id="headingThree">
            <button style={{color: props.mode==='light'?'black':'#816797' , backgroundColor:props.mode==='light'?'white':'#1B2430' , border:"solid 1px #816797"}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Accordion Item #3
      </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
          </div>
        </div>
      </div>

    </div>
  )
}
