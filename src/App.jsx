import { useState } from 'react'
import './App.css'
import ExperienceTable from './components/ExperienceComponent'
import GeneralComponent from './components/GeneralComponent'
import EducationComponent from './components/EducationComponent'

function App() {
  
  return (
    <>
      <GeneralComponent />
      <EducationComponent/>
      <ExperienceTable />
    </>
  )
}

export default App
