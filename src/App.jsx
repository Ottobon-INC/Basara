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

import SchoolLayout from './modules/school/layouts/SchoolLayout';
import SchoolHome from './modules/school/pages/SchoolHome';
import SchoolAbout from './modules/school/pages/SchoolAbout';
import SchoolCourses from './modules/school/pages/SchoolCourses';
import SchoolAdmissions from './modules/school/pages/SchoolAdmissions';
import SchoolFacilities from './modules/school/pages/SchoolFacilities';
import SchoolFaculty from './modules/school/pages/SchoolFaculty';
import SchoolGallery from './modules/school/pages/SchoolGallery';
import SchoolContact from './modules/school/pages/SchoolContact';

import JuniorCollegeHome from './modules/juniorcollege/pages/JuniorCollegeHome';
import DefenseAcademyLayout from './modules/defenseacademy/layouts/DefenseAcademyLayout';
import DefenseAcademyHome from './modules/defenseacademy/pages/DefenseAcademyHome';
import DefenseAcademyAbout from './modules/defenseacademy/pages/DefenseAcademyAbout';
import DefenseAcademyAcademics from './modules/defenseacademy/pages/DefenseAcademyAcademics';
import DefenseAcademyFacilities from './modules/defenseacademy/pages/DefenseAcademyFacilities';
import DefenseAcademyAchievements from './modules/defenseacademy/pages/DefenseAcademyAchievements';
import DefenseAcademyAdmissions from './modules/defenseacademy/pages/DefenseAcademyAdmissions';
import DefenseAcademyGallery from './modules/defenseacademy/pages/DefenseAcademyGallery';
import DefenseAcademyTransport from './modules/defenseacademy/pages/DefenseAcademyTransport';
import DefenseAcademyContact from './modules/defenseacademy/pages/DefenseAcademyContact';

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
        
        <Route path="/school" element={<SchoolLayout />}>
          <Route index element={<SchoolHome />} />
          <Route path="about" element={<SchoolAbout />} />
          <Route path="courses" element={<SchoolCourses />} />
          <Route path="admissions" element={<SchoolAdmissions />} />
          <Route path="facilities" element={<SchoolFacilities />} />
          <Route path="faculty" element={<SchoolFaculty />} />
          <Route path="gallery" element={<SchoolGallery />} />
          <Route path="contact" element={<SchoolContact />} />
        </Route>
        
        <Route path="/juniorcollege" element={<InstitutionLayout institutionId="juniorcollege" />}>
          <Route index element={<JuniorCollegeHome />} />
        </Route>
        
        <Route path="/defenseacademy" element={<DefenseAcademyLayout />}>
          <Route index element={<DefenseAcademyHome />} />
          <Route path="about" element={<DefenseAcademyAbout />} />
          <Route path="academics" element={<DefenseAcademyAcademics />} />
          <Route path="facilities" element={<DefenseAcademyFacilities />} />
          <Route path="achievements" element={<DefenseAcademyAchievements />} />
          <Route path="admissions" element={<DefenseAcademyAdmissions />} />
          <Route path="gallery" element={<DefenseAcademyGallery />} />
          <Route path="transport" element={<DefenseAcademyTransport />} />
          <Route path="contact" element={<DefenseAcademyContact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
