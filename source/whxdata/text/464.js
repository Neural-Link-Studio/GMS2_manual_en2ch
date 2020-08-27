rh._.exports({"0":["Destroy Particle Emitter"],"1":["DnD™ Action - Destroy Particle Emitter"],"2":["Destroy Particle Emitter"],"3":["\n  ","\n  ","\n  ","This action will \"destroy\" the given particle emitter, ie: free up the memory used by the particle emitter. You supply the particle system ID that the emitter belongs to (as returned by the action ","Create Particle System",")\n    and then the actual emitter ID (as returned by the action ","Create Particle Emitter","). This action should be called whenever you no longer need a particle emitter in your game, or whenever you wish to re-create\n    the particle emitter (for example, just before calling a ","Game Restart","). Note that if the particle system the emitter has been assigned to has ","not"," been flagged as ","Persistent"," then you do ","not need to call this action",",\n    as the emitter will be automatically cleaned up on room end along with the particle system.","\n  "," ","\n  ","\n  ","\n  ","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","System","\n        ","The ID value of the system that contains the emitter","\n      ","\n      ","\n        ","Emitter","\n        ","The ID value of the emitter to destroy","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","The above action block code will check an instance variable and\n    if it is over 100 it will destroy the emitter assigned to the instance and then go to the next room.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Particle Actions","\n        ","Next: ","Emit Particles","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":[" Destroy Particle Emitter"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Action Syntax:","Arguments:","Example:"],"id":"464"})