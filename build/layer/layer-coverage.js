if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/layer/layer.js']) {
   __coverage__['build/layer/layer.js'] = {"path":"build/layer/layer.js","s":{"1":0,"2":0,"3":0,"4":0},"b":{},"f":{"1":0,"2":0,"3":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":17},"end":{"line":1,"column":36}}},"2":{"name":"(anonymous_2)","line":16,"loc":{"start":{"line":16,"column":16},"end":{"line":16,"column":28}}},"3":{"name":"(anonymous_3)","line":27,"loc":{"start":{"line":27,"column":10},"end":{"line":27,"column":22}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":45,"column":101}},"2":{"start":{"line":14,"column":0},"end":{"line":41,"column":3}},"3":{"start":{"line":18,"column":6},"end":{"line":18,"column":70}},"4":{"start":{"line":28,"column":6},"end":{"line":28,"column":23}}},"branchMap":{},"code":["(function () { YUI.add('layer', function (Y, NAME) {","","/**"," * @module layer"," */","","/**"," * Layer : Widget to manage collections of wires (through WiresDelegate) and containers (trough WidgetParent)"," * @class Layer"," * @extends Widget"," * @uses WidgetParent"," * @uses WiresDelegate"," */","Y.Layer = Y.Base.create(\"layer\", Y.Widget, [Y.WidgetParent, Y.WiresDelegate], {","   ","   initializer: function () {","      ","      this.graphic = new Y.Graphic({render: this.get('contentBox') }); ","      ","   },","   ","   ","   /**","    * Alias method for WidgetParent.removeAll","    * @method clear","    */","   clear: function () {","      this.removeAll();","   }","   ","}, {","   ","   ATTRS: {","      ","      defaultChildType: {","         value: 'Container'","      }","      ","   }","   ","});","","","","}, '@VERSION@', {\"requires\": [\"widget-parent\", \"container\", \"wires-delegate\"], \"skinnable\": \"true\"});","","}());"]};
}
var __cov_34onYNAV1kF9gWfIHPP_eQ = __coverage__['build/layer/layer.js'];
__cov_34onYNAV1kF9gWfIHPP_eQ.s['1']++;YUI.add('layer',function(Y,NAME){__cov_34onYNAV1kF9gWfIHPP_eQ.f['1']++;__cov_34onYNAV1kF9gWfIHPP_eQ.s['2']++;Y.Layer=Y.Base.create('layer',Y.Widget,[Y.WidgetParent,Y.WiresDelegate],{initializer:function(){__cov_34onYNAV1kF9gWfIHPP_eQ.f['2']++;__cov_34onYNAV1kF9gWfIHPP_eQ.s['3']++;this.graphic=new Y.Graphic({render:this.get('contentBox')});},clear:function(){__cov_34onYNAV1kF9gWfIHPP_eQ.f['3']++;__cov_34onYNAV1kF9gWfIHPP_eQ.s['4']++;this.removeAll();}},{ATTRS:{defaultChildType:{value:'Container'}}});},'@VERSION@',{'requires':['widget-parent','container','wires-delegate'],'skinnable':'true'});
