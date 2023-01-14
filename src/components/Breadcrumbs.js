import { useNavigate, Link } from "react-router-dom";

export default function Breadcrumbs(props) {
  const crumbs = props.crumbs;
  const navigate = useNavigate();

  return (
    <span className="breadcrumb_list">
      {crumbs.map((crumb, index) => {
        if (index == crumbs.length - 1)
          return (
            <span className="last_breadcrumb" key={crumb.name + crumb.index}>
              {crumb.name}
            </span>
          );
        if (crumb.to) {
          return (
            <span key={crumb.name + crumb.index}>
              <Link to={crumb.to} className="breadcrumb_link">
                {crumb.name}
              </Link>{" "}
              {" > "}
            </span>
          );
        }
        return (
          <span key={crumb.name + crumb.index}>
            {crumb.name}
            {" > "}
          </span>
        );
      })}
    </span>
  );
}
