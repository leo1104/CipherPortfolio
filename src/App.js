import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import styled from 'styled-components';


//the name of file and component name should start with an upper case letter always

const Container = styled.div`
background-color: crimson;
`;

function App() {
  return (
    <Container >
      <p>asgdhjgas</p>
      <NavBar/>
    </Container>
  );
}

export default App;
