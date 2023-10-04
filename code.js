var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["e4cc6f26-4020-4c62-9fb1-d6ce43021730","e577a2a0-9be4-41f3-8389-1cbbaabe778e"],"propsByKey":{"e4cc6f26-4020-4c62-9fb1-d6ce43021730":{"name":"orange_cat_1","sourceUrl":"assets/api/v1/animation-library/gamelab/_9DyaUDX71HXd3ZDq8czdwuTP6pbZX83/category_animals/orange_cat.png","frameSize":{"x":166,"y":300},"frameCount":1,"looping":true,"frameDelay":2,"version":"_9DyaUDX71HXd3ZDq8czdwuTP6pbZX83","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":166,"y":300},"rootRelativePath":"assets/api/v1/animation-library/gamelab/_9DyaUDX71HXd3ZDq8czdwuTP6pbZX83/category_animals/orange_cat.png"},"e577a2a0-9be4-41f3-8389-1cbbaabe778e":{"name":"sword_silver_1","sourceUrl":null,"frameSize":{"x":128,"y":128},"frameCount":1,"looping":true,"frameDelay":12,"version":"jnLd189wLLOS150roRp7BCq_qldDpPl0","categories":["tools"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":128,"y":128},"rootRelativePath":"assets/e577a2a0-9be4-41f3-8389-1cbbaabe778e.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = true;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//1) Add sprites or draw a scene to recreate your favorite book, movie, TV show, or video game scene.
//2) Add text to your scene.
background("green");

var sprite2 = createSprite(207, 350);
var sprite = createSprite(200, 150);
sprite2.setAnimation("sword_silver_1");
sprite2.rotation = 135;
sprite.setAnimation("orange_cat_1");

drawSprites();
fill("yellow");
textSize(22);
textFont("Georgia");
text("Warriors: Basically a Book About Cats", 20, 200);

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
