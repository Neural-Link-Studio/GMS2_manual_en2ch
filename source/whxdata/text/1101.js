rh._.exports({"0":["layer_background_yscale"],"1":["layer_background_yscale"],"2":["layer_background_yscale"],"3":["\n  ","\n  ","\n  ","This function can be used to set the scale along the y-axis of a background element. You give the background element ID (which you get when you create a background element using ","layer_background_create()","    or when you use the function ","layer_background_get_id()","), and then set the scale value. The scale value you give is a multiplier that will be used to change the way the background element is displayed,\n    where a value of 0.5 would display the element at half scale, and a value of 2 would display at double scale. Note that negative values are valid, and will \"flip\" the element around the (0,0) position, so an x scale of -1 would show the\n    image reversed.","\n  "," ","\n  ","\n  ","layer_background_yscale(background_element_id, yscale);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","background_element_id","\n        ","The unique ID value of the background element to change","\n      ","\n      ","\n        ","speed","\n        ","The speed multiplier/value to use for the element","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","var lay_id = layer_get_id(\"Background_water\");"," var back_id = layer_background_get_id(lay_id);"," layer_background_yscale(back_id, -1);","\n  ","The above code will get the layer ID for the layer named \"Background_water\" and then use that to get the ID of the background element on that layer. This ID is then used to change the element yscale.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Background Layers","\n        ","Next: ","layer_background_get_visible","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["layer_background_yscale"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1101"})