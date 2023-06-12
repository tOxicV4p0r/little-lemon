import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import Main from 'components/Main';
import Home from 'Pages/Home';
import Reservation from 'Pages/Reservation';
import theme from 'theme';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Main />}>
        <Route index={true} element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/reservation" element={<Reservation />} />
      </Route>
    </>
  )
)

function App() {
  return (
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
