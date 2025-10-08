import "./style.css";

import "@babylonjs/loaders/SPLAT";

import { Engine, ImportMeshAsync, Scene } from "@babylonjs/core";

import sogPath from "../assets/pizza.sog?url";

const main = async () => {
  const renderCanvas =
    document.querySelector<HTMLCanvasElement>("#renderCanvas");
  if (!renderCanvas) {
    return;
  }

  const engine = new Engine(renderCanvas);
  const scene = new Scene(engine);

  scene.createDefaultCameraOrLight(true, true, true);

  ImportMeshAsync(sogPath, scene).then(({ meshes }) => {
    console.log(meshes);
  });

  window.addEventListener("resize", () => engine.resize());
  engine.runRenderLoop(() => scene.render());
};

main();
