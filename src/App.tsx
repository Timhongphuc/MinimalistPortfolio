import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { Kbd } from "@/components/ui/kbd"
import { Outlet, Link } from "react-router-dom"

export function App() {
  return (
    <div className="allContents">
      {/*<Button className="mainButton" variant="default">Hello World!</Button>*/}

      <NavigationMenu className="navBar">
      {/*<NavigationMenu>*/}
        <NavigationMenuList>

          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link to='/' className="navbarpointer">Home</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild>
                <Link to='/socials' className="navbarpointer">Socials</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link to='/blog' className="navbarpointer">Blog</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          
        </NavigationMenuList>

        
          <div>
            <p className="noticeHeader">(press <Kbd>D</Kbd> to toggle dark mode)</p>
          </div>
        
      </NavigationMenu>

      {/*<div>
      <img src="{stepsPhoto}" alt="Steps ASCII Art" ></img>
      </div>*/}
      
      <Outlet />

      <div>
        <hr />
      
        <footer className="footerLine">(c) 2026 Crafted by <a className="TSUnderline" href="https://www.timhongphuc.de" target="_blank">Tim Seufert</a> </footer>
      </div>
      
    </div>
  )
}

export default App