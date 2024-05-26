import React from 'react'
import { HomePage } from '../pages'
import { Route, Routes } from 'react-router-dom'

function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      {/* <Route path="/projects/:slug" element={<ProjectPage />}></Route> */}
    </Routes>
  )
}

export default Router
