<#-- @ftlvariable name="self" type="com.coremedia.blueprint.common.layout.PageGrid" -->
<#-- @ftlvariable name="cmpage" type="com.coremedia.blueprint.common.contentbeans.Page" -->

<div class="${self.cssClassName!''}">
  <#list self.rows![] as row>

    <#assign isSinglePlacementRow = row.placements?size==1/>
    <#assign firstPlacement = row.placements?first/>

    <#if isSinglePlacementRow && firstPlacement.additionalProperties['specialView']?has_content>
      <@cm.include self=firstPlacement
        view=firstPlacement.additionalProperties['specialView'] />

    <#else>
      <div class="container">
        <div class="row">
          <#list row.placements![] as placement>
            <div class="col-lg-${placement.colspan}">
              <#-- if the page that is to be loaded has a detailView on the main placement, show the page's content  -->
              <#-- A page is considered to be a detail view if the main contend rendered on the page is not a navigation node. -->
              <#if placement.name=="main" && cmpage.detailView>
                  <@cm.include self=cmpage.content/>
              <#elseif placement.additionalProperties['specialView']?has_content>
                <#-- Special Treatment -->
                <@cm.include self=placement
                view=placement.additionalProperties['specialView'] />
              <#else>
                <#-- if above is false, then just include the content items under the current placement as a teaser -->
                <@cm.include self=placement view="asTeaser"/>
              </#if>
            </div>
          </#list>
        </div>
      </div>
    </#if>
  </#list>
</div>
