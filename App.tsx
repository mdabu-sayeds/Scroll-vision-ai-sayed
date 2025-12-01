
import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { PreviewPlayer } from './components/PreviewPlayer';
import { INITIAL_CONFIG, VideoConfig } from './types';

export default function App() {
  const [config, setConfig] = useState<VideoConfig>(INITIAL_CONFIG);

  return (
    <div className="flex h-screen w-screen bg-[#0f172a] overflow-hidden">
      {/* Left Configuration Panel */}
      <Sidebar config={config} onChange={setConfig} />
      
      {/* Right Preview Panel - Passed onChange for Watermark Dragging */}
      <PreviewPlayer config={config} onChange={setConfig} />
    </div>
  );
}
