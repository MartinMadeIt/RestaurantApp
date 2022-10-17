import './App.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Wrapper from './Components/Wrapper';
import QuestAPI from './Components/QuestAPI';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import GetOrder from './Components/GetOrder';
import Navigation from './Components/Navigation';
import AddNewOrder from './Components/AddNewOrder';
import Home from './Components/Home';
import Clients from './Components/Clients';
import GetClientAll from './Components/GetClientAll';
import GetSingleClient from './Components/GetSingleClient';
import AddNewClient from './Components/AddNewClient';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Wrapper>
          <Home />
        </Wrapper>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path='/nav' element={<Navigation />} />
          <Route path='/clients' >
            <Route index element={<Clients />} />
            <Route path='add' element={<AddNewClient/>} />
            <Route path='clientlist' >
              <Route index element={<GetClientAll />} />
              <Route path=':clientId' element={<GetSingleClient/>} >
                {/* <Route path='edit' element={<>Edit client</>} /> */}
              </Route>
            </Route>
          </Route>
          <Route path="/addorder" element={<AddNewOrder />} />

          <Route path='/orders'>
            <Route index element={<GetOrder />} />
            <Route path=':orderId' element={<QuestAPI/>}>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
     </QueryClientProvider>
  );
}

export default App;
