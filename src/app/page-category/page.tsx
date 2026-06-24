import React from 'react'
import ProjectCategoryTabs from '../components/ProjectCategoryTabs';
import ProjectCategoryTitleWIthLinks from "../components/ProjectCategoryTitleWIthLinks";
const page = () => {
  return (
    <div>
        <ProjectCategoryTitleWIthLinks />
        <ProjectCategoryTabs />
    </div>
  )
}

export default page