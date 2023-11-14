import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import SkeletonPage from './pages/SkeletonPage';
import SkeletonDetail from './pages/SkeletonDetail';

function App(): JSX.Element {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/" element={<SkeletonPage />} />
          <Route path="/Detail" Component={SkeletonDetail} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
