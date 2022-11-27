import '../../style/nav.css';
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { GrNotification } from "react-icons/gr";
import { BsImageFill } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { ImCross } from "react-icons/im"
import { useState } from 'react';

const Nav = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleChange = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="nav">
            <div className="navigation">
                <span className="show" onClick={handleChange}><AiOutlineMenu/></span>
                <form action="">
                    <div className="div-search">
                        <input type="text" className='search'></input>
                        <span className='btn-search'> <CiSearch/> </span>
                    </div>
                </form>
                <div className='profile'>
                    <span><GrNotification/></span>
                    <span><BsImageFill/></span>
                </div>
            </div>
            <div className={!isOpen ? "Nav-bar" : "Nav-bar-show"}>
                <ul className='list'>
                    <li className='link-goup'>
                        <Link className='a' to='/dashboard'>Dashboard</Link>
                    </li>
                    <h5 className='template' >Template</h5>
                    <li className='link-goup'>
                        <Link className='a' to='/archives'>Archives</Link>
                    </li>
                    <li className='link-goup'>
                        <Link className='a' to='/service'>Service Locaux</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Nav;