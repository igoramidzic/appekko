import React from 'react';
import { Router } from 'react-router-dom';

interface IRouter {

}

const RouterContext = React.createContext<IRouter>({});

export default RouterContext;