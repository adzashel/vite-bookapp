const NavBanner = () => {
  return (
    <>
        <div className="nav-banner">
      <h1>Book App</h1>
    </div>
     <div className="nav-list">
     <ul>
       <li>
         <a href="#section1">Home</a>
       </li>
       <li>
         <a href="#section2">About</a>
       </li>
       <li>
         <a href="https://www.dbooks.org/api/" target="_blank">
           Api
         </a>
       </li>
     </ul>
   </div>
    </>
    
  );
};

export default NavBanner;
