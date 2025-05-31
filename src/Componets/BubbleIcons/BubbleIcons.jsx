import React, { useRef } from "react";
import { motion } from "framer-motion";
import "./BubbleIcons.css";

const icons = Array.from({ length: 100 }, (_, i) => ({
  id: i,
  emoji: ["🍎", "🍔", "🍕", "🍣", "🍩", "🍇", "🥑", "🥐", "🍪", "🍓", "🥦", "🧀"][i % 12],
}));

function BubbleIcons() {
  const constraintsRef = useRef(null);

  return (
    <div className="pageContainer" ref={constraintsRef}>
      <motion.div
        className="watchGrid"
        drag
        dragConstraints={constraintsRef}
        dragElastic={0.15}
      >
        {icons.map((icon) => (
          <motion.div
            key={icon.id}
            className="iconBubble"
            whileTap={{ scale: 1.8 }}
          >
            {icon.emoji}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default BubbleIcons;
