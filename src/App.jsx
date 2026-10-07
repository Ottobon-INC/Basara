import { BrowserRouter, Routes, Route } from 'react-router-dom';
import InstitutionLayout from './modules/common/layouts/InstitutionLayout';
import ScrollToTop from './modules/common/components/ScrollToTop';

import UmbrellaHome from './modules/umbrella/pages/UmbrellaHome';
import UmbrellaAbout from './modules/umbrella/pages/UmbrellaAbout';
import ChairmanMessagePage from './modules/umbrella/pages/ChairmanMessagePage';
import DegreeHome from './modules/degree/pages/DegreeHome';
import DegreeAbout from './modules/degree/pages/DegreeAbout';
import DegreeCourses from './modules/degree/pages/DegreeCourses';
import DegreeAdmissions from './modules/degree/pages/DegreeAdmissions';
import DegreeFacilities from './modules/degree/pages/DegreeFacilities';
import DegreeFaculty from './modules/degree/pages/DegreeFaculty';
import DegreeGallery from './modules/degree/pages/DegreeGallery';
import DegreeContact from './modules/degree/pages/DegreeContact';

import SchoolHome from './modules/school/pages/SchoolHome';
import JuniorCollegeHome from './modules/juniorcollege/pages/JuniorCollegeHome';
import DefenseAcademyHome from './modules/defenseacademy/pages/DefenseAcademyHome';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<InstitutionLayout institutionId="umbrella" />}>
          <Route index element={<UmbrellaHome />} />
          <Route path="about" element={<UmbrellaAbout />} />
          <Route path="chairman-message" element={<ChairmanMessagePage />} />
        </Route>
        
        <Route path="/degree" element={<InstitutionLayout institutionId="degree" />}>
          <Route index element={<DegreeHome />} />
          <Route path="about" element={<DegreeAbout />} />
          <Route path="courses" element={<DegreeCourses />} />
          <Route path="admissions" element={<DegreeAdmissions />} />
          <Route path="facilities" element={<DegreeFacilities />} />
          <Route path="faculty" element={<DegreeFaculty />} />
          <Route path="gallery" element={<DegreeGallery />} />
          <Route path="contact" element={<DegreeContact />} />
        </Route>
        
        <Route path="/school" element={<InstitutionLayout institutionId="school" />}>
          <Route index element={<SchoolHome />} />
        </Route>
        
        <Route path="/juniorcollege" element={<InstitutionLayout institutionId="juniorcollege" />}>
          <Route index element={<JuniorCollegeHome />} />
        </Route>
        
        <Route path="/defenseacademy" element={<InstitutionLayout institutionId="defenseacademy" />}>
          <Route index element={<DefenseAcademyHome />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
