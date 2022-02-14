import React from "react";

const LoggedIn = ({ name }) => {
  return (
    <div>
      <p>witam zalogowanego..{name}</p>
      <p>
        
        oto twoje gadgety:
        <ul>
          <li>pierwszy</li>
          <li>drugi</li>
        </ul>
</p>
    </div>
  );
};

export default LoggedIn;
