<#-- @ftlvariable name="self" type="com.coremedia.blueprint.common.layout.Container" -->
<#import "*/node_modules/@coremedia/brick-slick-carousel/src/freemarkerLibs/slickCarousel.ftl" as carousel />

<#assign itemsView = cm.localParameter('itemsView', 'asTeaser') />
<#assign slickConfig = cm.localParameter('slickConfig', {}) />

<@carousel.render items=self.items![] itemsView=itemsView slickConfig=slickConfig/>
