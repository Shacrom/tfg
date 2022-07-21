import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { CharactersScreen } from '../screens/CharactersScreen'
import { PetsScreen } from '../screens/PetsScreen'
import { MapScreen } from '../screens/MapScreen'
import { D3MainScreen } from '../screens/d3/D3MainScreen'
import { HSMainScreen } from '../screens/hs/HSMainScreen'
import { WoWMainScreen } from '../screens/wow/WoWMainScreen'

export const DashboardRoutes = () => {
  return (
    <>
      <div className='container'>
        <Routes>
          <Route path="/diablo3" element={<D3MainScreen />} />
          <Route path="/hearthstone" element={<HSMainScreen />} />
          <Route path="/worldofwarcraft" element={<WoWMainScreen />} />
          <Route path="/*" element={<MapScreen />} />
        </Routes>
      </div>
    </>
  )
}
