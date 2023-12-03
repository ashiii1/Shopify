import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import {Helmet} from 'react-helmet';


const Layout = ({ children , title, description, keywords, author}) => {
  return (
    <div>
      <Helmet>
      <meta charSet="utf-8"/>
      <meta name="description" content={description}/>
      <meta name="author" content={author}/>
      <meta name="keywords" content={keywords}/>
      <title>{title}</title>
      </Helmet>
      <Header/>
      <main style={{ minHeight: "70vh" }}>{children}</main>
      <Footer />
    </div>
  );
};

Layout.defaultProps={
  title:"Ecommerce-App shop now",
  description:"MERN Project",
  keyword:"HTML, CSS, JS, REACT, NODE, MODB",
  author:"ASHI"
}

export default Layout;
