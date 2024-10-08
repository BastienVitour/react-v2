import { NavLink } from "react-router-dom";

interface NavigationItemProps {
    Text: string;
    Link: string;
}

export default function NavigationItem({ Text, Link }: Readonly<NavigationItemProps>) {

    return(

        <NavLink to={Link} className="navbar-item">
            <span>{Text}</span>
        </NavLink>

    );

}