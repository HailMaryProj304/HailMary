import react from "react";
import Iframe from 'react-iframe'

function QuotePage() {
  return(
    <Iframe url="https://www.compulife.org/website/15/quoter.html"
              width="500px"
              height="580px"
              id="myId"
              className="myClassname"
              display="initial"
              position="relative"/>
  )

}

export default QuotePage