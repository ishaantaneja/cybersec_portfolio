import { Canvas, useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import { useMemo, useRef } from 'react'
import type { Group, Mesh } from 'three'

type SceneProps = {
  simplified: boolean
}

function WireOrb({
  position,
  scale = 1,
  speed = 0.18,
  detail = 1,
  opacity = 0.65,
  color = '#22d3ee',
}: {
  position: [number, number, number]
  scale?: number
  speed?: number
  detail?: number
  opacity?: number
  color?: string
}) {
  const ref = useRef<Mesh>(null)

  useFrame((_, delta) => {
    if (!ref.current) return
    ref.current.rotation.x += delta * speed
    ref.current.rotation.y += delta * speed * 0.7
  })

  return (
    <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.55}>
      <mesh ref={ref} position={position} scale={scale}>
        <icosahedronGeometry args={[1, detail]} />
        <meshBasicMaterial color={color} wireframe transparent opacity={opacity} depthWrite={false} />
      </mesh>
    </Float>
  )
}

function SoftCore({ position, scale = 1 }: { position: [number, number, number]; scale?: number }) {
  const ref = useRef<Mesh>(null)

  useFrame((_, delta) => {
    if (!ref.current) return
    ref.current.rotation.y += delta * 0.08
  })

  return (
    <mesh ref={ref} position={position} scale={scale}>
      <icosahedronGeometry args={[1, 0]} />
      <meshBasicMaterial color="#67e8f9" transparent opacity={0.22} depthWrite={false} />
    </mesh>
  )
}

function TorusRing({
  position,
  scale = 1,
  speed = 0.12,
  tube = 0.045,
  opacity = 0.55,
  color = '#22d3ee',
  accentOpacity = 0.75,
}: {
  position: [number, number, number]
  scale?: number
  speed?: number
  tube?: number
  opacity?: number
  color?: string
  accentOpacity?: number
}) {
  const ref = useRef<Group>(null)

  useFrame((_, delta) => {
    if (!ref.current) return
    ref.current.rotation.x += delta * speed * 0.45
    ref.current.rotation.z += delta * speed
  })

  return (
    <Float speed={0.9} rotationIntensity={0.12} floatIntensity={0.35}>
      <group ref={ref} position={position} scale={scale} rotation={[0.55, 0.25, 0.12]}>
        <mesh>
          <torusGeometry args={[1.15, tube, 16, 72]} />
          <meshBasicMaterial color={color} transparent opacity={opacity} depthWrite={false} />
        </mesh>
        <mesh>
          <torusGeometry args={[1.15, tube * 0.28, 10, 96]} />
          <meshBasicMaterial color="#67e8f9" transparent opacity={accentOpacity} depthWrite={false} />
        </mesh>
      </group>
    </Float>
  )
}

function OctaWire({
  position,
  scale = 1,
  speed = 0.1,
  opacity = 0.5,
}: {
  position: [number, number, number]
  scale?: number
  speed?: number
  opacity?: number
}) {
  const ref = useRef<Mesh>(null)

  useFrame((_, delta) => {
    if (!ref.current) return
    ref.current.rotation.y += delta * speed
    ref.current.rotation.z += delta * speed * 0.35
  })

  return (
    <Float speed={0.7} rotationIntensity={0.15} floatIntensity={0.4}>
      <mesh ref={ref} position={position} scale={scale}>
        <octahedronGeometry args={[1, 0]} />
        <meshBasicMaterial color="#67e8f9" wireframe transparent opacity={opacity} depthWrite={false} />
      </mesh>
    </Float>
  )
}

function Scene({ simplified }: SceneProps) {
  const orbs = useMemo(
    () =>
      simplified
        ? [
            {
              position: [1.15, 0.1, -0.2] as [number, number, number],
              scale: 2.45,
              speed: 0.14,
              detail: 1,
              opacity: 0.62,
              color: '#22d3ee',
            },
          ]
        : [
            {
              position: [1.35, 0.15, -0.15] as [number, number, number],
              scale: 2.65,
              speed: 0.13,
              detail: 1,
              opacity: 0.68,
              color: '#22d3ee',
            },
            {
              position: [0.15, -1.05, -1.0] as [number, number, number],
              scale: 0.95,
              speed: 0.2,
              detail: 0,
              opacity: 0.48,
              color: '#67e8f9',
            },
            {
              position: [2.55, -0.7, -1.35] as [number, number, number],
              scale: 0.62,
              speed: 0.24,
              detail: 0,
              opacity: 0.42,
              color: '#22d3ee',
            },
          ],
    [simplified],
  )

  return (
    <>
      <ambientLight intensity={0.55} />
      <pointLight position={[2.2, 1.4, 2.5]} intensity={1.4} color="#67e8f9" distance={14} decay={2} />
      <pointLight position={[-1.2, -0.8, 1.5]} intensity={0.55} color="#22d3ee" distance={10} decay={2} />
      <SoftCore position={[1.35, 0.15, -0.55]} scale={simplified ? 1.85 : 2.05} />
      {orbs.map((orb) => (
        <WireOrb key={`${orb.position.join('-')}-${orb.scale}`} {...orb} />
      ))}
      <TorusRing
        position={[1.4, 0.12, 0.25]}
        scale={simplified ? 1.55 : 1.75}
        speed={0.11}
        tube={0.055}
        opacity={0.58}
        accentOpacity={0.8}
      />
      {!simplified && (
        <>
          <TorusRing
            position={[1.25, 0.05, -0.35]}
            scale={2.35}
            speed={0.055}
            tube={0.028}
            opacity={0.38}
            color="#67e8f9"
            accentOpacity={0.55}
          />
          <OctaWire position={[2.15, 0.85, -0.8]} scale={0.85} speed={0.09} opacity={0.52} />
        </>
      )}
      {simplified && (
        <TorusRing
          position={[1.2, 0.05, -0.25]}
          scale={2.1}
          speed={0.06}
          tube={0.03}
          opacity={0.4}
          color="#67e8f9"
          accentOpacity={0.6}
        />
      )}
    </>
  )
}

export type HeroCanvasProps = {
  simplified?: boolean
}

export default function HeroCanvas({ simplified = false }: HeroCanvasProps) {
  return (
    <div
      className="hero-canvas pointer-events-none absolute inset-0 -z-0 overflow-hidden"
      aria-hidden="true"
    >
      <Canvas
        dpr={simplified ? [1, 1.15] : [1, 1.75]}
        camera={{ position: [0, 0, 5.6], fov: 40, near: 0.1, far: 40 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: simplified ? 'low-power' : 'default',
          stencil: false,
        }}
        frameloop="always"
        style={{ width: '100%', height: '100%' }}
      >
        <Scene simplified={simplified} />
      </Canvas>
    </div>
  )
}
