import { useEffect, useRef } from "react";

import * as THREE from "three";

import { CSS3DRenderer, CSS3DSprite } from "three/examples/jsm/Addons";

export default function CompanyHeroBg() {
  const threeRenderef = useRef<any>(null);

  let camera: THREE.PerspectiveCamera,
    scene: THREE.Scene,
    renderer: CSS3DRenderer;

  const bluePosList = [
    new THREE.Vector3(-1000, -600, -9),
    new THREE.Vector3(-1000, -40, -9),
    new THREE.Vector3(-950, -40, -9),
    new THREE.Vector3(-900, -29, -9),
    new THREE.Vector3(-850, -5, -9),
    new THREE.Vector3(-800, 27, -9),
    new THREE.Vector3(-750, 67, -9),
    new THREE.Vector3(-700, 95, -9),
    new THREE.Vector3(-650, 105, -9),
    new THREE.Vector3(-600, 100, -9),
    new THREE.Vector3(-550, 77, -9),
    new THREE.Vector3(-500, 22, -9),
    new THREE.Vector3(-450, -41, -9),
    new THREE.Vector3(-400, -84, -9),
    new THREE.Vector3(-350, -105, -9),
    new THREE.Vector3(-300, -104, -9),
    new THREE.Vector3(-250, -86, -9),
    new THREE.Vector3(-200, -51, -9),
    new THREE.Vector3(-150, 0, -9),
    new THREE.Vector3(-100, 53, -9),
    new THREE.Vector3(-50, 78, -9),
    new THREE.Vector3(0, 85, -9),
    new THREE.Vector3(50, 77, -9),
    new THREE.Vector3(100, 57, -9),
    new THREE.Vector3(150, 23, -9),
    new THREE.Vector3(200, -21, -9),
    new THREE.Vector3(250, -62, -9),
    new THREE.Vector3(300, -81, -9),
    new THREE.Vector3(350, -78, -9),
    new THREE.Vector3(400, -63, -9),
    new THREE.Vector3(450, -41, -9),
    new THREE.Vector3(500, -15, -9),
    new THREE.Vector3(550, 15, -9),
    new THREE.Vector3(600, 43, -9),
    new THREE.Vector3(650, 65, -9),
    new THREE.Vector3(700, 79, -9),
    new THREE.Vector3(750, 83, -9),
    new THREE.Vector3(800, 75, -9),
    new THREE.Vector3(850, 56, -9),
    new THREE.Vector3(900, 20, -9),
    new THREE.Vector3(950, -65, -9),
    new THREE.Vector3(1000, -600, -9),
  ];

  const yellowPosList = [
    new THREE.Vector3(-1000, -600, -10),
    new THREE.Vector3(-1000, -75, -10),
    new THREE.Vector3(-950, -81, -10),
    new THREE.Vector3(-900, -92, -10),
    new THREE.Vector3(-850, -94, -10),
    new THREE.Vector3(-800, -80, -10),
    new THREE.Vector3(-750, -40, -10),
    new THREE.Vector3(-700, -0, -10),
    new THREE.Vector3(-650, 34, -10),
    new THREE.Vector3(-600, 57, -10),
    new THREE.Vector3(-550, 75, -10),
    new THREE.Vector3(-500, 82, -10),
    new THREE.Vector3(-450, 79, -10),
    new THREE.Vector3(-400, 68, -10),
    new THREE.Vector3(-350, 48, -10),
    new THREE.Vector3(-300, 22, -10),
    new THREE.Vector3(-250, -5, -10),
    new THREE.Vector3(-200, -27, -10),
    new THREE.Vector3(-150, -30, -10),
    new THREE.Vector3(-100, -5, -10),
    new THREE.Vector3(-50, 48, -10),
    new THREE.Vector3(0, 100, -10),
    new THREE.Vector3(50, 131, -10),
    new THREE.Vector3(100, 146, -10),
    new THREE.Vector3(150, 143, -10),
    new THREE.Vector3(200, 123, -10),
    new THREE.Vector3(250, 85, -10),
    new THREE.Vector3(300, 28, -10),
    new THREE.Vector3(350, -20, -10),
    new THREE.Vector3(400, -65, -10),
    new THREE.Vector3(450, -93, -10),
    new THREE.Vector3(500, -110, -10),
    new THREE.Vector3(550, -115, -10),
    new THREE.Vector3(600, -108, -10),
    new THREE.Vector3(650, -88, -10),
    new THREE.Vector3(700, -57, -10),
    new THREE.Vector3(750, -32, -10),
    new THREE.Vector3(800, -17, -10),
    new THREE.Vector3(850, -12, -10),
    new THREE.Vector3(900, -19, -10),
    new THREE.Vector3(950, -45, -10),
    new THREE.Vector3(1000, -600, -10),
  ];

  const objects: any[] = [];
  const yellowLineDots: {
    index: number;
    ObjData: CSS3DSprite;
    dotSize: number;
  }[] = [];

  const blueLineDots: {
    index: number;
    ObjData: CSS3DSprite;
    dotSize: number;
  }[] = [];

  const effectBorders = [];
  const blueLineEffects: { index: number; ObjData: CSS3DSprite }[] = [];
  const yellowLineEffects: { index: number; ObjData: CSS3DSprite }[] = [];

  const init = () => {
    camera = new THREE.PerspectiveCamera(70, 1920 / 600, 1, 100);
    camera.position.set(0, 50, 418);
    camera.lookAt(0, 50, 0);

    scene = new THREE.Scene();
    // Draw Curved Line
    const yellowCurvedLine: HTMLImageElement = document.createElement("img");
    yellowCurvedLine.style.width = "1920px";
    yellowCurvedLine.style.maxWidth = "1920px";
    yellowCurvedLine.addEventListener("load", function () {
      const yellowCurveObj = new CSS3DSprite(yellowCurvedLine);
      yellowCurveObj.position.x = 0;
      yellowCurveObj.position.y = 0;
      yellowCurveObj.position.z = -10;
      scene.add(yellowCurveObj);
    });
    yellowCurvedLine.src = "imgs/yellowCurveline.svg";

    const blueCurvedLine = document.createElement("img");
    blueCurvedLine.style.width = "1920px";
    blueCurvedLine.style.maxWidth = "1920px";
    blueCurvedLine.addEventListener("load", function () {
      const blueCurvedObj = new CSS3DSprite(blueCurvedLine);
      (blueCurvedObj.position.x = 0),
        (blueCurvedObj.position.y = 0),
        (blueCurvedObj.position.z = -10);
      blueCurvedObj.scale.x = 1;
      blueCurvedObj.scale.y = 1;
      blueCurvedObj.scale.z = 1;
      scene.add(blueCurvedObj);
    });
    blueCurvedLine.src = "imgs/curveLine.svg";
    // Draw Curved Line

    const headText = document.createElement("div");
    headText.classList.add("company-bgGradientTxt");
    headText.innerHTML = "UPFT";
    const headTextObj = new CSS3DSprite(headText);
    headTextObj.position.x = 0;
    headTextObj.position.y = 200;
    headTextObj.position.z = 0;
    scene.add(headTextObj);
    // ICons Start
    const imageloadlens = document.createElement("img");
    imageloadlens.style.width = "110px";
    imageloadlens.addEventListener("load", function () {
      const object = new CSS3DSprite(imageloadlens);
      (object.position.x = bluePosList[8].x),
        (object.position.y = bluePosList[8].y),
        (object.position.z = 0);
      scene.add(object);
      blueLineEffects.push({ index: 8, ObjData: object });
    });
    imageloadlens.src = "imgs/LoadLens_svg.png";
    const borderLoadLens = document.createElement("div");
    borderLoadLens.style.width = "170px";
    borderLoadLens.style.height = "170px";
    borderLoadLens.style.border = "2px dotted #7DBAFF";
    borderLoadLens.style.borderRadius = "50%";
    const loadlensObj = new CSS3DSprite(borderLoadLens);
    (loadlensObj.position.x = bluePosList[8].x),
      (loadlensObj.position.y = bluePosList[8].y),
      (loadlensObj.position.z = 0);
    // scene.add(loadlensObj);

    const imageDataForger: HTMLImageElement = document.createElement("img");
    imageDataForger.style.width = "110px";
    imageDataForger.addEventListener("load", function () {
      const forgerObj = new CSS3DSprite(imageDataForger);
      (forgerObj.position.x = bluePosList[14].x),
        (forgerObj.position.y = bluePosList[14].y),
        (forgerObj.position.z = 0);
      scene.add(forgerObj);
      blueLineEffects.push({ index: 14, ObjData: forgerObj });
    });
    imageDataForger.src = "imgs/DataForger_svg.png";
    const borderDataForger = document.createElement("div");
    borderDataForger.style.width = "170px";
    borderDataForger.style.height = "170px";
    borderDataForger.style.border = "2px dotted #E8FCAF";
    borderDataForger.style.borderRadius = "50%";
    const dataforgerObj = new CSS3DSprite(borderDataForger);
    (dataforgerObj.position.x = bluePosList[14].x),
      (dataforgerObj.position.y = bluePosList[14].y),
      (dataforgerObj.position.z = 0);
    scene.add(dataforgerObj);

    const imageNimbus = document.createElement("img");
    imageNimbus.style.width = "110px";
    imageNimbus.addEventListener("load", function () {
      const object = new CSS3DSprite(imageNimbus);
      (object.position.x = bluePosList[36].x),
        (object.position.y = bluePosList[36].y),
        (object.position.z = 0);
      scene.add(object);
      blueLineEffects.push({ index: 36, ObjData: object });
    });
    imageNimbus.src = "imgs/Nimbus_svg.png";
    const borderNimbus = document.createElement("div");
    borderNimbus.style.width = "170px";
    borderNimbus.style.height = "170px";
    borderNimbus.style.border = "2px dotted #7DBAFF";
    borderNimbus.style.borderRadius = "50%";
    const nimbusObj = new CSS3DSprite(borderNimbus);
    (nimbusObj.position.x = bluePosList[36].x),
      (nimbusObj.position.y = bluePosList[36].y),
      (nimbusObj.position.z = 0);
    scene.add(nimbusObj);

    const imageUPFT = document.createElement("img");
    imageUPFT.style.width = "165px";
    imageUPFT.addEventListener("load", function () {
      const object = new CSS3DSprite(imageUPFT);
      (object.position.x = 20),
        (object.position.y = 115),
        (object.position.z = 0);
      scene.add(object);
      yellowLineEffects.push({ index: 21, ObjData: object });
    });
    imageUPFT.src = "imgs/UPFT_svg.png";
    const borderUPFT = document.createElement("div");
    borderUPFT.style.width = "235px";
    borderUPFT.style.height = "235px";
    borderUPFT.style.border = "2px dotted #6E8DE5";
    borderUPFT.style.borderRadius = "50%";
    const upftObj = new CSS3DSprite(borderUPFT);
    (upftObj.position.x = 20),
      (upftObj.position.y = 115),
      (upftObj.position.z = 30);
    scene.add(upftObj);
    effectBorders.push(upftObj);

    const blueBigDot = document.createElement("div");
    blueBigDot.style.width = "50px";
    blueBigDot.style.height = "50px";
    blueBigDot.style.backgroundColor = "#6E8DE5";
    blueBigDot.style.borderRadius = "50%";
    const blueBigDotSp = new CSS3DSprite(blueBigDot);
    (blueBigDotSp.position.x = bluePosList[29].x),
      (blueBigDotSp.position.y = bluePosList[29].y),
      (blueBigDotSp.position.z = 0);
    scene.add(blueBigDotSp);
    blueLineEffects.push({ index: 29, ObjData: blueBigDotSp });
    yellowLineEffects.push({ index: 29, ObjData: blueBigDotSp });
    const borderBlueBigDot = document.createElement("div");
    borderBlueBigDot.style.width = "75px";
    borderBlueBigDot.style.height = "75px";
    borderBlueBigDot.style.border = "2px dotted #BDD3D3";
    borderBlueBigDot.style.borderRadius = "50%";
    const borderBlueBigDotSp = new CSS3DSprite(borderBlueBigDot);
    (borderBlueBigDotSp.position.x = bluePosList[29].x),
      (borderBlueBigDotSp.position.y = bluePosList[29].y),
      (borderBlueBigDotSp.position.z = 0);
    scene.add(borderBlueBigDotSp);

    const yellowBigDot = document.createElement("div");
    yellowBigDot.style.width = "57px";
    yellowBigDot.style.height = "57px";
    yellowBigDot.style.backgroundColor = "#E8FCAF";
    yellowBigDot.style.borderRadius = "50%";
    const yellowBigDotSp = new CSS3DSprite(yellowBigDot);
    (yellowBigDotSp.position.x = yellowPosList[16].x),
      (yellowBigDotSp.position.y = yellowPosList[16].y),
      (yellowBigDotSp.position.z = 0);
    scene.add(yellowBigDotSp);
    yellowLineEffects.push({ index: 16, ObjData: yellowBigDotSp });
    const borderYellowBigDot = document.createElement("div");
    borderYellowBigDot.style.width = "85px";
    borderYellowBigDot.style.height = "85px";
    borderYellowBigDot.style.border = "2px dotted #3860D2";
    borderYellowBigDot.style.borderRadius = "50%";
    const borderYellowBigDotSp = new CSS3DSprite(borderYellowBigDot);
    (borderYellowBigDotSp.position.x = yellowPosList[16].x),
      (borderYellowBigDotSp.position.y = yellowPosList[16].y),
      (borderYellowBigDotSp.position.z = 0);
    scene.add(borderYellowBigDotSp);
    effectBorders.push(borderYellowBigDotSp);
    // ICons End

    drawYellowLineDots();
    drawBlueLineDots();

    renderer = new CSS3DRenderer();
    renderer.setSize(window.innerWidth, (window.innerWidth / 1920) * 600);
    threeRenderef.current?.appendChild(renderer.domElement);
    window.addEventListener("resize", onWindowResize);
  };
  const onWindowResize = () => {
    camera.aspect = 1920 / 600;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, (window.innerWidth / 1920) * 600);
  };
  const drawBlueLineDots = () => {
    const blueDot1 = document.createElement("div");
    blueDot1.style.width = "30px";
    blueDot1.style.height = "30px";
    blueDot1.style.borderRadius = "50%";
    blueDot1.style.backgroundColor = "#FFFFFF";
    const blueLDotObj = new CSS3DSprite(blueDot1);
    (blueLDotObj.position.x = bluePosList[19].x),
      (blueLDotObj.position.y = bluePosList[19].y),
      (blueLDotObj.position.z = bluePosList[19].z);
    scene.add(blueLDotObj);
    blueLineDots.push({ index: 19, ObjData: blueLDotObj, dotSize: 30 });

    const blueDot2 = document.createElement("div");
    blueDot2.style.width = "18px";
    blueDot2.style.height = "18px";
    blueDot2.style.borderRadius = "50%";
    blueDot2.style.backgroundColor = "#6E8DE5";
    const blueLDotObj2 = new CSS3DSprite(blueDot2);
    (blueLDotObj2.position.x = bluePosList[23].x),
      (blueLDotObj2.position.y = bluePosList[23].y),
      (blueLDotObj2.position.z = bluePosList[23].z);
    scene.add(blueLDotObj2);
    blueLineDots.push({ index: 23, ObjData: blueLDotObj2, dotSize: 18 });

    const blueDot3 = document.createElement("div");
    blueDot3.style.width = "17px";
    blueDot3.style.height = "17px";
    blueDot3.style.borderRadius = "50%";
    blueDot3.style.backgroundColor = "#FFFFFF";
    const blueLDotObj3 = new CSS3DSprite(blueDot3);
    (blueLDotObj3.position.x = bluePosList[31].x),
      (blueLDotObj3.position.y = bluePosList[31].y),
      (blueLDotObj3.position.z = bluePosList[31].z);
    scene.add(blueLDotObj3);
    blueLineDots.push({ index: 31, ObjData: blueLDotObj3, dotSize: 17 });
  };

  const drawYellowLineDots = () => {
    //yellow line dots
    const yellowDot1 = document.createElement("div");
    yellowDot1.style.width = "30px";
    yellowDot1.style.height = "30px";
    yellowDot1.style.borderRadius = "50%";
    yellowDot1.style.backgroundColor = "#999999";
    const yellowLDotObj = new CSS3DSprite(yellowDot1);
    (yellowLDotObj.position.x = yellowPosList[5].x),
      (yellowLDotObj.position.y = yellowPosList[5].y),
      (yellowLDotObj.position.z = yellowPosList[5].z);
    scene.add(yellowLDotObj);
    yellowLineDots.push({ index: 5, ObjData: yellowLDotObj, dotSize: 30 });

    const yellowDot2 = document.createElement("div");
    yellowDot2.style.width = "13px";
    yellowDot2.style.height = "13px";
    yellowDot2.style.borderRadius = "50%";
    yellowDot2.style.backgroundColor = "#999999";
    const yellowLDotObj2 = new CSS3DSprite(yellowDot2);
    (yellowLDotObj2.position.x = yellowPosList[11].x),
      (yellowLDotObj2.position.y = yellowPosList[11].y),
      (yellowLDotObj2.position.z = yellowPosList[11].z);
    scene.add(yellowLDotObj2);
    yellowLineDots.push({ index: 11, ObjData: yellowLDotObj2, dotSize: 13 });

    const yellowDot3 = document.createElement("div");
    yellowDot3.style.width = "18px";
    yellowDot3.style.height = "18px";
    yellowDot3.style.borderRadius = "50%";
    yellowDot3.style.backgroundColor = "#6E8DE5";
    const yellowLDotObj3 = new CSS3DSprite(yellowDot3);
    (yellowLDotObj3.position.x = yellowPosList[26].x),
      (yellowLDotObj3.position.y = yellowPosList[26].y),
      (yellowLDotObj3.position.z = yellowPosList[26].z);
    scene.add(yellowLDotObj3);
    yellowLineDots.push({ index: 26, ObjData: yellowLDotObj3, dotSize: 18 });

    const yellowDot4 = document.createElement("div");
    yellowDot4.style.width = "30px";
    yellowDot4.style.height = "30px";
    yellowDot4.style.borderRadius = "50%";
    yellowDot4.style.backgroundColor = "#E8FCAF";
    const yellowLDotObj4 = new CSS3DSprite(yellowDot4);
    (yellowLDotObj4.position.x = yellowPosList[34].x),
      (yellowLDotObj4.position.y = yellowPosList[34].y),
      (yellowLDotObj4.position.z = yellowPosList[34].z);
    scene.add(yellowLDotObj4);
    yellowLineDots.push({ index: 34, ObjData: yellowLDotObj4, dotSize: 30 });
  };

  function animate() {
    requestAnimationFrame(animate);

    const time = performance.now();

    for (let i = 0, l = objects.length; i < l; i++) {
      const object = objects[i];
    }

    renderer.render(scene, camera);
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      init();
      animate();
    }
  }, []);

  return (
    <div className="about-us-section relative pt-10 pb-0 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-center text-bold">
          <span className="px-4 lg:px-8 custom-start-lg-effect ">About Us</span>
        </h1>
        <div className="py-4 text-md">
          {" "}
          <abbr className="text-white font-semibold">
            Unified Platform For Testing, Inc
          </abbr>{" "}
          <abbr className="color-blue">(UPFT)</abbr>
        </div>
        {/* <h1 className="mt-8 text-center text-bold">
          <span className="">UPFT</span>
        </h1> */}
        <div className="leading-[50px] lg:leading-[100px] font-extrabold ">
          <h2 className="text-center my-8 text-gray-400">
            <abbr className="text-white font-semibold">
              We strives to be your streamlined solutions for comprehensive
              testing needs
            </abbr>
          </h2>
        </div>
      </div>
      <div className="-mt-4 md:-mt-8 min-h-[100px]" ref={threeRenderef}></div>
      <div className="hidden lg:block w-full text-center -mt-20"></div>
    </div>
  );
}
