import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import router from './router/router.tsx'
import { Provider } from 'react-redux'
import { persistor, store } from './redux/store.ts'
import { PersistGate } from 'redux-persist/integration/react'
import { Toaster } from 'sonner'




createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            <Toaster position="top-right" />
            <PersistGate persistor={persistor} loading={null} >
                <RouterProvider router={router} />
            </PersistGate>
        </Provider>
    </StrictMode>,
);
