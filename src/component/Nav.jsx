import Navbar from "./Navbar";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import React from 'react'

import Features from './Features';
import Enterprise from './Enterprise';
import Support from './Support';
import Pricing from './Pricing';

const Nav = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route index element={<Features />} />
                <Route path="enterprise" element={<Enterprise />} />
                <Route path="support" element={<Support />} />
                <Route path="pricing" element={<Pricing />} />

            </Routes>
        </Router>

    )
}

export default Nav