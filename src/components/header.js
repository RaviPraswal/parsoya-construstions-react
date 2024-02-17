import React, { useEffect } from 'react';
import Logo_Title from "./logo_title_component";
import Navbar from "./navbar_component";
import * as THREE from 'three';
import LivingRoom from '../3D_Models/bathroom_interior.glb';
import  { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const Header = () => {
    // const scene = new THREE.Scene();
    // const canvasRef = null;
    // const camera = new THREE.PerspectiveCamera(
    //     75,
    //     window.innerWidth / window.innerHeight,
    //     0.1,
    //     1000
    // );
    // const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
    // const light = new THREE.AmbientLight(0xffffff, 0.5);
    // const pointLight = new THREE.PointLight(0xffffff, 0.5);
    // const mixer = new THREE.AnimationMixer(scene);
    // useEffect(() => {
    //     const loader = new GLTFLoader();
    //     loader.load(LivingRoom, (gltf) => {
    //       scene.add(gltf.scene);
    //       gltf.animations.forEach((clip) => {
    //         mixer.clipAction(clip).play();
    //       });
    //     });
    //     camera.position.z = 5;
    //     light.position.set(5, 5, 5);
    //     pointLight.position.set(-5, -5, -5);
    //     scene.add(light, pointLight);

    //     renderer.setSize(window.innerWidth, window.innerHeight);
    //     renderer.render(scene, camera);
    //     const clock = new THREE.Clock();
    //     const animate = () => {
    //         const deltaTime = clock.getDelta();
    //         requestAnimationFrame(animate);
    //         mixer.update(deltaTime);
    //         renderer.render(scene, camera);
    //     };

    //     animate();
    //   }, []);
    //   useEffect(() => {
    //     const handleResize = () => {
    //       renderer.setSize(window.innerWidth, window.innerHeight);
    //       camera.aspect = window.innerWidth / window.innerHeight;
    //       camera.updateProjectionMatrix();
    //     };
    
    //     window.addEventListener('resize', handleResize);
    //     return () => {
    //       window.removeEventListener('resize', handleResize);
    //     };
    //   }, []);
  return (
    <header>
        <section className="header">
        <div className="container">
          <Navbar />
          <Logo_Title />
          {/* <canvas ref={canvasRef} /> */}
        </div>
      </section>
    </header>
  );
};

export default Header;