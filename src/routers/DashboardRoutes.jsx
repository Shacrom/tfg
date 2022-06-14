import React from 'react'
import { Navbar } from "../screens/ui/NavBar"
import { Route, Routes } from 'react-router-dom'
import { CharactersScreen } from '../screens/characters/CharactersScreen'
import { PetsScreen } from '../screens/pets/PetsScreen'
import { MapScreen } from '../screens/map/MapScreen'

export const DashboardRoutes = () => {
  return (
    <>
        <Navbar/>
        <Routes>
            <Route path="/characters" element={<CharactersScreen />} />
            <Route path="/map" element={<MapScreen />} />
            <Route path="/pets" element={<PetsScreen />} />
            <Route path="/" element={<MapScreen />} />
      </Routes>
    </>
  )
}