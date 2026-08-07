import React from "react";
import type { LucideIcon } from "lucide-react";
import Icon from "../../../../../components/Icon";

interface IconCardProps {
  icon: LucideIcon;
}

/**
 * IconCard Component
 * Displays an icon inside a circular gradient background
 * Responsive sizing:
 * - sm: circle 40x40, icon 18px
 * - md: circle 44x44, icon 20px
 * - lg: circle 46x46, icon 22px
 * - xl: circle 48x48, icon 23px
 * - 2xl/3xl: circle 50x50, icon 24px
 */
const IconCard: React.FC<IconCardProps> = ({ icon }) => {
  return (
    <div className="px-3 py-3">
      <div
        className="flex items-center justify-center icon-circle-gradient rounded-full
          w-10 h-10
          md:w-11 md:h-11
          lg:w-[46px] lg:h-[46px]
          xl:w-12 xl:h-12
          2xl:w-[50px] 2xl:h-[50px]
          3xl:w-14 3xl:h-14"
      >
        <Icon
          type="lucide-icon-svg"
          icon={icon}
          className="w-[45%] h-[45%]"
          color="#60a5fa"
          strokeWidth={2}
        />
      </div>
    </div>
  );
};

export default IconCard;
