var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["0d920331-2802-4b35-8b04-91d5f7c12f92","92f4572b-97d3-4a10-90fb-c29ac56a4b8f","f02936d1-7b14-4f0c-906a-72cdf65254f6","4b2cf60d-cf0e-4518-903b-fb5ee0d7cf4d","5500ef27-005f-4dd2-b3b1-0786b8f83676"],"propsByKey":{"0d920331-2802-4b35-8b04-91d5f7c12f92":{"name":"background_underwater_17_1","sourceUrl":"assets/api/v1/animation-library/gamelab/Vg6bYwboQcGip.4oRoqXobcX2rE5QGop/category_backgrounds/background_underwater_17.png","frameSize":{"x":400,"y":399},"frameCount":1,"looping":true,"frameDelay":2,"version":"Vg6bYwboQcGip.4oRoqXobcX2rE5QGop","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":399},"rootRelativePath":"assets/api/v1/animation-library/gamelab/Vg6bYwboQcGip.4oRoqXobcX2rE5QGop/category_backgrounds/background_underwater_17.png"},"92f4572b-97d3-4a10-90fb-c29ac56a4b8f":{"name":"callum.png_1","sourceUrl":null,"frameSize":{"x":182,"y":172},"frameCount":1,"looping":true,"frameDelay":12,"version":"0.z2MA.e42UlHu_kK.7OIRyQkMG6dpMx","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":182,"y":172},"rootRelativePath":"assets/92f4572b-97d3-4a10-90fb-c29ac56a4b8f.png"},"f02936d1-7b14-4f0c-906a-72cdf65254f6":{"name":"jacksonmahome2.png_1","sourceUrl":"assets/v3/animations/tuBf_RbpUXFZpPUQNY653U9YvZx2e89RHuztub0ppp8/f02936d1-7b14-4f0c-906a-72cdf65254f6.png","frameSize":{"x":216,"y":139},"frameCount":1,"looping":true,"frameDelay":4,"version":"wK9GRHe0rFZBaDUB7v9dHadPyEbIyUVZ","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":216,"y":139},"rootRelativePath":"assets/v3/animations/tuBf_RbpUXFZpPUQNY653U9YvZx2e89RHuztub0ppp8/f02936d1-7b14-4f0c-906a-72cdf65254f6.png"},"4b2cf60d-cf0e-4518-903b-fb5ee0d7cf4d":{"name":"gameplayadventure_12_1","sourceUrl":null,"frameSize":{"x":315,"y":395},"frameCount":1,"looping":true,"frameDelay":12,"version":"P0EtZ5R_7JDfwSV0ql4eiHrHBINYRYpG","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":315,"y":395},"rootRelativePath":"assets/4b2cf60d-cf0e-4518-903b-fb5ee0d7cf4d.png"},"5500ef27-005f-4dd2-b3b1-0786b8f83676":{"name":"team.png_1","sourceUrl":null,"frameSize":{"x":112,"y":302},"frameCount":1,"looping":true,"frameDelay":12,"version":"BjPl9fL34wkeHOLeyM8zb9NeXcUzBl0_","categories":[""],"loadedFromSource":true,"saved":true,"sourceSize":{"x":112,"y":302},"rootRelativePath":"assets/5500ef27-005f-4dd2-b3b1-0786b8f83676.png"}}};
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

var backdrop = createSprite(200, 200);
backdrop.setAnimation("background_underwater_17_1");
drawSprites();
var jackson = createSprite(90, 300);
var littleboy = createSprite(287, 100);
jackson.setAnimation("jacksonmahome2.png_1");
littleboy.setAnimation("callum.png_1");
jackson.scale = 2;
littleboy.scale = 1.2;
littleboy.rotation = -12;
var phish = createSprite(295, 302);
phish.setAnimation("gameplayadventure_12_1");
phish.scale = 0.2;
phish.rotation = 20;
var guy = createSprite(70, 205);
guy.setAnimation("team.png_1");
guy.width = 100;
guy.tint = "black";
drawSprites();
textSize(18);
text("sup baby boy🤭", 95, 205);
text("hey shawty 😘 ", 140, 56);
fill("white");
ellipse(randomNumber(70, 130), randomNumber(50, 150), 5, 5);
ellipse(randomNumber(70, 130), randomNumber(50, 150), 12, 12);
ellipse(randomNumber(70, 130), randomNumber(50, 150), 12, 12);

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
