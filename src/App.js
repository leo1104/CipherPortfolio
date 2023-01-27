import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import styled from 'styled-components';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ComponentTwo from './ComponentTwo';

//the name of file and component name should start with an upper case letter always

const Container = styled.div`
background-color: crimson;
`;

//localhost:3000 => /
// localhost:3000/home => /home
// localhost:3000/about => /about


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <NavBar/>,
    },
    {
      path:'/about',
      element:<ComponentTwo/>
    }
  ]);
  return (
    <Container >
      <RouterProvider router={router} />
    </Container>
  );
}


///create 3 seperate routes using react router dom known as /,/home and /about wherein each route will have a different component rendered and each component will have 2 links for routing to the other two pages/ routes.
// the routing should happen without refreshing the page 

export default App;
