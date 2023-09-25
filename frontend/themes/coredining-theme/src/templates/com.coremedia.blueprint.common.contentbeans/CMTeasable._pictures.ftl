<#if self.pictures?size gt 1>
  <@cm.include self=bp.getContainer(self.pictures) view="asCarousel"
  params={"itemsView" : "asLarge",
  "slickConfig" : {
    "autoplay" : true,
    "autoplaySpeed" : 2000
    }
  }
  />
<#else>
    <@cm.include self=self.picture view="asLarge"/>
</#if>
