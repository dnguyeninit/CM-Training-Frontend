<#-- @ftlvariable name="self" type="com.coremedia.blueprint.common.contentbeans.CMPicture" -->
<div class="col-lg-12">
  <img src="${cm.getLink(self.data!cm.UNDEFINED)}"
       title="${self.title!''}"
       alt="${self.alt!self.title!''}"
       class="img-responsive img-border" />
  <#if self.teaserText?has_content>
    <div class="text-center">
      <@cm.include self=self.detailText />
    </div>
  </#if>
</div>