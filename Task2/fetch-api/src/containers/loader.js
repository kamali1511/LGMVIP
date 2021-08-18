import Loader from "react-loader-spinner";
import './styles.css';
import Container from "react-bootstrap/Container";

const LoaderComp = ()=>{
    return(
  <Container>
        <div className='app'>
            <Loader
            type="BallTriangle"
            color="rgb(255,255,255)"
            height={200}
            width={480}
            timeout={2000}
            />
       </div>
       </Container>
    );
}
export default LoaderComp