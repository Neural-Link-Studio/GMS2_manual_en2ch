rh._.exports({"0":["alarm_get"],"1":["alarm_get"],"2":["alarm_get"],"3":["\n  ","\n  ","\n  ","This function can be used to get the current value of the given alarm. You supply the alarm number from 0 to 11 and this function will return the value that the alarm is currently on. This is an alternative method to getting the ","alarm array"," value\n    directly.","\n  "," ","\n  ","\n  ","alarm_get(index);","\n  ","\n    ","\n      ","\n        ","Argument","\n        ","Description","\n      ","\n      ","\n        ","index","\n        ","The alarm index to get, from 0 to 11.","\n      ","\n    ","\n  ","\n  "," ","\n  ","\n  ","Real (integer)","\n  "," ","\n  ","\n  ","for (var i = 0; i < 12; i++)","    {\n    ","    if alarm_get(i) > 0 alarm_set(i, -1);","    }\n  ","\n  ","The above code checks all the alarms in the calling instance and if they are greater than 0 it sets them to -1, stopping them from counting down any further.","\n  "," ","\n  "," ","\n  "," ","\n  ","\n    ","\n      ","\n        ","Back: ","Instances","\n        ","Next: ","alarm_set","\n      ","\n    ","\n    ","\n  ","\n  ","\n  ","\n\n"],"4":["alarm_get"],"5":["© Copyright YoYo Games Ltd. 2020 All Rights Reserved"],"7":["Syntax:","Returns:","Example:"],"id":"976"})