!function(t){var e={response:null,getEndpointURL:function(e){var s,a="undefined"!=typeof wp&&wp.customize&&wp.customize.settings&&wp.customize.settings.url&&wp.customize.settings.url.self;a?(s=document.createElement("a")).href=wp.customize.settings.url.self:s=document.location,"string"==typeof e&&e.match(/^https?:\/\//)&&((s=document.createElement("a")).href=e);var o="relatedposts=1";t("#jp-relatedposts").data("exclude")&&(o+="&relatedposts_exclude="+t("#jp-relatedposts").data("exclude")),a&&(o+="&jetpackrpcustomize=1");var p=s.pathname;return"/"!==p[0]&&(p="/"+p),""===s.search?p+"?"+o:p+s.search+"&"+o},getAnchor:function(e,s){var a=e.title,o=t("<a>");o.attr({class:s,href:e.url,title:a,"data-origin":e.url_meta.origin,"data-position":e.url_meta.position}),""!==e.rel&&o.attr({rel:e.rel});var p=t("<div>").append(o).html();return[p.substring(0,p.length-4),"</a>"]},generateMinimalHtml:function(e,s){var a=this,o="";return t.each(e,function(t,e){var p=a.getAnchor(e,"jp-relatedposts-post-a"),r="jp-relatedposts-post jp-relatedposts-post"+t;e.classes.length>0&&(r+=" "+e.classes.join(" ")),o+='<p class="'+r+'" data-post-id="'+e.id+'" data-post-format="'+e.format+'">',o+='<span class="jp-relatedposts-post-title">'+p[0]+e.title+p[1]+"</span>",s.showDate&&(o+='<span class="jp-relatedposts-post-date">'+e.date+"</span>"),s.showContext&&(o+='<span class="jp-relatedposts-post-context">'+e.context+"</span>"),o+="</p>"}),'<div class="jp-relatedposts-items jp-relatedposts-items-minimal jp-relatedposts-'+s.layout+' ">'+o+"</div>"},generateVisualHtml:function(e,s){var a=this,o="";return t.each(e,function(e,p){var r=a.getAnchor(p,"jp-relatedposts-post-a"),i="jp-relatedposts-post jp-relatedposts-post"+e;if(p.classes.length>0&&(i+=" "+p.classes.join(" ")),p.img.src?i+=" jp-relatedposts-post-thumbs":i+=" jp-relatedposts-post-nothumbs",o+='<div class="'+i+'" data-post-id="'+p.id+'" data-post-format="'+p.format+'">',p.img.src)o+=r[0]+'<img class="jp-relatedposts-post-img" src="'+p.img.src+'" width="'+p.img.width+'" alt="'+p.img.alt_text+'" />'+r[1];else{var n=a.getAnchor(p,"jp-relatedposts-post-a jp-relatedposts-post-aoverlay");o+=n[0]+n[1]}o+="<"+related_posts_js_options.post_heading+' class="jp-relatedposts-post-title">'+r[0]+p.title+r[1]+"</"+related_posts_js_options.post_heading+">",o+='<p class="jp-relatedposts-post-excerpt">'+t("<p>").text(p.excerpt).html()+"</p>",s.showDate&&(o+='<p class="jp-relatedposts-post-date">'+p.date+"</p>"),s.showContext&&(o+='<p class="jp-relatedposts-post-context">'+p.context+"</p>"),o+="</div>"}),'<div class="jp-relatedposts-items jp-relatedposts-items-visual jp-relatedposts-'+s.layout+' ">'+o+"</div>"},setVisualExcerptHeights:function(){var e=t("#jp-relatedposts .jp-relatedposts-post-nothumbs .jp-relatedposts-post-excerpt");if(!(0>=e.length)){var s=parseInt(e.first().css("font-size"),10),a=parseInt(e.first().css("line-height"),10);e.css("max-height",5*a/s+"em")}},getTrackedUrl:function(e){var s="relatedposts_hit=1";s+="&relatedposts_origin="+t(e).data("origin"),s+="&relatedposts_position="+t(e).data("position");var a=e.pathname;return"/"!==a[0]&&(a="/"+a),""===e.search?a+"?"+s:a+e.search+"&"+s},cleanupTrackedUrl:function(){if("function"==typeof history.replaceState){var t=document.location.search.replace(/\brelatedposts_[a-z]+=[0-9]*&?\b/gi,"");"?"===t&&(t=""),document.location.search!==t&&history.replaceState({},document.title,document.location.pathname+t)}}};function s(){e.setVisualExcerptHeights(),t("#jp-relatedposts a.jp-relatedposts-post-a").click(function(){this.href=e.getTrackedUrl(this)})}function a(){e.cleanupTrackedUrl();var a=e.getEndpointURL(),o=t("#jp-relatedposts");t("#jp-relatedposts .jp-relatedposts-post").length?s():t.getJSON(a,function(t){if(0!==t.items.length&&0!==o.length){e.response=t;var a,p,r={};"undefined"!=typeof wp&&wp.customize?(p=wp.customize.instance("jetpack_relatedposts[show_thumbnails]").get(),r.showDate=wp.customize.instance("jetpack_relatedposts[show_date]").get(),r.showContext=wp.customize.instance("jetpack_relatedposts[show_context]").get(),r.layout=wp.customize.instance("jetpack_relatedposts[layout]").get()):(p=t.show_thumbnails,r.showDate=t.show_date,r.showContext=t.show_context,r.layout=t.layout),a=p?e.generateVisualHtml(t.items,r):e.generateMinimalHtml(t.items,r),o.append(a),r.showDate&&o.find(".jp-relatedposts-post-date").show(),o.show(),s()}})}t(function(){"undefined"!=typeof wp&&wp.customize?(wp.customize.selectiveRefresh&&wp.customize.selectiveRefresh.bind("partial-content-rendered",function(t){"jetpack_relatedposts"===t.partial.id&&a()}),wp.customize.bind("preview-ready",a)):a()})}(jQuery);