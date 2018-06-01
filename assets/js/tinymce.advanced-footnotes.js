(function() {
	tinymce.create("tinymce.plugins.advanced_footnotes", {

		//url argument holds the absolute url of our plugin directory
		init : function(ed, url) {

			//add new button     
			ed.addButton("footnote", {
				title : "Insert Footnote",
				cmd : "footnote_command",
				icon : 'bubble',
			});

			//button functionality.
			ed.addCommand("footnote_command", function() {
				var selected_text = ed.selection.getContent();
				if(selected_text == false || selected_text == ""){
					ed.windowManager.open({
						title: 'Insert Footnote',
						body: [
							{
								type: 'textbox',
								name: 'content',
								label: 'Footnote',
								value: "",
								multiline: true,
								minWidth: 300,
                minHeight: 100,
							},
						],
						onsubmit: function( e ) {
							var return_text = "[footnote]"+e.data.content+"[/footnote]";
							ed.execCommand("mceInsertContent", false, return_text);
						}
					});
				}
				else{
					var return_text = "[footnote]" + selected_text + "[/footnote]";
					ed.execCommand("mceInsertContent", false, return_text);
				}
			});

		},

		createControl : function(n, cm) {
			return null;
		},

		getInfo : function() {
			return {
				longname : "Footnote Inserter",
				author : "Yunus Tabakoğlu",
				version : "1"
			};
		}
	});

	tinymce.PluginManager.add("advanced_footnotes", tinymce.plugins.advanced_footnotes);
})();