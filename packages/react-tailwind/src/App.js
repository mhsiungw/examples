import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css'

const container = document.getElementById('root');
const root = createRoot(container)
const App = () => <h1 className='bg-black h-screen'>Hello World</h1>;
root.render(<App/>)

