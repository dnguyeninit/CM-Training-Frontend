<#-- @ftlvariable name="self" type="com.coremedia.blueprint.common.contentbeans.CMArticle" -->

<hr>
<h1>${self.title!"No Title"}</h1>
<hr>

<@cm.include self=self.picture!cm.UNDEFINED />

<div>
    <@cm.include self=self.detailText />
</div>

<#list self.related![]>
  <h2>
    Related
  </h2>
  <#items as related>
    <ul>
       <a href="${cm.getLink(related)}">${related.title}</a>
    </ul>
  </#items>
</#list>