'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function Background3D() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !mountRef.current) return;

    const currentMount = mountRef.current;
    const clock = new THREE.Clock();

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(75, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
    camera.position.z = 2.5;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    currentMount.appendChild(renderer.domElement);

    // Object
    const geometry = new THREE.SphereGeometry(1.5, 32, 32);
    const material = new THREE.MeshStandardMaterial({
      color: 0xD4AF37, // Deep Gold
      metalness: 0.6,
      roughness: 0.2,
      wireframe: true,
    });
    
    const count = 50;
    const instancedMesh = new THREE.InstancedMesh(geometry, material, count);
    
    const dummy = new THREE.Object3D();
    for (let i = 0; i < count; i++) {
        dummy.position.set(
            (Math.random() - 0.5) * 5,
            (Math.random() - 0.5) * 5,
            (Math.random() - 0.5) * 5
        );
        const scale = Math.random() * 0.1 + 0.05;
        dummy.scale.set(scale, scale, scale);
        dummy.updateMatrix();
        instancedMesh.setMatrixAt(i, dummy.matrix);
    }
    
    scene.add(instancedMesh);


    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    
    const pointLight = new THREE.PointLight(0xD4AF37, 10, 20);
    pointLight.position.set(1, 1, 2);
    scene.add(pointLight);

    const pointLight2 = new THREE.PointLight(0xE2725B, 5, 15); // Terracotta accent
    pointLight2.position.set(-2, -1, -1);
    scene.add(pointLight2);

    // Mouse movement
    const mouse = new THREE.Vector2();
    const handleMouseMove = (event: MouseEvent) => {
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    }
    window.addEventListener('mousemove', handleMouseMove);

    // Resize handler
    const handleResize = () => {
      if (!currentMount) return;
      camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();
      
      // Update camera position based on mouse
      camera.position.x += (mouse.x * 2 - camera.position.x) * 0.05;
      camera.position.y += (mouse.y * 2 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      instancedMesh.rotation.x = elapsedTime * 0.05;
      instancedMesh.rotation.y = elapsedTime * 0.05;


      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (currentMount) {
        currentMount.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      scene.remove(instancedMesh);
    };
  }, []);

  return <div ref={mountRef} className="fixed top-0 left-0 w-full h-full -z-10 opacity-20" />;
}
