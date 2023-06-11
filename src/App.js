import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Main from 'components/Main';
import Home from 'Pages/Home';
import { ChakraProvider } from '@chakra-ui/react';
import theme from 'theme';
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Main />}>
        <Route index={true} element={<Home />} />
        <Route path="/home" element={<Home />} />
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
