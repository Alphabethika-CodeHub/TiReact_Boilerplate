import React, { Fragment } from 'react';
import { StoreProvider } from './common/utils/useStore';
import { AuthProvider } from './context/AuthProvider';
import { MainRoutes } from './routes/mainRoutes';

function App() {
  return (
    <StoreProvider>
      <AuthProvider>
        <Fragment>
          <MainRoutes />
        </Fragment>
      </AuthProvider>
    </StoreProvider>
  );
}

export default App;
