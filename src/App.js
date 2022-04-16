import React from 'react'
import { Main } from './components/Main';
import background from './assets/images/fbg.jpg';
import { Route, Routes } from 'react-router-dom';
import { Form } from './components/Form';
import { Introducing } from './components/Introducing';
import { Last } from './components/Last';

const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        minWidth: '100%',
        minHeight: '100%',
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'repeat',
        backgroundSize: 'cover',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Routes>
        <Route exact={true} path='/' element={<Introducing/>}/>
        <Route path='/form' element={<Form/>}/>
        <Route path='/main' element={<Main/>}/>
        <Route path='/last' element={<Last/>}/>
      </Routes>
    </div>
  )
}

export default App;