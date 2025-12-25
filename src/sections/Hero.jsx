import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { motion } from "framer-motion";

const AnimatedSphere = () => {
    return (
        <Sphere visible args={[1, 100, 200]} scale={2.4}>
            <MeshDistortMaterial
                color="#9D4EDD"
                attach="material"
                distort={0.4}
                speed={1.5}
                roughness={0.2}
            />
        </Sphere>
    );
};

export const Hero = () => {
    return (
        <section id="home" className="h-screen w-full relative flex items-center justify-center overflow-hidden">
            {/* 3D Background */}
            <div className="absolute inset-0 w-full h-full opacity-60">
                <Canvas>
                    <Suspense fallback={null}>
                        <ambientLight intensity={0.5} />
                        <directionalLight position={[3, 2, 1]} />
                        <AnimatedSphere />
                        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
                    </Suspense>
                </Canvas>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pointer-events-none">
                <div className="pointer-events-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl md:text-7xl font-bold text-white mb-6"
                    >
                        Hi, I'm <span className="text-violet-neon">Raja Kuberan</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl md:text-2xl text-violet-200 mb-8"
                    >
                        Data Analyst | eCommerce Team Lead
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex flex-col md:flex-row gap-4 justify-center items-center"
                    >
                        <a href="#contact" className="px-8 py-3 rounded-full bg-violet-neon hover:bg-violet-600 text-white font-bold transition-all shadow-[0_0_20px_rgba(157,78,221,0.5)]">
                            View Work
                        </a>
                        <a href="#contact" className="px-8 py-3 rounded-full border border-violet-light/30 hover:bg-violet-light/10 text-white font-medium transition-all">
                            Contact Me
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
