import "./style.css";

import "@babylonjs/loaders/SPLAT";

import {
  ArcRotateCamera,
  Engine,
  ImportMeshAsync,
  LoadAssetContainerAsync,
  Scene,
  Vector3,
} from "@babylonjs/core";

import sogPath from "../assets/pizza.sog?url";

const main = () => {
  const renderCanvas = document.querySelector<HTMLCanvasElement>(
    "#renderCanvas",
  );
  if (!renderCanvas) {
    return;
  }

  const engine = new Engine(renderCanvas);
  const scene = new Scene(engine);

  scene.createDefaultLight();
  const camera = new ArcRotateCamera(
    "camera",
    Math.PI / 2,
    Math.PI / 4,
    1,
    Vector3.Zero(),
  );
  camera.minZ = 0;
  camera.attachControl();

  window.addEventListener("resize", () => engine.resize());
  engine.runRenderLoop(() => scene.render());

  LoadAssetContainerAsync(sogPath, scene).then((container) => {
    container.addAllToScene();
    container.meshes[0].position = new Vector3(0.25, 0, 0);
  });

  ImportMeshAsync(sogPath, scene).then(({ meshes }) => {
    meshes[0].position = new Vector3(-0.25, 0, 0);
  });
};

main();
