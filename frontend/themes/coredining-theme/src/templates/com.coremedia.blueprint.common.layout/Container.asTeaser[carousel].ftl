<#assign paramsFromSelf = bp.setting(self, "carousel", {}) />
<#--  Also possible to use cmpage.navigation instead of self. This uses the closest configuration related to the
  currently rendered content item -->
<#assign paramsFromContext = bp.setting(cmpage.navigation, "carousel", {}) />
<#assign defaultParams = {"itemsView" : "asTeaser", "slickConfig" : {} } />

<#assign carouselParams = defaultParams + paramsFromContext + paramsFromSelf />

<@cm.include self=self view="asCarousel" params=carouselParams/>
