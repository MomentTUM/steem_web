<<<<<<< HEAD
import React from "react";

=======
>>>>>>> dev
import backgroundRegister from "../assets/register.jpg";
import CreateAccountLayout from "../layouts/CreateAccountLayout";

export default function CreateAccountPage() {
  return (
    <>
      <div style={{ backgroundImage: `url(${backgroundRegister})` }}>
        <CreateAccountLayout />
      </div>
    </>
  );
}
