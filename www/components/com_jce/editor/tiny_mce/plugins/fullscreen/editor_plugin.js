/* jce - 2.6.19 | 2017-08-10 | http://www.joomlacontenteditor.net | Copyright (C) 2006 - 2017 Ryan Demmer. All rights reserved | GNU/GPL Version 2 or later - http://www.gnu.org/licenses/gpl-2.0.html */
!function(){var DOM=tinymce.DOM,Event=tinymce.dom.Event;tinymce.create("tinymce.plugins.FullScreenPlugin",{init:function(ed,url){function getInterfaceHeight(){var h=0,ca=ed.getContentAreaContainer(),p=ca.parentNode;return tinymce.each(p.childNodes,function(n){n!==ca&&(h+=n.offsetHeight)}),h}var width,height,bookmark,resize,overflow,de=DOM.doc.documentElement;ed.onFullScreen=new tinymce.util.Dispatcher,ed.onFullScreenResize=new tinymce.util.Dispatcher;var element=ed.getElement(),container=element.parentNode;ed.addCommand("mceFullScreen",function(){var iframe=DOM.get(ed.id+"_ifr"),s=ed.settings;try{bookmark=ed.selection.getBookmark()}catch(e){}var vp=DOM.getViewPort(),header=DOM.getPrev(element,".wf-editor-header");if(ed.getParam("fullscreen_enabled"))DOM.removeClass(container,"mce-fullscreen"),DOM.setStyle(container,"max-width",width+"px"),DOM.setStyle(iframe,"height",height),de.style.overflow=overflow,bookmark&&ed.selection.moveToBookmark(bookmark),DOM.setStyle(element,"height",height),s.fullscreen_enabled=!1,resize&&Event.remove(DOM.win,"resize",resize);else{width=container.clientWidth,height=parseInt(iframe.style.height),overflow=de.style.overflow,DOM.setStyle(container,"max-width","100%"),DOM.setStyle(iframe,"max-width","100%"),DOM.win.scrollTo(0,0);var ih=ed.settings.interface_height||getInterfaceHeight();ed.isHidden()||(ed.settings.container_height=ed.getContainer().offsetHeight,sessionStorage.setItem("wf-editor-container-height",ed.settings.container_height)),DOM.addClass(container,"mce-fullscreen"),window.setTimeout(function(){DOM.setStyle(iframe,"height",vp.h-ih-header.offsetHeight),DOM.setStyle(element,"height",vp.h-header.offsetHeight-10),DOM.setStyle(element,"width","100%")},0),bookmark&&ed.selection.moveToBookmark(bookmark),resize=Event.add(DOM.win,"resize",function(){vp=DOM.getViewPort(),DOM.setStyles(iframe,{height:vp.h-ih,"max-width":vp.w+"px"}),ed.onFullScreenResize.dispatch(ed,vp)}),de.style.overflow="hidden",vp.h<640&&(de.style.overflow="scroll"),s.fullscreen_enabled=!0}ed.onFullScreen.dispatch(ed,s.fullscreen_enabled)}),ed.addButton("fullscreen",{title:"fullscreen.desc",cmd:"mceFullScreen"}),ed.onNodeChange.add(function(ed,cm){cm.setActive("fullscreen",ed.getParam("fullscreen_enabled"))})}}),tinymce.PluginManager.add("fullscreen",tinymce.plugins.FullScreenPlugin)}();