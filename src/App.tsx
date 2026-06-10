import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"

export function App() {
  return (
    <div className="allContents">
      {/*<Button className="mainButton" variant="default">Hello World!</Button>*/}

      <NavigationMenu className="navBar">
      {/*<NavigationMenu>*/}
        <NavigationMenuList>

            <NavigationMenuItem>
                <NavigationMenuLink>Home</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <NavigationMenuLink>Socials</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
              <NavigationMenuLink>Blog</NavigationMenuLink>
          </NavigationMenuItem>
          
        </NavigationMenuList>
      </NavigationMenu>

      {/*<div>
      <img src="{stepsPhoto}" alt="Steps ASCII Art" ></img>
      </div>*/}
      
      <div>
        <h1 className="jdName">Stephan Seufert</h1>

        <h3 className="briefDescription">Senior Software Engineer at <a className="databricks" href="https://www.databricks.com">Databricks</a> </h3>
      </div>

      <div className="introTextP space-y-4">
            <p>I am a Berlin-based Senior Software Engineer at Databricks with a primary interest in database systems and data infrastructure.</p>
            <p>My background combines advanced research—holding a <a className="pLanguagesN" href="https://web.archive.org/web/20200301122807id_/https://publikationen.sulb.uni-saarland.de/bitstream/20.500.11880/25476/1/thesis_final.pdf">Ph.D. in Computer Science</a>—with extensive industry experience building large-scale distributed systems.</p>
            <p>Over the years, I have optimized query compilers for Amazon Redshift, developed worldwide customer-facing retail search features, and engineered scalable data infrastructure utilizing <a className="pLanguages" href="https://www.java.com/">Java</a>, <a className="pLanguages" href="https://kafka.apache.org/">Apache Kafka</a>, and <a className="pLanguages" href="https://kubernetes.io/">Kubernetes</a>.</p>
            <p>I thrive on turning complex architectural challenges into highly scalable, efficient, and reliable engineering solutions.</p>
      </div>

      <hr />
      
      <div className="workW">
        Work
      </div>

      <div className="introTextP space-y-4">
            <p> <a className="awsdeequ" href="https://github.com/awslabs/deequ">AWS Deequ</a> • Deequ is a library built on top of Apache Spark for defining "unit tests for data", which measure data quality in large datasets. </p>
            <p> <a className="ferrari" href="https://github.com/steps/Ferrari">Ferrari</a> • The Ferrari Reachability Index is a main-memory index structure for rapid processing of reachability queries over massive graphs. </p>
            <p></p>
            <p></p>
      </div>  

      <hr />

      <div className="workW">
        Skills
      </div>

      <div className="programming">
        <p className="introTextP">• Java, Python, C++, Scala</p>
      </div>

      <div>
        <hr />
      
        <footer className="footerLine">(c) 2026 Crafted by Tim Seufert</footer>
      </div>
      
    </div>
  )
}

export default App