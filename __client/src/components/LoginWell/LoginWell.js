import React from "react";
import { Row, Col} from'react-bootstrap';
import WellActionBtn from './WellActionBtn';
import LoginForm from './LoginForm';
import Wrapper from './../Wrapper';

const LoginWell = () => {
    if (sessionStorage.getItem('loggedIn')) {
     return(
     
         <Wrapper>
          <h2 className='loginTitle'> What's your next style brewing going to be? 0_0 </h2>
           <Row>
            <Col xs={15} sm={5}>
              <WellActionBtn class='landingBtn' link='/recipes' name='Top Recipes'/>
            </Col> 
            <Col xs={15} sm={5}>
              <WellActionBtn class='landingBtn' link='/brewers' name='Bes Brewers'/> 
            </Col> 
          </Row>   
       </Wrapper>

     )
    }
    return(
    
            <LoginForm/>
   
    )
}

export default LoginWell;