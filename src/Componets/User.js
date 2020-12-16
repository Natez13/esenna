import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "./Logout";

export const User = () => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [userMetadata, setUserMetadata] = useState(null);

  useEffect(() => {
    const getUserMetadata = async () => {
      const domain = "dev--c34vvj2.us.auth0.com";
      console.log("Datos Usuario: ", user);
      try {
        const accessToken = await getAccessTokenSilently({
          audience: `https://${domain}/api/v2/`,
          scope: "read:current_user",
        });

        const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`;

        const metadataResponse = await fetch(userDetailsByIdUrl, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        const { user_metadata } = await metadataResponse.json();
        console.log("hemos terminado");
        setUserMetadata(user_metadata);
      } catch (e) {
        console.log(e.message);
      }
    };

    getUserMetadata();
  }, [user]);

  //JSON.stringify(userMetadata, null, 2)

  return (
    isAuthenticated && (
      <div className="container">
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <p>{user.sub}</p>
        <h3>User Metadata</h3>
        {userMetadata ? (
          <pre>
            <table className="table container">
              
              <thead className="thead-dark">
                <tr>
                  <th scope="col">Mercenario</th>
                  <th scope="col">Horas</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(userMetadata).map((key, index) => (
                  <tr key={index}>
                    <td>{key}</td>
                    <td>{userMetadata[key]}</td>
                  </tr>
                ))}
                
              </tbody>
            </table>
          </pre>
        ) : (
          "No user metadata definedd"
        )}
        <LogoutButton />
      </div>
    )
  );
};
