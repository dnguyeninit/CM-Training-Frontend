<div>
  <#list self.items![] as item>
    <@cm.include self=item view="asTeaser"/>
  </#list>
</div>
