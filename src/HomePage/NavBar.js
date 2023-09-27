import { useState } from "react";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
import { FaSistrix,FaUserLarge } from "react-icons/fa6";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { MdExpandMore } from "react-icons/md";
import img from "../HomePage/image/logo2.png";
import UserPage from "./UserPage";
import classes from "./HomePage.module.css";
const NavBar = (props) =>{
    const value = props.values;

    const [getLoginPage , setLoginPage ] = useState(false);
    const loginCreditial = () =>{
        if(!getLoginPage)
        {
            setLoginPage(true);
        }
        else{
            setLoginPage(false);
        }
        
    }
    
    // useEffect(()=>{
    //     document.addEventListener("mousedown" , ()=>{
    //         setLoginPage(false);
    //     })
    // });
    
    return(
        <>

        <header className={classes.header} >
        <nav className={`${styles.container} ${styles.nav}`} style={value ? {fontSize:" 1.1em"} : {borderBottom: "2px solid rgb(240, 236, 236)" }}>
        <div className={styles.flex} >
        <Link to="/"><img src={img} alt="img" id="img"/> </Link>
            <div className={`${styles.flex} ${styles["nav-items"]}`} >
                {!value && <>
                <FaSistrix className={styles.icons}/>
                <h1>Search</h1>
                </>}
                <AiOutlinePlusCircle className={styles.icons}/>
                <h1>Publish Ride</h1>
                <div className={styles.profile} onClick={loginCreditial}>  
                <div>              
                <FaUserLarge className={styles["user-icon"]} />
                <MdExpandMore className={`${styles.icons2} ${getLoginPage ? styles.true : ""}`}/>
                </div>
                </div>
            </div>
        </div>
        
        {getLoginPage && <UserPage />}
        
    </nav>
    </header>
    </>
    )
}


export default NavBar;
