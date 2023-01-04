import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Loading from './components/Loading';
import Header from './components/Header';

export default function Router() {

    const Home = React.lazy(() => import('./components/Home'));
    const NotFound = React.lazy(() => import('./components/error_404'));
    const ArticleList = React.lazy(() => import('./components/Article/ArticleList'));

    return (
        <Suspense fallback={<Loading />}>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/article" element={<ArticleList />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </Suspense>
    )
}