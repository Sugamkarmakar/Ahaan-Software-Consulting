import React, { useEffect, useRef } from "react";
import "./BlogBanner.css";

const BlogBanner = () => {
    const canvasRef = useRef(null);
    const mouse = useRef({ x: null, y: null });

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        let particles = [];

        // Generate Random Particles
        for (let i = 0; i < 50; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 4 + 1,
                speedX: (Math.random() - 0.5) * 1.2,
                speedY: (Math.random() - 0.5) * 1.2,
            });
        }

        // Mouse Movement Tracking
        window.addEventListener("mousemove", (event) => {
            mouse.current.x = event.x;
            mouse.current.y = event.y;
        });

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw Connections
            ctx.strokeStyle = "#CC912A"; // Golden lines
            ctx.lineWidth = 1.2;
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    let dx = particles[i].x - particles[j].x;
                    let dy = particles[i].y - particles[j].y;
                    let distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < 180) {
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }

            // Draw Floating Particles
            particles.forEach((p) => {
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = "#CC912A"; // Golden color
                ctx.shadowBlur = 15;
                ctx.shadowColor = "#CC912A";
                ctx.fill();

                // Move Particles
                p.x += p.speedX;
                p.y += p.speedY;

                // Attract Particles Towards Mouse
                let dx = mouse.current.x - p.x;
                let dy = mouse.current.y - p.y;
                let distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 100) {
                    p.x += dx * 0.02;
                    p.y += dy * 0.02;
                }

                // Boundary Check
                if (p.x > canvas.width || p.x < 0) p.speedX *= -1;
                if (p.y > canvas.height || p.y < 0) p.speedY *= -1;
            });

            requestAnimationFrame(animate);
        }

        animate();

     
        return () => {
            window.removeEventListener("mousemove", () => {});
        };
    }, []);

    return (
        <div className="banner-container">
            <h1 className="banner-text">Our Blogs</h1>
            <p className="banner-subtext">"Discover insights, trends, innovations, and stories shaping the future of technology today."</p>
            <canvas ref={canvasRef} className="network-canvas"></canvas>
        </div>
    );
};

export default BlogBanner;
