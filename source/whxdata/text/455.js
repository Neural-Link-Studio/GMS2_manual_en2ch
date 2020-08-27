rh._.exports({"0":["Set Particle Alpha"],"1":["DnD™ Action - Set Particle Alpha"],"2":["Set Particle Alpha"],"3":["\n  ","\n  ","\n  ","This action will set the alpha for when you create the particle as well as the alpha over its lifetime. You first specify the particle type ID value (which should be the same as the value returned when you created the particle using the ","Create Particle Type","    action) and then you can set the alpha values to use.","\n  ","You can pick three alphas to use, and the particle will blend between them over the lifetime of the particle. For example, if a particle has 0.5, 1 and 0 as the alpha values, and a lifetime of 60 game frames, then when it is created (frame 0) it will\n    at 0.5 alpha, then it will fade towards a full alpha of 1 (frame 30), before fading on to be invisible with an alpha of 0 (frame 60).","\n  "," ","\n  ","\n  ","\n  ","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","Type ID","\n        ","The unique ID value for the particle type to set the colour of","\n      ","\n      ","\n        ","Start","\n        ","The initial alpha to use","\n      ","\n      ","\n        ","Middle","\n        ","The in between alpha to use","\n      ","\n      ","\n        ","End","\n        ","The final alpha to use","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","The above action block code will create a new particle type and assign its unique\n    ID value to a global variable. It then proceeds to set all the properties for the particle type.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Particle Actions","\n        ","Next: ","Set Particle Life","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":[" Set Particle Alpha"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Action Syntax:","Arguments:","Example:"],"id":"455"})