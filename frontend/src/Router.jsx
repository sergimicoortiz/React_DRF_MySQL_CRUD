import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Loading from './components/Loading';
import Header from './components/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Router() {

    const Home = React.lazy(() => import('./components/Home'));
    const NotFound = React.lazy(() => import('./components/error_404'));
    const ArticleList = React.lazy(() => import('./components/Article/ArticleList'));
    const ArticleCreate = React.lazy(() => import('./components/Article/ArticleCreate'));
    const ArticleUpdate = React.lazy(() => import('./components/Article/ArticleUpdate'));

    return (
        <Suspense fallback={<Loading />}>
            <BrowserRouter>
                <Header />
                <ToastContainer
                    position="top-right"
                    autoClose={2500}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss={false}
                    draggable
                    pauseOnHover
                    theme="light"
                />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/article" element={<ArticleList />} />
                    <Route path="/article/create" element={<ArticleCreate />} />
                    <Route path="/article/update/:id" element={<ArticleUpdate />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </Suspense>
    )
}