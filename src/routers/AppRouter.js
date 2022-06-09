import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CharactersScreen } from '../screens/characters/CharactersScreen'
import { LoginScreen } from '../screens/login/LoginScreen'
import { MapScreen } from '../screens/map/MapScreen'
import { PetsScreen } from '../screens/pets/PetsScreen'
import { Navbar } from '../screens/ui/NavBar'

export const AppRouter = () => {
  return (
    <BrowserRouter>
        <Navbar/>
      <Routes>
        <Route path="/characters" element={<CharactersScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/map" element={<MapScreen />} />
        <Route path="/pets" element={<PetsScreen />} />
        <Route path="/" element={<MapScreen />} />
      </Routes>
    </BrowserRouter>
  )
}
