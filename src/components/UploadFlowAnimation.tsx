import * as React from "react";
import { motion } from "motion/react";
import { FileText, Music, Grid3x3, Sparkles } from "lucide-react";

export default function UploadFlowAnimation() {
  const [phase, setPhase] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setPhase((p) => (p + 1) % 4);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const inputAssets = [
    { id: 1, name: "SOP.pdf", icon: "pdf", color: "#ef4444" },
    { id: 2, name: "Product_Manual.docx", icon: "doc", color: "#3b82f6" },
    { id: 3, name: "Audit_Checklist.xlsx", icon: "sheet", color: "#10b981" },
    { id: 4, name: "Voice_Note.mp3", icon: "audio", color: "#f59e0b" },
    { id: 5, name: "Brand_Guidelines.ppt", icon: "slide", color: "#8b5cf6" },
  ];

  const outputAssets = [
    { id: 1, name: "WhatsApp Sprint", icon: "whatsapp", color: "#25d366" },
    { id: 2, name: "Microlearning Video", icon: "video", color: "#ef4444" },
    { id: 3, name: "Audio Lesson", icon: "audio", color: "#f59e0b" },
    { id: 4, name: "Flashcards", icon: "cards", color: "#3b82f6" },
    { id: 5, name: "Training Checklist", icon: "checklist", color: "#10b981" },
  ];

  const FileIcon = ({ type, size = 24 }) => {
    const iconProps = { width: size, height: size, strokeWidth: 1.5 };
    switch (type) {
      case "pdf":
        return <FileText {...iconProps} className="text-red-500" />;
      case "doc":
        return <FileText {...iconProps} className="text-blue-500" />;
      case "sheet":
        return <Grid3x3 {...iconProps} className="text-green-500" />;
      case "audio":
        return <Music {...iconProps} className="text-amber-500" />;
      case "slide":
        return <FileText {...iconProps} className="text-purple-500" />;
      case "whatsapp":
        return <span className="text-2xl">💬</span>;
      case "video":
        return <span className="text-2xl">🎬</span>;
      case "cards":
        return <span className="text-2xl">🎴</span>;
      case "checklist":
        return <span className="text-2xl">✓</span>;
      default:
        return <Sparkles {...iconProps} className="text-slate-500" />;
    }
  };

  const getPosition = (index, total, isRight = false) => {
    const angle = (index * (360 / total) - 90) * (Math.PI / 180);
    const radius = 120;
    const x = 160 + radius * Math.cos(angle);
    const y = 160 + radius * Math.sin(angle);
    return { x, y };
  };

  return (
    <div className="w-full bg-gradient-to-b from-slate-50 to-white rounded-3xl border border-slate-100 p-8 md:p-12 overflow-hidden">
      {/* Header */}
      <div className="mb-8">
        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
          Upload what you already have
        </h3>
        <p className="text-slate-600 text-sm md:text-base">
          PDFs, videos, voice notes, and decks converted to deployment-ready formats in hours.
        </p>
      </div>

      {/* Animation Container */}
      <div className="relative w-full bg-white rounded-2xl border border-slate-200 overflow-hidden">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 800 400"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Background Grid */}
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="#f1f5f9"
                strokeWidth="0.5"
              />
            </pattern>
            <linearGradient id="pulseGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1" />
            </linearGradient>
          </defs>

          <rect width="800" height="400" fill="url(#grid)" />

          {/* Left Arrow Flow */}
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: phase >= 1 ? 1 : 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.path
              d="M 160 200 Q 240 180 320 200"
              fill="none"
              stroke="#3b82f6"
              strokeWidth="2"
              opacity="0.3"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: phase >= 1 ? 1 : 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            />
            <motion.circle
              cx="320"
              cy="200"
              r="4"
              fill="#3b82f6"
              animate={{ cx: phase >= 1 ? [240, 320] : 240 }}
              transition={{ duration: 1, delay: 0.2 }}
            />
          </motion.g>

          {/* Right Arrow Flow */}
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: phase >= 2 ? 1 : 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.path
              d="M 480 200 Q 560 180 640 200"
              fill="none"
              stroke="#10b981"
              strokeWidth="2"
              opacity="0.3"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: phase >= 2 ? 1 : 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            />
            <motion.circle
              cx="640"
              cy="200"
              r="4"
              fill="#10b981"
              animate={{ cx: phase >= 2 ? [560, 640] : 560 }}
              transition={{ duration: 1, delay: 0.2 }}
            />
          </motion.g>
        </svg>

        <div className="relative w-full aspect-video flex items-center justify-between px-8">
          {/* Input Assets (Left) */}
          <div className="relative w-1/3 h-full flex items-center justify-center">
            <div className="relative w-64 h-64">
              {inputAssets.map((asset, i) => {
                const { x, y } = getPosition(i, inputAssets.length);
                return (
                  <motion.div
                    key={asset.id}
                    className="absolute w-16 h-16 rounded-lg border border-slate-200 bg-white shadow-sm flex items-center justify-center cursor-pointer hover:shadow-md transition-shadow"
                    style={{
                      left: x - 32,
                      top: y - 32,
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                      scale: phase === 0 ? 1 : 0.85,
                      opacity: phase === 0 ? 1 : 0.5,
                      x: phase >= 1 ? 160 : 0,
                      y: phase >= 1 ? 160 : 0,
                    }}
                    transition={{
                      duration: 0.4,
                      delay: i * 0.08,
                    }}
                    title={asset.name}
                  >
                    <FileIcon type={asset.icon} size={28} />
                  </motion.div>
                );
              })}

              {/* Input Label */}
              <motion.div
                className="absolute inset-0 flex items-end justify-center pb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: phase === 0 ? 1 : 0 }}
                transition={{ duration: 0.4 }}
              >
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Your Content
                </span>
              </motion.div>
            </div>
          </div>

          {/* Center AI Engine */}
          <div className="relative w-1/3 h-full flex items-center justify-center">
            <motion.div
              className="relative w-32 h-32"
              animate={{
                scale: phase >= 1 && phase < 3 ? 1 : 0.8,
              }}
              transition={{ duration: 0.6 }}
            >
              {/* Outer Ring */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-blue-200"
                animate={{
                  rotate: phase >= 1 && phase < 3 ? 360 : 0,
                }}
                transition={{
                  duration: 3,
                  repeat: phase >= 1 && phase < 3 ? Infinity : 0,
                  ease: "linear",
                }}
              />

              {/* Inner Pulse */}
              <motion.div
                className="absolute inset-4 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg shadow-blue-500/50"
                animate={{
                  scale: phase >= 1 && phase < 3 ? [1, 1.2, 1] : 1,
                  opacity: phase >= 1 && phase < 3 ? [0.8, 1, 0.8] : 0.6,
                }}
                transition={{
                  duration: 2,
                  repeat: phase >= 1 && phase < 3 ? Infinity : 0,
                  ease: "easeInOut",
                }}
              />

              {/* Center Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{
                    y: phase >= 1 && phase < 3 ? [0, -2, 0] : 0,
                  }}
                  transition={{
                    duration: 2,
                    repeat: phase >= 1 && phase < 3 ? Infinity : 0,
                  }}
                >
                  <Sparkles className="w-8 h-8 text-white" />
                </motion.div>
              </div>

              {/* Processing Particles */}
              {phase >= 1 && phase < 3 && (
                <>
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1.5 h-1.5 rounded-full bg-blue-400"
                      style={{
                        left: "50%",
                        top: "50%",
                      }}
                      animate={{
                        x: Math.cos((i * Math.PI) / 3) * 60,
                        y: Math.sin((i * Math.PI) / 3) * 60,
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                    />
                  ))}
                </>
              )}

              {/* Label */}
              <motion.div
                className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap"
                initial={{ opacity: 0 }}
                animate={{ opacity: phase >= 1 && phase < 3 ? 1 : 0 }}
                transition={{ duration: 0.4 }}
              >
                <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                  AI Processing
                </span>
              </motion.div>
            </motion.div>
          </div>

          {/* Output Assets (Right) */}
          <div className="relative w-1/3 h-full flex items-center justify-center">
            <div className="relative w-64 h-64">
              {outputAssets.map((asset, i) => {
                const { x, y } = getPosition(i, outputAssets.length);
                return (
                  <motion.div
                    key={asset.id}
                    className="absolute w-16 h-16 rounded-lg bg-gradient-to-br border border-slate-200 shadow-sm flex items-center justify-center cursor-pointer hover:shadow-md transition-shadow"
                    style={{
                      backgroundImage: `linear-gradient(135deg, ${asset.color}15, ${asset.color}05)`,
                      left: x - 32,
                      top: y - 32,
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                      scale: phase >= 2 ? 1 : 0.85,
                      opacity: phase >= 2 ? 1 : 0.5,
                      x: phase < 2 ? -160 : 0,
                      y: phase < 2 ? -160 : 0,
                    }}
                    transition={{
                      duration: 0.4,
                      delay: 0.6 + i * 0.08,
                    }}
                    title={asset.name}
                  >
                    <FileIcon type={asset.icon} size={28} />
                  </motion.div>
                );
              })}

              {/* Output Label */}
              <motion.div
                className="absolute inset-0 flex items-end justify-center pb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: phase >= 2 ? 1 : 0 }}
                transition={{ duration: 0.4 }}
              >
                <span className="text-xs font-semibold text-green-600 uppercase tracking-wider">
                  Ready to Deploy
                </span>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-slate-300"
              animate={{
                backgroundColor: phase === i ? "#3b82f6" : "#cbd5e1",
                scale: phase === i ? 1.2 : 1,
              }}
              transition={{ duration: 0.3 }}
            />
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="mt-8 grid grid-cols-3 gap-4">
        <div className="rounded-xl bg-slate-50 p-4 border border-slate-200">
          <p className="text-2xl font-bold text-slate-900">48h</p>
          <p className="text-xs text-slate-600 mt-1">Live from contract</p>
        </div>
        <div className="rounded-xl bg-slate-50 p-4 border border-slate-200">
          <p className="text-2xl font-bold text-slate-900">5+ formats</p>
          <p className="text-xs text-slate-600 mt-1">Output types</p>
        </div>
        <div className="rounded-xl bg-slate-50 p-4 border border-slate-200">
          <p className="text-2xl font-bold text-slate-900">0 rebuilds</p>
          <p className="text-xs text-slate-600 mt-1">Required</p>
        </div>
      </div>
    </div>
  );
}
