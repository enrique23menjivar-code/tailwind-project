import { Link, Route, Routes } from 'react-router-dom'
import App from '../App'
import { Flex } from '../components/Flex'
import { Grid } from '../components/Grid'

const HomePage = () => (
<div className="text-center p-4">
    <h1 className="text-3xl font-bold mb-4">Tailwind Project</h1>
    <nav className="mb-4">
        <Link to="/app" className="mr-4">App</Link>
        <Link to="/flex" className="mr-4">Flex</Link>
        <Link to="/grid">Grid</Link>
    </nav>
</div>
)

export const AppRoutes = () => (
<Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/app" element={<App />} />
    <Route path="/flex" element={<Flex />} />
    <Route path="/grid" element={<Grid />} />
</Routes>
)
