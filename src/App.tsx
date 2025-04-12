import { AppWrapper } from '@/components/common/PageMeta';
import appRoutes from '@/routes/app.routes';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Routes } from 'react-router-dom';
import { RootState } from './app/store';
import Loader from './components/common/Loader';
import ScrollToTop from './components/common/Scroll';

const App = () => {
  const isLoading = useSelector((state: RootState) => state.loading.isLoading);

  if (isLoading) return <Loader />;

  return (
    <AppWrapper>
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<Loader />}>
          <Routes>
            {appRoutes}
          </Routes>
        </Suspense>
      </BrowserRouter>
    </AppWrapper>
  );
};

export default App;
