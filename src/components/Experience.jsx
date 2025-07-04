import React from 'react'
import { Timeline } from './Timeline'
import { experiences } from '../data'
function Experience() {
  return (
    <section id="experience" className="min-h-screen flex items-center px-4 py-10">
      <Timeline  data={experiences}/>
    </section>
  )
}

export default Experience