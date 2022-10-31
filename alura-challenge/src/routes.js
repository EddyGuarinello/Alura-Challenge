import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AddNovoProduto from './pages/addNovoProduto';
import HomeLogin from './pages/homeLogin';
import HomeProdutos from './pages/homeProdutos';
import Inicio from './pages/inicio';

export default function AppRouter(){
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Inicio />}></Route>
                <Route path='/login' element={<HomeLogin />}></Route>
                <Route path='/addproduto' element={<AddNovoProduto />}></Route>
                <Route path='/produtoscadastrados' element={<HomeProdutos />}></Route>    
            </Routes>
        </Router>
    );
}