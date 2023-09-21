<#-- @ftlvariable name="self" type="com.coremedia.blueprint.common.contentbeans.CMPicture" -->
<div class="xx-picture xx-picture--large">
  <img src="${cm.getLink(self.data!cm.UNDEFINED)}" title="${self.title!''}" width="100%" class="xx-picture__image"/>
    <#if self.teaserText?has_content>
      <div class="xx-picture__caption">
          <@cm.include self=self.detailText/>
      </div>
    </#if>
</div>

