YUI.add("bidirectional-arrow-wire",function(e,t){e.BidirectionalArrowWire=function(t){e.BidirectionalArrowWire.superclass.constructor.apply(this,arguments)},e.BidirectionalArrowWire.NAME="bidirectionalarrowwire",e.extend(e.BidirectionalArrowWire,e.WireBase,{_draw:function(){var e=7,t=e+3,n=[4+t,4+t],r=this.get("src").getXY(),i=this.get("tgt").getXY(),s=Math.sqrt(Math.pow(r[0]-i[0],2)+Math.pow(r[1]-i[1],2));this.moveTo(r[0]+6,r[1]+6),this.lineTo(i[0]+6,i[1]+6);var o=r,u=i,f=[0,0],l=20,c=s===0?0:1-l/s;f[0]=Math.abs(o[0]+c*(u[0]-o[0])),f[1]=Math.abs(o[1]+c*(u[1]-o[1]));var h=o[0]-u[0],p=o[1]-u[1],d=o[0]*u[1]-o[1]*u[0];h!==0?(a=p/h,b=d/h):a=0,a===0?aProst=0:aProst=-1/a,bProst=f[1]-aProst*f[0];var v=1+Math.pow(aProst,2),m=2*aProst*bProst-2*f[0]-2*f[1]*aProst,g=-2*f[1]*bProst+Math.pow(f[0],2)+Math.pow(f[1],2)-Math.pow(e,2)+Math.pow(bProst,2),y=Math.pow(m,2)-4*v*g;if(y<0)return;var w=(-m+Math.sqrt(y))/(2*v),E=(-m-Math.sqrt(y))/(2*v),S=aProst*w+bProst,x=aProst*E+bProst;if(o[1]==u[1]){var T=o[0]>u[0]?1:-1;w=u[0]+T*l,E=w,S-=e,x+=e}this.moveTo(u[0]+6,u[1]+6),this.lineTo(w+6,S+6),this.moveTo(u[0]+6,u[1]+6),this.lineTo(E+6,x+6),o=i,u=r;var f=[0,0],l=20,c=s==0?0:1-l/s;f[0]=Math.abs(o[0]+c*(u[0]-o[0])),f[1]=Math.abs(o[1]+c*(u[1]-o[1]));var h=o[0]-u[0],p=o[1]-u[1],d=o[0]*u[1]-o[1]*u[0];h!==0?(a=p/h,b=d/h):a=0,a==0?aProst=0:aProst=-1/a,bProst=f[1]-aProst*f[0];var v=1+Math.pow(aProst,2),m=2*aProst*bProst-2*f[0]-2*f[1]*aProst,g=-2*f[1]*bProst+Math.pow(f[0],2)+Math.pow(f[1],2)-Math.pow(e,2)+Math.pow(bProst,2),y=Math.pow(m,2)-4*v*g;if(y<0)return;var w=(-m+Math.sqrt(y))/(2*v),E=(-m-Math.sqrt(y))/(2*v),S=aProst*w+bProst,x=aProst*E+bProst;if(o[1]==u[1]){var T=o[0]>u[0]?1:-1;w=u[0]+T*l,E=w,S-=e,x+=e}this.moveTo(u[0]+6,u[1]+6),this.lineTo(w+6,S+6),this.moveTo(u[0]+6,u[1]+6),this.lineTo(E+6,x+6),this.end()}}),e.BidirectionalArrowWire.ATTRS=e.merge(e.WireBase.ATTRS,{})},"@VERSION@",{requires:["wire-base"]});
