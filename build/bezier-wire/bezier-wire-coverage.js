if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/bezier-wire/bezier-wire.js']) {
   __coverage__['build/bezier-wire/bezier-wire.js'] = {"path":"build/bezier-wire/bezier-wire.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0},"b":{},"f":{"1":0,"2":0,"3":0,"4":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":23},"end":{"line":1,"column":42}}},"2":{"name":"(anonymous_2)","line":14,"loc":{"start":{"line":14,"column":15},"end":{"line":14,"column":30}}},"3":{"name":"(anonymous_3)","line":28,"loc":{"start":{"line":28,"column":11},"end":{"line":28,"column":23}}},"4":{"name":"(anonymous_4)","line":70,"loc":{"start":{"line":70,"column":14},"end":{"line":70,"column":29}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":80,"column":45}},"2":{"start":{"line":14,"column":0},"end":{"line":16,"column":2}},"3":{"start":{"line":15,"column":3},"end":{"line":15,"column":62}},"4":{"start":{"line":18,"column":0},"end":{"line":18,"column":33}},"5":{"start":{"line":20,"column":0},"end":{"line":59,"column":3}},"6":{"start":{"line":30,"column":8},"end":{"line":30,"column":21}},"7":{"start":{"line":32,"column":8},"end":{"line":32,"column":42}},"8":{"start":{"line":33,"column":8},"end":{"line":33,"column":42}},"9":{"start":{"line":35,"column":8},"end":{"line":35,"column":40}},"10":{"start":{"line":36,"column":8},"end":{"line":36,"column":40}},"11":{"start":{"line":37,"column":8},"end":{"line":37,"column":62}},"12":{"start":{"line":39,"column":9},"end":{"line":39,"column":33}},"13":{"start":{"line":41,"column":8},"end":{"line":41,"column":61}},"14":{"start":{"line":43,"column":8},"end":{"line":50,"column":42}},"15":{"start":{"line":52,"column":8},"end":{"line":52,"column":19}},"16":{"start":{"line":61,"column":0},"end":{"line":76,"column":3}},"17":{"start":{"line":71,"column":9},"end":{"line":71,"column":34}}},"branchMap":{},"code":["(function () { YUI.add('bezier-wire', function (Y, NAME) {","","/**"," * @module bezier-wire"," */","","/**"," * Extend WireBase to draw a bezier curve"," * @class BezierWire"," * @extends WireBase"," * @constructor"," * @param {Object} config the configuration for the BezierWire attributes"," */","Y.BezierWire = function (cfg) {","   Y.BezierWire.superclass.constructor.apply(this, arguments);","};","","Y.BezierWire.NAME = \"bezierwire\";","","Y.extend(Y.BezierWire, Y.WireBase, {","   ","   /**","    * Draw the bezier curve.","    * The canvas is made bigger to contain the curls","    * @method _draw","    * @method private","    */","    _draw: function () {","        ","        this.clear();","        ","        var src = this.get('src').getXY();","        var tgt = this.get('tgt').getXY();","        ","        var srcDir = this.get('srcDir');","        var tgtDir = this.get('tgtDir');","        var bezierTangentNorm = this.get('bezierTangentNorm');","         ","         var terminalSize = 14/2;","         ","        this.moveTo(src[0]+terminalSize,src[1]+terminalSize);","        ","        this.curveTo(src[0]+terminalSize+srcDir[0]*bezierTangentNorm,","                     src[1]+terminalSize+srcDir[1]*bezierTangentNorm, ","                     ","                     tgt[0]+terminalSize+tgtDir[0]*bezierTangentNorm,","                     tgt[1]+terminalSize+tgtDir[1]*bezierTangentNorm, ","                     ","                     tgt[0]+terminalSize,","                     tgt[1]+terminalSize);","        ","        this.end();","     },","   ","   ","   ","   SERIALIZABLE_ATTRS: [\"color\",\"width\",\"bezierTangentNorm\"]","   ","});","","Y.BezierWire.ATTRS = Y.merge(Y.WireBase.ATTRS, {","   ","   /** ","    * Norm of the tangeant vector at the endpoints.","    * @attribute bezierTangentNorm","    * @default 100","    * @type Integer","    */","   bezierTangentNorm: {","      setter: function (val) {","         return parseInt(val, 10);","      },","      value: 200","   }","","});","","","","}, '@VERSION@', {\"requires\": [\"wire-base\"]});","","}());"]};
}
var __cov_LyPLSM7uyXECjfJFJxhhqA = __coverage__['build/bezier-wire/bezier-wire.js'];
__cov_LyPLSM7uyXECjfJFJxhhqA.s['1']++;YUI.add('bezier-wire',function(Y,NAME){__cov_LyPLSM7uyXECjfJFJxhhqA.f['1']++;__cov_LyPLSM7uyXECjfJFJxhhqA.s['2']++;Y.BezierWire=function(cfg){__cov_LyPLSM7uyXECjfJFJxhhqA.f['2']++;__cov_LyPLSM7uyXECjfJFJxhhqA.s['3']++;Y.BezierWire.superclass.constructor.apply(this,arguments);};__cov_LyPLSM7uyXECjfJFJxhhqA.s['4']++;Y.BezierWire.NAME='bezierwire';__cov_LyPLSM7uyXECjfJFJxhhqA.s['5']++;Y.extend(Y.BezierWire,Y.WireBase,{_draw:function(){__cov_LyPLSM7uyXECjfJFJxhhqA.f['3']++;__cov_LyPLSM7uyXECjfJFJxhhqA.s['6']++;this.clear();__cov_LyPLSM7uyXECjfJFJxhhqA.s['7']++;var src=this.get('src').getXY();__cov_LyPLSM7uyXECjfJFJxhhqA.s['8']++;var tgt=this.get('tgt').getXY();__cov_LyPLSM7uyXECjfJFJxhhqA.s['9']++;var srcDir=this.get('srcDir');__cov_LyPLSM7uyXECjfJFJxhhqA.s['10']++;var tgtDir=this.get('tgtDir');__cov_LyPLSM7uyXECjfJFJxhhqA.s['11']++;var bezierTangentNorm=this.get('bezierTangentNorm');__cov_LyPLSM7uyXECjfJFJxhhqA.s['12']++;var terminalSize=14/2;__cov_LyPLSM7uyXECjfJFJxhhqA.s['13']++;this.moveTo(src[0]+terminalSize,src[1]+terminalSize);__cov_LyPLSM7uyXECjfJFJxhhqA.s['14']++;this.curveTo(src[0]+terminalSize+srcDir[0]*bezierTangentNorm,src[1]+terminalSize+srcDir[1]*bezierTangentNorm,tgt[0]+terminalSize+tgtDir[0]*bezierTangentNorm,tgt[1]+terminalSize+tgtDir[1]*bezierTangentNorm,tgt[0]+terminalSize,tgt[1]+terminalSize);__cov_LyPLSM7uyXECjfJFJxhhqA.s['15']++;this.end();},SERIALIZABLE_ATTRS:['color','width','bezierTangentNorm']});__cov_LyPLSM7uyXECjfJFJxhhqA.s['16']++;Y.BezierWire.ATTRS=Y.merge(Y.WireBase.ATTRS,{bezierTangentNorm:{setter:function(val){__cov_LyPLSM7uyXECjfJFJxhhqA.f['4']++;__cov_LyPLSM7uyXECjfJFJxhhqA.s['17']++;return parseInt(val,10);},value:200}});},'@VERSION@',{'requires':['wire-base']});
