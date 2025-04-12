import { useEffect } from 'react';
import { AppWrapper } from '@/components/common/PageMeta';
import useTheme from '@/hooks/useTheme';
import appRoutes from '@/routes/app.routes';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/common/Scroll';
import Loader from './components/common/Loader';
import { useSelector } from 'react-redux';
import { RootState } from './app/store';

const App = () => {
  const { theme } = useTheme();
  const isLoading = useSelector((state: RootState) => state.loading.isLoading);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  if (isLoading) return <Loader />;

  return (
    <AppWrapper>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          {appRoutes}
        </Routes>
      </BrowserRouter>
    </AppWrapper>
  );
}

export default App;
