<#-- @ftlvariable name="self" type="com.coremedia.blueprint.common.contentbeans.CMPicture" -->
<div>
  <img src="${cm.getLink(self.data!cm.UNDEFINED)}"
       class="img-responsive img-border img-left"
       title="${self.title!''}"
       alt="${self.alt!self.title!''}" />
</div>