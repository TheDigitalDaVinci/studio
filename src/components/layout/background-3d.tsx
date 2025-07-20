'use client';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function Background3D() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;
    const currentMount = mountRef.current;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    currentMount.appendChild(renderer.domElement);

    // Deconstructed sphere
    const group = new THREE.Group();
    scene.add(group);

    const geometry = new THREE.SphereGeometry(2, 32, 16);
    
    // Points material for a particle effect
    const pointsMaterial = new THREE.PointsMaterial({
      color: 0xc47f2f, // Gold color
      size: 0.03,
      transparent: true,
      opacity: 0.7,
      sizeAttenuation: true,
    });
    const points = new THREE.Points(geometry, pointsMaterial);
    group.add(points);

    // Wireframe for structure
    const wireframeMaterial = new THREE.MeshBasicMaterial({
      color: 0x9a5c49, // Terracotta color
      wireframe: true,
      transparent: true,
      opacity: 0.1,
    });
    const wireframe = new THREE.Mesh(geometry, wireframeMaterial);
    group.add(wireframe);

    camera.position.z = 5;

    const mouse = new THREE.Vector2();
    const handleMouseMove = (event: MouseEvent) => {
        const rect = renderer.domElement.getBoundingClientRect();
        mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      requestAnimationFrame(animate);
      // Subtle rotation and mouse follow
      group.rotation.x += (mouse.y * 0.2 - group.rotation.x) * 0.02;
      group.rotation.y += (mouse.x * 0.2 - group.rotation.y) * 0.02;
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (currentMount) {
        camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
      }
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="fixed top-0 left-0 w-full h-full -z-10" />;
}
