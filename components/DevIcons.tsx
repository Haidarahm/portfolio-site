'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text, Html } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';
import { 
  SiReact, 
  SiNextdotjs, 
  SiTailwindcss,
  SiFramer,
  SiThreedotjs,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiExpress,
  SiNodedotjs
} from 'react-icons/si';
import styles from './DevIcons.module.scss';

const RoundedIcon = ({ icon, name, position }: { 
  icon: JSX.Element, 
  name: string, 
  position: [number, number, number]
}) => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.lookAt(0, position[1], 0);
    }
  });

  return (
    <group ref={groupRef} position={position}>
      {/* Rounded disc for icon background */}
      <mesh>
        <sphereGeometry args={[1.1, 32, 32, 0, Math.PI * 2, 0, Math.PI * 0.5]} />
        <meshStandardMaterial 
          color={0xffffff}
          metalness={0.3}
          roughness={0.4}
        />
      </mesh>

      {/* Icon floating slightly above the disc */}
      <Html
        transform
        distanceFactor={5}
        position={[0, 0, 0.2]}
        style={{
          width: '64px',
          height: '64px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          pointerEvents: 'none',
          filter: 'drop-shadow(0 0 8px rgba(0,0,0,0.5))'
        }}
      >
        <div style={{ 
          fontSize: '2.5rem',
          color: 'black',
          transform: 'scale(1.3)'
        }}>
          {icon}
        </div>
      </Html>

      {/* Technology name */}
      <Text
        position={[0, -1.8, 0]}
        color={0xffffff}
        fontSize={0.4}
        anchorX="center"
        anchorY="middle"
        letterSpacing={0.05}
      >
        {name}
      </Text>
    </group>
  );
};

const DevIcons = () => {
  const frontendIcons = [
    { icon: <SiReact color="inherit" size="100%" />, name: 'React' },
    { icon: <SiNextdotjs color="inherit" size="100%" />, name: 'Next.js' },
    { icon: <SiTailwindcss color="inherit" size="100%" />, name: 'Tailwind' },
    { icon: <SiFramer color="inherit" size="100%" />, name: 'Framer' },
    { icon: <SiThreedotjs color="inherit" size="100%" />, name: 'Three.js' }
  ];

  const backendIcons = [
    { icon: <SiMysql color="inherit" size="100%" />, name: 'MySQL' },
    { icon: <SiPostgresql color="inherit" size="100%" />, name: 'PostgreSQL' },
    { icon: <SiMongodb color="inherit" size="100%" />, name: 'MongoDB' },
    { icon: <SiExpress color="inherit" size="100%" />, name: 'Express' },
    { icon: <SiNodedotjs color="inherit" size="100%" />, name: 'Node.js' }
  ];

  const getSpherePosition = (index: number, total: number, isFrontend: boolean): [number, number, number] => {
    const radius = 6; // Reduced radius for better visibility
    const angle = (index / total) * Math.PI * 2;
    const y = isFrontend ? 2 : -2; // Reduced vertical spread
    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;
    return [x, y, z];
  };

  return (
    <div className={styles.container}>
      <Canvas 
        camera={{ position: [0, 0, 12], fov: 60 }} // Adjusted camera position and FOV
        gl={{ antialias: true }}
      >
        <ambientLight intensity={0.7} />
        <directionalLight 
          position={[3, 3, 3]} 
          intensity={1} 
        />
        <directionalLight 
          position={[-3, -3, -3]} 
          intensity={0.5} 
        />
        
        {/* Frontend Icons */}
        <group position={[0, 1, 0]}> {/* Slightly raised */}
          {frontendIcons.map((item, index) => (
            <RoundedIcon
              key={`front-${index}`}
              icon={item.icon}
              name={item.name}
              position={getSpherePosition(index, frontendIcons.length, true)}
            />
          ))}
        </group>
        
        {/* Backend Icons */}
        <group position={[0, -1, 0]}> {/* Slightly lowered */}
          {backendIcons.map((item, index) => (
            <RoundedIcon
              key={`back-${index}`}
              icon={item.icon}
              name={item.name}
              position={getSpherePosition(index, backendIcons.length, false)}
            />
          ))}
        </group>
        
        <OrbitControls 
          enableZoom={false} // Disabled zoom
          autoRotate
          autoRotateSpeed={0.5}
          minPolarAngle={Math.PI/4} // Limit vertical rotation
          maxPolarAngle={Math.PI*3/4} // Limit vertical rotation
        />
      </Canvas>
    </div>
  );
};

export default DevIcons;