﻿/*!@license
* Infragistics.Web.ClientUI RadialMenu 15.1.20151.1005
*
* Copyright (c) 2013-2015 Infragistics Inc.
*
* http://www.infragistics.com/
*
* Depends on:
*     jquery-1.8.3.js
*     jquery.ui.core.js
*     jquery.ui.widget.js
*     infragistics.util.js
*     infragistics.dv.simple.core.js
*     infragistics.radialmenu_core.js
*/
if(typeof jQuery==="undefined"){throw new Error("jQuery is undefined")}(function($){$.widget("ui.igRadialMenu",{css:{unsupportedBrowserClass:"ui-html5-non-html5-supported-message ui-helper-clearfix ui-html5-non-html5",radialMenu:"ui-radialmenu",tooltip:"ui-radialmenu-tooltip ui-corner-all"},events:{closed:null,opened:null},options:{items:[{type:"button",name:null,recentItemName:null,value:NaN,pendingValue:NaN,autoRotateChildren:true,checkedHighlightBrush:null,foreground:null,highlightBrush:null,innerAreaFill:null,innerAreaHotTrackFill:null,innerAreaHotTrackStroke:null,innerAreaStroke:null,innerAreaStrokeThickness:1,isEnabled:true,isToolTipEnabled:true,outerRingButtonHotTrackFill:null,outerRingButtonHotTrackForeground:null,outerRingButtonHotTrackStroke:null,outerRingButtonFill:null,outerRingButtonForeground:null,outerRingButtonStroke:null,outerRingButtonStrokeThickness:1,toolTip:null,wedgeIndex:-1,wedgeSpan:1,autoUpdateRecentItem:null,childItemPlacement:"asChildren",checkBehavior:"none",isChecked:false,groupName:null,header:null,iconUri:null,color:null,pendingValueNeedleBrush:null,reserveFirstSlice:false,smallIncrement:1,tickBrush:null,ticks:null,trackStartColor:null,trackEndColor:null,valueNeedleBrush:null,closed:null,opened:null,checked:null,click:null,unchecked:null,colorChanged:null,colorWellClick:null,valueChanged:null,pendingValueChanged:null}],currentOpenMenuItemName:null,centerButtonContentWidth:28,centerButtonContentHeight:28,centerButtonClosedFill:null,centerButtonClosedStroke:null,centerButtonFill:null,centerButtonHotTrackFill:null,centerButtonHotTrackStroke:null,centerButtonStroke:null,centerButtonStrokeThickness:0,font:null,isOpen:false,menuBackground:null,menuItemOpenCloseAnimationDuration:250,menuItemOpenCloseAnimationEasingFunction:null,menuOpenCloseAnimationDuration:250,menuOpenCloseAnimationEasingFunction:null,minWedgeCount:8,outerRingFill:null,outerRingThickness:26,outerRingStroke:null,outerRingStrokeThickness:0,rotationInDegrees:-90,rotationAsPercentageOfWedge:-.5,wedgePaddingInDegrees:0},_setOption:function(key,value,checkPrev){var radialMenu=this._radialMenu,o=this.options;if(checkPrev&&o[key]===value){return}$.Widget.prototype._setOption.apply(this,arguments);if(this._set_option(radialMenu,key,value)){return this}return this},_set_generated_option:function(radialMenu,key,value){switch(key){case"font":radialMenu.font(value);return true}},_set_option:function(radialMenu,key,value){var self=this;var currentKey;switch(key){case"width":this._setSize(radialMenu,"width",value);return true;case"height":this._setSize(radialMenu,"height",value);return true;case"items":radialMenu.items().clear();this._itemKeys={};$.each(value,function(i,val){self._addItem(radialMenu,val)});if(this.options.hasOwnProperty("currentOpenMenuItemName")){this._set_option(radialMenu,"currentOpenMenuItemName",this.options.currentOpenMenuItemName)}return true;case"currentOpenMenuItemName":if(radialMenu.items().count()>0){if(value&&this._itemKeys.hasOwnProperty(value)){radialMenu.currentOpenMenuItem(this._itemKeys[value])}else{radialMenu.currentOpenMenuItem(null)}}return true;case"menuItemOpenCloseAnimationEasingFunction":case"menuOpenCloseAnimationEasingFunction":value=$.ig.util.getEasingFunction(value);radialMenu[key](value);return true;default:if(this._set_generated_option(radialMenu,key,value))return true;return this._setProperty(radialMenu,key,value,true)}},itemOption:function(itemKey,key,value){var item=this._itemKeys[itemKey];if(item===undefined)throw new Error("Specified itemKey is invalid");var dataItem=item._dataItem;if(arguments.length===1){return dataItem}if(typeof key==="string"){if(value===undefined){var value=dataItem[key];if(value===undefined)value=$.ui.igRadialMenu.prototype.options.items[0][key];return value}else{if(key=="items")throw new Error("Not supported");dataItem[key]=value;this._setItemOption(item,key,value,false);if(key=="recentItemName"){var child=this._itemKeys[key];this._setItemOption(item,"recentItem",child===undefined?null:child._dataItem)}}}else{throw new Error("Not supported")}return true},_addItem:function(parent,item){var mi;switch(item.type){case"coloritem":mi=new $.ig.RadialMenuColorItem;break;case"colorwell":mi=new $.ig.RadialMenuColorWell;break;case"numericitem":mi=new $.ig.RadialMenuNumericItem;break;case"numericgauge":mi=new $.ig.RadialMenuNumericGauge;break;case"list":case"button":default:mi=new $.ig.RadialMenuItem;break}mi._dataItem=item;mi.__setOptionCount__=0;if(item.name){this._itemKeys[item.name]=mi}for(var key in item){var value=item[key];switch(key){case"items":var count=value.length;for(var i=0;i<count;i++){this._addItem(mi,value[i])}break;default:this._setItemOption(mi,key,value);break}}if(mi.recentItemName){var child=this._itemKeys[mi.recentItemName];this._setItemOption(mi,"recentItem",child===undefined?null:child._dataItem)}parent.items().add(mi);mi.propertyChanged=$.ig.Delegate.prototype.combine(mi.propertyChanged,jQuery.proxy(this._onRadialMenuItemPropChanged,this))},_setItemOption:function(item,key,value,mustBeDp){if(!key in item)return false;switch(key){case"closed":case"opened":case"checked":case"click":case"unchecked":case"colorWellClick":var proxy=jQuery.proxy(this._onRadialMenuItemEvent,{self:this,eventName:key});if(item[key])item[key]=$.ig.Delegate.prototype.remove(item[key],proxy);if(value)item[key]=$.ig.Delegate.prototype.combine(item[key],proxy);break;case"colorChanged":case"valueChanged":case"pendingValueChanged":var proxy=jQuery.proxy(this._onRadialMenuItemValueEvent,{self:this,eventName:key});if(item[key])item[key]=$.ig.Delegate.prototype.remove(item[key],proxy);if(value)item[key]=$.ig.Delegate.prototype.combine(item[key],proxy);break;case"recentItemName":item.recentItemName=value;break;default:if(value==="{RecentItem}"){var dp=item[key+"Property"];if(dp===undefined)return false;var bExp=new $.ig.BindingExpression(item,"recentItemContainer."+key,item,dp);if(item.bindingExpressions===undefined)item.bindingExpressions={};item.bindingExpressions[key]=bExp}else if(key in item){item.__setOptionCount__++;this._setProperty(item,key,value);item.__setOptionCount__--}}return true},_setProperty:function(item,key,value,mustBeDp){if(value!==null){var dp=item[key+"Property"];if(dp!==undefined){var propType=dp.propertyType();if(value===undefined){item.clearValue(dp);return true}else if($.ig.Brush.prototype.$type.equals(propType)){value=$.ig.Brush.prototype.create(value)}else if($.ig.DataTemplate.prototype.$type.equals(propType)){var $tempTemplate=new $.ig.DataTemplate;if(value.render){$tempTemplate.render(value.render);if(value.measure){$tempTemplate.measure(value.measure)}}else{$tempTemplate.render(value)}value=$tempTemplate}else{var uType=$.ig.Nullable.prototype.getUnderlyingType(propType);if(uType!==null)propType=uType;if(typeof value==="string"&&propType!==String){if(value.length===0){return false}else if($.ig.util.canAssign($.ig.Enum.prototype.$type,propType)){value=$.ig.Enum.prototype.parse(propType,value,true).$value()}else if($.ig.Color.prototype.$type.equals(propType)){$clr=new $.ig.Color;$clr.colorString(value);value=$clr}else if($.ig.Number.prototype.$type.equals(propType)){value=parseFloat(value)}else if($.ig.Boolean.prototype.$type.equals(propType)){value=value.toLowerCase()=="true"}else if($.ig.DoubleCollection.prototype.$type.equals(propType)){value=value.split(",");for(var i=0;i<value.length;i++){value[i]=parseFloat(value[i])}}}if(uType!==null){value=$.ig.util.toNullable(uType,value)}}}else if(mustBeDp){return false}}item[key](value);return true},exportVisualData:function(){if(this._radialMenu)return this._radialMenu.exportVisualData()},_creationOptions:null,_radialMenu:null,_itemKeys:null,_itemPropertyChangeHandlers:null,_menuPropertyChangeHandlers:null,_createWidget:function(options,element,widget){this._creationOptions=options;$.Widget.prototype._createWidget.apply(this,[options,element])},_create:function(){var key,v,size,radialMenu,width,height,i=-1,self=this,elem=self.element,style=elem[0].style,o=this._creationOptions;self._old_state={style:{position:style.position,width:style.width,height:style.height,visibility:style.visibility},css:elem[0].className,elems:elem.find("*")};if(!$.ig.util._isCanvasSupported()){$.ig.util._renderUnsupportedBrowser(this);return}radialMenu=this._createMenu();self._radialMenu=radialMenu;self._itemKeys={};self._itemPropertyChangeHandlers={};self._itemPropertyChangeHandlers[$.ig.RadialMenuColorItemBase.prototype.colorProperty.name()]=function(item){item._dataItem.color=item.color().colorString()};self._itemPropertyChangeHandlers[$.ig.RadialMenuItem.prototype.isCheckedProperty.name()]=function(item){item._dataItem.isChecked=item.isChecked()};self._itemPropertyChangeHandlers[$.ig.RadialMenuNumericItem.prototype.valueProperty.name()]=self._itemPropertyChangeHandlers[$.ig.RadialMenuNumericGauge.prototype.valueProperty.name()]=function(item){var value=item.value();item._dataItem.value=value!=null&&typeof value=="object"?value.value():value};self._itemPropertyChangeHandlers[$.ig.RadialMenuNumericGauge.prototype.pendingValueProperty.name()]=function(item){var value=item.pendingValue();item._dataItem.pendingValue=value!=null&&typeof value=="object"?value.value():value};self._itemPropertyChangeHandlers[$.ig.RadialMenuItem.prototype.recentItemProperty.name()]=function(item){var recentItem=item.recentItem();item._dataItem.recentItemName=recentItem==null?null:recentItem.name};self._menuPropertyChangeHandlers={};self._menuPropertyChangeHandlers[$.ig.XamRadialMenu.prototype.isOpenProperty.name()]=function(radialMenu){this.options.isOpen=radialMenu.isOpen()};self._menuPropertyChangeHandlers[$.ig.XamRadialMenu.prototype.currentOpenMenuItemProperty.name()]=function(radialMenu){var item=radialMenu.currentOpenMenuItem();this.options.currentOpenMenuItemName=item!=null&&item.name?item.name:null};radialMenu.propertyChanged=$.ig.Delegate.prototype.combine(radialMenu.propertyChanged,jQuery.proxy(this._onRadialMenuPropChanged,this));radialMenu.closed=$.ig.Delegate.prototype.combine(radialMenu.closed,jQuery.proxy(this._fireRadialMenu_closed,this));radialMenu.opened=$.ig.Delegate.prototype.combine(radialMenu.opened,jQuery.proxy(this._fireRadialMenu_opened,this));if(o.hasOwnProperty("width"))elem[0].style.width=o["width"];if(o.hasOwnProperty("height"))elem[0].style.height=o["height"];radialMenu.provideContainer(elem[0]);for(key in o){if(o.hasOwnProperty(key)){v=o[key];if(v!==null){this._setOption(key,v,false)}}}while(i++<1){key=i===0?"width":"height";if(o[key]){size=key;v=o[key]}else{v=elem[0].style[key]}if(v&&v.indexOf("%")>0){self._setSize(radialMenu,size=key,v)}}if(!size){self._setSize(radialMenu,"width")}if(self.css&&self.css.radialMenu){elem.addClass(self.css.radialMenu)}radialMenu.onInitialized()},_createMenu:function(){return new $.ig.XamRadialMenu},_onRadialMenuItemEvent:function(item,evt){var self=this.self;var dataItem=item._dataItem;var func=dataItem[this.eventName];var opts={};opts.owner=self;opts.item=dataItem;func.call(self.element[0],opts)},_onRadialMenuItemValueEvent:function(item,evt){if(item.__setOptionCount__>0)return;var self=this.self;var dataItem=item._dataItem;var opts={};opts.owner=self;opts.item=dataItem;switch(this.eventName){case"valueChanged":case"pendingValueChanged":opts.oldValue=evt.oldValue();opts.newValue=evt.newValue();if(isNaN(opts.oldValue)&&isNaN(opts.newValue))return;break;case"colorChanged":opts.oldValue=evt.oldValue();opts.newValue=evt.newValue();if(opts.oldValue)opts.oldValue=opts.oldValue.colorString();if(opts.newValue)opts.newValue=opts.newValue.colorString();break}if(opts.newValue==opts.oldValue)return;var func=dataItem[this.eventName];func.call(self.element[0],opts)},_onRadialMenuItemPropChanged:function(item,evt){var handler=this._itemPropertyChangeHandlers[evt._propertyName];if(handler)handler.call(this,item)},_onRadialMenuPropChanged:function(radialMenu,evt){var handler=this._menuPropertyChangeHandlers[evt._propertyName];if(handler)handler.call(this,radialMenu)},_fireRadialMenu_closed:function(radialMenu,evt){var opts={};opts.owner=this;this._trigger("closed",null,opts)},_fireRadialMenu_opened:function(radialMenu,evt){var opts={};opts.owner=this;this._trigger("opened",null,opts)},_setSize:function(radialMenu,key,val){$.ig.util.setSize(this.element,key,val,radialMenu,this._getNotifyResizeName())},_getNotifyResizeName:function(){return"containerResized"},flush:function(){if(this._radialMenu&&this._radialMenu.flush)this._radialMenu.flush()},destroy:function(){var key,style,radialMenu=this._radialMenu,old=this._old_state,elem=this.element;if(!old){return}elem.find("*").not(old.elems).remove();if(this.css.radialMenu){elem.removeClass(this.css.radialMenu)}old=old.style;style=elem[0].style;for(key in old){if(old.hasOwnProperty(key)){if(style[key]!==old[key]){style[key]=old[key]}}}if(radialMenu){this._setSize(radialMenu)}$.Widget.prototype.destroy.apply(this,arguments);if(radialMenu&&radialMenu.destroy){radialMenu.destroy()}delete this._radialMenu;delete this._old_state},styleUpdated:function(){if(this._radialMenu){this._radialMenu.styleUpdated()}}});$.extend($.ui.igRadialMenu,{version:"15.1.20151.1005"})})(jQuery);