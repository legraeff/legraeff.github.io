const olaSvg=document.querySelector("#ola"),olaSvgMasks=olaSvg.querySelectorAll("mask path");let animationDelay=0;olaSvgMasks.forEach(e=>{const o=e.getTotalLength();e.style.strokeDasharray=o,e.style.strokeDashoffset=o,animationDuration=o/200,animationDuration=animationDuration<.5?.5:animationDuration,e.style.animation=`${animationDuration}s linear ${animationDelay}s normal forwards running strokeOffset`,animationDelay+=animationDuration/2});const fountain=document.querySelector(".fountain"),fountainImages=fountain.querySelectorAll("img");let isAnimationRunning=!1;fountain.onmouseover=(()=>{isAnimationRunning||(fountainImages.forEach(e=>{let o=(Math.floor(10*Math.random())+5)*(Math.random()<.5?-1:1),a=(Math.floor(10*Math.random())+5)*(Math.random()<.5?-1:1);e.animate([{transform:"translate(0, 0)",opacity:1},{transform:`translate(${a}rem, ${o}rem)`,opacity:0}],{duration:Math.floor(3e3*Math.random())+500,delay:Math.floor(1e3*Math.random())})}),isAnimationRunning=!0,setTimeout(function(){isAnimationRunning=!1},5e3))});const seriousMouth=document.querySelector("#Mouth-Serious"),smileMouth=document.querySelector("#Mouth-Smile"),defaultEyebrow=document.querySelector("#Eyebrow-Default"),flatEyebrow=document.querySelector("#Eyebrow-Flat"),surprisedEyes=document.querySelector("#Eyes-Surprised"),happyEyes=document.querySelector("#Eyes-Happy"),loveyEyes=document.querySelector("#Eyes-Hearts");class Face{constructor(e,o,a){this.mouth=e,this.eyebrow=o,this.eyes=a}}const normalFace=new Face(smileMouth,defaultEyebrow,happyEyes),loveFace=new Face(smileMouth,defaultEyebrow,loveyEyes),watFace=new Face(seriousMouth,flatEyebrow,surprisedEyes),love=document.querySelector(".love"),backend=document.querySelector(".backend");love.onmouseover=(()=>{setFace(normalFace.eyes,loveFace.eyes)}),love.onmouseout=(()=>{setFace(loveFace.eyes,normalFace.eyes)}),backend.onmouseover=(()=>{setFace(normalFace.eyes,watFace.eyes),setFace(normalFace.eyebrow,watFace.eyebrow),setFace(normalFace.mouth,watFace.mouth)}),backend.onmouseout=(()=>{setFace(watFace.eyes,normalFace.eyes),setFace(watFace.eyebrow,normalFace.eyebrow),setFace(watFace.mouth,normalFace.mouth)});const setFace=(e,o)=>{e!==o&&(e.style.opacity=0,o.style.opacity=1)};