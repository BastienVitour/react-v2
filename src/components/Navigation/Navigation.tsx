import "./navigation.css";
import NavigationItem from "./NavigationItem";
import componentList from "../../utils/ComponentList";

export default function Navigation() {

    return(

        <nav className="navbar-main">
			{
				componentList.map((component) => {
					return (
						<NavigationItem key={component.text} Text={component.text} Link={component.link} />
					)
				})
			}
		</nav>

    );

}