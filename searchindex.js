Object.assign(window.search, {"doc_urls":["00_preface.html#preface","01_game_spec.html#game-specification","01_game_spec/01_time.html#time","01_game_spec/01_time.html#cycle-part-of-the-day"],"index":{"documentStore":{"docInfo":{"0":{"body":8,"breadcrumbs":2,"title":1},"1":{"body":63,"breadcrumbs":4,"title":2},"2":{"body":153,"breadcrumbs":4,"title":1},"3":{"body":11,"breadcrumbs":6,"title":3}},"docs":{"0":{"body":"This document compiles ideas and design notes regarding the Thedes game.","breadcrumbs":"Preface » Preface","id":"0","title":"Preface"},"1":{"body":"Thedes is a survival game, procedurally generated, blending fantasy and politics of prehistoric/ancient societies. In this game, there are a few important entities: world thedes (peoples) mennishes (human beings), which can be: a player thede subjects free mennishes, e.g. traders or bandits peaceful creatures fiends time no-return doors (portals to another world with no way back) combat items sorcery items blocks biomes The player is a very special mennish, it is blessed with freedom, but cursed with destruction by the gods. When a player enters a world, the world becomes doomed and will be destroyed in 239 days.","breadcrumbs":"Game Spec » Game Specification","id":"1","title":"Game Specification"},"2":{"body":"Time flows tick-by-tick in Thedes. It can be understood by views: Linear time of the day Part of the day Day within the current season Season Day within the current year Year Days since the player entered the world Lunar phase Month After the player enters in a world, such world will end in 270 days and the player will die with it, unless the player jumps into a no-return door. If the door is crossed, the player enters in a new world reseting the counter, being able to bring only the items in the player's inventory. There are eight lunar phases: New (first phase) Waxing crescent First quarter Waxing gibbous Full Waning gibbous Last quarter Waning crescent Each lunar phase lasts only one day. A month starts at the day whose lunar phase is \"new\", and ends at the day whose lunar phase is \"waxing crescent\"; thus, a month lasts 8 days. Also, there are four seasons: Ware (14 days, first season) Summer (13 days) Harvest (14 days) Winter (13 days) And there are four parts of the day: Sunrise (first part) Daylight Sunset Night Intra-day, there is a linear time progression, but shifts from one part of the day to another is not linear. Each part of the day might last a different total time. In fact, the duration of each part of the day is not constant, it depends on the day of the year.","breadcrumbs":"Game Spec » Time » Time","id":"2","title":"Time"},"3":{"body":"stateDiagram-v2 [*] --> Sunrise Sunrise --> Daylight Daylight --> Sunset Sunset --> Night Night --> Sunrise","breadcrumbs":"Game Spec » Time » Cycle: Part of the Day","id":"3","title":"Cycle: Part of the Day"}},"length":4,"save":true},"fields":["title","body","breadcrumbs"],"index":{"body":{"root":{"1":{"3":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}},"4":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"2":{"3":{"9":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}},"7":{"0":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"8":{"df":1,"docs":{"2":{"tf":1.0}}},"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":2,"docs":{"1":{"tf":1.0},"2":{"tf":1.0}}}}}}},"b":{"a":{"c":{"df":0,"docs":{},"k":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":1,"docs":{"1":{"tf":1.0}}}}},"df":2,"docs":{"1":{"tf":1.0},"2":{"tf":1.0}}},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":1,"docs":{"1":{"tf":1.0}}}}},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"1":{"tf":1.0}}}}},"o":{"c":{"df":0,"docs":{},"k":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}}},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":1,"docs":{"2":{"tf":1.0}}}}}}},"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"b":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{},"p":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}},"df":0,"docs":{}}}},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}},"r":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"df":0,"docs":{},"s":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.7320508075688772}}}}}},"df":0,"docs":{}}},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}}}},"s":{"df":1,"docs":{"1":{"tf":1.0}}}}},"y":{"c":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}}},"d":{"a":{"df":0,"docs":{},"y":{"df":3,"docs":{"1":{"tf":1.0},"2":{"tf":4.47213595499958},"3":{"tf":1.0}},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"h":{"df":0,"docs":{},"t":{"df":2,"docs":{"2":{"tf":1.0},"3":{"tf":1.4142135623730951}}}}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}}}},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"y":{"df":1,"docs":{"1":{"tf":1.0}}}},"u":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}}}}}},"i":{"df":0,"docs":{},"e":{"df":1,"docs":{"2":{"tf":1.0}}},"f":{"df":0,"docs":{},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"2":{"tf":1.0}}}}}}},"o":{"c":{"df":0,"docs":{},"u":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":1,"docs":{"1":{"tf":1.0}}},"r":{"df":2,"docs":{"1":{"tf":1.0},"2":{"tf":1.4142135623730951}}}}},"u":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}}}},"df":0,"docs":{},"e":{".":{"df":0,"docs":{},"g":{"df":1,"docs":{"1":{"tf":1.0}}}},"a":{"c":{"df":0,"docs":{},"h":{"df":1,"docs":{"2":{"tf":1.7320508075688772}}}},"df":0,"docs":{}},"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"h":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"n":{"d":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}},"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":2,"docs":{"1":{"tf":1.0},"2":{"tf":1.7320508075688772}}}},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}},"f":{"a":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":1,"docs":{"1":{"tf":1.0}}}}},"df":0,"docs":{}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"w":{"df":1,"docs":{"1":{"tf":1.0}}}},"i":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}}},"r":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":2.0}}}}}},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"2":{"tf":1.0}}}}},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"d":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":1,"docs":{"1":{"tf":1.0}}}}},"df":1,"docs":{"1":{"tf":1.0}}}}},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"g":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":2,"docs":{"0":{"tf":1.0},"1":{"tf":1.7320508075688772}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"i":{"b":{"b":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"o":{"d":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}}},"h":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}},"df":0,"docs":{},"u":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}}}},"i":{"d":{"df":0,"docs":{},"e":{"a":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}}}},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"a":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}}}},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":2,"docs":{"1":{"tf":1.4142135623730951},"2":{"tf":1.0}}}}}},"j":{"df":0,"docs":{},"u":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"l":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":2.0}}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"r":{"df":1,"docs":{"2":{"tf":1.7320508075688772}}}},"df":0,"docs":{}}}},"u":{"df":0,"docs":{},"n":{"a":{"df":0,"docs":{},"r":{"df":1,"docs":{"2":{"tf":2.23606797749979}}}},"df":0,"docs":{}}}},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"n":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"h":{"df":1,"docs":{"1":{"tf":1.7320508075688772}}}}}}}},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":1,"docs":{"2":{"tf":1.7320508075688772}}}}}}},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"w":{"df":1,"docs":{"2":{"tf":1.7320508075688772}}}},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"h":{"df":0,"docs":{},"t":{"df":2,"docs":{"2":{"tf":1.0},"3":{"tf":1.4142135623730951}}}}}},"o":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}},"p":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":2,"docs":{"2":{"tf":2.449489742783178},"3":{"tf":1.0}}}}},"df":0,"docs":{},"e":{"a":{"c":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"h":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":1,"docs":{"2":{"tf":2.449489742783178}}}}},"df":0,"docs":{}},"l":{"a":{"df":0,"docs":{},"y":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"'":{"df":1,"docs":{"2":{"tf":1.0}}},"df":2,"docs":{"1":{"tf":1.7320508075688772},"2":{"tf":2.23606797749979}}}}}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}},"r":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"a":{"c":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"c":{"/":{"a":{"df":0,"docs":{},"n":{"c":{"df":0,"docs":{},"i":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}}},"o":{"c":{"df":0,"docs":{},"e":{"d":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.0}}}}},"df":0,"docs":{}}},"df":0,"docs":{},"g":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}}}},"q":{"df":0,"docs":{},"u":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}}}}},"df":0,"docs":{}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"g":{"a":{"df":0,"docs":{},"r":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"df":2,"docs":{"1":{"tf":1.0},"2":{"tf":1.0}}}}}}}},"s":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"2":{"tf":2.0}}}}}},"df":0,"docs":{}},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"f":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"o":{"c":{"df":0,"docs":{},"i":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":1,"docs":{"1":{"tf":1.0}}}}}}},"df":0,"docs":{},"r":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"df":0,"docs":{}}},"p":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"i":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{},"f":{"df":1,"docs":{"1":{"tf":1.0}}}}},"df":0,"docs":{}}},"t":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}},"t":{"df":0,"docs":{},"e":{"d":{"df":0,"docs":{},"i":{"a":{"df":0,"docs":{},"g":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"m":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"u":{"b":{"df":0,"docs":{},"j":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}}}},"c":{"df":0,"docs":{},"h":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{},"m":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"n":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":2,"docs":{"2":{"tf":1.0},"3":{"tf":1.7320508075688772}}}}},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":2,"docs":{"2":{"tf":1.0},"3":{"tf":1.4142135623730951}}}}}},"r":{"df":0,"docs":{},"v":{"df":0,"docs":{},"i":{"df":0,"docs":{},"v":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"d":{"df":0,"docs":{},"e":{"df":3,"docs":{"0":{"tf":1.0},"1":{"tf":1.7320508075688772},"2":{"tf":1.0}}}},"df":0,"docs":{}},"u":{"df":1,"docs":{"2":{"tf":1.0}}}},"i":{"c":{"df":0,"docs":{},"k":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}},"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":2,"docs":{"1":{"tf":1.0},"2":{"tf":2.23606797749979}}}}},"o":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}}},"r":{"a":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.0}}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"u":{"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"o":{"d":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}}}}}}}},"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}},"v":{"2":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"1":{"tf":1.0}}}}},"i":{"df":0,"docs":{},"e":{"df":0,"docs":{},"w":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"w":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}},"r":{"df":0,"docs":{},"e":{"df":1,"docs":{"2":{"tf":1.0}}}},"x":{"df":1,"docs":{"2":{"tf":1.7320508075688772}}},"y":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{},"h":{"df":0,"docs":{},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}}}},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}}}}},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"l":{"d":{"df":2,"docs":{"1":{"tf":2.0},"2":{"tf":2.0}}},"df":0,"docs":{}}}}},"y":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"r":{"df":1,"docs":{"2":{"tf":1.7320508075688772}}}},"df":0,"docs":{}}}}},"breadcrumbs":{"root":{"1":{"3":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}},"4":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}},"df":0,"docs":{}},"2":{"3":{"9":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}},"7":{"0":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}},"8":{"df":1,"docs":{"2":{"tf":1.0}}},"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"o":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":2,"docs":{"1":{"tf":1.0},"2":{"tf":1.0}}}}}}},"b":{"a":{"c":{"df":0,"docs":{},"k":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}},"df":0,"docs":{}}},"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":1,"docs":{"1":{"tf":1.0}}}}},"df":2,"docs":{"1":{"tf":1.0},"2":{"tf":1.0}}},"i":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":1,"docs":{"1":{"tf":1.0}}}}},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"1":{"tf":1.0}}}}},"o":{"c":{"df":0,"docs":{},"k":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}}},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"g":{"df":1,"docs":{"2":{"tf":1.0}}}}}}},"c":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"b":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{},"p":{"df":0,"docs":{},"i":{"df":0,"docs":{},"l":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"n":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}},"df":0,"docs":{}}}},"u":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}},"r":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"df":0,"docs":{},"s":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.7320508075688772}}}}}},"df":0,"docs":{}}},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}}}},"s":{"df":1,"docs":{"1":{"tf":1.0}}}}},"y":{"c":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.4142135623730951}}}},"df":0,"docs":{}}},"d":{"a":{"df":0,"docs":{},"y":{"df":3,"docs":{"1":{"tf":1.0},"2":{"tf":4.47213595499958},"3":{"tf":1.4142135623730951}},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"h":{"df":0,"docs":{},"t":{"df":2,"docs":{"2":{"tf":1.0},"3":{"tf":1.4142135623730951}}}}}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}}}},"s":{"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"n":{"df":1,"docs":{"0":{"tf":1.0}}}}},"t":{"df":0,"docs":{},"r":{"df":0,"docs":{},"o":{"df":0,"docs":{},"y":{"df":1,"docs":{"1":{"tf":1.0}}}},"u":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}}}}}},"i":{"df":0,"docs":{},"e":{"df":1,"docs":{"2":{"tf":1.0}}},"f":{"df":0,"docs":{},"f":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"2":{"tf":1.0}}}}}}},"o":{"c":{"df":0,"docs":{},"u":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":1,"docs":{"0":{"tf":1.0}}}}}}}},"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":1,"docs":{"1":{"tf":1.0}}},"r":{"df":2,"docs":{"1":{"tf":1.0},"2":{"tf":1.4142135623730951}}}}},"u":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}}}},"df":0,"docs":{},"e":{".":{"df":0,"docs":{},"g":{"df":1,"docs":{"1":{"tf":1.0}}}},"a":{"c":{"df":0,"docs":{},"h":{"df":1,"docs":{"2":{"tf":1.7320508075688772}}}},"df":0,"docs":{}},"df":0,"docs":{},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"h":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"n":{"d":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}},"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":2,"docs":{"1":{"tf":1.0},"2":{"tf":1.7320508075688772}}}},"i":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}},"f":{"a":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"i":{"df":1,"docs":{"1":{"tf":1.0}}}}},"df":0,"docs":{}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"w":{"df":1,"docs":{"1":{"tf":1.0}}}},"i":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"d":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}}},"r":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":2.0}}}}}},"l":{"df":0,"docs":{},"o":{"df":0,"docs":{},"w":{"df":1,"docs":{"2":{"tf":1.0}}}}},"o":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"e":{"d":{"df":0,"docs":{},"o":{"df":0,"docs":{},"m":{"df":1,"docs":{"1":{"tf":1.0}}}}},"df":1,"docs":{"1":{"tf":1.0}}}}},"u":{"df":0,"docs":{},"l":{"df":0,"docs":{},"l":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"g":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":4,"docs":{"0":{"tf":1.0},"1":{"tf":2.23606797749979},"2":{"tf":1.0},"3":{"tf":1.0}}}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"i":{"b":{"b":{"df":0,"docs":{},"o":{"df":0,"docs":{},"u":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}}},"df":0,"docs":{}},"df":0,"docs":{}},"o":{"d":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}}},"h":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}},"df":0,"docs":{},"u":{"df":0,"docs":{},"m":{"a":{"df":0,"docs":{},"n":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}}}},"i":{"d":{"df":0,"docs":{},"e":{"a":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}}}},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"r":{"a":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}}},"v":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}}}},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"m":{"df":2,"docs":{"1":{"tf":1.4142135623730951},"2":{"tf":1.0}}}}}},"j":{"df":0,"docs":{},"u":{"df":0,"docs":{},"m":{"df":0,"docs":{},"p":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"l":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":2.0}}}}},"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"r":{"df":1,"docs":{"2":{"tf":1.7320508075688772}}}},"df":0,"docs":{}}}},"u":{"df":0,"docs":{},"n":{"a":{"df":0,"docs":{},"r":{"df":1,"docs":{"2":{"tf":2.23606797749979}}}},"df":0,"docs":{}}}},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"n":{"df":0,"docs":{},"n":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"h":{"df":1,"docs":{"1":{"tf":1.7320508075688772}}}}}}}},"o":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"h":{"df":1,"docs":{"2":{"tf":1.7320508075688772}}}}}}},"n":{"df":0,"docs":{},"e":{"df":0,"docs":{},"w":{"df":1,"docs":{"2":{"tf":1.7320508075688772}}}},"i":{"df":0,"docs":{},"g":{"df":0,"docs":{},"h":{"df":0,"docs":{},"t":{"df":2,"docs":{"2":{"tf":1.0},"3":{"tf":1.4142135623730951}}}}}},"o":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":1,"docs":{"0":{"tf":1.0}}}}}},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}},"p":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":2,"docs":{"2":{"tf":2.449489742783178},"3":{"tf":1.4142135623730951}}}}},"df":0,"docs":{},"e":{"a":{"c":{"df":1,"docs":{"1":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{},"o":{"df":0,"docs":{},"p":{"df":0,"docs":{},"l":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"h":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":1,"docs":{"2":{"tf":2.449489742783178}}}}},"df":0,"docs":{}},"l":{"a":{"df":0,"docs":{},"y":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"'":{"df":1,"docs":{"2":{"tf":1.0}}},"df":2,"docs":{"1":{"tf":1.7320508075688772},"2":{"tf":2.23606797749979}}}}}},"df":0,"docs":{}},"o":{"df":0,"docs":{},"l":{"df":0,"docs":{},"i":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}}},"r":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"a":{"c":{"df":1,"docs":{"0":{"tf":1.7320508075688772}}},"df":0,"docs":{}},"df":0,"docs":{}},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"c":{"/":{"a":{"df":0,"docs":{},"n":{"c":{"df":0,"docs":{},"i":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}}},"df":0,"docs":{}},"df":0,"docs":{}},"df":0,"docs":{}}}}}}}}},"o":{"c":{"df":0,"docs":{},"e":{"d":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.0}}}}},"df":0,"docs":{}}},"df":0,"docs":{},"g":{"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}}}},"q":{"df":0,"docs":{},"u":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}}}}},"df":0,"docs":{}}},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"g":{"a":{"df":0,"docs":{},"r":{"d":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}}},"df":0,"docs":{}},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}},"t":{"df":0,"docs":{},"u":{"df":0,"docs":{},"r":{"df":0,"docs":{},"n":{"df":2,"docs":{"1":{"tf":1.0},"2":{"tf":1.0}}}}}}}},"s":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"s":{"df":0,"docs":{},"o":{"df":0,"docs":{},"n":{"df":1,"docs":{"2":{"tf":2.0}}}}}},"df":0,"docs":{}},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"f":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"o":{"c":{"df":0,"docs":{},"i":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":0,"docs":{},"i":{"df":1,"docs":{"1":{"tf":1.0}}}}}}},"df":0,"docs":{},"r":{"c":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"1":{"tf":1.0}}}}}},"df":0,"docs":{}}},"p":{"df":0,"docs":{},"e":{"c":{"df":3,"docs":{"1":{"tf":1.0},"2":{"tf":1.0},"3":{"tf":1.0}},"i":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{},"f":{"df":1,"docs":{"1":{"tf":1.4142135623730951}}}}},"df":0,"docs":{}}},"t":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"2":{"tf":1.0}}}},"t":{"df":0,"docs":{},"e":{"d":{"df":0,"docs":{},"i":{"a":{"df":0,"docs":{},"g":{"df":0,"docs":{},"r":{"a":{"df":0,"docs":{},"m":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}}}},"df":0,"docs":{}}},"df":0,"docs":{}}}},"df":0,"docs":{}},"u":{"b":{"df":0,"docs":{},"j":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"t":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{}}}},"c":{"df":0,"docs":{},"h":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{},"m":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"n":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":0,"docs":{},"s":{"df":2,"docs":{"2":{"tf":1.0},"3":{"tf":1.7320508075688772}}}}},"s":{"df":0,"docs":{},"e":{"df":0,"docs":{},"t":{"df":2,"docs":{"2":{"tf":1.0},"3":{"tf":1.4142135623730951}}}}}},"r":{"df":0,"docs":{},"v":{"df":0,"docs":{},"i":{"df":0,"docs":{},"v":{"df":1,"docs":{"1":{"tf":1.0}}}}}}}},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"e":{"d":{"df":0,"docs":{},"e":{"df":3,"docs":{"0":{"tf":1.0},"1":{"tf":1.7320508075688772},"2":{"tf":1.0}}}},"df":0,"docs":{}},"u":{"df":1,"docs":{"2":{"tf":1.0}}}},"i":{"c":{"df":0,"docs":{},"k":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}},"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":3,"docs":{"1":{"tf":1.0},"2":{"tf":2.6457513110645907},"3":{"tf":1.0}}}}},"o":{"df":0,"docs":{},"t":{"a":{"df":0,"docs":{},"l":{"df":1,"docs":{"2":{"tf":1.0}}}},"df":0,"docs":{}}},"r":{"a":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"1":{"tf":1.0}}}}},"df":0,"docs":{}},"df":0,"docs":{}}},"u":{"df":0,"docs":{},"n":{"d":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"s":{"df":0,"docs":{},"t":{"df":0,"docs":{},"o":{"df":0,"docs":{},"o":{"d":{"df":1,"docs":{"2":{"tf":1.0}}},"df":0,"docs":{}}}}}}}},"df":0,"docs":{},"l":{"df":0,"docs":{},"e":{"df":0,"docs":{},"s":{"df":0,"docs":{},"s":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}},"v":{"2":{"df":1,"docs":{"3":{"tf":1.0}}},"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":0,"docs":{},"i":{"df":1,"docs":{"1":{"tf":1.0}}}}},"i":{"df":0,"docs":{},"e":{"df":0,"docs":{},"w":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"w":{"a":{"df":0,"docs":{},"n":{"df":0,"docs":{},"e":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}},"r":{"df":0,"docs":{},"e":{"df":1,"docs":{"2":{"tf":1.0}}}},"x":{"df":1,"docs":{"2":{"tf":1.7320508075688772}}},"y":{"df":1,"docs":{"1":{"tf":1.0}}}},"df":0,"docs":{},"h":{"df":0,"docs":{},"o":{"df":0,"docs":{},"s":{"df":0,"docs":{},"e":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}}}},"i":{"df":0,"docs":{},"n":{"df":0,"docs":{},"t":{"df":0,"docs":{},"e":{"df":0,"docs":{},"r":{"df":1,"docs":{"2":{"tf":1.0}}}}}},"t":{"df":0,"docs":{},"h":{"df":0,"docs":{},"i":{"df":0,"docs":{},"n":{"df":1,"docs":{"2":{"tf":1.4142135623730951}}}}}}},"o":{"df":0,"docs":{},"r":{"df":0,"docs":{},"l":{"d":{"df":2,"docs":{"1":{"tf":2.0},"2":{"tf":2.0}}},"df":0,"docs":{}}}}},"y":{"df":0,"docs":{},"e":{"a":{"df":0,"docs":{},"r":{"df":1,"docs":{"2":{"tf":1.7320508075688772}}}},"df":0,"docs":{}}}}},"title":{"root":{"c":{"df":0,"docs":{},"y":{"c":{"df":0,"docs":{},"l":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}}},"d":{"a":{"df":0,"docs":{},"y":{"df":1,"docs":{"3":{"tf":1.0}}}},"df":0,"docs":{}},"df":0,"docs":{},"g":{"a":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":1,"docs":{"1":{"tf":1.0}}}}},"df":0,"docs":{}},"p":{"a":{"df":0,"docs":{},"r":{"df":0,"docs":{},"t":{"df":1,"docs":{"3":{"tf":1.0}}}}},"df":0,"docs":{},"r":{"df":0,"docs":{},"e":{"df":0,"docs":{},"f":{"a":{"c":{"df":1,"docs":{"0":{"tf":1.0}}},"df":0,"docs":{}},"df":0,"docs":{}}}}},"s":{"df":0,"docs":{},"p":{"df":0,"docs":{},"e":{"c":{"df":0,"docs":{},"i":{"df":0,"docs":{},"f":{"df":1,"docs":{"1":{"tf":1.0}}}}},"df":0,"docs":{}}}},"t":{"df":0,"docs":{},"i":{"df":0,"docs":{},"m":{"df":0,"docs":{},"e":{"df":1,"docs":{"2":{"tf":1.0}}}}}}}}},"lang":"English","pipeline":["trimmer","stopWordFilter","stemmer"],"ref":"id","version":"0.9.5"},"results_options":{"limit_results":30,"teaser_word_count":30},"search_options":{"bool":"OR","expand":true,"fields":{"body":{"boost":1},"breadcrumbs":{"boost":1},"title":{"boost":2}}}});