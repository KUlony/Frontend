import React from "react";
import NavBar from "./components/NavBar";
import "./Profile.css";

function Profile() {
  return (
    <div className="Profile_page">
      <div className="Nav">
        <NavBar />
      </div>

      {/* <!-- Account page navigation--> */}
        <nav class="nav nav-borders">
            <a class="nav-link active ms-0" href="https://www.bootdey.com/snippets/view/bs5-edit-profile-account-details" target="__blank">Profile</a>
            <a class="nav-link" href="https://www.bootdey.com/snippets/view/bs5-profile-billing-page" target="__blank">Billing</a>
            <a class="nav-link" href="https://www.bootdey.com/snippets/view/bs5-profile-security-page" target="__blank">Security</a>
            <a class="nav-link" href="https://www.bootdey.com/snippets/view/bs5-edit-notifications-page"  target="__blank">Notifications</a>
        </nav>
    </div>
  );
}

export default Profile;