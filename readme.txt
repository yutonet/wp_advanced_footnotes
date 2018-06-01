=== Advanced Footnotes ===
Contributors: yutonet
Tags: footnotes, references, articles, academic
Tested up to: 4.9.4
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Advanced Footnotes lets you add footnotes on articles via shortcodes.

== Description ==
Advanced Footnotes lets you add footnotes on articles via shortcodes. Advanced Footnotes is is extremely customizable, therefore it can be implemented on any theme.

With its internal functions, you can also implement Advanced Footnotes on your own theme in any form you like.

#Main Features:#
* Implemented WYSIWYG editor button.
* Footnotes  can be implemented with shortcode or function.
* Animated scroll effect (can be disabled)
* Lightweight CSS (can be disabled)
* Custom CSS styling
* Dynamically changeable interface options (JS can be fully disabled)

#Usage#

##Inserting a Footnote##
In order to insert a footnote, you can either use the "Insert Footnote" button added on your WYSIWYG editor, or use the [footnote]your-footnote-here[/footnote] shortcode.

##Listing Footnotes##
You can display the footnotes in two methods:

###Shortcode:###
By simply inserting the **[footnotes]** shortcode in your post content, you can display footnotes wherever you want in your posts.

**__Shortcode Parameters__**

__"title":__ Determines the title for the footnotes list. Default value can be set through plugin settings.

**__Shortcode Usage:__**

```
[footnotes title="My Custom Footnotes Title"]
// or
[footnotes title="False"]
```

###Theme Inclusion:###

You can print the footnotes by calling print_refs function from the advanced_footnotes class.

__Simple Function Usage:__

```
call_user_func(array('advanced_footnotes', 'print_refs'));
```

**__Additional Parameters:__**

First parameter: "Print", whether print or return the footnotes content. (Default: "true")
Second parameter: "Title", determines the title for the footnotes content. (Default: "false")

__Function Usage with Parameters:__

```
$footnotes = call_user_func_array(array('advanced_footnotes', 'print_refs'), array(false, 'Custom Footnotes Title'));
```

###Plugin Options:###

You can access the plugin options through "Options/Advanced Footnotes".

- Include Plugin CSS: Determines whether to include the default plugin css files. Disable this if you want to re-style the plugin within your theme.
- Custom CSS: Provides a field for custom CSS styling.
- Include Plugin JS: Determines whether to include the plugin javascript files on the theme output. Disable this if you want to customize plugin interactions or just to use native HTML anchors.
- Default Title for Footnotes: Sets the default title used on the "[footnotes]" shortcode.
- Disable JS Options: Determines whether to apply options to the plugin JS files or not.
- Footnotes Scroll Gap: This sets the scroll margin when clicked on a footnote. Set this when you have a fixed header or any other element blocking some part of the window area.
- Footnote Scroll Speed: Sets the animation speed when a footnote is clicked. Set 0 for no animation.


**__HTML Structure &amp; Classes__**

== Installation ==
Install and activate Advanced Footnotes like any other plugin.

== Frequently Asked Questions ==
- Can I implement Advanced Footnotes on my theme?
Yes you can. You can either get the footnotes as an object array, or simply print it with the Advanced Footnotes\' functions.

- Can I use it without editing my theme files?
Yes, you can simply use [footnote]*your note here*[/footnote] shortcode for each footnote you want to place, and [footnotes] shortcode to use put the footnotes wherever you want them to be.

== Changelog ==
- **0.1** - Initial Release
	- **0.11**
		- Documentation
		- Title display bug fixed.