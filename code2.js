gdjs._1082_1086_1085_1077_1094_32_1089_1094_1077_1085_1099Code = {};
gdjs._1082_1086_1085_1077_1094_32_1089_1094_1077_1085_1099Code.localVariables = [];
gdjs._1082_1086_1085_1077_1094_32_1089_1094_1077_1085_1099Code.idToCallbackMap = new Map();
gdjs._1082_1086_1085_1077_1094_32_1089_1094_1077_1085_1099Code.GDNewSpriteObjects1= [];
gdjs._1082_1086_1085_1077_1094_32_1089_1094_1077_1085_1099Code.GDNewSpriteObjects2= [];
gdjs._1082_1086_1085_1077_1094_32_1089_1094_1077_1085_1099Code.GDFINALSCOR2Objects1= [];
gdjs._1082_1086_1085_1077_1094_32_1089_1094_1077_1085_1099Code.GDFINALSCOR2Objects2= [];
gdjs._1082_1086_1085_1077_1094_32_1089_1094_1077_1085_1099Code.GDRedButtonWithGoldFrameObjects1= [];
gdjs._1082_1086_1085_1077_1094_32_1089_1094_1077_1085_1099Code.GDRedButtonWithGoldFrameObjects2= [];


gdjs._1082_1086_1085_1077_1094_32_1089_1094_1077_1085_1099Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("FINALSCOR2"), gdjs._1082_1086_1085_1077_1094_32_1089_1094_1077_1085_1099Code.GDFINALSCOR2Objects1);
{for(var i = 0, len = gdjs._1082_1086_1085_1077_1094_32_1089_1094_1077_1085_1099Code.GDFINALSCOR2Objects1.length ;i < len;++i) {
    gdjs._1082_1086_1085_1077_1094_32_1089_1094_1077_1085_1099Code.GDFINALSCOR2Objects1[i].getBehavior("Text").setText("Final Score: " + runtimeScene.getGame().getVariables().getFromIndex(0).getAsString());
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "GameOver.mp3", false, 35, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("RedButtonWithGoldFrame"), gdjs._1082_1086_1085_1077_1094_32_1089_1094_1077_1085_1099Code.GDRedButtonWithGoldFrameObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs._1082_1086_1085_1077_1094_32_1089_1094_1077_1085_1099Code.GDRedButtonWithGoldFrameObjects1.length;i<l;++i) {
    if ( gdjs._1082_1086_1085_1077_1094_32_1089_1094_1077_1085_1099Code.GDRedButtonWithGoldFrameObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs._1082_1086_1085_1077_1094_32_1089_1094_1077_1085_1099Code.GDRedButtonWithGoldFrameObjects1[k] = gdjs._1082_1086_1085_1077_1094_32_1089_1094_1077_1085_1099Code.GDRedButtonWithGoldFrameObjects1[i];
        ++k;
    }
}
gdjs._1082_1086_1085_1077_1094_32_1089_1094_1077_1085_1099Code.GDRedButtonWithGoldFrameObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Игра", false);
}
}

}


};

gdjs._1082_1086_1085_1077_1094_32_1089_1094_1077_1085_1099Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._1082_1086_1085_1077_1094_32_1089_1094_1077_1085_1099Code.GDNewSpriteObjects1.length = 0;
gdjs._1082_1086_1085_1077_1094_32_1089_1094_1077_1085_1099Code.GDNewSpriteObjects2.length = 0;
gdjs._1082_1086_1085_1077_1094_32_1089_1094_1077_1085_1099Code.GDFINALSCOR2Objects1.length = 0;
gdjs._1082_1086_1085_1077_1094_32_1089_1094_1077_1085_1099Code.GDFINALSCOR2Objects2.length = 0;
gdjs._1082_1086_1085_1077_1094_32_1089_1094_1077_1085_1099Code.GDRedButtonWithGoldFrameObjects1.length = 0;
gdjs._1082_1086_1085_1077_1094_32_1089_1094_1077_1085_1099Code.GDRedButtonWithGoldFrameObjects2.length = 0;

gdjs._1082_1086_1085_1077_1094_32_1089_1094_1077_1085_1099Code.eventsList0(runtimeScene);
gdjs._1082_1086_1085_1077_1094_32_1089_1094_1077_1085_1099Code.GDNewSpriteObjects1.length = 0;
gdjs._1082_1086_1085_1077_1094_32_1089_1094_1077_1085_1099Code.GDNewSpriteObjects2.length = 0;
gdjs._1082_1086_1085_1077_1094_32_1089_1094_1077_1085_1099Code.GDFINALSCOR2Objects1.length = 0;
gdjs._1082_1086_1085_1077_1094_32_1089_1094_1077_1085_1099Code.GDFINALSCOR2Objects2.length = 0;
gdjs._1082_1086_1085_1077_1094_32_1089_1094_1077_1085_1099Code.GDRedButtonWithGoldFrameObjects1.length = 0;
gdjs._1082_1086_1085_1077_1094_32_1089_1094_1077_1085_1099Code.GDRedButtonWithGoldFrameObjects2.length = 0;


return;

}

gdjs['_1082_1086_1085_1077_1094_32_1089_1094_1077_1085_1099Code'] = gdjs._1082_1086_1085_1077_1094_32_1089_1094_1077_1085_1099Code;
