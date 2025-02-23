import React from "react";
import { Link, useLocation } from "react-router-dom";

const BreadcrumbSection = ({pageName}) => {
  const location = useLocation(); // Get the current location
  const pathnames = location.pathname.split("/").filter((x) => x); // Split the URL path

//   const pagePath = pathnames[pathnames.length - 1]
    return (
        <section className="breadcrumb-section">
        <div className="container">
            <div className="row">
            <div className="col-sm-auto col-11 mx-auto">
                <h1 className="page-name">{pathnames[pathnames.length - 1]}</h1>
                <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Home</Link> </li>
                    {pathnames.map((name, index) => {
                    const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
                    const isLast = index === pathnames.length - 1;
                    return isLast ? (
                        <li key={name} className="breadcrumb-item active" aria-current="page">{name.replace("-", " ")}</li>
                    ) : (
                        <li key={name} className="breadcrumb-item"><Link to={routeTo}>{name.replace("-", " ")}</Link></li>
                    );
                    })}
                </ol>
                </nav>
            </div>
            </div>
        </div>
        <span className="pattren"></span>
        </section>
    );
};

export default BreadcrumbSection;
