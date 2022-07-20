import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { CharactersScreen } from '../screens/CharactersScreen'
import { PetsScreen } from '../screens/PetsScreen'
import { MapScreen } from '../screens/MapScreen'

export const DashboardRoutes = () => {
  return (
    <>
      <div className='container'>
        <Routes>
          <Route path="/characters" element={<CharactersScreen />} />
          <Route path="/map" element={<MapScreen />} />
          <Route path="/pets" element={<PetsScreen />} />
          <Route path="/*" element={<MapScreen />} />
        </Routes>
      </div>
    </>
  )
}
