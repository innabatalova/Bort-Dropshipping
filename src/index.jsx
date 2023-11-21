import React from 'react'
import { createRoot } from 'react-dom/client';

import './scss/style.scss'

import LayoutBlock from './LayoutBlock';

const root = createRoot(document.getElementById('root'));
root.render(
    <LayoutBlock />
);



