{/*import { StrictMode } from "react"*/}
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.tsx"
import { ThemeProvider } from "@/components/theme-provider.tsx"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home.tsx'
import { Socials } from './pages/Socials.tsx'
import Blog from './pages/Blog.tsx'

createRoot(document.getElementById('root')!).render(
  <ThemeProvider> {/*Really important theme provider listens for keystroke 'd'*/}
  
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
        
          <Route path="/socials" element={<Socials />} />  
          <Route path="/blog" element={<Blog />} />
          
        </Route>
      </Routes>
    </BrowserRouter>

  </ThemeProvider>
)