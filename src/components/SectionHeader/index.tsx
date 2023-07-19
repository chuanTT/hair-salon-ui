import { FC } from "react";

export interface SectionHeaderProps {
  title?: string;
  desc?: string;
}

const SectionHeader: FC<SectionHeaderProps> = ({ title, desc }) => {
  return (
    <>
      {title && <h2 className="text-center text-4xl max-375:text-3xl">{title}</h2>}
      {desc && (
        <div className="relative text-center mt-3">
          <span className="text-base italic text-orange-400">— {desc} —</span>
        </div>
      )}
    </>
  );
};

export default SectionHeader;
