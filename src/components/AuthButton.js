import React from "react";
import Appbar from "./AppBar";

export default function AuthButton ({login, logout, register, user}) {

  if (user) {
    return <Appbar logout={logout} user={user} />;
  } else {
    return <button>Login</button>;
  }
};