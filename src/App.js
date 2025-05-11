import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { ParkingProvider } from "./context/ParkingContext";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import CreateReservationPage from "./pages/CreateReservationPage";
import ReservationsListPage from "./pages/ReservationsListPage";

function App() {
    return (
        <ParkingProvider>
            <Router>
                <Header/>
                    <main>
                        <Routes>
                            
                            <Route path='/vagas' exact Component={HomePage} />
                            <Route path='/vagas/reservar/:spotNumber' exact Component={CreateReservationPage} />
                            <Route path='/reservas' exact Component={ReservationsListPage} />
                            <Route path='*' exact Component={HomePage} />

                        </Routes>
                    </main>
            </Router>
        </ParkingProvider>
    )
}

export default App;