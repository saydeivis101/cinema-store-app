import React from 'react';
import {createRoot} from 'react-dom/client'
import { CinemaApp } from './src/CinemaApp';
import './index.css'

const root = createRoot(document.getElementById('app'));

root.render(
    <React.StrictMode>
        <CinemaApp/>
    </React.StrictMode>
)