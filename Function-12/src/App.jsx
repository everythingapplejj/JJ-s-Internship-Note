import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import F12Main from './F12Main';

import Accept from './pages/Accept';
import AdditionPopUp from './pages/AdditionPopUp';
import AlbamonCollection from './pages/AlbamonCollection';
import Alerts from './pages/Alerts';
import AngleLeftOutline from './pages/AngleLeftOutline';
import AngleLeftOutline1 from './pages/AngleLeftOutline1';
import AngleLeftOutline2 from './pages/AngleLeftOutline2';
import AngleLeftOutline3 from './pages/AngleLeftOutline3';
import AngleLeftOutline4 from './pages/AngleLeftOutline4';
import AppNameIdeation from './pages/AppNameIdeation';
import ApplicantPage from './pages/ApplicantPage';
import ApplicantPage1 from './pages/ApplicantPage1';
import ApplicantPage2 from './pages/ApplicantPage2';
import ApplicantPageContactPopUpPage from './pages/ApplicantPageContactPopUpPage';
import ApplicantPageContactPopUpPage1 from './pages/ApplicantPageContactPopUpPage1';
//import ApplicantPageContactPopUpPage1 from './pages/ApplicantPageContactPopUpPage1';
import ApplicantPageContactPopUpPage1Sidebar from './pages/ApplicantPageContactPopUpPage1Sidebar';
import ApplicantPageContactPopUpPage2 from './pages/ApplicantPageContactPopUpPage2';
import ApplicantPageContactPopUpPage2Sidebar from './pages/ApplicantPageContactPopUpPage2Sidebar';
import ApplicantPageContactPopUpPage3 from './pages/ApplicantPageContactPopUpPage3';
import ApplicantPageContactPopUpPage4 from './pages/ApplicantPageContactPopUpPage4';
import ApplicantPageSidebar from './pages/ApplicantPageSidebar';
import ApplicantPageWithFullRelevantJobs from './pages/ApplicantPageWithFullRelevantJobs';
import ApplicantPageWithFullRelevantJobs1 from './pages/ApplicantPageWithFullRelevantJobs1';
import ApplicantPageWithFullRelevantJobsSidebar from './pages/ApplicantPageWithFullRelevantJobsSidebar';
import ApplicantPageWithJobDescriptionFocusSidebar from './pages/ApplicantPageWithJobDescriptionFocusSidebar';
import ApplicantPageWithSkillsFocus from './pages/ApplicantPageWithSkillsFocus';
import ApplicantPageWithSkillsFocusSidebar from './pages/ApplicantPageWithSkillsFocusSidebar';
import ApplicantProfilePage from './pages/ApplicantProfilePage';
import ApplicantProfilePageExperienceListPopUp from './pages/ApplicantProfilePageExperienceListPopUp';
import ApplicantProfilePageFilesUploadedPopUp from './pages/ApplicantProfilePageFilesUploadedPopUp';
import ApplicantProfilePageSingleExperiencePopUp from './pages/ApplicantProfilePageSingleExperiencePopUp';
import ApplicantProfilePageSkillsPopUp from './pages/ApplicantProfilePageSkillsPopUp';
import ApplicantProfileWebSketchVersion3 from './pages/ApplicantProfileWebSketchVersion3';
import ApplicantProfileWebVersion1 from './pages/ApplicantProfileWebVersion1';
import ApplicantProfileWpopUpWarningWebSketch from './pages/ApplicantProfileWpopUpWarningWebSketch';
import ApplicantsHover from './pages/ApplicantsHover';
import ApplicantsPage from './pages/ApplicantsPage';
import ApplicantsPageApplicationStatusFilterActive from './pages/ApplicantsPageApplicationStatusFilterActive';
import ApplicantsPageApplicationStatusFilterActiveLong from './pages/ApplicantsPageApplicationStatusFilterActiveLong';
import ApplicantsPageApplicationStatusFilterActiveLong1 from './pages/ApplicantsPageApplicationStatusFilterActiveLong1';
import ApplicantsPageApplicationStatusFilterActiveShort from './pages/ApplicantsPageApplicationStatusFilterActiveShort';
import ApplicantsPageApplicationStatusFilterActiveShort1 from './pages/ApplicantsPageApplicationStatusFilterActiveShort1';
import ApplicantsPageApplicationStatusFilterActiveSidebar from './pages/ApplicantsPageApplicationStatusFilterActiveSidebar';
import ApplicantsPageEmploymentStatusFilterActive from './pages/ApplicantsPageEmploymentStatusFilterActive';
import ApplicantsPageEmploymentStatusFilterActiveLong from './pages/ApplicantsPageEmploymentStatusFilterActiveLong';
import ApplicantsPageEmploymentStatusFilterActiveShort from './pages/ApplicantsPageEmploymentStatusFilterActiveShort';
import ApplicantsPageEmploymentStatusFilterActiveShort1 from './pages/ApplicantsPageEmploymentStatusFilterActiveShort1';
import ApplicantsPageEmploymentStatusFilterActiveSidebar from './pages/ApplicantsPageEmploymentStatusFilterActiveSidebar';
import ApplicantsPageFlowbite from './pages/ApplicantsPageFlowbite';
import ApplicantsPageListingFilterActive from './pages/ApplicantsPageListingFilterActive';
import ApplicantsPageListingFilterActiveLong from './pages/ApplicantsPageListingFilterActiveLong';
import ApplicantsPageListingFilterActiveShort from './pages/ApplicantsPageListingFilterActiveShort';
import ApplicantsPageListingFilterActiveShort1 from './pages/ApplicantsPageListingFilterActiveShort1';
import ApplicantsPageListingFilterActiveSidebar from './pages/ApplicantsPageListingFilterActiveSidebar';
import ApplicantsPageWebWithGiestVersion2Sketch from './pages/ApplicantsPageWebWithGiestVersion2Sketch';
import ApplicantsPageWebWithGiestVersion2Sketch1 from './pages/ApplicantsPageWebWithGiestVersion2Sketch1';
import ApplicantsPageWebWithGiestVersion3Sketch from './pages/ApplicantsPageWebWithGiestVersion3Sketch';
import ApplicantsPageWithFilters from './pages/ApplicantsPageWithFilters';
import ApplicantsPageWithFilters1 from './pages/ApplicantsPageWithFilters1';
import ApplicantsPageWithFilters2 from './pages/ApplicantsPageWithFilters2';
import ApplicantsPageWithFilters3 from './pages/ApplicantsPageWithFilters3';
import ApplicantsPageWithFiltersEmpty from './pages/ApplicantsPageWithFiltersEmpty';
import ApplicantsPageWithFiltersEmpty1 from './pages/ApplicantsPageWithFiltersEmpty1';
import ApplicantsPageWithFiltersEmpty2 from './pages/ApplicantsPageWithFiltersEmpty2';
import ApplicantsPageWithFiltersEmptySidebar from './pages/ApplicantsPageWithFiltersEmptySidebar';
import ApplicantsPageWithFiltersFlowbite from './pages/ApplicantsPageWithFiltersFlowbite';
import ApplicantsPageWithFiltersSidebar from './pages/ApplicantsPageWithFiltersSidebar';
import Apply from './pages/Apply';
import Apply1 from './pages/Apply1';
import Apply2 from './pages/Apply2';
import Apply3 from './pages/Apply3';
import AppyDetailedDescriptionAndInfo from './pages/AppyDetailedDescriptionAndInfo';
import AutocompleteInput from './pages/AutocompleteInput';
import AutocompleteInput1 from './pages/AutocompleteInput1';
import BadgesProgressBars from './pages/BadgesProgressBars';
import BlushEmail from './pages/BlushEmail';
import BrandingIdeation from './pages/BrandingIdeation';
import Breadcrumbs from './pages/Breadcrumbs';
import Button from './pages/Button';
import Button1 from './pages/Button1';
import Button2 from './pages/Button2';
import Button3 from './pages/Button3';
import Button4 from './pages/Button4';
import Button5 from './pages/Button5';
import Button6 from './pages/Button6';
import Button7 from './pages/Button7';
import Buttons from './pages/Buttons';
import Cards from './pages/Cards';
import CheckOutline from './pages/CheckOutline';
import ColorPalleteRoma from './pages/ColorPalleteRoma';
import CompletedApplication from './pages/CompletedApplication';
import CompletedApplication1 from './pages/CompletedApplication1';
import CompletedApplication2 from './pages/CompletedApplication2';
import CreateAnAccount from './pages/CreateAnAccount';
import CreateJobSeekerAccount from './pages/CreateJobSeekerAccount';
import CreatePasswordPrompt from './pages/CreatePasswordPrompt';
import DashboardHover from './pages/DashboardHover';
import DeleteConfirmation from './pages/DeleteConfirmation';
import Desktop1 from './pages/Desktop1';
import Desktop11 from './pages/Desktop11';
import DiffVersion11 from './pages/DiffVersion11';
import DiffVersion111 from './pages/DiffVersion111';
import DiffVersion1110 from './pages/DiffVersion1110';
import DiffVersion1111 from './pages/DiffVersion1111';
import DiffVersion112 from './pages/DiffVersion112';
import DiffVersion113 from './pages/DiffVersion113';
import DiffVersion114 from './pages/DiffVersion114';
import DiffVersion115 from './pages/DiffVersion115';
import DiffVersion116 from './pages/DiffVersion116';
import DiffVersion117 from './pages/DiffVersion117';
import DiffVersion118 from './pages/DiffVersion118';
import DiffVersion119 from './pages/DiffVersion119';
import DropdownMenu from './pages/DropdownMenu';
import EditDelete from './pages/EditDelete';
import EditDetailsMyDetailsPopUpCard from './pages/EditDetailsMyDetailsPopUpCard';
import EditDetailsMyDetailsPopUpCard1 from './pages/EditDetailsMyDetailsPopUpCard1';
import EditDetailsMyDetailsPopUpCard2 from './pages/EditDetailsMyDetailsPopUpCard2';
import EmailVerifiedAndUserClicksConitnueToExploreHomePage from './pages/EmailVerifiedAndUserClicksConitnueToExploreHomePage';
import EmployeeProfileEmployerSketch4 from './pages/EmployeeProfileEmployerSketch4';
import EmployeeSignUp from './pages/EmployeeSignUp';
import EmployerCloseListing from './pages/EmployerCloseListing';
import EmployerDashboard from './pages/EmployerDashboard';
import EmployerDashboard1 from './pages/EmployerDashboard1';
import EmployerDashboard2 from './pages/EmployerDashboard2';
import EmployerDashboard3 from './pages/EmployerDashboard3';
import EmployerDashboard4 from './pages/EmployerDashboard4';
import EmployerDashboard5 from './pages/EmployerDashboard5';
import EmployerDashboardSidebar from './pages/EmployerDashboardSidebar';
import EmployerDashboardV2 from './pages/EmployerDashboardV2';
import EmployerDeleteListing from './pages/EmployerDeleteListing';
import EmployerDeleteListing1 from './pages/EmployerDeleteListing1';
import EmployerDeleteListing2 from './pages/EmployerDeleteListing2';
import EmployerDeleteListing3 from './pages/EmployerDeleteListing3';
import EmployerDeleteListing4 from './pages/EmployerDeleteListing4';
import EmployerDeleteListing5 from './pages/EmployerDeleteListing5';
import EmployerErrorPage from './pages/EmployerErrorPage';
import EmployerErrorPage1 from './pages/EmployerErrorPage1';
import EmployerErrorPage2 from './pages/EmployerErrorPage2';
import EmployerLogoutPopup from './pages/EmployerLogoutPopup';
import EmployerMyListings from './pages/EmployerMyListings';
import EmployerMyListingsEditListing from './pages/EmployerMyListingsEditListing';
import EmployerMyListingsEditListing1 from './pages/EmployerMyListingsEditListing1';
import EmployerMyListingsEditListing2 from './pages/EmployerMyListingsEditListing2';
import EmployerMyListingsEditListing3 from './pages/EmployerMyListingsEditListing3';
import EmployerMyListingsEditListing4 from './pages/EmployerMyListingsEditListing4';
import EmployerMyListingsEditListingExpanded from './pages/EmployerMyListingsEditListingExpanded';
import EmployerMyListingsEditListingExpanded1 from './pages/EmployerMyListingsEditListingExpanded1';
import EmployerMyListingsPage from './pages/EmployerMyListingsPage';
import EmployerMyListingsPage1 from './pages/EmployerMyListingsPage1';
import EmployerMyListingsPage2 from './pages/EmployerMyListingsPage2';
import EmployerMyListingsPageFilterDropdown from './pages/EmployerMyListingsPageFilterDropdown';
import EmployerMyListingsPageFilterDropdown1 from './pages/EmployerMyListingsPageFilterDropdown1';
import EmployerMyListingsPageFilterDropdownPopUp from './pages/EmployerMyListingsPageFilterDropdownPopUp';
import EmployerMyListingsPageFilterDropdownPopUp1 from './pages/EmployerMyListingsPageFilterDropdownPopUp1';
import EmployerMyListingsPageFilterDropdownPopUp2 from './pages/EmployerMyListingsPageFilterDropdownPopUp2';
import EmployerMyListingsPageSortDropdown from './pages/EmployerMyListingsPageSortDropdown';
import EmployerMyListingsPageSortDropdown1 from './pages/EmployerMyListingsPageSortDropdown1';
import EmployerMyListingsReviewListingMinimized from './pages/EmployerMyListingsReviewListingMinimized';
import EmployerMyListingsReviewListingMinimized1 from './pages/EmployerMyListingsReviewListingMinimized1';
import EmployerNoListingsDashboard from './pages/EmployerNoListingsDashboard';
import EmployerNoListingsDashboard1 from './pages/EmployerNoListingsDashboard1';
import EmployerNoListingsDashboard2 from './pages/EmployerNoListingsDashboard2';
import EmployerNoListingsDashboardSidebar from './pages/EmployerNoListingsDashboardSidebar';
import EmployerPostAjobInputInfo from './pages/EmployerPostAjobInputInfo';
import EmployerPostAjobInputInfoCustomQuestionsEnabled from './pages/EmployerPostAjobInputInfoCustomQuestionsEnabled';
import EmployerPostAjobInteractionExample from './pages/EmployerPostAjobInteractionExample';
import EmployerPostAjobInteractionExampleV2 from './pages/EmployerPostAjobInteractionExampleV2';
import EmployerPostAjobInteractionFeedback from './pages/EmployerPostAjobInteractionFeedback';
import EmployerPostAjobInteractionFeedbackV2 from './pages/EmployerPostAjobInteractionFeedbackV2';
import EmployerPostAjobReviewInfo from './pages/EmployerPostAjobReviewInfo';
import EmployerPostAjobReviewInfo1 from './pages/EmployerPostAjobReviewInfo1';
import EmployerPostAjobReviewInfoV2 from './pages/EmployerPostAjobReviewInfoV2';
import EmployerPostAjobReviewListingcard from './pages/EmployerPostAjobReviewListingcard';
import EmployerPostAjobReviewListingexpanded from './pages/EmployerPostAjobReviewListingexpanded';
import EmployerPostAjobStep1 from './pages/EmployerPostAjobStep1';
import EmployerPostAjobStep1V1 from './pages/EmployerPostAjobStep1V1';
import EmployerPostAjobStep1V11 from './pages/EmployerPostAjobStep1V11';
import EmployerPostAjobStep1V12 from './pages/EmployerPostAjobStep1V12';
import EmployerPostAjobStep1V2 from './pages/EmployerPostAjobStep1V2';
import EmployerPostAjobStep1V21 from './pages/EmployerPostAjobStep1V21';
import EmployerPostAjobStep1V22 from './pages/EmployerPostAjobStep1V22';
import EmployerPostAjobStep1V23 from './pages/EmployerPostAjobStep1V23';
import EmployerPostAjobStep2V1 from './pages/EmployerPostAjobStep2V1';
import EmployerPostAjobStep2V11 from './pages/EmployerPostAjobStep2V11';
import EmployerPostAjobStep2V12 from './pages/EmployerPostAjobStep2V12';
import EmployerPostAjobStep2V2 from './pages/EmployerPostAjobStep2V2';
import EmployerPostAjobStep2V21 from './pages/EmployerPostAjobStep2V21';
import EmployerPostAjobStep2V22 from './pages/EmployerPostAjobStep2V22';
import EmployerPostAjobStep2V3 from './pages/EmployerPostAjobStep2V3';
import EmployerPostAjobStep2V31 from './pages/EmployerPostAjobStep2V31';
import EmployerPostAjobStep2V32 from './pages/EmployerPostAjobStep2V32';
import EmployerProfilePage from './pages/EmployerProfilePage';
import EmployerProfilePage1 from './pages/EmployerProfilePage1';
import EmployerProfilePage2 from './pages/EmployerProfilePage2';
import EmployerProfilePage3 from './pages/EmployerProfilePage3';
import EmployerProfilePage4 from './pages/EmployerProfilePage4';
import EmployerProfilePageLong from './pages/EmployerProfilePageLong';
import EmployerProfilePageLongHeader from './pages/EmployerProfilePageLongHeader';
import EmployerProfilePageLongHeader1 from './pages/EmployerProfilePageLongHeader1';
import EmployerProfilePageLongHeaderSidebar from './pages/EmployerProfilePageLongHeaderSidebar';
import EmployerProfilePageShort from './pages/EmployerProfilePageShort';
import EmployerProfilePageShort1 from './pages/EmployerProfilePageShort1';
import EmployerProfilePageSidebar from './pages/EmployerProfilePageSidebar';
import EmployerProfilePageWithNoticeLong from './pages/EmployerProfilePageWithNoticeLong';
import EmployerProfilePageWithNoticeLongHeader from './pages/EmployerProfilePageWithNoticeLongHeader';
import EmployerProfilePageWithNoticeLongHeader1 from './pages/EmployerProfilePageWithNoticeLongHeader1';
import EmployerProfilePageWithNoticeLongHeaderSidebar from './pages/EmployerProfilePageWithNoticeLongHeaderSidebar';
import EmployerProfilePageWithNoticeShort from './pages/EmployerProfilePageWithNoticeShort';
import EmployerProfilePageWithNoticeShort1 from './pages/EmployerProfilePageWithNoticeShort1';
import EmployerProfilePageWithNoticeShort2 from './pages/EmployerProfilePageWithNoticeShort2';
import EmployerProfilePageWithNoticeShort3 from './pages/EmployerProfilePageWithNoticeShort3';
import EmployerProfilePageWithNoticeShort4 from './pages/EmployerProfilePageWithNoticeShort4';
import EmployerProfilePageWithNoticeSidebar from './pages/EmployerProfilePageWithNoticeSidebar';
import EmployerSignIn from './pages/EmployerSignIn';
import EmployerSignIn1 from './pages/EmployerSignIn1';
import EmployerSignUp from './pages/EmployerSignUp';
import EmployerSignUp1 from './pages/EmployerSignUp1';
import EmployerSignUp2 from './pages/EmployerSignUp2';
import EmployerSignUpConfirmation from './pages/EmployerSignUpConfirmation';
import EmployerSignUpConfirmation1 from './pages/EmployerSignUpConfirmation1';
import Error from './pages/Error';
import Example from './pages/Example';
import Finalists from './pages/Finalists';
import FlowbiteIconsOutline from './pages/FlowbiteIconsOutline';
import FlowbiteIconsSolid from './pages/FlowbiteIconsSolid';
import FontSize from './pages/FontSize';
import Frame1 from './pages/Frame1';
import Frame1000004376 from './pages/Frame1000004376';
import Frame1000004406 from './pages/Frame1000004406';
import Frame1000004434 from './pages/Frame1000004434';
import Frame1000004437 from './pages/Frame1000004437';
import Frame16 from './pages/Frame16';
import Frame17 from './pages/Frame17';
import Frame19 from './pages/Frame19';
import Frame4 from './pages/Frame4';
import FullCreateAccount from './pages/FullCreateAccount';
import Group10 from './pages/Group10';
import Group1002 from './pages/Group1002';
import Group1004 from './pages/Group1004';
import Group1005 from './pages/Group1005';
import Group1006 from './pages/Group1006';
import Group1007 from './pages/Group1007';
import Group1008 from './pages/Group1008';
import Group1009 from './pages/Group1009';
import Group1010 from './pages/Group1010';
import Group1011 from './pages/Group1011';
import Group1012 from './pages/Group1012';
import Group1013 from './pages/Group1013';
import Group1014 from './pages/Group1014';
import Group1015 from './pages/Group1015';
import Group1016 from './pages/Group1016';
import Group1017 from './pages/Group1017';
import Group1019 from './pages/Group1019';
import Group1021 from './pages/Group1021';
import Group1022 from './pages/Group1022';
import Group1023 from './pages/Group1023';
import Group1024 from './pages/Group1024';
import Group1025 from './pages/Group1025';
import Group1026 from './pages/Group1026';
import Group1027 from './pages/Group1027';
import Group11 from './pages/Group11';
import Group333 from './pages/Group333';
import Group3331 from './pages/Group3331';
import Home from './pages/Home';
import Home1 from './pages/Home1';
import Home2 from './pages/Home2';
//import Home3 from './pages/Home3';
import Home3 from './pages/Home3';
import Home4 from './pages/Home4';
import Home5 from './pages/Home5';
import HomeDesktop from './pages/HomeDesktop';
import HomeDiffIdea from './pages/HomeDiffIdea';
import HomeDiffVersion1 from './pages/HomeDiffVersion1';
import HomeDiffVersion11 from './pages/HomeDiffVersion11';
import HomeIdea1 from './pages/HomeIdea1';
import Homepage from './pages/Homepage';
import IaIdeation from './pages/IaIdeation';
import Inbox from './pages/Inbox';
import Input from './pages/Input';
import Input1 from './pages/Input1';
import InputField from './pages/InputField';
import InputNumber from './pages/InputNumber';
import JobEzSignUp from './pages/JobEzSignUp';
import JobEzSignUp1 from './pages/JobEzSignUp1';
import JobEzSignUp2 from './pages/JobEzSignUp2';
import JobEzSignUp3 from './pages/JobEzSignUp3';
import JobEzSignUp4 from './pages/JobEzSignUp4';
import JobEzWordMark from './pages/JobEzWordMark';
import JobListing from './pages/JobListing';
import JobListing1 from './pages/JobListing1';
import JobListing10 from './pages/JobListing10';
import JobListing11 from './pages/JobListing11';
import JobListing12 from './pages/JobListing12';
import JobListing13 from './pages/JobListing13';
import JobListing14 from './pages/JobListing14';
import JobListing15 from './pages/JobListing15';
import JobListing16 from './pages/JobListing16';
import JobListing17 from './pages/JobListing17';
import JobListing18 from './pages/JobListing18';
import JobListing19 from './pages/JobListing19';
import JobListing2 from './pages/JobListing2';
import JobListing20 from './pages/JobListing20';
import JobListing21 from './pages/JobListing21';
import JobListing22 from './pages/JobListing22';
import JobListing23 from './pages/JobListing23';
import JobListing24 from './pages/JobListing24';
import JobListing25 from './pages/JobListing25';
import JobListing26 from './pages/JobListing26';
import JobListing27 from './pages/JobListing27';
import JobListing3 from './pages/JobListing3';
import JobListing4 from './pages/JobListing4';
import JobListing5 from './pages/JobListing5';
import JobListing6 from './pages/JobListing6';
import JobListing7 from './pages/JobListing7';
import JobListing8 from './pages/JobListing8';
import JobListing9 from './pages/JobListing9';
import Jumbotron from './pages/Jumbotron';
import LandingPageWithExploreJobs from './pages/LandingPageWithExploreJobs';
import Listing from './pages/Listing';
import ListingLifeCycle from './pages/ListingLifeCycle';
import LoginCreateAnAccountScreen from './pages/LoginCreateAnAccountScreen';
import Logo from './pages/Logo';
import Logo1 from './pages/Logo1';
import Logo10 from './pages/Logo10';
import Logo11 from './pages/Logo11';
import Logo12 from './pages/Logo12';
import Logo13 from './pages/Logo13';
import Logo14 from './pages/Logo14';
import Logo15 from './pages/Logo15';
import Logo16 from './pages/Logo16';
import Logo17 from './pages/Logo17';
import Logo18 from './pages/Logo18';
import Logo19 from './pages/Logo19';
import Logo2 from './pages/Logo2';
import Logo20 from './pages/Logo20';
import Logo21 from './pages/Logo21';
import Logo22 from './pages/Logo22';
import Logo23 from './pages/Logo23';
import Logo24 from './pages/Logo24';
import Logo25 from './pages/Logo25';
import Logo26 from './pages/Logo26';
import Logo27 from './pages/Logo27';
import Logo28 from './pages/Logo28';
import Logo29 from './pages/Logo29';
import Logo3 from './pages/Logo3';
import Logo30 from './pages/Logo30';
import Logo31 from './pages/Logo31';
import Logo32 from './pages/Logo32';
import Logo33 from './pages/Logo33';
import Logo4 from './pages/Logo4';
import Logo5 from './pages/Logo5';
import Logo6 from './pages/Logo6';
import Logo7 from './pages/Logo7';
import Logo8 from './pages/Logo8';
import Logo9 from './pages/Logo9';
import LogoutHover from './pages/LogoutHover';
import LogoutPopup from './pages/LogoutPopup';
import MacBookPro161 from './pages/MacBookPro161';
import MacBookPro1610 from './pages/MacBookPro1610';
import MacBookPro1611 from './pages/MacBookPro1611';
import MacBookPro1612 from './pages/MacBookPro1612';
import MacBookPro162 from './pages/MacBookPro162';
import MacBookPro1622 from './pages/MacBookPro1622';
import MacBookPro1623 from './pages/MacBookPro1623';
import MacBookPro1624 from './pages/MacBookPro1624';
import MacBookPro1625 from './pages/MacBookPro1625';
import MacBookPro1626 from './pages/MacBookPro1626';
import MacBookPro1627 from './pages/MacBookPro1627';
import MacBookPro1628 from './pages/MacBookPro1628';
import MacBookPro1629 from './pages/MacBookPro1629';
import MacBookPro163 from './pages/MacBookPro163';
import MacBookPro1630 from './pages/MacBookPro1630';
import MacBookPro1631 from './pages/MacBookPro1631';
import MacBookPro1632 from './pages/MacBookPro1632';
import MacBookPro1635 from './pages/MacBookPro1635';
import MacBookPro164 from './pages/MacBookPro164';
import MacBookPro166 from './pages/MacBookPro166';
import MacBookPro167 from './pages/MacBookPro167';
import MacBookPro169 from './pages/MacBookPro169';
import ManageApplicationEmployerSketch1 from './pages/ManageApplicationEmployerSketch1';
import ManageApplicationEmployerSketch2 from './pages/ManageApplicationEmployerSketch2';
import ManageApplicationEmployerSketch3 from './pages/ManageApplicationEmployerSketch3';
import MarketingUiNavbars from './pages/MarketingUiNavbars';
import Modal from './pages/Modal';
import ModalWithFormsDefault from './pages/ModalWithFormsDefault';
import MyAccountHover from './pages/MyAccountHover';
import MyListingsHover from './pages/MyListingsHover';
import MyProfile from './pages/MyProfile';
import MyProfile1 from './pages/MyProfile1';
import MyProfileAppliedJobs from './pages/MyProfileAppliedJobs';
import MyProfileAppliedJobs1 from './pages/MyProfileAppliedJobs1';
import MyProfileAppliedJobs2 from './pages/MyProfileAppliedJobs2';
import MyProfileMySchedule from './pages/MyProfileMySchedule';
import MyProfileSavedCompaniesJobs from './pages/MyProfileSavedCompaniesJobs';
import Notifications from './pages/Notifications';
import Notifs from './pages/Notifs';
import OtherCompetitveStudiesSecondaryResearch from './pages/OtherCompetitveStudiesSecondaryResearch';
import Pagination from './pages/Pagination';
import Pagination1 from './pages/Pagination1';
import Pagination2 from './pages/Pagination2';
import Pagination3 from './pages/Pagination3';
import Pagination4 from './pages/Pagination4';
import Pagination5 from './pages/Pagination5';
import Pagination6 from './pages/Pagination6';
import Pagination7 from './pages/Pagination7';
import PartTimePalCreateListingPage from './pages/PartTimePalCreateListingPage';
import PartTimePalEmployerProfilePageEmployeeSideView from './pages/PartTimePalEmployerProfilePageEmployeeSideView';
import PartTimePalLandingPageEmployee from './pages/PartTimePalLandingPageEmployee';
import PartTimePalLandingPageSketchSami from './pages/PartTimePalLandingPageSketchSami';
import PartTimePalListingPageEmployee from './pages/PartTimePalListingPageEmployee';
import PartTimePalListingsPageEmployerSketch from './pages/PartTimePalListingsPageEmployerSketch';
import PartTimePalListingsPageWebWithGiestSketch from './pages/PartTimePalListingsPageWebWithGiestSketch';
import PartTimePalListingsPageWithVercelEmployerSketch from './pages/PartTimePalListingsPageWithVercelEmployerSketch';
import PartTimePalMessagesPage from './pages/PartTimePalMessagesPage';
import PartTimePalMobileWireframes from './pages/PartTimePalMobileWireframes';
import PartTimePalResourcesPageEmployer from './pages/PartTimePalResourcesPageEmployer';
import PdfViewer from './pages/PdfViewer';
import PopUpWindow from './pages/PopUpWindow';
import Popovers from './pages/Popovers';
import Post from './pages/Post';
import PostAlistingHover from './pages/PostAlistingHover';
import PostApplicantActionApplicantsPageWebVersion1Sketch from './pages/PostApplicantActionApplicantsPageWebVersion1Sketch';
import PostApplicantActionPageSketchVersion2 from './pages/PostApplicantActionPageSketchVersion2';
import PostApplicantActionPageSketchVersion3 from './pages/PostApplicantActionPageSketchVersion3';
import PostEmployerSignUp from './pages/PostEmployerSignUp';
import Profile from './pages/Profile';
import ProfileCreation from './pages/ProfileCreation';
import ProgressBars from './pages/ProgressBars';
import Property1Closed from './pages/Property1Closed';
import Property1Default from './pages/Property1Default';
import Property1Default1 from './pages/Property1Default1';
import Property1Default2 from './pages/Property1Default2';
import Property1Deleted from './pages/Property1Deleted';
import Property1Draft from './pages/Property1Draft';
import Property1EmployeeSide from './pages/Property1EmployeeSide';
import Property1Selected from './pages/Property1Selected';
import Property1Sidebar from './pages/Property1Sidebar';
import Property1Variant2 from './pages/Property1Variant2';
import Property1Variant21 from './pages/Property1Variant21';
import Property1Variant22 from './pages/Property1Variant22';
import Property1Variant3 from './pages/Property1Variant3';
import Property1Variant31 from './pages/Property1Variant31';
import Property1Variant32 from './pages/Property1Variant32';
import Property1Variant4 from './pages/Property1Variant4';
import Property1Variant5 from './pages/Property1Variant5';
import Property1Variant6 from './pages/Property1Variant6';
import Property1Variant7 from './pages/Property1Variant7';
import Property1Variant8 from './pages/Property1Variant8';
import QuickCreateAccount from './pages/QuickCreateAccount';
import RangeSliders from './pages/RangeSliders';
import Roma from './pages/Roma';
import RomaShortlistOfNames from './pages/RomaShortlistOfNames';
import Search from './pages/Search';
import SfProDisplay from './pages/SfProDisplay';
import SidebarFreeComponent from './pages/SidebarFreeComponent';
import SignIn from './pages/SignIn';
import SignIn1 from './pages/SignIn1';
import SignIn2 from './pages/SignIn2';
import SignIn3 from './pages/SignIn3';
import SignUp from './pages/SignUp';
import SignUp1 from './pages/SignUp1';
import SignUp2 from './pages/SignUp2';
import Skeleton from './pages/Skeleton';
import Skeleton1 from './pages/Skeleton1';
import Skeleton10 from './pages/Skeleton10';
import Skeleton11 from './pages/Skeleton11';
import Skeleton12 from './pages/Skeleton12';
import Skeleton13 from './pages/Skeleton13';
import Skeleton14 from './pages/Skeleton14';
import Skeleton15 from './pages/Skeleton15';
import Skeleton16 from './pages/Skeleton16';
import Skeleton17 from './pages/Skeleton17';
import Skeleton18 from './pages/Skeleton18';
import Skeleton19 from './pages/Skeleton19';
import Skeleton2 from './pages/Skeleton2';
import Skeleton20 from './pages/Skeleton20';
import Skeleton21 from './pages/Skeleton21';
import Skeleton22 from './pages/Skeleton22';
import Skeleton23 from './pages/Skeleton23';
import Skeleton24 from './pages/Skeleton24';
import Skeleton25 from './pages/Skeleton25';
import Skeleton26 from './pages/Skeleton26';
import Skeleton27 from './pages/Skeleton27';
import Skeleton28 from './pages/Skeleton28';
import Skeleton29 from './pages/Skeleton29';
import Skeleton3 from './pages/Skeleton3';
import Skeleton30 from './pages/Skeleton30';
import Skeleton31 from './pages/Skeleton31';
import Skeleton32 from './pages/Skeleton32';
import Skeleton33 from './pages/Skeleton33';
import Skeleton34 from './pages/Skeleton34';
import Skeleton35 from './pages/Skeleton35';
import Skeleton4 from './pages/Skeleton4';
import Skeleton5 from './pages/Skeleton5';
import Skeleton6 from './pages/Skeleton6';
import Skeleton7 from './pages/Skeleton7';
import Skeleton8 from './pages/Skeleton8';
import Skeleton9 from './pages/Skeleton9';
import SmallBusinessEmployer from './pages/SmallBusinessEmployer';
import SoonArchive from './pages/SoonArchive';
import Start from './pages/Start';
import StepperNavigation from './pages/StepperNavigation';
import SubinJobEzHomePageSketch1 from './pages/SubinJobEzHomePageSketch1';
import SubinJobEzHomePageSketch2 from './pages/SubinJobEzHomePageSketch2';
import SurfacePro81 from './pages/SurfacePro81';
import Tag from './pages/Tag';
import TextInputs from './pages/TextInputs';
import TextInputs1 from './pages/TextInputs1';
import Toast from './pages/Toast';
import Toast1 from './pages/Toast1';
import Toast2 from './pages/Toast2';
import Toast3 from './pages/Toast3';
import Toast4 from './pages/Toast4';
import Toast5 from './pages/Toast5';
import Toast6 from './pages/Toast6';
import TypeAdvancedStateActiveDarkModeFalseSizeDefault from './pages/TypeAdvancedStateActiveDarkModeFalseSizeDefault';
import TypeAdvancedStateActiveDarkModeFalseSizeLarge from './pages/TypeAdvancedStateActiveDarkModeFalseSizeLarge';
import TypeAdvancedStateActiveDarkModeTrueSizeDefault from './pages/TypeAdvancedStateActiveDarkModeTrueSizeDefault';
import TypeAdvancedStateActiveDarkModeTrueSizeLarge from './pages/TypeAdvancedStateActiveDarkModeTrueSizeLarge';
import TypeAdvancedStateInitialDarkModeFalseSizeDefault from './pages/TypeAdvancedStateInitialDarkModeFalseSizeDefault';
import TypeAdvancedStateInitialDarkModeFalseSizeLarge from './pages/TypeAdvancedStateInitialDarkModeFalseSizeLarge';
import TypeAdvancedStateInitialDarkModeTrueSizeDefault from './pages/TypeAdvancedStateInitialDarkModeTrueSizeDefault';
import TypeAdvancedStateInitialDarkModeTrueSizeLarge from './pages/TypeAdvancedStateInitialDarkModeTrueSizeLarge';
import TypeAdvancedStateTypingDarkModeFalseSizeDefault from './pages/TypeAdvancedStateTypingDarkModeFalseSizeDefault';
import TypeAdvancedStateTypingDarkModeFalseSizeLarge from './pages/TypeAdvancedStateTypingDarkModeFalseSizeLarge';
import TypeAdvancedStateTypingDarkModeTrueSizeDefault from './pages/TypeAdvancedStateTypingDarkModeTrueSizeDefault';
import TypeAdvancedStateTypingDarkModeTrueSizeLarge from './pages/TypeAdvancedStateTypingDarkModeTrueSizeLarge';
import TypeAdvancedStateWithCtaDarkModeFalseSizeDefault from './pages/TypeAdvancedStateWithCtaDarkModeFalseSizeDefault';
import TypeAdvancedStateWithCtaDarkModeFalseSizeLarge from './pages/TypeAdvancedStateWithCtaDarkModeFalseSizeLarge';
import TypeAdvancedStateWithCtaDarkModeTrueSizeDefault from './pages/TypeAdvancedStateWithCtaDarkModeTrueSizeDefault';
import TypeAdvancedStateWithCtaDarkModeTrueSizeLarge from './pages/TypeAdvancedStateWithCtaDarkModeTrueSizeLarge';
import TypeAlertsDarkModeFalseBreakpointsDesktop from './pages/TypeAlertsDarkModeFalseBreakpointsDesktop';
import TypeAlertsDarkModeFalseBreakpointsMobile from './pages/TypeAlertsDarkModeFalseBreakpointsMobile';
import TypeAlertsDarkModeTrueBreakpointsDesktop from './pages/TypeAlertsDarkModeTrueBreakpointsDesktop';
import TypeAlertsDarkModeTrueBreakpointsMobile from './pages/TypeAlertsDarkModeTrueBreakpointsMobile';
import TypeBackgroundDarkModeFalseBreakpointsDesktop from './pages/TypeBackgroundDarkModeFalseBreakpointsDesktop';
import TypeBackgroundDarkModeFalseBreakpointsMobile from './pages/TypeBackgroundDarkModeFalseBreakpointsMobile';
import TypeBackgroundDarkModeTrueBreakpointsDesktop from './pages/TypeBackgroundDarkModeTrueBreakpointsDesktop';
import TypeBackgroundDarkModeTrueBreakpointsMobile from './pages/TypeBackgroundDarkModeTrueBreakpointsMobile';
import TypeBottomIconTextBreakpointsDesktopDarkModeFalse from './pages/TypeBottomIconTextBreakpointsDesktopDarkModeFalse';
import TypeBottomIconTextBreakpointsDesktopDarkModeTrue from './pages/TypeBottomIconTextBreakpointsDesktopDarkModeTrue';
import TypeBottomIconTextBreakpointsMobileDarkModeFalse from './pages/TypeBottomIconTextBreakpointsMobileDarkModeFalse';
import TypeBottomIconTextBreakpointsMobileDarkModeTrue from './pages/TypeBottomIconTextBreakpointsMobileDarkModeTrue';
import TypeBottomIconTextBreakpointsTabletDarkModeFalse from './pages/TypeBottomIconTextBreakpointsTabletDarkModeFalse';
import TypeBottomIconTextBreakpointsTabletDarkModeTrue from './pages/TypeBottomIconTextBreakpointsTabletDarkModeTrue';
import TypeContainerSizeCtaBreakpointsDesktopDarkModeFalse from './pages/TypeContainerSizeCtaBreakpointsDesktopDarkModeFalse';
import TypeContainerSizeCtaBreakpointsDesktopDarkModeTrue from './pages/TypeContainerSizeCtaBreakpointsDesktopDarkModeTrue';
import TypeContainerSizeCtaBreakpointsMobileDarkModeFalse from './pages/TypeContainerSizeCtaBreakpointsMobileDarkModeFalse';
import TypeContainerSizeCtaBreakpointsMobileDarkModeTrue from './pages/TypeContainerSizeCtaBreakpointsMobileDarkModeTrue';
import TypeContainerSizeCtaBreakpointsTabletDarkModeFalse from './pages/TypeContainerSizeCtaBreakpointsTabletDarkModeFalse';
import TypeContainerSizeCtaBreakpointsTabletDarkModeTrue from './pages/TypeContainerSizeCtaBreakpointsTabletDarkModeTrue';
import TypeCtaBreakpointsDesktopDarkModeFalse from './pages/TypeCtaBreakpointsDesktopDarkModeFalse';
import TypeCtaBreakpointsDesktopDarkModeTrue from './pages/TypeCtaBreakpointsDesktopDarkModeTrue';
import TypeCtaBreakpointsMobileDarkModeFalse from './pages/TypeCtaBreakpointsMobileDarkModeFalse';
import TypeCtaBreakpointsMobileDarkModeTrue from './pages/TypeCtaBreakpointsMobileDarkModeTrue';
import TypeCtaBreakpointsTabletDarkModeFalse from './pages/TypeCtaBreakpointsTabletDarkModeFalse';
import TypeCtaBreakpointsTabletDarkModeTrue from './pages/TypeCtaBreakpointsTabletDarkModeTrue';
import TypeDefaultBreakpointsDesktopDarkModeFalse from './pages/TypeDefaultBreakpointsDesktopDarkModeFalse';
import TypeDefaultBreakpointsDesktopDarkModeTrue from './pages/TypeDefaultBreakpointsDesktopDarkModeTrue';
import TypeDefaultBreakpointsMobileDarkModeFalse from './pages/TypeDefaultBreakpointsMobileDarkModeFalse';
import TypeDefaultBreakpointsMobileDarkModeTrue from './pages/TypeDefaultBreakpointsMobileDarkModeTrue';
import TypeDefaultBreakpointsTabletDarkModeFalse from './pages/TypeDefaultBreakpointsTabletDarkModeFalse';
import TypeDefaultBreakpointsTabletDarkModeTrue from './pages/TypeDefaultBreakpointsTabletDarkModeTrue';
import TypeDefaultDarkModeFalseBreakpointsDesktop from './pages/TypeDefaultDarkModeFalseBreakpointsDesktop';
import TypeDefaultDarkModeFalseBreakpointsMobile from './pages/TypeDefaultDarkModeFalseBreakpointsMobile';
import TypeDefaultDarkModeTrueBreakpointsDesktop from './pages/TypeDefaultDarkModeTrueBreakpointsDesktop';
import TypeDefaultDarkModeTrueBreakpointsMobile from './pages/TypeDefaultDarkModeTrueBreakpointsMobile';
import TypeDefaultStateActiveDarkModeFalseSizeDefault from './pages/TypeDefaultStateActiveDarkModeFalseSizeDefault';
import TypeDefaultStateActiveDarkModeFalseSizeLarge from './pages/TypeDefaultStateActiveDarkModeFalseSizeLarge';
import TypeDefaultStateActiveDarkModeTrueSizeDefault from './pages/TypeDefaultStateActiveDarkModeTrueSizeDefault';
import TypeDefaultStateActiveDarkModeTrueSizeLarge from './pages/TypeDefaultStateActiveDarkModeTrueSizeLarge';
import TypeDefaultStateInitialDarkModeFalseSizeDefault from './pages/TypeDefaultStateInitialDarkModeFalseSizeDefault';
import TypeDefaultStateInitialDarkModeFalseSizeLarge from './pages/TypeDefaultStateInitialDarkModeFalseSizeLarge';
import TypeDefaultStateInitialDarkModeTrueSizeDefault from './pages/TypeDefaultStateInitialDarkModeTrueSizeDefault';
import TypeDefaultStateInitialDarkModeTrueSizeLarge from './pages/TypeDefaultStateInitialDarkModeTrueSizeLarge';
import TypeDefaultStateTypingDarkModeFalseSizeDefault from './pages/TypeDefaultStateTypingDarkModeFalseSizeDefault';
import TypeDefaultStateTypingDarkModeFalseSizeLarge from './pages/TypeDefaultStateTypingDarkModeFalseSizeLarge';
import TypeDefaultStateTypingDarkModeTrueSizeDefault from './pages/TypeDefaultStateTypingDarkModeTrueSizeDefault';
import TypeDefaultStateTypingDarkModeTrueSizeLarge from './pages/TypeDefaultStateTypingDarkModeTrueSizeLarge';
import TypeDefaultStateWithCtaDarkModeFalseSizeDefault from './pages/TypeDefaultStateWithCtaDarkModeFalseSizeDefault';
import TypeDefaultStateWithCtaDarkModeFalseSizeLarge from './pages/TypeDefaultStateWithCtaDarkModeFalseSizeLarge';
import TypeDefaultStateWithCtaDarkModeTrueSizeDefault from './pages/TypeDefaultStateWithCtaDarkModeTrueSizeDefault';
import TypeDefaultStateWithCtaDarkModeTrueSizeLarge from './pages/TypeDefaultStateWithCtaDarkModeTrueSizeLarge';
import TypeNewsletterBreakpointsDesktopDarkModeFalse from './pages/TypeNewsletterBreakpointsDesktopDarkModeFalse';
import TypeNewsletterBreakpointsDesktopDarkModeTrue from './pages/TypeNewsletterBreakpointsDesktopDarkModeTrue';
import TypeNewsletterBreakpointsMobileDarkModeFalse from './pages/TypeNewsletterBreakpointsMobileDarkModeFalse';
import TypeNewsletterBreakpointsMobileDarkModeTrue from './pages/TypeNewsletterBreakpointsMobileDarkModeTrue';
import TypeNewsletterBreakpointsTabletDarkModeFalse from './pages/TypeNewsletterBreakpointsTabletDarkModeFalse';
import TypeNewsletterBreakpointsTabletDarkModeTrue from './pages/TypeNewsletterBreakpointsTabletDarkModeTrue';
import TypeNumberDescriptionDarkModeFalseBreakpointsDesktop from './pages/TypeNumberDescriptionDarkModeFalseBreakpointsDesktop';
import TypeNumberDescriptionDarkModeFalseBreakpointsMobile from './pages/TypeNumberDescriptionDarkModeFalseBreakpointsMobile';
import TypeNumberDescriptionDarkModeTrueBreakpointsDesktop from './pages/TypeNumberDescriptionDarkModeTrueBreakpointsDesktop';
import TypeNumberDescriptionDarkModeTrueBreakpointsMobile from './pages/TypeNumberDescriptionDarkModeTrueBreakpointsMobile';
import TypeProgressBarDarkModeFalseBreakpointsDesktop from './pages/TypeProgressBarDarkModeFalseBreakpointsDesktop';
import TypeProgressBarDarkModeFalseBreakpointsMobile from './pages/TypeProgressBarDarkModeFalseBreakpointsMobile';
import TypeProgressBarDarkModeTrueBreakpointsDesktop from './pages/TypeProgressBarDarkModeTrueBreakpointsDesktop';
import TypeProgressBarDarkModeTrueBreakpointsMobile from './pages/TypeProgressBarDarkModeTrueBreakpointsMobile';
import TypeVerticalDarkModeFalseBreakpointsDesktop from './pages/TypeVerticalDarkModeFalseBreakpointsDesktop';
import TypeVerticalDarkModeFalseBreakpointsMobile from './pages/TypeVerticalDarkModeFalseBreakpointsMobile';
import TypeVerticalDarkModeTrueBreakpointsDesktop from './pages/TypeVerticalDarkModeTrueBreakpointsDesktop';
import TypeVerticalDarkModeTrueBreakpointsMobile from './pages/TypeVerticalDarkModeTrueBreakpointsMobile';
import UploadResume from './pages/UploadResume';
import UserCreatesApassword from './pages/UserCreatesApassword';
import UserEntersEmail from './pages/UserEntersEmail';
import UserProfileScreen from './pages/UserProfileScreen';
import UserProfileScreen1 from './pages/UserProfileScreen1';
import UserProfileScreen2 from './pages/UserProfileScreen2';
import VercelListing from './pages/VercelListing';
import VerifyAccountScreen from './pages/VerifyAccountScreen';
import VerifyAccountScreenCodeEnteredByUser from './pages/VerifyAccountScreenCodeEnteredByUser';
import WebListingVercel from './pages/WebListingVercel';
import WebsiteBoth from './pages/WebsiteBoth';
import WebsiteBoth1 from './pages/WebsiteBoth1';
import WebsiteJobSeekerFacing from './pages/WebsiteJobSeekerFacing';
import WireframesPhone42 from './pages/WireframesPhone42';
import Xoutline from './pages/Xoutline';
import Xoutline1 from './pages/Xoutline1';
import Xoutline2 from './pages/Xoutline2';
import Xoutline3 from './pages/Xoutline3';
import Xoutline4 from './pages/Xoutline4';


const router = createBrowserRouter([
  { path: '/', element: <F12Main /> },
{ path: '/Accept', element: <Accept /> },
{ path: '/AdditionPopUp', element: <AdditionPopUp /> },
{ path: '/AlbamonCollection', element: <AlbamonCollection /> },
{ path: '/Alerts', element: <Alerts /> },
{ path: '/AngleLeftOutline', element: <AngleLeftOutline /> },
{ path: '/AngleLeftOutline1', element: <AngleLeftOutline1 /> },
{ path: '/AngleLeftOutline2', element: <AngleLeftOutline2 /> },
{ path: '/AngleLeftOutline3', element: <AngleLeftOutline3 /> },
{ path: '/AngleLeftOutline4', element: <AngleLeftOutline4 /> },
{ path: '/AppNameIdeation', element: <AppNameIdeation /> },
{ path: '/ApplicantPage', element: <ApplicantPage /> },
{ path: '/ApplicantPage1', element: <ApplicantPage1 /> },
{ path: '/ApplicantPage2', element: <ApplicantPage2 /> },
{ path: '/ApplicantPageContactPopUpPage', element: <ApplicantPageContactPopUpPage /> },
{ path: '/ApplicantPageContactPopUpPage1', element: <ApplicantPageContactPopUpPage1 /> },
{ path: '/ApplicantPageContactPopUpPage1', element: <ApplicantPageContactPopUpPage1 /> },
{ path: '/ApplicantPageContactPopUpPage1Sidebar', element: <ApplicantPageContactPopUpPage1Sidebar /> },
{ path: '/ApplicantPageContactPopUpPage2', element: <ApplicantPageContactPopUpPage2 /> },
{ path: '/ApplicantPageContactPopUpPage2Sidebar', element: <ApplicantPageContactPopUpPage2Sidebar /> },
{ path: '/ApplicantPageContactPopUpPage3', element: <ApplicantPageContactPopUpPage3 /> },
{ path: '/ApplicantPageContactPopUpPage4', element: <ApplicantPageContactPopUpPage4 /> },
{ path: '/ApplicantPageSidebar', element: <ApplicantPageSidebar /> },
{ path: '/ApplicantPageWithFullRelevantJobs', element: <ApplicantPageWithFullRelevantJobs /> },
{ path: '/ApplicantPageWithFullRelevantJobs1', element: <ApplicantPageWithFullRelevantJobs1 /> },
{ path: '/ApplicantPageWithFullRelevantJobsSidebar', element: <ApplicantPageWithFullRelevantJobsSidebar /> },
{ path: '/ApplicantPageWithJobDescriptionFocusSidebar', element: <ApplicantPageWithJobDescriptionFocusSidebar /> },
{ path: '/ApplicantPageWithSkillsFocus', element: <ApplicantPageWithSkillsFocus /> },
{ path: '/ApplicantPageWithSkillsFocusSidebar', element: <ApplicantPageWithSkillsFocusSidebar /> },
{ path: '/ApplicantProfilePage', element: <ApplicantProfilePage /> },
{ path: '/ApplicantProfilePageExperienceListPopUp', element: <ApplicantProfilePageExperienceListPopUp /> },
{ path: '/ApplicantProfilePageFilesUploadedPopUp', element: <ApplicantProfilePageFilesUploadedPopUp /> },
{ path: '/ApplicantProfilePageSingleExperiencePopUp', element: <ApplicantProfilePageSingleExperiencePopUp /> },
{ path: '/ApplicantProfilePageSkillsPopUp', element: <ApplicantProfilePageSkillsPopUp /> },
{ path: '/ApplicantProfileWebSketchVersion3', element: <ApplicantProfileWebSketchVersion3 /> },
{ path: '/ApplicantProfileWebVersion1', element: <ApplicantProfileWebVersion1 /> },
{ path: '/ApplicantProfileWpopUpWarningWebSketch', element: <ApplicantProfileWpopUpWarningWebSketch /> },
{ path: '/ApplicantsHover', element: <ApplicantsHover /> },
{ path: '/ApplicantsPage', element: <ApplicantsPage /> },
{ path: '/ApplicantsPageApplicationStatusFilterActive', element: <ApplicantsPageApplicationStatusFilterActive /> },
{ path: '/ApplicantsPageApplicationStatusFilterActiveLong', element: <ApplicantsPageApplicationStatusFilterActiveLong /> },
{ path: '/ApplicantsPageApplicationStatusFilterActiveLong1', element: <ApplicantsPageApplicationStatusFilterActiveLong1 /> },
{ path: '/ApplicantsPageApplicationStatusFilterActiveShort', element: <ApplicantsPageApplicationStatusFilterActiveShort /> },
{ path: '/ApplicantsPageApplicationStatusFilterActiveShort1', element: <ApplicantsPageApplicationStatusFilterActiveShort1 /> },
{ path: '/ApplicantsPageApplicationStatusFilterActiveSidebar', element: <ApplicantsPageApplicationStatusFilterActiveSidebar /> },
{ path: '/ApplicantsPageEmploymentStatusFilterActive', element: <ApplicantsPageEmploymentStatusFilterActive /> },
{ path: '/ApplicantsPageEmploymentStatusFilterActiveLong', element: <ApplicantsPageEmploymentStatusFilterActiveLong /> },
{ path: '/ApplicantsPageEmploymentStatusFilterActiveShort', element: <ApplicantsPageEmploymentStatusFilterActiveShort /> },
{ path: '/ApplicantsPageEmploymentStatusFilterActiveShort1', element: <ApplicantsPageEmploymentStatusFilterActiveShort1 /> },
{ path: '/ApplicantsPageEmploymentStatusFilterActiveSidebar', element: <ApplicantsPageEmploymentStatusFilterActiveSidebar /> },
{ path: '/ApplicantsPageFlowbite', element: <ApplicantsPageFlowbite /> },
{ path: '/ApplicantsPageListingFilterActive', element: <ApplicantsPageListingFilterActive /> },
{ path: '/ApplicantsPageListingFilterActiveLong', element: <ApplicantsPageListingFilterActiveLong /> },
{ path: '/ApplicantsPageListingFilterActiveShort', element: <ApplicantsPageListingFilterActiveShort /> },
{ path: '/ApplicantsPageListingFilterActiveShort1', element: <ApplicantsPageListingFilterActiveShort1 /> },
{ path: '/ApplicantsPageListingFilterActiveSidebar', element: <ApplicantsPageListingFilterActiveSidebar /> },
{ path: '/ApplicantsPageWebWithGiestVersion2Sketch', element: <ApplicantsPageWebWithGiestVersion2Sketch /> },
{ path: '/ApplicantsPageWebWithGiestVersion2Sketch1', element: <ApplicantsPageWebWithGiestVersion2Sketch1 /> },
{ path: '/ApplicantsPageWebWithGiestVersion3Sketch', element: <ApplicantsPageWebWithGiestVersion3Sketch /> },
{ path: '/ApplicantsPageWithFilters', element: <ApplicantsPageWithFilters /> },
{ path: '/ApplicantsPageWithFilters1', element: <ApplicantsPageWithFilters1 /> },
{ path: '/ApplicantsPageWithFilters2', element: <ApplicantsPageWithFilters2 /> },
{ path: '/ApplicantsPageWithFilters3', element: <ApplicantsPageWithFilters3 /> },
{ path: '/ApplicantsPageWithFiltersEmpty', element: <ApplicantsPageWithFiltersEmpty /> },
{ path: '/ApplicantsPageWithFiltersEmpty1', element: <ApplicantsPageWithFiltersEmpty1 /> },
{ path: '/ApplicantsPageWithFiltersEmpty2', element: <ApplicantsPageWithFiltersEmpty2 /> },
{ path: '/ApplicantsPageWithFiltersEmptySidebar', element: <ApplicantsPageWithFiltersEmptySidebar /> },
{ path: '/ApplicantsPageWithFiltersFlowbite', element: <ApplicantsPageWithFiltersFlowbite /> },
{ path: '/ApplicantsPageWithFiltersSidebar', element: <ApplicantsPageWithFiltersSidebar /> },
{ path: '/Apply', element: <Apply /> },
{ path: '/Apply1', element: <Apply1 /> },
{ path: '/Apply2', element: <Apply2 /> },
{ path: '/Apply3', element: <Apply3 /> },
{ path: '/AppyDetailedDescriptionAndInfo', element: <AppyDetailedDescriptionAndInfo /> },
{ path: '/AutocompleteInput', element: <AutocompleteInput /> },
{ path: '/AutocompleteInput1', element: <AutocompleteInput1 /> },
{ path: '/BadgesProgressBars', element: <BadgesProgressBars /> },
{ path: '/BlushEmail', element: <BlushEmail /> },
{ path: '/BrandingIdeation', element: <BrandingIdeation /> },
{ path: '/Breadcrumbs', element: <Breadcrumbs /> },
{ path: '/Button', element: <Button /> },
{ path: '/Button1', element: <Button1 /> },
{ path: '/Button2', element: <Button2 /> },
{ path: '/Button3', element: <Button3 /> },
{ path: '/Button4', element: <Button4 /> },
{ path: '/Button5', element: <Button5 /> },
{ path: '/Button6', element: <Button6 /> },
{ path: '/Button7', element: <Button7 /> },
{ path: '/Buttons', element: <Buttons /> },
{ path: '/Cards', element: <Cards /> },
{ path: '/CheckOutline', element: <CheckOutline /> },
{ path: '/ColorPalleteRoma', element: <ColorPalleteRoma /> },
{ path: '/CompletedApplication', element: <CompletedApplication /> },
{ path: '/CompletedApplication1', element: <CompletedApplication1 /> },
{ path: '/CompletedApplication2', element: <CompletedApplication2 /> },
{ path: '/CreateAnAccount', element: <CreateAnAccount /> },
{ path: '/CreateJobSeekerAccount', element: <CreateJobSeekerAccount /> },
{ path: '/CreatePasswordPrompt', element: <CreatePasswordPrompt /> },
{ path: '/DashboardHover', element: <DashboardHover /> },
{ path: '/DeleteConfirmation', element: <DeleteConfirmation /> },
{ path: '/Desktop1', element: <Desktop1 /> },
{ path: '/Desktop11', element: <Desktop11 /> },
{ path: '/DiffVersion11', element: <DiffVersion11 /> },
{ path: '/DiffVersion111', element: <DiffVersion111 /> },
{ path: '/DiffVersion1110', element: <DiffVersion1110 /> },
{ path: '/DiffVersion1111', element: <DiffVersion1111 /> },
{ path: '/DiffVersion112', element: <DiffVersion112 /> },
{ path: '/DiffVersion113', element: <DiffVersion113 /> },
{ path: '/DiffVersion114', element: <DiffVersion114 /> },
{ path: '/DiffVersion115', element: <DiffVersion115 /> },
{ path: '/DiffVersion116', element: <DiffVersion116 /> },
{ path: '/DiffVersion117', element: <DiffVersion117 /> },
{ path: '/DiffVersion118', element: <DiffVersion118 /> },
{ path: '/DiffVersion119', element: <DiffVersion119 /> },
{ path: '/DropdownMenu', element: <DropdownMenu /> },
{ path: '/EditDelete', element: <EditDelete /> },
{ path: '/EditDetailsMyDetailsPopUpCard', element: <EditDetailsMyDetailsPopUpCard /> },
{ path: '/EditDetailsMyDetailsPopUpCard1', element: <EditDetailsMyDetailsPopUpCard1 /> },
{ path: '/EditDetailsMyDetailsPopUpCard2', element: <EditDetailsMyDetailsPopUpCard2 /> },
{ path: '/EmailVerifiedAndUserClicksConitnueToExploreHomePage', element: <EmailVerifiedAndUserClicksConitnueToExploreHomePage /> },
{ path: '/EmployeeProfileEmployerSketch4', element: <EmployeeProfileEmployerSketch4 /> },
{ path: '/EmployeeSignUp', element: <EmployeeSignUp /> },
{ path: '/EmployerCloseListing', element: <EmployerCloseListing /> },
{ path: '/EmployerDashboard', element: <EmployerDashboard /> },
{ path: '/EmployerDashboard1', element: <EmployerDashboard1 /> },
{ path: '/EmployerDashboard2', element: <EmployerDashboard2 /> },
{ path: '/EmployerDashboard3', element: <EmployerDashboard3 /> },
{ path: '/EmployerDashboard4', element: <EmployerDashboard4 /> },
{ path: '/EmployerDashboard5', element: <EmployerDashboard5 /> },
{ path: '/EmployerDashboardSidebar', element: <EmployerDashboardSidebar /> },
{ path: '/EmployerDashboardV2', element: <EmployerDashboardV2 /> },
{ path: '/EmployerDeleteListing', element: <EmployerDeleteListing /> },
{ path: '/EmployerDeleteListing1', element: <EmployerDeleteListing1 /> },
{ path: '/EmployerDeleteListing2', element: <EmployerDeleteListing2 /> },
{ path: '/EmployerDeleteListing3', element: <EmployerDeleteListing3 /> },
{ path: '/EmployerDeleteListing4', element: <EmployerDeleteListing4 /> },
{ path: '/EmployerDeleteListing5', element: <EmployerDeleteListing5 /> },
{ path: '/EmployerErrorPage', element: <EmployerErrorPage /> },
{ path: '/EmployerErrorPage1', element: <EmployerErrorPage1 /> },
{ path: '/EmployerErrorPage2', element: <EmployerErrorPage2 /> },
{ path: '/EmployerLogoutPopup', element: <EmployerLogoutPopup /> },
{ path: '/EmployerMyListings', element: <EmployerMyListings /> },
{ path: '/EmployerMyListingsEditListing', element: <EmployerMyListingsEditListing /> },
{ path: '/EmployerMyListingsEditListing1', element: <EmployerMyListingsEditListing1 /> },
{ path: '/EmployerMyListingsEditListing2', element: <EmployerMyListingsEditListing2 /> },
{ path: '/EmployerMyListingsEditListing3', element: <EmployerMyListingsEditListing3 /> },
{ path: '/EmployerMyListingsEditListing4', element: <EmployerMyListingsEditListing4 /> },
{ path: '/EmployerMyListingsEditListingExpanded', element: <EmployerMyListingsEditListingExpanded /> },
{ path: '/EmployerMyListingsEditListingExpanded1', element: <EmployerMyListingsEditListingExpanded1 /> },
{ path: '/EmployerMyListingsPage', element: <EmployerMyListingsPage /> },
{ path: '/EmployerMyListingsPage1', element: <EmployerMyListingsPage1 /> },
{ path: '/EmployerMyListingsPage2', element: <EmployerMyListingsPage2 /> },
{ path: '/EmployerMyListingsPageFilterDropdown', element: <EmployerMyListingsPageFilterDropdown /> },
{ path: '/EmployerMyListingsPageFilterDropdown1', element: <EmployerMyListingsPageFilterDropdown1 /> },
{ path: '/EmployerMyListingsPageFilterDropdownPopUp', element: <EmployerMyListingsPageFilterDropdownPopUp /> },
{ path: '/EmployerMyListingsPageFilterDropdownPopUp1', element: <EmployerMyListingsPageFilterDropdownPopUp1 /> },
{ path: '/EmployerMyListingsPageFilterDropdownPopUp2', element: <EmployerMyListingsPageFilterDropdownPopUp2 /> },
{ path: '/EmployerMyListingsPageSortDropdown', element: <EmployerMyListingsPageSortDropdown /> },
{ path: '/EmployerMyListingsPageSortDropdown1', element: <EmployerMyListingsPageSortDropdown1 /> },
{ path: '/EmployerMyListingsReviewListingMinimized', element: <EmployerMyListingsReviewListingMinimized /> },
{ path: '/EmployerMyListingsReviewListingMinimized1', element: <EmployerMyListingsReviewListingMinimized1 /> },
{ path: '/EmployerNoListingsDashboard', element: <EmployerNoListingsDashboard /> },
{ path: '/EmployerNoListingsDashboard1', element: <EmployerNoListingsDashboard1 /> },
{ path: '/EmployerNoListingsDashboard2', element: <EmployerNoListingsDashboard2 /> },
{ path: '/EmployerNoListingsDashboardSidebar', element: <EmployerNoListingsDashboardSidebar /> },
{ path: '/EmployerPostAjobInputInfo', element: <EmployerPostAjobInputInfo /> },
{ path: '/EmployerPostAjobInputInfoCustomQuestionsEnabled', element: <EmployerPostAjobInputInfoCustomQuestionsEnabled /> },
{ path: '/EmployerPostAjobInteractionExample', element: <EmployerPostAjobInteractionExample /> },
{ path: '/EmployerPostAjobInteractionExampleV2', element: <EmployerPostAjobInteractionExampleV2 /> },
{ path: '/EmployerPostAjobInteractionFeedback', element: <EmployerPostAjobInteractionFeedback /> },
{ path: '/EmployerPostAjobInteractionFeedbackV2', element: <EmployerPostAjobInteractionFeedbackV2 /> },
{ path: '/EmployerPostAjobReviewInfo', element: <EmployerPostAjobReviewInfo /> },
{ path: '/EmployerPostAjobReviewInfo1', element: <EmployerPostAjobReviewInfo1 /> },
{ path: '/EmployerPostAjobReviewInfoV2', element: <EmployerPostAjobReviewInfoV2 /> },
{ path: '/EmployerPostAjobReviewListingcard', element: <EmployerPostAjobReviewListingcard /> },
{ path: '/EmployerPostAjobReviewListingexpanded', element: <EmployerPostAjobReviewListingexpanded /> },
{ path: '/EmployerPostAjobStep1', element: <EmployerPostAjobStep1 /> },
{ path: '/EmployerPostAjobStep1V1', element: <EmployerPostAjobStep1V1 /> },
{ path: '/EmployerPostAjobStep1V11', element: <EmployerPostAjobStep1V11 /> },
{ path: '/EmployerPostAjobStep1V12', element: <EmployerPostAjobStep1V12 /> },
{ path: '/EmployerPostAjobStep1V2', element: <EmployerPostAjobStep1V2 /> },
{ path: '/EmployerPostAjobStep1V21', element: <EmployerPostAjobStep1V21 /> },
{ path: '/EmployerPostAjobStep1V22', element: <EmployerPostAjobStep1V22 /> },
{ path: '/EmployerPostAjobStep1V23', element: <EmployerPostAjobStep1V23 /> },
{ path: '/EmployerPostAjobStep2V1', element: <EmployerPostAjobStep2V1 /> },
{ path: '/EmployerPostAjobStep2V11', element: <EmployerPostAjobStep2V11 /> },
{ path: '/EmployerPostAjobStep2V12', element: <EmployerPostAjobStep2V12 /> },
{ path: '/EmployerPostAjobStep2V2', element: <EmployerPostAjobStep2V2 /> },
{ path: '/EmployerPostAjobStep2V21', element: <EmployerPostAjobStep2V21 /> },
{ path: '/EmployerPostAjobStep2V22', element: <EmployerPostAjobStep2V22 /> },
{ path: '/EmployerPostAjobStep2V3', element: <EmployerPostAjobStep2V3 /> },
{ path: '/EmployerPostAjobStep2V31', element: <EmployerPostAjobStep2V31 /> },
{ path: '/EmployerPostAjobStep2V32', element: <EmployerPostAjobStep2V32 /> },
{ path: '/EmployerProfilePage', element: <EmployerProfilePage /> },
{ path: '/EmployerProfilePage1', element: <EmployerProfilePage1 /> },
{ path: '/EmployerProfilePage2', element: <EmployerProfilePage2 /> },
{ path: '/EmployerProfilePage3', element: <EmployerProfilePage3 /> },
{ path: '/EmployerProfilePage4', element: <EmployerProfilePage4 /> },
{ path: '/EmployerProfilePageLong', element: <EmployerProfilePageLong /> },
{ path: '/EmployerProfilePageLongHeader', element: <EmployerProfilePageLongHeader /> },
{ path: '/EmployerProfilePageLongHeader1', element: <EmployerProfilePageLongHeader1 /> },
{ path: '/EmployerProfilePageLongHeaderSidebar', element: <EmployerProfilePageLongHeaderSidebar /> },
{ path: '/EmployerProfilePageShort', element: <EmployerProfilePageShort /> },
{ path: '/EmployerProfilePageShort1', element: <EmployerProfilePageShort1 /> },
{ path: '/EmployerProfilePageSidebar', element: <EmployerProfilePageSidebar /> },
{ path: '/EmployerProfilePageWithNoticeLong', element: <EmployerProfilePageWithNoticeLong /> },
{ path: '/EmployerProfilePageWithNoticeLongHeader', element: <EmployerProfilePageWithNoticeLongHeader /> },
{ path: '/EmployerProfilePageWithNoticeLongHeader1', element: <EmployerProfilePageWithNoticeLongHeader1 /> },
{ path: '/EmployerProfilePageWithNoticeLongHeaderSidebar', element: <EmployerProfilePageWithNoticeLongHeaderSidebar /> },
{ path: '/EmployerProfilePageWithNoticeShort', element: <EmployerProfilePageWithNoticeShort /> },
{ path: '/EmployerProfilePageWithNoticeShort1', element: <EmployerProfilePageWithNoticeShort1 /> },
{ path: '/EmployerProfilePageWithNoticeShort2', element: <EmployerProfilePageWithNoticeShort2 /> },
{ path: '/EmployerProfilePageWithNoticeShort3', element: <EmployerProfilePageWithNoticeShort3 /> },
{ path: '/EmployerProfilePageWithNoticeShort4', element: <EmployerProfilePageWithNoticeShort4 /> },
{ path: '/EmployerProfilePageWithNoticeSidebar', element: <EmployerProfilePageWithNoticeSidebar /> },
{ path: '/EmployerSignIn', element: <EmployerSignIn /> },
{ path: '/EmployerSignIn1', element: <EmployerSignIn1 /> },
{ path: '/EmployerSignUp', element: <EmployerSignUp /> },
{ path: '/EmployerSignUp1', element: <EmployerSignUp1 /> },
{ path: '/EmployerSignUp2', element: <EmployerSignUp2 /> },
{ path: '/EmployerSignUpConfirmation', element: <EmployerSignUpConfirmation /> },
{ path: '/EmployerSignUpConfirmation1', element: <EmployerSignUpConfirmation1 /> },
{ path: '/Error', element: <Error /> },
{ path: '/Example', element: <Example /> },
{ path: '/Finalists', element: <Finalists /> },
{ path: '/FlowbiteIconsOutline', element: <FlowbiteIconsOutline /> },
{ path: '/FlowbiteIconsSolid', element: <FlowbiteIconsSolid /> },
{ path: '/FontSize', element: <FontSize /> },
{ path: '/Frame1', element: <Frame1 /> },
{ path: '/Frame1000004376', element: <Frame1000004376 /> },
{ path: '/Frame1000004406', element: <Frame1000004406 /> },
{ path: '/Frame1000004434', element: <Frame1000004434 /> },
{ path: '/Frame1000004437', element: <Frame1000004437 /> },
{ path: '/Frame16', element: <Frame16 /> },
{ path: '/Frame17', element: <Frame17 /> },
{ path: '/Frame19', element: <Frame19 /> },
{ path: '/Frame4', element: <Frame4 /> },
{ path: '/FullCreateAccount', element: <FullCreateAccount /> },
{ path: '/Group10', element: <Group10 /> },
{ path: '/Group1002', element: <Group1002 /> },
{ path: '/Group1004', element: <Group1004 /> },
{ path: '/Group1005', element: <Group1005 /> },
{ path: '/Group1006', element: <Group1006 /> },
{ path: '/Group1007', element: <Group1007 /> },
{ path: '/Group1008', element: <Group1008 /> },
{ path: '/Group1009', element: <Group1009 /> },
{ path: '/Group1010', element: <Group1010 /> },
{ path: '/Group1011', element: <Group1011 /> },
{ path: '/Group1012', element: <Group1012 /> },
{ path: '/Group1013', element: <Group1013 /> },
{ path: '/Group1014', element: <Group1014 /> },
{ path: '/Group1015', element: <Group1015 /> },
{ path: '/Group1016', element: <Group1016 /> },
{ path: '/Group1017', element: <Group1017 /> },
{ path: '/Group1019', element: <Group1019 /> },
{ path: '/Group1021', element: <Group1021 /> },
{ path: '/Group1022', element: <Group1022 /> },
{ path: '/Group1023', element: <Group1023 /> },
{ path: '/Group1024', element: <Group1024 /> },
{ path: '/Group1025', element: <Group1025 /> },
{ path: '/Group1026', element: <Group1026 /> },
{ path: '/Group1027', element: <Group1027 /> },
{ path: '/Group11', element: <Group11 /> },
{ path: '/Group333', element: <Group333 /> },
{ path: '/Group3331', element: <Group3331 /> },
{ path: '/Home', element: <Home /> },
{ path: '/Home1', element: <Home1 /> },
{ path: '/Home2', element: <Home2 /> },
//{ path: '/Home3', element: <Home3 /> },
{ path: '/Home3', element: <Home3 /> },
{ path: '/Home4', element: <Home4 /> },
{ path: '/Home5', element: <Home5 /> },
{ path: '/HomeDesktop', element: <HomeDesktop /> },
{ path: '/HomeDiffIdea', element: <HomeDiffIdea /> },
{ path: '/HomeDiffVersion1', element: <HomeDiffVersion1 /> },
{ path: '/HomeDiffVersion11', element: <HomeDiffVersion11 /> },
{ path: '/HomeIdea1', element: <HomeIdea1 /> },
{ path: '/Homepage', element: <Homepage /> },
{ path: '/IaIdeation', element: <IaIdeation /> },
{ path: '/Inbox', element: <Inbox /> },
{ path: '/Input', element: <Input /> },
{ path: '/Input1', element: <Input1 /> },
{ path: '/InputField', element: <InputField /> },
{ path: '/InputNumber', element: <InputNumber /> },
{ path: '/JobEzSignUp', element: <JobEzSignUp /> },
{ path: '/JobEzSignUp1', element: <JobEzSignUp1 /> },
{ path: '/JobEzSignUp2', element: <JobEzSignUp2 /> },
{ path: '/JobEzSignUp3', element: <JobEzSignUp3 /> },
{ path: '/JobEzSignUp4', element: <JobEzSignUp4 /> },
{ path: '/JobEzWordMark', element: <JobEzWordMark /> },
{ path: '/JobListing', element: <JobListing /> },
{ path: '/JobListing1', element: <JobListing1 /> },
{ path: '/JobListing10', element: <JobListing10 /> },
{ path: '/JobListing11', element: <JobListing11 /> },
{ path: '/JobListing12', element: <JobListing12 /> },
{ path: '/JobListing13', element: <JobListing13 /> },
{ path: '/JobListing14', element: <JobListing14 /> },
{ path: '/JobListing15', element: <JobListing15 /> },
{ path: '/JobListing16', element: <JobListing16 /> },
{ path: '/JobListing17', element: <JobListing17 /> },
{ path: '/JobListing18', element: <JobListing18 /> },
{ path: '/JobListing19', element: <JobListing19 /> },
{ path: '/JobListing2', element: <JobListing2 /> },
{ path: '/JobListing20', element: <JobListing20 /> },
{ path: '/JobListing21', element: <JobListing21 /> },
{ path: '/JobListing22', element: <JobListing22 /> },
{ path: '/JobListing23', element: <JobListing23 /> },
{ path: '/JobListing24', element: <JobListing24 /> },
{ path: '/JobListing25', element: <JobListing25 /> },
{ path: '/JobListing26', element: <JobListing26 /> },
{ path: '/JobListing27', element: <JobListing27 /> },
{ path: '/JobListing3', element: <JobListing3 /> },
{ path: '/JobListing4', element: <JobListing4 /> },
{ path: '/JobListing5', element: <JobListing5 /> },
{ path: '/JobListing6', element: <JobListing6 /> },
{ path: '/JobListing7', element: <JobListing7 /> },
{ path: '/JobListing8', element: <JobListing8 /> },
{ path: '/JobListing9', element: <JobListing9 /> },
{ path: '/Jumbotron', element: <Jumbotron /> },
{ path: '/LandingPageWithExploreJobs', element: <LandingPageWithExploreJobs /> },
{ path: '/Listing', element: <Listing /> },
{ path: '/ListingLifeCycle', element: <ListingLifeCycle /> },
{ path: '/LoginCreateAnAccountScreen', element: <LoginCreateAnAccountScreen /> },
{ path: '/Logo', element: <Logo /> },
{ path: '/Logo1', element: <Logo1 /> },
{ path: '/Logo10', element: <Logo10 /> },
{ path: '/Logo11', element: <Logo11 /> },
{ path: '/Logo12', element: <Logo12 /> },
{ path: '/Logo13', element: <Logo13 /> },
{ path: '/Logo14', element: <Logo14 /> },
{ path: '/Logo15', element: <Logo15 /> },
{ path: '/Logo16', element: <Logo16 /> },
{ path: '/Logo17', element: <Logo17 /> },
{ path: '/Logo18', element: <Logo18 /> },
{ path: '/Logo19', element: <Logo19 /> },
{ path: '/Logo2', element: <Logo2 /> },
{ path: '/Logo20', element: <Logo20 /> },
{ path: '/Logo21', element: <Logo21 /> },
{ path: '/Logo22', element: <Logo22 /> },
{ path: '/Logo23', element: <Logo23 /> },
{ path: '/Logo24', element: <Logo24 /> },
{ path: '/Logo25', element: <Logo25 /> },
{ path: '/Logo26', element: <Logo26 /> },
{ path: '/Logo27', element: <Logo27 /> },
{ path: '/Logo28', element: <Logo28 /> },
{ path: '/Logo29', element: <Logo29 /> },
{ path: '/Logo3', element: <Logo3 /> },
{ path: '/Logo30', element: <Logo30 /> },
{ path: '/Logo31', element: <Logo31 /> },
{ path: '/Logo32', element: <Logo32 /> },
{ path: '/Logo33', element: <Logo33 /> },
{ path: '/Logo4', element: <Logo4 /> },
{ path: '/Logo5', element: <Logo5 /> },
{ path: '/Logo6', element: <Logo6 /> },
{ path: '/Logo7', element: <Logo7 /> },
{ path: '/Logo8', element: <Logo8 /> },
{ path: '/Logo9', element: <Logo9 /> },
{ path: '/LogoutHover', element: <LogoutHover /> },
{ path: '/LogoutPopup', element: <LogoutPopup /> },
{ path: '/MacBookPro161', element: <MacBookPro161 /> },
{ path: '/MacBookPro1610', element: <MacBookPro1610 /> },
{ path: '/MacBookPro1611', element: <MacBookPro1611 /> },
{ path: '/MacBookPro1612', element: <MacBookPro1612 /> },
{ path: '/MacBookPro162', element: <MacBookPro162 /> },
{ path: '/MacBookPro1622', element: <MacBookPro1622 /> },
{ path: '/MacBookPro1623', element: <MacBookPro1623 /> },
{ path: '/MacBookPro1624', element: <MacBookPro1624 /> },
{ path: '/MacBookPro1625', element: <MacBookPro1625 /> },
{ path: '/MacBookPro1626', element: <MacBookPro1626 /> },
{ path: '/MacBookPro1627', element: <MacBookPro1627 /> },
{ path: '/MacBookPro1628', element: <MacBookPro1628 /> },
{ path: '/MacBookPro1629', element: <MacBookPro1629 /> },
{ path: '/MacBookPro163', element: <MacBookPro163 /> },
{ path: '/MacBookPro1630', element: <MacBookPro1630 /> },
{ path: '/MacBookPro1631', element: <MacBookPro1631 /> },
{ path: '/MacBookPro1632', element: <MacBookPro1632 /> },
{ path: '/MacBookPro1635', element: <MacBookPro1635 /> },
{ path: '/MacBookPro164', element: <MacBookPro164 /> },
{ path: '/MacBookPro166', element: <MacBookPro166 /> },
{ path: '/MacBookPro167', element: <MacBookPro167 /> },
{ path: '/MacBookPro169', element: <MacBookPro169 /> },
{ path: '/ManageApplicationEmployerSketch1', element: <ManageApplicationEmployerSketch1 /> },
{ path: '/ManageApplicationEmployerSketch2', element: <ManageApplicationEmployerSketch2 /> },
{ path: '/ManageApplicationEmployerSketch3', element: <ManageApplicationEmployerSketch3 /> },
{ path: '/MarketingUiNavbars', element: <MarketingUiNavbars /> },
{ path: '/Modal', element: <Modal /> },
{ path: '/ModalWithFormsDefault', element: <ModalWithFormsDefault /> },
{ path: '/MyAccountHover', element: <MyAccountHover /> },
{ path: '/MyListingsHover', element: <MyListingsHover /> },
{ path: '/MyProfile', element: <MyProfile /> },
{ path: '/MyProfile1', element: <MyProfile1 /> },
{ path: '/MyProfileAppliedJobs', element: <MyProfileAppliedJobs /> },
{ path: '/MyProfileAppliedJobs1', element: <MyProfileAppliedJobs1 /> },
{ path: '/MyProfileAppliedJobs2', element: <MyProfileAppliedJobs2 /> },
{ path: '/MyProfileMySchedule', element: <MyProfileMySchedule /> },
{ path: '/MyProfileSavedCompaniesJobs', element: <MyProfileSavedCompaniesJobs /> },
{ path: '/Notifications', element: <Notifications /> },
{ path: '/Notifs', element: <Notifs /> },
{ path: '/OtherCompetitveStudiesSecondaryResearch', element: <OtherCompetitveStudiesSecondaryResearch /> },
{ path: '/Pagination', element: <Pagination /> },
{ path: '/Pagination1', element: <Pagination1 /> },
{ path: '/Pagination2', element: <Pagination2 /> },
{ path: '/Pagination3', element: <Pagination3 /> },
{ path: '/Pagination4', element: <Pagination4 /> },
{ path: '/Pagination5', element: <Pagination5 /> },
{ path: '/Pagination6', element: <Pagination6 /> },
{ path: '/Pagination7', element: <Pagination7 /> },
{ path: '/PartTimePalCreateListingPage', element: <PartTimePalCreateListingPage /> },
{ path: '/PartTimePalEmployerProfilePageEmployeeSideView', element: <PartTimePalEmployerProfilePageEmployeeSideView /> },
{ path: '/PartTimePalLandingPageEmployee', element: <PartTimePalLandingPageEmployee /> },
{ path: '/PartTimePalLandingPageSketchSami', element: <PartTimePalLandingPageSketchSami /> },
{ path: '/PartTimePalListingPageEmployee', element: <PartTimePalListingPageEmployee /> },
{ path: '/PartTimePalListingsPageEmployerSketch', element: <PartTimePalListingsPageEmployerSketch /> },
{ path: '/PartTimePalListingsPageWebWithGiestSketch', element: <PartTimePalListingsPageWebWithGiestSketch /> },
{ path: '/PartTimePalListingsPageWithVercelEmployerSketch', element: <PartTimePalListingsPageWithVercelEmployerSketch /> },
{ path: '/PartTimePalMessagesPage', element: <PartTimePalMessagesPage /> },
{ path: '/PartTimePalMobileWireframes', element: <PartTimePalMobileWireframes /> },
{ path: '/PartTimePalResourcesPageEmployer', element: <PartTimePalResourcesPageEmployer /> },
{ path: '/PdfViewer', element: <PdfViewer /> },
{ path: '/PopUpWindow', element: <PopUpWindow /> },
{ path: '/Popovers', element: <Popovers /> },
{ path: '/Post', element: <Post /> },
{ path: '/PostAlistingHover', element: <PostAlistingHover /> },
{ path: '/PostApplicantActionApplicantsPageWebVersion1Sketch', element: <PostApplicantActionApplicantsPageWebVersion1Sketch /> },
{ path: '/PostApplicantActionPageSketchVersion2', element: <PostApplicantActionPageSketchVersion2 /> },
{ path: '/PostApplicantActionPageSketchVersion3', element: <PostApplicantActionPageSketchVersion3 /> },
{ path: '/PostEmployerSignUp', element: <PostEmployerSignUp /> },
{ path: '/Profile', element: <Profile /> },
{ path: '/ProfileCreation', element: <ProfileCreation /> },
{ path: '/ProgressBars', element: <ProgressBars /> },
{ path: '/Property1Closed', element: <Property1Closed /> },
{ path: '/Property1Default', element: <Property1Default /> },
{ path: '/Property1Default1', element: <Property1Default1 /> },
{ path: '/Property1Default2', element: <Property1Default2 /> },
{ path: '/Property1Deleted', element: <Property1Deleted /> },
{ path: '/Property1Draft', element: <Property1Draft /> },
{ path: '/Property1EmployeeSide', element: <Property1EmployeeSide /> },
{ path: '/Property1Selected', element: <Property1Selected /> },
{ path: '/Property1Sidebar', element: <Property1Sidebar /> },
{ path: '/Property1Variant2', element: <Property1Variant2 /> },
{ path: '/Property1Variant21', element: <Property1Variant21 /> },
{ path: '/Property1Variant22', element: <Property1Variant22 /> },
{ path: '/Property1Variant3', element: <Property1Variant3 /> },
{ path: '/Property1Variant31', element: <Property1Variant31 /> },
{ path: '/Property1Variant32', element: <Property1Variant32 /> },
{ path: '/Property1Variant4', element: <Property1Variant4 /> },
{ path: '/Property1Variant5', element: <Property1Variant5 /> },
{ path: '/Property1Variant6', element: <Property1Variant6 /> },
{ path: '/Property1Variant7', element: <Property1Variant7 /> },
{ path: '/Property1Variant8', element: <Property1Variant8 /> },
{ path: '/QuickCreateAccount', element: <QuickCreateAccount /> },
{ path: '/RangeSliders', element: <RangeSliders /> },
{ path: '/Roma', element: <Roma /> },
{ path: '/RomaShortlistOfNames', element: <RomaShortlistOfNames /> },
{ path: '/Search', element: <Search /> },
{ path: '/SfProDisplay', element: <SfProDisplay /> },
{ path: '/SidebarFreeComponent', element: <SidebarFreeComponent /> },
{ path: '/SignIn', element: <SignIn /> },
{ path: '/SignIn1', element: <SignIn1 /> },
{ path: '/SignIn2', element: <SignIn2 /> },
{ path: '/SignIn3', element: <SignIn3 /> },
{ path: '/SignUp', element: <SignUp /> },
{ path: '/SignUp1', element: <SignUp1 /> },
{ path: '/SignUp2', element: <SignUp2 /> },
{ path: '/Skeleton', element: <Skeleton /> },
{ path: '/Skeleton1', element: <Skeleton1 /> },
{ path: '/Skeleton10', element: <Skeleton10 /> },
{ path: '/Skeleton11', element: <Skeleton11 /> },
{ path: '/Skeleton12', element: <Skeleton12 /> },
{ path: '/Skeleton13', element: <Skeleton13 /> },
{ path: '/Skeleton14', element: <Skeleton14 /> },
{ path: '/Skeleton15', element: <Skeleton15 /> },
{ path: '/Skeleton16', element: <Skeleton16 /> },
{ path: '/Skeleton17', element: <Skeleton17 /> },
{ path: '/Skeleton18', element: <Skeleton18 /> },
{ path: '/Skeleton19', element: <Skeleton19 /> },
{ path: '/Skeleton2', element: <Skeleton2 /> },
{ path: '/Skeleton20', element: <Skeleton20 /> },
{ path: '/Skeleton21', element: <Skeleton21 /> },
{ path: '/Skeleton22', element: <Skeleton22 /> },
{ path: '/Skeleton23', element: <Skeleton23 /> },
{ path: '/Skeleton24', element: <Skeleton24 /> },
{ path: '/Skeleton25', element: <Skeleton25 /> },
{ path: '/Skeleton26', element: <Skeleton26 /> },
{ path: '/Skeleton27', element: <Skeleton27 /> },
{ path: '/Skeleton28', element: <Skeleton28 /> },
{ path: '/Skeleton29', element: <Skeleton29 /> },
{ path: '/Skeleton3', element: <Skeleton3 /> },
{ path: '/Skeleton30', element: <Skeleton30 /> },
{ path: '/Skeleton31', element: <Skeleton31 /> },
{ path: '/Skeleton32', element: <Skeleton32 /> },
{ path: '/Skeleton33', element: <Skeleton33 /> },
{ path: '/Skeleton34', element: <Skeleton34 /> },
{ path: '/Skeleton35', element: <Skeleton35 /> },
{ path: '/Skeleton4', element: <Skeleton4 /> },
{ path: '/Skeleton5', element: <Skeleton5 /> },
{ path: '/Skeleton6', element: <Skeleton6 /> },
{ path: '/Skeleton7', element: <Skeleton7 /> },
{ path: '/Skeleton8', element: <Skeleton8 /> },
{ path: '/Skeleton9', element: <Skeleton9 /> },
{ path: '/SmallBusinessEmployer', element: <SmallBusinessEmployer /> },
{ path: '/SoonArchive', element: <SoonArchive /> },
{ path: '/Start', element: <Start /> },
{ path: '/StepperNavigation', element: <StepperNavigation /> },
{ path: '/SubinJobEzHomePageSketch1', element: <SubinJobEzHomePageSketch1 /> },
{ path: '/SubinJobEzHomePageSketch2', element: <SubinJobEzHomePageSketch2 /> },
{ path: '/SurfacePro81', element: <SurfacePro81 /> },
{ path: '/Tag', element: <Tag /> },
{ path: '/TextInputs', element: <TextInputs /> },
{ path: '/TextInputs1', element: <TextInputs1 /> },
{ path: '/Toast', element: <Toast /> },
{ path: '/Toast1', element: <Toast1 /> },
{ path: '/Toast2', element: <Toast2 /> },
{ path: '/Toast3', element: <Toast3 /> },
{ path: '/Toast4', element: <Toast4 /> },
{ path: '/Toast5', element: <Toast5 /> },
{ path: '/Toast6', element: <Toast6 /> },
{ path: '/TypeAdvancedStateActiveDarkModeFalseSizeDefault', element: <TypeAdvancedStateActiveDarkModeFalseSizeDefault /> },
{ path: '/TypeAdvancedStateActiveDarkModeFalseSizeLarge', element: <TypeAdvancedStateActiveDarkModeFalseSizeLarge /> },
{ path: '/TypeAdvancedStateActiveDarkModeTrueSizeDefault', element: <TypeAdvancedStateActiveDarkModeTrueSizeDefault /> },
{ path: '/TypeAdvancedStateActiveDarkModeTrueSizeLarge', element: <TypeAdvancedStateActiveDarkModeTrueSizeLarge /> },
{ path: '/TypeAdvancedStateInitialDarkModeFalseSizeDefault', element: <TypeAdvancedStateInitialDarkModeFalseSizeDefault /> },
{ path: '/TypeAdvancedStateInitialDarkModeFalseSizeLarge', element: <TypeAdvancedStateInitialDarkModeFalseSizeLarge /> },
{ path: '/TypeAdvancedStateInitialDarkModeTrueSizeDefault', element: <TypeAdvancedStateInitialDarkModeTrueSizeDefault /> },
{ path: '/TypeAdvancedStateInitialDarkModeTrueSizeLarge', element: <TypeAdvancedStateInitialDarkModeTrueSizeLarge /> },
{ path: '/TypeAdvancedStateTypingDarkModeFalseSizeDefault', element: <TypeAdvancedStateTypingDarkModeFalseSizeDefault /> },
{ path: '/TypeAdvancedStateTypingDarkModeFalseSizeLarge', element: <TypeAdvancedStateTypingDarkModeFalseSizeLarge /> },
{ path: '/TypeAdvancedStateTypingDarkModeTrueSizeDefault', element: <TypeAdvancedStateTypingDarkModeTrueSizeDefault /> },
{ path: '/TypeAdvancedStateTypingDarkModeTrueSizeLarge', element: <TypeAdvancedStateTypingDarkModeTrueSizeLarge /> },
{ path: '/TypeAdvancedStateWithCtaDarkModeFalseSizeDefault', element: <TypeAdvancedStateWithCtaDarkModeFalseSizeDefault /> },
{ path: '/TypeAdvancedStateWithCtaDarkModeFalseSizeLarge', element: <TypeAdvancedStateWithCtaDarkModeFalseSizeLarge /> },
{ path: '/TypeAdvancedStateWithCtaDarkModeTrueSizeDefault', element: <TypeAdvancedStateWithCtaDarkModeTrueSizeDefault /> },
{ path: '/TypeAdvancedStateWithCtaDarkModeTrueSizeLarge', element: <TypeAdvancedStateWithCtaDarkModeTrueSizeLarge /> },
{ path: '/TypeAlertsDarkModeFalseBreakpointsDesktop', element: <TypeAlertsDarkModeFalseBreakpointsDesktop /> },
{ path: '/TypeAlertsDarkModeFalseBreakpointsMobile', element: <TypeAlertsDarkModeFalseBreakpointsMobile /> },
{ path: '/TypeAlertsDarkModeTrueBreakpointsDesktop', element: <TypeAlertsDarkModeTrueBreakpointsDesktop /> },
{ path: '/TypeAlertsDarkModeTrueBreakpointsMobile', element: <TypeAlertsDarkModeTrueBreakpointsMobile /> },
{ path: '/TypeBackgroundDarkModeFalseBreakpointsDesktop', element: <TypeBackgroundDarkModeFalseBreakpointsDesktop /> },
{ path: '/TypeBackgroundDarkModeFalseBreakpointsMobile', element: <TypeBackgroundDarkModeFalseBreakpointsMobile /> },
{ path: '/TypeBackgroundDarkModeTrueBreakpointsDesktop', element: <TypeBackgroundDarkModeTrueBreakpointsDesktop /> },
{ path: '/TypeBackgroundDarkModeTrueBreakpointsMobile', element: <TypeBackgroundDarkModeTrueBreakpointsMobile /> },
{ path: '/TypeBottomIconTextBreakpointsDesktopDarkModeFalse', element: <TypeBottomIconTextBreakpointsDesktopDarkModeFalse /> },
{ path: '/TypeBottomIconTextBreakpointsDesktopDarkModeTrue', element: <TypeBottomIconTextBreakpointsDesktopDarkModeTrue /> },
{ path: '/TypeBottomIconTextBreakpointsMobileDarkModeFalse', element: <TypeBottomIconTextBreakpointsMobileDarkModeFalse /> },
{ path: '/TypeBottomIconTextBreakpointsMobileDarkModeTrue', element: <TypeBottomIconTextBreakpointsMobileDarkModeTrue /> },
{ path: '/TypeBottomIconTextBreakpointsTabletDarkModeFalse', element: <TypeBottomIconTextBreakpointsTabletDarkModeFalse /> },
{ path: '/TypeBottomIconTextBreakpointsTabletDarkModeTrue', element: <TypeBottomIconTextBreakpointsTabletDarkModeTrue /> },
{ path: '/TypeContainerSizeCtaBreakpointsDesktopDarkModeFalse', element: <TypeContainerSizeCtaBreakpointsDesktopDarkModeFalse /> },
{ path: '/TypeContainerSizeCtaBreakpointsDesktopDarkModeTrue', element: <TypeContainerSizeCtaBreakpointsDesktopDarkModeTrue /> },
{ path: '/TypeContainerSizeCtaBreakpointsMobileDarkModeFalse', element: <TypeContainerSizeCtaBreakpointsMobileDarkModeFalse /> },
{ path: '/TypeContainerSizeCtaBreakpointsMobileDarkModeTrue', element: <TypeContainerSizeCtaBreakpointsMobileDarkModeTrue /> },
{ path: '/TypeContainerSizeCtaBreakpointsTabletDarkModeFalse', element: <TypeContainerSizeCtaBreakpointsTabletDarkModeFalse /> },
{ path: '/TypeContainerSizeCtaBreakpointsTabletDarkModeTrue', element: <TypeContainerSizeCtaBreakpointsTabletDarkModeTrue /> },
{ path: '/TypeCtaBreakpointsDesktopDarkModeFalse', element: <TypeCtaBreakpointsDesktopDarkModeFalse /> },
{ path: '/TypeCtaBreakpointsDesktopDarkModeTrue', element: <TypeCtaBreakpointsDesktopDarkModeTrue /> },
{ path: '/TypeCtaBreakpointsMobileDarkModeFalse', element: <TypeCtaBreakpointsMobileDarkModeFalse /> },
{ path: '/TypeCtaBreakpointsMobileDarkModeTrue', element: <TypeCtaBreakpointsMobileDarkModeTrue /> },
{ path: '/TypeCtaBreakpointsTabletDarkModeFalse', element: <TypeCtaBreakpointsTabletDarkModeFalse /> },
{ path: '/TypeCtaBreakpointsTabletDarkModeTrue', element: <TypeCtaBreakpointsTabletDarkModeTrue /> },
{ path: '/TypeDefaultBreakpointsDesktopDarkModeFalse', element: <TypeDefaultBreakpointsDesktopDarkModeFalse /> },
{ path: '/TypeDefaultBreakpointsDesktopDarkModeTrue', element: <TypeDefaultBreakpointsDesktopDarkModeTrue /> },
{ path: '/TypeDefaultBreakpointsMobileDarkModeFalse', element: <TypeDefaultBreakpointsMobileDarkModeFalse /> },
{ path: '/TypeDefaultBreakpointsMobileDarkModeTrue', element: <TypeDefaultBreakpointsMobileDarkModeTrue /> },
{ path: '/TypeDefaultBreakpointsTabletDarkModeFalse', element: <TypeDefaultBreakpointsTabletDarkModeFalse /> },
{ path: '/TypeDefaultBreakpointsTabletDarkModeTrue', element: <TypeDefaultBreakpointsTabletDarkModeTrue /> },
{ path: '/TypeDefaultDarkModeFalseBreakpointsDesktop', element: <TypeDefaultDarkModeFalseBreakpointsDesktop /> },
{ path: '/TypeDefaultDarkModeFalseBreakpointsMobile', element: <TypeDefaultDarkModeFalseBreakpointsMobile /> },
{ path: '/TypeDefaultDarkModeTrueBreakpointsDesktop', element: <TypeDefaultDarkModeTrueBreakpointsDesktop /> },
{ path: '/TypeDefaultDarkModeTrueBreakpointsMobile', element: <TypeDefaultDarkModeTrueBreakpointsMobile /> },
{ path: '/TypeDefaultStateActiveDarkModeFalseSizeDefault', element: <TypeDefaultStateActiveDarkModeFalseSizeDefault /> },
{ path: '/TypeDefaultStateActiveDarkModeFalseSizeLarge', element: <TypeDefaultStateActiveDarkModeFalseSizeLarge /> },
{ path: '/TypeDefaultStateActiveDarkModeTrueSizeDefault', element: <TypeDefaultStateActiveDarkModeTrueSizeDefault /> },
{ path: '/TypeDefaultStateActiveDarkModeTrueSizeLarge', element: <TypeDefaultStateActiveDarkModeTrueSizeLarge /> },
{ path: '/TypeDefaultStateInitialDarkModeFalseSizeDefault', element: <TypeDefaultStateInitialDarkModeFalseSizeDefault /> },
{ path: '/TypeDefaultStateInitialDarkModeFalseSizeLarge', element: <TypeDefaultStateInitialDarkModeFalseSizeLarge /> },
{ path: '/TypeDefaultStateInitialDarkModeTrueSizeDefault', element: <TypeDefaultStateInitialDarkModeTrueSizeDefault /> },
{ path: '/TypeDefaultStateInitialDarkModeTrueSizeLarge', element: <TypeDefaultStateInitialDarkModeTrueSizeLarge /> },
{ path: '/TypeDefaultStateTypingDarkModeFalseSizeDefault', element: <TypeDefaultStateTypingDarkModeFalseSizeDefault /> },
{ path: '/TypeDefaultStateTypingDarkModeFalseSizeLarge', element: <TypeDefaultStateTypingDarkModeFalseSizeLarge /> },
{ path: '/TypeDefaultStateTypingDarkModeTrueSizeDefault', element: <TypeDefaultStateTypingDarkModeTrueSizeDefault /> },
{ path: '/TypeDefaultStateTypingDarkModeTrueSizeLarge', element: <TypeDefaultStateTypingDarkModeTrueSizeLarge /> },
{ path: '/TypeDefaultStateWithCtaDarkModeFalseSizeDefault', element: <TypeDefaultStateWithCtaDarkModeFalseSizeDefault /> },
{ path: '/TypeDefaultStateWithCtaDarkModeFalseSizeLarge', element: <TypeDefaultStateWithCtaDarkModeFalseSizeLarge /> },
{ path: '/TypeDefaultStateWithCtaDarkModeTrueSizeDefault', element: <TypeDefaultStateWithCtaDarkModeTrueSizeDefault /> },
{ path: '/TypeDefaultStateWithCtaDarkModeTrueSizeLarge', element: <TypeDefaultStateWithCtaDarkModeTrueSizeLarge /> },
{ path: '/TypeNewsletterBreakpointsDesktopDarkModeFalse', element: <TypeNewsletterBreakpointsDesktopDarkModeFalse /> },
{ path: '/TypeNewsletterBreakpointsDesktopDarkModeTrue', element: <TypeNewsletterBreakpointsDesktopDarkModeTrue /> },
{ path: '/TypeNewsletterBreakpointsMobileDarkModeFalse', element: <TypeNewsletterBreakpointsMobileDarkModeFalse /> },
{ path: '/TypeNewsletterBreakpointsMobileDarkModeTrue', element: <TypeNewsletterBreakpointsMobileDarkModeTrue /> },
{ path: '/TypeNewsletterBreakpointsTabletDarkModeFalse', element: <TypeNewsletterBreakpointsTabletDarkModeFalse /> },
{ path: '/TypeNewsletterBreakpointsTabletDarkModeTrue', element: <TypeNewsletterBreakpointsTabletDarkModeTrue /> },
{ path: '/TypeNumberDescriptionDarkModeFalseBreakpointsDesktop', element: <TypeNumberDescriptionDarkModeFalseBreakpointsDesktop /> },
{ path: '/TypeNumberDescriptionDarkModeFalseBreakpointsMobile', element: <TypeNumberDescriptionDarkModeFalseBreakpointsMobile /> },
{ path: '/TypeNumberDescriptionDarkModeTrueBreakpointsDesktop', element: <TypeNumberDescriptionDarkModeTrueBreakpointsDesktop /> },
{ path: '/TypeNumberDescriptionDarkModeTrueBreakpointsMobile', element: <TypeNumberDescriptionDarkModeTrueBreakpointsMobile /> },
{ path: '/TypeProgressBarDarkModeFalseBreakpointsDesktop', element: <TypeProgressBarDarkModeFalseBreakpointsDesktop /> },
{ path: '/TypeProgressBarDarkModeFalseBreakpointsMobile', element: <TypeProgressBarDarkModeFalseBreakpointsMobile /> },
{ path: '/TypeProgressBarDarkModeTrueBreakpointsDesktop', element: <TypeProgressBarDarkModeTrueBreakpointsDesktop /> },
{ path: '/TypeProgressBarDarkModeTrueBreakpointsMobile', element: <TypeProgressBarDarkModeTrueBreakpointsMobile /> },
{ path: '/TypeVerticalDarkModeFalseBreakpointsDesktop', element: <TypeVerticalDarkModeFalseBreakpointsDesktop /> },
{ path: '/TypeVerticalDarkModeFalseBreakpointsMobile', element: <TypeVerticalDarkModeFalseBreakpointsMobile /> },
{ path: '/TypeVerticalDarkModeTrueBreakpointsDesktop', element: <TypeVerticalDarkModeTrueBreakpointsDesktop /> },
{ path: '/TypeVerticalDarkModeTrueBreakpointsMobile', element: <TypeVerticalDarkModeTrueBreakpointsMobile /> },
{ path: '/UploadResume', element: <UploadResume /> },
{ path: '/UserCreatesApassword', element: <UserCreatesApassword /> },
{ path: '/UserEntersEmail', element: <UserEntersEmail /> },
{ path: '/UserProfileScreen', element: <UserProfileScreen /> },
{ path: '/UserProfileScreen1', element: <UserProfileScreen1 /> },
{ path: '/UserProfileScreen2', element: <UserProfileScreen2 /> },
{ path: '/VercelListing', element: <VercelListing /> },
{ path: '/VerifyAccountScreen', element: <VerifyAccountScreen /> },
{ path: '/VerifyAccountScreenCodeEnteredByUser', element: <VerifyAccountScreenCodeEnteredByUser /> },
{ path: '/WebListingVercel', element: <WebListingVercel /> },
{ path: '/WebsiteBoth', element: <WebsiteBoth /> },
{ path: '/WebsiteBoth1', element: <WebsiteBoth1 /> },
{ path: '/WebsiteJobSeekerFacing', element: <WebsiteJobSeekerFacing /> },
{ path: '/WireframesPhone42', element: <WireframesPhone42 /> },
{ path: '/Xoutline', element: <Xoutline /> },
{ path: '/Xoutline1', element: <Xoutline1 /> },
{ path: '/Xoutline2', element: <Xoutline2 /> },
{ path: '/Xoutline3', element: <Xoutline3 /> },
{ path: '/Xoutline4', element: <Xoutline4 /> },
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}