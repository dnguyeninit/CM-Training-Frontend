
/**
 * Interface values for ResourceBundle "PersonalizationPlugIn".
 * @see PersonalizationPlugIn_properties#INSTANCE
 */
interface PersonalizationPlugIn_properties {

  segments_btn: string;
  profiles_btn: string;
  Tab_test_user_profile_raw_title: string;
  Tab_test_user_profile_struct_title: string;
  openProfileDebugger_tooltip: string;
  openProfileDebugger_text: string;
  group_header_label_site_specific: string;
  group_header_label_system_specific: string;
/**
 * Selection Rule Fields (EXML)

 */
  con_day_week_lt: string;
  con_day_week_eq: string;
  con_day_week_gt: string;
  con_user_is_logged_in: string;
  con_name: string;
  con_given_name: string;
  con_family_name: string;
  con_segment: string;
  con_keywords: string;
  con_explicit_interest: string;
  con_sunday: string;
  con_monday: string;
  con_tuesday: string;
  con_wednesday: string;
  con_thursday: string;
  con_friday: string;
  con_saturday: string;
  con_referrer: string;
  con_query: string;
  con_searchengine: string;
  con_explicit_adaptive: string;
  con_explicit_social: string;
  con_explicit_mobile: string;
  con_explicit_multitouch: string;
  con_social_background: string;
  con_social_background_login: string;
  con_number_of_comments: string;
  con_number_of_ratings: string;
  con_number_of_likes: string;
  con_number_of_explicit_interests: string;
  con_gender: string;
  con_gender_male: string;
  con_gender_female: string;
/**
 * P13N Search Messages
 */
  ARGUMENT_VALUE: string;
  ARGUMENT_UNKNOWN: string;
  ARGUMENT_MISSING: string;
  ARGUMENT_SYNTAX: string;
  FUNCTION_EVALUATION: string;
  FUNCTION_UNKNOWN: string;
  GENERAL: string;
/**
 * TaxonomyProperty
 */
  p13n_context_taxonomy_explicit_interests_label: string;
  p13n_context_taxonomy_implicit_interests_label: string;
  p13n_context_explicit: string;
  p13n_context_taxonomy_add_subject_taxonomy_button_text: string;
  p13n_context_subjectTaxonomies: string;
  p13n_context_locationTaxonomies: string;
  p13n_context_explicittaxonomy: string;
  p13n_context_taxonomy: string;
  p13_es_check: string;
/**
 * PLUGINs
 */
  plugin_addHomeFolderContexts_suffix: string;
  p13n_tabs_interests: string;
}

/**
 * Singleton for the current user Locale's instance of ResourceBundle "PersonalizationPlugIn".
 * @see PersonalizationPlugIn_properties
 */
const PersonalizationPlugIn_properties: PersonalizationPlugIn_properties = {
  segments_btn: "Segments",
  profiles_btn: "Testusers",
  Tab_test_user_profile_raw_title: "Base Settings",
  Tab_test_user_profile_struct_title: "Extended Settings",
  openProfileDebugger_tooltip: "Show profile information",
  openProfileDebugger_text: "profile details",
  group_header_label_site_specific: "Site Specific",
  group_header_label_system_specific: "System Specific",
  con_day_week_lt: "before",
  con_day_week_eq: "on",
  con_day_week_gt: "after",
  con_user_is_logged_in: "User Logged In",
  con_name: "Name",
  con_given_name: "Given Name",
  con_family_name: "Family Name",
  con_segment: "Segment",
  con_keywords: "Keywords",
  con_explicit_interest: "Explicit Interest",
  con_sunday: "Sunday",
  con_monday: "Monday",
  con_tuesday: "Tuesday",
  con_wednesday: "Wednesday",
  con_thursday: "Thursday",
  con_friday: "Friday",
  con_saturday: "Saturday",
  con_referrer: "Referrer URL",
  con_query: "Search Query",
  con_searchengine: "Search Engine",
  con_explicit_adaptive: "Adaptive Websites",
  con_explicit_social: "Elastic Social",
  con_explicit_mobile: "Mobile Delivery",
  con_explicit_multitouch: "Multi Touchpoint",
  con_social_background: "User",
  con_social_background_login: "User Logged In",
  con_number_of_comments: "Number of Comments",
  con_number_of_ratings: "Number of Ratings",
  con_number_of_likes: "Number of Likes",
  con_number_of_explicit_interests: "Number of Explicit Interests",
  con_gender: "Gender",
  con_gender_male: "Male",
  con_gender_female: "Female",
  ARGUMENT_VALUE: "The value of parameter '{1}' of function '{0}' is invalid. Did you use the correct type?",
  ARGUMENT_UNKNOWN: "The parameter '{1}' is unknown to function '{0}'",
  ARGUMENT_MISSING: "The function '{0}' requires the parameter '{1}'",
  ARGUMENT_SYNTAX: "Argument '{1}' of function '{0}' is of invalid syntax. Please use the syntax &lt;name&gt;:&lt;value&gt;",
  FUNCTION_EVALUATION: "An error occurred while evaluating function '{0}': {1}",
  FUNCTION_UNKNOWN: "The function '{0}' is unknown",
  GENERAL: "An error occurred: '{0}'",
  p13n_context_taxonomy_explicit_interests_label: "Explicit Interests",
  p13n_context_taxonomy_implicit_interests_label: "Implicit Interests",
  p13n_context_explicit: "Explicit Interest",
  p13n_context_taxonomy_add_subject_taxonomy_button_text: "+ Add keyword",
  p13n_context_subjectTaxonomies: "Subject Tags",
  p13n_context_locationTaxonomies: "Location Tags",
  p13n_context_explicittaxonomy: "Explicit Tags",
  p13n_context_taxonomy: "Tag",
  p13_es_check: "Social",
  plugin_addHomeFolderContexts_suffix: " (private)",
  p13n_tabs_interests: "Interests",
};

export default PersonalizationPlugIn_properties;
