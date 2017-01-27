var map,museumLayer_ticked,  featureList, boroughSearch = [], theaterSearch = [], museumSearch = [];
var selected_building_feature ;
var colorbrewer={YlGn:{3:["#f7fcb9","#addd8e","#31a354"],4:["#ffffcc","#c2e699","#78c679","#238443"],5:["#ffffcc","#c2e699","#78c679","#31a354","#006837"],6:["#ffffcc","#d9f0a3","#addd8e","#78c679","#31a354","#006837"],7:["#ffffcc","#d9f0a3","#addd8e","#78c679","#41ab5d","#238443","#005a32"],8:["#ffffe5","#f7fcb9","#d9f0a3","#addd8e","#78c679","#41ab5d","#238443","#005a32"],9:["#ffffe5","#f7fcb9","#d9f0a3","#addd8e","#78c679","#41ab5d","#238443","#006837","#004529"]},YlGnBu:{3:["#edf8b1","#7fcdbb","#2c7fb8"],4:["#ffffcc","#a1dab4","#41b6c4","#225ea8"],5:["#ffffcc","#a1dab4","#41b6c4","#2c7fb8","#253494"],6:["#ffffcc","#c7e9b4","#7fcdbb","#41b6c4","#2c7fb8","#253494"],7:["#ffffcc","#c7e9b4","#7fcdbb","#41b6c4","#1d91c0","#225ea8","#0c2c84"],8:["#ffffd9","#edf8b1","#c7e9b4","#7fcdbb","#41b6c4","#1d91c0","#225ea8","#0c2c84"],9:["#ffffd9","#edf8b1","#c7e9b4","#7fcdbb","#41b6c4","#1d91c0","#225ea8","#253494","#081d58"]},GnBu:{3:["#e0f3db","#a8ddb5","#43a2ca"],4:["#f0f9e8","#bae4bc","#7bccc4","#2b8cbe"],5:["#f0f9e8","#bae4bc","#7bccc4","#43a2ca","#0868ac"],6:["#f0f9e8","#ccebc5","#a8ddb5","#7bccc4","#43a2ca","#0868ac"],7:["#f0f9e8","#ccebc5","#a8ddb5","#7bccc4","#4eb3d3","#2b8cbe","#08589e"],8:["#f7fcf0","#e0f3db","#ccebc5","#a8ddb5","#7bccc4","#4eb3d3","#2b8cbe","#08589e"],9:["#f7fcf0","#e0f3db","#ccebc5","#a8ddb5","#7bccc4","#4eb3d3","#2b8cbe","#0868ac","#084081"]},BuGn:{3:["#e5f5f9","#99d8c9","#2ca25f"],4:["#edf8fb","#b2e2e2","#66c2a4","#238b45"],5:["#edf8fb","#b2e2e2","#66c2a4","#2ca25f","#006d2c"],6:["#edf8fb","#ccece6","#99d8c9","#66c2a4","#2ca25f","#006d2c"],7:["#edf8fb","#ccece6","#99d8c9","#66c2a4","#41ae76","#238b45","#005824"],8:["#f7fcfd","#e5f5f9","#ccece6","#99d8c9","#66c2a4","#41ae76","#238b45","#005824"],9:["#f7fcfd","#e5f5f9","#ccece6","#99d8c9","#66c2a4","#41ae76","#238b45","#006d2c","#00441b"]},PuBuGn:{3:["#ece2f0","#a6bddb","#1c9099"],4:["#f6eff7","#bdc9e1","#67a9cf","#02818a"],5:["#f6eff7","#bdc9e1","#67a9cf","#1c9099","#016c59"],6:["#f6eff7","#d0d1e6","#a6bddb","#67a9cf","#1c9099","#016c59"],7:["#f6eff7","#d0d1e6","#a6bddb","#67a9cf","#3690c0","#02818a","#016450"],8:["#fff7fb","#ece2f0","#d0d1e6","#a6bddb","#67a9cf","#3690c0","#02818a","#016450"],9:["#fff7fb","#ece2f0","#d0d1e6","#a6bddb","#67a9cf","#3690c0","#02818a","#016c59","#014636"]},PuBu:{3:["#ece7f2","#a6bddb","#2b8cbe"],4:["#f1eef6","#bdc9e1","#74a9cf","#0570b0"],5:["#f1eef6","#bdc9e1","#74a9cf","#2b8cbe","#045a8d"],6:["#f1eef6","#d0d1e6","#a6bddb","#74a9cf","#2b8cbe","#045a8d"],7:["#f1eef6","#d0d1e6","#a6bddb","#74a9cf","#3690c0","#0570b0","#034e7b"],8:["#fff7fb","#ece7f2","#d0d1e6","#a6bddb","#74a9cf","#3690c0","#0570b0","#034e7b"],9:["#fff7fb","#ece7f2","#d0d1e6","#a6bddb","#74a9cf","#3690c0","#0570b0","#045a8d","#023858"]},BuPu:{3:["#e0ecf4","#9ebcda","#8856a7"],4:["#edf8fb","#b3cde3","#8c96c6","#88419d"],5:["#edf8fb","#b3cde3","#8c96c6","#8856a7","#810f7c"],6:["#edf8fb","#bfd3e6","#9ebcda","#8c96c6","#8856a7","#810f7c"],7:["#edf8fb","#bfd3e6","#9ebcda","#8c96c6","#8c6bb1","#88419d","#6e016b"],8:["#f7fcfd","#e0ecf4","#bfd3e6","#9ebcda","#8c96c6","#8c6bb1","#88419d","#6e016b"],9:["#f7fcfd","#e0ecf4","#bfd3e6","#9ebcda","#8c96c6","#8c6bb1","#88419d","#810f7c","#4d004b"]},RdPu:{3:["#fde0dd","#fa9fb5","#c51b8a"],4:["#feebe2","#fbb4b9","#f768a1","#ae017e"],5:["#feebe2","#fbb4b9","#f768a1","#c51b8a","#7a0177"],6:["#feebe2","#fcc5c0","#fa9fb5","#f768a1","#c51b8a","#7a0177"],7:["#feebe2","#fcc5c0","#fa9fb5","#f768a1","#dd3497","#ae017e","#7a0177"],8:["#fff7f3","#fde0dd","#fcc5c0","#fa9fb5","#f768a1","#dd3497","#ae017e","#7a0177"],9:["#fff7f3","#fde0dd","#fcc5c0","#fa9fb5","#f768a1","#dd3497","#ae017e","#7a0177","#49006a"]},PuRd:{3:["#e7e1ef","#c994c7","#dd1c77"],4:["#f1eef6","#d7b5d8","#df65b0","#ce1256"],5:["#f1eef6","#d7b5d8","#df65b0","#dd1c77","#980043"],6:["#f1eef6","#d4b9da","#c994c7","#df65b0","#dd1c77","#980043"],7:["#f1eef6","#d4b9da","#c994c7","#df65b0","#e7298a","#ce1256","#91003f"],8:["#f7f4f9","#e7e1ef","#d4b9da","#c994c7","#df65b0","#e7298a","#ce1256","#91003f"],9:["#f7f4f9","#e7e1ef","#d4b9da","#c994c7","#df65b0","#e7298a","#ce1256","#980043","#67001f"]},OrRd:{3:["#fee8c8","#fdbb84","#e34a33"],4:["#fef0d9","#fdcc8a","#fc8d59","#d7301f"],5:["#fef0d9","#fdcc8a","#fc8d59","#e34a33","#b30000"],6:["#fef0d9","#fdd49e","#fdbb84","#fc8d59","#e34a33","#b30000"],7:["#fef0d9","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#990000"],8:["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#990000"],9:["#fff7ec","#fee8c8","#fdd49e","#fdbb84","#fc8d59","#ef6548","#d7301f","#b30000","#7f0000"]},YlOrRd:{3:["#ffeda0","#feb24c","#f03b20"],4:["#ffffb2","#fecc5c","#fd8d3c","#e31a1c"],5:["#ffffb2","#fecc5c","#fd8d3c","#f03b20","#bd0026"],6:["#ffffb2","#fed976","#feb24c","#fd8d3c","#f03b20","#bd0026"],7:["#ffffb2","#fed976","#feb24c","#fd8d3c","#fc4e2a","#e31a1c","#b10026"],8:["#ffffcc","#ffeda0","#fed976","#feb24c","#fd8d3c","#fc4e2a","#e31a1c","#b10026"],9:["#ffffcc","#ffeda0","#fed976","#feb24c","#fd8d3c","#fc4e2a","#e31a1c","#bd0026","#800026"]},YlOrBr:{3:["#fff7bc","#fec44f","#d95f0e"],4:["#ffffd4","#fed98e","#fe9929","#cc4c02"],5:["#ffffd4","#fed98e","#fe9929","#d95f0e","#993404"],6:["#ffffd4","#fee391","#fec44f","#fe9929","#d95f0e","#993404"],7:["#ffffd4","#fee391","#fec44f","#fe9929","#ec7014","#cc4c02","#8c2d04"],8:["#ffffe5","#fff7bc","#fee391","#fec44f","#fe9929","#ec7014","#cc4c02","#8c2d04"],9:["#ffffe5","#fff7bc","#fee391","#fec44f","#fe9929","#ec7014","#cc4c02","#993404","#662506"]},Purples:{3:["#efedf5","#bcbddc","#756bb1"],4:["#f2f0f7","#cbc9e2","#9e9ac8","#6a51a3"],5:["#f2f0f7","#cbc9e2","#9e9ac8","#756bb1","#54278f"],6:["#f2f0f7","#dadaeb","#bcbddc","#9e9ac8","#756bb1","#54278f"],7:["#f2f0f7","#dadaeb","#bcbddc","#9e9ac8","#807dba","#6a51a3","#4a1486"],8:["#fcfbfd","#efedf5","#dadaeb","#bcbddc","#9e9ac8","#807dba","#6a51a3","#4a1486"],9:["#fcfbfd","#efedf5","#dadaeb","#bcbddc","#9e9ac8","#807dba","#6a51a3","#54278f","#3f007d"]},Blues:{3:["#deebf7","#9ecae1","#3182bd"],4:["#eff3ff","#bdd7e7","#6baed6","#2171b5"],5:["#eff3ff","#bdd7e7","#6baed6","#3182bd","#08519c"],6:["#eff3ff","#c6dbef","#9ecae1","#6baed6","#3182bd","#08519c"],7:["#eff3ff","#c6dbef","#9ecae1","#6baed6","#4292c6","#2171b5","#084594"],8:["#f7fbff","#deebf7","#c6dbef","#9ecae1","#6baed6","#4292c6","#2171b5","#084594"],9:["#f7fbff","#deebf7","#c6dbef","#9ecae1","#6baed6","#4292c6","#2171b5","#08519c","#08306b"]},Greens:{3:["#e5f5e0","#a1d99b","#31a354"],4:["#edf8e9","#bae4b3","#74c476","#238b45"],5:["#edf8e9","#bae4b3","#74c476","#31a354","#006d2c"],6:["#edf8e9","#c7e9c0","#a1d99b","#74c476","#31a354","#006d2c"],7:["#edf8e9","#c7e9c0","#a1d99b","#74c476","#41ab5d","#238b45","#005a32"],8:["#f7fcf5","#e5f5e0","#c7e9c0","#a1d99b","#74c476","#41ab5d","#238b45","#005a32"],9:["#f7fcf5","#e5f5e0","#c7e9c0","#a1d99b","#74c476","#41ab5d","#238b45","#006d2c","#00441b"]},Oranges:{3:["#fee6ce","#fdae6b","#e6550d"],4:["#feedde","#fdbe85","#fd8d3c","#d94701"],5:["#feedde","#fdbe85","#fd8d3c","#e6550d","#a63603"],6:["#feedde","#fdd0a2","#fdae6b","#fd8d3c","#e6550d","#a63603"],7:["#feedde","#fdd0a2","#fdae6b","#fd8d3c","#f16913","#d94801","#8c2d04"],8:["#fff5eb","#fee6ce","#fdd0a2","#fdae6b","#fd8d3c","#f16913","#d94801","#8c2d04"],9:["#fff5eb","#fee6ce","#fdd0a2","#fdae6b","#fd8d3c","#f16913","#d94801","#a63603","#7f2704"]},Reds:{3:["#fee0d2","#fc9272","#de2d26"],4:["#fee5d9","#fcae91","#fb6a4a","#cb181d"],5:["#fee5d9","#fcae91","#fb6a4a","#de2d26","#a50f15"],6:["#fee5d9","#fcbba1","#fc9272","#fb6a4a","#de2d26","#a50f15"],7:["#fee5d9","#fcbba1","#fc9272","#fb6a4a","#ef3b2c","#cb181d","#99000d"],8:["#fff5f0","#fee0d2","#fcbba1","#fc9272","#fb6a4a","#ef3b2c","#cb181d","#99000d"],9:["#fff5f0","#fee0d2","#fcbba1","#fc9272","#fb6a4a","#ef3b2c","#cb181d","#a50f15","#67000d"]},Greys:{3:["#f0f0f0","#bdbdbd","#636363"],4:["#f7f7f7","#cccccc","#969696","#525252"],5:["#f7f7f7","#cccccc","#969696","#636363","#252525"],6:["#f7f7f7","#d9d9d9","#bdbdbd","#969696","#636363","#252525"],7:["#f7f7f7","#d9d9d9","#bdbdbd","#969696","#737373","#525252","#252525"],8:["#ffffff","#f0f0f0","#d9d9d9","#bdbdbd","#969696","#737373","#525252","#252525"],9:["#ffffff","#f0f0f0","#d9d9d9","#bdbdbd","#969696","#737373","#525252","#252525","#000000"]},PuOr:{3:["#f1a340","#f7f7f7","#998ec3"],4:["#e66101","#fdb863","#b2abd2","#5e3c99"],5:["#e66101","#fdb863","#f7f7f7","#b2abd2","#5e3c99"],6:["#b35806","#f1a340","#fee0b6","#d8daeb","#998ec3","#542788"],7:["#b35806","#f1a340","#fee0b6","#f7f7f7","#d8daeb","#998ec3","#542788"],8:["#b35806","#e08214","#fdb863","#fee0b6","#d8daeb","#b2abd2","#8073ac","#542788"],9:["#b35806","#e08214","#fdb863","#fee0b6","#f7f7f7","#d8daeb","#b2abd2","#8073ac","#542788"],10:["#7f3b08","#b35806","#e08214","#fdb863","#fee0b6","#d8daeb","#b2abd2","#8073ac","#542788","#2d004b"],11:["#7f3b08","#b35806","#e08214","#fdb863","#fee0b6","#f7f7f7","#d8daeb","#b2abd2","#8073ac","#542788","#2d004b"]},BrBG:{3:["#d8b365","#f5f5f5","#5ab4ac"],4:["#a6611a","#dfc27d","#80cdc1","#018571"],5:["#a6611a","#dfc27d","#f5f5f5","#80cdc1","#018571"],6:["#8c510a","#d8b365","#f6e8c3","#c7eae5","#5ab4ac","#01665e"],7:["#8c510a","#d8b365","#f6e8c3","#f5f5f5","#c7eae5","#5ab4ac","#01665e"],8:["#8c510a","#bf812d","#dfc27d","#f6e8c3","#c7eae5","#80cdc1","#35978f","#01665e"],9:["#8c510a","#bf812d","#dfc27d","#f6e8c3","#f5f5f5","#c7eae5","#80cdc1","#35978f","#01665e"],10:["#543005","#8c510a","#bf812d","#dfc27d","#f6e8c3","#c7eae5","#80cdc1","#35978f","#01665e","#003c30"],11:["#543005","#8c510a","#bf812d","#dfc27d","#f6e8c3","#f5f5f5","#c7eae5","#80cdc1","#35978f","#01665e","#003c30"]},PRGn:{3:["#af8dc3","#f7f7f7","#7fbf7b"],4:["#7b3294","#c2a5cf","#a6dba0","#008837"],5:["#7b3294","#c2a5cf","#f7f7f7","#a6dba0","#008837"],6:["#762a83","#af8dc3","#e7d4e8","#d9f0d3","#7fbf7b","#1b7837"],7:["#762a83","#af8dc3","#e7d4e8","#f7f7f7","#d9f0d3","#7fbf7b","#1b7837"],8:["#762a83","#9970ab","#c2a5cf","#e7d4e8","#d9f0d3","#a6dba0","#5aae61","#1b7837"],9:["#762a83","#9970ab","#c2a5cf","#e7d4e8","#f7f7f7","#d9f0d3","#a6dba0","#5aae61","#1b7837"],10:["#40004b","#762a83","#9970ab","#c2a5cf","#e7d4e8","#d9f0d3","#a6dba0","#5aae61","#1b7837","#00441b"],11:["#40004b","#762a83","#9970ab","#c2a5cf","#e7d4e8","#f7f7f7","#d9f0d3","#a6dba0","#5aae61","#1b7837","#00441b"]},PiYG:{3:["#e9a3c9","#f7f7f7","#a1d76a"],4:["#d01c8b","#f1b6da","#b8e186","#4dac26"],5:["#d01c8b","#f1b6da","#f7f7f7","#b8e186","#4dac26"],6:["#c51b7d","#e9a3c9","#fde0ef","#e6f5d0","#a1d76a","#4d9221"],7:["#c51b7d","#e9a3c9","#fde0ef","#f7f7f7","#e6f5d0","#a1d76a","#4d9221"],8:["#c51b7d","#de77ae","#f1b6da","#fde0ef","#e6f5d0","#b8e186","#7fbc41","#4d9221"],9:["#c51b7d","#de77ae","#f1b6da","#fde0ef","#f7f7f7","#e6f5d0","#b8e186","#7fbc41","#4d9221"],10:["#8e0152","#c51b7d","#de77ae","#f1b6da","#fde0ef","#e6f5d0","#b8e186","#7fbc41","#4d9221","#276419"],11:["#8e0152","#c51b7d","#de77ae","#f1b6da","#fde0ef","#f7f7f7","#e6f5d0","#b8e186","#7fbc41","#4d9221","#276419"]},RdBu:{3:["#ef8a62","#f7f7f7","#67a9cf"],4:["#ca0020","#f4a582","#92c5de","#0571b0"],5:["#ca0020","#f4a582","#f7f7f7","#92c5de","#0571b0"],6:["#b2182b","#ef8a62","#fddbc7","#d1e5f0","#67a9cf","#2166ac"],7:["#b2182b","#ef8a62","#fddbc7","#f7f7f7","#d1e5f0","#67a9cf","#2166ac"],8:["#b2182b","#d6604d","#f4a582","#fddbc7","#d1e5f0","#92c5de","#4393c3","#2166ac"],9:["#b2182b","#d6604d","#f4a582","#fddbc7","#f7f7f7","#d1e5f0","#92c5de","#4393c3","#2166ac"],10:["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#d1e5f0","#92c5de","#4393c3","#2166ac","#053061"],11:["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#f7f7f7","#d1e5f0","#92c5de","#4393c3","#2166ac","#053061"]},RdGy:{3:["#ef8a62","#ffffff","#999999"],4:["#ca0020","#f4a582","#bababa","#404040"],5:["#ca0020","#f4a582","#ffffff","#bababa","#404040"],6:["#b2182b","#ef8a62","#fddbc7","#e0e0e0","#999999","#4d4d4d"],7:["#b2182b","#ef8a62","#fddbc7","#ffffff","#e0e0e0","#999999","#4d4d4d"],8:["#b2182b","#d6604d","#f4a582","#fddbc7","#e0e0e0","#bababa","#878787","#4d4d4d"],9:["#b2182b","#d6604d","#f4a582","#fddbc7","#ffffff","#e0e0e0","#bababa","#878787","#4d4d4d"],10:["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#e0e0e0","#bababa","#878787","#4d4d4d","#1a1a1a"],11:["#67001f","#b2182b","#d6604d","#f4a582","#fddbc7","#ffffff","#e0e0e0","#bababa","#878787","#4d4d4d","#1a1a1a"]},RdYlBu:{3:["#fc8d59","#ffffbf","#91bfdb"],4:["#d7191c","#fdae61","#abd9e9","#2c7bb6"],5:["#d7191c","#fdae61","#ffffbf","#abd9e9","#2c7bb6"],6:["#d73027","#fc8d59","#fee090","#e0f3f8","#91bfdb","#4575b4"],7:["#d73027","#fc8d59","#fee090","#ffffbf","#e0f3f8","#91bfdb","#4575b4"],8:["#d73027","#f46d43","#fdae61","#fee090","#e0f3f8","#abd9e9","#74add1","#4575b4"],9:["#d73027","#f46d43","#fdae61","#fee090","#ffffbf","#e0f3f8","#abd9e9","#74add1","#4575b4"],10:["#a50026","#d73027","#f46d43","#fdae61","#fee090","#e0f3f8","#abd9e9","#74add1","#4575b4","#313695"],11:["#a50026","#d73027","#f46d43","#fdae61","#fee090","#ffffbf","#e0f3f8","#abd9e9","#74add1","#4575b4","#313695"]},Spectral:{3:["#fc8d59","#ffffbf","#99d594"],4:["#d7191c","#fdae61","#abdda4","#2b83ba"],5:["#d7191c","#fdae61","#ffffbf","#abdda4","#2b83ba"],6:["#d53e4f","#fc8d59","#fee08b","#e6f598","#99d594","#3288bd"],7:["#d53e4f","#fc8d59","#fee08b","#ffffbf","#e6f598","#99d594","#3288bd"],8:["#d53e4f","#f46d43","#fdae61","#fee08b","#e6f598","#abdda4","#66c2a5","#3288bd"],9:["#d53e4f","#f46d43","#fdae61","#fee08b","#ffffbf","#e6f598","#abdda4","#66c2a5","#3288bd"],10:["#9e0142","#d53e4f","#f46d43","#fdae61","#fee08b","#e6f598","#abdda4","#66c2a5","#3288bd","#5e4fa2"],11:["#9e0142","#d53e4f","#f46d43","#fdae61","#fee08b","#ffffbf","#e6f598","#abdda4","#66c2a5","#3288bd","#5e4fa2"]},RdYlGn:{3:["#fc8d59","#ffffbf","#91cf60"],4:["#d7191c","#fdae61","#a6d96a","#1a9641"],5:["#d7191c","#fdae61","#ffffbf","#a6d96a","#1a9641"],6:["#d73027","#fc8d59","#fee08b","#d9ef8b","#91cf60","#1a9850"],7:["#d73027","#fc8d59","#fee08b","#ffffbf","#d9ef8b","#91cf60","#1a9850"],8:["#d73027","#f46d43","#fdae61","#fee08b","#d9ef8b","#a6d96a","#66bd63","#1a9850"],9:["#d73027","#f46d43","#fdae61","#fee08b","#ffffbf","#d9ef8b","#a6d96a","#66bd63","#1a9850"],10:["#a50026","#d73027","#f46d43","#fdae61","#fee08b","#d9ef8b","#a6d96a","#66bd63","#1a9850","#006837"],11:["#a50026","#d73027","#f46d43","#fdae61","#fee08b","#ffffbf","#d9ef8b","#a6d96a","#66bd63","#1a9850","#006837"]},Accent:{3:["#7fc97f","#beaed4","#fdc086"],4:["#7fc97f","#beaed4","#fdc086","#ffff99"],5:["#7fc97f","#beaed4","#fdc086","#ffff99","#386cb0"],6:["#7fc97f","#beaed4","#fdc086","#ffff99","#386cb0","#f0027f"],7:["#7fc97f","#beaed4","#fdc086","#ffff99","#386cb0","#f0027f","#bf5b17"],8:["#7fc97f","#beaed4","#fdc086","#ffff99","#386cb0","#f0027f","#bf5b17","#666666"]},Dark2:{3:["#1b9e77","#d95f02","#7570b3"],4:["#1b9e77","#d95f02","#7570b3","#e7298a"],5:["#1b9e77","#d95f02","#7570b3","#e7298a","#66a61e"],6:["#1b9e77","#d95f02","#7570b3","#e7298a","#66a61e","#e6ab02"],7:["#1b9e77","#d95f02","#7570b3","#e7298a","#66a61e","#e6ab02","#a6761d"],8:["#1b9e77","#d95f02","#7570b3","#e7298a","#66a61e","#e6ab02","#a6761d","#666666"]},Paired:{3:["#a6cee3","#1f78b4","#b2df8a"],4:["#a6cee3","#1f78b4","#b2df8a","#33a02c"],5:["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99"],6:["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c"],7:["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f"],8:["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f","#ff7f00"],9:["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f","#ff7f00","#cab2d6"],10:["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f","#ff7f00","#cab2d6","#6a3d9a"],11:["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f","#ff7f00","#cab2d6","#6a3d9a","#ffff99"],12:["#a6cee3","#1f78b4","#b2df8a","#33a02c","#fb9a99","#e31a1c","#fdbf6f","#ff7f00","#cab2d6","#6a3d9a","#ffff99","#b15928"]},Pastel1:{3:["#fbb4ae","#b3cde3","#ccebc5"],4:["#fbb4ae","#b3cde3","#ccebc5","#decbe4"],5:["#fbb4ae","#b3cde3","#ccebc5","#decbe4","#fed9a6"],6:["#fbb4ae","#b3cde3","#ccebc5","#decbe4","#fed9a6","#ffffcc"],7:["#fbb4ae","#b3cde3","#ccebc5","#decbe4","#fed9a6","#ffffcc","#e5d8bd"],8:["#fbb4ae","#b3cde3","#ccebc5","#decbe4","#fed9a6","#ffffcc","#e5d8bd","#fddaec"],9:["#fbb4ae","#b3cde3","#ccebc5","#decbe4","#fed9a6","#ffffcc","#e5d8bd","#fddaec","#f2f2f2"]},Pastel2:{3:["#b3e2cd","#fdcdac","#cbd5e8"],4:["#b3e2cd","#fdcdac","#cbd5e8","#f4cae4"],5:["#b3e2cd","#fdcdac","#cbd5e8","#f4cae4","#e6f5c9"],6:["#b3e2cd","#fdcdac","#cbd5e8","#f4cae4","#e6f5c9","#fff2ae"],7:["#b3e2cd","#fdcdac","#cbd5e8","#f4cae4","#e6f5c9","#fff2ae","#f1e2cc"],8:["#b3e2cd","#fdcdac","#cbd5e8","#f4cae4","#e6f5c9","#fff2ae","#f1e2cc","#cccccc"]},Set1:{3:["#e41a1c","#377eb8","#4daf4a"],4:["#e41a1c","#377eb8","#4daf4a","#984ea3"],5:["#e41a1c","#377eb8","#4daf4a","#984ea3","#ff7f00"],6:["#e41a1c","#377eb8","#4daf4a","#984ea3","#ff7f00","#ffff33"],7:["#e41a1c","#377eb8","#4daf4a","#984ea3","#ff7f00","#ffff33","#a65628"],8:["#e41a1c","#377eb8","#4daf4a","#984ea3","#ff7f00","#ffff33","#a65628","#f781bf"],9:["#e41a1c","#377eb8","#4daf4a","#984ea3","#ff7f00","#ffff33","#a65628","#f781bf","#999999"]},Set2:{3:["#66c2a5","#fc8d62","#8da0cb"],4:["#66c2a5","#fc8d62","#8da0cb","#e78ac3"],5:["#66c2a5","#fc8d62","#8da0cb","#e78ac3","#a6d854"],6:["#66c2a5","#fc8d62","#8da0cb","#e78ac3","#a6d854","#ffd92f"],7:["#66c2a5","#fc8d62","#8da0cb","#e78ac3","#a6d854","#ffd92f","#e5c494"],8:["#66c2a5","#fc8d62","#8da0cb","#e78ac3","#a6d854","#ffd92f","#e5c494","#b3b3b3"]},Set3:{3:["#8dd3c7","#ffffb3","#bebada"],4:["#8dd3c7","#ffffb3","#bebada","#fb8072"],5:["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3"],6:["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462"],7:["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69"],8:["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69","#fccde5"],9:["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69","#fccde5","#d9d9d9"],10:["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69","#fccde5","#d9d9d9","#bc80bd"],11:["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69","#fccde5","#d9d9d9","#bc80bd","#ccebc5"],12:["#8dd3c7","#ffffb3","#bebada","#fb8072","#80b1d3","#fdb462","#b3de69","#fccde5","#d9d9d9","#bc80bd","#ccebc5","#ffed6f"]}};

var colorspec = colorbrewer.YlGn[9];
var colorspec = colorbrewer.YlOrRd[9];




// var mnval=1000;
// var mxval=6000;
// var colorR = (mxval-mnval)/9;
// var color = d3.scale.linear().domain(d3.range(mnval, mxval,colorR))
// //    .range(["white","steelblue"])
//     .range(colorspec)
//     .interpolate(d3.interpolateLab);

$(window).resize(function() {
  sizeLayerControl();
});

$(document).on("click", ".feature-row", function(e) {
  $(document).off("mouseout", ".feature-row", clearHighlight);
  sidebarClick(parseInt($(this).attr("id"), 10));
});

$('#sidebar').hide();   

if ( !("ontouchstart" in window) ) {
  $(document).on("mouseover", ".feature-row", function(e) {
    highlight.clearLayers().addLayer(L.circleMarker([$(this).attr("lat"), $(this).attr("lng")], highlightStyle));
  });
}

$(document).on("mouseout", ".feature-row", clearHighlight);

$("#about-btn").click(function() {
  $("#aboutModal").modal("show");
  $(".navbar-collapse.in").collapse("hide");
  return false;
});

$("#full-extent-btn").click(function() {
  //map.fitBounds(boroughs.getBounds());
  $(".navbar-collapse.in").collapse("hide");
  return false;
});

$("#legend-btn").click(function() {
  $("#legendModal").modal("show");
  $(".navbar-collapse.in").collapse("hide");
  return false;
});

$("#pricesetter-btn").click(function() {
  $("#pricesetterModal").modal("show");
  $(".navbar-collapse.in").collapse("hide");
  return false;
});

$("#regionalanalysis-btn").click(function() {
  $("#regionalanalysisModal").modal("show");
  $(".navbar-collapse.in").collapse("hide");
  return false;
});

// $("#login-btn").click(function() {
//   $("#loginModal").modal("show");
//   $(".navbar-collapse.in").collapse("hide");
//   return false;
// });

$("#list-btn").click(function() {
  $('#sidebar').toggle();
  map.invalidateSize();
  return false;
});

$("#nav-btn").click(function() {
  $(".navbar-collapse").collapse("toggle");
  return false;
});

$("#sidebar-toggle-btn").click(function() {
  $("#sidebar").toggle();
  map.invalidateSize();
  return false;
});

$("#sidebar-hide-btn").click(function() {
  $('#sidebar').hide();
  map.invalidateSize();
});

function sizeLayerControl() {
  $(".leaflet-control-layers").css("max-height", $("#map").height() - 50);
}

function clearHighlight() {
  highlight.clearLayers();
}

function sidebarClick(id) {
  var layer = markerClusters.getLayer(id);
  map.setView([layer.getLatLng().lat, layer.getLatLng().lng], 12);
  layer.fire("click");
  /* Hide sidebar and go to the map on small screens */
  if (document.body.clientWidth <= 767) {
    $("#sidebar").hide();
    map.invalidateSize();
  }
}

function syncSidebar() {
  /* Empty sidebar features */
  $("#feature-list tbody").empty();
  /* Loop through theaters layer and add only features which are in the map bounds */
  theaters.eachLayer(function (layer) {
    if (map.hasLayer(theaterLayer)) {
      if (map.getBounds().contains(layer.getLatLng())) {
        // $("#feature-list tbody").append('<tr class="feature-row" id="' + L.stamp(layer) + '" lat="' + layer.getLatLng().lat + '" lng="' + layer.getLatLng().lng + '"><td style="vertical-align: middle;"><img width="8" height="8" src="assets/img/theater.png"></td><td class="feature-name">' + layer.feature.properties.NAME + '</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>');
        $("#feature-list tbody").append('<tr class="feature-row" id="' + L.stamp(layer) + '" lat="' + layer.getLatLng().lat + '" lng="' + layer.getLatLng().lng + '"><td style="vertical-align: middle;"><img width="8" height="8" src="assets/img/theater.png"></td><td class="feature-name">' + layer.feature.properties.NAME + '</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>');
      }
    }
  });
 
 
  /* Loop through museums layer and add only features which are in the map bounds */
  // museums.eachLayer(function (layer) {
//     if (map.hasLayer(museumLayer)) {
//       if (map.getBounds().contains(layer.getLatLng())) {
//         $("#feature-list tbody").append('<tr class="feature-row" id="' + L.stamp(layer) + '" lat="' + layer.getLatLng().lat + '" lng="' + layer.getLatLng().lng + '"><td style="vertical-align: middle;"><img width="8" height="8" src="assets/img/museum.png"></td><td class="feature-name">' + layer.feature.properties.NAME + '</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>');
//       }
//     }
//   });
//   /* Update list.js featureList */
//   featureList = new List("features", {
//     valueNames: ["feature-name"]
//   });
//   featureList.sort("feature-name", {
//     order: "asc"
//   });
}

/* Basemap Layers */

var Topo = L.tileLayer('http://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
	maxZoom: 17,
	attribution: 'Map data: &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
});


var u = 'https://api.mapbox.com/styles/v1/sevamoo/ciupvn9iw00p92jl8jasm2tqc/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic2V2YW1vbyIsImEiOiJXcTg2dEI4In0.t2FKdE5vgT-BihNJusEz6Q';
var Basic = L.tileLayer(u, {
	maxZoom: 17,
	attribution: 'Map data: &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
});


var Light = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1Ijoic2V2YW1vbyIsImEiOiJXcTg2dEI4In0.t2FKdE5vgT-BihNJusEz6Q', {
    id: 'mapbox.light',
});


// WMTS
// var url = 'https://wmts10.geo.admin.ch/1.0.0/ch.swisstopo.pixelkarte-farbe/default/current/3857/{z}/{x}/{y}.jpeg';
// var geoadminlayer = new L.tileLayer(url);

// WMS?
// var url = 'https://wms.geo.admin.ch/?';
// var geoadminlayer = new L.tileLayer.wms(url, {
//   layers: 'ch.swisstopo.pixelkarte-farbe-pk1000.noscale'
// //   layers: 'ch.swisstopo-karto.hangneigung'
// //   layers: 'ch.swisstopo.vec200-transportation-oeffentliche-verkehr'
// });



var Stamen_Terrain = L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 18,
	ext: 'png'
});

var Stamen_Watercolor = L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
	subdomains: 'abcd',
	minZoom: 1,
	maxZoom: 16,
	ext: 'png'
});

var Hydda_Base = L.tileLayer('http://{s}.tile.openstreetmap.se/hydda/base/{z}/{x}/{y}.png', {
	attribution: 'Tiles courtesy of <a href="http://openstreetmap.se/" target="_blank">OpenStreetMap Sweden</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});

var Hydda_Full = L.tileLayer('http://{s}.tile.openstreetmap.se/hydda/full/{z}/{x}/{y}.png', {
	attribution: 'Tiles courtesy of <a href="http://openstreetmap.se/" target="_blank">OpenStreetMap Sweden</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});

var OpenMapSurfer_Roads = L.tileLayer('http://korona.geog.uni-heidelberg.de/tiles/roads/x={x}&y={y}&z={z}', {
	maxZoom: 20,
	attribution: 'Imagery from <a href="http://giscience.uni-hd.de/">GIScience Research Group @ University of Heidelberg</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});

var OpenStreetMap_Mapnik = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});

var OpenStreetMap_DE = L.tileLayer('http://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png', {
	maxZoom: 18,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});

var OpenMapSurfer_Grayscale = L.tileLayer('http://korona.geog.uni-heidelberg.de/tiles/roadsg/x={x}&y={y}&z={z}', {
	maxZoom: 19,
	attribution: 'Imagery from <a href="http://giscience.uni-hd.de/">GIScience Research Group @ University of Heidelberg</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});

var FreeMapSK = L.tileLayer('http://t{s}.freemap.sk/T/{z}/{x}/{y}.jpeg', {
	minZoom: 8,
	maxZoom: 16,
	subdomains: '1234',
	bounds: [[47.204642, 15.996093], [49.830896, 22.576904]],
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, vizualization CC-By-SA 2.0 <a href="http://freemap.sk">Freemap.sk</a>'
});

var Stamen_Toner = L.tileLayer('http://{s}.tile.stamen.com/toner-lite/{z}/{x}/{y}.png', {
          attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.'
        });
var OpenStreetMap_BlackAndWhite = L.tileLayer('http://{s}.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
	maxZoom: 18,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});

// Labelmap
var labellayer = L.tileLayer('http://{s}.tile.stamen.com/toner-labels/{z}/{x}/{y}.png');

var TangramLayer = Tangram.leafletLayer({
            scene: 'scene1.yaml',
            attribution: '<a href="https://mapzen.com/tangram" target="_blank">Tangram</a> | &copy; OSM contributors | <a href="https://mapzen.com/" target="_blank">Mapzen</a>'
        });


var url0 = 'https://api.mapbox.com/styles/v1/sevamoo/ciull23di00ce2hpbr06s6pao/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic2V2YW1vbyIsImEiOiJXcTg2dEI4In0.t2FKdE5vgT-BihNJusEz6Q';

// distance to center public transport
var url1 = 'https://api.mapbox.com/styles/v1/sevamoo/ciumb4lzt00b82ino98d3nt4q/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic2V2YW1vbyIsImEiOiJXcTg2dEI4In0.t2FKdE5vgT-BihNJusEz6Q';
var mapboxPub_trans_Quality = L.tileLayer(url0);


// noise
var url10 = 'https://api.mapbox.com/styles/v1/sevamoo/ciuphhev700nf2jl85k0hqpwr/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic2V2YW1vbyIsImEiOiJXcTg2dEI4In0.t2FKdE5vgT-BihNJusEz6Q';
var mapboxPub_noise = L.tileLayer(url10);

// Swiss Kantons
var url2 = 'https://api.mapbox.com/styles/v1/sevamoo/ciumqbngr00et2iqqh472g23y/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic2V2YW1vbyIsImEiOiJXcTg2dEI4In0.t2FKdE5vgT-BihNJusEz6Q';
var mapboxSwiss_boundaries_Kantons = L.tileLayer(url2);

var url3 = 'https://api.mapbox.com/styles/v1/sevamoo/ciumwgx1q00f52iqqzq8q6k54/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic2V2YW1vbyIsImEiOiJXcTg2dEI4In0.t2FKdE5vgT-BihNJusEz6Q';
var url3 = 'https://api.mapbox.com/styles/v1/sevamoo/cius0s6ut00tq2hpb4ricv0wr/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic2V2YW1vbyIsImEiOiJXcTg2dEI4In0.t2FKdE5vgT-BihNJusEz6Q';
var mapboxSwiss_boundaries_PLZ = L.tileLayer(url3);

var mapboxbuilding = L.tileLayer('https://api.mapbox.com/styles/v1/sevamoo/cipfq8704001lcrnjfrkjywxr/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic2V2YW1vbyIsImEiOiJXcTg2dEI4In0.t2FKdE5vgT-BihNJusEz6Q');
// 'jJJJJJ'
// 'https://api.mapbox.com/styles/v1/sevamoo/cip8lldk40037dkm3jm0mxf07/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic2V2YW1vbyIsImEiOiJXcTg2dEI4In0.t2FKdE5vgT-BihNJusEz6Q'
// 'HH'
				 


var mapquestOSM = L.tileLayer("https://{s}.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.png", {
  maxZoom: 19,
  subdomains: ["otile1-s", "otile2-s", "otile3-s", "otile4-s"],
  attribution: 'Tiles courtesy of <a href="http://www.mapquest.com/" target="_blank">MapQuest</a> <img src="https://developer.mapquest.com/content/osm/mq_logo.png">. Map data (c) <a href="http://www.openstreetmap.org/" target="_blank">OpenStreetMap</a> contributors, CC-BY-SA.'
});
var mapquestOAM = L.tileLayer("https://{s}.mqcdn.com/tiles/1.0.0/sat/{z}/{x}/{y}.jpg", {
  maxZoom: 18,
  subdomains: ["otile1-s", "otile2-s", "otile3-s", "otile4-s"],
  attribution: 'Tiles courtesy of <a href="http://www.mapquest.com/" target="_blank">MapQuest</a>. Portions Courtesy NASA/JPL-Caltech and U.S. Depart. of Agriculture, Farm Service Agency'
});
var mapquestHYB = L.layerGroup([L.tileLayer("https://{s}.mqcdn.com/tiles/1.0.0/sat/{z}/{x}/{y}.jpg", {
  maxZoom: 18,
  subdomains: ["otile1-s", "otile2-s", "otile3-s", "otile4-s"]
}), L.tileLayer("https://{s}.mqcdn.com/tiles/1.0.0/hyb/{z}/{x}/{y}.png", {
  maxZoom: 19,
  subdomains: ["otile1-s", "otile2-s", "otile3-s", "otile4-s"],
  attribution: 'Labels courtesy of <a href="http://www.mapquest.com/" target="_blank">MapQuest</a> <img src="https://developer.mapquest.com/content/osm/mq_logo.png">. Map data (c) <a href="http://www.openstreetmap.org/" target="_blank">OpenStreetMap</a> contributors, CC-BY-SA. Portions Courtesy NASA/JPL-Caltech and U.S. Depart. of Agriculture, Farm Service Agency'
})]);

/* Overlay Layers */


// var statesLayer = L.geoJson(statesData);


var highlight = L.geoJson(null);
var highlightStyle = {
  stroke: false,
  fillColor: "red",
  //fillColor: "#00FFFF",
  fillOpacity: 0.7,
  radius: 10
};

var boroughs = L.geoJson(null, {
  style: function (feature) {
    return {
      color: "gray",
      fill: false,
      weight: 3,
      opacity: 0.95,
      clickable: false
    };
  },
  onEachFeature: function (feature, layer) {
    boroughSearch.push({
      name: layer.feature.properties.BoroName,
      source: "Boroughs",
      id: L.stamp(layer),
      bounds: layer.getBounds()
    });
  }
});
// 
// swissBOUNDARIES3D_1_2_TLM_LANDESGEBIET.json
$.getJSON("uploads/switzerland.json", function (data) {
  boroughs.addData(data);
});




// var PLZLayer = L.geoJson("uploads/PLZ.geojson");

var KantonLayer = L.geoJson(null,{
  style: function (feature) {
    return {
      color: "gray",
      fill: false,
      weight: 2,
      opacity: 0.95,
      clickable: true
    };
  },
  onEachFeature: function (feature, layer) {
    boroughSearch.push({
      // name: layer.feature.properties.BoroName,
//       source: "Boroughs",
//       id: L.stamp(layer),
      bounds: layer.getBounds(),
//       map.fitBounds(bounds);
    });
  }
});
$.getJSON("uploads/Kanton.geojson", function (data) {
  KantonLayer.addData(data);
});





var subwayLines = L.geoJson(null, {
  style: function (feature) {
    if (feature.properties.route_id === "1" || feature.properties.route_id === "2" || feature.properties.route_id === "3") {
      return {
        color: "#ff3135",
        weight: 3,
        opacity: 1
      };
    }
    if (feature.properties.route_id === "4" || feature.properties.route_id === "5" || feature.properties.route_id === "6") {
      return {
        color: "#009b2e",
        weight: 3,
        opacity: 1
      };
    }
    if (feature.properties.route_id === "7") {
      return {
        color: "#ce06cb",
        weight: 3,
        opacity: 1
      };
    }
    if (feature.properties.route_id === "A" || feature.properties.route_id === "C" || feature.properties.route_id === "E" || feature.properties.route_id === "SI" || feature.properties.route_id === "H") {
      return {
        color: "#fd9a00",
        weight: 3,
        opacity: 1
      };
    }
    if (feature.properties.route_id === "Air") {
      return {
        color: "#ffff00",
        weight: 3,
        opacity: 1
      };
    }
    if (feature.properties.route_id === "B" || feature.properties.route_id === "D" || feature.properties.route_id === "F" || feature.properties.route_id === "M") {
      return {
        color: "#ffff00",
        weight: 3,
        opacity: 1
      };
    }
    if (feature.properties.route_id === "G") {
      return {
        color: "#9ace00",
        weight: 3,
        opacity: 1
      };
    }
    if (feature.properties.route_id === "FS" || feature.properties.route_id === "GS") {
      return {
        color: "#6e6e6e",
        weight: 3,
        opacity: 1
      };
    }
    if (feature.properties.route_id === "J" || feature.properties.route_id === "Z") {
      return {
        color: "#976900",
        weight: 3,
        opacity: 1
      };
    }
    if (feature.properties.route_id === "L") {
      return {
        color: "#969696",
        weight: 3,
        opacity: 1
      };
    }
    if (feature.properties.route_id === "N" || feature.properties.route_id === "Q" || feature.properties.route_id === "R") {
      return {
        color: "#ffff00",
        weight: 3,
        opacity: 1
      };
    }
  },
  onEachFeature: function (feature, layer) {
    if (feature.properties) {
      var content = "<table class='table table-striped table-bordered table-condensed'>" + "<tr><th>Division</th><td>" + feature.properties.Division + "</td></tr>" + "<tr><th>Line</th><td>" + feature.properties.Line + "</td></tr>" + "<table>";
      layer.on({
        click: function (e) {
          $("#feature-title").html(feature.properties.Line);
          $("#feature-info").html(content);
          $("#featureModal").modal("show");

        }
      });
    }
    layer.on({
      mouseover: function (e) {
        var layer = e.target;
        layer.setStyle({
          weight: 3,
          color: "#00FFFF",
          opacity: 1
        });
        if (!L.Browser.ie && !L.Browser.opera) {
          layer.bringToFront();
        }
      },
      mouseout: function (e) {
        subwayLines.resetStyle(e.target);
      }
    });
  }
});
$.getJSON("uploads/subways.geojson", function (data) {
  subwayLines.addData(data);
});


/* Empty layer placeholder to add to layer control for listening when to add/remove theaters to markerClusters layer */
var theaterLayer = L.geoJson(null);
var theaters = L.geoJson(null, {
  pointToLayer: function (feature, latlng) {
    return L.circle(latlng,10, {
			color: 'gray',
			fillColor: 'red',
			fillOpacity: 0.9,
			title: feature.properties.NAME,
      			riseOnHover: true
		});  
    
    
    
    //L.marker(latlng, {
    //   icon: L.icon({
    //     iconUrl: "assets/img/theater.png",
    //     iconSize: [14, 14],
    //     iconAnchor: [12, 28],
    //     popupAnchor: [0, -25]
    //   }),
    //   //title: feature.properties.NAME,
    //   riseOnHover: true
    // });
 
    
  },
  onEachFeature: function (feature, layer) {
    if (feature.properties) {
      var content = "<table class='table table-striped table-bordered table-condensed'>" + "<tr><th>Name</th><td>" + feature.properties.NAME + "</td></tr>" + "<tr><th>Phone</th><td>" + feature.properties.TEL + "</td></tr>" + "<tr><th>Address</th><td>" + feature.properties.ADDRESS1 + "</td></tr>" + "<tr><th>Website</th><td><a class='url-break' href='" + feature.properties.URL + "' target='_blank'>" + feature.properties.URL + "</a></td></tr>" + "<table>";
      // var content = "<table class='table table-striped table-bordered table-condensed'>" + "<tr><th>Name</th><td>" + feature.properties.NAME + "</td></tr>" + "<tr><th>Phone</th><td>" + feature.properties.TEL + "</td></tr>" + "<tr><th>Address</th><td>" + feature.properties.ADDRESS1 + "</td></tr>" + "<tr><th>Original ad.</th><td><a class='url-break' href='" + feature.properties.URL + "' target='_blank'>" + feature.properties.URL + "</a></td></tr>" + "<table>";
      layer.on({
        click: function (e) {
          $("#feature-title").html(feature.properties.NAME);
          $("#feature-info").html(content);
          $("#featureModal").modal("show");
          highlight.clearLayers().addLayer(L.circleMarker([feature.geometry.coordinates[1], feature.geometry.coordinates[0]], highlightStyle));
        }
      });
      // $("#feature-list tbody").append('<tr class="feature-row" id="' + L.stamp(layer) + '" lat="' + layer.getLatLng().lat + '" lng="' + layer.getLatLng().lng + '"><td style="vertical-align: middle;"><img width="16" height="18" src="assets/img/theater.png"></td><td class="feature-name">' + layer.feature.properties.NAME + '</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>');
//       theaterSearch.push({
//         name: layer.feature.properties.NAME,
//         address: layer.feature.properties.ADDRESS1,
//         source: "Theaters",
//         id: L.stamp(layer),
//         lat: layer.feature.geometry.coordinates[1],
//         lng: layer.feature.geometry.coordinates[0]
//       });
    }
  }
});
$.getJSON("uploads/DOITT_THEATER_01_13SEPT2010.geojson", function (data) {
  theaters.addData(data);
  map.addLayer(theaterLayer);
});

/* Empty layer placeholder to add to layer control for listening when to add/remove museums to markerClusters layer */



var PriceLayer = L.geoJson(null);
var SizeLayer= L.geoJson(null);
var RoomsLayer= L.geoJson(null);
var NumberLayer= L.geoJson(null);
// console.log(selected_building_feature);
selected_building_feature  = 'Rent';
// console.log(selected_building_feature);
















var museumLayer = L.geoJson(null);


var museums = L.mapbox.featureLayer(null, {
// var museums = L.geoJson(null, {


// filter: function showCode(feature) {

//   var roommn = $('#roommn').val();
// var roommx = $('#roommx').val();
// 
//   
//   var r = parseInt(feature.properties['Rooms']) || 0
// 
//     return  (r>= roommn && r <= roommx) 
//   },



pointToLayer: function (feature, latlng) {
// var selected_building_feature = document.getElementById('buildingfeatureSelect').value;
// console.log(selected_building_feature);

// To keep it simple: always show numbers in marker cluster and price in the circle
selected_building_feature = 'Numbers';

if (selected_building_feature == 'Rent'){
    	var mnval=1000;
	var mxval=6000;
    	};
if (selected_building_feature == 'Living space'){
    	var mnval=50;
	var mxval=250;};
 if (selected_building_feature=='Rooms'){
 	var mnval=1;
	var mxval=6;};
if (selected_building_feature == 'Numbers'){
    var mnval=1000;
	var mxval=6000;
    	};			
var colorR = (mxval-mnval)/9;
var color = d3.scale.linear().domain(d3.range(mnval, mxval,colorR))
.range(colorspec)
.interpolate(d3.interpolateLab);


var building_f = parseInt(feature.properties[selected_building_feature]) || 0;

if (selected_building_feature=='Numbers'){
    	building_f = parseInt(feature.properties['Rent']) || 0;	
  };

var pcl = 'white';
if (building_f>0){
	pcl = color(building_f);
}

var filter_f = parseInt(feature.properties['Rent']) || 0;
var Mark = null; 
return  L.circle(latlng,15, {
			stroke: true,
			color: '#0B0B61',
			strokewidth : 0.01,
			fillColor: '#FFFFFF',
			fillColor: pcl,
			// fillColor: color(Math.floor((Math.random() * 10) + 1)),
			fillOpacity: .9,
			title: feature.properties.NAME,
      			riseOnHover: true
		}); 


 
  },
  onEachFeature: 
  function (feature, layer) {
    if (feature.properties) {
      var content = "<table class='table table-striped table-bordered table-condensed'>" + "<tr><th>Address</th><td>" + feature.properties.Address + "</td></tr>" + "<tr><th>Type</th><td>" + feature.properties.Type + "</td></tr>" + "<tr><th>Rooms</th><td>" + feature.properties.Rooms + "</td></tr>" +"<tr><th>Floor</th><td>" + feature.properties.Floor +"</td></tr>" + "<tr><th>Living space</th><td>" + feature.properties['Living space'] +"</td></tr>" + "<tr><th>Year built</th><td>" + feature.properties['Year built'] +"</td></tr>" + "<tr><th>Last renovation</th><td>" + feature.properties['Last renovation'] +"</td></tr>" +  "<tr><th>Rent</th><td>" + feature.properties.Rent +"</td></tr>" +"<tr><th>Available</th><td>" + feature.properties.Available +"</td></tr>" + "<tr><th>original ad.</th><td><a class='url-break' href='" + feature.properties.URL + "' target='_blank'>" + feature.properties.URL + "</a></td></tr>" + "<table>";
      // var content = "<table class='table table-striped table-bordered table-condensed'>" + "<tr><th>Name</th><td>" + feature.properties.NAME + "</td></tr>" + "<tr><th>Phone</th><td>" + feature.properties.TEL + "</td></tr>" + "<tr><th>Address</th><td>" + feature.properties.ADRESS1 + "</td></tr>" + "<tr><th>Original ad.</th><td><a class='url-break' href='" + feature.properties.URL + "' target='_blank'>" + feature.properties.URL + "</a></td></tr>" + "<table>";
      layer.on({
        click: function (e) {
          $("#feature-title").html(feature.properties.NAME);
          $("#feature-info").html(content);
          $("#featureModal").modal("show");
          highlight.clearLayers().addLayer(L.circleMarker([feature.geometry.coordinates[1], feature.geometry.coordinates[0]], highlightStyle));
        }
      });
     //  $("#feature-list tbody").append('<tr class="feature-row" id="' + L.stamp(layer) + '" lat="' + layer.getLatLng().lat + '" lng="' + layer.getLatLng().lng + '"><td style="vertical-align: middle;"><img width="16" height="18" src="assets/img/museum.png"></td><td class="feature-name">' + layer.feature.properties.NAME + '</td><td style="vertical-align: middle;"><i class="fa fa-chevron-right pull-right"></i></td></tr>');
//       museumSearch.push({
//         name: layer.feature.properties.NAME,
//         address: layer.feature.properties.ADRESS1,
//         source: "Museums",
//         id: L.stamp(layer),
//         lat: layer.feature.geometry.coordinates[1],
//         lng: layer.feature.geometry.coordinates[0]
//       });
    }
  }
});
// $.getJSON("uploads/rentals.geojson", function (data) {
//   museums.addData(data);
// });






L.mapbox.accessToken = 'pk.eyJ1IjoiZHVlcm1hZWwiLCJhIjoiNTRmNjc2MjYzN2Y0NDk5ZjRjMTM1MDA2YjQzYTY4NjUifQ.zdJRPPXa8WvpcMZC1_RAyw';
map = L.map("map", {
  zoom: 13,
  //tilt=25.0,
  //rotation=0.0,
  center: [ 47.3769, 8.5417], //Zurich
//   center: [ 46.8769, 8.5417], //A bit lower than Zurich
//   center: [46.2044, 6.1432], //Geneva
  // center: [40.702222, -73.979378],
  //
//   layers: [Light,labellayer,boroughs,mapboxbuilding, highlight],
  layers: [Hydda_Full,boroughs,KantonLayer],
  // layers: [mapquestOSM,boroughs, markerClusters, highlight],
  zoomControl: true,
  attributionControl: true
  
});
// layers: [                  ]

// var layer = markerClusters.getLayer(id);
// map.setView([layer.getLatLng().lat, layer.getLatLng().lng], 12);

// console.log(KantonLayer.getBounds());
// map.fitBounds(boroughs.getBounds());


// var geocoder = L.Control.geocoder({
//         defaultMarkGeocode: false
//     })
//     .on('markgeocode', function(e) {
//         var bbox = e.geocode.bbox;
//         var poly = L.polygon([
//              bbox.getSouthEast(),
//              bbox.getNorthEast(),
//              bbox.getNorthWest(),
//              bbox.getSouthWest()
//         ]).addTo(map);
//         map.fitBounds(poly.getBounds());
//     })
//     .addTo(map);
// 
// 


// var options = {
//   bounds: true,
//   position: 'topleft',
//   expanded: true
// };
// var geocoder = L.control.Geocoder('search-4SFpiQ2',options).addTo(map);


/* Layer control listeners that allow for a single markerClusters layer */
var markerClusters = new L.MarkerClusterGroup({
    	spiderfyOnMaxZoom: true,
    	showCoverageOnHover: true,
    	zoomToBoundsOnClick: true,
    	disableClusteringAtZoom: 17,
    	maxClusterRadius: 120,
    	iconCreateFunction: function (cluster) {
    				// var selected_building_feature = document.getElementById('buildingfeatureSelect').value;
    				selected_building_feature = 'Numbers';
    				if (selected_building_feature=='Rent'){
    					// selected_building_feature = 'Rent';
    					var mnval=1000;
					var mxval=7000;
					var mnval = 15.7; //rental/psqm
					var mxval = 41; //rental.psq
    				};
    				if (selected_building_feature=='Living space'){
    					// selected_building_feature = 'Living space';
    					var mnval=50;
					var mxval=250;
    				};
    				
    				if (selected_building_feature=='Rooms'){
    					var mnval=1;
					var mxval=7;
    				};
		
				if (selected_building_feature=='Numbers'){
    					var mnval=10;
						var mxval=100;
    				};
				
				var colorR = (mxval-mnval)/9;
				var color = d3.scale.linear().domain(d3.range(mnval, mxval,colorR))
				.range(colorspec)
				.interpolate(d3.interpolateLab);
				
				
				var markers = cluster.getAllChildMarkers();
				var n = 0;
				var l = 0;
				for (var i = 0; i < markers.length; i++) {
					if (selected_building_feature=='Rent'){
						var rent = parseInt(markers[i].feature.properties[selected_building_feature]) || 0;
						var size = parseInt(markers[i].feature.properties['Living space']) || 0;
						// var rooms = parseInt(markers[i].feature.properties.Rooms) || 0;
						if (rent*size>0){
							l+=1;
							n += rent/size;
						};
					};
					if (selected_building_feature=='Living space'){
						var building_f = parseInt(markers[i].feature.properties[selected_building_feature]) || 0;
						// var rooms = parseInt(markers[i].feature.properties.Rooms) || 0;
						if (building_f>0){
							l+=1;
							n += building_f;
						};	
					};
					if (selected_building_feature=='Rooms'){
						var building_f = parseInt(markers[i].feature.properties[selected_building_feature]) || 0;
						// var rooms = parseInt(markers[i].feature.properties.Rooms) || 0;
						if (building_f>0){
							l+=1;
							n += building_f;
						};	
					};
					if (selected_building_feature=='Numbers'){
						var building_f = 1;
						// var rooms = parseInt(markers[i].feature.properties.Rooms) || 0;
						if (building_f>0){
							l+=1;
							n += l;
						};
					
					};
					
					
				}
				if (l>=1){
					building_f = Math.round(n/l);
					f = Math.min(mxval, building_f);
					f = Math.max(mnval, f);
					pcl = color(f);
					if (selected_building_feature=='Numbers'){
						building_f = l;
						f = Math.min(mxval, building_f);
						f = Math.max(mnval, f);
						pcl = color(f);
					}
				}else{
				building_f = 'Null';	
// 				pcl = 'white';
				}
				
				// console.log(building_f);
				
				// console.log(pcl);
				return L.divIcon({html:'<div style="width:40px;height:40px;border-radius:40px;text-align:center;font-size:12px;text-align: center;padding-top: 10px;color:DimGray;background:' +
				pcl + '">' + building_f +  '</div>',iconSize: L.point(0, 0)});
				
// 				return L.divIcon({html:'<div style="width:40px;height:40px;border-radius:40px;text-align:center;font-size:12px;text-align: center;padding-top: 10px;color:DimGray;background:' +
// 				pcl + '">' + l +  '</div>',iconSize: L.point(0, 0)});
		
			},
});

markerClusters.id = 'markerClusters';
map.addLayer(markerClusters);



// map.addControl(L.mapbox.geocoderControl('mapbox.places',{
// autocomplete: true,position: 'topright'})
// );

// var osmGeocoder = new L.Control.OSMGeocoder();
// map.addControl(osmGeocoder);



    
 // var geocoder = L.Control.geocoder(
//  	{
//         defaultMarkGeocode: false,
//         collapsed: false,
//         showResultIcons: false}).addTo(map);
// 
// geocoder.markGeocode = function(result) {
//     var bbox = result.bbox;
//     var poly =  L.polygon([
//          bbox.getSouthEast(),
//          bbox.getNorthEast(),
//          bbox.getNorthWest(),
//          bbox.getSouthWest()
//     ]);
// 
// 
// // map.setView(poly.getBounds().getCenter(), 13);
// 
// 
// // map.setView(map.getCenter(), 7, {
// //   "animate": true,
// //   "pan": {
// //     "duration": 2
// //   }
// // });
// 
// // map.setView(poly.getBounds().getCenter(), 13, {
// //   "animate": true,
// //   "pan": {
// //     "duration": 2
// //   }
// // });
// 
// 
//     map.fitBounds(poly.getBounds());
// };
// 


  
// *** add osmBuilding layer ... ***
 //var osmb = new OSMBuildings(map).load();
 
 
 
 var wallColor, roofColor, shadows = true;

// function setStyle() {
  
//     //wallColor = color(Math.floor((Math.random() * 10) + 1));
//     //roofColor = color(Math.floor((Math.random() * 10) + 1));
    
//     wallColor = '#FFF5EE';
//     roofColor = '#F5F5F5';
    
//   osmb.style({ wallColor:wallColor, roofColor:roofColor });
// }

// osmb.click(setStyle())
 
 
 //var osmb = new OSMBuildings(map)
 // .each(function(feature) {
 // 	console.log(feature)
 //   var state = feature.tags.building;
 //   if (state === 'collapsed') {
 //     feature.tags['building:color'] = 'red';
 //     feature.tags['roof:color'] = 'red';
 //     feature.tags['height'] = 35; // increase height otherwise OSMB won't add perspective'
 //   } else if (state === 'damaged') {
 //     feature.tags['building:color'] = 'rgb(255, 140, 0)';
 //     feature.tags['roof:color'] = 'rgb(255, 140, 0)';
 //     feature.tags['height'] = 35; // increase height otherwise OSMB won't add perspective'
 //   } else {
 //     feature.tags['building:color'] = 'grey';
 //     feature.tags['roof:color'] = 'grey';
 //     feature.tags['height'] = 60; // add more height for untouched buildings
 //   }
 // })
 // .load();

// var osmb = new OSMBuildings({
//     //baseURL: './OSMBuildings',
//     minZoom: 14.5,
//     maxZoom: 22,
//     // showBackfaces: true, // render front and backsides of polygons. false increases performance, true might be needed for bad geometries
//     // fastMode: true,
//     // effects: ['shadows', 'outlines'],
//     effects: ['shadows'],
//     attribution: '© 3D <a href="https://osmbuildings.org/copyright/">OSM Buildings</a>'
//   }).addTo(map);




//Adding functionalities for osm buildings
//********************************************************


//Geeting IDs
//********************************************************
// function ajax(url, callback) {
//   var req = new XMLHttpRequest();
//   req.onreadystatechange = function() {
//     if (req.readyState !== 4) {
//       return;
//     }
//     if (!req.status || req.status < 200 || req.status > 299) {
//       return;
//     }

//     callback(JSON.parse(req.responseText));
//   };
//   req.open('GET', url);
//   req.send(null);
// }

// function formatJSON(json) {
//   var html = '';
//   for (var key in json) {
//     html += '<em>'+ key +'</em> '+ json[key] +'<br>';
//   }
//   return html;
// }

// var popup;
// osmb.click(function(e) {
//   popup = L.popup({ maxHeight:200, autoPanPaddingTopLeft:[50,50] })
//     .setLatLng(L.latLng(e.lat, e.lon))
//     .setContent('<b>OSM ID '+ e.feature +'</b>')
//     .openOn(map);
// 	console.log(e);
//   var url = 'https://data.osmbuildings.org/0.2/anonymous/feature/'+ e.feature +'.json';
//   ajax(url, function(json) {
//     var content = '<b>OSM ID '+ e.feature +'</b>';
//     for (var i = 0; i < json.features.length; i++) {
//       content += '<br><em>OSM Part ID</em> '+ json.features[i].id;
//       content += '<br>'+ formatJSON(json.features[i].properties.tags);
//     }
//     popup.setContent(content).openOn(map);
//   });
// });








// function setStyle(el, type) {
//   if (type === 'wallColor') {
//   	walColor = color(Math.floor((Math.random() * 10) + 1));
//     //wallColor = el.style.backgroundColor;
//   }
//   if (type === 'roofColor') {
//   	roofColor = color(Math.floor((Math.random() * 10) + 1)); 
//     //roofColor = el.style.backgroundColor;
//   }
//   if (type === 'shadows') {
//     //shadows = el.checked;
//     shadows = true;
//   }

//   osmb.style({ wallColor:wallColor, roofColor:roofColor, shadows:shadows });
// };




// L.control.geocoder('search-4SFpiQ2').addTo(map);



map.on("overlayadd", function(e) {
  if (e.layer === theaterLayer) {
    markerClusters.addLayer(theaters);
  }
  
  if (e.layer === PriceLayer) {
  	selected_building_feature = 'Rent';
  }
  
  if (e.layer === SizeLayer) {
  	selected_building_feature = 'Living space';
  }
  
  if (e.layer === RoomsLayer) {
  	selected_building_feature = 'Rooms';
  }
	
if (e.layer === NumberLayer) {
  	selected_building_feature = 'Numbers';
  }
  
  
  if (e.layer === mapboxbuilding) {
  	
//   	map.setView(map.getCenter(), 13, {

//   	map.setView([ 47.3769, 8.5417], 13, {
//   "animate": true,
//   "pan": {
//     "duration": 2
//   }
// });


map.setView(map.getCenter(), 14);

  }
  
  

	
  if (e.layer === museumLayer) {
  	museumLayer_ticked = true;
    //markerClusters.removeLayer(museums);
  		// map.removeLayer(markerClusters);
  		// this.addLayer(markerClusters);
markerClusters.addLayer(museums);
  		// console.log(selected_building_feature);
  		// console.log(museumLayer);
  }
  
  //if (e.layer === PriceLayer & map.hasLayer(museumLayer) ) {
  //		selected_building_feature = 'Rent';
  //		markerClusters.removeLayer(museums);
  //		map.removeLayer(markerClusters);
  //		map.addLayer(markerClusters);
  //		markerClusters.addLayer(museums);
  //		console.log('Yes Rent');
  //}
  
  //if (e.layer === SizeLayer & map.hasLayer(museumLayer) ) {
  //		selected_building_feature = 'Living space';
  //		markerClusters.removeLayer(museums);
  //		map.removeLayer(markerClusters);
  //		map.addLayer(markerClusters);
  //		markerClusters.addLayer(museums);
  //		console.log('Yes Size');
  //}
  
  //if (e.layer === RoomsLayer & map.hasLayer(museumLayer) ) {
  //		selected_building_feature = 'Rooms';
  //		markerClusters.removeLayer(museums);
  //		map.removeLayer(markerClusters);
  //		map.addLayer(markerClusters);
  //		markerClusters.addLayer(museums);
  //		console.log('Yes Rooms');
  //}
  //console.log(selected_building_feature);
});

map.on("overlayremove", function(e) {
  if (e.layer === theaterLayer) {
    markerClusters.removeLayer(theaters);
    // syncSidebar();
  }
  if (e.layer === museumLayer) {
  	museumLayer_ticked = false;
markerClusters.removeLayer(museums);
  	// this.removeLayer(markerClusters);
  	// console.log(museumLayer);
  	
  	
    // syncSidebar();
  }
  //if (e.layer === PriceLayer ) {
  //	// this.removeLayer(museumLayer);
  //	this.removeLayer(museumLayer);
  //	console.log(this.hasLayer(museumLayer));
  //	// museumLayer.checked = false;
  //	// map.addLayer(museumLayer);
  ////	markerClusters.removeLayer(museums);
  ////	map.removeLayer(markerClusters);
  //	// console.log(museumLayer);
  	
  //}
  
  //if (e.layer === SizeLayer ) {
  //	this.removeLayer(museumLayer);
  //	// this.removeLayer(museumLayer);
  //	// museumLayer.checked = false;
  //	// map.addLayer(museumLayer);
  ////	markerClusters.removeLayer(museums);
  ////	map.removeLayer(markerClusters);
  
  //}
  
  //if (e.layer === RoomsLayer ) {
  //	this.removeLayer(museumLayer);
  //	// this.removeLayer(museumLayer);
  //	// museumLayer.checked = false;
  //	// map.addLayer(museumLayer);
  ////	markerClusters.removeLayer(museums);
  ////	map.removeLayer(markerClusters);
  	
  //}
  
});

/* Filter sidebar feature list to only show features in current map bounds */
map.on("moveend", function (e) {
  // syncSidebar();
});

/* Clear feature highlight when map is clicked */
map.on("click", function(e) {
  highlight.clearLayers();
});

/* Attribution control */
function updateAttribution(e) {
  $.each(map._layers, function(index, layer) {
    if (layer.getAttribution) {
      $("#attribution").html((layer.getAttribution()));
    }
  });
}
map.on("layeradd", updateAttribution);
map.on("layerremove", updateAttribution);

var attributionControl = L.control({
  position: "bottomright"
});

var legend = L.control({position: 'bottomleft'});

legend.onAdd = function (map) {

    var div = L.DomUtil.create('div', 'info legend'),
        grades = [0,16, 18, 20,22, 23,26, 32, 40],
        // colorspec1 = colorbrewer.YlOrRd[9];
        colorR1 = 1,
	color1 = d3.scale.linear().domain(d3.range(1, 9,colorR1))
		.range(colorspec)
		.interpolate(d3.interpolateLab),
        
        labels = ['<strong> Rental Price p.sq.m </strong>'];
        
	div.innerHTML += labels +'<br>';
    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < grades.length; i++) {
    	// console.log(color1(i+1));
        div.innerHTML +=
            '<i style="background:' + color1(i+1) + '"></i> ' +
            grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
    }

    return div;
};

legend.addTo(map);


// var legend = L.control({position: 'topleft'});  
// legend.onAdd = function (map) {
//     var div = L.DomUtil.create('div', 'info legend'),
//         grades = [50, 100, 150, 200, 250, 300],
//         labels = ['<strong> THE TITLE </strong>'],
//         from, to;

//     for (var i = 0; i < grades.length; i++) {
//         from = grades [i];
//         to = grades[i+1]-1;

//     labels.push(
//         '<i style="background:' + getColor(from + 1) + '"></i> ' +
//         from + (to ? '&ndash;' + to : '+'));
//         }
//         div.innerHTML = labels.join('<br>');
//         return div;


//         };



attributionControl.onAdd = function (map) {
  var div = L.DomUtil.create("div", "leaflet-control-attribution");
  div.innerHTML = "<span class='hidden-xs'>Developed by <a href='http://vahidmoosavi.com'>@sevamoo</a> | </span><a href='#' onclick='$(\"#attributionModal\").modal(\"show\"); return false;'>Attribution</a>";
  return div;
};
map.addControl(attributionControl);

var zoomControl = L.control.zoom({
  position: "bottomright"
}).addTo(map);





/* GPS enabled geolocation control set to follow the user's location */
// var locateControl = L.control.locate({
//   position: "bottomright",
//   drawCircle: true,
//   follow: true,
//   setView: true,
//   keepCurrentZoomLevel: true,
//   markerStyle: {
//     weight: 1,
//     opacity: 0.8,
//     fillOpacity: 0.8
//   },
//   circleStyle: {
//     weight: 1,
//     clickable: false
//   },
//   icon: "fa fa-location-arrow",
//   metric: false,
//   strings: {
//     title: "My location",
//     popup: "You are within {distance} {unit} from this point",
//     outsideMapBoundsMsg: "You seem located outside the boundaries of the map"
//   },
//   locateOptions: {
//     maxZoom: 18,
//     watch: true,
//     enableHighAccuracy: true,
//     maximumAge: 10000,
//     timeout: 10000
//   }
// }).addTo(map);

/* Larger screens get expanded layer control and visible sidebar */
if (document.body.clientWidth <= 767) {
  var isCollapsed = true;
} else {
  var isCollapsed = false;
}

var baseLayers = {
  //"Street Map": mapquestOSM,
 //  "G": geoadminlayer,
  "Hydda":Hydda_Full,
//   "Basic": Basic,
  "Light": Light,
//   "Topo": Topo,
  
  //"FreeMapSK":FreeMapSK,
  //"OpenMapSurfer_Grayscale":OpenMapSurfer_Grayscale,
  "OpenStreetMap_DE":OpenStreetMap_DE,
//   "OpenStreetMap_BlackAndWhite":OpenStreetMap_BlackAndWhite,
  "OpenStreetMap_Mapnik":OpenStreetMap_Mapnik,
  //"OpenMapSurfer_Roads":OpenMapSurfer_Roads,
  //"Hydda_Base" : Hydda_Base,
  "watercolor": Stamen_Watercolor,
  
  "Terrain": Stamen_Terrain,
  //"Aerial Imagery": mapquestHYB,
  "Stamen Toner": Stamen_Toner,
  "Tangram 3d" : TangramLayer
  // "Stamen": baseLayer
};



var groupedOverlays = {
//  "Reference": {
//      "Kantons": KantonLayer,
//      // "PLZ": KantonLayer,
// //      "Kantons": mapboxSwiss_boundaries_Kantons,
//      'ZIP Level Price Estimates': mapboxSwiss_boundaries_PLZ,
//      //"3D Building": osmb,
//      "Building level rental index (chf/m^2)": mapboxbuilding,
//      "Public transport accessibility": mapboxPub_trans_Quality,
//      "noise level":mapboxPub_noise,
//   },
  "Listings for": {
    "Rent": museumLayer
    //"Buy": theaterLayer
  },
 //  "Based on": {
//      "Price/sq.m": PriceLayer,
//      "Number of Rooms": RoomsLayer,
//      "Size (sq.m)" : SizeLayer,
// 	 "Number of listings" :NumberLayer
//      
//   //   "Subway Lines": subwayLines
//   }
};

var options = {
  // Make the "Landmarks" group exclusive (use radio inputs)
  exclusiveGroups: ["Based on"],
  collapsed: true,
  // Show a checkbox next to non-exclusive group labels for toggling all
  groupCheckboxes: false
};



// var layerControl = L.control.groupedLayers(baseLayers, groupedOverlays, options).addTo(map);

// var layerControl = L.control.groupedLayers(baseLayers, groupedOverlays,options).addTo(map);




// var stateChangingButton = L.easyButton({
// 	position: 'topright',      // inherited from L.Control -- the corner it goes in
//   	type: 'replace',          // set to animate when you're comfy with css
//   	leafletClasses: true,     // use leaflet classes to style the button?
//     states: [{
//             stateName: 'Show-Results',   // name the state
//             //icon:      '<big>glyphicon-ok-sign</big>',          // and define its properties
//         
//         	icon: '<span class="fa fa-home fa-10" aria-hidden="true"></span> Show',
//             //icon: '<span class="glyphicon glyphicon-star" aria-hidden="true"></span> Show',
//             //icon:      '<span class="star">&starf;</span>',          // and define its properties
//             title:     'Show Results', // like its title
//             onClick: function(btn, map) {  // and its callback
//                 if (museumLayer_ticked){
//                 	map.addLayer(markerClusters);
//   			markerClusters.addLayer(museums);
//   			// console.log(selected_building_feature);
//                 }
//                 
//                 
//                 
//                 
//                 // map.setView([46.25,-121.8],10);
//                 btn.state('Hide-Results'); // change state on click!
//             }
//         }, {
//             stateName: 'Hide-Results',
//             //icon: '<big>glyphicon-remove-sign</big>',
//             icon: '<span class="glyphicon glyphicon-remove-sign" aria-hidden="true"></span> Show',
// // 	   icon: '<span class="btn btn-info btn-lg" aria-hidden="true"></span> Show',	
// 		
// //             icon: '<big>-</big>',
//             //icon:      'fa fa-trash-o fa-lg',
//             title:     'Hide Results',
//             onClick: function(btn, map) {
//             	
//             	 markerClusters.removeLayer(museums);
//   		map.removeLayer(markerClusters);
//             	
//                 // map.setView([42.3748204,-71.1161913],16);
//                 btn.state('Show-Results');
//             }
//     }]
// });
// var buttons = [ stateChangingButton,
//                 stateChangingButton,
//                 stateChangingButton];

// build a toolbar with them
// L.easyBar(buttons).addTo(map);
// stateChangingButton.addTo(map);

// var buttons = [ stateChangingButton,
//                 stateChangingButton];

// build a toolbar with them
// L.easyBar(buttons).addTo(map);


// http://www.coffeegnome.net/creating-contr…button-leaflet
// var customControl =  L.Control.extend({
// 
//   options: {
//     position: 'topright'
//   },
// 
//   onAdd: function (map) {
//     var container = L.DomUtil.create('input');
//     container.type="button";
//     container.title="No cat";
//     container.value = "Test";
// 
//     container.style.backgroundColor = 'white';     
//     //container.style.backgroundImage = "url(http://t1.gstatic.com/images?q=tbn:ANd9GcR6FCUMW5bPn8C4PbKak2BJQQsmC-K9-mbYBeFZm1ZM2w2GRy40Ew)";
//     container.style.backgroundSize = "30px 30px";
//     container.style.width = '30px';
//     container.style.height = '30px';
//     
//     container.onmouseover = function(){
//       container.style.backgroundColor = 'pink'; 
//     }
//     container.onmouseout = function(){
//       container.style.backgroundColor = 'white'; 
//     }
// 
//     container.onclick = function(map){
// // 	if (museumLayer_ticked){
// //                 	L.addLayer(markerClusters);
// //   			markerClusters.addLayer(museums);
// //   			// console.log(selected_building_feature);
// //                 };
//     }
// 
//     return container;
//   }
// });
// map.addControl(new customControl());
// var map;




// L.Control.CustomControl = L.Control.extend({
// 	setPosition: function(position) {
// 		var controls = this._controls;

// 		if(controls) {
// 			this.remove();
// 		}

// 		this.options.position = 'topright';

// 		if(controls) {
// 			controls.addCustomControl(this);
// 		}

// 		return this;
// 	},

// 	addTo: function(map, outercontainer) {
// 		this.remove();
// 		this._map = map;
// 		this._container = this.onAdd(map, outercontainer);

// 		L.DomUtil.addClass(this._container, 'leaflet-custom-control');

// 		var child;

// 		if(this.options.position && (child = outercontainer.childNodes[this.options.position])) {
// 			outercontainer.insertBefore(this._container, child);
// 		} else {
// 			outercontainer.appendChild(this._container);
// 		}

// 		return this;
// 	},

// 	remove: function() {
// 		if(!this._map) {
// 			return this;
// 		}

// 		L.DomUtil.remove(this._container);

// 		if(this.onRemove) {
// 			this.onRemove(this._map);
// 		}

// 		this._map = null;

// 		return this;
// 	}
// });

// L.Map.include({
// 	addCustomControl: function(control, addTo) {
// 		control.addTo(this, addTo || this._controlContainer);
// 		return this;
// 	}
// });

// map.addCustomControl(new L.Control.CustomControl(), L.DomUtil.get('filter'));






/* Highlight search box text on click */
$("#searchbox").click(function () {
  $(this).select();
});

/* Prevent hitting enter from refreshing the page */
$("#searchbox").keypress(function (e) {
  if (e.which == 13) {
    e.preventDefault();
  }
});

$("#featureModal").on("hidden.bs.modal", function (e) {
  $(document).on("mouseout", ".feature-row", clearHighlight);
});

/* Typeahead search functionality */
$(document).one("ajaxStop", function () {
  $("#loading").hide();
  sizeLayerControl();
  /* Fit map to boroughs bounds */
   //map.fitBounds(boroughs.getBounds());
  // featureList = new List("features", {valueNames: ["feature-name"]});
  // featureList.sort("feature-name", {order:"asc"});

  var boroughsBH = new Bloodhound({
    name: "Boroughs",
    datumTokenizer: function (d) {
      return Bloodhound.tokenizers.whitespace(d.name);
    },
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    local: boroughSearch,
    limit: 10
  });

  var theatersBH = new Bloodhound({
    name: "Theaters",
    datumTokenizer: function (d) {
      return Bloodhound.tokenizers.whitespace(d.name);
    },
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    local: theaterSearch,
    limit: 10
  });

  var museumsBH = new Bloodhound({
    name: "Museums",
    datumTokenizer: function (d) {
      return Bloodhound.tokenizers.whitespace(d.name);
    },
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    local: museumSearch,
    limit: 10
  });

  var geonamesBH = new Bloodhound({
    name: "GeoNames",
    datumTokenizer: function (d) {
      return Bloodhound.tokenizers.whitespace(d.name);
    },
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    remote: {
      url: "http://api.geonames.org/searchJSON?username=bootleaf&featureClass=P&maxRows=5&countryCode=US&name_startsWith=%QUERY",
      filter: function (data) {
        return $.map(data.geonames, function (result) {
          return {
            name: result.name + ", " + result.adminCode1,
            lat: result.lat,
            lng: result.lng,
            source: "GeoNames"
          };
        });
      },
      ajax: {
        beforeSend: function (jqXhr, settings) {
          settings.url += "&east=" + map.getBounds().getEast() + "&west=" + map.getBounds().getWest() + "&north=" + map.getBounds().getNorth() + "&south=" + map.getBounds().getSouth();
          $("#searchicon").removeClass("fa-search").addClass("fa-refresh fa-spin");
        },
        complete: function (jqXHR, status) {
          $('#searchicon').removeClass("fa-refresh fa-spin").addClass("fa-search");
        }
      }
    },
    limit: 10
  });
  boroughsBH.initialize();
  theatersBH.initialize();
  museumsBH.initialize();
  geonamesBH.initialize();

  /* instantiate the typeahead UI */
  $("#searchbox").typeahead({
    minLength: 3,
    highlight: true,
    hint: false
  }, {
    name: "Boroughs",
    displayKey: "name",
    source: boroughsBH.ttAdapter(),
    templates: {
      header: "<h4 class='typeahead-header'>Boroughs</h4>"
    }
  }, {
    name: "Theaters",
    displayKey: "name",
    source: theatersBH.ttAdapter(),
    templates: {
      header: "<h4 class='typeahead-header'><img src='assets/img/theater.png' width='16' height='16'>&nbsp;Theaters</h4>",
      suggestion: Handlebars.compile(["{{name}}<br>&nbsp;<small>{{address}}</small>"].join(""))
    }
  }, {
    name: "Museums",
    displayKey: "name",
    source: museumsBH.ttAdapter(),
    templates: {
      header: "<h4 class='typeahead-header'><img src='assets/img/museum.png' width='16' height='16'>&nbsp;Rentals</h4>",
      suggestion: Handlebars.compile(["{{name}}<br>&nbsp;<small>{{address}}</small>"].join(""))
    }
  }, {
    name: "GeoNames",
    displayKey: "name",
    source: geonamesBH.ttAdapter(),
    templates: {
      header: "<h4 class='typeahead-header'><img src='assets/img/globe.png' width='25' height='25'>&nbsp;GeoNames</h4>"
    }
  }).on("typeahead:selected", function (obj, datum) {
    if (datum.source === "Boroughs") {
      //map.fitBounds(datum.bounds);
    }
    if (datum.source === "Theaters") {
      if (!map.hasLayer(theaterLayer)) {
        map.addLayer(theaterLayer);
      }
      map.setView([datum.lat, datum.lng], 17);
      if (map._layers[datum.id]) {
        map._layers[datum.id].fire("click");
      }
    }
    if (datum.source === "Museums") {
      if (!map.hasLayer(museumLayer)) {
        map.addLayer(museumLayer);
      }
      map.setView([datum.lat, datum.lng], 17);
      if (map._layers[datum.id]) {
        map._layers[datum.id].fire("click");
      }
    }
    if (datum.source === "GeoNames") {
      map.setView([datum.lat, datum.lng], 14);
    }
    if ($(".navbar-collapse").height() > 50) {
      $(".navbar-collapse").collapse("hide");
    }
  }).on("typeahead:opened", function () {
    $(".navbar-collapse.in").css("max-height", $(document).height() - $(".navbar-header").height());
    $(".navbar-collapse.in").css("height", $(document).height() - $(".navbar-header").height());
  }).on("typeahead:closed", function () {
    $(".navbar-collapse.in").css("max-height", "");
    $(".navbar-collapse.in").css("height", "");
  });
  $(".twitter-typeahead").css("position", "static");
  $(".twitter-typeahead").css("display", "block");
});

// Leaflet patch to make layer control scrollable on touch browsers
// var container = $(".leaflet-control-layers")[0];
// if (!L.Browser.touch) {
//   L.DomEvent
//   .disableClickPropagation(container)
//   .disableScrollPropagation(container);
// } else {
//   L.DomEvent.disableClickPropagation(container);
// }
// 



                    	


// from this mapbox example https://www.mapbox.com/mapbox-gl-js/example/color-switcher/
var swatches = document.getElementById('swatches');
// var layer = document.getElementById('layer');

var showdlayerbtn = document.getElementById('showdlayer-btn');






    
		
  

var geojsonLayer = omnivore.geojson('uploads/rentals.geojson', null, L.mapbox.featureLayer())
// var geojsonLayer = omnivore.geojson('data/rentals.geojson', null, museums)
.on("ready", function() {
  
    attachPopups();
    
   //  Now we can transfer single layers / markers to the marker cluster group.
//     markers.addLayer(geojsonLayer); // use the global variable markers.
//     mymap.fitBounds(geojsonLayer.getBounds());
//     markers.addTo(mymap);
  });



function update_overlay(){
var datalayer = document.getElementById('dlayer');

if (datalayer.value == 'mapboxPub_trans_Quality'){
map.addLayer(mapboxPub_trans_Quality);
map.setZoom(13);
}
if (datalayer.value == 'mapboxPub_noise'){
map.addLayer(mapboxPub_noise);
map.setZoom(13);
}
if (datalayer.value == 'None'){
map.removeLayer(mapboxPub_trans_Quality);
map.removeLayer(mapboxPub_noise);
map.removeLayer(mapboxSwiss_boundaries_PLZ);
map.removeLayer(mapboxbuilding);
}
if (datalayer.value == 'mapboxSwiss_boundaries_PLZ'){
map.addLayer(mapboxSwiss_boundaries_PLZ);
map.setZoom(8);
}
if (datalayer.value == 'mapboxbuilding'){
map.addLayer(mapboxbuilding);
map.setZoom(13);
}


}
	

function update_baselayer(){
var blayer = document.getElementById('blayer');

if (blayer.value == 'Hydda'){
		map.addLayer(Hydda_Full);
	
		}
		
		if (blayer.value == 'Light'){
				map.addLayer(Light);
		}
		
		if (blayer.value == 'watercolor'){
		map.addLayer(Stamen_Watercolor);

		}
		
		if (blayer.value == 'Stamen Toner'){
		map.addLayer(Stamen_Toner);
		
		}
		

} 

function update_listlayer(){
var listlayer = document.getElementById('listlayer');
if (listlayer.value == 'Rent'){
// 		map.addLayer(museumLayer);
		// map.addLayer(markerClusters);
//   		markerClusters.addLayer(museums);
  		
  		
  
  
    
    // Now we can transfer single layers / markers to the marker cluster group.
    
    markerClusters.addLayer(geojsonLayer); // use the global variable markers.
    map.addLayer(markerClusters);
    // mymap.fitBounds(geojsonLayer.getBounds());
//     markers.addTo(mymap);
  		
  		
	
		}

}
    
function update_necessarylayer(){
map.addLayer(KantonLayer);
map.addLayer(boroughs);

}



var blayer = document.getElementById('blayer');
blayer.addEventListener('change', function() {
var mc = false
	map.eachLayer(function (layer) {
    
	if (layer.id == 'markerClusters'){
	mc =true
	}
	map.removeLayer(layer);
	
	});
	
	update_necessarylayer();
	update_baselayer();
	update_overlay();
	
	if (mc){
	map.addLayer(markerClusters);
	}
	
// 	update_listlayer();
		
		
		// redraw_overlay()
		    
		    
		    
		    });
    
 
 
  
  
  
var datalayer = document.getElementById('dlayer');
datalayer.addEventListener('change', function() {
// var datalayer = document.getElementById('dlayer');
var mc = false;
map.eachLayer(function (layer) {
	
	if (layer.id == 'markerClusters'){
	mc =true
	}
	map.removeLayer(layer);
    
});
	
	update_necessarylayer();
	update_baselayer();
	update_overlay();
	if (mc){
	map.addLayer(markerClusters);
	}
	
// 	update_listlayer();
	
	

		
    });    
    



// var listlayer = document.getElementById('listlayer');
// listlayer.addEventListener('change', function() {
// 
// 
// map.eachLayer(function (layer) {
// // 	console.log(layer);
//     map.removeLayer(layer);
// });
// 	
// 	update_necessarylayer();
// 	update_baselayer();
// 	update_overlay();
// 	update_listlayer();
// 	
// 
// 		
//     });    
    

var listing_on_map = false
var filterbutt = document.getElementById('sort-btn');
filterbutt.addEventListener('click', function() {
	document.getElementById('sort-btn').innerHTML = 'Loading...';
	// get the value of the search input field
  var roommn = parseInt($('#roommn').val()) || 0;
  
  var roommx = parseInt($('#roommx').val()) || 20;
  console.log(roommn);
  console.log(roommx);
  
  var pricemn = parseInt($('#pricemn').val()) || 0;
  var pricemx = parseInt($('#pricemx').val()) || 20000000;
  
  console.log(pricemn);
  console.log(pricemx);
  
  var listlayer = document.getElementById('listlayer');
	
	if (listlayer.value == 'Buy'){
	
	
  map.removeLayer(markerClusters);	
  
	
	}
	
	if (listlayer.value == 'Rent'){
	
	
  map.removeLayer(markerClusters);	
  geojsonLayer.setFilter(showCode); // this will "hide" markers that do not match the filter.
  attachPopups();
  
  // replace the content of marker cluster group.
  markerClusters.clearLayers();
  markerClusters.addLayer(geojsonLayer);
 map.addLayer(markerClusters);	
  // here we're simply comparing the 'Code' property of each marker
  // to the search string, seeing whether the former contains the latter.
 
  function showCode(feature) {
  var r = parseInt(feature.properties['Rooms']) || 0
  var p = parseInt(feature.properties['Rent']) || 0
//   console.log(v> parseInt(searchString));
    return  (r>= roommn && r <= roommx && p >= pricemn && p <= pricemx) 
  }
 
	
	
	
	}
	
 listing_on_map = true;

document.getElementById('sort-btn').innerHTML = 'Show';
		    
		    });
  
 
 
 
 function attachPopups() {
	
	 geojsonLayer.eachLayer(
	 function (layer) {
	 // console.log(layer);
// 	 https://maps.googleapis.com/maps/api/streetview?size=400x400&location=40.720032,-73.988354&fov=90&heading=235&pitch=10&key=AIzaSyAhKXxfn3qF1hOfRhHVHHMxofmbF5SooK8
    
    if (layer.feature.properties) {
      var content = "<table class='table table-striped table-bordered table-condensed'>" + "<tr><th>Address</th><td>" + layer.feature.properties.Address + "</td></tr>" + "<tr><th>Type</th><td>" + layer.feature.properties.Type + "</td></tr>" + "<tr><th>Rooms</th><td>" + layer.feature.properties.Rooms + "</td></tr>" +"<tr><th>Floor</th><td>" + layer.feature.properties.Floor +"</td></tr>" + "<tr><th>Living space</th><td>" + layer.feature.properties['Living space'] +"</td></tr>" + "<tr><th>Year built</th><td>" + layer.feature.properties['Year built'] +"</td></tr>" + "<tr><th>Last renovation</th><td>" + layer.feature.properties['Last renovation'] +"</td></tr>" +  "<tr><th>Rent</th><td>" + layer.feature.properties.Rent +"</td></tr>" +"<tr><th>Available</th><td>" + layer.feature.properties.Available +"</td></tr>" + "<tr><th>original ad.</th><td><a class='url-break' href='" + layer.feature.properties.URL + "' target='_blank'>" + layer.feature.properties.URL + "</a></td></tr>" + "<table>";   
      layer.on({
        click: function (e) {
          $("#feature-title").html(layer.feature.properties.NAME);
          $("#feature-info").html(content);
          $("#featureModal").modal("show");
          highlight.clearLayers().addLayer(L.circleMarker([layer.feature.geometry.coordinates[1], layer.feature.geometry.coordinates[0]], highlightStyle));
        }
      });

    }
 
  }
 	
);
	
	

}
 

 
 

// datalayer.addEventListener('change', function() {
// console.log(datalayer.value);
// //         map.setPaintProperty(layer.value, 'fill-color', color);
//     });

var colors = [
    '#ffffcc',
    '#a1dab4',
    '#41b6c4',
    '#2c7fb8',
    '#253494',
    '#fed976',
    '#feb24c',
    '#fd8d3c',
    '#f03b20',
    '#bd0026'
];

// colors.forEach(function(color) {
//     var swatch = document.createElement('button');
//     swatch.style.backgroundColor = color;
//     console.log(layer.value);
//     // swatch.addEventListener('click', function() {
// //         map.setPaintProperty(layer.value, 'fill-color', color);
// //     });
//     swatches.appendChild(swatch);
// });
// 












