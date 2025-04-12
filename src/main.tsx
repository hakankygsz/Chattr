import { createRoot } from 'react-dom/client'
import "@/assets/styles/globals.scss"
import App from '@/App'
import { Provider } from 'react-redux';
import { store } from './app/store';

const root = createRoot(document.getElementById('root')!);
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);