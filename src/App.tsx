import React, { Suspense } from 'react';

import GlobalStyles from './globalStyles';
import LoadingSpinner from './components/UI/LoadingSpinner';
import Layout from './components/Layout';

const CounterPage = React.lazy(() => import('./pages/counterPage'));

function App() {
  return (
    <Suspense
        fallback={
          <LoadingSpinner />
        }
    >
      <GlobalStyles />
      <Layout>
        <CounterPage />
      </Layout>
    </Suspense>
  );
}

export default App;
