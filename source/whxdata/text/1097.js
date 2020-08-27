rh._.exports({"0":["layer_background_index"],"1":["layer_background_index"],"2":["layer_background_index"],"3":["\n  ","\n  ","\n  ","This function can be used to set the image index of the background sprite which has multiple sub-images. You give the background element ID (which you get when you create a background element using ","layer_background_create()","    or when you use the function ","layer_background_get_id()","), and then set the image index to use. If you set a value outside of the range of sub-images, then the image index will loop around.","\n  "," ","\n  ","\n  ","layer_background_index(background_element_id, image_index);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","background_element_id","\n        ","The unique ID value of the background element to change","\n      ","\n      ","\n        ","index","\n        ","The image index to use for the background","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","var lay_id = layer_get_id(\"Background_trees\");"," var back_id = layer_background_get_id(lay_id);"," layer_background_index(back_id, 1);","\n  ","The above code will get the layer ID for the layer named \"Background_trees\" and then use that to get the ID of the background element on that layer. This ID is then used to change the element image index.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Background Layers","\n        ","Next: ","layer_background_speed","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["layer_background_index"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1097"})