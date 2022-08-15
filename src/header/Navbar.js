import React from "react"
import Typography from "@mui/material/Typography";
import translate from "translate";
import { useSelector } from "react-redux";
import "./navbar.css";
import { selectLanguage } from "../common/userSettingsSlice";

const Navbar = () => {
    const [categoriesEn, setCategoriesEn] = React.useState([]);
    const [categoriesUk, setCategoriesUk] = React.useState([]);
    const language = useSelector(selectLanguage);

    React.useEffect(() => {
        async function getCategories() {
          const res =   await fetch('https://fakestoreapi.com/products/categories');
          const data = await res.json();
          setCategoriesEn(data)
        }
        getCategories();
    },[])

    React.useEffect(() => {
        translate.engine = "google";
        async function call() {
            const translated = await translate(categoriesEn.toString(), "uk");
            setCategoriesUk(translated.split(","));
        }
        call()
    }, [categoriesEn])

    let categoriesTarg;
    if(language === 'en') {
        categoriesTarg = categoriesEn
    } else if (language === "uk") {
        categoriesTarg = categoriesUk
    }
     
    const categoriesElements = categoriesTarg.map(category => (
        <Typography variant="body1" component="p" key={category}>
                {category.toUpperCase()}
            </Typography>
    ))
    return (
        <nav>
            {categoriesElements}
        </nav>
    );
};

export default Navbar;
