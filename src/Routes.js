import React from "react";
import ProfilePinnedSelect from "pages/ProfilePinnedSelect";
import ProfileContactsPinned from "pages/ProfileContactsPinned";
import ProfileContacts from "pages/ProfileContacts";
import ProfileContactsCircles from "pages/ProfileContactsCircles";
import ProfileContactsOne from "pages/ProfileContactsOne";
import Openprofile from "pages/Openprofile";
import Small from "pages/Small";
import Homescreen1 from "pages/Homescreen1";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homescreen1 />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/small" element={<Small />} />
        <Route path="/openprofile" element={<Openprofile />} />
        <Route path="/profilecontactsone" element={<ProfileContactsOne />} />
        <Route
          path="/profilecontactscircles"
          element={<ProfileContactsCircles />}
        />
        <Route path="/profilecontacts" element={<ProfileContacts />} />
        <Route
          path="/profilecontactspinned"
          element={<ProfileContactsPinned />}
        />
        <Route path="/profilepinnedselect" element={<ProfilePinnedSelect />} />
        <Route path="/dhiwise-dashboard" element={<Home />} />
      </Routes>
    </Router>
  );
};
export default ProjectRoutes;
