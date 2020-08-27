rh._.exports({"0":["keyboard_check_direct"],"1":["keyboard_check_direct"],"2":["keyboard_check_direct"],"3":["\n\n\n\n  ","\n  ","\n  ","This function will return ","true"," if the key with the particular keycode is pressed, or ","false"," if it is not, by checking the hardware directly. It allows for a few more checks, in particular you can use keycodes ","vk_lshift",", ","vk_lcontrol",",\n    ","vk_lalt",", ","vk_rshift",", ","vk_rcontrol"," and ","vk_ralt"," to check whether the left or right shift, control or alt key is pressed. The function will take a keycode value as returned by the function ","ord()","    (only ","capital"," letters from A-Z or numbers from 0-9), or any of the ","vk_*"," constants listed on the main ","Keyboard Input"," page.","\n  ","NOTE: ","This function is only available for the standard Windows target and the result is independent of which application has focus.","\n  "," ","\n  ","\n  ","keyboard_check_direct(key);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","key","\n        ","The key to check the down state of.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Boolean","\n  "," ","\n  ","\n  ","if keyboard_check_direct(vk_ralt) || keyboard_check_direct(vk_lalt)","    {\n    ","    crouch = true;","    }\n  ","\n  ","The above code will check to see if either the left or right alt keys have been pressed, and if they have it sets the variable \"crouch\" to true.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Keyboard Input","\n        ","Next: ","keyboard_clear","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["keyboard_check_direct"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"1661"})