rh._.exports({"0":["draw_sprite_tiled"],"1":["draw_sprite_tiled"],"2":["draw_sprite_tiled"],"3":["\n  ","\n  ","\n  ","This function will take a sprite and then repeatedly tile it across the whole view (or room if no view is defined), starting from the coordinates that you give in the function. Tiling is based on the width and height of the sprite as defined by the\n    ","sprite variables"," of the instance running the code. This function is for 2D projects only, and will not work correctly when a 3D camera projection\n    is used.","\n  "," ","\n  ","\n  ","draw_sprite_tiled(sprite, subimg, x, y);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","sprite","\n        ","The index of the sprite to draw.","\n      ","\n      ","\n        ","subimg","\n        ","The subimg (frame) of the sprite to draw (image_index or -1 correlate to the current frame of animation in the object).","\n      ","\n      ","\n        ","x","\n        ","The x coordinate of where to draw the sprite.","\n      ","\n      ","\n        ","y","\n        ","The y coordinate of where to draw the sprite.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","draw_sprite_tiled(sprite_index, image_index, x, y);","\n  ","This will draw the instances assigned sprite (sprite_index) and its current frame of animation (image_index) at the instances own x and y position, and tiled horizontally and vertically across the view.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Sprites And Tiles","\n        ","Next: ","draw_sprite_tiled_ext","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["draw_sprite_tiled"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1357"})