rh._.exports({"0":["achievement_show_achievements"],"1":["achievement_show_achievements"],"2":["achievement_show_achievements"],"3":["\n  ","\n  ","\n  ","This function will open the achievements page for the chosen platform. Please note that this is an ","asynchronous function",", ie: your game will continue to run in the background while the achievements page is being shown. As such, you should be\n    careful where you use this and make sure to pause the game or only permit it to be shown in areas of your game where it will not interfere with the game-play.","\n  "," ","\n  ","\n  ","achievement_show_achievements()","\n  "," ","\n  ","\n  ","N/A","\n  "," ","\n  ","\n  ","if achievement_available()","     {\n    ","     global.Pause = true;","     instance_create_layer(0, 0, \"Controllers\", obj_Pause);","     achievement_show_achievements();\n    ","     }\n  ","\n  ","The above code checks to see if the chosen leaderboard and achievement service is available and if so it sets a global variable and creates a controller \"pause\" instance before calling the function to show the achievements on screen.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Achievements And Leaderboards","\n        ","Next: ","achievement_show_leaderboards","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["achievement_show_achievements"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"2230"})