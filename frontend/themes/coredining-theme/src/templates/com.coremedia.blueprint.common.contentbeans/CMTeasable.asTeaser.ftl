<#-- @ftlvariable name="self" type="com.coremedia.blueprint.common.contentbeans.CMTeasable" -->
<#import "*/node_modules/@coremedia/brick-utils/src/freemarkerLibs/utils.ftl" as utils />

<#assign targetLink=cm.getLink(self.target)/>
<div class="xx-teaser xx-teaser--block">
  <h3 class="xx-teaser__title">
      <@utils.optionalLink href=targetLink>
          ${self.teaserTitle!self.title}
      </@utils.optionalLink>
  </h3>
  <#if self.picture?has_content>
  <div class="xx-teaser__picture">
      <@utils.optionalLink href=targetLink>
          <@cm.include self=self.picture view="asThumbnail"/>
      </@utils.optionalLink>
    <!-- TODO: (3) render the picture as thumbnail.
	               wrap the picture with an optional hyperlink to the target -->
  </div>
  </#if>
  <#if self.teaserText?has_content>

    <#assign truncatedTeaserText=bp.truncateText(self.teaserText, 140)/>
    <div  class="xx-teaser__text">
      <@utils.renderWithLineBreaks text=truncatedTeaserText/>
    </div>
  </#if>
</div>
