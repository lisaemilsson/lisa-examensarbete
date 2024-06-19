import { HomePage, ProjectPage, NotFound} from '../pages'
import { Route, Routes } from 'react-router-dom'

function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/projects/:slug" element={<ProjectPage />}/>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default Router
