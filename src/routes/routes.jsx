import { Route, Routes } from 'react-router-dom'

import { Detalhe, Home, Movies, Series } from '../containers'
import DefaultLayout from '../layout/DefaultLayout'

function Router() {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/filmes" element={<Movies />} />
        <Route path="/series" element={<Series />} />
        <Route path="/detalhe/:id" element={<Detalhe />} />
      </Route>
    </Routes>
  )
}

export default Router
